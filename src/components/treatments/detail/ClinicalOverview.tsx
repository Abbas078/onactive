import React from "react";
import { AlertCircle, CheckCircle2, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TreatmentDetail } from "@/constants/treatmentsData";

interface ClinicalOverviewProps {
  treatment: TreatmentDetail;
}

export function ClinicalOverview({ treatment }: ClinicalOverviewProps) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section Header */}
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Clinical Context & Understanding
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-4">
              Understanding {treatment.title}
            </h2>
            <p className="text-base md:text-lg text-[#52647A] leading-relaxed">
              {treatment.clinicalIntro}
            </p>
          </div>

          {/* Prominent Medical Disclaimer Alert Box */}
          <div className="bg-[#FFF8F2] border border-[#F47721]/30 rounded-2xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-[#F47721]/10 rounded-xl text-[#F47721] shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5" />
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-[#102D4F] uppercase tracking-wide flex items-center gap-2">
                  <span>Medical Information & Clinical Notice</span>
                  <span className="text-[10px] bg-[#F47721] text-white px-2 py-0.5 rounded font-semibold normal-case">
                    Patient Education Only
                  </span>
                </h3>
                <p className="text-xs md:text-sm text-[#52647A] leading-relaxed">
                  The clinical information provided on this page is intended strictly for patient education and awareness. It does not constitute medical advice or establish a doctor-patient relationship. Every joint injury and patient anatomy is unique. Treatment decisions, whether non-surgical rehabilitation or surgical intervention, are determined solely following comprehensive physical examination, functional stability testing, and high-resolution diagnostic imaging by Dr. Ankit Jaipal.
                </p>
              </div>
            </div>
          </div>

          {/* Three Clinical Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="p-5 rounded-xl border border-[#DCE5EF] bg-[#F5F8FB]">
              <div className="w-9 h-9 rounded-lg bg-[#102D4F]/10 text-[#102D4F] flex items-center justify-center font-bold mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#102D4F]" />
              </div>
              <h4 className="font-bold text-[#102D4F] text-sm mb-1">
                Conservative First
              </h4>
              <p className="text-xs text-[#52647A] leading-relaxed">
                Surgery is never the automatic first step. When conservative therapy can restore function, it is prioritized.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#DCE5EF] bg-[#F5F8FB]">
              <div className="w-9 h-9 rounded-lg bg-[#F47721]/10 text-[#F47721] flex items-center justify-center font-bold mb-3">
                <ShieldAlert className="w-5 h-5 text-[#F47721]" />
              </div>
              <h4 className="font-bold text-[#102D4F] text-sm mb-1">
                Joint Preservation
              </h4>
              <p className="text-xs text-[#52647A] leading-relaxed">
                Surgical techniques focus on preserving native cartilage, suturing repairable menisci, and anatomical reconstruction.
              </p>
            </div>

            <div className="p-5 rounded-xl border border-[#DCE5EF] bg-[#F5F8FB]">
              <div className="w-9 h-9 rounded-lg bg-[#102D4F]/10 text-[#102D4F] flex items-center justify-center font-bold mb-3">
                <CheckCircle2 className="w-5 h-5 text-[#102D4F]" />
              </div>
              <h4 className="font-bold text-[#102D4F] text-sm mb-1">
                Hospital-Grade OT
              </h4>
              <p className="text-xs text-[#52647A] leading-relaxed">
                All procedures are conducted in NABH-accredited sterile laminar airflow operation theatres at Sevayatan Hospital.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

