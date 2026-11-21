"use client";

import React from "react";
import { MapPin, Clock, Phone, Navigation, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CLINIC_LOCATIONS, CLINIC_INFO } from "@/constants/clinicInfo";
import { useAppointmentModal } from "@/context/AppointmentModalContext";

export function ClinicLocationsSection() {
  const { openModal } = useAppointmentModal();

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="VISIT OUR CLINICS"
          title="Clinic Locations &amp; Consultation Information"
          subtitle="Consult Dr. Ankit Jaipal at our primary OPD centre in Durgapura or for advanced surgical inpatient care at Sevayatan Multispeciality Hospital Jaipur."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CLINIC_LOCATIONS.map((loc) => (
            <Card
              key={loc.slug}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between border-[#DCE5EF] hover:border-[#F47721]/50 group relative bg-white transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-11 h-11 rounded-xl bg-[#FFF4EB] border border-[#FDE8D7] text-[#F47721] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  {loc.isPrimary ? (
                    <Badge variant="orange" size="sm" className="font-bold">
                      Primary OPD
                    </Badge>
                  ) : loc.slug === "sevayatan-hospital" ? (
                    <Badge variant="rghs" size="sm" className="font-bold">
                      Cashless &amp; RGHS
                    </Badge>
                  ) : (
                    <Badge variant="subtle" size="sm" className="font-bold">
                      By Appointment
                    </Badge>
                  )}
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {loc.name}
                  </h3>
                  <p className="mt-1 text-xs text-[#F47721] font-semibold">
                    {loc.tagline}
                  </p>
                </div>

                <div className="space-y-3 text-xs text-[#52647A] pt-1">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#102D4F]">{loc.address}</p>
                      <p className="text-[11px] text-[#52647A]">{loc.city}, {loc.state} - {loc.pincode}</p>
                      {loc.landmark && (
                        <p className="text-[10px] text-[#7B8E9F] italic mt-0.5">{loc.landmark}</p>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start gap-2.5 pt-2 border-t border-[#DCE5EF]/60">
                    <Clock className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-[#102D4F]">{loc.opdHours}</p>
                      <p className="text-[11px] text-[#52647A]">{loc.days}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5 pt-2 border-t border-[#DCE5EF]/60">
                    <Phone className="w-4 h-4 text-[#F47721] shrink-0" />
                    <a
                      href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                      className="font-bold text-[#102D4F] hover:text-[#F47721] transition-colors text-xs sm:text-sm"
                    >
                      {loc.phone}
                    </a>
                  </div>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 pt-4 border-t border-[#DCE5EF] flex items-center justify-between gap-3">
                <a
                  href={loc.googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-[#102D4F] hover:text-[#F47721] inline-flex items-center gap-1.5 transition-colors group/nav"
                >
                  <Navigation className="w-3.5 h-3.5 text-[#F47721] transition-transform group-nav:translate-x-0.5" />
                  <span>Directions</span>
                </a>

                <Button
                  onClick={() => openModal(loc.name)}
                  variant="primary"
                  size="sm"
                  icon={<Calendar className="w-3.5 h-3.5" />}
                  className="font-bold shadow-xs"
                >
                  Book Slot
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
