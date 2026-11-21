import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import { verifyAdminAuth, sanitizeString } from "@/lib/security";
import { AppointmentStatus } from "@/types/backend";

const ALLOWED_STATUSES: AppointmentStatus[] = [
  "Pending",
  "Contacted",
  "Confirmed",
  "Rescheduled",
  "Completed",
  "Cancelled",
];

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

/**
 * PATCH /api/appointments/[id] - Update appointment status (Admin only)
 */
export async function PATCH(req: NextRequest, { params }: RouteContext) {
  if (!verifyAdminAuth(req)) {
    return NextResponse.json(
      { success: false, error: "Unauthorized. Admin credentials required." },
      { status: 401 }
    );
  }

  try {
    const { id } = await params;
    const body = await req.json();

    const status = sanitizeString(body.status) as AppointmentStatus;
    const notes = sanitizeString(body.notes);

    if (!ALLOWED_STATUSES.includes(status)) {
      return NextResponse.json(
        {
          success: false,
          error: `Invalid status. Must be one of: ${ALLOWED_STATUSES.join(", ")}`,
        },
        { status: 400 }
      );
    }

    const db = await getDatabase();
    const collection = db.collection("appointments");

    // Match either by MongoDB _id or by human-readable referenceNumber
    let filter: Record<string, unknown>;
    if (ObjectId.isValid(id)) {
      filter = { $or: [{ _id: new ObjectId(id) }, { referenceNumber: id }] };
    } else {
      filter = { referenceNumber: id };
    }

    const updateDoc: Record<string, unknown> = {
      status,
      updatedAt: new Date(),
    };

    if (notes !== undefined) {
      updateDoc.notes = notes;
    }

    const result = await collection.findOneAndUpdate(
      filter,
      { $set: updateDoc },
      { returnDocument: "after" }
    );

    if (!result) {
      return NextResponse.json(
        { success: false, error: "Appointment not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Appointment status updated to '${status}'.`,
      data: result,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Error in PATCH /api/appointments/[id]:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Internal server error updating appointment." },
      { status: 500 }
    );
  }
}

