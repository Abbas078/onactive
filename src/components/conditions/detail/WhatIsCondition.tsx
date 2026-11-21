import React from "react";
import { AlertCircle, BookOpen } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface WhatIsConditionProps {
  condition: ConditionDetail;
}

export function WhatIsCondition({ condition }: WhatIsConditionProps) {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Eyebrow & Title */}
          <div>
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                ANATOMY &amp; OVERVIEW
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              What Is {condition.title}?
            </h2>
          </div>

          {/* Overview text */}
          <div className="space-y-4 text-sm sm:text-base text-[#52647A] leading-relaxed">
            <p>{condition.whatIsCondition.overview}</p>
          </div>

          {/* Anatomy Explainer Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
              <BookOpen className="w-5 h-5" />
            </div>
            <div className="space-y-1.5">
              <h3 className="text-sm sm:text-base font-bold text-[#102D4F]">
                Anatomical Structure &amp; Mechanics
              </h3>
              <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed">
                {condition.whatIsCondition.anatomyDetail}
              </p>
            </div>
          </div>

          {/* Clinical Note Disclaimer */}
          <div className="p-4 sm:p-5 rounded-xl bg-amber-50/70 border border-amber-200/80 flex items-start gap-3.5">
            <AlertCircle className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong className="font-bold text-amber-950">Clinical Note: </strong>
              {condition.whatIsCondition.clinicalNote}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
