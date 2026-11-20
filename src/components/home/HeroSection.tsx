"use client";

import React from "react";
import Image from "next/image";
import {
  Calendar,
  MessageSquare,
  Award,
  CheckCircle2,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function HeroSection() {
  const { openModal } = useAppointmentModal();
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white py-10 sm:py-14 lg:py-20 border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full min-w-0">
          {/* Left Column: Headlines & Actions */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 w-full min-w-0">
            <Badge
              variant="subtle"
              icon={<Stethoscope className="w-3.5 h-3.5 text-[#F47721]" />}
              className="bg-white border-[#DCE5EF] text-[#102D4F] font-semibold shadow-xs"
            >
              {CLINIC_INFO.eyebrow}
            </Badge>

            <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#102D4F] tracking-tight leading-[1.12]">
              Restoring <span className="text-[#F47721]">Motion</span>
              <br />
              for Athletes &amp;
              <br />
              Everyday Heroes
            </h1>

            <p className="text-base sm:text-lg text-[#52647A] max-w-xl leading-relaxed">
              {CLINIC_INFO.subHeadline}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 pt-2">
              <Button
                onClick={() => openModal()}
                variant="primary"
                size="lg"
                icon={<Calendar className="w-5 h-5" />}
                className="w-full sm:w-auto"
              >
                Book Appointment
              </Button>

              <Button
                href={CLINIC_INFO.whatsappLink}
                isExternal
                variant="white"
                size="lg"
                icon={<MessageSquare className="w-5 h-5 text-[#25D366]" />}
                className="w-full sm:w-auto border-[#DCE5EF] text-[#102D4F] hover:border-[#F47721]"
              >
                Chat on WhatsApp
              </Button>
            </div>

            {/* Trust Features Badge */}
            <div className="pt-3 sm:pt-4 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-6 text-xs sm:text-sm text-[#52647A]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
                <span className="font-medium">OPD at Durgapura &amp; Sevayatan Hospital</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#F47721] shrink-0" />
                <span className="font-medium">RGHS &amp; Cashless Empanelled</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with AR Headset matching Mockup */}
          <div className="lg:col-span-5 relative flex justify-center w-full min-w-0">
            <div className="relative w-full max-w-[340px] sm:max-w-[420px] aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#102D4F]/5 to-[#F5F8FB]">
              <Image
                src="/images/doctor/dr-ankit-jaipal-ar-navigation-front.jpeg"
                alt="Dr. Ankit Jaipal - Consultant Orthopaedics & AR Navigation Knee Replacement Surgeon"
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 640px) 340px, (max-width: 1024px) 380px, 420px"
              />

              {/* Mockup-Matching Arch Overlay Badge */}
              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm border border-[#DCE5EF] rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-[#FFF4EB] flex items-center justify-center text-[#F47721] shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[11px] font-bold text-[#102D4F] leading-tight">
                    AR Navigation
                  </p>
                  <p className="text-[10px] text-[#52647A] leading-tight">
                    &amp; Joint Specialist
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

