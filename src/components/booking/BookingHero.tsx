import React from "react";
import { Container } from "@/components/ui/Container";
import { Calendar } from "lucide-react";

export function BookingHero() {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#F5F8FB] via-[#F5F8FB] to-[#F5F8FB] border-b border-[#DCE5EF] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative">
        <div className="max-w-2xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FDE8D7] text-[#F47721] text-xs font-bold tracking-wide uppercase mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>APPOINTMENT REQUEST</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-tight">
            Book an{" "}
            <span className="text-[#F47721]">Orthopaedic Consultation</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#52647A] leading-relaxed">
            Request an OPD appointment with Dr. Ankit Jaipal at Arthrogenix Durgapura, Sevayatan Hospital, or Vaishali Nagar. Our clinic team will confirm your slot within OPD hours.
          </p>

          <div className="mt-5 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-xs font-semibold text-amber-800">
            ⚠️ This is an appointment request form. Booking is confirmed only after clinic team confirmation.
          </div>
        </div>
      </Container>
    </section>
  );
}
