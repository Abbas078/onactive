import React from "react";
import { MapPin, Phone, Clock, ExternalLink, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_LOCATIONS } from "@/constants/clinicInfo";

export function ContactClinicCards() {
  return (
    <section className="py-12 sm:py-16 border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                CLINIC LOCATIONS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Visit Us in Jaipur
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-[#52647A]">
              Three clinic locations for OPD, surgery, and follow-up care.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {CLINIC_LOCATIONS.map((loc) => (
              <div
                key={loc.slug}
                className={`bg-white rounded-2xl border p-5 sm:p-6 flex flex-col justify-between transition-all hover:shadow-md ${
                  loc.isPrimary ? "border-[#F47721]/40" : "border-[#DCE5EF]"
                }`}
              >
                <div className="space-y-3">
                  {loc.isPrimary && (
                    <span className="text-[11px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#FFF4EB] text-[#F47721] border border-[#FDE8D7]">
                      Primary OPD
                    </span>
                  )}
                  <h3 className="text-sm sm:text-base font-bold text-[#102D4F] leading-snug">{loc.name}</h3>
                  <div className="flex items-start gap-2 text-xs text-[#52647A]">
                    <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <div>{loc.address}, {loc.city}</div>
                      {loc.landmark && <div className="italic text-[11px]">{loc.landmark}</div>}
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#52647A]">
                    <Clock className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-semibold text-[#102D4F]">{loc.days}</div>
                      <div>{loc.opdHours}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-[#52647A]">
                    <Phone className="w-4 h-4 text-[#F47721] shrink-0" />
                    <a href={`tel:${loc.phone.replace(/\s/g, "")}`} className="font-bold text-[#102D4F] hover:text-[#F47721] transition-colors">
                      {loc.phone}
                    </a>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-[#F5F8FB] flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-bold text-emerald-700">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Walk-in &amp; Appointment</span>
                  </div>
                  <a
                    href={loc.googleMapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-bold text-[#F47721] hover:text-[#d96210]"
                  >
                    <span>Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
