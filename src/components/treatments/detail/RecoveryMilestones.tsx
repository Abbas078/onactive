import React from "react";
import { AlertCircle, Calendar, HeartPulse, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { TreatmentDetail } from "@/constants/treatmentsData";

interface RecoveryMilestonesProps {
  treatment: TreatmentDetail;
}

export function RecoveryMilestones({ treatment }: RecoveryMilestonesProps) {
  return (
    <section className="py-16 md:py-20 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
              Post-Operative Roadmap
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#102D4F] mt-2 mb-3">
              Rehabilitation & Recovery Milestones
            </h2>
            <p className="text-sm md:text-base text-[#52647A] max-w-2xl mx-auto">
              Surgical success is deeply tied to structured, progressive post-operative rehabilitation.
            </p>
          </div>

          {/* Recovery Disclaimer Box */}
          <div className="bg-[#FFF8F2] border border-[#F47721]/30 rounded-2xl p-5 mb-10 flex items-start gap-4">
            <div className="p-2 bg-[#F47721]/10 rounded-xl text-[#F47721] shrink-0 mt-0.5">
              <AlertCircle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xs font-bold text-[#102D4F] uppercase tracking-wider">
                Individual Biological Healing Notice
              </h3>
              <p className="text-xs text-[#52647A] mt-1 leading-relaxed">
                {treatment.recoveryAndRehabilitation.disclaimer}
              </p>
            </div>
          </div>

          {/* Phased Milestones Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {treatment.recoveryAndRehabilitation.phases.map((phase, idx) => (
              <div
                key={idx}
                className="bg-[#F5F8FB] rounded-2xl p-6 border border-[#DCE5EF] shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className="w-4 h-4 text-[#F47721]" />
                    <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                      {phase.phase}
                    </span>
                  </div>

                  <h4 className="text-base font-bold text-[#102D4F] mb-3">
                    {phase.title}
                  </h4>

                  <p className="text-xs md:text-sm text-[#52647A] leading-relaxed">
                    {phase.focus}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#DCE5EF] text-[11px] text-[#8C9AA8] font-medium flex items-center gap-1.5">
                  <HeartPulse className="w-3.5 h-3.5 text-[#102D4F]" />
                  Physiotherapist Guided
                </div>
              </div>
            ))}
          </div>

          {/* Support Strip */}
          <div className="mt-8 p-4 rounded-xl bg-[#102D4F]/5 border border-[#102D4F]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <div className="flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#F47721] shrink-0 hidden sm:block" />
              <p className="text-xs text-[#102D4F]">
                <strong className="font-semibold">Comprehensive Aftercare:</strong> Direct follow-up consultations with Dr. Ankit Jaipal, wound checks, and ongoing coordination with your local or clinic physiotherapist.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

