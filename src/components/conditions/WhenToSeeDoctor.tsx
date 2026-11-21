"use client";

import React from "react";
import { AlertTriangle, Clock, ShieldAlert, PhoneCall } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { CLINIC_INFO } from "@/constants/clinicInfo";

const RED_FLAGS = [
  {
    title: "Acute Inability to Bear Weight",
    description: "Inability to take even a few steps immediately following a slip, twist, athletic collision, or fall.",
  },
  {
    title: "Mechanical Joint Locking",
    description: "The knee or shoulder physically catches or locks in a bent position and cannot be straightened without manual manipulation.",
  },
  {
    title: "Rapid Joint Swelling within 2 Hours",
    description: "Tense swelling developing within hours of trauma suggests haemarthrosis (internal bleeding from an acute ligament tear or fracture).",
  },
  {
    title: "Visible Deformity or Bone Displacement",
    description: "Asymmetry, abnormal joint contour, or bone protrusion following traumatic injury requiring urgent radiographic stabilization.",
  },
  {
    title: "Numbness, Tingling or Foot Drop",
    description: "Neurological deficits, loss of sensation, or shooting electrical pain extending down the leg or arm.",
  },
  {
    title: "Severe Night Pain Unrelieved by Rest",
    description: "Constant, deep-seated aching that interrupts sleep and does not respond to conservative positional changes.",
  },
];

export function WhenToSeeDoctor() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold tracking-wide uppercase mb-3">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>CLINICAL TRIAGE GUIDELINES</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102D4F] tracking-tight">
              When Should You Consult an Orthopaedic Specialist?
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#52647A] leading-relaxed">
              While mild muscle soreness often improves with conservative rest and cold packs, certain symptoms signal significant internal joint or ligament injury that requires timely clinical and radiological evaluation.
            </p>
          </div>

          {/* Red Flag Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
            {RED_FLAGS.map((flag, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] hover:border-rose-300 hover:shadow-xs transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center mb-3">
                    <AlertTriangle className="w-4 h-4" />
                  </div>
                  <h3 className="text-sm font-bold text-[#102D4F] mb-1.5 leading-snug">
                    {flag.title}
                  </h3>
                  <p className="text-xs text-[#52647A] leading-relaxed">
                    {flag.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-[#DCE5EF]/60 text-[11px] font-bold text-rose-700 uppercase tracking-wider flex items-center gap-1">
                  <Clock className="w-3 h-3" /> Requires Specialist Evaluation
                </div>
              </div>
            ))}
          </div>

          {/* Emergency / Specialist Banner */}
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-[#102D4F] to-[#0A1C33] text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-xs font-bold tracking-wider uppercase text-[#F47721]">
                PROMPT EVALUATION SAVES NATIVE CARTILAGE
              </div>
              <h3 className="text-lg sm:text-xl font-bold leading-snug">
                Concerned about an acute injury or chronic pain?
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl">
                Consult Dr. Ankit Jaipal at Sevayatan Multispeciality Hospital or Arthrogenix Clinic Jaipur for thorough physical examination and imaging review.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <Button
                onClick={() => openModal("Orthopaedic Clinical Evaluation")}
                variant="primary"
                size="md"
                className="font-bold shadow-md shadow-[#F47721]/20"
              >
                Book Consultation
              </Button>
              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-white/20 text-white hover:bg-white/10 text-xs font-bold transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#F47721]" />
                <span>Call Clinic</span>
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
