"use client";

import React from "react";
import Link from "next/link";
import { ShieldCheck, Stethoscope, HeartPulse, CheckCircle2, ArrowRight, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function TestimonialsSection() {
  const { openModal } = useAppointmentModal();

  const standards = [
    {
      title: "In-Depth Clinical & Imaging Review",
      stage: "Step 1: Clinical Evaluation",
      description:
        "Every consultation includes a systematic orthopaedic physical exam, dynamic ligament testing, and meticulous MRI/X-ray review with Dr. Ankit Jaipal.",
      benefits: [
        "Direct review of your MRI & radiographic scans",
        "Clear explanation of underlying joint pathology",
        "Second opinions welcomed without bias",
      ],
      icon: <Stethoscope className="w-5 h-5 text-[#F47721]" />,
    },
    {
      title: "Joint Preservation First Protocol",
      stage: "Step 2: Conservative Care",
      description:
        "We never rush into surgery. Conservative non-surgical options — including specialized physiotherapy, bracing, and targeted injections — are always considered first.",
      benefits: [
        "Native tissue & meniscus cartilage preservation",
        "Targeted physical rehabilitation planning",
        "Surgery recommended only when strictly indicated",
      ],
      icon: <HeartPulse className="w-5 h-5 text-[#F47721]" />,
    },
    {
      title: "Sub-Millimeter Surgical Precision & Recovery",
      stage: "Step 3: Procedure & Rehabilitation",
      description:
        "When surgery is necessary, advanced AR computer navigation and 4K keyhole arthroscopy ensure sub-millimeter precision and rapid return to mobility.",
      benefits: [
        "Class-100 HEPA laminar flow operating suites",
        "Day-care or 24-hr discharge for keyhole procedures",
        "Structured phased physio recovery milestones",
      ],
      icon: <ShieldCheck className="w-5 h-5 text-[#F47721]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <SectionHeading
            eyebrow="PATIENT-CENTERED ORTHOPAEDICS"
            title="Clinical Care Pathway & Ethical Standards"
            subtitle="Transparent clinical evaluations, ethical joint preservation first, and dedicated post-treatment rehabilitation with Dr. Ankit Jaipal in Jaipur."
            align="left"
            className="mb-0 max-w-2xl"
          />

          <Button
            onClick={() => openModal()}
            variant="primary"
            size="md"
            icon={<Calendar className="w-4 h-4" />}
            className="font-bold shrink-0 shadow-md shadow-[#F47721]/20"
          >
            Request Consultation
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {standards.map((s, idx) => (
            <Card
              key={idx}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between bg-white border-[#DCE5EF] hover:border-[#F47721]/50 shadow-xs transition-all duration-300 relative overflow-hidden"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center shadow-xs">
                    {s.icon}
                  </div>
                  <span className="text-[11px] font-bold text-[#F47721] bg-[#FFF4EB] px-2.5 py-1 rounded-full border border-[#FDE8D7]">
                    {s.stage}
                  </span>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                    {s.description}
                  </p>
                </div>

                {/* Key Commitments */}
                <div className="bg-[#F5F8FB] p-3 rounded-xl border border-[#DCE5EF] space-y-2">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#102D4F]">
                    Our Clinical Commitment:
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#52647A]">
                    {s.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                        <span className="leading-snug">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-5 pt-3.5 border-t border-[#DCE5EF] flex items-center justify-between text-xs font-semibold text-[#52647A]">
                <span>Phase {idx + 1} of 3</span>
                <span className="text-[#102D4F] font-bold">Standard of Care</span>
              </div>
            </Card>
          ))}
        </div>

        {/* Ethical Assurance Banner */}
        <div className="mt-8 rounded-2xl bg-white border border-[#DCE5EF] p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3.5 text-left">
            <div className="w-11 h-11 rounded-xl bg-[#102D4F] text-white flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6 text-[#F47721]" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#102D4F]">
                Second Opinions &amp; Scan Reviews Welcome
              </p>
              <p className="text-xs text-[#52647A] mt-0.5">
                Have an existing MRI or surgical recommendation? Bring your scans to Arthrogenix for an objective, evidence-based orthopaedic assessment.
              </p>
            </div>
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#DF6410] whitespace-nowrap shrink-0 group"
          >
            <span>Contact Clinic Desk</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Container>
    </section>
  );
}
