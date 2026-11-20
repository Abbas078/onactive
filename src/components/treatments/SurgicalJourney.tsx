import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PATIENT_JOURNEY_STEPS } from "@/constants/homeContent";
import { CheckCircle } from "lucide-react";

export function SurgicalJourney() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="YOUR PATHWAY TO CARE"
          title="The Clinical &amp; Surgical Consultation Journey"
          subtitle="From your initial joint examination and imaging review to guided post-operative recovery, our care pathway is transparent and patient-centered."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PATIENT_JOURNEY_STEPS.map((step) => (
            <div
              key={step.step}
              className="bg-[#F5F8FB] border border-[#DCE5EF] rounded-2xl p-6 flex flex-col justify-between hover:border-[#F47721] hover:shadow-md transition-all relative group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-black text-[#102D4F]/20 group-hover:text-[#F47721] transition-colors">
                    {step.step}
                  </span>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-white border border-[#DCE5EF] px-2.5 py-1 rounded-full text-[#F47721]">
                    {step.duration}
                  </span>
                </div>

                <h3 className="text-base font-bold text-[#102D4F] leading-snug mb-2">
                  {step.title}
                </h3>

                <p className="text-xs text-[#52647A] leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-3 border-t border-[#DCE5EF]/60 space-y-1.5">
                {step.keyPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-1.5 text-[11px] text-[#52647A]">
                    <CheckCircle className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

