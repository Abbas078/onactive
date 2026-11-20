import React from "react";
import { GraduationCap, Award, BookOpen, CheckCircle } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { DR_ANKIT_CV } from "@/constants/doctorCv";

export function EducationCertifications() {
  return (
    <section className="py-14 sm:py-20 bg-[#F5F8FB] border-b border-[#DCE5EF]">
      <Container>
        <SectionHeading
          eyebrow="ACADEMIC EXCELLENCE"
          title="Education &amp; Fellowship Certifications"
          subtitle="Rigorous university medical qualifications and specialized orthopaedic surgical fellowships verified from Dr. Ankit Jaipal's credentials."
          align="center"
        />

        {/* Degrees Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {DR_ANKIT_CV.education.map((edu, idx) => (
            <Card
              key={idx}
              padding="lg"
              hoverEffect
              className="border-[#DCE5EF] bg-white relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center text-[#F47721] shrink-0">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div className="space-y-1.5 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-[#F47721] uppercase tracking-wider">
                      {edu.year}
                    </span>
                    {edu.grade && (
                      <span className="inline-block px-2 py-0.5 rounded-full bg-neutral-100 text-[#52647A] text-[10px] font-semibold">
                        Grade: {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-xl font-extrabold text-[#102D4F]">
                    {edu.degree}
                  </h3>
                  {edu.specialization && (
                    <p className="text-xs sm:text-sm font-semibold text-[#F47721]">
                      {edu.specialization}
                    </p>
                  )}
                  <p className="text-xs sm:text-sm text-[#52647A] font-medium">
                    {edu.institution}, {edu.location}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Fellowships & Professional Certifications */}
        <div className="mt-8">
          <div className="text-center mb-6">
            <h3 className="text-lg sm:text-xl font-bold text-[#102D4F]">
              Specialized Fellowship Certifications
            </h3>
            <p className="text-xs sm:text-sm text-[#52647A] mt-1">
              Advanced surgical training credentials focusing on joint reconstruction and keyhole arthroscopy
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {DR_ANKIT_CV.certifications.map((cert, idx) => (
              <Card
                key={idx}
                padding="md"
                hoverEffect
                className="border-[#DCE5EF] bg-white flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] flex items-center justify-center shrink-0">
                    {idx === 3 ? (
                      <BookOpen className="w-5 h-5" />
                    ) : (
                      <Award className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-[#102D4F] leading-snug">
                      {cert.title}
                    </h4>
                    <p className="text-[11px] text-[#F47721] font-semibold mt-0.5">
                      {cert.issuer}
                    </p>
                  </div>
                  <p className="text-xs text-[#52647A] leading-relaxed">
                    {cert.focus}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center gap-1.5 text-[11px] font-semibold text-[#102D4F]">
                  <CheckCircle className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>Verified Credential</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

