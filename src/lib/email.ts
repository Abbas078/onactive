import nodemailer from "nodemailer";
import { AppointmentDocument, ContactEnquiryDocument } from "@/types/backend";

// Create reusable transporter object using SMTP transport
function getMailTransporter() {
  const host = process.env.SMTP_HOST;
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    return null;
  }

  return nodemailer.createTransport({
    host,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user,
      pass,
    },
  });
}

/**
 * Dispatch notification emails for new appointment requests
 */
export async function sendAppointmentNotificationEmails(
  appointment: AppointmentDocument
): Promise<{ clinicSent: boolean; patientSent: boolean; error?: string }> {
  const transporter = getMailTransporter();

  if (!transporter) {
    console.info(
      `[SMTP Notice] Email credentials not configured. Appointment ${appointment.referenceNumber} logged without SMTP delivery.`
    );
    return { clinicSent: false, patientSent: false, error: "SMTP_NOT_CONFIGURED" };
  }

  const fromEmail = process.env.SMTP_FROM || "no-reply@arthrogenix.in";
  const clinicEmail =
    process.env.CLINIC_NOTIFICATION_EMAIL || "dr.ankitjaipal@gmail.com";

  let clinicSent = false;
  let patientSent = false;

  try {
    // 1. Notify clinic coordinator
    await transporter.sendMail({
      from: fromEmail,
      to: clinicEmail,
      subject: `[New Appointment Request] ${appointment.referenceNumber} - ${appointment.patientName}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #102D4F;">
          <h2 style="color: #102D4F; border-bottom: 2px solid #F47721; padding-bottom: 8px;">
            New Consultation Request
          </h2>
          <p>A new appointment request has been submitted through the Arthrogenix website:</p>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 6px; font-weight: bold; width: 140px;">Reference:</td><td style="padding: 6px;">${appointment.referenceNumber}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Patient Name:</td><td style="padding: 6px;">${appointment.patientName}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Phone:</td><td style="padding: 6px;"><a href="tel:${appointment.phone}">${appointment.phone}</a></td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Email:</td><td style="padding: 6px;">${appointment.email || "Not provided"}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Preferred Location:</td><td style="padding: 6px;">${appointment.preferredLocation}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Preferred Date:</td><td style="padding: 6px;">${appointment.preferredDate}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Preferred Time:</td><td style="padding: 6px;">${appointment.preferredTime}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Reason:</td><td style="padding: 6px;">${appointment.reasonForConsultation}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Status:</td><td style="padding: 6px;"><span style="color: #F47721; font-weight: bold;">${appointment.status}</span></td></tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #52647A;">
            Please contact the patient during OPD hours to confirm slot availability.
          </p>
        </div>
      `,
    });
    clinicSent = true;

    // 2. Acknowledge patient if email provided
    if (appointment.email) {
      await transporter.sendMail({
        from: fromEmail,
        to: appointment.email,
        subject: `Appointment Request Received (${appointment.referenceNumber}) - Dr. Ankit Jaipal`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; color: #102D4F;">
            <h2 style="color: #102D4F; border-bottom: 2px solid #F47721; padding-bottom: 8px;">
              Appointment Request Received
            </h2>
            <p>Dear ${appointment.patientName},</p>
            <p>Thank you for reaching out to Dr. Ankit Jaipal at Arthrogenix. Your consultation request has been recorded with reference <strong>${appointment.referenceNumber}</strong>.</p>
            <div style="background: #FFF4EB; border-left: 4px solid #F47721; padding: 12px; margin: 16px 0; font-size: 13px;">
              <strong>Important Notice:</strong> This request is pending review and is <strong>not yet confirmed</strong>. Our clinic coordinator will call you shortly on <strong>${appointment.phone}</strong> to confirm your exact appointment timing.
            </div>
            <p style="font-size: 13px;">Requested Clinic: <strong>${appointment.preferredLocation}</strong><br/>Requested Date: <strong>${appointment.preferredDate} (${appointment.preferredTime})</strong></p>
            <p style="font-size: 12px; color: #52647A; margin-top: 20px;">
              For urgent questions, you may contact our clinic desk at +91 96100 26600.
            </p>
          </div>
        `,
      });
      patientSent = true;
    }
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Failed to send appointment emails:", errorMsg);
    return { clinicSent, patientSent, error: errorMsg };
  }

  return { clinicSent, patientSent };
}

/**
 * Dispatch notification emails for new general contact enquiries
 */
export async function sendContactNotificationEmails(
  enquiry: ContactEnquiryDocument
): Promise<{ clinicSent: boolean; error?: string }> {
  const transporter = getMailTransporter();

  if (!transporter) {
    console.info(
      `[SMTP Notice] Email credentials not configured. Contact enquiry ${enquiry.referenceNumber} logged without SMTP delivery.`
    );
    return { clinicSent: false, error: "SMTP_NOT_CONFIGURED" };
  }

  const fromEmail = process.env.SMTP_FROM || "no-reply@arthrogenix.in";
  const clinicEmail =
    process.env.CLINIC_NOTIFICATION_EMAIL || "dr.ankitjaipal@gmail.com";

  try {
    await transporter.sendMail({
      from: fromEmail,
      to: clinicEmail,
      subject: `[Website Contact Enquiry] ${enquiry.subject} - ${enquiry.name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; color: #102D4F;">
          <h2 style="color: #102D4F; border-bottom: 2px solid #F47721; padding-bottom: 8px;">
            New Website Enquiry
          </h2>
          <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
            <tr><td style="padding: 6px; font-weight: bold; width: 140px;">Reference:</td><td style="padding: 6px;">${enquiry.referenceNumber}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Name:</td><td style="padding: 6px;">${enquiry.name}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Phone:</td><td style="padding: 6px;"><a href="tel:${enquiry.phone}">${enquiry.phone}</a></td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Email:</td><td style="padding: 6px;">${enquiry.email}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Subject:</td><td style="padding: 6px;">${enquiry.subject}</td></tr>
            <tr><td style="padding: 6px; font-weight: bold;">Message:</td><td style="padding: 6px;">${enquiry.message}</td></tr>
          </table>
        </div>
      `,
    });
    return { clinicSent: true };
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    console.error("Failed to send contact notification email:", errorMsg);
    return { clinicSent: false, error: errorMsg };
  }
}

