import React from "react";
import { Target, Shield, Zap, FileCheck2, Activity, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { WHY_CHOOSE_PILLARS } from "@/constants/homeContent";

export function WhyChooseUsSection() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Target":
        return <Target className="w-5 h-5 text-[#F47721]" />;
      case "Shield":
        return <Shield className="w-5 h-5 text-[#F47721]" />;
      case "Zap":
        return <Zap className="w-5 h-5 text-[#F47721]" />;
      case "FileCheck2":
        return <FileCheck2 className="w-5 h-5 text-[#F47721]" />;
      case "Activity":
      default:
        return <Activity className="w-5 h-5 text-[#F47721]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="THE ARTHROGENIX STANDARD"
          title="Why Choose Arthrogenix for Orthopaedic Care"
          subtitle="Specialized keyhole surgical precision, native joint preservation, and dedicated post-operative recovery designed around your lifestyle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_CHOOSE_PILLARS.map((pillar, idx) => (
            <Card
              key={idx}
              hoverEffect
              padding="lg"
              className="flex flex-col justify-between group border-[#DCE5EF] bg-gradient-to-b from-white to-[#F5F8FB]/50"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center shadow-xs">
                    {getIcon(pillar.iconName)}
                  </div>
                  <Badge variant="subtle" size="sm" className="font-semibold text-[11px]">
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
              </div>

              <div className="mt-5 pt-3 border-t border-[#DCE5EF] flex items-center gap-1.5 text-xs font-semibold text-[#102D4F]">
                <Check className="w-4 h-4 text-[#F47721]" />
                <span>Verified Clinical Excellence</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

