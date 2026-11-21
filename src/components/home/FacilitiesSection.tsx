"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Building2, Video, ShieldCheck, Cpu, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function FacilitiesSection() {
  const { openModal } = useAppointmentModal();

  const facilityPoints = [
    {
      title: "Pixee Medical AR Navigation Glasses",
      desc: "Wearable augmented reality guidance delivering millimeter-accurate bone resection angles and anatomical axis alignment for knee replacement.",
      icon: <Cpu className="w-5 h-5 text-[#F47721]" />,
      badge: "Sub-Millimeter Precision",
    },
    {
      title: "4K Ultra-HD Arthroscopy Towers",
      desc: "Intra-articular magnification systems allowing sub-millimeter visualization to repair torn meniscus fibers, labral rims, and cruciate ligaments.",
      icon: <Video className="w-5 h-5 text-[#F47721]" />,
      badge: "High-Definition Keyhole",
    },
    {
      title: "Class-100 Modular Laminar Airflow OTs",
      desc: "Ultra-sterile surgical environment with multi-stage HEPA filtration, creating positive air pressure to maintain virtually zero surgical infection rates.",
      icon: <Building2 className="w-5 h-5 text-[#F47721]" />,
      badge: "HEPA Sterile Standard",
    },
    {
      title: "Sevayatan Multispeciality Hospital Inpatient Care",
      desc: "NABH-accredited tertiary hospital facility with 24/7 ICU, anaesthesia coverage, dedicated orthopaedic nursing, and complete cashless insurance desk.",
      icon: <ShieldCheck className="w-5 h-5 text-[#F47721]" />,
      badge: "Cashless & RGHS",
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor AR Profile Image with Surgical Annotation Overlay */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] sm:aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white ring-1 ring-[#DCE5EF]">
              <Image
                src="/images/doctor/dr-ankit-jaipal-ar-headset-profile.jpeg"
                alt="Dr. Ankit Jaipal using Pixee Medical AR Surgical Navigation for Knee Replacement"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />

              {/* Bottom Gradient Overlay with Clear Details */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/90 via-[#102D4F]/30 to-transparent flex flex-col justify-end p-6 text-white">
                <span className="inline-block px-3 py-1 rounded-full bg-[#F47721] text-white text-[10px] font-extrabold uppercase tracking-wider mb-2 self-start shadow-xs">
                  Advanced Surgical Technology
                </span>
                <p className="text-base sm:text-lg font-bold leading-tight">
                  Pixee AR Computer Navigation
                </p>
                <p className="text-xs text-neutral-200 mt-1">
                  Sevayatan Multispeciality Hospital • Full RGHS &amp; Cashless Empaneled
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Facility Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-6 h-[2px] bg-[#F47721]" />
                <span className="text-xs font-bold tracking-wider uppercase text-[#F47721]">
                  SURGICAL INFRASTRUCTURE &amp; TECHNOLOGY
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102D4F] tracking-tight leading-tight">
                Advanced Facilities &amp; Modern Surgical Suites
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#52647A] leading-relaxed">
                Combining high-definition arthroscopic imaging with cutting-edge augmented reality navigation and rigorous hospital sterility protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {facilityPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 sm:p-4.5 rounded-2xl border border-[#DCE5EF] shadow-xs space-y-2 hover:border-[#F47721]/50 hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between gap-2">
                    <div className="w-9 h-9 rounded-xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span className="text-[10px] font-bold text-[#102D4F] bg-[#F5F8FB] px-2 py-0.5 rounded-md border border-[#DCE5EF]">
                      {item.badge}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-bold text-xs sm:text-sm text-[#102D4F] leading-snug">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#52647A] leading-relaxed mt-1.5">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/costs-clinics#cashless"
                variant="orangeOutline"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
                className="font-bold border-[#F47721] text-[#F47721]"
              >
                Insurance &amp; RGHS Information
              </Button>

              <Button
                onClick={() => openModal()}
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
                className="font-bold shadow-md shadow-[#F47721]/20"
              >
                Schedule Evaluation
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
