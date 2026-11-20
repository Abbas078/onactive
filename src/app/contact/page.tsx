import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Contact Arthrogenix | Dr. Ankit Jaipal Jaipur",
  description:
    "Get in touch with Dr. Ankit Jaipal's clinic in Durgapura and Sevayatan Hospital, Jaipur. Phone, WhatsApp, directions, and OPD hours.",
};

export default function ContactPage() {
  return (
    <PlaceholderPage
      title="Contact & OPD Timings"
      category="Direct Clinical Assistance"
      phaseNumber={7}
      description="Connect directly with our care coordination team for consultations, MRI second opinions, surgery inquiries, and emergency guidance."
      upcomingFeatures={[
        "Interactive Google Maps for Durgapura and Vaishali Nagar clinics",
        "Direct one-click Calling and WhatsApp dispatch",
        "Structured contact inquiry form with patient privacy safeguards",
        "Clear OPD hours and hospital admission directions",
      ]}
    />
  );
}

