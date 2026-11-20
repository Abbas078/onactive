import React from "react";
import { AlertTriangle, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TreatmentDetail } from "@/constants/treatmentsData";

interface SymptomsAndCausesProps {
  treatment: TreatmentDetail;
}

export function SymptomsAndCauses({ treatment }: SymptomsAndCausesProps) {
  return (
    <section className="py-16 md:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
            Clinical Presentation
          </span>
          <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
            Common Symptoms & Risk Factors
          </h2>
          <p className="text-sm md:text-base text-[#52647A]">
            Recognizing early clinical signs enables prompt diagnosis and helps prevent progressive joint or ligament damage.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Symptoms */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DCE5EF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE5EF]">
                <div className="p-2.5 bg-red-50 text-red-600 rounded-xl">
                  <AlertTriangle className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#102D4F]">
                    Common Symptoms
                  </h3>
                  <p className="text-xs text-[#52647A]">Reported by patients seeking consultation</p>
                </div>
              </div>

              <ul className="space-y-4">
                {treatment.commonSymptoms.map((symptom, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-red-500 mt-2 shrink-0" />
                    <span className="text-sm text-[#102D4F] font-medium leading-relaxed">
                      {symptom}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCE5EF] bg-[#F5F8FB]/50 rounded-xl p-3 text-xs text-[#52647A]">
              <span className="font-semibold text-[#102D4F]">Note:</span> If you experience sudden joint instability, locking, or rapid swelling, schedule an in-person physical assessment promptly.
            </div>
          </div>

          {/* Card 2: Causes & Risk Factors */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-[#DCE5EF] shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-[#DCE5EF]">
                <div className="p-2.5 bg-[#102D4F]/10 text-[#102D4F] rounded-xl">
                  <Activity className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#102D4F]">
                    Causes & Risk Factors
                  </h3>
                  <p className="text-xs text-[#52647A]">Primary mechanisms of injury and wear</p>
                </div>
              </div>

              <ul className="space-y-4">
                {treatment.causesAndRiskFactors.map((cause, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="w-2 h-2 rounded-full bg-[#102D4F] mt-2 shrink-0" />
                    <span className="text-sm text-[#102D4F] font-medium leading-relaxed">
                      {cause}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-[#DCE5EF] bg-[#F5F8FB]/50 rounded-xl p-3 text-xs text-[#52647A]">
              <span className="font-semibold text-[#102D4F]">Prevention:</span> Targeted conditioning, proper athletic warmup, and ergonomic movement lower the risk of recurrent injury.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

