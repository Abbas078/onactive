import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Award, GraduationCap, Building2, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { DR_ANKIT_CV } from "@/constants/doctorCv";
import { DOCTOR_IMAGES } from "@/constants/mediaAssets";

export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white py-8 sm:py-12 lg:py-16 border-b border-[#DCE5EF]">
      <Container>
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs sm:text-sm text-[#52647A] mb-6"
          aria-label="Breadcrumb"
        >
          <Link href="/" className="hover:text-[#F47721] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#7B8E9F]" />
          <span className="font-semibold text-[#102D4F]">
            About {DR_ANKIT_CV.personalInfo.name}
          </span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Title & Key Credentials */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            <div className="flex flex-wrap items-center gap-2 sm:gap-3">
              <Badge
                variant="orange"
                icon={<Building2 className="w-3.5 h-3.5" />}
              >
                {DR_ANKIT_CV.personalInfo.currentAffiliation}
              </Badge>
              <Badge
                variant="subtle"
                icon={<GraduationCap className="w-3.5 h-3.5 text-[#F47721]" />}
              >
                SMS Medical College Alumnus
              </Badge>
            </div>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-[1.15]">
              About <span className="text-[#F47721]">{DR_ANKIT_CV.personalInfo.name}</span>
            </h1>

            <p className="text-base sm:text-lg font-bold text-[#F47721]">
              {DR_ANKIT_CV.personalInfo.designation} | Joint Replacement &amp; AR Knee Surgeon
            </p>

            <blockquote className="border-l-4 border-[#F47721] pl-4 py-2 text-sm sm:text-base italic text-[#102D4F] bg-[#FFF4EB]/50 rounded-r-2xl leading-relaxed">
              &ldquo;Dedicated to providing advanced, personalized and evidence-based orthopaedic care to help patients regain mobility, reduce pain and return to an active, healthy life.&rdquo;
            </blockquote>

            <p className="text-sm sm:text-base text-[#52647A] leading-relaxed">
              {DR_ANKIT_CV.profileSummary}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-xs sm:text-sm text-[#52647A]">
              <div className="flex items-center gap-1.5 font-medium text-[#102D4F]">
                <MapPin className="w-4 h-4 text-[#F47721]" />
                <span>{DR_ANKIT_CV.personalInfo.location}</span>
              </div>
              <span className="w-1.5 h-1.5 rounded-full bg-[#DCE5EF]" />
              <div className="flex items-center gap-1.5 font-medium text-[#102D4F]">
                <Award className="w-4 h-4 text-[#F47721]" />
                <span>Triple Fellowship Certified</span>
              </div>
            </div>
          </div>

          {/* Right Column: Doctor Portrait with Signature Curved Arch */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px]">
              {/* Mockup-matching Orange Curved Arch Accent */}
              <div className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-44 sm:w-56 h-44 sm:h-56 bg-gradient-to-tr from-[#F47721] to-[#F7934C] rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 w-40 sm:w-48 h-40 sm:h-48 bg-[#102D4F]/10 rounded-full blur-lg" />

              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-b from-[#102D4F]/5 to-[#F5F8FB]">
                <Image
                  src={DOCTOR_IMAGES.doctorIntro.src}
                  alt={DOCTOR_IMAGES.doctorIntro.alt}
                  fill
                  priority
                  sizes="(max-width: 640px) 340px, 380px"
                  className="object-cover object-top"
                />

                {/* Bottom Overlay Badge */}
                <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 bg-white/95 backdrop-blur-sm border border-[#DCE5EF] rounded-xl px-3.5 py-2 shadow-lg flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FFF4EB] flex items-center justify-center text-[#F47721] shrink-0">
                    <GraduationCap className="w-4 h-4" />
                  </div>
                  <div className="text-left">
                    <p className="text-[11px] font-bold text-[#102D4F] leading-tight">
                      M.S. Orthopaedics
                    </p>
                    <p className="text-[10px] text-[#52647A] leading-tight">
                      SMS Medical College
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

