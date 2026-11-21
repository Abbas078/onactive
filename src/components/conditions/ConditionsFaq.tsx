"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";

const GENERAL_CONDITIONS_FAQS = [
  {
    question: "Do all ligament tears or orthopaedic injuries require surgery?",
    answer: "No. A substantial proportion of orthopaedic conditions are managed conservatively with structured physical therapy, guided rest, anti-inflammatory medications, and targeted bracing. Surgical options like arthroscopy or reconstruction are recommended only when there is mechanical joint instability, complete high-grade tears in active individuals, or when conservative care does not provide adequate symptom relief.",
  },
  {
    question: "How do I know if I need an MRI or just an X-ray?",
    answer: "Digital X-rays are the initial diagnostic imaging modality of choice to inspect bone contours, fractures, joint alignment, and arthritic joint-space narrowing. However, X-rays do not show soft tissues like the ACL, meniscus, labrum, or cartilage. If the physical examination suggests soft tissue pathology or unexplained swelling, a 3T MRI is typically ordered.",
  },
  {
    question: "Can an ACL or meniscus tear heal on its own without surgery?",
    answer: "The inner two-thirds of the meniscus (the 'white-white' zone) has minimal blood supply and cannot heal autonomously. Similarly, a completely torn ACL does not reattach on its own. However, partial tears or low-demand patients may function well with quadriceps and hamstring strengthening without surgery. Dr. Ankit evaluates your specific activity goals and knee stability before deciding on surgery.",
  },
  {
    question: "What is the difference between arthritis and a sports injury?",
    answer: "A sports injury typically involves an acute traumatic event (e.g., sudden pivot, pop, or collision) causing damage to ligaments, tendons, or menisci in an otherwise healthy joint. Osteoarthritis is a gradual, chronic wear-and-tear process where the smooth articular cartilage cushioning bone ends progressively thins over months or years.",
  },
  {
    question: "How should I prepare for my first orthopaedic consultation with Dr. Ankit Jaipal?",
    answer: "Please bring all prior digital X-rays, MRI scan CDs/films, medical reports, a list of current medications, and wear comfortable clothing (such as shorts for knee evaluations or a loose sleeveless shirt for shoulder evaluations) that allows the doctor to physically examine the affected joint.",
  },
  {
    question: "Are consultations and surgical procedures covered by RGHS and cashless insurance?",
    answer: "Yes. Dr. Ankit Jaipal's practice at Sevayatan Multispeciality Hospital Jaipur is empaneled for RGHS (Rajasthan Government Health Scheme) as well as major private health insurance and TPA cashless hospitalization networks.",
  },
];

export function ConditionsFaq() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFF4EB] border border-[#FDE8D7] text-[#F47721] text-xs font-bold tracking-wide uppercase mb-3">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>PATIENT QUESTIONS</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102D4F] tracking-tight">
              Frequently Asked Questions
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#52647A]">
              Clear answers to help you navigate diagnosis, imaging, and treatment options.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3.5">
            {GENERAL_CONDITIONS_FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${isOpen
                      ? "border-[#F47721]/40 bg-[#F5F8FB] shadow-xs"
                      : "border-[#DCE5EF] bg-white hover:border-[#102D4F]/20"
                    }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  >
                    <span className="text-sm sm:text-base font-bold text-[#102D4F] leading-snug">
                      {faq.question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${isOpen
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

