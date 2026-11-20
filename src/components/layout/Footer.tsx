import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, MessageSquare, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { FOOTER_LINKS } from "@/constants/navigation";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="bg-[#F5F8FB] border-t border-[#DCE5EF] text-[#102D4F]">
      {/* Top Banner / Cashless Strip */}
      <div className="bg-[#102D4F] text-white py-3.5 sm:py-4 border-b border-white/10">
        <Container>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
            <div className="flex items-start sm:items-center gap-2">
              <ShieldCheck className="w-4 h-4 sm:w-5 sm:h-5 text-[#F47721] shrink-0 mt-0.5 sm:mt-0" />
              <p className="text-xs sm:text-sm font-medium">
                <span className="font-bold text-white">RGHS & Cashless Mediclaim:</span>{" "}
                <span className="text-neutral-300">
                  Full insurance coverage & cashless admission at Sevayatan Multispeciality Hospital Jaipur.
                </span>
              </p>
            </div>
            <Link
              href="/costs-clinics#cashless"
              className="inline-flex items-center text-xs font-semibold text-[#F47721] hover:text-[#DF6410] underline shrink-0 pl-6 sm:pl-0"
            >
              Learn about insurance & cashless →
            </Link>
          </div>
        </Container>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Column 1: Brand & Doctor Intro */}
          <div className="space-y-4">
            <div className="relative h-12 w-48">
              <Image
                src="/images/logo.png"
                alt="Arthrogenix - Dr. Ankit Jaipal"
                fill
                sizes="192px"
                className="object-contain object-left"
              />
            </div>
            <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed">
              Led by <strong className="text-[#102D4F]">Dr. Ankit Jaipal</strong> (MS Orthopaedics, SMS Jaipur, Fellowship in Joint Replacement &amp; Arthroscopy). Dedicated to evidence-based care, AR-guided joint replacement, and sports recovery in Jaipur.
            </p>
            <div className="pt-2 flex flex-col gap-2 text-xs sm:text-sm">
              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="flex items-center gap-2 text-[#102D4F] hover:text-[#F47721] font-semibold transition-colors"
              >
                <Phone className="w-4 h-4 text-[#F47721]" />
                <span>{CLINIC_INFO.primaryPhone}</span>
              </a>
              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#128C7E] hover:underline font-medium transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
              <a
                href={`mailto:${CLINIC_INFO.email}`}
                className="flex items-center gap-2 text-[#52647A] hover:text-[#102D4F] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#F47721]" />
                <span>{CLINIC_INFO.email}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Key Treatments */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102D4F] mb-4">
              Treatments & Surgeries
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.treatments.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#52647A] hover:text-[#F47721] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102D4F] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {FOOTER_LINKS.quickLinks.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[#52647A] hover:text-[#F47721] transition-colors inline-block"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Clinic OPD & Locations */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-wider text-[#102D4F] mb-4">
              Clinic Locations (Jaipur)
            </h3>
            <div className="space-y-4 text-xs sm:text-sm text-[#52647A]">
              <div>
                <p className="font-semibold text-[#102D4F] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <span>Durgapura Clinic (Main OPD)</span>
                </p>
                <p className="mt-0.5 text-xs text-[#52647A] pl-5">
                  Tonk Road, near Elevated Road, Jaipur
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#102D4F] flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <span>Vaishali Nagar Clinic</span>
                </p>
                <p className="mt-0.5 text-xs text-[#52647A] pl-5">
                  Vaishali Nagar, Jaipur (By Appointment)
                </p>
              </div>

              <div>
                <p className="font-semibold text-[#102D4F] flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-[#F47721] shrink-0" />
                  <span>Consultation Timings</span>
                </p>
                <p className="mt-0.5 text-xs text-[#52647A] pl-5">
                  {CLINIC_INFO.opdTimings}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Medical Disclaimer */}
        <div className="mt-12 pt-8 border-t border-[#DCE5EF] text-[11px] text-[#7B8E9F] leading-relaxed">
          <p>
            <strong>Medical Disclaimer:</strong> The information provided on this website is for general informational and educational purposes only and should not be construed as medical diagnosis, individual medical advice, or surgical recommendation. Patients should always consult a qualified orthopaedic surgeon for professional evaluation of any musculoskeletal injury or persistent symptoms.
          </p>
        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="mt-6 pt-4 border-t border-[#DCE5EF]/60 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52647A]">
          <p>
            © 2026 Arthrogenix. All rights reserved. Dr. Ankit Jaipal, Jaipur.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy-policy" className="hover:text-[#F47721] transition-colors">
              Privacy Policy
            </Link>
            <span className="w-1 h-1 rounded-full bg-[#DCE5EF]" />
            <Link href="/terms" className="hover:text-[#F47721] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

