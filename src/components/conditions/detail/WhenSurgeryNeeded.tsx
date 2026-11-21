import React from "react";
import { CheckCircle2, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface WhenSurgeryNeededProps {
  condition: ConditionDetail;
}

export function WhenSurgeryNeeded({ condition }: WhenSurgeryNeededProps) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                SURGICAL INDICATIONS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              When Is Surgery Considered for {condition.title}?
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              Surgery is never the automatic default; it is evaluated against objective clinical and functional criteria.
            </p>
          </div>

          {/* Criteria Checklist Card */}
          <div className="bg-[#F5F8FB] rounded-2xl p-6 sm:p-8 border border-[#DCE5EF]">
            <div className="space-y-4">
              {condition.whenSurgeryConsidered.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3.5 p-3.5 rounded-xl bg-white border border-[#DCE5EF] shadow-2xs"
                >
                  <span className="w-5 h-5 rounded-full bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 stroke-[2.5]" />
                  </span>
                  <span className="text-xs sm:text-sm font-semibold text-[#102D4F] leading-relaxed">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Disclaimer Alert */}
            <div className="mt-6 pt-5 border-t border-[#DCE5EF] flex items-start gap-3 text-xs text-[#52647A] leading-relaxed">
              <ShieldAlert className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
              <div>
                <strong>Medical Decision Notice: </strong>
                Surgical candidacy is determined through an in-person physical consultation, review of high-resolution digital imaging, patient activity aspirations, and baseline joint stability.
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
