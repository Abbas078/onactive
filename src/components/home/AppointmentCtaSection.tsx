"use client";

import React from "react";
import { Calendar, MessageSquare, Phone, ShieldCheck, Clock, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function AppointmentCtaSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-[#102D4F] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <Container>
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#FFF4EB]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Dedicated Sports Medicine, Arthroscopy &amp; Joint Replacement</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Ready to Move <span className="text-[#F47721]">Pain-Free</span> and
            <br className="hidden sm:inline" /> Regain Your Active Mobility?
          </h2>

          <p className="text-sm sm:text-lg text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a comprehensive orthopaedic evaluation with <strong className="text-white">Dr. Ankit Jaipal</strong> in Jaipur. Discuss your symptoms, review your MRI scans, and receive an objective, transparent treatment plan.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-4 pt-3">
            <Button
              onClick={() => openModal()}
              variant="primary"
              size="lg"
              icon={<Calendar className="w-5 h-5" />}
              className="w-full sm:w-auto text-base font-bold shadow-lg shadow-[#F47721]/30"
            >
              Book Consultation
            </Button>

            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white text-[#102D4F] hover:bg-neutral-100 text-base font-bold shadow-sm transition-all w-full sm:w-auto"
            >
              <MessageSquare className="w-5 h-5 text-[#25D366] fill-[#25D366]/20" />
              <span>WhatsApp Us</span>
            </a>

            <a
              href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl border border-white/30 hover:border-white text-white hover:bg-white/10 text-base font-semibold transition-all w-full sm:w-auto"
            >
              <Phone className="w-5 h-5 text-[#F47721]" />
              <span>Call Clinic Desk</span>
            </a>
          </div>

          {/* Quick info reassurance strip */}
          <div className="pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs text-neutral-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F47721]" />
              <span>{CLINIC_INFO.opdTimings}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#F47721]" />
              <span>Durgapura OPD &amp; Sevayatan Hospital</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F47721]" />
              <span>100% Cashless &amp; RGHS Empaneled</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
