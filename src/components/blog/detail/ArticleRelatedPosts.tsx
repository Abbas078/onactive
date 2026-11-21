import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, ArrowRight } from "lucide-react";
import { BLOG_POSTS } from "@/constants/blogData";

interface ArticleRelatedPostsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export function ArticleRelatedPosts({
  currentSlug,
  relatedSlugs,
}: ArticleRelatedPostsProps) {
  // Find related posts by slug, fallback to other posts from same or different categories
  let related = BLOG_POSTS.filter(
    (p) => relatedSlugs.includes(p.slug) && p.slug !== currentSlug
  );

  if (related.length < 3) {
    const fillers = BLOG_POSTS.filter(
      (p) => p.slug !== currentSlug && !related.some((r) => r.slug === p.slug)
    );
    related = [...related, ...fillers].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  return (
    <section className="py-12 bg-white border-t border-[#DCE5EF]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider block mb-1">
            Further Clinical Reading
          </span>
          <h2 className="text-xl sm:text-2xl font-bold text-[#102D4F]">
            Related Orthopaedic &amp; Joint Health Articles
          </h2>
        </div>

        <Link
          href="/blog"
          className="text-xs font-bold text-[#102D4F] hover:text-[#F47721] transition-colors flex items-center gap-1"
        >
          <span>View All Articles</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {related.map((post) => (
          <article
            key={post.slug}
            className="group rounded-2xl border border-[#DCE5EF] overflow-hidden hover:shadow-lg transition-all duration-300 flex flex-col bg-white"
          >
            <div className="relative aspect-[16/10] bg-[#102D4F]/5 overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <span className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-[#102D4F] text-white">
                {post.category}
              </span>
            </div>

            <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2 text-[11px] text-[#52647A]">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-[#F47721]" />
                    {post.publishDate}
                  </span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="text-sm font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors line-clamp-2">
                  <Link href={`/blog/${post.slug}`}>
                    {post.title}
                  </Link>
                </h3>
              </div>

              <div className="pt-2 border-t border-[#DCE5EF]/60 flex items-center justify-between text-xs font-semibold text-[#102D4F] group-hover:text-[#F47721]">
                <span>Read Guide</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
