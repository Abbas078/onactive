import React from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CONDITIONS_LIST } from "@/constants/homeContent";

export function ConditionsSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="SYMPTOMS &amp; CONDITIONS"
          title="Common Orthopaedic Conditions We Treat"
          subtitle="Understanding joint warning signs early protects your native cartilage and prevents chronic instability."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CONDITIONS_LIST.map((condition) => (
            <Card
              key={condition.id}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group bg-white border-[#DCE5EF]"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                    <Activity className="w-4 h-4" />
                  </div>
                  <h3 className="text-base font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {condition.name}
                  </h3>
                </div>

                <p className="text-xs text-[#52647A] italic bg-[#F5F8FB] p-2.5 rounded-lg border border-[#DCE5EF]">
                  &ldquo;{condition.tagline}&rdquo;
                </p>

                {/* Common Symptoms List */}
                <div className="space-y-1.5">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#102D4F]">
                    Common Signs &amp; Symptoms:
                  </p>
                  <ul className="space-y-1 text-xs text-[#52647A]">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <AlertCircle className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#DCE5EF] flex items-center justify-between">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Condition Assessment Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={condition.treatmentLink}
                  className="text-[11px] font-semibold text-[#F47721] hover:underline"
                >
                  Surgical Option →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

