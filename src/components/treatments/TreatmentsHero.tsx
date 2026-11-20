import React from "react";
import Link from "next/link";
import { ChevronRight, Award, ShieldCheck, Stethoscope, Building2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CLINIC_INFO } from "@/constants/clinicInfo";

export function TreatmentsHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F5F8FB] via-white to-white py-10 sm:py-14 lg:py-16 border-b border-[#DCE5EF]">
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
          <span className="font-semibold text-[#102D4F]">Treatments &amp; Surgeries</span>
        </nav>

        <div className="max-w-4xl space-y-4 sm:space-y-6">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <Badge
              variant="orange"
              icon={<Stethoscope className="w-3.5 h-3.5" />}
            >
              Consultant Orthopaedics
            </Badge>
            <Badge
              variant="subtle"
              icon={<Building2 className="w-3.5 h-3.5 text-[#F47721]" />}
            >
              Sevayatan Multispeciality Hospital
            </Badge>
            <Badge
              variant="rghs"
              icon={<ShieldCheck className="w-3.5 h-3.5 text-blue-600" />}
            >
              RGHS &amp; Cashless Empanelled
            </Badge>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-[1.15]">
            Orthopaedic Treatments &amp; <span className="text-[#F47721]">Surgical Care</span>
          </h1>

          <p className="text-base sm:text-lg text-[#52647A] leading-relaxed max-w-3xl">
            Evidence-based clinical care, minimally invasive keyhole arthroscopy, Augmented Reality (AR) computer-navigated joint replacement, and complex fracture management in Jaipur led by <strong>{CLINIC_INFO.doctorName}</strong>.
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 text-xs sm:text-sm text-[#52647A]">
            <div className="flex items-center gap-2 font-semibold text-[#102D4F]">
              <Award className="w-4 h-4 text-[#F47721]" />
              <span>Triple Fellowship Certified</span>
            </div>
            <span className="w-1.5 h-1.5 rounded-full bg-[#DCE5EF]" />
            <div className="flex items-center gap-2 font-semibold text-[#102D4F]">
              <ShieldCheck className="w-4 h-4 text-[#F47721]" />
              <span>Joint Preservation First Approach</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

