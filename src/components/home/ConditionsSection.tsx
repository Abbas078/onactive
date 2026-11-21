"use client";

import React, { useState } from "react";
import Link from "next/link";
import { AlertCircle, ArrowRight, Activity } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

interface ConditionDirectoryItem {
  slug: string;
  name: string;
  category: "knee" | "shoulder" | "sports";
  tagline: string;
  symptoms: string[];
  whenToConsult: string;
  treatmentSlug: string;
}

const CONDITIONS_DIRECTORY: ConditionDirectoryItem[] = [
  {
    slug: "acl-pcl-injuries",
    name: "ACL & PCL Cruciate Ligament Tears",
    category: "knee",
    tagline: "Popping sound during sport, knee giving way on pivoting",
    symptoms: [
      "Sudden audible pop with immediate joint swelling",
      "Knee instability or 'giving way' during direction changes",
      "Inability to continue playing sports or bear full weight",
    ],
    whenToConsult: "Immediate evaluation needed to prevent secondary meniscus damage",
    treatmentSlug: "acl-pcl-reconstruction",
  },
  {
    slug: "meniscus-tear",
    name: "Meniscus Tear & Joint Locking",
    category: "knee",
    tagline: "Twisting injury causing joint line pain, catching, or locking",
    symptoms: [
      "Localized pain along the inner or outer knee joint line",
      "Knee catching, clicking, or locking in a bent position",
      "Delayed joint effusion/swelling after walking or standing",
    ],
    whenToConsult: "Consult early for meniscus preservation and repair",
    treatmentSlug: "knee-ligament-surgery",
  },
  {
    slug: "osteoarthritis",
    name: "Knee Osteoarthritis & Cartilage Wear",
    category: "knee",
    tagline: "Morning stiffness, grinding sensation, difficulty on stairs",
    symptoms: [
      "Persistent joint stiffness that improves slightly with gentle motion",
      "Crepitus (grating/crunching sensation) inside the knee",
      "Progressive difficulty walking distances or climbing stairs",
    ],
    whenToConsult: "Consult when conservative measures fail to provide pain relief",
    treatmentSlug: "joint-replacement",
  },
  {
    slug: "rotator-cuff-tear",
    name: "Rotator Cuff Tendon Tears",
    category: "shoulder",
    tagline: "Sharp pain reaching overhead, dull ache disrupting night sleep",
    symptoms: [
      "Pain when lying on the affected shoulder, disrupting sleep",
      "Noticeable weakness when lifting arm overhead or away from body",
      "Clicking sensation when reaching behind back or putting on a jacket",
    ],
    whenToConsult: "Consult if shoulder pain persists beyond 2-3 weeks",
    treatmentSlug: "shoulder-arthroscopy",
  },
  {
    slug: "shoulder-dislocation",
    name: "Recurrent Shoulder Dislocation",
    category: "shoulder",
    tagline: "Shoulder popping out of socket repeatedly after initial injury",
    symptoms: [
      "Visible shoulder deformity or joint slipping during motion",
      "Persistent apprehension or fear of throwing/reaching overhead",
      "Torn glenoid labrum (Bankart lesion) on MRI scan",
    ],
    whenToConsult: "Recurrent slippage risks permanent joint bone loss",
    treatmentSlug: "shoulder-arthroscopy",
  },
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder (Adhesive Capsulitis)",
    category: "shoulder",
    tagline: "Severe stiffness and global reduction in passive shoulder motion",
    symptoms: [
      "Progressive loss of arm movement in all directions",
      "Severe nocturnal shoulder ache extending down the arm",
      "Significant limitation in everyday tasks like combing hair",
    ],
    whenToConsult: "Specialist evaluation differentiates cuff tears from stiffness",
    treatmentSlug: "shoulder-arthroscopy",
  },
  {
    slug: "sports-injuries",
    name: "Acute & Chronic Sports Injuries",
    category: "sports",
    tagline: "Sprains, muscle pulls, impact trauma, and athletic joint injuries",
    symptoms: [
      "Acute swelling and localized bruising around joint",
      "Loss of joint range of motion or inability to bear load",
      "Recurrent flare-ups upon resuming high-intensity training",
    ],
    whenToConsult: "Prompt diagnosis ensures safe athletic return",
    treatmentSlug: "sports-injury-treatment",
  },
  {
    slug: "cartilage-injuries",
    name: "Cartilage & Chondral Defects",
    category: "sports",
    tagline: "Joint surface friction and localized swelling following impact",
    symptoms: [
      "Intermittent joint swelling following repetitive impact sports",
      "Deep localized joint ache with prolonged standing",
      "Early warning signs before advanced joint surface wear",
    ],
    whenToConsult: "Biological preservation can halt cartilage degradation",
    treatmentSlug: "knee-ligament-surgery",
  },
  {
    slug: "fractures-trauma",
    name: "Complex Fractures & Trauma",
    category: "sports",
    tagline: "High-energy bone fractures, peri-articular injuries, and trauma",
    symptoms: [
      "Severe localized bone pain and visible limb misalignment",
      "Immediate inability to bear any weight on the extremity",
      "Rapid hematoma formation and soft-tissue swelling",
    ],
    whenToConsult: "Urgent emergency surgical evaluation at Sevayatan Hospital",
    treatmentSlug: "joint-replacement",
  },
];

export function ConditionsSection() {
  const [activeCategory, setActiveCategory] = useState<"all" | "knee" | "shoulder" | "sports">("all");

  const filteredConditions = CONDITIONS_DIRECTORY.filter((c) => {
    if (activeCategory === "all") return true;
    return c.category === activeCategory;
  });

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-12 gap-4">
          <SectionHeading
            eyebrow="SYMPTOMS &amp; DIAGNOSIS"
            title="Orthopaedic Conditions We Treat"
            subtitle="Understand your joint symptoms early. Dr. Ankit Jaipal provides comprehensive diagnostic evaluation and clear treatment pathways in Jaipur."
            align="left"
            className="mb-0 max-w-2xl"
          />
          <Link
            href="/conditions"
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#F47721] hover:text-[#DF6410] transition-colors shrink-0 group"
          >
            <span>Explore All 12 Condition Guides</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              activeCategory === "all"
                ? "bg-[#102D4F] text-white shadow-sm"
                : "bg-white text-[#52647A] hover:text-[#102D4F] border border-[#DCE5EF]"
            }`}
          >
            All Conditions
          </button>
          <button
            onClick={() => setActiveCategory("knee")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              activeCategory === "knee"
                ? "bg-[#102D4F] text-white shadow-sm"
                : "bg-white text-[#52647A] hover:text-[#102D4F] border border-[#DCE5EF]"
            }`}
          >
            Knee &amp; Cruciate Tears
          </button>
          <button
            onClick={() => setActiveCategory("shoulder")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              activeCategory === "shoulder"
                ? "bg-[#102D4F] text-white shadow-sm"
                : "bg-white text-[#52647A] hover:text-[#102D4F] border border-[#DCE5EF]"
            }`}
          >
            Shoulder &amp; Instability
          </button>
          <button
            onClick={() => setActiveCategory("sports")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-200 ${
              activeCategory === "sports"
                ? "bg-[#102D4F] text-white shadow-sm"
                : "bg-white text-[#52647A] hover:text-[#102D4F] border border-[#DCE5EF]"
            }`}
          >
            Sports Injuries &amp; Trauma
          </button>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredConditions.map((condition) => (
            <Card
              key={condition.slug}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group bg-white border-[#DCE5EF] hover:border-[#F47721]/50 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-start justify-between gap-2">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5" />
                  </div>
                  <Badge variant="subtle" size="sm" className="capitalize text-[11px] font-semibold">
                    {condition.category} care
                  </Badge>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {condition.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#52647A] leading-relaxed">
                    {condition.tagline}
                  </p>
                </div>

                {/* Common Symptoms List */}
                <div className="space-y-2 pt-1 border-t border-[#DCE5EF]/60">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-[#102D4F] flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-[#F47721]" />
                    <span>Key Warning Symptoms:</span>
                  </p>
                  <ul className="space-y-1.5 text-xs text-[#52647A]">
                    {condition.symptoms.map((symptom, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F47721] shrink-0 mt-1.5" />
                        <span className="leading-snug">{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action Links */}
              <div className="mt-5 pt-3.5 border-t border-[#DCE5EF] flex items-center justify-between">
                <Link
                  href={`/conditions/${condition.slug}`}
                  className="text-xs font-bold text-[#102D4F] group-hover:text-[#F47721] inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Condition Guide</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </Link>

                <Link
                  href={`/treatments/${condition.treatmentSlug}`}
                  className="text-[11px] font-bold text-[#F47721] hover:underline"
                >
                  Surgical Option →
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
