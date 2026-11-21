import { Metadata } from "next";
import { BookingHero } from "@/components/booking/BookingHero";
import { AppointmentForm } from "@/components/booking/AppointmentForm";
import { BookingInfoSidebar } from "@/components/booking/BookingInfoSidebar";
import { Container } from "@/components/ui/Container";

export const metadata: Metadata = {
  title: "Book an Appointment | Dr. Ankit Jaipal Orthopaedics Jaipur",
  description:
    "Request an orthopaedic consultation with Dr. Ankit Jaipal in Jaipur. OPD slots at Durgapura, Sevayatan Hospital, and Vaishali Nagar. RGHS and cashless insurance accepted.",
  alternates: {
    canonical: "https://arthrogenix.in/book-appointment",
  },
  openGraph: {
    title: "Book Appointment | Dr. Ankit Jaipal Arthrogenix Jaipur",
    description:
      "Request an orthopaedic consultation, ACL evaluation, joint replacement enquiry, or sports injury assessment with Dr. Ankit Jaipal.",
    url: "https://arthrogenix.in/book-appointment",
    siteName: "Arthrogenix - Dr. Ankit Jaipal",
    locale: "en_IN",
    type: "website",
  },
};

export default function BookAppointmentPage() {
  return (
    <main className="min-h-screen bg-[#F5F8FB]">
      <BookingHero />

      <section className="py-10 sm:py-16">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto">
            {/* Main Appointment Form */}
            <div className="lg:col-span-7">
              <AppointmentForm />
            </div>

            {/* Info Sidebar */}
            <div className="lg:col-span-5">
              <BookingInfoSidebar />
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
