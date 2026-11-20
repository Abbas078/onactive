import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { EXPERTISE_ITEMS } from "@/constants/homeContent";

export function ExpertiseSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="OUR EXPERTISE"
          title="Comprehensive Orthopaedic & Sports Care"
          subtitle="Evidence-based treatment, advanced arthroscopy and personalized care to help you move better, stay active and live pain-free."
        />

        {/* 5-Column Grid matching Mockup */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-5">
          {EXPERTISE_ITEMS.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className="group flex flex-col bg-white rounded-2xl border border-[#DCE5EF] overflow-hidden shadow-xs hover:shadow-lg hover:border-[#F47721]/50 transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Container with light-blue glow background matching mockup */}
              <div className="relative aspect-square w-full bg-gradient-to-b from-[#EBF3FB] via-[#F4F8FC] to-white p-3 flex items-center justify-center overflow-hidden">
                <div className="relative w-full h-full transition-transform duration-300 group-hover:scale-105">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 160px, (max-width: 1024px) 220px, 240px"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Title & Arrow link */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <h3 className="text-xs sm:text-sm font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                  {item.title}
                </h3>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-neutral-100">
                  <span className="text-[11px] font-semibold text-[#52647A] group-hover:text-[#F47721] transition-colors">
                    Explore
                  </span>
                  <div className="w-6 h-6 rounded-full bg-[#FFF4EB] text-[#F47721] flex items-center justify-center group-hover:bg-[#F47721] group-hover:text-white transition-all shadow-xs">
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

