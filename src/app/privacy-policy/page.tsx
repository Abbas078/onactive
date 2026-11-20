import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Arthrogenix",
  description: "Privacy policy and patient confidentiality terms for Arthrogenix Clinic.",
};

export default function PrivacyPolicyPage() {
  return (
    <PlaceholderPage
      title="Privacy Policy"
      category="Patient Data Confidentiality"
      phaseNumber={7}
      description="Arthrogenix is committed to protecting patient confidentiality and personal health data in full adherence with applicable Indian healthcare compliance standards."
      upcomingFeatures={[
        "Patient information protection and safe handling of MRI scans/reports",
        "Zero unauthorized data sharing or advertising disclosures",
        "Clear data retention and communication consent policies",
      ]}
    />
  );
}

