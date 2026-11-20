import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Orthopaedic & Sports Health Blog | Arthrogenix",
  description:
    "Evidence-based articles on knee pain, ACL tear recovery, AR joint replacement, sports rehabilitation, and modern joint preservation by Dr. Ankit Jaipal.",
};

export default function BlogPage() {
  return (
    <PlaceholderPage
      title="Health Blog & Patient Guides"
      category="Medical Insights"
      phaseNumber={8}
      description="Doctor-verified articles designed to help patients understand sports injuries, recovery timelines, rehabilitation exercises, and advancements in arthroscopic surgery."
      upcomingFeatures={[
        "Categorized articles (Knee, Shoulder, Sports Medicine, Post-Op Care)",
        "Reading time, verified author attribution, and medical disclaimers",
        "Search and tag filters for easy condition discovery",
        "Related clinical guides and instant consultation hooks",
      ]}
    />
  );
}

