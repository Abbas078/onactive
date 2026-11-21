export type AppointmentStatus =
  | "Pending"
  | "Contacted"
  | "Confirmed"
  | "Rescheduled"
  | "Completed"
  | "Cancelled";

export interface AppointmentDocument {
  _id?: string;
  referenceNumber: string;
  patientName: string;
  phone: string;
  email?: string;
  preferredLocation: string;
  preferredDate: string;
  preferredTime: string;
  reasonForConsultation: string;
  consent: boolean;
  status: AppointmentStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export type ContactEnquiryStatus =
  | "New"
  | "Reviewed"
  | "Replied"
  | "Archived";

export interface ContactEnquiryDocument {
  _id?: string;
  referenceNumber: string;
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  status: ContactEnquiryStatus;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

