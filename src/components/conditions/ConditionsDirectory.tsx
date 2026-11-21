"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Search, ArrowRight, AlertCircle, Sparkles, Filter } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CONDITIONS_DATA, ConditionDetail } from "@/constants/conditionsData";

const CATEGORIES = [
  { id: "all", label: "All Conditions" },
  { id: "knee", label: "Knee" },
  { id: "shoulder", label: "Shoulder" },
  { id: "hip", label: "Hip" },
  { id: "sports", label: "Sports Injuries" },
  { id: "trauma", label: "Fractures & Trauma" },
];

export function ConditionsDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const allConditions = useMemo(() => Object.values(CONDITIONS_DATA), []);

  const filteredConditions = useMemo(() => {
    return allConditions.filter((item: ConditionDetail) => {
      // Category filter
      const matchesCategory =
        selectedCategory === "all" || item.categorySlug === selectedCategory;

      // Search filter
      const query = searchQuery.toLowerCase().trim();
      if (!query) return matchesCategory;

      const matchesSearch =
        item.title.toLowerCase().includes(query) ||
        item.shortDescription.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query) ||
        item.commonSymptoms.some((s) => s.toLowerCase().includes(query)) ||
        item.causesAndRiskFactors.some((c) => c.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [allConditions, selectedCategory, searchQuery]);

  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FB]">
      <Container>
        {/* Controls: Search Bar & Category Filters */}
        <div className="bg-white rounded-2xl p-4 sm:p-6 border border-[#DCE5EF] shadow-xs mb-10">
          <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#8C9AA8]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search symptoms (e.g. popping sound, night shoulder pain, locking, swelling)..."
                className="w-full pl-10 pr-4 py-2.5 text-xs sm:text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-semibold text-[#8C9AA8] hover:text-[#102D4F]"
                >
                  Clear
                </button>
              )}
            </div>

            {/* Result Counter */}
            <div className="text-xs font-semibold text-[#52647A] shrink-0 text-right hidden sm:block">
              Showing <span className="text-[#102D4F] font-bold">{filteredConditions.length}</span> of {allConditions.length} conditions
            </div>
          </div>

          {/* Category Filter Pills */}
          <div className="flex items-center gap-2 mt-4 pt-4 border-t border-[#DCE5EF] overflow-x-auto pb-1 scrollbar-none">
            <span className="text-xs font-bold text-[#8C9AA8] flex items-center gap-1.5 shrink-0 mr-1 hidden sm:flex">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 cursor-pointer ${active
                      ? "bg-[#102D4F] text-white shadow-xs"
                      : "bg-[#F5F8FB] text-[#52647A] hover:bg-[#DCE5EF] hover:text-[#102D4F]"
                    }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Directory Grid */}
        {filteredConditions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredConditions.map((condition) => (
              <div
                key={condition.slug}
                className="group bg-white rounded-2xl border border-[#DCE5EF] hover:border-[#102D4F]/30 hover:shadow-lg transition-all duration-300 flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Category & Urgency */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47721] bg-[#FFF4EB] border border-[#FDE8D7] px-2.5 py-1 rounded-full">
                      {condition.category}
                    </span>
                    <span
                      className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${condition.urgency === "Urgent Trauma Care"
                          ? "bg-rose-50 text-rose-700 border border-rose-200"
                          : condition.urgency === "Prompt Specialist Review"
                            ? "bg-amber-50 text-amber-800 border border-amber-200"
                            : "bg-emerald-50 text-emerald-700 border border-emerald-200"
                        }`}
                    >
                      {condition.urgency}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug mb-2">
                    {condition.title}
                  </h3>
                  <p className="text-xs text-[#52647A] leading-relaxed mb-4 line-clamp-2">
                    {condition.shortDescription}
                  </p>

                  {/* Common Symptoms Bullets */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F5F8FB]">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                      Key Warning Signs:
                    </div>
                    {condition.commonSymptoms.slice(0, 3).map((sym, sIdx) => (
                      <div key={sIdx} className="flex items-start gap-2 text-xs text-[#52647A]">
                        <AlertCircle className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{sym}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Links */}
                <div className="p-4 bg-[#F5F8FB] border-t border-[#DCE5EF] flex items-center justify-between gap-3">
                  <Link
                    href={`/conditions/${condition.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors"
                  >
                    <span>Read Full Guide</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>

                  {condition.relatedTreatments[0] && (
                    <Link
                      href={`/treatments/${condition.relatedTreatments[0].slug}`}
                      className="text-[11px] font-semibold text-[#52647A] hover:text-[#F47721] truncate max-w-[140px]"
                      title={condition.relatedTreatments[0].title}
                    >
                      {condition.relatedTreatments[0].badge} &rarr;
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty Search State */
          <div className="bg-white rounded-2xl p-10 text-center border border-[#DCE5EF] max-w-md mx-auto">
            <div className="w-12 h-12 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center mx-auto mb-3">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-base font-bold text-[#102D4F] mb-1">
              No matching conditions found
            </h3>
            <p className="text-xs text-[#52647A] mb-4">
              Try searching with broader symptoms such as &ldquo;knee&rdquo;, &ldquo;shoulder&rdquo;, &ldquo;tear&rdquo;, or reset the category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="text-xs font-bold text-[#F47721] hover:underline"
            >
              Reset Filters &amp; Search
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}

