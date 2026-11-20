import React from "react";
import Image from "next/image";
import { CheckCircle2, ShieldCheck, Calendar, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { DR_ANKIT_CV } from "@/constants/doctorCv";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { DOCTOR_IMAGES } from "@/constants/mediaAssets";

export function AboutBio() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Doctor Photo with Overlay Experience Badge */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Rounded Accent Framing */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#102D4F]/10 via-[#FFF4EB] to-[#F47721]/15 rounded-3xl -rotate-1" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-[#F5F8FB]">
                <Image
                  src={DOCTOR_IMAGES.heroPrimary.src}
                  alt={DOCTOR_IMAGES.heroPrimary.alt}
                  fill
                  sizes="(max-width: 640px) 340px, 380px"
                  className="object-cover object-top"
                />

                {/* AR Tech Badge */}
                <div className="absolute top-4 left-4 bg-[#102D4F]/90 backdrop-blur-md text-white border border-white/20 rounded-xl px-3 py-1.5 shadow-md flex items-center gap-1.5 text-xs font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Pixee AR Certified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bio Narrative & Core Differentiators */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#F47721] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F47721]">
                  MEET THE SURGEON
                </span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#102D4F] tracking-tight">
                Meet {DR_ANKIT_CV.personalInfo.name}
              </h2>
              <p className="mt-1 text-sm sm:text-base font-semibold text-[#F47721]">
                {DR_ANKIT_CV.personalInfo.designation} | Sevayatan Multispeciality Hospital
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
              Dr. Ankit Jaipal is a dedicated orthopaedic surgeon based in Jaipur with extensive clinical training in joint replacement, sports arthroscopy, and complex trauma reconstruction. After completing his Master of Surgery (M.S.) in Orthopaedics at the prestigious Sawai Man Singh (SMS) Medical College, Jaipur, he pursued specialized fellowship training in Total Knee Replacement (TKR), Arthroscopy, and Joint Replacement.
            </p>

            <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
              Currently practicing as Consultant Orthopaedics at Sevayatan Multispeciality Hospital, Dr. Jaipal combines innovative surgical protocols—including Augmented Reality (AR) computer navigation—with structured rehabilitation programs to maximize patient recovery and long-term joint function.
            </p>

            {/* Checkmark Bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {[
                "Specialist in Total Knee (TKR) & Hip Replacement (THR)",
                "Fellowship in Shoulder & Knee Arthroscopy",
                "Advanced Training in Complex Trauma & AO Principles",
                "Comprehensive Post-Surgical Rehabilitation Programs",
                "Innovative AR Surgical Navigation Technology",
                "Clear, Compassionate Patient Communication",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#102D4F]">
                  <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                  <span className="font-semibold">{item}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#DCE5EF]">
              <Button
                href="/book-appointment"
                variant="primary"
                size="md"
                icon={<Calendar className="w-4 h-4" />}
              >
                Book Consultation
              </Button>

              <Button
                href={CLINIC_INFO.whatsappLink}
                isExternal
                variant="orangeOutline"
                size="md"
                icon={<MessageSquare className="w-4 h-4 text-[#F47721]" />}
              >
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

