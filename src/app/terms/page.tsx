import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Terms of Use | Arthrogenix",
  description: "Terms and conditions of website use for Arthrogenix Clinic.",
};

export default function TermsPage() {
  return (
    <PlaceholderPage
      title="Terms of Use"
      category="Website Compliance"
      phaseNumber={7}
      description="Standard medical terms of use clarifying website educational content, appointment scheduling, and doctor-patient relationship commencement."
      upcomingFeatures={[
        "Clarification on informational medical content vs. direct clinical emergency care",
        "Guidelines for online consultation inquiries",
        "Intellectual property and clinic trademark protections",
      ]}
    />
  );
}

