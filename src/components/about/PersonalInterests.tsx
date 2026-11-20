import React from "react";
import { Languages, Compass, Dumbbell, BookOpenCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DR_ANKIT_CV } from "@/constants/doctorCv";

export function PersonalInterests() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <BookOpenCheck className="w-5 h-5 text-[#F47721]" />;
      case 1:
        return <Dumbbell className="w-5 h-5 text-[#F47721]" />;
      case 2:
      default:
        return <Compass className="w-5 h-5 text-[#F47721]" />;
    }
  };

  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="BEYOND THE OPERATING ROOM"
          title="Languages &amp; Personal Pursuits"
          subtitle="A holistic dedication to continuous learning, physical well-being, mindfulness, and effective patient communication."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {/* Languages Spoken */}
          <Card
            padding="lg"
            hoverEffect
            className="border-[#DCE5EF] bg-white flex flex-col justify-between"
          >
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center text-[#F47721]">
                <Languages className="w-5 h-5" />
              </div>

              <div>
                <h3 className="text-base font-bold text-[#102D4F]">
                  Languages Spoken
                </h3>
                <p className="text-xs text-[#52647A] mt-1">
                  Fluent clinical consultation and patient discussion
                </p>
              </div>

              <div className="flex flex-wrap gap-2 pt-2 border-t border-neutral-100">
                {DR_ANKIT_CV.languages.map((lang, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center px-3 py-1 rounded-full bg-[#F5F8FB] border border-[#DCE5EF] text-xs font-bold text-[#102D4F]"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </Card>

          {/* Hobbies & Interests from CV */}
          {DR_ANKIT_CV.hobbiesAndInterests.map((hobbyGroup, idx) => (
            <Card
              key={idx}
              padding="lg"
              hoverEffect
              className="border-[#DCE5EF] bg-white flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] flex items-center justify-center text-[#F47721]">
                  {getIcon(idx)}
                </div>

                <div>
                  <h3 className="text-base font-bold text-[#102D4F]">
                    {hobbyGroup.category}
                  </h3>
                  <p className="text-xs text-[#52647A] mt-1">
                    Verified personal interests from official profile
                  </p>
                </div>

                <ul className="space-y-2 pt-2 border-t border-neutral-100">
                  {hobbyGroup.items.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="text-xs sm:text-sm text-[#52647A] font-medium leading-relaxed flex items-center gap-2"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F47721] shrink-0" />
                      <span>{item}</span>
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

