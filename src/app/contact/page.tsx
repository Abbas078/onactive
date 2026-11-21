import { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactDetailsGrid } from "@/components/contact/ContactDetailsGrid";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactClinicCards } from "@/components/contact/ContactClinicCards";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

export const metadata: Metadata = {
  title: "Contact Dr. Ankit Jaipal | Arthrogenix Orthopaedics Jaipur",
  description:
    "Contact Dr. Ankit Jaipal — Consultant Orthopaedics at Arthrogenix Jaipur. Phone +91 7351755551, WhatsApp, email, and clinic locations at Durgapura, Sevayatan Hospital, and Vaishali Nagar.",
  alternates: {
    canonical: "https://arthrogenix.in/contact",
  },
  openGraph: {
    title: "Contact Dr. Ankit Jaipal | Arthrogenix Jaipur",
    description:
      "Call, WhatsApp, or send an enquiry to Dr. Ankit Jaipal's orthopaedic clinic in Jaipur. OPD timings, clinic addresses, and direct contact.",
    url: "https://arthrogenix.in/contact",
    siteName: "Arthrogenix - Dr. Ankit Jaipal",
    locale: "en_IN",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <ContactHero />
      <ContactDetailsGrid />
      <div className="bg-[#F5F8FB]">
        <ContactClinicCards />
        <ContactForm />
      </div>
      <AppointmentCtaSection />
    </main>
  );
}
