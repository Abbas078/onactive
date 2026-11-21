import React from "react";
import { Award, GraduationCap, Activity, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_STATS } from "@/constants/clinicInfo";

export function TrustStrip() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "GraduationCap":
        return <GraduationCap className="w-5 h-5 text-[#F47721]" />;
      case "Award":
        return <Award className="w-5 h-5 text-[#F47721]" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-[#F47721]" />;
      case "ShieldCheck":
      default:
        return <ShieldCheck className="w-5 h-5 text-[#F47721]" />;
    }
  };

  return (
    <section className="bg-white py-5 sm:py-6 border-b border-[#DCE5EF] shadow-xs">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {CLINIC_STATS.map((stat, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3.5 p-3 sm:p-3.5 rounded-xl bg-[#F5F8FB]/70 border border-[#DCE5EF] hover:border-[#F47721]/50 hover:bg-white hover:shadow-sm transition-all duration-200 min-w-0"
            >
              <div className="w-11 h-11 rounded-xl bg-[#FFF4EB] border border-[#FDE8D7] flex items-center justify-center shrink-0">
                {getIcon(stat.icon)}
              </div>
              <div className="min-w-0">
                <div className="text-sm sm:text-base font-bold text-[#102D4F] leading-snug truncate">
                  {stat.value}
                </div>
                <p className="text-[11px] font-semibold text-[#52647A] truncate">
                  {stat.label}
                </p>
                {stat.subtext && (
                  <p className="text-[10px] text-[#7B8E9F] font-medium truncate">
                    {stat.subtext}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
