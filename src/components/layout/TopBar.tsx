import React from "react";
import Link from "next/link";
import { Clock, MapPin, Phone, ShieldCheck } from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinicInfo";

export function TopBar() {
  return (
    <div className="bg-[#0A1C33] text-white text-xs border-b border-white/10 hidden md:block">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between gap-4">
          {/* Left info items */}
          <div className="flex items-center gap-6 text-neutral-300">
            <div className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Clock className="w-3.5 h-3.5 text-[#F47721]" />
              <span>{CLINIC_INFO.opdTimings}</span>
            </div>

            <span className="w-px h-3 bg-white/20" />

            <Link
              href="/costs-clinics"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
              <span>Arthrogenix Clinic, Durgapura, Jaipur</span>
            </Link>
          </div>

          {/* Right info items */}
          <div className="flex items-center gap-5">
            {/* RGHS & Cashless Badge */}
            <Link
              href="/costs-clinics#cashless"
              className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#102D4F] border border-[#F47721]/50 text-[#F5F8FB] hover:border-[#F47721] transition-colors text-[11px] font-medium"
            >
              <ShieldCheck className="w-3 h-3 text-[#F47721]" />
              <span>{CLINIC_INFO.rghsCashlessNote}</span>
            </Link>

            <span className="w-px h-3 bg-white/20" />

            {/* Language cue */}
            <span className="text-neutral-300 flex items-center gap-1 text-[11px] cursor-default">
              <span>🌐</span>
              <span>हिंदी</span>
            </span>

            <span className="w-px h-3 bg-white/20" />

            {/* Phone */}
            <a
              href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
              className="flex items-center gap-1.5 font-semibold text-white hover:text-[#F47721] transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#F47721]" />
              <span>{CLINIC_INFO.primaryPhone}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

