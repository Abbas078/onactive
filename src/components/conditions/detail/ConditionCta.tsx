"use client";

import React from "react";
import { Calendar, PhoneCall, MapPin, ShieldCheck, Clock, Award } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionCtaProps {
  condition: ConditionDetail;
}

export function ConditionCta({ condition }: ConditionCtaProps) {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-14 sm:py-20 bg-gradient-to-b from-[#F5F8FB] to-white">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Main Card */}
          <div className="rounded-3xl bg-gradient-to-br from-[#102D4F] via-[#0E2643] to-[#0A1C33] text-white p-7 sm:p-10 lg:p-12 shadow-xl relative overflow-hidden">
            {/* Background decorative glow */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#F47721]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: Heading, Context, Value Props */}
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#F47721] text-xs font-bold uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>SPECIALIST EVALUATION</span>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight">
                  Discuss Your {condition.title} with Dr. Ankit Jaipal
                </h2>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Accurate joint recovery starts with a thorough physical exam and imaging review. Get personalized guidance on whether conservative physical conditioning or targeted minimally invasive care is right for you.
                </p>

                {/* Location & Timing Quick Info */}
                <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Sevayatan Hospital</div>
                      <div>Pratap Nagar, Jaipur (RGHS Empaneled)</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-white">Arthrogenix Clinic</div>
                      <div>Durgapura, Jaipur (OPD Consultations)</div>
                    </div>
                  </div>
                </div>

                {/* Badges strip */}
                <div className="pt-2 flex flex-wrap items-center gap-3 text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <Award className="w-3.5 h-3.5 text-[#F47721]" />
                    MS Orthopaedics, SMS Jaipur
                  </span>
                  <span>&bull;</span>
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-[#F47721]" />
                    Mon - Sat 10:00 AM - 5:00 PM
                  </span>
                </div>
              </div>

              {/* Right Column: CTA Action Box */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/15 space-y-4">
                <div className="text-center">
                  <div className="text-sm font-bold text-white">
                    Request an OPD Consultation
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Direct confirmation with clinic desk
                  </div>
                </div>

                <div className="space-y-2.5">
                  <Button
                    onClick={() => openModal(`Evaluation for ${condition.title}`)}
                    variant="primary"
                    size="lg"
                    className="w-full font-bold justify-center shadow-lg shadow-[#F47721]/30"
                    icon={<Calendar className="w-4 h-4" />}
                  >
                    Book Appointment Now
                  </Button>

                  <a
                    href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                    className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-white text-[#102D4F] hover:bg-slate-100 text-xs font-bold transition-all"
                  >
                    <PhoneCall className="w-4 h-4 text-[#F47721]" />
                    <span>Call Clinic: {CLINIC_INFO.primaryPhone}</span>
                  </a>
                </div>

                <div className="text-[11px] text-center text-slate-300 leading-normal">
                  RGHS and private health insurance cashless facilities accepted.
                </div>
              </div>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF] text-[11px] text-[#52647A] leading-relaxed text-center">
            <strong className="text-[#102D4F]">Medical Disclaimer: </strong>
            This content is published exclusively for patient education and informational purposes. It does not constitute medical advice or a binding treatment plan. Specific diagnosis, imaging interpretation, and surgical necessity require an in-person clinical examination by a qualified orthopaedic surgeon. In the event of high-impact trauma, visible joint deformity, or acute neurovascular distress, seek immediate emergency hospital medical care.
          </div>
        </div>
      </Container>
    </section>
  );
}
