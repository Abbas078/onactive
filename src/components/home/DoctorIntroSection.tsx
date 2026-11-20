"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Clock, ArrowRight, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DOCTOR_PROFILE } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function DoctorIntroSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-16 sm:py-24 bg-white border-b border-[#DCE5EF] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Portrait matching mockup layout */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[390px]">
              {/* Decorative warm orange curve backdrop matching original mockup */}
              <div className="absolute -top-3 -left-3 w-40 h-40 bg-[#F47721] rounded-3xl -z-10 opacity-90 hidden sm:block" />
              <div className="absolute -bottom-4 -right-4 w-48 h-48 bg-[#F5F8FB] border border-[#DCE5EF] rounded-3xl -z-10 hidden sm:block" />

              {/* Main Photo Card */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-[#F5F8FB]">
                <Image
                  src="/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg"
                  alt="Dr. Ankit Jaipal - Consultant Orthopaedics"
                  fill
                  sizes="(max-width: 640px) 340px, 390px"
                  className="object-cover object-top hover:scale-102 transition-transform duration-500"
                  priority
                />

                {/* Floating Experience Badge matching mockup */}
                <div className="absolute bottom-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-[#DCE5EF] flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center text-[#F47721] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-base font-extrabold text-[#102D4F] leading-none">
                      15+ Years
                    </div>
                    <div className="text-[10px] font-medium text-[#52647A] mt-0.5">
                      Clinical Background
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Clean Bio & Credentials matching mockup */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#F47721]" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#F47721]">
                  ABOUT THE DOCTOR
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[40px] font-extrabold text-[#102D4F] tracking-tight leading-tight">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="mt-1.5 text-sm sm:text-base font-semibold text-[#52647A]">
                {DOCTOR_PROFILE.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
              A leading Consultant Orthopaedics in Jaipur, Dr. Ankit Jaipal specializes in arthroscopy, sports injury management, ligament reconstruction (ACL/PCL), and advanced computer-navigated joint replacements. Known for an evidence-based, patient-centric approach with surgical precision and guided rehabilitation.
            </p>

            {/* 4 Core Clinical Highlights matching mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              {[
                "Specialist in Arthroscopy & Sports Injuries",
                "Experienced in ACL / PCL Reconstruction",
                "Expertise in Knee & Shoulder Surgeries",
                "Evidence-based, Personalized Treatment",
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-[#102D4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Horizontal Credentials Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 pb-2 border-t border-b border-[#DCE5EF]">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                  <GraduationCap className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102D4F]">MBBS, MS (Ortho)</div>
                  <div className="text-[11px] text-[#52647A]">SMS Medical College</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102D4F]">Fellowship</div>
                  <div className="text-[11px] text-[#52647A]">Arthroscopy &amp; Arthroplasty</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-[#102D4F]">Hospital Partner</div>
                  <div className="text-[11px] text-[#52647A]">Sevayatan Hospital</div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Button
                href="/about"
                variant="orangeOutline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-semibold"
              >
                Know More About Doctor
              </Button>

              <Button
                onClick={() => openModal()}
                variant="primary"
                size="md"
                className="font-semibold shadow-md shadow-[#F47721]/20"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
