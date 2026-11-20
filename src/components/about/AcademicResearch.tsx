import React from "react";
import { FileText, Award, BookOpen, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DR_ANKIT_CV } from "@/constants/doctorCv";

export function AcademicResearch() {
  return (
    <section className="py-14 sm:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="SCIENTIFIC CONTRIBUTIONS"
          title="Research, Publications &amp; Conference Presentations"
          subtitle="Peer-reviewed presentations and medical research advancing modern orthopaedic fracture fixation and surgical techniques."
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {DR_ANKIT_CV.researchAndPublications.map((item, idx) => (
            <Card
              key={idx}
              padding="lg"
              hoverEffect
              className="border-[#DCE5EF] bg-white flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center text-[#F47721] shrink-0">
                  {idx === 0 ? (
                    <FileText className="w-6 h-6" />
                  ) : idx === 1 ? (
                    <Award className="w-6 h-6" />
                  ) : (
                    <BookOpen className="w-6 h-6" />
                  )}
                </div>

                <div>
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-orange-50 text-[#F47721] text-[10px] font-bold uppercase tracking-wider mb-2">
                    {item.type}
                  </span>
                  <h3 className="text-base sm:text-lg font-extrabold text-[#102D4F] leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#F47721] mt-1">
                    {item.forum}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#52647A] leading-relaxed pt-2 border-t border-neutral-100">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-xs font-bold text-[#102D4F]">
                <CheckCircle className="w-4 h-4 text-[#F47721]" />
                <span>Verified Academic Record</span>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}

