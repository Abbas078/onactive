import React from "react";
import { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { DoctorIntroSection } from "@/components/home/DoctorIntroSection";
import { ExpertiseSection } from "@/components/home/ExpertiseSection";
import { FeaturedTreatmentsSection } from "@/components/home/FeaturedTreatmentsSection";
import { ConditionsSection } from "@/components/home/ConditionsSection";
import { WhyChooseUsSection } from "@/components/home/WhyChooseUsSection";
import { FacilitiesSection } from "@/components/home/FacilitiesSection";
import { PatientJourneySection } from "@/components/home/PatientJourneySection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { FaqSection } from "@/components/home/FaqSection";
import { BlogPreviewSection } from "@/components/home/BlogPreviewSection";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";
import { ClinicLocationsSection } from "@/components/home/ClinicLocationsSection";
import { VideoShowcaseSection } from "@/components/home/VideoShowcaseSection";

export const metadata: Metadata = {
  title: "Orthopedic Doctor in Jaipur | Dr. Ankit Jaipal | Arthrogenix",
  description:
    "Dr. Ankit Jaipal is a leading orthopedic doctor in Jaipur & AR joint replacement specialist. Knee pain, TKR, ACL/PCL reconstruction, shoulder arthroscopy & complex trauma. RGHS & cashless at Sevayatan Hospital.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Verified Trust Indicators */}
      <TrustStrip />

      {/* 3. Doctor Introduction */}
      <DoctorIntroSection />

      {/* 4. Orthopaedic Expertise & Specialties */}
      <ExpertiseSection />

      {/* 5. Featured Treatments & Surgeries */}
      <FeaturedTreatmentsSection />

      {/* 6. Conditions Treated with Patient Assessment Links */}
      <ConditionsSection />

      {/* 7. Why Choose Arthrogenix */}
      <WhyChooseUsSection />

      {/* 8. Advanced Medical Facilities & Technology */}
      <FacilitiesSection />

      {/* 9. Dedicated Video Showcase & OT Precision */}
      <VideoShowcaseSection />

      {/* 10. Patient Treatment Journey */}
      <PatientJourneySection />

      {/* 11. Patient Testimonials & Google Reviews */}
      <TestimonialsSection />

      {/* 12. Frequently Asked Questions */}
      <FaqSection />

      {/* 13. Latest Orthopaedic Articles */}
      <BlogPreviewSection />

      {/* 14. Prominent Appointment Booking Banner */}
      <AppointmentCtaSection />

      {/* 15. Clinic Locations & Consultation Details */}
      <ClinicLocationsSection />
    </div>
  );
}
