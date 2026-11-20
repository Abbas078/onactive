import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TREATMENTS_DATA } from "@/constants/treatmentsData";

interface RelatedTreatmentsProps {
  relatedSlugs: string[];
}

export function RelatedTreatments({ relatedSlugs }: RelatedTreatmentsProps) {
  const relatedTreatments = relatedSlugs
    .map((slug) => TREATMENTS_DATA[slug])
    .filter(Boolean);

  if (relatedTreatments.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Related Procedures
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-1">
              Explore Related Orthopaedic Treatments
            </h2>
          </div>
          <Link
            href="/treatments"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#102D4F] hover:text-[#F47721] transition-colors"
          >
            <span>View All Treatments</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedTreatments.map((treatment) => (
            <Link
              key={treatment.slug}
              href={`/treatments/${treatment.slug}`}
              className="group bg-white rounded-2xl border border-[#DCE5EF] overflow-hidden shadow-sm hover:shadow-md hover:border-[#F47721]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[16/10] bg-[#F5F8FB] overflow-hidden">
                  <Image
                    src={treatment.image}
                    alt={treatment.imageAlt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute top-3 left-3 bg-[#102D4F]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-2.5 py-1 rounded-full">
                    {treatment.category}
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-base font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors mb-2 line-clamp-2">
                    {treatment.title}
                  </h3>
                  <p className="text-xs text-[#52647A] line-clamp-3 leading-relaxed">
                    {treatment.shortDescription}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 flex items-center text-xs font-bold text-[#F47721] gap-1 group-hover:translate-x-1 transition-transform">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}

