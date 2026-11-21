import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import {
  checkRateLimit,
  verifyAdminAuth,
  generateReferenceNumber,
  sanitizeString,
} from "@/lib/security";
import { sendAppointmentNotificationEmails } from "@/lib/email";
import { AppointmentDocument, AppointmentStatus } from "@/types/backend";

/**
 * POST /api/appointments - Submit an appointment request (Public)
 */
export async function POST(req: NextRequest) {
  // 1. Rate Limiting Check
  const rateLimit = checkRateLimit(req, 10, 60000);
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many requests. Please wait a minute before submitting again.",
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // 2. Spam Honeypot Protection
    if (body.website || body.honeypot) {
      // Silently discard bot submissions
      return NextResponse.json(
        { success: true, referenceNumber: "AGX-SPAM-FILTERED" },
        { status: 200 }
      );
    }

    // 3. Server-side Validation
    const name = sanitizeString(body.name);
    const phone = sanitizeString(body.phone);
    const email = sanitizeString(body.email);
    const location = sanitizeString(body.location);
    const preferredDate = sanitizeString(body.preferredDate);
    const preferredTime = sanitizeString(body.preferredTime || "No preference");
    const reason = sanitizeString(body.reason || "General Orthopaedic Consultation");
    const consent = Boolean(body.consent);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Patient name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    // Basic 10-digit Indian phone or international format validation
    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "A valid phone number with at least 10 digits is required." },
        { status: 400 }
      );
    }

    if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address or leave it blank." },
        { status: 400 }
      );
    }

    if (!location) {
      return NextResponse.json(
        { success: false, error: "Preferred clinic location is required." },
        { status: 400 }
      );
    }

    if (!preferredDate) {
      return NextResponse.json(
        { success: false, error: "Preferred appointment date is required." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "You must accept the terms and provide consent for appointment contact." },
        { status: 400 }
      );
    }

    // 4. Connect to Database
    const db = await getDatabase();
    const collection = db.collection<AppointmentDocument>("appointments");

    // 5. Duplicate Submission Prevention (within last 3 minutes for same phone & date)
    const threeMinutesAgo = new Date(Date.now() - 3 * 60 * 1000);
    const existingDuplicate = await collection.findOne({
      phone: cleanPhone,
      preferredDate,
      createdAt: { $gte: threeMinutesAgo },
    });

    if (existingDuplicate) {
      return NextResponse.json(
        {
          success: false,
          error: `An appointment request for this phone number and date was already received recently (Ref: ${existingDuplicate.referenceNumber}). Our coordinator will call you.`,
          referenceNumber: existingDuplicate.referenceNumber,
        },
        { status: 409 }
      );
    }

    // 6. Generate Unique Human-Readable Reference
    const referenceNumber = generateReferenceNumber("AGX");

    const newAppointment: AppointmentDocument = {
      referenceNumber,
      patientName: name,
      phone: cleanPhone,
      email: email || undefined,
      preferredLocation: location,
      preferredDate,
      preferredTime,
      reasonForConsultation: reason,
      consent,
      status: "Pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await collection.insertOne(newAppointment);

    // 7. Trigger Background Email Notification (Non-blocking)
    sendAppointmentNotificationEmails(newAppointment).catch((err) =>
      console.error("Email notification dispatch error:", err)
    );

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        status: "Pending",
        message:
          "Appointment request submitted successfully. Our clinic coordinator will contact you to confirm the exact slot.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Database error in POST /api/appointments:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Could not record appointment. Please try again or call the clinic directly.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/appointments - Retrieve appointment requests (Authorized Administrators only)
 */
export async function GET(req: NextRequest) {
  // 1. Verify Admin Authentication
  if (!verifyAdminAuth(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized. Admin credentials required." },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") as AppointmentStatus | null;
    const location = searchParams.get("location");
    const search = searchParams.get("search");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const db = await getDatabase();
    const collection = db.collection<AppointmentDocument>("appointments");

    // Build filter query
    const filter: Record<string, unknown> = {};
    if (status) {
      filter.status = status;
    }
    if (location) {
      filter.preferredLocation = { $regex: location, $options: "i" };
    }
    if (search) {
      filter.$or = [
        { patientName: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { referenceNumber: { $regex: search, $options: "i" } },
      ];
    }

    const total = await collection.countDocuments(filter);
    const appointments = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray();

    return NextResponse.json({
      success: true,
      total,
      page,
      limit,
      totalPages: Math.ceil(total / limit),
      data: appointments,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Database error in GET /api/appointments:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching appointments." },
      { status: 500 }
    );
  }
}

