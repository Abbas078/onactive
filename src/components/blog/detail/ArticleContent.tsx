import React from "react";
import Image from "next/image";
import { Info, AlertTriangle, Lightbulb, ShieldCheck } from "lucide-react";
import { ArticleSection } from "@/constants/blogData";

interface ArticleContentProps {
  sections: ArticleSection[];
  featuredImage: string;
  featuredImageAlt: string;
}

export function ArticleContent({
  sections,
  featuredImage,
  featuredImageAlt,
}: ArticleContentProps) {
  return (
    <article className="prose prose-slate max-w-none space-y-10">
      {/* Featured Image */}
      <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden bg-[#102D4F]/5 border border-[#DCE5EF] shadow-sm">
        <Image
          src={featuredImage}
          alt={featuredImageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 800px"
          className="object-cover"
          priority
        />
      </div>

      {/* Article Sections */}
      {sections.map((section) => (
        <section key={section.id} id={section.id} className="scroll-mt-28 space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-[#102D4F] border-b border-[#DCE5EF] pb-2 leading-tight">
            {section.heading}
          </h2>

          <div className="space-y-3.5 text-sm sm:text-base text-[#2D3A4B] leading-relaxed">
            {section.content.map((paragraph, pIdx) => (
              <p key={pIdx}>{paragraph}</p>
            ))}
          </div>

          {/* Clinical Callout Box if present */}
          {section.callout && (
            <div
              className={`p-4 sm:p-5 rounded-xl border mt-4 ${
                section.callout.type === "warning"
                  ? "bg-amber-50 border-amber-200 text-amber-900"
                  : section.callout.type === "tip"
                  ? "bg-emerald-50 border-emerald-200 text-emerald-900"
                  : "bg-blue-50 border-blue-200 text-blue-950"
              }`}
            >
              <div className="flex items-start gap-3">
                {section.callout.type === "warning" && (
                  <AlertTriangle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                )}
                {section.callout.type === "tip" && (
                  <Lightbulb className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                )}
                {section.callout.type === "info" && (
                  <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1 text-xs sm:text-sm">
                  <strong className="block font-bold">
                    {section.callout.title}
                  </strong>
                  <p className="leading-relaxed opacity-95">
                    {section.callout.text}
                  </p>
                </div>
              </div>
            </div>
          )}
        </section>
      ))}

      {/* Mandatory Medical Disclaimer Box */}
      <div className="p-6 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] mt-12 space-y-2">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-[#102D4F]" />
          <h3 className="text-xs font-bold uppercase tracking-wider text-[#102D4F]">
            Medical &amp; Clinical Information Disclaimer
          </h3>
        </div>
        <p className="text-xs text-[#52647A] leading-relaxed">
          The information contained on this page is published solely for educational and informational purposes regarding common musculoskeletal and orthopaedic conditions. It is not intended to be a substitute for professional medical advice, clinical diagnosis, or individualized surgical planning. Always seek the advice of a qualified orthopaedic surgeon or medical practitioner before undertaking any exercise program or making decisions regarding surgical procedures.
        </p>
      </div>
    </article>
  );
}
