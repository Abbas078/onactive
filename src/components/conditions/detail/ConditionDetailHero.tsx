"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Calendar, PhoneCall, ShieldCheck, Stethoscope, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionDetailHeroProps {
  condition: ConditionDetail;
}

export function ConditionDetailHero({ condition }: ConditionDetailHeroProps) {
  const { openModal } = useAppointmentModal();

  return (
    <section className="relative pt-6 pb-12 sm:pt-8 sm:pb-16 bg-gradient-to-b from-[#F5F8FB] via-white to-white border-b border-[#DCE5EF] overflow-hidden">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-[#52647A] mb-6 overflow-x-auto pb-1 scrollbar-none">
          <Link href="/" className="hover:text-[#F47721] transition-colors shrink-0">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#8C9AA8] shrink-0" />
          <Link href="/conditions" className="hover:text-[#F47721] transition-colors shrink-0">
            Conditions
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#8C9AA8] shrink-0" />
          <span className="text-[#102D4F] font-bold truncate">
            {condition.title}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Heading, Badges, Summary */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721] bg-[#FFF4EB] border border-[#FDE8D7] px-3 py-1 rounded-full">
                {condition.category} Condition Guide
              </span>
              <span
                className={`text-[11px] font-bold px-2.5 py-1 rounded-full ${
                  condition.urgency === "Urgent Trauma Care"
                    ? "bg-rose-50 text-rose-700 border border-rose-200"
                    : condition.urgency === "Prompt Specialist Review"
                    ? "bg-amber-50 text-amber-800 border border-amber-200"
                    : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                }`}
              >
                {condition.urgency}
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-tight">
              {condition.title}
            </h1>

            <p className="text-base sm:text-lg text-[#52647A] leading-relaxed">
              {condition.subtitle}
            </p>

            {/* Quick 3 Clinical Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#102D4F] mb-0.5">
                  <Stethoscope className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Clinical Exam</span>
                </div>
                <div className="text-[11px] text-[#52647A]">Joint line &amp; stability tests</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#102D4F] mb-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Conservative First</span>
                </div>
                <div className="text-[11px] text-[#52647A]">Physiotherapy &amp; targeted rest</div>
              </div>

              <div className="p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs">
                <div className="flex items-center gap-2 text-xs font-bold text-[#102D4F] mb-0.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Specialist Review</span>
                </div>
                <div className="text-[11px] text-[#52647A]">Dr. Ankit Jaipal, Jaipur</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-4">
              <Button
                onClick={() => openModal(`Consultation for ${condition.title}`)}
                variant="primary"
                size="md"
                className="font-bold shadow-md shadow-[#F47721]/20"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Clinical Evaluation
              </Button>

              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#DCE5EF] bg-white text-[#102D4F] hover:bg-[#F5F8FB] hover:border-[#102D4F]/30 text-xs sm:text-sm font-bold transition-all shadow-2xs"
              >
                <PhoneCall className="w-4 h-4 text-[#F47721]" />
                <span>Call {CLINIC_INFO.primaryPhone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-[#DCE5EF] shadow-lg bg-[#F5F8FB]">
              <Image
                src={condition.image}
                alt={condition.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/70 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#F47721]">
                  PATIENT EDUCATION
                </div>
                <div className="text-sm font-bold leading-snug drop-shadow-xs">
                  Evidence-based diagnosis and joint preservation in Jaipur
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
