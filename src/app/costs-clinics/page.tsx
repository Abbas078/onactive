import { Metadata } from "next";
import { PlaceholderPage } from "@/components/ui/PlaceholderPage";

export const metadata: Metadata = {
  title: "Costs & Clinics | Arthrogenix Jaipur",
  description:
    "Clinic locations in Durgapura, Sevayatan Hospital, and Vaishali Nagar, OPD timings, consultation details, and RGHS / Cashless insurance in Jaipur.",
};

export default function CostsClinicsPage() {
  return (
    <PlaceholderPage
      title="Costs, Clinics & Insurance"
      category="Clinic Transparency"
      phaseNumber={7}
      description="Location maps and directions for Arthrogenix Durgapura and Sevayatan Multispeciality Hospital OPD centres, alongside verified RGHS, corporate TPA, and cashless mediclaim policies."
      upcomingFeatures={[
        "Interactive clinic cards with directions, phone, and OPD schedules",
        "Clear guidance on RGHS Rajasthan Government Health Scheme benefits",
        "Empanelled insurance TPAs and cashless hospital admission protocol",
        "Direct enquiry for surgery estimates and consultation fees",
      ]}
    />
  );
}

