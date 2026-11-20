"use client";

import React from "react";
import { Hospital, Stethoscope, ShieldCheck, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function CareerTimeline() {
  const { openModal } = useAppointmentModal();
  const experiences = [
    {
      period: "09/2023 – Present",
      isCurrent: true,
      role: "Consultant Orthopaedics",
      institution: "Sevayatan Multispeciality Hospital",
      location: "Jaipur, Rajasthan",
      icon: Hospital,
      tag: "Current Practice",
      highlights: [
        "Elective joint replacement (TKR/THR) & keyhole arthroscopy",
        "Computer-navigated AR precision surgical protocols",
        "Direct OPD consultations & inpatient post-op care",
      ],
      extra: "RGHS & Cashless Empaneled",
    },
    {
      period: "2020 – 2023",
      isCurrent: false,
      role: "Resident Orthopaedics (M.S.)",
      institution: "Sawai Man Singh (SMS) Medical College",
      location: "Jaipur, Rajasthan",
      icon: Stethoscope,
      tag: "Apex Trauma Training",
      highlights: [
        "Trained at Northern India's premier apex referral trauma hospital",
        "High-volume emergency fracture fixation & polytrauma triage",
        "Hands-on joint reconstruction & pediatric orthopaedics",
      ],
      extra: "SMS Medical College Alumnus",
    },
    {
      period: "2012 – 2020",
      isCurrent: false,
      role: "Senior Medical Officer",
      institution: "BHEL Hospital",
      location: "Haridwar, Uttarakhand",
      icon: ShieldCheck,
      tag: "8 Years Leadership",
      highlights: [
        "8 continuous years directing emergency & inpatient clinical care",
        "Patient-first bedside communication & clinical governance",
        "Acute medical triage and occupational orthopaedic care",
      ],
      extra: "15+ Years Clinical Background",
    },
  ];

  return (
    <section className="py-16 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        {/* Section Heading matching reference design */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-2.5">
            <span className="w-6 h-[2px] bg-[#F47721]" />
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              HOSPITAL APPOINTMENTS
            </span>
            <span className="w-6 h-[2px] bg-[#F47721]" />
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#102D4F] tracking-tight">
            Clinical Experience &amp; Hospital Practice
          </h2>
          <p className="text-sm sm:text-base text-[#52647A] mt-2.5">
            Verified institutional background and surgical leadership across premier medical centers.
          </p>
        </div>

        {/* 3 Balanced Institutional Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
          {experiences.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between ${
                  item.isCurrent
                    ? "border-[#F47721] shadow-lg shadow-[#F47721]/5 hover:shadow-xl hover:shadow-[#F47721]/10 -translate-y-1"
                    : "border-[#DCE5EF] shadow-xs hover:shadow-md hover:border-[#102D4F]/30"
                }`}
              >
                <div>
                  {/* Card Header: Tag & Period */}
                  <div className="flex items-center justify-between gap-2 mb-5">
                    <span
                      className={`text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full ${
                        item.isCurrent
                          ? "bg-[#FFF4EB] text-[#F47721] border border-[#FDE8D7]"
                          : "bg-[#F5F8FB] text-[#102D4F] border border-[#DCE5EF]"
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="text-xs font-bold text-[#52647A]">
                      {item.period}
                    </span>
                  </div>

                  {/* Icon & Role */}
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                        item.isCurrent
                          ? "bg-[#F47721] text-white shadow-sm"
                          : "bg-[#F5F8FB] text-[#102D4F] border border-[#DCE5EF]"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-[#102D4F] leading-snug">
                        {item.role}
                      </h3>
                      <p className="text-xs sm:text-sm font-semibold text-[#F47721] mt-0.5">
                        {item.institution}
                      </p>
                      <p className="text-[11px] text-[#8C9AA8] mt-0.5">
                        {item.location}
                      </p>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-[1px] bg-[#F5F8FB] border-b border-[#DCE5EF] my-4" />

                  {/* Clinical Highlights */}
                  <ul className="space-y-2.5">
                    {item.highlights.map((h, hIdx) => (
                      <li key={hIdx} className="flex items-start gap-2.5 text-xs text-[#52647A] leading-relaxed">
                        <span className="w-4 h-4 rounded-full bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-2.5 h-2.5 stroke-[3]" />
                        </span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Badge */}
                <div className="mt-6 pt-4 border-t border-[#F5F8FB] flex items-center justify-between text-xs">
                  <span className="font-semibold text-[#102D4F]">
                    {item.extra}
                  </span>
                  {item.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-bold text-emerald-600">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                      Active OPD &amp; OT
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Clean Consultation Strip below */}
        <div className="mt-12 max-w-4xl mx-auto text-center bg-white rounded-2xl p-6 border border-[#DCE5EF] shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="text-sm sm:text-base font-bold text-[#102D4F]">
              Consult Dr. Ankit Jaipal at Sevayatan Hospital or Arthrogenix Clinic
            </h4>
            <p className="text-xs text-[#52647A] mt-0.5">
              In-person OPD consultations available Monday through Saturday.
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="shrink-0 bg-[#F47721] hover:bg-[#e06816] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-xl transition-colors shadow-xs cursor-pointer"
          >
            Book Appointment
          </button>
        </div>
      </Container>
    </section>
  );
}
