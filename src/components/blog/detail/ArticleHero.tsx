import React from "react";
import Link from "next/link";
import { ChevronRight, Calendar, Clock, Tag, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BlogPost } from "@/constants/blogData";

interface ArticleHeroProps {
  post: BlogPost;
}

export function ArticleHero({ post }: ArticleHeroProps) {
  return (
    <section className="bg-[#102D4F] text-white pt-24 pb-12 sm:pb-16 relative overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 text-xs text-white/70 mb-5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <Link href="/blog" className="hover:text-white transition-colors">
              Blog
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#F47721] font-semibold">{post.category}</span>
          </nav>

          {/* Category Badge & Meta */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-4">
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-bold bg-[#F47721] text-white shadow-sm">
              <Tag className="w-3 h-3" />
              {post.category}
            </span>

            <span className="flex items-center gap-1 text-xs text-white/80">
              <Calendar className="w-3.5 h-3.5 text-[#F47721]" />
              Published: {post.publishDate}
            </span>

            <span className="text-white/40">•</span>

            <span className="flex items-center gap-1 text-xs text-white/80">
              <Clock className="w-3.5 h-3.5 text-[#F47721]" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            {post.title}
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/85 leading-relaxed mb-6">
            {post.subtitle}
          </p>

          {/* Clinical Review Status Banner */}
          <div className="p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
            <div className="text-xs text-white/90 leading-relaxed">
              <span className="font-bold text-white block mb-0.5">
                Editorial Review Status: {post.reviewStatus}
              </span>
              <span>
                Authored by: <strong className="text-white">{post.author.name}</strong> ({post.author.role}). {post.author.note} This guide is designed for patient education and does not replace in-person consultation with an orthopaedic surgeon.
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
