import React from "react";
import { Stethoscope, Scan, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionEvaluationProps {
  condition: ConditionDetail;
}

export function ConditionEvaluation({ condition }: ConditionEvaluationProps) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                DIAGNOSTIC PROTOCOL
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              How Is {condition.title} Evaluated?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              Accurate diagnosis combines thorough physical examination maneuvers with targeted high-resolution imaging.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {/* 1. Clinical Physical Tests */}
            <div className="bg-[#F5F8FB] rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                    <Stethoscope className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                      Orthopaedic Physical Examination
                    </h3>
                    <p className="text-xs text-[#52647A]">In-clinic clinical provocative tests</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {condition.diagnosticEvaluation.physicalTests.map((test, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-white text-[#F47721] border border-[#DCE5EF] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE5EF] flex items-center gap-2 text-[11px] font-bold text-[#102D4F]">
                <ShieldCheck className="w-4 h-4 text-[#F47721]" />
                <span>Hands-on evaluation isolates mechanical instability</span>
              </div>
            </div>

            {/* 2. Radiological Imaging & Scans */}
            <div className="bg-[#F5F8FB] rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-[#102D4F] text-white flex items-center justify-center shrink-0">
                    <Scan className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                      Radiological Imaging &amp; Scans
                    </h3>
                    <p className="text-xs text-[#52647A]">High-resolution bone &amp; soft-tissue verification</p>
                  </div>
                </div>

                <ul className="space-y-3">
                  {condition.diagnosticEvaluation.imagingAndScans.map((scan, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                      <span className="w-4 h-4 rounded-full bg-white text-[#102D4F] border border-[#DCE5EF] flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-3.5 h-3.5 stroke-[2.5]" />
                      </span>
                      <span>{scan}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-[#DCE5EF] flex items-center gap-2 text-[11px] font-bold text-[#102D4F]">
                <Scan className="w-4 h-4 text-[#102D4F]" />
                <span>Confirms tear geometry and chondral depth</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

