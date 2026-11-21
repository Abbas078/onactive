import React from "react";
import { MapPin, Phone, Clock, Mail, ExternalLink, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_LOCATIONS } from "@/constants/clinicInfo";

const LOCATION_ICONS: Record<string, { emoji: string; badge: string; badgeColor: string }> = {
  "durgapura": {
    emoji: "🏥",
    badge: "Primary OPD",
    badgeColor: "bg-[#FFF4EB] text-[#F47721] border-[#FDE8D7]",
  },
  "sevayatan-hospital": {
    emoji: "🏨",
    badge: "Surgical Hospital",
    badgeColor: "bg-[#102D4F] text-white border-[#102D4F]",
  },
  "vaishali-nagar": {
    emoji: "📍",
    badge: "Follow-Up OPD",
    badgeColor: "bg-emerald-50 text-emerald-800 border-emerald-200",
  },
};

export function ClinicLocationsSection() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                CLINIC LOCATIONS & OPD TIMINGS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Clinic Locations in Jaipur
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#52647A]">
              Three accessible locations for orthopaedic consultation, surgery, and follow-up care.
            </p>
          </div>

          {/* Clinic Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CLINIC_LOCATIONS.map((loc) => {
              const meta = LOCATION_ICONS[loc.slug] ?? { emoji: "📍", badge: "Clinic", badgeColor: "bg-[#F5F8FB] text-[#102D4F] border-[#DCE5EF]" };
              return (
                <div
                  key={loc.slug}
                  className={`bg-white rounded-2xl border flex flex-col overflow-hidden transition-all hover:shadow-lg ${
                    loc.isPrimary ? "border-[#F47721]/40 shadow-xs shadow-[#F47721]/5" : "border-[#DCE5EF]"
                  }`}
                >
                  {/* Card Header */}
                  <div className={`px-5 pt-5 pb-4 ${loc.isPrimary ? "bg-gradient-to-r from-[#FFF4EB] to-white" : "bg-[#F5F8FB]"}`}>
                    <div className="flex items-start justify-between gap-2 mb-3">
                      <span className="text-2xl">{meta.emoji}</span>
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ${meta.badgeColor}`}>
                        {meta.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-[#102D4F] leading-snug">{loc.name}</h3>
                    <p className="text-xs text-[#52647A] mt-0.5 italic">{loc.tagline}</p>
                  </div>

                  {/* Card Body */}
                  <div className="px-5 py-4 space-y-3 flex-1">
                    <div className="flex items-start gap-2.5 text-xs text-[#52647A]">
                      <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#102D4F]">{loc.address}</div>
                        <div>{loc.city}, {loc.state} - {loc.pincode}</div>
                        {loc.landmark && <div className="text-[11px] italic mt-0.5">{loc.landmark}</div>}
                      </div>
                    </div>

                    <div className="flex items-start gap-2.5 text-xs text-[#52647A]">
                      <Clock className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-[#102D4F]">{loc.days}</div>
                        <div>{loc.opdHours}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-[#52647A]">
                      <Phone className="w-4 h-4 text-[#F47721] shrink-0" />
                      <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-semibold text-[#102D4F] hover:text-[#F47721] transition-colors">
                        {loc.phone}
                      </a>
                    </div>

                    <div className="flex items-center gap-2.5 text-xs text-[#52647A]">
                      <Mail className="w-4 h-4 text-[#F47721] shrink-0" />
                      <a href={`mailto:${loc.email}`} className="font-semibold text-[#102D4F] hover:text-[#F47721] transition-colors truncate">
                        {loc.email}
                      </a>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-5 pb-5 pt-3 border-t border-[#F5F8FB] flex items-center justify-between gap-2">
                    <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Walk-in Welcome</span>
                    </div>
                    <a
                      href={loc.googleMapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#d96210] transition-colors"
                    >
                      <span>Directions</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
