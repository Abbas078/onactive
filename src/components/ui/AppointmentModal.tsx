"use client";

import React, { useState } from "react";
import Image from "next/image";
import { X, Calendar, MapPin, CheckCircle, MessageSquare, ShieldCheck } from "lucide-react";
import { useAppointmentModal } from "@/context/AppointmentModalContext";
import { CLINIC_INFO } from "@/constants/clinicInfo";
import { DR_ANKIT_CV } from "@/constants/doctorCv";
import { Button } from "@/components/ui/Button";

export function AppointmentModal() {
  const { isOpen, serviceTitle, closeModal } = useAppointmentModal();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    preferredDate: "",
    location: "Sevayatan Multispeciality Hospital (Pratap Nagar)",
    specialty: "",
    message: "",
  });

  const currentSpecialty = formData.specialty || serviceTitle || "General Orthopaedic Consultation / Second Opinion";
  const currentMessage = formData.message || (serviceTitle ? `Inquiry regarding ${serviceTitle}` : "");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    setSubmitted(false);
    closeModal();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
    >
      {/* Backdrop */}
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-[#0A1C33]/70 backdrop-blur-xs transition-opacity duration-300 animate-in fade-in"
      />

      {/* Modal Dialog Card */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#DCE5EF] overflow-hidden z-10 my-auto animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F5F8FB] hover:bg-neutral-200 text-[#52647A] hover:text-[#102D4F] transition-colors z-20"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#102D4F] to-[#183F6C] text-white p-5 sm:p-6 pr-14 relative">
          <div className="flex items-center gap-3.5">
            <div className="relative w-13 h-13 rounded-full overflow-hidden border-2 border-[#F47721] shrink-0 bg-white/10">
              <Image
                src="/images/doctor/dr-ankit-jaipal-portrait-scrubs.jpeg"
                alt="Dr. Ankit Jaipal"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#F47721] bg-[#F47721]/20 px-2 py-0.5 rounded-md inline-block mb-1">
                Clinical Consultation
              </span>
              <h2 id="modal-title" className="text-lg sm:text-xl font-bold leading-tight">
                Book Appointment
              </h2>
              <p className="text-xs text-gray-300 mt-0.5">
                {DR_ANKIT_CV.personalInfo.name} • {DR_ANKIT_CV.personalInfo.designation}
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 max-h-[75vh] overflow-y-auto">
          {submitted ? (
            /* Success State */
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle className="w-9 h-9" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#102D4F]">
                  Consultation Request Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#52647A] max-w-sm mx-auto mt-2 leading-relaxed">
                  Thank you, <strong className="text-[#102D4F]">{formData.name || "Patient"}</strong>. Our clinical care desk at Arthrogenix will call you at <strong className="text-[#102D4F]">{formData.phone}</strong> shortly to confirm your consultation slot.
                </p>
              </div>

              <div className="p-4 bg-[#F5F8FB] rounded-2xl border border-[#DCE5EF] text-xs text-[#52647A] text-left max-w-sm mx-auto space-y-1.5">
                <div className="flex items-center gap-2 text-[#102D4F] font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
                  <span>{formData.location}</span>
                </div>
                {formData.preferredDate && (
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-[#F47721]" />
                    <span>Preferred Date: {formData.preferredDate}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-emerald-600 font-medium pt-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>RGHS &amp; Cashless Empaneled</span>
                </div>
              </div>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button
                  onClick={handleClose}
                  variant="primary"
                  size="md"
                  className="w-full sm:w-auto px-6 font-semibold"
                >
                  Close
                </Button>
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs font-semibold bg-[#25D366] hover:bg-[#20ba59] text-white px-5 py-2.5 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  Confirm on WhatsApp
                </a>
              </div>
            </div>
          ) : (
            /* Booking Form */
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                  Patient Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                />
              </div>

              {/* Phone & Date in 2 columns */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98XXX XXXXX"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                  />
                </div>
              </div>

              {/* Center / Hospital Selection */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                  Consultation Center
                </label>
                <select
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                >
                  <option value="Sevayatan Multispeciality Hospital (Pratap Nagar)">
                    Sevayatan Hospital (Pratap Nagar, Cashless/RGHS Empaneled)
                  </option>
                  <option value="Arthrogenix Clinic (Durgapura)">
                    Arthrogenix Clinic (Durgapura, Jaipur)
                  </option>
                </select>
              </div>

              {/* Clinical Specialty */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                  Consultation Focus / Condition
                </label>
                <select
                  value={currentSpecialty}
                  onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                >
                  <option value="Knee Ligament & Meniscus Surgery">Knee Ligament &amp; Meniscus Surgery</option>
                  <option value="AR Computer-Navigated Knee Replacement">AR Computer-Navigated Knee Replacement</option>
                  <option value="ACL / PCL Cruciate Reconstruction">ACL / PCL Cruciate Reconstruction</option>
                  <option value="Shoulder Arthroscopy & Rotator Cuff Repair">Shoulder Arthroscopy &amp; Rotator Cuff</option>
                  <option value="Sports Injury & Joint Preservation">Sports Injury &amp; Joint Preservation</option>
                  <option value="General Orthopaedic Consultation / Second Opinion">General Orthopaedic / Second Opinion</option>
                </select>
              </div>

              {/* Medical Note */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-[#102D4F] mb-1">
                  Brief Clinical Note / Symptoms (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Knee pain after football, have recent MRI scan..."
                  value={currentMessage}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-[#DCE5EF] text-sm text-[#102D4F] focus:outline-hidden focus:border-[#F47721] bg-[#F5F8FB]"
                />
              </div>

              {/* Submit CTA */}
              <div className="pt-2">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full font-bold shadow-md shadow-[#F47721]/20 py-3"
                >
                  <Calendar className="w-4 h-4 mr-2" />
                  Confirm Appointment Request
                </Button>
              </div>

              {/* WhatsApp Alternative */}
              <div className="pt-3 border-t border-[#DCE5EF] flex items-center justify-between gap-2 text-xs text-[#52647A]">
                <span>Prefer instant messaging?</span>
                <a
                  href={CLINIC_INFO.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-bold text-[#25D366] hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3.5 h-3.5" />
                  Chat on WhatsApp
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
