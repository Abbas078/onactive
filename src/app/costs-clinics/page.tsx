import { Metadata } from "next";
import { CostsClinicsHero } from "@/components/costs-clinics/CostsClinicsHero";
import { TreatmentCostEnquiry } from "@/components/costs-clinics/TreatmentCostEnquiry";
import { InsuranceRghs } from "@/components/costs-clinics/InsuranceRghs";
import { ClinicLocationsSection } from "@/components/costs-clinics/ClinicLocationsSection";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

export const metadata: Metadata = {
  title: "Costs, Clinics & Insurance | Dr. Ankit Jaipal Orthopaedics Jaipur",
  description:
    "Orthopaedic consultation information, treatment cost enquiry, RGHS and cashless insurance details, and clinic locations for Dr. Ankit Jaipal in Jaipur — Durgapura, Sevayatan Hospital, and Vaishali Nagar.",
  alternates: {
    canonical: "https://arthrogenix.in/costs-clinics",
  },
  openGraph: {
    title: "Costs, Clinics & Insurance | Arthrogenix Jaipur",
    description:
      "Transparent consultation process, RGHS empanelment, cashless insurance facilities, and clinic OPD timings for Dr. Ankit Jaipal Orthopaedics Jaipur.",
    url: "https://arthrogenix.in/costs-clinics",
    siteName: "Arthrogenix - Dr. Ankit Jaipal",
    locale: "en_IN",
    type: "website",
  },
};

export default function CostsClinicsPage() {
  return (
    <main className="min-h-screen bg-white">
      <CostsClinicsHero />
      <TreatmentCostEnquiry />
      <InsuranceRghs />
      <ClinicLocationsSection />
      <AppointmentCtaSection />
    </main>
  );
}
