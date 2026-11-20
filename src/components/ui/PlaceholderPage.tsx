import React from "react";
import Link from "next/link";
import { ArrowLeft, Phone, Calendar } from "lucide-react";
import { Container } from "./Container";
import { Button } from "./Button";
import { Card } from "./Card";
import { Badge } from "./Badge";
import { CLINIC_INFO } from "@/constants/clinicInfo";

interface PlaceholderPageProps {
  title: string;
  category?: string;
  description: string;
  phaseNumber: number;
  upcomingFeatures?: string[];
}

export function PlaceholderPage({
  title,
  category = "Arthrogenix Medical Section",
  description,
  phaseNumber,
  upcomingFeatures = [],
}: PlaceholderPageProps) {
  return (
    <div className="py-12 sm:py-20 bg-[#F5F8FB] min-h-[70vh] flex items-center">
      <Container size="tight">
        <div className="space-y-6">
          {/* Breadcrumb back */}
          <Link
            href="/"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#52647A] hover:text-[#F47721] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>

          <Card padding="lg" className="border-[#DCE5EF] shadow-md">
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-[#DCE5EF]">
                <Badge variant="orange" size="sm">
                  {category}
                </Badge>
                <Badge variant="subtle" size="sm">
                  Scheduled for Phase {phaseNumber}
                </Badge>
              </div>

              <div>
                <h1 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
                  {title}
                </h1>
                <p className="mt-3 text-sm sm:text-base text-[#52647A] leading-relaxed">
                  {description}
                </p>
              </div>

              {upcomingFeatures.length > 0 && (
                <div className="bg-[#F5F8FB] rounded-xl p-4 border border-[#DCE5EF]">
                  <h2 className="text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-2.5">
                    Planned in Master Development Plan:
                  </h2>
                  <ul className="space-y-2 text-xs sm:text-sm text-[#52647A]">
                    {upcomingFeatures.map((feat, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F47721] mt-2 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Direct Booking / Consultation Quick Action */}
              <div className="pt-2 flex flex-wrap items-center gap-4">
                <Button
                  href="/book-appointment"
                  variant="primary"
                  icon={<Calendar className="w-4 h-4" />}
                >
                  Book Appointment
                </Button>
                <Button
                  href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                  variant="outline"
                  icon={<Phone className="w-4 h-4 text-[#F47721]" />}
                >
                  Call {CLINIC_INFO.primaryPhone}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}

