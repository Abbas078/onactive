"use client";

import React, { useState, useRef } from "react";
import { Calendar, Clock, MapPin, User, Phone, Mail, FileText, CheckCircle2, AlertCircle, Loader2, MessageSquare } from "lucide-react";
import { CLINIC_INFO } from "@/constants/clinicInfo";

type FormState = "idle" | "submitting" | "success" | "error";

interface BookingFormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  preferredDate: string;
  preferredTime: string;
  reason: string;
  consent: boolean;
}

const LOCATIONS = [
  "Arthrogenix Clinic – Durgapura, Jaipur",
  "Sevayatan Multispeciality Hospital – Jaipur",
  "Arthrogenix Clinic – Vaishali Nagar, Jaipur",
  "No preference – Any available clinic",
];

const TIME_SLOTS = [
  "Morning (10:00 AM – 12:00 PM)",
  "Afternoon (12:00 PM – 2:00 PM)",
  "Evening (5:00 PM – 7:00 PM)",
  "No preference",
];

const CONSULTATION_REASONS = [
  "Knee Pain / ACL / Meniscus Injury",
  "Shoulder Pain / Rotator Cuff / Dislocation",
  "Joint Replacement Enquiry (Knee / Hip)",
  "Sports Injury Assessment",
  "Post-Surgery Follow-Up",
  "Fracture / Trauma Follow-Up",
  "MRI / Imaging Second Opinion",
  "Osteoarthritis Consultation",
  "General Orthopaedic Evaluation",
  "Other",
];

export function AppointmentForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const submittedRef = useRef(false);

  const today = new Date();
  today.setDate(today.getDate() + 1);
  const minDate = today.toISOString().split("T")[0];

  const [form, setForm] = useState<BookingFormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    preferredDate: "",
    preferredTime: "",
    reason: "",
    consent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const validate = (): string | null => {
    if (!form.name.trim()) return "Please enter your full name.";
    if (!/^[6-9]\d{9}$/.test(form.phone.replace(/\s/g, "")))
      return "Please enter a valid 10-digit Indian mobile number starting with 6–9.";
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      return "Please enter a valid email address.";
    if (!form.location) return "Please select your preferred clinic location.";
    if (!form.preferredDate) return "Please select a preferred appointment date.";
    if (!form.reason) return "Please select a reason for consultation.";
    if (!form.consent) return "Please accept the patient consent checkbox before submitting.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittedRef.current) return;

    const err = validate();
    if (err) {
      setErrorMsg(err);
      setFormState("error");
      return;
    }

    submittedRef.current = true;
    setFormState("submitting");
    setErrorMsg("");

    // No booking API available yet — simulate acknowledgment
    await new Promise((r) => setTimeout(r, 1400));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <div className="bg-white rounded-3xl border border-[#DCE5EF] p-8 sm:p-10 text-center shadow-xs">
        <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-xl font-extrabold text-[#102D4F] mb-2">
          Appointment Request Received
        </h3>
        <p className="text-sm text-[#52647A] leading-relaxed mb-4">
          Thank you, <strong>{form.name}</strong>. Your appointment request has been recorded for{" "}
          <strong>{form.preferredDate}</strong> at <strong>{form.location}</strong>.
          Our clinic team will contact you on <strong>{form.phone}</strong> to confirm your slot during OPD hours (Mon–Sat, 10 AM–5 PM).
        </p>
        <div className="p-4 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 text-left mb-6">
          <strong>Important: </strong>
          Your appointment is <strong>not yet confirmed</strong>. This form submits a request only. Please wait for a confirmation call from the clinic. For urgent assistance, call{" "}
          <a href="tel:917351755551" className="font-bold underline">{CLINIC_INFO.primaryPhone}</a> or WhatsApp directly.
        </div>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href={CLINIC_INFO.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 text-white text-xs font-bold hover:bg-emerald-700 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Confirm via WhatsApp</span>
          </a>
          <button
            onClick={() => {
              setFormState("idle");
              submittedRef.current = false;
              setForm({ name: "", phone: "", email: "", location: "", preferredDate: "", preferredTime: "", reason: "", consent: false });
            }}
            className="text-xs font-bold text-[#F47721] hover:underline px-4 py-2.5 border border-[#F47721]/30 rounded-xl"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-2xl border border-[#DCE5EF] p-6 sm:p-8 space-y-5 shadow-xs"
    >
      <h2 className="text-lg sm:text-xl font-extrabold text-[#102D4F] mb-1">
        Patient Appointment Request
      </h2>
      <p className="text-xs text-[#52647A] mb-4">
        Fields marked <span className="text-rose-500">*</span> are required. This form sends a booking request; not a confirmed appointment.
      </p>

      {formState === "error" && (
        <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Name + Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="app-name" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
            <User className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Patient Name <span className="text-rose-500">*</span></span>
          </label>
          <input
            id="app-name"
            name="name"
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full name of patient"
            className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
          />
        </div>
        <div>
          <label htmlFor="app-phone" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
            <Phone className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Mobile Number <span className="text-rose-500">*</span></span>
          </label>
          <input
            id="app-phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={handleChange}
            placeholder="10-digit mobile number"
            className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="app-email" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
          <Mail className="w-3.5 h-3.5 text-[#F47721]" />
          <span>Email <span className="text-[#8C9AA8] font-normal">(optional)</span></span>
        </label>
        <input
          id="app-email"
          name="email"
          type="email"
          autoComplete="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
        />
      </div>

      {/* Preferred Location */}
      <div>
        <label htmlFor="app-location" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
          <MapPin className="w-3.5 h-3.5 text-[#F47721]" />
          <span>Preferred Clinic Location <span className="text-rose-500">*</span></span>
        </label>
        <select
          id="app-location"
          name="location"
          value={form.location}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
        >
          <option value="">Select preferred clinic</option>
          {LOCATIONS.map((l) => <option key={l} value={l}>{l}</option>)}
        </select>
      </div>

      {/* Date + Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="app-date" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
            <Calendar className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Preferred Date <span className="text-rose-500">*</span></span>
          </label>
          <input
            id="app-date"
            name="preferredDate"
            type="date"
            min={minDate}
            value={form.preferredDate}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
          />
        </div>
        <div>
          <label htmlFor="app-time" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F47721]" />
            <span>Preferred Time Slot</span>
          </label>
          <select
            id="app-time"
            name="preferredTime"
            value={form.preferredTime}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
          >
            <option value="">Select preferred time</option>
            {TIME_SLOTS.map((t) => <option key={t} value={t}>{t}</option>)}
          </select>
        </div>
      </div>

      {/* Reason */}
      <div>
        <label htmlFor="app-reason" className="flex items-center gap-1.5 text-xs font-bold text-[#102D4F] mb-1.5">
          <FileText className="w-3.5 h-3.5 text-[#F47721]" />
          <span>Reason for Consultation <span className="text-rose-500">*</span></span>
        </label>
        <select
          id="app-reason"
          name="reason"
          value={form.reason}
          onChange={handleChange}
          className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
        >
          <option value="">Select reason for visit</option>
          {CONSULTATION_REASONS.map((r) => <option key={r} value={r}>{r}</option>)}
        </select>
      </div>

      {/* Consent */}
      <div className="flex items-start gap-3 p-4 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF]">
        <input
          id="app-consent"
          name="consent"
          type="checkbox"
          checked={form.consent}
          onChange={handleChange}
          className="mt-0.5 w-4 h-4 accent-[#F47721]"
        />
        <label htmlFor="app-consent" className="text-xs text-[#52647A] leading-relaxed cursor-pointer">
          <span className="text-rose-500 font-bold">* </span>
          I understand that this form submits an <strong>appointment request only</strong>. The appointment will be confirmed by the clinic team via phone call during OPD hours. I consent to being contacted on the mobile number provided. I have not shared sensitive diagnostic or medical record information in this form.
        </label>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={formState === "submitting"}
        className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F47721] text-white text-sm font-bold hover:bg-[#d96210] transition-all shadow-md shadow-[#F47721]/20 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {formState === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Submitting Request…</span>
          </>
        ) : (
          <>
            <Calendar className="w-4 h-4" />
            <span>Submit Appointment Request</span>
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-[#8C9AA8]">
        Your details are kept private and not shared with third parties. Appointment confirmation is provided by the clinic team directly.
      </p>
    </form>
  );
}

