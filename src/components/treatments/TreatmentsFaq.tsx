import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TreatmentsFaq() {
  const faqs = [
    {
      q: "How do I know if I need surgery or if physical therapy will be enough?",
      a: "Every orthopaedic evaluation begins with a conservative mindset. Mild ligament sprains, partial tendon tears, and early osteoarthritis often improve significantly with structured physical therapy, activity modification, and joint protection. Surgery is considered only when persistent mechanical instability, locking, full-thickness structural detachment, or severe pain restricts daily activities despite dedicated non-surgical trials.",
    },
    {
      q: "Where are surgical procedures performed by Dr. Ankit Jaipal?",
      a: "Surgical procedures, arthroscopic reconstructions, and joint replacements are conducted at Sevayatan Multispeciality Hospital Jaipur in modular Class-100 laminar airflow operating theatres equipped with high-definition 4K arthroscopy towers and Pixee AR surgical navigation.",
    },
    {
      q: "Are orthopaedic surgeries covered under RGHS and private insurance?",
      a: "Yes. Inpatient surgical admissions at Sevayatan Multispeciality Hospital are fully empanelled with RGHS (Rajasthan Government Health Scheme) and major corporate TPA health insurance networks for cashless medical claims.",
    },
    {
      q: "Can I bring my previous MRI or X-ray scans for a second opinion?",
      a: "Yes, absolutely. We encourage patients to bring their existing imaging discs, printed MRI films, and diagnostic reports to the consultation for an in-depth review and second opinion before making any surgical decision.",
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="FREQUENTLY ASKED QUESTIONS"
          title="Questions About Orthopaedic Treatments &amp; Surgery"
          subtitle="Clear, honest clinical answers to common patient concerns regarding procedures, conservative options, and hospital care."
          align="center"
        />

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white border border-[#DCE5EF] rounded-2xl p-5 sm:p-6 shadow-xs hover:border-[#F47721] transition-colors"
            >
              <h3 className="text-base sm:text-lg font-bold text-[#102D4F] leading-snug mb-2">
                {faq.q}
              </h3>
              <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
