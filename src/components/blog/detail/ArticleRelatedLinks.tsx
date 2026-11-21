import React from "react";
import Link from "next/link";
import { Stethoscope, Activity, ArrowRight } from "lucide-react";
import { RelatedItem } from "@/constants/blogData";

interface ArticleRelatedLinksProps {
  relatedTreatments: RelatedItem[];
  relatedConditions: RelatedItem[];
}

export function ArticleRelatedLinks({
  relatedTreatments,
  relatedConditions,
}: ArticleRelatedLinksProps) {
  if (relatedTreatments.length === 0 && relatedConditions.length === 0) {
    return null;
  }

  return (
    <div className="bg-[#F5F8FB] rounded-2xl p-6 border border-[#DCE5EF] space-y-6">
      {/* Related Treatments */}
      {relatedTreatments.length > 0 && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-4 h-4 text-[#F47721]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
              Relevant Surgical &amp; Clinical Treatments
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedTreatments.map((t) => (
              <Link
                key={t.slug}
                href={`/treatments/${t.slug}`}
                className="group p-3.5 rounded-xl bg-white border border-[#DCE5EF] hover:border-[#102D4F] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#F47721] block">
                    {t.badge}
                  </span>
                  <span className="text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors">
                    {t.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#52647A] group-hover:translate-x-1 group-hover:text-[#102D4F] transition-all shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Related Conditions */}
      {relatedConditions.length > 0 && (
        <div className="space-y-3 pt-4 border-t border-[#DCE5EF]">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-[#102D4F]" />
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
              Associated Orthopaedic Conditions
            </h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {relatedConditions.map((c) => (
              <Link
                key={c.slug}
                href={`/conditions/${c.slug}`}
                className="group p-3.5 rounded-xl bg-white border border-[#DCE5EF] hover:border-[#102D4F] transition-all flex items-center justify-between"
              >
                <div>
                  <span className="text-[10px] font-bold uppercase text-[#102D4F] block">
                    {c.badge}
                  </span>
                  <span className="text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors">
                    {c.title}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#52647A] group-hover:translate-x-1 group-hover:text-[#102D4F] transition-all shrink-0 ml-2" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

