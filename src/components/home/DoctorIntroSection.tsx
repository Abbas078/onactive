"use client";

import React from "react";
import Image from "next/image";
import { Award, GraduationCap, Building2, ArrowRight, CheckCircle2, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DOCTOR_PROFILE } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function DoctorIntroSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#DCE5EF] overflow-hidden">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Portrait & High-Contrast Credential Pills */}
          <div className="lg:col-span-5 relative flex flex-col items-center">
            <div className="relative w-full max-w-[360px] sm:max-w-[400px]">
              {/* Clean architectural depth */}
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F5F8FB] ring-1 ring-[#DCE5EF]">
                <Image
                  src="/images/doctor/dr-ankit-jaipal-standing-scrubs.jpeg"
                  alt="Dr. Ankit Jaipal - Consultant Orthopaedics & AR Knee Surgeon"
                  fill
                  sizes="(max-width: 640px) 360px, 400px"
                  className="object-cover object-center"
                  priority
                />

                {/* Subtle verified surgeon badge */}
                <div className="absolute top-3.5 right-3.5 bg-white/95 backdrop-blur-md rounded-xl px-3 py-1.5 shadow-md border border-[#DCE5EF] flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-[11px] font-bold text-[#102D4F]">Active Clinical Practice</span>
                </div>
              </div>

              {/* 3 High-Contrast Credential Blocks */}
              <div className="grid grid-cols-3 gap-2.5 mt-4">
                <div className="bg-[#F5F8FB] border border-[#DCE5EF] rounded-2xl p-2.5 text-center shadow-2xs hover:border-[#F47721]/40 transition-colors">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center mb-1">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#102D4F] leading-tight">SMS Jaipur</div>
                  <div className="text-[10px] font-semibold text-[#52647A] mt-0.5">MBBS, MS (Ortho)</div>
                </div>

                <div className="bg-[#F5F8FB] border border-[#DCE5EF] rounded-2xl p-2.5 text-center shadow-2xs hover:border-[#F47721]/40 transition-colors">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center mb-1">
                    <Award className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#102D4F] leading-tight">Fellowship</div>
                  <div className="text-[10px] font-semibold text-[#52647A] mt-0.5">Joints &amp; AR</div>
                </div>

                <div className="bg-[#F5F8FB] border border-[#DCE5EF] rounded-2xl p-2.5 text-center shadow-2xs hover:border-[#F47721]/40 transition-colors">
                  <div className="w-7 h-7 mx-auto rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center mb-1">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <div className="text-xs font-bold text-[#102D4F] leading-tight">Sevayatan</div>
                  <div className="text-[10px] font-semibold text-[#52647A] mt-0.5">Hospital Partner</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio, Philosophy & Verified Clinical Points */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#F47721]" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#F47721]">
                  ABOUT THE DOCTOR
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#102D4F] tracking-tight leading-tight">
                {DOCTOR_PROFILE.name}
              </h2>
              <p className="mt-2 text-sm sm:text-base font-semibold text-[#F47721]">
                {DOCTOR_PROFILE.title}
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
              Dr. Ankit Jaipal is a Consultant Orthopaedics in Jaipur with specialized fellowship training in joint replacement, sports injury management, and cutting-edge AR computer-navigated knee surgeries. He provides evidence-based orthopaedic care focused on preserving the native joint whenever possible and achieving precision outcomes when replacement is necessary.
            </p>

            {/* Doctor Philosophy Callout Box */}
            <div className="relative border-l-4 border-[#F47721] bg-[#FFF4EB]/50 rounded-r-2xl p-4 sm:p-5 border-y border-r border-[#FDE8D7]">
              <p className="text-xs sm:text-sm text-[#102D4F] italic leading-relaxed font-medium">
                &ldquo;{DOCTOR_PROFILE.quote}&rdquo;
              </p>
            </div>

            {/* 4 Core Clinical Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 py-1">
              {[
                "Consultant Orthopaedics at Sevayatan Multispeciality Hospital",
                "MS Orthopaedics from SMS Medical College, Jaipur",
                "Pixee Medical AR Navigation Certified Knee Surgeon",
                "Evidence-based, tissue-sparing joint preservation",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#102D4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-3">
              <Button
                href="/about"
                variant="orangeOutline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-bold border-[#F47721] text-[#F47721] hover:bg-[#F47721] hover:text-white"
              >
                Know More About Doctor
              </Button>

              <Button
                onClick={() => openModal()}
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                className="font-bold shadow-md shadow-[#F47721]/20"
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
