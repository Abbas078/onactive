import React from "react";
import Image from "next/image";
import { ShieldCheck, Award, Activity, Building2, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { DOCTOR_IMAGES } from "@/constants/mediaAssets";

export function WhySurgeryWithDrAnkit() {
  const pillars = [
    {
      title: "Triple Fellowship Certified Specialist",
      desc: "Formal fellowship training in Total Knee Replacement (TKR), Arthroscopy, and Joint Replacement following MS Orthopaedics from SMS Medical College, Jaipur.",
      icon: <Award className="w-5 h-5 text-[#F47721]" />,
    },
    {
      title: "Augmented Reality (AR) Computer Navigation",
      desc: "Wearable Pixee AR navigation smart glasses verify anatomical mechanical axis alignment in real time for optimal joint balance.",
      icon: <Activity className="w-5 h-5 text-[#F47721]" />,
    },
    {
      title: "Natural Joint Preservation First",
      desc: "We prioritize repairing torn ligaments, preserving meniscus cushions, and smoothing joint surfaces before considering joint replacement.",
      icon: <ShieldCheck className="w-5 h-5 text-[#F47721]" />,
    },
    {
      title: "Sevayatan Multispeciality Hospital Facility",
      desc: "Modular laminar airflow operating suites, full RGHS coverage, and complete cashless corporate TPA insurance coordination.",
      icon: <Building2 className="w-5 h-5 text-[#F47721]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Technology / Doctor Photo */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[400px]">
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <Image
                  src={DOCTOR_IMAGES.techProfile.src}
                  alt={DOCTOR_IMAGES.techProfile.alt}
                  fill
                  sizes="(max-width: 640px) 340px, 400px"
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/90 via-transparent to-transparent flex items-end p-6">
                  <div className="text-white">
                    <span className="inline-block px-2.5 py-1 rounded-full bg-[#F47721] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                      Technological Precision
                    </span>
                    <p className="text-sm sm:text-base font-bold">
                      Pixee AR Smart Glasses in OT
                    </p>
                    <p className="text-xs text-neutral-300">
                      Sub-millimeter joint alignment verification
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Key Pillars */}
          <div className="lg:col-span-7 space-y-6">
            <SectionHeading
              eyebrow="SURGICAL PHILOSOPHY"
              title={`Why Consult ${CLINIC_INFO.doctorName} for Joint Care`}
              subtitle="Combining rigorous academic training at SMS Medical College with cutting-edge surgical navigation and compassionate patient communication."
              align="left"
              className="mb-0"
            />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {pillars.map((p, idx) => (
                <Card
                  key={idx}
                  padding="md"
                  hoverEffect
                  className="border-[#DCE5EF] bg-white space-y-2"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center shrink-0">
                    {p.icon}
                  </div>
                  <h3 className="text-sm font-bold text-[#102D4F]">
                    {p.title}
                  </h3>
                  <p className="text-xs text-[#52647A] leading-relaxed">
                    {p.desc}
                  </p>
                </Card>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#DCE5EF] flex items-center gap-3 text-xs text-[#102D4F] font-semibold">
              <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0" />
              <span>Full second opinion service on MRI scans &amp; non-operative physical therapy trials.</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

