import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { FeaturedTreatmentsSection } from "@/components/home/FeaturedTreatmentsSection";
import { ConditionsSection } from "@/components/home/ConditionsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { VideoShowcaseSection } from "@/components/home/VideoShowcaseSection";
import { PatientJourneySection } from "@/components/home/PatientJourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";
import { ClinicLocationsSection } from "@/components/home/ClinicLocationsSection";

export const metadata: Metadata = {
  title: "Orthopedic Doctor in Jaipur | Dr. Ankit Jaipal | Arthrogenix",
  description:
    "Dr. Ankit Jaipal is a Consultant Orthopaedics & AR joint replacement specialist in Jaipur. Computer-navigated knee replacement, ACL/PCL reconstruction, shoulder arthroscopy & sports care. Full RGHS & cashless at Sevayatan Hospital.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section with IMG-04 and Dual Action CTAs */}
      <HeroSection />

      {/* 2. Verified Clinical Accreditation & Credentials Strip */}
      <TrustStrip />

      {/* 3. Doctor Introduction & Philosophy */}
      <DoctorIntroSection />

      {/* 4. Surgical Specialties & Joint Care */}
      <FeaturedTreatmentsSection />

      {/* 5. Conditions Directory with Direct Guides */}
      <ConditionsSection />

      {/* 6. Why Choose Dr. Ankit Jaipal */}
      <WhyChooseUsSection />

      {/* 7. Advanced Surgical Technology & OT Infrastructure */}
      <FacilitiesSection />

      {/* 8. Dedicated Video Showcase & OT Precision */}
      <VideoShowcaseSection />

      {/* 9. Structured Patient Treatment Pathway */}
      <PatientJourneySection />

      {/* 10. Clinical Care Pathway & Ethical Standards */}
      <TestimonialsSection />

      {/* 11. Frequently Asked Questions */}
      <FaqSection />

      {/* 12. Latest Patient Educational Articles */}
      <BlogPreviewSection />

      {/* 13. Prominent Appointment Booking Banner */}
      <AppointmentCtaSection />

      {/* 14. Clinic Locations & Consultation Details */}
      <ClinicLocationsSection />
    </div>
  );
}
