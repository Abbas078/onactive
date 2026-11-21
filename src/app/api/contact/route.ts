import { NextRequest, NextResponse } from "next/server";
import { getDatabase } from "@/lib/mongodb";
import {
  checkRateLimit,
  verifyAdminAuth,
  generateReferenceNumber,
  sanitizeString,
} from "@/lib/security";
import { sendContactNotificationEmails } from "@/lib/email";
import { ContactEnquiryDocument, ContactEnquiryStatus } from "@/types/backend";

/**
 * POST /api/contact - Submit general contact enquiry (Public)
 */
export async function POST(req: NextRequest) {
  // 1. Rate Limiting Check
  const rateLimit = checkRateLimit(req, 10, 60000);
  if (!rateLimit.success) {
    return NextResponse.json(
      {
        success: false,
        error: "Too many messages sent. Please wait a minute before trying again.",
      },
      { status: 429 }
    );
  }

  try {
    const body = await req.json();

    // 2. Honeypot check
    if (body.website || body.honeypot) {
      return NextResponse.json(
        { success: true, referenceNumber: "ENQ-SPAM-FILTERED" },
        { status: 200 }
      );
    }

    // 3. Validation
    const name = sanitizeString(body.name);
    const phone = sanitizeString(body.phone);
    const email = sanitizeString(body.email);
    const subject = sanitizeString(body.subject || "General Enquiry");
    const message = sanitizeString(body.message);
    const consent = Boolean(body.consent);

    if (!name || name.length < 2) {
      return NextResponse.json(
        { success: false, error: "Name is required (minimum 2 characters)." },
        { status: 400 }
      );
    }

    const cleanPhone = phone.replace(/[^\d+]/g, "");
    if (!cleanPhone || cleanPhone.length < 10) {
      return NextResponse.json(
        { success: false, error: "A valid phone number with at least 10 digits is required." },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { success: false, error: "A valid email address is required." },
        { status: 400 }
      );
    }

    if (!message || message.length < 10) {
      return NextResponse.json(
        { success: false, error: "Please enter a descriptive message (minimum 10 characters)." },
        { status: 400 }
      );
    }

    if (!consent) {
      return NextResponse.json(
        { success: false, error: "Please provide consent for clinic communication." },
        { status: 400 }
      );
    }

    // 4. Connect to DB & Duplicate check
    const db = await getDatabase();
    const collection = db.collection<ContactEnquiryDocument>("contact_enquiries");

    const twoMinutesAgo = new Date(Date.now() - 2 * 60 * 1000);
    const existing = await collection.findOne({
      email,
      createdAt: { $gte: twoMinutesAgo },
    });

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: "A message from this email was already received recently. Our team will get back to you shortly.",
        },
        { status: 409 }
      );
    }

    const referenceNumber = generateReferenceNumber("ENQ");

    const newEnquiry: ContactEnquiryDocument = {
      referenceNumber,
      name,
      phone: cleanPhone,
      email,
      subject,
      message,
      consent,
      status: "New",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    await collection.insertOne(newEnquiry);

    // 5. Trigger email dispatch in background
    sendContactNotificationEmails(newEnquiry).catch((err) =>
      console.error("Contact email dispatch error:", err)
    );

    return NextResponse.json(
      {
        success: true,
        referenceNumber,
        message: "Your message has been received. Our clinic team will reach out during OPD hours.",
      },
      { status: 201 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Database error in POST /api/contact:", errorMsg);
    return NextResponse.json(
      {
        success: false,
        error: "Internal server error. Could not record enquiry. Please contact the clinic directly.",
      },
      { status: 500 }
    );
  }
}

/**
 * GET /api/contact - List contact enquiries (Admin only)
 */
export async function GET(req: NextRequest) {
  if (!verifyAdminAuth(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized. Admin credentials required." },
      { status: 401 }
    );
  }

  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") as ContactEnquiryStatus | null;
    const search = searchParams.get("search");
    const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
    const limit = Math.min(50, Math.max(1, parseInt(searchParams.get("limit") || "20", 10)));
    const skip = (page - 1) * limit;

    const db = await getDatabase();
    const collection = db.collection<ContactEnquiryDocument>("contact_enquiries");

    const filter: Record<string, unknown> = {};
    if (status) {
      filter.status = status;
    }
    if (search) {
      filter.$or = [
        { name: { $regex: search, $options: "i" } },
        { email: { $regex: search, $options: "i" } },
        { phone: { $regex: search, $options: "i" } },
        { subject: { $regex: search, $options: "i" } },
        { referenceNumber: { $regex: search, $options: "i" } },
      ];
    }

    const total = await collection.countDocuments(filter);
    const enquiries = await collection
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
      data: enquiries,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Database error in GET /api/contact:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Internal server error fetching enquiries." },
      { status: 500 }
    );
  }
}

