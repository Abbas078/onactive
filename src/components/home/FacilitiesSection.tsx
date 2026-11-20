import React from "react";
import Image from "next/image";
import { ArrowRight, Building2, Video, Activity, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export function FacilitiesSection() {
  const facilityPoints = [
    {
      title: "Pixee Medical AR Surgical Navigation Glasses",
      desc: "Wearable augmented reality guidance delivering millimeter-accurate bone resection angles and perfect mechanical axis alignment for knee replacement.",
      icon: <Activity className="w-4 h-4 text-[#F47721]" />,
    },
    {
      title: "4K Ultra-HD Arthroscopy Camera Systems",
      desc: "Delivers crystal-clear intra-articular magnification, allowing sub-millimeter precision when repairing delicate ligament fibers and torn labral rims.",
      icon: <Video className="w-4 h-4 text-[#F47721]" />,
    },
    {
      title: "Class-100 Modular Laminar Airflow OTs",
      desc: "Ultra-clean surgical environment with HEPA filtration protocols minimizing infection rates to virtually zero for joint procedures.",
      icon: <Building2 className="w-4 h-4 text-[#F47721]" />,
    },
    {
      title: "Sevayatan Multispeciality Hospital Inpatient Facility",
      desc: "NABH-standard tertiary surgical center with dedicated orthopaedic nurses, 24/7 anaesthesia coverage, and complete cashless insurance desk support.",
      icon: <ShieldCheck className="w-4 h-4 text-[#F47721]" />,
    },
  ];

  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Authentic Hospital / Technology Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-white">
              <Image
                src="/images/doctor/dr-ankit-jaipal-ar-headset-profile.jpeg"
                alt="Dr. Ankit Jaipal using Pixee Medical AR Surgical Navigation for Knee Replacement"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover object-center"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102D4F]/85 via-black/20 to-transparent flex items-end p-6">
                <div className="text-white">
                  <span className="inline-block px-2.5 py-1 rounded-full bg-[#F47721] text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    Advanced Surgical Technology
                  </span>
                  <p className="text-sm sm:text-base font-bold">
                    Pixee AR Augmented Reality Navigation
                  </p>
                  <p className="text-xs text-neutral-300">
                    Sevayatan Multispeciality Hospital • Full Cashless &amp; RGHS
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Facility Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="w-5 h-[2px] bg-[#F47721] rounded-full inline-block" />
                <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-[#F47721]">
                  HOSPITAL &amp; SURGICAL INFRASTRUCTURE
                </span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#102D4F] tracking-tight">
                Advanced Facilities &amp; Modern Surgical Suites
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#52647A] leading-relaxed">
                We combine state-of-the-art keyhole technology with rigorous hospital safety standards to ensure the highest surgical precision and rapid recovery.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
              {facilityPoints.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-[#DCE5EF] shadow-xs space-y-2 hover:border-[#F47721]/40 transition-colors"
                >
                  <div className="flex items-center gap-2 font-bold text-xs sm:text-sm text-[#102D4F]">
                    <div className="w-7 h-7 rounded-lg bg-[#FFF4EB] flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.title}</span>
                  </div>
                  <p className="text-xs text-[#52647A] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                href="/costs-clinics#cashless"
                variant="primary"
                size="md"
                icon={<ArrowRight className="w-4 h-4" />}
                iconPosition="right"
              >
                Explore Hospital &amp; Cashless Info
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

