"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ConditionDetail } from "@/constants/conditionsData";

interface ConditionFaqProps {
  condition: ConditionDetail;
}

export function ConditionFaq({ condition }: ConditionFaqProps) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  if (!condition.faqs || condition.faqs.length === 0) {
    return null;
  }

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                PATIENT QUESTIONS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Frequently Asked Questions About {condition.title}
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              Straightforward clinical answers to help you understand recovery and treatment decisions.
            </p>
          </div>

          {/* Accordion */}
          <div className="space-y-3">
            {condition.faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "border-[#F47721]/40 bg-[#F5F8FB] shadow-2xs"
                      : "border-[#DCE5EF] bg-white hover:border-[#102D4F]/20"
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-xs sm:text-sm md:text-base font-bold text-[#102D4F] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                        isOpen
                          ? "bg-[#F47721] text-white rotate-180"
                          : "bg-[#F5F8FB] text-[#102D4F] border border-[#DCE5EF]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-4 pb-5 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#52647A] leading-relaxed border-t border-[#DCE5EF]/60 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
