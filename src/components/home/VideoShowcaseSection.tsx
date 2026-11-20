"use client";

import React, { useState } from "react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { VideoPlayer } from "@/components/common/VideoPlayer";
import { DOCTOR_VIDEOS, SURGICAL_VIDEOS } from "@/constants/mediaAssets";
import { Video, ShieldCheck, Cpu, PlayCircle } from "lucide-react";

export function VideoShowcaseSection() {
  const [activeTab, setActiveTab] = useState<"doctor" | "surgical">("doctor");

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F8FB] border-t border-[#DCE5EF]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <SectionHeading
            eyebrow="Clinical Video Insights & OT Innovation"
            title="Dr. Ankit Jaipal in Consultation & Surgical Precision"
            subtitle="Watch authentic clinical reels, recovery guidance, and operation theatre footage demonstrating our advanced computer-navigated orthopaedic care."
            align="center"
          />

          {/* Tab Selector */}
          <div className="mt-8 inline-flex rounded-xl bg-[#F5F8FB] p-1.5 border border-[#DCE5EF] shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab("doctor")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "doctor"
                  ? "bg-[#102D4F] text-white shadow-sm"
                  : "text-[#52647A] hover:text-[#102D4F]"
              }`}
            >
              <Video className="h-4 w-4" />
              Doctor Consultation Insights ({Object.keys(DOCTOR_VIDEOS).length})
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("surgical")}
              className={`flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-semibold transition-all ${
                activeTab === "surgical"
                  ? "bg-[#102D4F] text-white shadow-sm"
                  : "text-[#52647A] hover:text-[#102D4F]"
              }`}
            >
              <Cpu className="h-4 w-4" />
              OT & Surgical Precision ({Object.keys(SURGICAL_VIDEOS).length})
            </button>
          </div>
        </div>

        {/* Doctor Consultation Video Reel */}
        {activeTab === "doctor" && (
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Object.values(DOCTOR_VIDEOS).map((video) => (
                <VideoPlayer
                  key={video.id}
                  src={video.src}
                  poster={video.poster}
                  title={video.title}
                  caption={video.caption}
                  aspectRatio="9/16"
                />
              ))}
            </div>

            <div className="mt-8 flex items-center justify-center gap-2 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF] p-4 text-xs text-[#52647A] text-center max-w-2xl mx-auto">
              <ShieldCheck className="h-4 w-4 text-[#F47721] shrink-0" />
              <span>
                Authentic clinical discussions recorded with <strong>Dr. Ankit Jaipal</strong> at Sevayatan Multispeciality Hospital & Arthrogenix Jaipur.
              </span>
            </div>
          </div>
        )}

        {/* Surgical OT Video Showcase */}
        {activeTab === "surgical" && (
          <div className="mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.values(SURGICAL_VIDEOS).map((video) => (
                <VideoPlayer
                  key={video.id}
                  src={video.src}
                  poster={video.poster}
                  title={video.title}
                  caption={video.caption}
                  advisory={video.advisory}
                  aspectRatio="9/16"
                />
              ))}
            </div>

            <div className="mt-8 rounded-xl bg-orange-50/60 border border-orange-200/60 p-4 text-xs text-[#102D4F] max-w-3xl mx-auto flex items-start gap-3">
              <PlayCircle className="h-5 w-5 text-[#F47721] shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-[#102D4F]">Clinical Consent & Transparency Notice</p>
                <p className="mt-0.5 text-[#52647A] leading-relaxed">
                  The operation theatre footage shown illustrates sterile draping, precision instruments, and computer-navigated alignment techniques used by Dr. Ankit Jaipal. Patient privacy is fully protected under sterile surgical coverings. Click each video to stream.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
