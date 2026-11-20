import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, ShieldCheck, Clock, MapPin, Phone, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { TreatmentDetail } from "@/constants/treatmentsData";
import { CLINIC_INFO } from "@/constants/clinicInfo";

interface DetailHeroProps {
  treatment: TreatmentDetail;
}

export function DetailHero({ treatment }: DetailHeroProps) {
  return (
    <section className="relative bg-gradient-to-b from-[#F5F8FB] via-white to-[#F5F8FB] pt-28 pb-16 md:pt-32 md:pb-20 border-b border-[#DCE5EF] overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721]/5 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#102D4F]/5 rounded-full blur-3xl -z-10 pointer-events-none" />

      <Container>
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="mb-6">
          <ol className="flex items-center flex-wrap gap-2 text-sm text-[#52647A]">
            <li>
              <Link href="/" className="hover:text-[#F47721] transition-colors">
                Home
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-[#8C9AA8]" />
            </li>
            <li>
              <Link href="/treatments" className="hover:text-[#F47721] transition-colors">
                Treatments
              </Link>
            </li>
            <li>
              <ChevronRight className="w-4 h-4 text-[#8C9AA8]" />
            </li>
            <li className="text-[#102D4F] font-medium" aria-current="page">
              {treatment.title}
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Clinical Title & Highlights */}
          <div className="lg:col-span-7 space-y-5">
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="orange" className="font-semibold px-3 py-1">
                {treatment.heroBadge}
              </Badge>
              <span className="text-xs font-semibold uppercase tracking-wider text-[#52647A] bg-white px-3 py-1 rounded-full border border-[#DCE5EF]">
                {treatment.category}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#102D4F] tracking-tight leading-tight">
              {treatment.title}
            </h1>

            <p className="text-lg md:text-xl text-[#52647A] font-normal leading-relaxed">
              {treatment.subtitle}
            </p>

            {/* Quick Clinical Info Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-white p-3 rounded-xl border border-[#DCE5EF] shadow-xs flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-[#F47721] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#8C9AA8] font-medium uppercase tracking-wider">Protocol</div>
                  <div className="text-xs font-semibold text-[#102D4F]">Evidence-Based</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#DCE5EF] shadow-xs flex items-center gap-2.5">
                <MapPin className="w-5 h-5 text-[#F47721] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#8C9AA8] font-medium uppercase tracking-wider">Hospital OT</div>
                  <div className="text-xs font-semibold text-[#102D4F]">Sevayatan Jaipur</div>
                </div>
              </div>
              <div className="bg-white p-3 rounded-xl border border-[#DCE5EF] shadow-xs flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <Clock className="w-5 h-5 text-[#F47721] shrink-0" />
                <div>
                  <div className="text-[11px] text-[#8C9AA8] font-medium uppercase tracking-wider">Coverage</div>
                  <div className="text-xs font-semibold text-[#102D4F]">RGHS & Cashless</div>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="pt-3 flex flex-wrap items-center gap-4">
              <Button
                href="#appointment-section"
                size="lg"
                variant="primary"
                className="font-semibold px-6"
              >
                Book Clinical Consultation
              </Button>
              <Button
                href={CLINIC_INFO.whatsappLink}
                isExternal
                size="lg"
                variant="outline"
                className="border-[#102D4F] text-[#102D4F] font-semibold px-6 flex items-center gap-2"
                icon={<MessageSquare className="w-4 h-4 text-[#25D366]" />}
              >
                Chat on WhatsApp
              </Button>
              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#102D4F] hover:text-[#F47721] transition-colors py-2"
              >
                <Phone className="w-4 h-4 text-[#F47721]" />
                {CLINIC_INFO.primaryPhone}
              </a>
            </div>
          </div>

          {/* Right Column: Visual Image with Caption */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-[#DCE5EF] shadow-xl bg-white group">
              <div className="aspect-[4/3] relative">
                <Image
                  src={treatment.image}
                  alt={treatment.imageAlt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                />
              </div>

              {/* Caption Overlay */}
              <div className="p-4 bg-white border-t border-[#DCE5EF]">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold text-[#102D4F]">Dr. Ankit Jaipal, MS (Ortho)</p>
                    <p className="text-[11px] text-[#52647A]">Consultant Orthopaedics & Arthroscopy</p>
                  </div>
                  <span className="text-[11px] font-semibold text-[#F47721] bg-[#F47721]/10 px-2.5 py-1 rounded-md">
                    Verified Protocol
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
