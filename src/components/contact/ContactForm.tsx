"use client";

import React, { useState, useRef } from "react";
import { Send, CheckCircle2, AlertCircle, Loader2, Copy, Check } from "lucide-react";
import { Container } from "@/components/ui/Container";

type FormState = "idle" | "submitting" | "success" | "error";

interface ContactFormData {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
  consent: boolean;
  honeypot?: string;
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
  const [referenceNumber, setReferenceNumber] = useState("");
  const [copied, setCopied] = useState(false);
  const submittedRef = useRef(false);

  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
    consent: false,
    honeypot: "",
  });

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
    if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/[\s-]/g, "")))
      return "Please enter a valid 10-digit Indian mobile number.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      return "Please enter a valid email address.";
    if (!formData.message.trim() || formData.message.trim().length < 10)
      return "Please describe your query in at least 10 characters.";
    if (!formData.consent)
      return "Please accept the consent checkbox to submit your enquiry.";
    return null;
  };

  const handleCopyRef = () => {
    if (typeof window !== "undefined" && referenceNumber) {
      navigator.clipboard.writeText(referenceNumber).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submittedRef.current) return;

    const error = validate();
    if (error) {
      setErrorMessage(error);
      setFormState("error");
      return;
    }

    submittedRef.current = true;
    setFormState("submitting");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        submittedRef.current = false;
        setErrorMessage(
          data.error || "Failed to submit enquiry. Please try again or call the clinic."
        );
        setFormState("error");
        return;
      }

      setReferenceNumber(data.referenceNumber || "ENQ-CONFIRMED");
      setFormState("success");
    } catch {
      submittedRef.current = false;
      setErrorMessage("Network error connecting to the clinic server. Please call us directly.");
      setFormState("error");
    }
  };

  if (formState === "success") {
    return (
      <section className="py-12 sm:py-16">
        <Container>
          <div className="max-w-2xl mx-auto text-center bg-white rounded-3xl p-8 sm:p-10 border border-[#DCE5EF] shadow-xs">
            <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-700 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-[#102D4F] mb-1">
              Enquiry Received
            </h3>

            {/* Reference Badge */}
            <div className="my-4 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF]">
              <span className="text-xs text-[#52647A] font-semibold">Enquiry Reference:</span>
              <span className="text-sm font-mono font-bold text-[#102D4F]">
                {referenceNumber}
              </span>
              <button
                onClick={handleCopyRef}
                className="p-1 hover:bg-neutral-200 rounded text-[#52647A] transition-colors"
                title="Copy Reference"
              >
                {copied ? (
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                ) : (
                  <Copy className="w-3.5 h-3.5" />
                )}
              </button>
            </div>

            <p className="text-sm text-[#52647A] leading-relaxed mb-4 max-w-lg mx-auto">
              Thank you, <strong>{formData.name}</strong>. Your enquiry has been safely recorded in our clinic system. Our coordinator will contact you on <strong>{formData.phone}</strong> or email you at <strong>{formData.email}</strong> during OPD hours (Mon–Sat, 10 AM–5 PM).
            </p>

            <p className="mt-2 text-xs text-amber-800 bg-amber-50 border border-amber-200 rounded-xl px-4 py-3 text-left max-w-lg mx-auto">
              <strong>Notice: </strong>This contact form is for general inquiries. For urgent emergencies or acute sports trauma, please call our primary emergency number directly.
            </p>

            <div className="mt-6 flex justify-center">
              <button
                onClick={() => {
                  setFormState("idle");
                  submittedRef.current = false;
                  setReferenceNumber("");
                  setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    subject: "",
                    message: "",
                    consent: false,
                    honeypot: "",
                  });
                }}
                className="text-xs font-bold text-[#102D4F] hover:text-[#F47721] px-5 py-2.5 border border-[#DCE5EF] rounded-xl transition-colors"
              >
                Submit Another Enquiry
              </button>
            </div>
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
              Responses are provided during OPD hours. All messages are securely routed to the clinic desk.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            noValidate
            className="bg-white rounded-2xl border border-[#DCE5EF] p-6 sm:p-8 space-y-5"
          >
            {/* Honeypot field */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={handleChange}
              style={{ display: "none" }}
              tabIndex={-1}
              autoComplete="off"
            />

            {formState === "error" && (
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-rose-50 border border-rose-200 text-xs text-rose-800 animate-in fade-in">
                <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                <span>{errorMessage}</span>
              </div>
            )}

            {/* Name + Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-name" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Your Name <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
                />
              </div>

              <div>
                <label htmlFor="contact-phone" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Mobile Number <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="10-digit mobile number"
                  className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
                />
              </div>
            </div>

            {/* Email + Subject */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label htmlFor="contact-email" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Email Address <span className="text-rose-500">*</span>
                </label>
                <input
                  id="contact-email"
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
                <label htmlFor="contact-subject" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                  Subject / Topic
                </label>
                <select
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all"
                >
                  {SUBJECTS.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className="block text-xs font-bold text-[#102D4F] mb-1.5">
                Message / Details <span className="text-rose-500">*</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Describe your orthopaedic condition, symptoms, or enquiry..."
                className="w-full px-3.5 py-2.5 text-sm text-[#102D4F] placeholder-[#8C9AA8] bg-[#F5F8FB] border border-[#DCE5EF] rounded-xl focus:outline-hidden focus:border-[#F47721] focus:ring-2 focus:ring-[#F47721]/15 transition-all resize-none"
              />
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3 p-3.5 rounded-xl bg-[#F5F8FB] border border-[#DCE5EF]">
              <input
                id="contact-consent"
                name="consent"
                type="checkbox"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-0.5 w-4 h-4 accent-[#F47721]"
              />
              <label htmlFor="contact-consent" className="text-xs text-[#52647A] leading-relaxed cursor-pointer">
                <span className="text-rose-500 font-bold">* </span>
                I consent to Dr. Ankit Jaipal&apos;s clinic contacting me via phone or email regarding this enquiry. I understand that this form is for inquiry only and does not establish a patient-doctor emergency relationship.
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#F47721] text-white text-sm font-bold hover:bg-[#d96210] transition-all shadow-md shadow-[#F47721]/20 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
            >
              {formState === "submitting" ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting Message to Clinic…</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Send Enquiry</span>
                </>
              )}
            </button>
          </form>
        </div>
      </Container>
    </section>
  );
}
