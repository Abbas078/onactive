import React from "react";
import { Activity, Shield, Zap, Sparkles, CheckCircle2 } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DR_ANKIT_CV } from "@/constants/doctorCv";

export function SkillsMatrix() {
  const getCategoryIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Activity className="w-5 h-5 text-[#F47721]" />;
      case 1:
        return <Zap className="w-5 h-5 text-[#F47721]" />;
      case 2:
        return <Shield className="w-5 h-5 text-[#F47721]" />;
      case 3:
      default:
        return <Sparkles className="w-5 h-5 text-[#F47721]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="CLINICAL PROFICIENCY"
          title="Clinical Expertise &amp; Surgical Skills"
          subtitle="Comprehensive orthopaedic skill set spanning advanced arthroplasty, keyhole arthroscopy, trauma reconstruction, and limb deformity correction."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {DR_ANKIT_CV.keySkills.map((category, idx) => (
            <Card
              key={idx}
              padding="lg"
              hoverEffect
              className="border-[#DCE5EF] bg-white flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center shrink-0">
                    {getCategoryIcon(idx)}
                  </div>
                  <h3 className="text-base font-bold text-[#102D4F] leading-snug">
                    {category.category}
                  </h3>
                </div>

                <ul className="space-y-2.5 pt-2 border-t border-neutral-100">
                  {category.skills.map((skill, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2 text-xs sm:text-sm text-[#52647A]">
                      <CheckCircle2 className="w-4 h-4 text-[#F47721] shrink-0 mt-0.5" />
                      <span className="font-medium text-[#102D4F]">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

