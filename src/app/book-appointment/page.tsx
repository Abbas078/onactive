import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Ankit Jaipal (Consultant Orthopaedics)",
  description:
    "Schedule your orthopaedic consultation with Dr. Ankit Jaipal in Jaipur. Convenient OPD slots at Durgapura and Sevayatan Hospital.",
};

export default function BookAppointmentPage() {
  return (
    <PlaceholderPage
      title="Book a Consultation"
      category="Appointment Scheduling"
      phaseNumber={7}
      description="Easy and secure appointment booking for sports injuries, persistent joint pain, ACL evaluations, and second opinions."
      upcomingFeatures={[
        "Step-by-step patient appointment request form",
        "Clinic location preference selector (Durgapura vs. Vaishali Nagar)",
        "Preferred date, morning/evening slot selection",
        "WhatsApp / SMS confirmation workflow",
      ]}
    />
  );
}

