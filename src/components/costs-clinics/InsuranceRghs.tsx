import React from "react";
import Link from "next/link";
import { ShieldCheck, CheckCircle2, ArrowRight, Building2, FileText, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/constants/clinicInfo";

const RGHS_BENEFITS = [
  "No upfront payment required at the time of RGHS-approved hospitalisation",
  "Cashless surgical admission and inpatient care at Sevayatan Multispeciality Hospital",
  "Covers joint replacement surgeries (TKR / THR) under approved RGHS tariffs",
  "Arthroscopy and orthopaedic trauma surgeries covered under applicable RGHS packages",
  "Pre-authorisation obtained directly through our hospital empanelment desk",
  "Available for state government employees, pensioners, and eligible family members",
];

const CASHLESS_STEPS = [
  {
    step: "01",
    title: "Confirm Insurance Eligibility",
    description: "Bring your health insurance card and policy documents to the OPD. Our team will verify your TPA empanelment status.",
  },
  {
    step: "02",
    title: "Clinical Evaluation & Treatment Plan",
    description: "Dr. Ankit Jaipal conducts a thorough examination and determines the most appropriate surgical or conservative plan.",
  },
  {
    step: "03",
    title: "Pre-Authorisation Request",
    description: "Our hospital admin desk processes the pre-authorisation request with your TPA or RGHS department before surgery.",
  },
  {
    step: "04",
    title: "Cashless Admission & Surgery",
    description: "Upon approval, proceed with cashless admission, surgery, and in-hospital physiotherapy at Sevayatan Hospital.",
  },
  {
    step: "05",
    title: "Post-Discharge Settlement",
    description: "Any balance beyond your policy cover (if applicable) is communicated transparently before discharge.",
  },
];

export function InsuranceRghs() {
  return (
    <section className="py-12 sm:py-16 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto space-y-10">

          {/* RGHS Section */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#F47721]" />
                <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                  RGHS & CASHLESS INSURANCE
                </span>
                <span className="w-5 h-[2px] bg-[#F47721]" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
                RGHS Empanelment &amp; Cashless Insurance
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#52647A]">
                Sevayatan Multispeciality Hospital is empanelled for RGHS (Rajasthan Government Health Scheme) and major private health insurance networks.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* RGHS Benefits Card */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                    RGHS Scheme Benefits
                  </h3>
                </div>
                <ul className="space-y-3">
                  {RGHS_BENEFITS.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#52647A]">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-5 pt-4 border-t border-[#F5F8FB] text-xs text-[#8C9AA8] italic">
                  RGHS coverage and approved tariffs are subject to current scheme guidelines and are determined at the time of pre-authorisation. Please contact the hospital admin desk for current scheme status.
                </div>
              </div>

              {/* Insurance Partners Note */}
              <div className="bg-white rounded-2xl p-6 sm:p-7 border border-[#DCE5EF] shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-[#102D4F]">
                      Private Health Insurance &amp; TPA
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed mb-4">
                    Sevayatan Multispeciality Hospital is empanelled with major third-party administrators (TPAs) and private health insurance providers in India. Cashless admission is available for covered patients subject to your policy terms.
                  </p>
                  <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed mb-4">
                    Please bring your insurance card, policy number, and TPA pre-authorisation documents when reporting to the hospital. Our admin desk will coordinate directly with your TPA.
                  </p>
                  <div className="p-3.5 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF] text-xs text-[#52647A]">
                    <strong className="text-[#102D4F]">Note: </strong>
                    Not all procedures may be covered under all policies. Coverage limits, co-payment obligations, and pre-authorisation timelines depend on your specific health insurance plan. Please verify with your insurer in advance.
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-[#F5F8FB] flex flex-wrap gap-2">
                  <a
                    href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F8FB] border border-[#DCE5EF] text-xs font-bold text-[#102D4F] hover:bg-[#102D4F] hover:text-white transition-all"
                  >
                    <Phone className="w-3.5 h-3.5" />
                    <span>Call for TPA Query</span>
                  </a>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F5F8FB] border border-[#DCE5EF] text-xs font-bold text-[#102D4F] hover:bg-[#F47721] hover:text-white hover:border-[#F47721] transition-all"
                  >
                    <FileText className="w-3.5 h-3.5" />
                    <span>Send Insurance Enquiry</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Cashless Process Steps */}
          <div>
            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D4F] mb-6 text-center">
              How the Cashless Admission Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {CASHLESS_STEPS.map((step, idx) => (
                <div key={idx} className="relative bg-white rounded-2xl p-4 border border-[#DCE5EF] shadow-xs text-center">
                  <div className="w-9 h-9 rounded-full bg-[#102D4F] text-white text-xs font-extrabold flex items-center justify-center mx-auto mb-3">
                    {step.step}
                  </div>
                  <h4 className="text-xs font-bold text-[#102D4F] mb-1.5 leading-snug">{step.title}</h4>
                  <p className="text-[11px] text-[#52647A] leading-relaxed">{step.description}</p>
                  {idx < CASHLESS_STEPS.length - 1 && (
                    <ArrowRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-[#DCE5EF]" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
