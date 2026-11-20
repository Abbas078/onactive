"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

interface DetailFaqProps {
  faqs: { question: string; answer: string }[];
  treatmentTitle: string;
}

export function DetailFaq({ faqs, treatmentTitle }: DetailFaqProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 md:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Questions & Clarifications
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              Frequently Asked Questions: {treatmentTitle}
            </h2>
            <p className="text-sm md:text-base text-[#52647A]">
              Clear, transparent answers reviewed by Dr. Ankit Jaipal for patients and families.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-xl border border-[#DCE5EF] overflow-hidden transition-colors"
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-[#102D4F] hover:text-[#F47721] transition-colors"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm md:text-base flex items-center gap-2.5">
                      <HelpCircle className="w-4 h-4 text-[#F47721] shrink-0" />
                      {faq.question}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#8C9AA8] shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180 text-[#F47721]" : ""
                        }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-sm text-[#52647A] leading-relaxed border-t border-[#F5F8FB]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Consultation Note */}
          <div className="mt-8 text-center text-xs text-[#52647A]">
            Have a specific clinical query about your scan or condition?{" "}
            <a href="#appointment-section" className="text-[#F47721] font-semibold underline underline-offset-2">
              Discuss directly during consultation with Dr. Ankit Jaipal.
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

