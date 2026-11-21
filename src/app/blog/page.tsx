import { Metadata } from "next";
import { BlogHero } from "@/components/blog/BlogHero";
import { BlogListing } from "@/components/blog/BlogListing";
import { AppointmentCtaSection } from "@/components/home/AppointmentCtaSection";

export const metadata: Metadata = {
  title: "Orthopaedic & Joint Health Blog | Patient Guides by Dr. Ankit Jaipal",
  description:
    "Evidence-based patient educational guides on knee osteoarthritis, ACL tear reconstruction, AR computer-navigated joint replacement, meniscus care, and sports injuries in Jaipur.",
  alternates: {
    canonical: "https://arthrogenix.in/blog",
  },
  openGraph: {
    title: "Orthopaedic & Joint Health Patient Education | Arthrogenix",
    description:
      "Clinical educational resources on knee preservation, sports injuries, ligament reconstruction, and computer-assisted knee surgery in Jaipur.",
    url: "https://arthrogenix.in/blog",
    siteName: "Arthrogenix",
    type: "website",
    locale: "en_IN",
  },
};

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <BlogHero />
      <BlogListing />
      <AppointmentCtaSection />
    </main>
  );
}
