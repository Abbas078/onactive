import React from "react";
import { Cpu, ShieldCheck, Zap, Activity, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export function WhyChooseUsSection() {
  const pillars = [
    {
      title: "Sub-Millimeter AR Navigation Precision",
      highlight: "Pixee AR Certified",
      icon: <Cpu className="w-5 h-5 text-[#F47721]" />,
      description:
        "Augmented reality glasses track bone resection angles and mechanical axis alignment in real time, delivering sub-millimeter precision for natural joint balance.",
      points: [
        "Patient-specific kinematic alignment",
        "Sub-millimeter implant positioning",
        "Decreased revision and wear rates",
      ],
    },
    {
      title: "Biological Joint Preservation First",
      highlight: "Save The Native Joint",
      icon: <Activity className="w-5 h-5 text-[#F47721]" />,
      description:
        "Whenever feasible, we save your native tissue through arthroscopic meniscus repair, anatomical ligament reconstruction, and biologic treatments before considering replacement.",
      points: [
        "Meniscus tissue conservation",
        "Anatomical footprint reconstruction",
        "Personalized regenerative protocols",
      ],
    },
    {
      title: "Class-100 Modular OT Safety",
      highlight: "Sevayatan Hospital",
      icon: <ShieldCheck className="w-5 h-5 text-[#F47721]" />,
      description:
        "Surgeries are conducted in dedicated Class-100 laminar airflow operating suites with HEPA filtration, stringent sterilization protocols, and comprehensive infection controls.",
      points: [
        "Ultra-low surgical infection rate",
        "24/7 dedicated anaesthesia and ICU care",
        "4K ultra-HD arthroscopy visualization",
      ],
    },
    {
      title: "Complete RGHS & Cashless Insurance Desk",
      highlight: "Empaneled Care",
      icon: <Zap className="w-5 h-5 text-[#F47721]" />,
      description:
        "Complete insurance assistance at Sevayatan Multispeciality Hospital covering RGHS, TPA cashless pre-authorizations, and private health policies with zero hidden surcharges.",
      points: [
        "On-site insurance authorization desk",
        "RGHS Rajasthan Government empaneled",
        "Transparent surgical estimates",
      ],
    },
  ];

  return (
    <section className="py-14 sm:py-20 lg:py-24 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="THE ARTHROGENIX STANDARD"
          title="Why Choose Dr. Ankit Jaipal for Orthopaedic Care"
          subtitle="Combining advanced computer-navigated technology, joint preservation ethics, and hospital safety standards for lasting mobility."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, idx) => (
            <Card
              key={idx}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group border-[#DCE5EF] hover:border-[#F47721]/50 bg-gradient-to-b from-white to-[#F5F8FB]/40 transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center shadow-xs">
                    {pillar.icon}
                  </div>
                  <Badge variant="subtle" size="sm" className="font-bold text-[11px] text-[#102D4F]">
                    {pillar.highlight}
                  </Badge>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[#102D4F] group-hover:text-[#F47721] transition-colors leading-snug">
                    {pillar.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-[#52647A] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#DCE5EF]/60 space-y-1.5">
                  {pillar.points.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-xs text-[#52647A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
                      <span className="leading-snug">{pt}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-[#DCE5EF] flex items-center gap-1.5 text-xs font-bold text-[#102D4F]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#F47721]" />
                <span>Verified Clinical Protocol</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
