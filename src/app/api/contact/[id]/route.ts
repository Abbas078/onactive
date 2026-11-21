import { NextRequest, NextResponse } from "next/server";
import { ObjectId } from "mongodb";
import { getDatabase } from "@/lib/mongodb";
import { verifyAdminAuth, sanitizeString } from "@/lib/security";
import { ContactEnquiryStatus } from "@/types/backend";

const ALLOWED_STATUSES: ContactEnquiryStatus[] = [
  "New",
  "Reviewed",
  "Replied",
  "Archived",
];

interface RouteContext {
  params: Promise<{
    id: string;
  }>;
}

/**
 * PATCH /api/contact/[id] - Update contact enquiry status (Admin only)
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

    const status = sanitizeString(body.status) as ContactEnquiryStatus;
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
    const collection = db.collection("contact_enquiries");

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
        { success: false, error: "Contact enquiry not found." },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      message: `Enquiry status updated to '${status}'.`,
      data: result,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Error in PATCH /api/contact/[id]:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Internal server error updating enquiry." },
      { status: 500 }
    );
  }
}

