"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TREATMENTS_DATA } from "@/constants/treatmentsData";

export function TreatmentsGrid() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { label: "All Procedures", value: "all" },
    { label: "Knee & Ligaments", value: "knee" },
    { label: "Shoulder Care", value: "shoulder" },
    { label: "Joint Replacement", value: "joint-replacement" },
    { label: "Sports Medicine", value: "sports" },
  ];

  const treatments = Object.values(TREATMENTS_DATA).filter((t) =>
    selectedCategory === "all" ? true : t.categorySlug === selectedCategory
  );

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="SPECIALIZED PROCEDURES"
          title="Clinical Specialities &amp; Surgical Interventions"
          subtitle="Explore our comprehensive range of minimally invasive joint preservation and reconstruction treatments in Jaipur."
          align="center"
        />

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.value}
              type="button"
              onClick={() => setSelectedCategory(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                selectedCategory === cat.value
                  ? "bg-[#102D4F] text-white shadow-sm"
                  : "bg-[#F5F8FB] text-[#52647A] border border-[#DCE5EF] hover:border-[#F47721] hover:text-[#102D4F]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Procedures Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {treatments.map((t) => (
            <Card
              key={t.slug}
              hoverEffect
              padding="none"
              className="border-[#DCE5EF] bg-white flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-neutral-100">
                  <Image
                    src={t.image}
                    alt={t.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-2">
                    <Badge variant="orange" size="sm">
                      {t.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 right-3">
                    <span className="inline-block px-2.5 py-1 rounded-md bg-white/95 backdrop-blur-sm text-[10px] font-bold text-[#102D4F] shadow-xs">
                      {t.heroBadge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6 space-y-3">
                  <h3 className="text-lg sm:text-xl font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    <Link href={`/treatments/${t.slug}`}>
                      {t.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-[#52647A] line-clamp-3 leading-relaxed">
                    {t.shortDescription}
                  </p>

                  {/* Highlights checklist */}
                  <div className="pt-2 border-t border-neutral-100 space-y-1.5">
                    {t.commonSymptoms.slice(0, 2).map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#52647A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="p-5 sm:p-6 pt-0 border-t border-neutral-100 flex items-center justify-between mt-4">
                <Link
                  href={`/treatments/${t.slug}`}
                  className="text-xs sm:text-sm font-bold text-[#F47721] group-hover:text-[#102D4F] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Explore Procedure Guide</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Button
                  href="/book-appointment"
                  variant="primary"
                  size="sm"
                  className="shadow-xs"
                >
                  Consult
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Clinical Disclaimer Callout */}
        <div className="mt-12 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] p-4 sm:p-5 text-xs text-[#52647A] flex items-start gap-3 max-w-3xl mx-auto">
          <ShieldCheck className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
          <div className="leading-relaxed">
            <strong className="text-[#102D4F]">Clinical Care Notice:</strong> Treatment recommendations are strictly individualized. Non-surgical physical therapy, rest, and joint protection are always prioritized whenever medically viable. Surgical intervention is advised only following thorough physical examination and MRI imaging review.
          </div>
        </div>
      </Container>
    </section>
  );
}
