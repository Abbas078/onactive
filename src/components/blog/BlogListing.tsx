"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ArrowRight, Calendar, Clock, Tag, Sparkles, MessageCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BlogCard } from "@/components/blog/BlogCard";
import { BLOG_CATEGORIES, BLOG_POSTS } from "@/constants/blogData";
import { CLINIC_INFO } from "@/constants/clinicInfo";

export function BlogListing() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [visibleCount, setVisibleCount] = useState<number>(6);

  // Filter posts based on category and search query
  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCategory =
        selectedCategory === "all" || post.categorySlug === selectedCategory;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        q === "" ||
        post.title.toLowerCase().includes(q) ||
        post.excerpt.toLowerCase().includes(q) ||
        post.category.toLowerCase().includes(q);

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  // Featured article (first featured post or first item)
  const featuredPost = useMemo(() => {
    return BLOG_POSTS.find((p) => p.isFeatured) || BLOG_POSTS[0];
  }, []);

  const visiblePosts = filteredPosts.slice(0, visibleCount);
  const hasMore = visibleCount < filteredPosts.length;

  return (
    <div className="py-12 sm:py-16 bg-[#F5F8FB]">
      <Container>
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#DCE5EF] shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-[#52647A] absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value);
                  setVisibleCount(6);
                }}
                placeholder="Search articles on knee pain, ACL reconstruction, AR navigation, recovery..."
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#DCE5EF] bg-white text-sm text-[#102D4F] placeholder:text-[#52647A]/70 focus:outline-none focus:ring-2 focus:ring-[#F47721]/30 focus:border-[#F47721]"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-[#52647A] hover:text-[#102D4F]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Results count indicator */}
            <div className="text-xs font-medium text-[#52647A] px-1">
              Showing <strong className="text-[#102D4F]">{filteredPosts.length}</strong> {filteredPosts.length === 1 ? "article" : "articles"}
            </div>
          </div>

          {/* Category Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
            <button
              onClick={() => {
                setSelectedCategory("all");
                setVisibleCount(6);
              }}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === "all"
                  ? "bg-[#102D4F] text-white shadow-sm"
                  : "bg-[#F5F8FB] text-[#52647A] hover:bg-[#DCE5EF] hover:text-[#102D4F]"
              }`}
            >
              All Categories ({BLOG_POSTS.length})
            </button>
            {BLOG_CATEGORIES.map((cat) => {
              const count = BLOG_POSTS.filter((p) => p.categorySlug === cat.slug).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => {
                    setSelectedCategory(cat.slug);
                    setVisibleCount(6);
                  }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all ${
                    selectedCategory === cat.slug
                      ? "bg-[#102D4F] text-white shadow-sm"
                      : "bg-[#F5F8FB] text-[#52647A] hover:bg-[#DCE5EF] hover:text-[#102D4F]"
                  }`}
                >
                  {cat.name} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Featured Article Highlight (only on 'All' category and empty search) */}
        {selectedCategory === "all" && searchQuery === "" && featuredPost && (
          <div className="mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="w-4 h-4 text-[#F47721]" />
              <h2 className="text-xs font-extrabold uppercase tracking-wider text-[#102D4F]">
                Featured Clinical Guide
              </h2>
            </div>

            <div className="bg-white rounded-2xl border border-[#DCE5EF] overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                <div className="relative aspect-[16/9] lg:aspect-auto lg:col-span-6 bg-[#102D4F]/5 min-h-[260px]">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#F47721] text-white shadow">
                      <Tag className="w-3.5 h-3.5" />
                      {featuredPost.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-8 lg:col-span-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-xs text-[#52647A]">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-[#F47721]" />
                        {featuredPost.publishDate}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#102D4F]" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] hover:text-[#F47721] transition-colors leading-tight">
                      <Link href={`/blog/${featuredPost.slug}`}>
                        {featuredPost.title}
                      </Link>
                    </h3>

                    <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#DCE5EF] flex items-center justify-between">
                    <span className="text-xs font-semibold text-[#F47721]">
                      Draft Patient Guide
                    </span>
                    <Link
                      href={`/blog/${featuredPost.slug}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#102D4F] text-white text-xs font-bold hover:bg-[#F47721] transition-colors shadow-sm"
                    >
                      <span>Read Complete Guide</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Section Heading for Articles */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#102D4F]">
            {selectedCategory === "all" ? "All Patient Educational Articles" : `Articles in ${BLOG_CATEGORIES.find(c => c.slug === selectedCategory)?.name || "Category"}`}
          </h2>
        </div>

        {/* Articles Grid */}
        {visiblePosts.length > 0 ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {visiblePosts.map((post) => (
                <BlogCard key={post.slug} post={post} />
              ))}
            </div>

            {/* Load More Button */}
            {hasMore && (
              <div className="mt-10 text-center">
                <button
                  onClick={() => setVisibleCount((prev) => prev + 6)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#102D4F] text-white text-sm font-bold hover:bg-[#F47721] transition-colors shadow-sm"
                >
                  <span>Load More Articles</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="bg-white rounded-2xl p-10 text-center border border-[#DCE5EF] max-w-lg mx-auto">
            <p className="text-base font-semibold text-[#102D4F] mb-1">
              No matching articles found
            </p>
            <p className="text-xs text-[#52647A] mb-4">
              Try adjusting your search terms or selecting another category filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
              className="px-4 py-2 rounded-xl bg-[#F47721] text-white text-xs font-bold hover:bg-[#F47721]/90"
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Transparent Educational & Newsletter Advisory Notice */}
        <div className="mt-16 bg-white rounded-2xl p-6 sm:p-8 border border-[#DCE5EF] shadow-sm">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-1.5 max-w-2xl">
              <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-bold bg-[#FFF4EB] text-[#F47721] uppercase tracking-wider">
                Clinic Advisory &amp; Patient Updates
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-[#102D4F]">
                Stay Informed with Doctor-Verified Orthopaedic Information
              </h3>
              <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed">
                An automated email newsletter system is currently under development. To receive new recovery guides or inquire directly regarding joint pain, message the Arthrogenix clinic desk directly on WhatsApp.
              </p>
            </div>

            <a
              href={CLINIC_INFO.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] text-white text-xs font-bold hover:bg-[#20ba59] transition-colors shadow-sm shrink-0"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Connect on WhatsApp</span>
            </a>
          </div>
        </div>
      </Container>
    </div>
  );
}
