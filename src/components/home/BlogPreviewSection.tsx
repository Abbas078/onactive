import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, BookOpen, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { BLOG_POSTS } from "@/constants/blogData";

export function BlogPreviewSection() {
  const featuredArticles = BLOG_POSTS.slice(0, 3);

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <SectionHeading
            eyebrow="PATIENT EDUCATION &amp; AWARENESS"
            title="Latest Orthopaedic &amp; Sports Articles"
            subtitle="Educational guides, symptom recognition, and surgical recovery insights prepared for patient clarity."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F47721] hover:text-[#DF6410] transition-colors shrink-0 group"
          >
            <span>Explore All 10 Educational Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredArticles.map((article) => (
            <Card
              key={article.slug}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between bg-white border-[#DCE5EF] hover:border-[#F47721]/50 group transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="orange" size="sm" className="font-bold">
                    {article.category}
                  </Badge>
                  <span className="text-[11px] font-semibold text-[#52647A] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-[#F47721]" />
                    {article.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#52647A] leading-relaxed line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-3.5 border-t border-[#DCE5EF] flex items-center justify-between text-xs">
                <div className="flex items-center gap-1.5 text-[#52647A]">
                  <BookOpen className="w-3.5 h-3.5 text-[#F47721]" />
                  <span className="font-semibold text-[#102D4F]">Patient Guide</span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="font-bold text-[#F47721] hover:text-[#DF6410] inline-flex items-center gap-1 transition-colors group/link"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                </Link>
              </div>
            </Card>
          ))}
        </div>

        {/* Clinical Disclaimer Note */}
        <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF] p-3.5 text-xs text-[#52647A] text-center max-w-2xl mx-auto">
          <ShieldCheck className="h-4 w-4 text-[#F47721] shrink-0" />
          <span>
            Draft educational materials prepared for orthopaedic awareness. Consult <strong>Dr. Ankit Jaipal</strong> for individual diagnosis.
          </span>
        </div>
      </Container>
    </section>
  );
}
