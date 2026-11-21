"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MessageSquare,
  Award,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
  ArrowRight,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function HeroSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white py-12 sm:py-16 lg:py-20 border-b border-[#DCE5EF]">
      {/* Subtle architectural ambient lights */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#102D4F]/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-[#DCE5EF] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F47721] animate-pulse" />
              <Stethoscope className="w-3.5 h-3.5 text-[#F47721]" />
              <span className="text-xs font-semibold text-[#102D4F]">
                Consultant Orthopaedics &amp; AR Joint Replacement
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#102D4F] tracking-tight leading-[1.12]">
              Restoring <span className="text-[#F47721]">Motion</span> for Athletes &amp; Everyday Heroes
            </h1>

            <p className="text-base sm:text-lg text-[#52647A] max-w-xl leading-relaxed">
              Specialized orthopaedic care led by <strong className="text-[#102D4F]">Dr. Ankit Jaipal</strong>. Combining computer-navigated surgical precision, minimally invasive joint preservation, and structured rehabilitation in Jaipur.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto shadow-md shadow-[#F47721]/20"
              >
                Book Consultation
              </Button>

              <Link
                href="/treatments"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-[#DCE5EF] bg-white text-[#102D4F] hover:text-[#F47721] hover:border-[#F47721] font-bold text-sm sm:text-base shadow-xs transition-all duration-200 w-full sm:w-auto group"
              >
                <span>Explore Treatments</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-[#F47721]" />
              </Link>

              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-transparent text-[#25D366] hover:bg-[#25D366]/10 text-xs sm:text-sm font-semibold transition-colors w-full sm:w-auto"
                title="Chat with clinic on WhatsApp"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366] fill-[#25D366]/20" />
                <span>WhatsApp Query</span>
              </a>
            </div>

            {/* Trust Features Badge */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-[#52647A] border-t border-[#DCE5EF]/70">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
                <span className="font-semibold text-[#102D4F]">OPD at Durgapura &amp; Sevayatan Hospital</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F47721] shrink-0" />
                <span className="font-semibold text-[#102D4F]">RGHS &amp; Cashless Insurance Empaneled</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with AR Headset */}
          <div className="lg:col-span-5 relative flex justify-center w-full min-w-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              {/* Subtle backdrop halo */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-[#102D4F]/20 via-[#F47721]/15 to-transparent rounded-3xl blur-md -z-10" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#102D4F]/5 to-[#F5F8FB]">
                <Image
                  src="/images/doctor/dr-ankit-jaipal-ar-navigation-front.jpeg"
                  alt="Dr. Ankit Jaipal - Consultant Orthopaedics & AR Navigation Knee Replacement Surgeon"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 400px"
                />

                {/* Top credential badge */}
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md border border-[#DCE5EF] rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
                  <span className="text-[11px] font-bold text-[#102D4F]">
                    SMS Medical College Alumnus
                  </span>
                </div>

                {/* Bottom AR Navigation badge */}
                <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md border border-[#DCE5EF] rounded-2xl p-3 shadow-lg flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center text-[#F47721] shrink-0">
                    <Award className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-extrabold text-[#102D4F] leading-tight">
                      Pixee AR Navigation Certified
                    </p>
                    <p className="text-[11px] text-[#52647A] font-medium leading-tight truncate">
                      Sub-Millimeter Knee Alignment Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
