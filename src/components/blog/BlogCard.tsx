import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Clock, Calendar, ArrowRight, Tag } from "lucide-react";
import { BlogPost } from "@/constants/blogData";

interface BlogCardProps {
  post: BlogPost;
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group bg-white rounded-2xl border border-[#DCE5EF] overflow-hidden hover:shadow-xl hover:border-[#102D4F]/30 transition-all duration-300 flex flex-col h-full">
      {/* Thumbnail */}
      <div className="relative aspect-[16/9] overflow-hidden bg-[#102D4F]/5">
        <Image
          src={post.image}
          alt={post.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold bg-[#102D4F] text-white shadow-sm">
            <Tag className="w-3 h-3 text-[#F47721]" />
            {post.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-2.5">
          {/* Metadata */}
          <div className="flex items-center gap-3 text-xs text-[#52647A]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-[#F47721]" />
              {post.publishDate}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-[#102D4F]" />
              {post.readTime}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg sm:text-xl font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug line-clamp-2">
            <Link href={`/blog/${post.slug}`}>
              {post.title}
            </Link>
          </h3>

          {/* Excerpt */}
          <p className="text-sm text-[#52647A] line-clamp-3 leading-relaxed">
            {post.excerpt}
          </p>
        </div>

        {/* Footer / Read More */}
        <div className="pt-3 border-t border-[#DCE5EF]/60 flex items-center justify-between">
          <span className="text-[11px] font-medium text-[#F47721] bg-[#FFF4EB] px-2 py-0.5 rounded">
            Draft Education Guide
          </span>

          <Link
            href={`/blog/${post.slug}`}
            className="inline-flex items-center gap-1 text-sm font-semibold text-[#102D4F] group-hover:text-[#F47721] transition-colors"
          >
            <span>Read Article</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </article>
  );
}
