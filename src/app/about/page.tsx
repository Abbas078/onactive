import React from "react";
import { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutBio } from "@/components/about/AboutBio";
import { EducationCertifications } from "@/components/about/EducationCertifications";
import { SkillsMatrix } from "@/components/about/SkillsMatrix";
import { AcademicResearch } from "@/components/about/AcademicResearch";
import { CareerTimeline } from "@/components/about/CareerTimeline";
import { DoctorVideoSection } from "@/components/about/DoctorVideoSection";
import { PersonalInterests } from "@/components/about/PersonalInterests";
import { AboutCta } from "@/components/about/AboutCta";

export const metadata: Metadata = {
  title: "About Dr. Ankit Jaipal | Consultant Orthopaedics Jaipur",
  description:
    "Learn about Dr. Ankit Jaipal (MS Orthopaedics, SMS Medical College Jaipur), Consultant Orthopaedics at Sevayatan Multispeciality Hospital. Specialized in AR knee replacement, arthroscopy, and complex trauma.",
  keywords: [
    "Dr Ankit Jaipal",
    "Consultant Orthopaedics Jaipur",
    "SMS Medical College Orthopaedic Surgeon",
    "Sevayatan Multispeciality Hospital Jaipur",
    "TKR Surgeon Jaipur",
    "AR Knee Replacement Specialist",
    "Arthroscopy Doctor Jaipur",
  ],
  openGraph: {
    title: "About Dr. Ankit Jaipal | Consultant Orthopaedics Jaipur",
    description:
      "Explore the clinical qualifications, MS Orthopaedics from SMS Jaipur, triple fellowship credentials, and hospital appointments of Dr. Ankit Jaipal.",
    url: "https://arthrogenix.in/about",
    siteName: "Arthrogenix",
    locale: "en_IN",
    type: "profile",
  },
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full overflow-x-hidden">
      {/* 1. Hero & Professional Credentials */}
      <AboutHero />

      {/* 2. Meet the Surgeon & Practice Philosophy */}
      <AboutBio />

      {/* 3. Education & Fellowship Certifications */}
      <EducationCertifications />

      {/* 4. Clinical Skills & Surgical Expertise Matrix */}
      <SkillsMatrix />

      {/* 5. Doctor Video Message */}
      <DoctorVideoSection />

      {/* 6. Professional Career & Hospital Appointments Timeline */}
      <CareerTimeline />

      {/* 7. Research, Publications & Conference Presentations */}
      <AcademicResearch />

      {/* 8. Languages & Personal Pursuits */}
      <PersonalInterests />

      {/* 9. Direct Consultation Booking CTA */}
      <AboutCta />
    </div>
  );
}
