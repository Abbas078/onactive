import React from "react";
import { Award, GraduationCap, Activity, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_STATS } from "@/constants/clinicInfo";

export function TrustStrip() {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Award className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 1:
        return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 2:
        return <Activity className="w-5 h-5 sm:w-6 sm:h-6" />;
      case 3:
      default:
        return <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-[#F47721]" />;
    }
  };

  return (
    <section className="bg-white py-6 sm:py-8 border-b border-[#DCE5EF]">
      <Container>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {CLINIC_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 sm:gap-4 p-2.5 sm:p-4 rounded-xl hover:bg-[#F5F8FB] transition-colors border border-transparent hover:border-[#DCE5EF] min-w-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center text-[#F47721] shrink-0">
                {getIcon(idx)}
              </div>
              <div className="min-w-0">
                <div className="flex items-baseline gap-1">
                  <span className="text-lg sm:text-2xl font-black text-[#102D4F]">
                    {stat.value}
                  </span>
                  {stat.subtext && (
                    <span className="text-[10px] sm:text-xs text-[#52647A] font-medium truncate">
                      {stat.subtext}
                    </span>
                  )}
                </div>
                <p className="text-[11px] sm:text-xs font-semibold text-[#52647A] truncate">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

