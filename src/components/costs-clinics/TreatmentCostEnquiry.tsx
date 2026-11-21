"use client";

import React from "react";
import Link from "next/link";
import { PhoneCall, ArrowRight, Info, CheckCircle2, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/constants/clinicInfo";

const TREATMENT_CATEGORIES = [
  {
    id: "consultation",
    title: "Orthopaedic OPD Consultation",
    icon: "🩺",
    items: [
      "New patient consultation with physical orthopaedic examination",
      "MRI and imaging review and second opinion",
      "Sports injury initial assessment",
      "Post-operative follow-up visit",
    ],
    note: "Contact clinic for current consultation fee information.",
    urgent: false,
  },
  {
    id: "arthroscopy",
    title: "Arthroscopy & Sports Injury Surgery",
    icon: "🔬",
    items: [
      "ACL / PCL reconstruction (single or double bundle)",
      "Meniscus repair, partial meniscectomy",
      "Shoulder rotator cuff repair",
      "Bankart labral repair for recurrent dislocation",
      "Cartilage microfracture or restoration",
    ],
    note: "Cost depends on procedure complexity, implant choice, and hospital admission duration. Contact for a personalized surgical estimate.",
    urgent: false,
  },
  {
    id: "joint-replacement",
    title: "Knee & Hip Joint Replacement",
    icon: "🦴",
    items: [
      "Total Knee Replacement (TKR) — implant-inclusive packages available",
      "Partial / unicompartmental knee replacement",
      "Total Hip Replacement (THR)",
      "Computer-navigated AR joint replacement (Pixee Medical certified)",
      "Revision joint replacement",
    ],
    note: "Joint replacement cost varies by implant brand, navigation technology, and hospitalization duration. Contact for a detailed cost breakdown specific to your case.",
    urgent: true,
  },
  {
    id: "trauma",
    title: "Fracture Fixation & Trauma Surgery",
    icon: "🏥",
    items: [
      "Closed or open fracture reduction and internal fixation (ORIF)",
      "Intramedullary nailing for long bone fractures",
      "Locking plate fixation for periarticular fractures",
      "Emergency orthopaedic trauma stabilization",
    ],
    note: "Trauma surgery costs depend on fracture pattern, implant requirement, and ICU or ward stay. Emergency procedures are prioritized without delay for cost discussion.",
    urgent: false,
  },
];

export function TreatmentCostEnquiry() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                COST ENQUIRY & ESTIMATES
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#102D4F] tracking-tight">
              Treatment Categories & Cost Enquiry
            </h2>
            <p className="mt-2.5 text-sm sm:text-base text-[#52647A] leading-relaxed">
              Exact surgical costs depend on individual clinical evaluation, implant selection, and hospitalization needs. Enquire via phone or WhatsApp for a personalized estimate.
            </p>
          </div>

          {/* Important disclaimer banner */}
          <div className="mb-8 p-4 rounded-xl bg-amber-50/80 border border-amber-200 flex items-start gap-3">
            <Info className="w-5 h-5 text-amber-700 shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm text-amber-900 leading-relaxed">
              <strong>Pricing Transparency: </strong>
              In compliance with medical ethics and to avoid misleading information, we do not publish fixed package prices on this website. Surgery costs vary significantly by implant choice, patient BMI, co-morbidities, hospital stay duration, and anaesthesia requirements. Please call or WhatsApp us for a detailed, honest cost estimate after your clinical evaluation.
            </div>
          </div>

          {/* Category Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {TREATMENT_CATEGORIES.map((cat) => (
              <div
                key={cat.id}
                className={`bg-white rounded-2xl p-6 sm:p-7 border flex flex-col justify-between transition-all hover:shadow-md ${
                  cat.urgent
                    ? "border-[#F47721]/40 shadow-xs shadow-[#F47721]/5"
                    : "border-[#DCE5EF]"
                }`}
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-2xl">{cat.icon}</span>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F] leading-snug">
                      {cat.title}
                    </h3>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {cat.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52647A]">
                        <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F5F8FB]">
                  <p className="text-xs text-[#8C9AA8] italic mb-3">{cat.note}</p>
                  <div className="flex flex-wrap gap-2">
                    <a
                      href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F8FB] border border-[#DCE5EF] text-xs font-bold text-[#102D4F] hover:bg-[#102D4F] hover:text-white transition-all"
                    >
                      <PhoneCall className="w-3.5 h-3.5" />
                      <span>Call for Estimate</span>
                    </a>
                    <a
                      href={CLINIC_INFO.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F8FB] border border-[#DCE5EF] text-xs font-bold text-[#102D4F] hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Book Appointment CTA */}
          <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F5F8FB] border border-[#DCE5EF] flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-bold text-[#102D4F]">
                Want a Detailed Cost Estimate?
              </h3>
              <p className="text-xs sm:text-sm text-[#52647A] mt-1">
                An in-person OPD evaluation is the most accurate way to understand your specific treatment pathway and associated costs.
              </p>
            </div>
            <Link
              href="/book-appointment"
              className="shrink-0 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F47721] text-white text-sm font-bold hover:bg-[#d96210] transition-all shadow-md shadow-[#F47721]/20"
            >
              <span>Book a Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
