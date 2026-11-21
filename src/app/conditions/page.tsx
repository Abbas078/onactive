import { Metadata } from "next";
import { ConditionsHero } from "@/components/conditions/ConditionsHero";
import { ConditionsDirectory } from "@/components/conditions/ConditionsDirectory";
import { WhenToSeeDoctor } from "@/components/conditions/WhenToSeeDoctor";
import { ConditionsFaq } from "@/components/conditions/ConditionsFaq";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

export const metadata: Metadata = {
  title: "Orthopaedic Conditions Directory | Dr. Ankit Jaipal - Jaipur",
  description:
    "Patient symptom and condition guide for knee pain, ACL tears, meniscus injuries, rotator cuff tears, shoulder dislocations, sports injuries and trauma. Expert orthopaedic care by Dr. Ankit Jaipal in Jaipur.",
  alternates: {
    canonical: "https://arthrogenix.in/conditions",
  },
  openGraph: {
    title: "Orthopaedic Conditions Directory | Dr. Ankit Jaipal Jaipur",
    description:
      "Explore clinical symptoms, diagnostic evaluation, conservative pathways, and surgical criteria for 12 common joint conditions.",
    url: "https://arthrogenix.in/conditions",
    siteName: "Arthrogenix - Dr. Ankit Jaipal",
    locale: "en_IN",
    type: "website",
  },
};

export default function ConditionsPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Section */}
      <ConditionsHero />

      {/* 2. Interactive Searchable Condition Directory */}
      <ConditionsDirectory />

      {/* 3. When to Consult a Specialist / Red Flags */}
      <WhenToSeeDoctor />

      {/* 4. Frequently Asked Questions */}
      <ConditionsFaq />

      {/* 5. Appointment CTA Banner */}
      <AppointmentCtaSection />
    </main>
  );
}
