import React from "react";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionRelatedTreatmentsProps {
  condition: ConditionDetail;
}

export function ConditionRelatedTreatments({ condition }: ConditionRelatedTreatmentsProps) {
  if (!condition.relatedTreatments || condition.relatedTreatments.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#F47721]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                  TREATMENT PATHWAYS
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
                Recommended Treatments &amp; Surgeries
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-[#52647A]">
                Explore specialized arthroscopic and surgical procedures relevant to {condition.title}.
              </p>
            </div>

            <Link
              href="/treatments"
              className="text-xs font-bold text-[#F47721] hover:text-[#d96210] inline-flex items-center gap-1.5 transition-colors shrink-0"
            >
              <span>View All Treatments</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {condition.relatedTreatments.map((treatment, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl p-5 sm:p-6 border border-[#DCE5EF] hover:border-[#F47721]/40 hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47721] bg-[#FFF4EB] border border-[#FDE8D7] px-2.5 py-0.5 rounded-full">
                      {treatment.badge}
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-[#F47721] opacity-60 group-hover:opacity-100 transition-opacity" />
                  </div>

                  <h3 className="text-base font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug mb-2">
                    {treatment.title}
                  </h3>

                  <p className="text-xs text-[#52647A] leading-relaxed line-clamp-3">
                    {treatment.description}
                  </p>
                </div>

                <div className="mt-5 pt-3.5 border-t border-[#F5F8FB]">
                  <Link
                    href={`/treatments/${treatment.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors"
                  >
                    <span>View Treatment Procedure</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

