import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Orthopaedic Conditions Directory",
  description:
    "Explore common knee, shoulder, and sports injury conditions diagnosed and treated by Dr. Ankit Jaipal in Jaipur.",
};

export default function ConditionsPage() {
  return (
    <PlaceholderPage
      title="Conditions & Symptoms Directory"
      category="Patient Education"
      phaseNumber={6}
      description="Patient-friendly directory of sports injuries, joint instability, ligament tears, and chronic wear-and-tear conditions."
      upcomingFeatures={[
        "Knee conditions: ACL tears, Meniscus tears, cartilage injuries, osteoarthritis",
        "Shoulder conditions: Rotator cuff tears, recurrent dislocations, frozen shoulder",
        "Self-assessment symptom guides & red flags for immediate medical attention",
        "Direct link between conditions and recommended arthroscopic solutions",
      ]}
    />
  );
}

