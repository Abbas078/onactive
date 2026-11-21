import React from "react";
import { Container } from "@/components/ui/Container";
import { Phone, Mail, MessageSquare } from "lucide-react";

export function ContactHero() {
  return (
    <section className="relative pt-12 pb-14 sm:pt-16 sm:pb-20 bg-gradient-to-b from-[#F5F8FB] via-white to-white border-b border-[#DCE5EF] overflow-hidden">
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#F47721]/5 rounded-full blur-3xl pointer-events-none" />
      <Container className="relative">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF4EB] border border-[#FDE8D7] text-[#F47721] text-xs font-bold tracking-wide uppercase mb-4">
            <Phone className="w-3.5 h-3.5" />
            <span>CONTACT &amp; DIRECT CLINICAL ASSISTANCE</span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#102D4F] tracking-tight leading-tight">
            Reach Out to{" "}
            <span className="text-[#F47721]">Arthrogenix</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-[#52647A] leading-relaxed">
            Phone, WhatsApp, email, or walk into any of our three Jaipur clinic locations for an orthopaedic consultation, MRI second opinion, or surgical enquiry.
          </p>

          {/* Quick Contact Links */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href="tel:917351755551"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-[#102D4F] text-white text-sm font-bold hover:bg-[#0A1C33] transition-all shadow-md"
            >
              <Phone className="w-4 h-4 text-[#F47721]" />
              <span>+91 7351755551</span>
            </a>
            <a
              href="https://wa.me/917351755551?text=Hello%20Dr.%20Ankit%20Jaipal,%20I%20would%20like%20to%20enquire%20about%20a%20consultation."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-sm font-bold hover:bg-emerald-700 transition-all shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span>WhatsApp</span>
            </a>
            <a
              href="mailto:dr.ankitjaipal@gmail.com"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#DCE5EF] text-[#102D4F] text-sm font-bold hover:bg-[#F5F8FB] transition-all shadow-xs"
            >
              <Mail className="w-4 h-4 text-[#F47721]" />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}
