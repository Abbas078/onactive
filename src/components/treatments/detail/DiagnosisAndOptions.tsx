import React from "react";
import { Stethoscope, CheckCircle, ShieldCheck, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TreatmentDetail } from "@/constants/treatmentsData";

interface DiagnosisAndOptionsProps {
  treatment: TreatmentDetail;
}

export function DiagnosisAndOptions({ treatment }: DiagnosisAndOptionsProps) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        {/* Section 1: Diagnostic Evaluation */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Accurate Assessment
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              Diagnostic & Clinical Evaluation
            </h2>
            <p className="text-sm md:text-base text-[#52647A] max-w-2xl mx-auto">
              Before any treatment path is selected, Dr. Ankit Jaipal conducts a thorough multi-modal clinical and radiological evaluation.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {treatment.diagnosisAndEvaluation.map((diag, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-[#DCE5EF] bg-[#F5F8FB] flex items-start gap-3"
              >
                <div className="p-2 bg-white rounded-lg text-[#102D4F] border border-[#DCE5EF] shrink-0 mt-0.5">
                  <Stethoscope className="w-4 h-4 text-[#F47721]" />
                </div>
                <div>
                  <span className="text-xs font-bold text-[#102D4F] uppercase tracking-wider">
                    Diagnostic Step 0{idx + 1}
                  </span>
                  <p className="text-sm text-[#102D4F] font-medium mt-1 leading-snug">
                    {diag}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Treatment Options (Conservative vs Surgical) */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
              Treatment Pathways
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              Non-Surgical Care vs. Surgical Indications
            </h3>
            <p className="text-sm md:text-base text-[#52647A] max-w-2xl mx-auto">
              Every patient receives an individualized plan. Conservative measures are the first line of care whenever medically appropriate.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Non-Surgical Pathway */}
            <div className="rounded-2xl border-2 border-emerald-200 bg-emerald-50/20 p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-emerald-200">
                  <div className="p-2.5 bg-emerald-100 text-emerald-700 rounded-xl">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                      Primary Approach
                    </span>
                    <h4 className="text-lg font-bold text-[#102D4F]">
                      Non-Surgical & Conservative Care
                    </h4>
                  </div>
                </div>

                <div className="space-y-4">
                  {treatment.treatmentOptions.nonSurgical.map((opt, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-emerald-100 shadow-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
                        <h5 className="text-sm font-bold text-[#102D4F]">{opt.title}</h5>
                      </div>
                      <p className="text-xs text-[#52647A] pl-6 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-emerald-200 text-xs text-emerald-800 font-medium">
                Ideal for partial sprains, early-stage wear, non-displaced tears, and patients responding well to active rehabilitation.
              </div>
            </div>

            {/* Surgical Pathway */}
            <div className="rounded-2xl border-2 border-[#102D4F]/20 bg-[#F5F8FB] p-6 md:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE5EF]">
                  <div className="p-2.5 bg-[#102D4F] text-white rounded-xl">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47721]">
                      When Indicated
                    </span>
                    <h4 className="text-lg font-bold text-[#102D4F]">
                      Advanced Surgical Interventions
                    </h4>
                  </div>
                </div>

                <div className="space-y-4">
                  {treatment.treatmentOptions.surgical.map((opt, idx) => (
                    <div key={idx} className="bg-white p-4 rounded-xl border border-[#DCE5EF] shadow-xs">
                      <div className="flex items-center gap-2 mb-1">
                        <CheckCircle className="w-4 h-4 text-[#F47721] shrink-0" />
                        <h5 className="text-sm font-bold text-[#102D4F]">{opt.title}</h5>
                      </div>
                      <p className="text-xs text-[#52647A] pl-6 leading-relaxed">
                        {opt.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE5EF] text-xs text-[#52647A] font-medium">
                Indicated for complete ruptures, mechanical joint locking, severe arthritis refractory to medicine, or recurrent dislocations.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

