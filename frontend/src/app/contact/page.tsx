"use client";

import { useState } from "react";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ── Data ──────────────────────────────────────────────────────────────────

const DEPARTMENTS_CONTACT = [
  { name: "General Enquiry / Reception", phone: "0821-254 1122", hours: "Mon–Sat, 8:00 AM – 8:00 PM", icon: "🏥" },
  { name: "Emergency & Trauma", phone: "0821-254 1122", hours: "24 hours / 7 days", icon: "🚑", isEmergency: true },
  { name: "Outpatient (OPD)", phone: "0821-254 1200", hours: "Mon–Sat, 8:30 AM – 5:00 PM", icon: "🩺" },
  { name: "Inpatient Admissions", phone: "0821-254 1201", hours: "Mon–Sat, 9:00 AM – 6:00 PM", icon: "🛏️" },
  { name: "Dialysis Unit", phone: "0821-254 1205", hours: "Mon–Sat, 7:00 AM – 7:00 PM", icon: "🫘" },
  { name: "Laboratory & Reports", phone: "0821-254 1210", hours: "Mon–Sat, 7:00 AM – 6:00 PM", icon: "🔬" },
  { name: "Pharmacy", phone: "0821-254 1215", hours: "Mon–Sat, 8:00 AM – 8:00 PM", icon: "💊" },
  { name: "Corporate / Insurance Desk", phone: "0821-254 1220", hours: "Mon–Fri, 9:00 AM – 5:00 PM", icon: "🏢" },
];

const OPD_HOURS = [
  { day: "Monday – Friday", time: "8:30 AM – 5:00 PM" },
  { day: "Saturday", time: "8:30 AM – 2:00 PM" },
  { day: "Sunday", time: "Emergency only" },
  { day: "Public Holidays", time: "Emergency only" },
];

type EnquiryType = "General" | "Appointment" | "Corporate" | "Feedback" | "Media" | "Careers";

const ENQUIRY_TYPES: EnquiryType[] = ["General", "Appointment", "Corporate", "Feedback", "Media", "Careers"];

interface FormState {
  name: string;
  phone: string;
  email: string;
  enquiryType: EnquiryType;
  message: string;
}

// ── Page ──────────────────────────────────────────────────────────────────

export default function ContactPage() {
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    enquiryType: "General",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const set = (field: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const canSubmit = form.name.trim().length > 1 && form.phone.trim().length >= 10 && form.message.trim().length > 5;

  const handleSubmit = () => {
    if (canSubmit) setSubmitted(true);
  };

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="relative py-20 px-7 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 55%, var(--mint-deep) 100%)",
          }}
        >
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "var(--mint)" }} />
          <div className="absolute -bottom-16 -left-10 w-[280px] h-[280px] rounded-full opacity-[0.04]" style={{ background: "var(--teal)" }} />

          <div className="relative max-w-[1180px] mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2.5px] uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              ✦ We're Here to Help
            </div>
            <h1
              className="text-[34px] sm:text-[46px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Contact Us
            </h1>
            <p className="text-[16px] text-white/60 max-w-[500px] mx-auto leading-[1.85] mb-10">
              Whether you have a question, need to book an appointment, or want to reach a
              specific department — we're just a call or message away.
            </p>

            {/* Quick contact buttons */}
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="tel:08212541122"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl text-white font-semibold text-[14px] transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--mint-dark)" }}
              >
                <span className="text-[18px]">📞</span>
                <span>0821-254 1122</span>
              </a>
              <a
                href="mailto:info@sjhmysuru.in"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-[14px] transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span className="text-[18px]">✉️</span>
                <span>info@sjhmysuru.in</span>
              </a>
              <a
                href="https://maps.google.com/?q=St+Joseph+Hospital+Bannimantap+Mysuru"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-[14px] transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                <span className="text-[18px]">📍</span>
                <span>Get Directions</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Emergency Banner ──────────────────────── */}
        <div
          className="py-4 px-7"
          style={{ background: "#7f1d1d" }}
        >
          <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-[22px]">🚨</span>
              <div>
                <p className="text-white font-bold text-[14px]">Medical Emergency? Don't wait.</p>
                <p className="text-red-300 text-[12.5px]">Our Emergency & Trauma team is available 24 hours a day, 7 days a week.</p>
              </div>
            </div>
            <a
              href="tel:08212541122"
              className="shrink-0 px-6 py-3 rounded-lg text-white font-bold text-[14px] transition-all hover:opacity-90"
              style={{ background: "#dc2626" }}
            >
              Call Emergency: 0821-254 1122
            </a>
          </div>
        </div>

        {/* ── Main grid ─────────────────────────────── */}
        <div className="max-w-[1180px] mx-auto px-7 py-14 grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12">

          {/* ── Left: Contact form ────────────────────── */}
          <div>
            <div className="mb-8">
              <h2
                className="text-[26px] font-bold text-tx-dark mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Send Us a Message
              </h2>
              <p className="text-[14px] text-tx-light leading-relaxed">
                Fill in the form below and our team will get back to you within one working day.
                For urgent matters, please call us directly.
              </p>
            </div>

            {submitted ? (
              /* ── Success state ── */
              <div
                className="rounded-2xl border p-10 text-center"
                style={{ borderColor: "var(--border)", background: "var(--bg-pale)" }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center text-[28px] mx-auto mb-5 shadow-md"
                  style={{ background: "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))" }}
                >
                  ✓
                </div>
                <h3
                  className="text-[22px] font-bold text-tx-dark mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Message Received!
                </h3>
                <p className="text-[14px] text-tx-light mb-2 leading-relaxed">
                  Thank you, <strong className="text-tx-dark">{form.name}</strong>. We've received your message and will respond within one working day.
                </p>
                <p className="text-[13px] text-tx-light mb-7">
                  For urgent queries, call us at{" "}
                  <a href="tel:08212541122" className="font-semibold" style={{ color: "var(--mint-dark)" }}>
                    0821-254 1122
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({ name: "", phone: "", email: "", enquiryType: "General", message: "" });
                  }}
                  className="px-6 py-3 rounded-lg text-white text-[13.5px] font-semibold"
                  style={{ background: "var(--mint-dark)" }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              /* ── Form ── */
              <div
                className="rounded-2xl border p-7 shadow-sm"
                style={{ borderColor: "var(--border)", background: "white" }}
              >
                {/* Enquiry type */}
                <div className="mb-6">
                  <Label>Enquiry Type</Label>
                  <div className="flex flex-wrap gap-2">
                    {ENQUIRY_TYPES.map((type) => (
                      <button
                        key={type}
                        onClick={() => set("enquiryType", type)}
                        className="text-[12.5px] font-semibold px-3.5 py-2 rounded-lg border transition-all"
                        style={{
                          borderColor: form.enquiryType === type ? "var(--mint-dark)" : "var(--border)",
                          background: form.enquiryType === type ? "var(--bg-pale)" : "white",
                          color: form.enquiryType === type ? "var(--mint-deep)" : "var(--tx-mid)",
                        }}
                      >
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <Label>Full Name <Req /></Label>
                    <Input
                      placeholder="Your full name"
                      value={form.name}
                      onChange={(v) => set("name", v)}
                    />
                  </div>
                  <div>
                    <Label>Phone Number <Req /></Label>
                    <Input
                      placeholder="10-digit mobile number"
                      value={form.phone}
                      onChange={(v) => set("phone", v)}
                      type="tel"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <Label>Email Address <span className="text-tx-light text-[11.5px] font-normal">(optional)</span></Label>
                  <Input
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(v) => set("email", v)}
                    type="email"
                  />
                </div>

                <div className="mb-6">
                  <Label>Your Message <Req /></Label>
                  <textarea
                    rows={5}
                    placeholder="How can we help you? Please describe your query or concern…"
                    value={form.message}
                    onChange={(e) => set("message", e.target.value)}
                    className="w-full border rounded-xl px-4 py-3 text-[14px] text-tx-dark outline-none resize-none leading-relaxed"
                    style={{ borderColor: "var(--border)" }}
                  />
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={!canSubmit}
                  className="w-full py-3.5 rounded-xl text-[14.5px] font-bold text-white transition-all"
                  style={{
                    background: canSubmit
                      ? "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))"
                      : "var(--border)",
                    color: canSubmit ? "white" : "var(--tx-light)",
                    cursor: canSubmit ? "pointer" : "not-allowed",
                  }}
                >
                  Send Message →
                </button>

                <p className="text-[11.5px] text-tx-light text-center mt-4">
                  We respond within 1 working day. For urgent matters, please call{" "}
                  <a href="tel:08212541122" className="font-semibold" style={{ color: "var(--mint-dark)" }}>
                    0821-254 1122
                  </a>
                </p>
              </div>
            )}
          </div>

          {/* ── Right: Info ───────────────────────────── */}
          <aside className="space-y-5">

            {/* Address */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", background: "white" }}
            >
              <h3
                className="text-[15px] font-bold text-tx-dark mb-5 flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[13px]"
                  style={{ background: "var(--mint-dark)" }}
                >
                  📍
                </span>
                Our Location
              </h3>
              <div className="space-y-4">
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-1">Address</p>
                  <p className="text-[13.5px] text-tx-dark font-medium leading-relaxed">
                    St. Joseph's Hospital<br />
                    Bannimantap, Mysuru<br />
                    Karnataka – 570 015
                  </p>
                </div>
                <div>
                  <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-1">Diocese</p>
                  <p className="text-[13px] text-tx-mid">A unit of the Catholic Diocese of Mysore</p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-1">Phone</p>
                    <a href="tel:08212541122" className="text-[13.5px] font-semibold" style={{ color: "var(--mint-dark)" }}>
                      0821-254 1122
                    </a>
                  </div>
                  <div>
                    <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-1">Email</p>
                    <a href="mailto:info@sjhmysuru.in" className="text-[13px] font-medium" style={{ color: "var(--mint-dark)" }}>
                      info@sjhmysuru.in
                    </a>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=St+Joseph+Hospital+Bannimantap+Mysuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-xl text-[13.5px] font-semibold border transition-all hover:shadow-md"
                  style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
                >
                  📍 Open in Google Maps
                </a>
              </div>
            </div>

            {/* OPD Hours */}
            <div
              className="rounded-2xl border p-6"
              style={{ borderColor: "var(--border)", background: "white" }}
            >
              <h3
                className="text-[15px] font-bold text-tx-dark mb-4 flex items-center gap-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                <span
                  className="w-7 h-7 rounded-lg flex items-center justify-center text-white text-[13px]"
                  style={{ background: "var(--mint-dark)" }}
                >
                  🕐
                </span>
                OPD Hours
              </h3>
              <div className="space-y-2.5">
                {OPD_HOURS.map((h) => (
                  <div
                    key={h.day}
                    className="flex items-center justify-between text-[13px] py-2 border-b last:border-0"
                    style={{ borderColor: "var(--border)" }}
                  >
                    <span className="text-tx-mid font-medium">{h.day}</span>
                    <span
                      className="font-semibold"
                      style={{
                        color:
                          h.time === "Emergency only"
                            ? "#dc2626"
                            : "var(--tx-dark)",
                      }}
                    >
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>
              <div
                className="mt-4 rounded-lg px-4 py-3 text-[12px] flex items-start gap-2"
                style={{ background: "var(--bg-pale)", color: "var(--tx-mid)" }}
              >
                <span className="shrink-0">ℹ️</span>
                Emergency care is available 24 hours a day, 365 days a year.
              </div>
            </div>

            {/* Book appointment CTA */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
              }}
            >
              <div className="text-[28px] mb-3">🩺</div>
              <h4
                className="text-[16px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Ready to Book?
              </h4>
              <p className="text-[12.5px] text-white/55 mb-5 leading-relaxed">
                Skip the queue. Book your appointment online and we'll confirm your slot by phone.
              </p>
              <Link
                href="/appointment"
                className="block w-full py-3 rounded-xl text-white text-[13.5px] font-bold text-center transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Appointment
              </Link>
            </div>
          </aside>
        </div>

        {/* ── Department contacts ───────────────────── */}
        <section className="py-16 px-7" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-12">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--teal-dark)" }}
              >
                Direct Lines
              </div>
              <h2
                className="text-[26px] sm:text-[32px] font-bold text-tx-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Department Contact Numbers
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {DEPARTMENTS_CONTACT.map((dept) => (
                <a
                  key={dept.name}
                  href={`tel:${dept.phone.replace(/-/g, "")}`}
                  className="group flex flex-col rounded-2xl border p-5 hover:shadow-lg hover:-translate-y-0.5 transition-all"
                  style={{
                    borderColor: dept.isEmergency ? "#fecaca" : "var(--border)",
                    background: dept.isEmergency ? "#fff5f5" : "white",
                  }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-[18px] shrink-0"
                      style={{
                        background: dept.isEmergency ? "#fee2e2" : "var(--bg-pale)",
                      }}
                    >
                      {dept.icon}
                    </div>
                    <div>
                      <p
                        className="text-[12.5px] font-bold leading-snug"
                        style={{ color: dept.isEmergency ? "#991b1b" : "var(--tx-dark)" }}
                      >
                        {dept.name}
                      </p>
                    </div>
                  </div>
                  <p
                    className="text-[16px] font-bold mb-1"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: dept.isEmergency ? "#dc2626" : "var(--mint-dark)",
                    }}
                  >
                    {dept.phone}
                  </p>
                  <p className="text-[11px] text-tx-light mt-auto">{dept.hours}</p>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Map embed placeholder ─────────────────── */}
        <section className="px-7 pb-16" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div
              className="rounded-2xl overflow-hidden border shadow-sm"
              style={{ borderColor: "var(--border)" }}
            >
              {/* Map header */}
              <div
                className="px-6 py-4 flex items-center justify-between"
                style={{ background: "var(--bg-dark)" }}
              >
                <div className="flex items-center gap-3">
                  <span className="text-[20px]">📍</span>
                  <div>
                    <p className="text-[14px] font-bold text-white">St. Joseph's Hospital</p>
                    <p className="text-[12px] text-white/50">Bannimantap, Mysuru – 570 015, Karnataka</p>
                  </div>
                </div>
                <a
                  href="https://maps.google.com/?q=St+Joseph+Hospital+Bannimantap+Mysuru"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-[12.5px] font-semibold transition-all hover:opacity-90"
                  style={{ background: "var(--mint-dark)", color: "white" }}
                >
                  Open in Maps →
                </a>
              </div>

              {/* Embedded Google Map */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.123456789!2d76.6394!3d12.3051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf70381d572ef9%3A0xe77da9ec9b8cde7b!2sSt.%20Joseph%27s%20Hospital!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="380"
                style={{ border: 0, display: "block" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="St. Joseph's Hospital Location Map"
              />

              {/* Transport info */}
              <div
                className="px-6 py-5 grid grid-cols-1 sm:grid-cols-3 gap-5 border-t"
                style={{ background: "white", borderColor: "var(--border)" }}
              >
                {[
                  { icon: "🚌", title: "By Bus", desc: "KSRTC buses to Bannimantap stop, 2-min walk to hospital." },
                  { icon: "🛺", title: "By Auto / Cab", desc: "Tell driver: St. Joseph's Hospital, Bannimantap. Easily recognisable." },
                  { icon: "🚗", title: "Parking", desc: "Free parking available for patients and visitors inside hospital campus." },
                ].map((t) => (
                  <div key={t.title} className="flex items-start gap-3">
                    <span className="text-[20px] shrink-0">{t.icon}</span>
                    <div>
                      <p className="text-[13px] font-bold text-tx-dark mb-1">{t.title}</p>
                      <p className="text-[12.5px] text-tx-light leading-relaxed">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ── Helpers ───────────────────────────────────────────────────────────────

function Label({ children }: { children: React.ReactNode }) {
  return (
    <label className="block text-[13px] font-semibold text-tx-dark mb-2">{children}</label>
  );
}

function Req() {
  return <span className="text-red-400 ml-0.5">*</span>;
}

function Input({
  placeholder, value, onChange, type = "text",
}: {
  placeholder?: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-xl px-4 py-3 text-[14px] text-tx-dark outline-none"
      style={{ borderColor: "var(--border)" }}
    />
  );
}
