"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Clock, ArrowRight, ShieldCheck, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_TREATMENTS } from "@/constants/homeContent";

export function FeaturedTreatmentsSection() {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const categories = [
    { label: "All Surgical Specialties", value: "all" },
    { label: "Knee & Ligaments", value: "knee" },
    { label: "Shoulder Arthroscopy", value: "shoulder" },
    { label: "Joint Replacement (TKR)", value: "replacement" },
  ];

  const filteredTreatments = FEATURED_TREATMENTS.filter((t) => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "knee")
      return t.slug.includes("knee") || t.slug.includes("acl");
    if (selectedFilter === "shoulder") return t.slug.includes("shoulder");
    if (selectedFilter === "replacement") return t.slug.includes("joint");
    return true;
  });

  return (
    <section id="treatments" className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <SectionHeading
            eyebrow="SURGICAL SPECIALTIES &amp; JOINT CARE"
            title="Advanced Arthroscopy &amp; Computer-Guided Surgeries"
            subtitle="Minimally invasive keyhole procedures, AR-assisted knee replacements, and anatomical ligament reconstructions performed by Dr. Ankit Jaipal."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/treatments"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F47721] hover:text-[#DF6410] transition-colors shrink-0 group"
          >
            <span>View All Surgeries &amp; Protocols</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setSelectedFilter(cat.value)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
                selectedFilter === cat.value
                  ? "bg-[#102D4F] text-white shadow-sm"
                  : "bg-[#F5F8FB] text-[#52647A] hover:text-[#102D4F] border border-[#DCE5EF]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTreatments.map((treatment) => (
            <Card
              key={treatment.id}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group border-[#DCE5EF] hover:border-[#F47721]/50 bg-white transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="orange" size="sm" className="font-bold">
                    {treatment.category}
                  </Badge>
                  <span className="text-[11px] font-semibold text-[#52647A] flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
                    Cashless / RGHS
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {treatment.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#52647A] leading-relaxed line-clamp-2">
                    {treatment.description}
                  </p>
                </div>

                {/* Key Benefits */}
                <div className="bg-[#F5F8FB] rounded-xl p-3 border border-[#DCE5EF]">
                  <p className="text-[11px] font-bold text-[#102D4F] uppercase tracking-wider mb-2 flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-[#F47721]" />
                    <span>Key Surgical Benefits:</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#52647A]">
                    {treatment.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
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
                  className="text-xs font-bold text-[#F47721] hover:text-[#DF6410] inline-flex items-center gap-1 transition-colors shrink-0 group/link"
                >
                  <span>Procedure Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
