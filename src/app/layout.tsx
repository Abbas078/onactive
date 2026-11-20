import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { TopBar } from "@/components/layout/TopBar";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AppointmentModalProvider } from "@/context/AppointmentModalContext";
import { AppointmentModal } from "@/components/ui/AppointmentModal";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#102D4F",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: {
    template: "%s | Arthrogenix - Dr. Ankit Jaipal",
    default: "Arthrogenix | Consultant Orthopaedics & AR Joint Replacement | Dr. Ankit Jaipal (Jaipur)",
  },
  description:
    "Dr. Ankit Jaipal (MS Orthopaedics, SMS Medical College) is a leading orthopaedic and joint replacement surgeon in Jaipur. Specializing in AR computer-navigated knee replacement, sports arthroscopy, and complex trauma at Durgapura and Sevayatan Hospital.",
  keywords: [
    "Orthopedic Doctor in Jaipur",
    "Dr Ankit Jaipal",
    "AR Knee Replacement Jaipur",
    "Computer Navigated Knee Replacement",
    "Arthroscopy Surgeon Jaipur",
    "SMS Medical College Orthopaedic",
    "Sevayatan Hospital Orthopaedics",
    "ACL Surgery Jaipur",
    "Arthrogenix",
    "Joint Replacement Jaipur",
  ],
  authors: [{ name: "Dr. Ankit Jaipal" }],
  metadataBase: new URL("https://arthrogenix.in"),
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://arthrogenix.in",
    siteName: "Arthrogenix",
    title: "Arthrogenix | Orthopaedic & Joint Centre | Dr. Ankit Jaipal",
    description:
      "Advanced orthopaedic care, AR computer-navigated joint replacement, and sports arthroscopy in Jaipur with Dr. Ankit Jaipal.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} font-sans`}>
      <body className="min-h-screen flex flex-col bg-white text-[#102D4F] selection:bg-[#F47721]/20 selection:text-[#102D4F]">
        <AppointmentModalProvider>
          <TopBar />
          <Header />
          <main className="flex-1 w-full">{children}</main>
          <Footer />
          <AppointmentModal />
        </AppointmentModalProvider>
      </body>
    </html>
  );
}
