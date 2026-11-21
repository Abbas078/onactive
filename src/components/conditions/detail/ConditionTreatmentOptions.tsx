import React from "react";
import { ShieldCheck, Sparkles, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionTreatmentOptionsProps {
  condition: ConditionDetail;
}

export function ConditionTreatmentOptions({ condition }: ConditionTreatmentOptionsProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                TREATMENT PATHWAYS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Non-Surgical &amp; Surgical Treatment Options
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              We prioritize conservative management whenever clinically appropriate, reserving surgery for structural instability or failed conservative care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* 1. Conservative (Non-Surgical) Pathway */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                        Conservative Non-Surgical Care
                      </h3>
                      <p className="text-xs text-[#52647A]">First-line management</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100/70 text-emerald-800">
                    Primary Line
                  </span>
                </div>

                <div className="space-y-4">
                  {condition.treatmentApproaches.nonSurgical.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF]">
                      <div className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#102D4F]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#52647A] mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F8FB] text-[11px] text-[#52647A] italic">
                * Successfully alleviates symptoms in many patients without requiring surgical intervention.
              </div>
            </div>

            {/* 2. Surgical Pathway */}
            <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between gap-2 mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                        Specialized Surgical Options
                      </h3>
                      <p className="text-xs text-[#52647A]">Minimally invasive keyhole or reconstruction</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#FFF4EB] text-[#F47721] border border-[#FDE8D7]">
                    When Indicated
                  </span>
                </div>

                <div className="space-y-4">
                  {condition.treatmentApproaches.surgical.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF]">
                      <div className="flex items-start gap-2.5">
                        <span className="w-4 h-4 rounded-full bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <div>
                          <h4 className="text-xs sm:text-sm font-bold text-[#102D4F]">
                            {item.title}
                          </h4>
                          <p className="text-xs text-[#52647A] mt-1 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F5F8FB] text-[11px] text-[#52647A] italic">
                * Performed using tissue-sparing arthroscopy or computer guidance to accelerate recovery.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

