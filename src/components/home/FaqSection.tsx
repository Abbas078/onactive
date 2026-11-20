"use client";

import React, { useState } from "react";
import { ChevronDown, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { HOMEPAGE_FAQS } from "@/constants/homeContent";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First FAQ open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container size="tight">
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Clear Answers to Common Orthopaedic Concerns"
          subtitle="Medical insights regarding arthroscopic procedures, recovery times, and cashless insurance coverage."
        />

        <div className="space-y-3.5">
          {HOMEPAGE_FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <Card
                key={idx}
                padding="none"
                className={cn(
                  "border-[#DCE5EF] transition-all duration-200 overflow-hidden",
                  isOpen ? "border-[#F47721]/50 shadow-md ring-1 ring-[#F47721]/20" : "hover:border-[#B8CDE2]"
                )}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#FFF4EB] text-[#F47721] text-xs font-bold flex items-center justify-center shrink-0">
                      Q{idx + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-[#102D4F]">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={cn(
                      "w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200",
                      isOpen ? "bg-[#F47721] text-white rotate-180" : "bg-[#F5F8FB] text-[#52647A]"
                    )}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-4 pb-5 pt-1 sm:px-5 sm:pb-6 text-xs sm:text-sm text-[#52647A] leading-relaxed border-t border-neutral-100 animate-in fade-in slide-in-from-top-1 duration-150">
                    <div className="pl-9 space-y-2">
                      <p>{faq.answer}</p>
                      <div className="pt-2">
                        <Badge variant="subtle" size="sm" className="text-[10px]">
                          Category: {faq.category}
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}
        </div>

        {/* Quick query helper card */}
        <div className="mt-10 p-5 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] text-center sm:flex sm:items-center sm:justify-between gap-4">
          <div className="text-left mb-3 sm:mb-0">
            <p className="text-sm font-bold text-[#102D4F]">
              Have a specific joint or MRI query?
            </p>
            <p className="text-xs text-[#52647A]">
              Connect directly with our clinical care desk in Jaipur.
            </p>
          </div>
          <a
            href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
            className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-white border border-[#DCE5EF] hover:border-[#F47721] text-xs font-bold text-[#102D4F] transition-all shadow-xs"
          >
            <Phone className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Call {CLINIC_INFO.primaryPhone}</span>
          </a>
        </div>
      </Container>
    </section>
  );
}

