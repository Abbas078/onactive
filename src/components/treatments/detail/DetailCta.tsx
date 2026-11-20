"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Phone, Calendar, Clock, MapPin, CheckCircle, MessageSquare } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { DR_ANKIT_CV } from "@/constants/doctorCv";

interface DetailCtaProps {
  treatmentTitle: string;
}

export function DetailCta({ treatmentTitle }: DetailCtaProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    location: "Sevayatan Multispeciality Hospital",
    message: `Inquiry regarding ${treatmentTitle}`,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="appointment-section" className="py-16 md:py-24 bg-[#102D4F] text-white relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#F47721]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#0A1C33]/50 rounded-full blur-3xl pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Doctor Profile & Consultation Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 bg-[#F47721]/20 border border-[#F47721]/40 px-3 py-1 rounded-full text-xs font-semibold text-[#F47721]">
              Consultation & Second Opinion
            </div>

            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Schedule Your Consultation for {treatmentTitle}
            </h2>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed">
              Consult with Dr. Ankit Jaipal for an objective, evidence-based orthopaedic assessment. Bring your recent MRI or X-ray scans for a comprehensive clinical review and treatment plan.
            </p>

            {/* Doctor Info Card */}
            <div className="bg-white/10 backdrop-blur-xs border border-white/10 rounded-2xl p-5 flex items-center gap-4">
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#F47721] shrink-0 bg-[#0A1C33]">
                <Image
                  src="/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg"
                  alt="Dr. Ankit Jaipal Consultant Orthopaedics"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {DR_ANKIT_CV.personalInfo.name}
                </h3>
                <p className="text-xs text-[#F47721] font-medium">
                  {DR_ANKIT_CV.personalInfo.designation} • MS Orthopaedics (SMS Hospital Jaipur)
                </p>
                <p className="text-xs text-gray-300 mt-0.5">
                  Over 15+ Years Clinical Medical Background • Arthroscopy & Joint Care
                </p>
              </div>
            </div>

            {/* Hospital & Clinic Locations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F47721] mb-1">
                  <MapPin className="w-4 h-4" />
                  Surgical & Cashless Partner
                </div>
                <div className="text-xs font-semibold text-white">Sevayatan Hospital</div>
                <div className="text-[11px] text-gray-400">Pratap Nagar, Jaipur</div>
                <div className="text-[11px] text-emerald-400 font-medium mt-1">RGHS & Cashless Empaneled</div>
              </div>

              <div className="bg-white/5 rounded-xl p-4 border border-white/10">
                <div className="flex items-center gap-2 text-xs font-bold text-[#F47721] mb-1">
                  <Clock className="w-4 h-4" />
                  OPD & Follow-ups
                </div>
                <div className="text-xs font-semibold text-white">Arthrogenix Clinic</div>
                <div className="text-[11px] text-gray-400">Durgapura, Jaipur</div>
                <div className="text-[11px] text-gray-300 mt-1">Mon - Sat: 10:00 AM - 5:00 PM</div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={`tel:${CLINIC_INFO.primaryPhoneRaw}`}
                className="inline-flex items-center gap-2 text-sm font-semibold bg-[#F47721] hover:bg-[#e06816] text-white px-5 py-3 rounded-xl transition-colors shadow-md"
              >
                <Phone className="w-4 h-4" />
                Call {CLINIC_INFO.primaryPhone}
              </a>
              <a
                href={CLINIC_INFO.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-xl border border-white/20 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#25D366]" />
                WhatsApp Inquiry
              </a>
            </div>
          </div>

          {/* Right Column: Appointment Request Form */}
          <div className="lg:col-span-6">
            <div className="bg-white text-[#102D4F] rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <h3 className="text-xl font-bold text-[#102D4F] mb-1">
                Book a Priority Consultation
              </h3>
              <p className="text-xs text-[#52647A] mb-6">
                Fill out the form below. Our clinical care coordinator will call you to confirm your appointment slot.
              </p>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#102D4F]">
                    Consultation Request Received!
                  </h4>
                  <p className="text-xs text-[#52647A] max-w-sm mx-auto">
                    Thank you, {formData.name || "Patient"}. Our clinic desk will contact you at {formData.phone} shortly with your appointment confirmation.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    size="sm"
                    className="border-[#102D4F] text-[#102D4F]"
                  >
                    Submit Another Request
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                      Patient Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DCE5EF] text-sm focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98XXX XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#DCE5EF] text-sm focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                        Preferred Date
                      </label>
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-xl border border-[#DCE5EF] text-sm focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                      Consultation Center
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#DCE5EF] text-sm focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                    >
                      <option value="Sevayatan Multispeciality Hospital">
                        Sevayatan Hospital (Pratap Nagar, Cashless/RGHS)
                      </option>
                      <option value="Arthrogenix Clinic Durgapura">
                        Arthrogenix Clinic (Durgapura, Jaipur)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1.5">
                      Clinical Note / Scan Details
                    </label>
                    <textarea
                      rows={2}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-2 rounded-xl border border-[#DCE5EF] text-sm focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                    />
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      variant="primary"
                      className="w-full bg-[#F47721] hover:bg-[#e06816] text-white font-bold py-3 text-sm shadow-md"
                    >
                      <Calendar className="w-4 h-4 mr-2" />
                      Request Appointment with Dr. Ankit Jaipal
                    </Button>
                  </div>

                  <p className="text-[11px] text-[#8C9AA8] text-center pt-1">
                    Your medical information is held strictly confidential. No spam guaranteed.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
