import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, User } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { FEATURED_ARTICLES } from "@/constants/homeContent";

export function BlogPreviewSection() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <SectionHeading
            eyebrow="PATIENT EDUCATION"
            title="Latest Orthopaedic &amp; Sports Articles"
            subtitle="Clinical insights, injury prevention tips, and post-surgery rehabilitation protocols authored by Dr. Ankit Jaipal."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#F47721] hover:text-[#DF6410] transition-colors shrink-0 group"
          >
            <span>Explore All Health Articles</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {FEATURED_ARTICLES.map((article) => (
            <Card
              key={article.slug}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between bg-white border-[#DCE5EF] group"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <Badge variant="orange" size="sm">
                    {article.category}
                  </Badge>
                  <span className="text-[11px] font-medium text-[#7B8E9F] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#F47721]" />
                    {article.readTime}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
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
                  <User className="w-3.5 h-3.5 text-[#F47721]" />
                  <span className="font-semibold text-[#102D4F] truncate max-w-[120px]">
                    {article.author}
                  </span>
                </div>

                <Link
                  href={`/blog/${article.slug}`}
                  className="font-bold text-[#F47721] hover:text-[#DF6410] inline-flex items-center gap-1 transition-colors"
                >
                  <span>Read Article</span>
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

