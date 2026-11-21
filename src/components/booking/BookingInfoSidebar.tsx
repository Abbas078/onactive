import React from "react";
import Link from "next/link";
import { Phone, MessageSquare, Clock, MapPin, ShieldCheck, Calendar, ArrowRight, Award, CheckCircle2 } from "lucide-react";
import { CLINIC_INFO, DOCTOR_PROFILE } from "@/constants/clinicInfo";

const QUICK_INFO = [
  {
    icon: Phone,
    label: "Primary Line",
    value: CLINIC_INFO.primaryPhone,
    href: `tel:${CLINIC_INFO.primaryPhoneRaw}`,
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: "Chat Now",
    href: CLINIC_INFO.whatsappLink,
    isExternal: true,
  },
  {
    icon: Clock,
    label: "OPD Hours",
    value: CLINIC_INFO.opdTimings,
    href: null,
  },
];

const WHAT_TO_BRING = [
  "Previous MRI / X-ray films or CD",
  "Medical reports or discharge summaries",
  "Current medication list",
  "RGHS card or insurance documents",
  "Comfortable clothing for joint examination",
];

export function BookingInfoSidebar() {
  return (
    <div className="space-y-5">
      {/* Quick Contact Card */}
      <div className="bg-gradient-to-br from-[#102D4F] to-[#0A1C33] rounded-2xl p-5 sm:p-6 text-white shadow-md">
        <h3 className="text-base font-extrabold mb-4">Need Immediate Assistance?</h3>
        <div className="space-y-3">
          {QUICK_INFO.map((info, idx) => {
            const Icon = info.icon;
            const inner = (
              <div className="flex items-center gap-3 p-3 rounded-xl bg-white/10 hover:bg-white/20 transition-colors">
                <Icon className="w-4 h-4 text-[#F47721] shrink-0" />
                <div>
                  <div className="text-[11px] text-white/60">{info.label}</div>
                  <div className="text-sm font-bold">{info.value}</div>
                </div>
              </div>
            );
            if (info.href) {
              return (
                <a
                  key={idx}
                  href={info.href}
                  target={info.isExternal ? "_blank" : undefined}
                  rel={info.isExternal ? "noopener noreferrer" : undefined}
                >
                  {inner}
                </a>
              );
            }
            return <div key={idx}>{inner}</div>;
          })}
        </div>
      </div>

      {/* Clinic Locations Quick */}
      <div className="bg-white rounded-2xl border border-[#DCE5EF] p-5 sm:p-6 shadow-xs">
        <h3 className="text-sm sm:text-base font-extrabold text-[#102D4F] mb-4 flex items-center gap-2">
          <MapPin className="w-4 h-4 text-[#F47721]" />
          <span>OPD Locations</span>
        </h3>
        <div className="space-y-3 text-xs text-[#52647A]">
          <div>
            <div className="font-bold text-[#102D4F] text-sm">Arthrogenix – Durgapura</div>
            <div>Tonk Road, Jaipur 302018</div>
            <div className="text-[11px] italic">Near Durgapura Railway Station</div>
          </div>
          <div className="h-px bg-[#F5F8FB]" />
          <div>
            <div className="font-bold text-[#102D4F] text-sm">Sevayatan Hospital</div>
            <div>Pratap Nagar, Jaipur (RGHS Empanelled)</div>
            <div className="text-[11px] italic">Surgical admissions &amp; OT facility</div>
          </div>
          <div className="h-px bg-[#F5F8FB]" />
          <div>
            <div className="font-bold text-[#102D4F] text-sm">Arthrogenix – Vaishali Nagar</div>
            <div>Vaishali Nagar, Jaipur 302021</div>
            <div className="text-[11px] italic">Follow-up OPD by appointment</div>
          </div>
        </div>
        <Link
          href="/costs-clinics"
          className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#F47721] hover:text-[#d96210] transition-colors"
        >
          <span>View All Clinic Details</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* What to Bring */}
      <div className="bg-[#F5F8FB] rounded-2xl border border-[#DCE5EF] p-5 sm:p-6">
        <h3 className="text-sm sm:text-base font-extrabold text-[#102D4F] mb-4 flex items-center gap-2">
          <Calendar className="w-4 h-4 text-[#F47721]" />
          <span>What to Bring to Your OPD Visit</span>
        </h3>
        <ul className="space-y-2.5">
          {WHAT_TO_BRING.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-[#52647A]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#F47721] shrink-0 mt-0.5" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Doctor Credential Mini */}
      <div className="bg-white rounded-2xl border border-[#DCE5EF] p-5 sm:p-6 shadow-xs">
        <h3 className="text-sm font-extrabold text-[#102D4F] mb-3 flex items-center gap-2">
          <Award className="w-4 h-4 text-[#F47721]" />
          <span>Your Consulting Surgeon</span>
        </h3>
        <div className="text-xs text-[#52647A] leading-relaxed space-y-1.5">
          <div className="font-bold text-sm text-[#102D4F]">{DOCTOR_PROFILE.name}</div>
          <div className="text-[#F47721] font-semibold">{DOCTOR_PROFILE.title}</div>
          {DOCTOR_PROFILE.degrees.map((d, i) => (
            <div key={i}>• {d}</div>
          ))}
          {DOCTOR_PROFILE.fellowships.map((f, i) => (
            <div key={i}>• {f}</div>
          ))}
        </div>
        <div className="mt-3 pt-3 border-t border-[#F5F8FB]">
          <div className="flex items-center gap-1.5 text-xs font-bold text-emerald-700">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>RGHS &amp; Cashless Empanelled at Sevayatan</span>
          </div>
        </div>
      </div>
    </div>
  );
}

