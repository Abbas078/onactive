import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { PATIENT_JOURNEY_STEPS } from "@/constants/homeContent";

export function PatientJourneySection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="YOUR PATHWAY TO MOTION"
          title="The Patient Treatment Journey"
          subtitle="A transparent, evidence-based treatment pathway designed to guide you safely from injury diagnosis back to active pain-free life."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {PATIENT_JOURNEY_STEPS.map((step, idx) => (
            <Card
              key={idx}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group border-[#DCE5EF] relative overflow-hidden"
            >
              {/* Subtle top indicator bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#102D4F] to-[#F47721]" />

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl sm:text-4xl font-black text-[#102D4F]/20 group-hover:text-[#F47721] transition-colors">
                    {step.step}
                  </span>
                  <Badge variant="orange" size="sm">
                    {step.duration}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-100">
                  <ul className="space-y-1.5 text-xs text-[#52647A]">
                    {step.keyPoints.map((point, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-3 border-t border-[#DCE5EF] flex items-center justify-between text-[11px] font-semibold text-[#52647A]">
                <span>Phase {idx + 1} of 4</span>
                <span className="text-[#F47721]">Structured Care</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

