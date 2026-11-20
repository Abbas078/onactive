import React from "react";
import { CheckCircle2, Hospital, FileText } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TreatmentDetail } from "@/constants/treatmentsData";

interface ProcedureBreakdownProps {
  treatment: TreatmentDetail;
}

export function ProcedureBreakdown({ treatment }: ProcedureBreakdownProps) {
  return (
    <section className="py-16 md:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        {/* Sub-section A: When is Surgery Considered? */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Clinical Criteria
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              When Is Surgical Intervention Considered?
            </h2>
            <p className="text-sm md:text-base text-[#52647A] max-w-2xl mx-auto">
              Dr. Ankit Jaipal follows strict, evidence-based criteria before recommending surgical repair or joint reconstruction.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DCE5EF] shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {treatment.whenSurgeryConsidered.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-[#F5F8FB]">
                  <CheckCircle2 className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
                  <span className="text-sm text-[#102D4F] font-medium leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[#DCE5EF] flex items-center gap-3 text-xs text-[#52647A]">
              <FileText className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>
                Final surgical indications are validated against pre-operative MRI/CT scans and patient-specific functional goals.
              </span>
            </div>
          </div>
        </div>

        {/* Sub-section B: Step-by-Step Surgical Overview */}
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
              Procedural Overview
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              Surgical Procedure Breakdown
            </h3>
            <p className="text-sm md:text-base text-[#52647A] max-w-2xl mx-auto">
              {treatment.procedureOverview.summary}
            </p>
          </div>

          <div className="space-y-4">
            {treatment.procedureOverview.steps.map((step) => (
              <div
                key={step.number}
                className="bg-white rounded-2xl p-6 border border-[#DCE5EF] shadow-sm flex flex-col sm:flex-row items-start gap-5"
              >
                <div className="w-12 h-12 rounded-xl bg-[#102D4F] text-white flex items-center justify-center font-bold text-lg shrink-0">
                  {step.number}
                </div>
                <div className="space-y-1.5 flex-1">
                  <h4 className="text-base font-bold text-[#102D4F]">
                    {step.title}
                  </h4>
                  <p className="text-sm text-[#52647A] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Hospital OT Environment Note */}
          <div className="mt-8 bg-white border border-[#DCE5EF] rounded-2xl p-6 shadow-sm flex items-start gap-4">
            <div className="p-3 bg-[#102D4F]/10 text-[#102D4F] rounded-xl shrink-0">
              <Hospital className="w-6 h-6 text-[#102D4F]" />
            </div>
            <div className="space-y-1">
              <h5 className="text-sm font-bold text-[#102D4F]">
                NABH Operation Theatre Standards & Patient Safety
              </h5>
              <p className="text-xs text-[#52647A] leading-relaxed">
                All surgical procedures are conducted at Sevayatan Multispeciality Hospital, Jaipur, adhering to international aseptic protocols, ultra-clean laminar airflow, specialized orthopaedic instrumentation, and round-the-clock anaesthetic monitoring.
              </p>
              <p className="text-[11px] text-[#F47721] font-semibold pt-1">
                {treatment.procedureOverview.clinicalNote}
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
