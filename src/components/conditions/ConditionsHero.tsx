import React from "react";
import { Container } from "@/components/ui/Container";
import { Activity, ShieldCheck, Stethoscope } from "lucide-react";

export function ConditionsHero() {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#F5F8FB] via-white to-white border-b border-[#DCE5EF] overflow-hidden">
      {/* Background subtle radial elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-80 h-80 bg-[#102D4F]/5 rounded-full blur-3xl pointer-events-none" />

      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FDE8D7] text-[#F47721] text-xs font-bold tracking-wide uppercase mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>CLINICAL SYMPTOM &amp; JOINT DIRECTORY</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-tight">
            Orthopaedic Conditions &amp; <br className="hidden sm:block" />
            <span className="text-[#F47721]">Symptom Guide</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#52647A] leading-relaxed">
            Clear, patient-centered medical explanations of knee, shoulder, hip, sports injuries, and acute trauma. Learn about common symptoms, clinical evaluation methods, and evidence-based non-surgical and surgical care pathways.
          </p>

          {/* Quick Pillars */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-xs">
              <Stethoscope className="w-4 h-4 text-[#F47721] shrink-0" />
              <span className="text-xs font-bold text-[#102D4F]">Evidence-Based Triage</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-xs">
              <ShieldCheck className="w-4 h-4 text-[#F47721] shrink-0" />
              <span className="text-xs font-bold text-[#102D4F]">Conservative-First Care</span>
            </div>
            <div className="flex items-center justify-center gap-2.5 p-3 rounded-xl bg-white border border-[#DCE5EF] shadow-xs">
              <Activity className="w-4 h-4 text-[#F47721] shrink-0" />
              <span className="text-xs font-bold text-[#102D4F]">Joint Preservation Focus</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

