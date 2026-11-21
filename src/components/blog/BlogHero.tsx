import React from "react";
import Link from "next/link";
import { BookOpen, ShieldAlert, ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function BlogHero() {
  return (
    <section className="relative bg-[#102D4F] text-white pt-24 pb-16 overflow-hidden">
      {/* Decorative ambient background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721]/15 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl pointer-events-none -ml-20 -mb-20" />

      <Container>
        <div className="relative z-10 max-w-4xl">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-white/70 mb-5">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/40" />
            <span className="text-[#F47721] font-semibold">Patient Education &amp; Blog</span>
          </nav>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-semibold text-[#FFF4EB] mb-5">
            <BookOpen className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Orthopaedic &amp; Sports Health Knowledge Base</span>
          </div>

          {/* Title */}
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight mb-4">
            Evidence-Based <span className="text-[#F47721]">Joint Health</span> &amp; Recovery Guides
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg text-white/80 max-w-2xl leading-relaxed mb-6">
            Educational resources on knee preservation, sports injuries, ligament reconstruction, and modern AR computer-assisted joint replacement. Designed to help patients make informed decisions about their joint health.
          </p>

          {/* Editorial / Review Disclaimer Banner */}
          <div className="flex items-start gap-3 p-4 rounded-xl bg-white/10 border border-white/15 backdrop-blur-sm max-w-3xl">
            <ShieldAlert className="w-5 h-5 text-[#F47721] shrink-0 mt-0.5" />
            <div className="text-xs text-white/85 leading-relaxed">
              <strong className="text-white block font-semibold mb-0.5">
                Editorial Transparency Notice:
              </strong>
              These articles represent draft educational content prepared for patient awareness. They are currently queued for formal clinical review and sign-off by Dr. Ankit Jaipal. Website information is not a substitute for personal clinical consultation.
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
