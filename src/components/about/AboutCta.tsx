"use client";

import React from "react";
import { Calendar, MessageSquare, Phone, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { DR_ANKIT_CV } from "@/constants/doctorCv";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function AboutCta() {
  const { openModal } = useAppointmentModal();
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#102D4F] via-[#0E2643] to-[#0A1C33] py-14 sm:py-20 text-white">
      {/* Decorative background glows */}
      <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-[#F47721]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />

      <Container className="relative z-10 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold text-orange-200">
            <span>Direct Orthopaedic Consultation</span>
          </div>

          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
            Consult <span className="text-[#F47721]">{DR_ANKIT_CV.personalInfo.name}</span> in Jaipur
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a thorough clinical evaluation, second opinion on MRI imaging, or discuss computer-navigated joint replacement and arthroscopic options.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button
              onClick={() => openModal()}
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
              className="w-full sm:w-auto shadow-lg shadow-orange-950/40"
            >
              Book an Appointment
            </Button>

            <Button
              href={CLINIC_INFO.whatsappLink}
              isExternal
              variant="white"
              size="lg"
              icon={<MessageSquare className="w-5 h-5 text-[#25D366]" />}
              className="w-full sm:w-auto text-[#102D4F]"
            >
              Chat on WhatsApp
            </Button>

            <Button
              href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
              variant="outline"
              size="lg"
              icon={<Phone className="w-5 h-5 text-[#F47721]" />}
              className="w-full sm:w-auto border-white/20 text-white hover:border-[#F47721] hover:text-[#F47721]"
            >
              Call {DR_ANKIT_CV.personalInfo.phone}
            </Button>
          </div>

          {/* Trust points */}
          <div className="pt-6 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
              <span>OPD at Durgapura &amp; Sevayatan Hospital</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
              <span>Full RGHS &amp; Cashless Insurance Empanelled</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
              <span>No Prior Referral Required</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
