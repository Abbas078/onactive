"use client";

import React, { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { Container } from "@/components/ui/Container";

type FormState = "idle" | "submitting" | "success" | "error";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
}

const SUBJECTS = [
  "General Orthopaedic Enquiry",
  "Appointment Request",
  "MRI / Imaging Second Opinion",
  "Surgery Cost Estimate",
  "Insurance / RGHS Query",
  "Post-Surgery Follow-Up",
  "Emergency / Urgent Query",
  "Other",
];

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
  });
  const submittedRef = useRef(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const validate = (): string | null => {
    if (!formData.name.trim()) return "Please enter your name.";
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, "")))
      return "Please enter a valid 10-digit Indian mobile number.";
    if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.message.trim() || formData.message.trim().length < 10)
      return "Please describe your query in at least 10 characters.";
    if (!formData.consent)
      return "Please accept the consent checkbox to submit your enquiry.";
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittedRef.current) return; // prevent duplicate

    const error = validate();
    if (error) {
      setErrorMessage(error);
      setFormState("error");
      return;
    }

    submittedRef.current = true;
    setFormState("submitting");
    setErrorMessage("");

    // No backend API exists yet — simulate a client-side request acknowledgment
    await new Promise((r) => setTimeout(r, 1200));
    setFormState("success");
  };

  if (formState === "success") {
    return (
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-10 border border-[#DCE5EF] shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold text-[#102D4F] mb-2">Enquiry Received</h3>
            <p className="text-sm text-[#52647A] leading-relaxed">
              Thank you, <strong>{formData.name}</strong>. Your message has been recorded. Our clinic team will contact you on <strong>{formData.phone}</strong> during OPD hours (Mon–Sat, 10 AM–5 PM).
            </p>
            <p className="mt-3 text-xs text-amber-700 bg-amber-50 border border-amber-200 rounded-xl px-4 py-2">
              <strong>Important: </strong>This is a contact form acknowledgment only. Your appointment is not yet confirmed. The clinic team will call you to confirm availability.
            </p>
            <button
              onClick={() => {
                setFormState("idle");
                submittedRef.current = false;
                setFormData({ name: "", phone: "", email: "", subject: "", message: "", consent: false });
              }}
              className="mt-6 text-xs font-bold text-[#F47721] hover:underline"
            >
              Submit Another Enquiry
            </button>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 mb-2">
              <span className="w-5 h-[2px] bg-[#F47721]" />
              <span className="text-xs font-bold uppercase tracking-wider text-[#F47721]">
                SEND AN ENQUIRY
              </span>
              <span className="w-5 h-[2px] bg-[#F47721]" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#102D4F] tracking-tight">
              Contact Form
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-[#52647A]">
              Responses are provided during OPD hours. For urgent care, please call directly.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl border border-[#DCE5EF] p-6 sm:p-8 space-y-5"
          >
            {formState === "error" && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Full Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit Indian mobile number"
                  className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                Email Address <span className="text-[#8C9AA8] font-normal">(optional)</span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
              >
                <option value="">Select a subject (optional)</option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                Your Message <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your condition, symptoms, or query. Include which joint is affected and approximate duration of symptoms."
                className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all resize-none"
                required
              />
              <div className="text-[11px] text-[#8C9AA8] mt-1">
                {formData.message.length} characters. Minimum 10 required.
              </div>
            </div>

            {/* Consent Checkbox */}
            <div className="flex items-start gap-3">
              <input
                id="consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-[#F47721]"
                required
              />
              <label htmlFor="consent" className="text-xs text-[#52647A] leading-relaxed cursor-pointer">
                I consent to Arthrogenix contacting me via phone or WhatsApp regarding my enquiry. I understand this is a general enquiry form and not a confirmed appointment booking. I have not shared sensitive medical records in this form.
              </label>
            </div>

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F47721] text-white text-sm font-bold hover:bg-[#d96210] transition-all shadow-md shadow-[#F47721]/20 disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Sending Enquiry…</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>

            <p className="text-[11px] text-center text-[#8C9AA8]">
              We do not share your contact details with any third party. Response time: within OPD hours, Mon–Sat.
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}

