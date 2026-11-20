import React from "react";
import { Metadata } from "next";
import { TreatmentsHero } from "@/components/treatments/TreatmentsHero";
import { TreatmentsGrid } from "@/components/treatments/TreatmentsGrid";
import { WhySurgeryWithDrAnkit } from "@/components/treatments/WhySurgeryWithDrAnkit";
import { SurgicalJourney } from "@/components/treatments/SurgicalJourney";
import { TreatmentsFaq } from "@/components/treatments/TreatmentsFaq";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

export const metadata: Metadata = {
  title: "Orthopaedic Treatments & Surgeries | Dr. Ankit Jaipal Jaipur",
  description:
    "Explore specialized orthopaedic treatments by Dr. Ankit Jaipal: AR Computer-Navigated Knee Replacement, Shoulder Arthroscopy, ACL/PCL Reconstruction, and Sports Joint Care in Jaipur.",
  keywords: [
    "Orthopaedic Treatments Jaipur",
    "Knee Surgery Jaipur",
    "Shoulder Arthroscopy Jaipur",
    "ACL Reconstruction Jaipur",
    "Joint Replacement Jaipur",
    "Dr Ankit Jaipal",
    "Sevayatan Hospital Orthopaedics",
  ],
  openGraph: {
    title: "Orthopaedic Treatments & Surgeries | Dr. Ankit Jaipal",
    description:
      "Comprehensive index of minimally invasive arthroscopic and joint reconstruction procedures performed by Dr. Ankit Jaipal in Jaipur.",
    url: "https://arthrogenix.in/treatments",
    siteName: "Arthrogenix",
    locale: "en_IN",
    type: "website",
  },
};

export default function TreatmentsPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <TreatmentsHero />

      {/* 2. Filterable Treatments Grid */}
      <TreatmentsGrid />

      {/* 3. Why Choose Dr. Ankit Jaipal for Surgical Care */}
      <WhySurgeryWithDrAnkit />

      {/* 4. Consultation & Surgical Journey */}
      <SurgicalJourney />

      {/* 5. Frequently Asked Questions */}
      <TreatmentsFaq />

      {/* 6. Prominent Appointment Booking Banner */}
      <AppointmentCtaSection />
    </div>
  );
}
