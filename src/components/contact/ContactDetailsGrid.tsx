import React from "react";
import { Phone, Mail, MessageSquare, Clock, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { CLINIC_INFO } from "@/constants/clinicInfo";

const CONTACT_CARDS = [
  {
    icon: Phone,
    label: "Primary Clinic Phone",
    value: CLINIC_INFO.primaryPhone,
    href: `tel:${CLINIC_INFO.primaryPhoneRaw}`,
    description: "Direct line to Dr. Ankit Jaipal&apos;s clinic desk",
    hoverColor: "hover:border-[#102D4F]/30 hover:bg-[#102D4F] hover:text-white group",
  },
  {
    icon: Phone,
    label: "Arthrogenix Clinic",
    value: CLINIC_INFO.clinicPhone,
    href: `tel:9610026600`,
    description: "Durgapura &amp; Vaishali Nagar OPD enquiries",
    hoverColor: "hover:border-[#102D4F]/30 hover:bg-[#102D4F] hover:text-white group",
  },
  {
    icon: MessageSquare,
    label: "WhatsApp",
    value: CLINIC_INFO.whatsappNumber,
    href: CLINIC_INFO.whatsappLink,
    description: "Quick symptom queries, MRI sharing, consultation booking",
    hoverColor: "hover:border-emerald-500 hover:bg-emerald-600 hover:text-white group",
    isExternal: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: CLINIC_INFO.email,
    href: `mailto:${CLINIC_INFO.email}`,
    description: "For detailed medical enquiries, insurance queries, or formal correspondence",
    hoverColor: "hover:border-[#F47721]/40 hover:bg-[#F47721] hover:text-white group",
  },
  {
    icon: Clock,
    label: "OPD Timings",
    value: "Mon – Sat, 10 AM – 5 PM",
    href: null,
    description: CLINIC_INFO.sundayStatus,
    hoverColor: "group",
  },
  {
    icon: MapPin,
    label: "Primary Location",
    value: "Durgapura, Jaipur",
    href: "https://maps.google.com/?q=Arthrogenix+Jaipur",
    description: "Tonk Road, Jaipur 302018. Near Durgapura Railway Station.",
    hoverColor: "hover:border-[#F47721]/40 group",
    isExternal: true,
  },
];

export function ContactDetailsGrid() {
  return (
    <section className="py-12 sm:py-16 bg-white border-b border-[#DCE5EF]">
      <Container>
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                CONTACT DETAILS
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              All Contact Channels
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {CONTACT_CARDS.map((card, idx) => {
              const Icon = card.icon;
              const inner = (
                <div
                  className={`bg-white rounded-2xl p-5 border border-[#DCE5EF] transition-all duration-200 ${card.hoverColor} h-full flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-[#FFF4EB] text-[#F47721] group-hover:bg-white/20 group-hover:text-white flex items-center justify-center mb-3 transition-all">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#8C9AA8] group-hover:text-white/70 mb-1 transition-colors">
                      {card.label}
                    </div>
                    <div className="text-sm sm:text-base font-bold text-[#102D4F] group-hover:text-white transition-colors leading-snug">
                      {card.value}
                    </div>
                  </div>
                  <div
                    className="text-xs text-[#52647A] group-hover:text-white/80 mt-2 leading-relaxed transition-colors"
                    dangerouslySetInnerHTML={{ __html: card.description }}
                  />
                </div>
              );

              if (card.href) {
                return (
                  <a
                    key={idx}
                    href={card.href}
                    target={card.isExternal ? "_blank" : undefined}
                    rel={card.isExternal ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {inner}
                  </a>
                );
              }
              return <div key={idx}>{inner}</div>;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
