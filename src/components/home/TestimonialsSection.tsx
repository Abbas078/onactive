import React from "react";
import { Star, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { TESTIMONIALS_DATA } from "@/constants/homeContent";

export function TestimonialsSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            eyebrow="PATIENT EXPERIENCES"
            title="Real Stories of Restored Mobility"
            subtitle="Verified reviews and clinical recovery milestones from patients treated by Dr. Ankit Jaipal."
            align="left"
            className="mb-0 max-w-2xl"
          />

          {/* Aggregate Rating Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#DCE5EF] shadow-xs shrink-0">
            <div className="flex items-center gap-0.5 text-[#F47721]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#F47721]" />
              ))}
            </div>
            <div className="text-left">
              <p className="text-xs font-bold text-[#102D4F]">4.9 out of 5</p>
              <p className="text-[10px] text-[#52647A]">300+ Verified Reviews</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <Card
              key={t.id}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between bg-white border-[#DCE5EF] shadow-xs"
            >
              <div className="space-y-4">
                {/* Top strip with stars and verified badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-[#F47721]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#F47721]" />
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#128C7E] bg-[#25D366]/10 px-2 py-0.5 rounded-full">
                    <CheckCircle2 className="w-3 h-3 text-[#25D366]" />
                    {t.verifiedSource}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed italic">
                  &ldquo;{t.quote}&rdquo;
                </p>

                {/* Clinical Result Pill */}
                <div className="bg-[#FFF4EB] p-2.5 rounded-lg border border-[#FDE8D7]">
                  <p className="text-[11px] font-bold text-[#F47721] flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
                    <span>Result: {t.result}</span>
                  </p>
                </div>
              </div>

              {/* Patient info footer */}
              <div className="mt-5 pt-3.5 border-t border-[#DCE5EF] flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#102D4F]">{t.patientName}</p>
                  <p className="text-xs text-[#52647A]">{t.patientType}</p>
                </div>
                <Badge variant="subtle" size="sm" className="text-[10px] max-w-[130px] truncate">
                  {t.procedure}
                </Badge>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

