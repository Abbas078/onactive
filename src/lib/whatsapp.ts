/**
 * WhatsApp coordinator workflow helper
 * Generates direct click-to-chat links for patients and clinic staff
 */

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919610026600";

/**
 * Generate a patient click-to-chat link with prefilled reference details
 */
export function getPatientWhatsAppLink(params: {
  referenceNumber: string;
  name: string;
  preferredDate?: string;
  location?: string;
}): string {
  const text = `Hello Arthrogenix Clinic, my name is ${params.name}. I recently submitted an appointment request with Reference Number: ${params.referenceNumber}${
    params.location ? ` for ${params.location}` : ""
  }${
    params.preferredDate ? ` on ${params.preferredDate}` : ""
  }. Could you please confirm slot availability?`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate a coordinator response link to message the patient directly
 */
export function getCoordinatorWhatsAppFollowupLink(params: {
  patientPhone: string;
  patientName: string;
  referenceNumber: string;
}): string {
  // Clean phone number (strip spaces, dashes, plus)
  let cleanPhone = params.patientPhone.replace(/[^\d]/g, "");
  if (cleanPhone.length === 10) {
    cleanPhone = `91${cleanPhone}`;
  }

  const text = `Hello ${params.patientName}, this is the coordinator at Dr. Ankit Jaipal's clinic (Arthrogenix). Regarding your appointment request ${params.referenceNumber}, we would like to confirm your consultation schedule.`;

  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
}

