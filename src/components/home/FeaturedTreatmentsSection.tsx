import React from "react";
import Link from "next/link";
import { CheckCircle2, Clock, ArrowRight, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_TREATMENTS } from "@/constants/homeContent";

export function FeaturedTreatmentsSection() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            eyebrow="SURGICAL EXCELLENCE"
            title="Featured Treatments & Surgeries"
            subtitle="Minimally invasive keyhole surgeries, AR-guided joint replacements, and anatomical reconstructions performed by Dr. Ankit Jaipal."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F47721] hover:text-[#DF6410] transition-colors shrink-0 group"
          >
            <span>View All Surgeries &amp; Treatments</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_TREATMENTS.map((treatment) => (
            <Card
              key={treatment.id}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group border-[#DCE5EF]"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="orange" size="sm">
                    {treatment.category}
                  </Badge>
                  <span className="text-[11px] font-medium text-[#7B8E9F] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
                    Cashless / RGHS
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                    {treatment.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="bg-[#F5F8FB] rounded-xl p-3 border border-[#DCE5EF]">
                  <p className="text-[11px] font-bold text-[#102D4F] uppercase tracking-wider mb-2">
                    Key Surgical Benefits:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#52647A]">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Recovery & Link */}
              <div className="mt-5 pt-4 border-t border-[#DCE5EF] flex items-center justify-between gap-2">
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-[#102D4F]">
                  <Clock className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <span className="truncate">{treatment.recoveryTime}</span>
                </div>

                <Link
                  href={`/treatments/${treatment.slug}`}
                  className="text-xs font-bold text-[#F47721] hover:text-[#DF6410] inline-flex items-center gap-1 transition-colors shrink-0"
                >
                  <span>Details</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

