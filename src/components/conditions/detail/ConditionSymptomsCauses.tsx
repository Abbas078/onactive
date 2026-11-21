import React from "react";
import { AlertCircle, HelpCircle, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionSymptomsCausesProps {
  condition: ConditionDetail;
}

export function ConditionSymptomsCauses({ condition }: ConditionSymptomsCausesProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                CLINICAL PRESENTATION
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Symptoms, Causes &amp; Risk Factors
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              Recognizing early warning signs prevents secondary joint degeneration.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Card: Common Symptoms */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-rose-50 text-rose-700 flex items-center justify-center shrink-0">
                    <AlertCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                      Common Symptoms
                    </h3>
                    <p className="text-xs text-[#52647A]">What patients typically experience</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {condition.commonSymptoms.map((symptom, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{symptom}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F8FB] text-[11px] font-semibold text-[#8C9AA8]">
                * Symptom intensity varies based on tear severity and biological age.
              </div>
            </div>

            {/* Right Card: Causes & Risk Factors */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                    <HelpCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                      Causes &amp; Risk Factors
                    </h3>
                    <p className="text-xs text-[#52647A]">How damage or wear occurs</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {condition.causesAndRiskFactors.map((cause, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{cause}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F8FB] text-[11px] font-semibold text-[#8C9AA8]">
                * Both acute trauma and repetitive occupational wear play key roles.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
