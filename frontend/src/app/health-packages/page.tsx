"use client";

import { useState } from "react";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

// ── Data ──────────────────────────────────────────────────────────────────

type Category = "All" | "Individual" | "Couple" | "Family" | "Senior" | "Corporate";

interface Package {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: Category;
  icon: string;
  highlight?: string; // e.g. "Most Popular"
  tests: string[];
  includes: string[];
  idealFor: string;
  reportTime: string;
  accentColor: string;
}

const PACKAGES: Package[] = [
  {
    id: "basic-health",
    name: "Basic Health Check",
    tagline: "Essential wellness screening for everyday health",
    price: 799,
    category: "Individual",
    icon: "🩺",
    idealFor: "Adults 18–40 years, annual health check",
    reportTime: "Same day",
    accentColor: "var(--teal)",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting)",
      "Urine Routine",
      "Lipid Profile",
      "Liver Function Test (LFT)",
      "Kidney Function Test (KFT)",
    ],
    includes: [
      "Physician consultation",
      "Digital report",
      "Diet counselling",
    ],
  },
  {
    id: "comprehensive-health",
    name: "Comprehensive Health Check",
    tagline: "In-depth screening for a complete picture of your health",
    price: 1799,
    originalPrice: 2500,
    category: "Individual",
    icon: "🔬",
    highlight: "Most Popular",
    idealFor: "Adults 30+ years, detailed annual check-up",
    reportTime: "Same day",
    accentColor: "var(--mint-dark)",
    tests: [
      "Complete Blood Count (CBC)",
      "Blood Sugar (Fasting & PP)",
      "HbA1c (Diabetes Marker)",
      "Lipid Profile",
      "Liver Function Test",
      "Kidney Function Test",
      "Thyroid Profile (T3, T4, TSH)",
      "Urine Routine & Microscopy",
      "Chest X-Ray",
      "ECG (Resting)",
      "Vitamin B12 & Vitamin D",
    ],
    includes: [
      "Senior physician consultation",
      "Digital + printed report",
      "Diet & lifestyle counselling",
      "Follow-up call within 48 hrs",
    ],
  },
  {
    id: "cardiac-check",
    name: "Cardiac Care Package",
    tagline: "Advanced heart health screening — catch risks early",
    price: 2499,
    originalPrice: 3200,
    category: "Individual",
    icon: "❤️",
    highlight: "Cardiologist Recommended",
    idealFor: "Adults 35+ years, family history of heart disease",
    reportTime: "Same day",
    accentColor: "#e53e3e",
    tests: [
      "ECG (12-Lead Resting)",
      "2D Echocardiography",
      "Lipid Profile (Full)",
      "Cardiac Risk Markers (hs-CRP)",
      "Blood Pressure (3-point)",
      "Blood Sugar (Fasting & PP)",
      "HbA1c",
      "Kidney Function Test",
      "Complete Blood Count",
      "Homocysteine Level",
    ],
    includes: [
      "Cardiologist consultation",
      "ECG interpretation report",
      "Diet & cardiac rehab advice",
      "Emergency contact card",
    ],
  },
  {
    id: "womens-wellness",
    name: "Women's Wellness Package",
    tagline: "Comprehensive care tailored for women's health",
    price: 2299,
    originalPrice: 3000,
    category: "Individual",
    icon: "🌸",
    highlight: "For Women",
    idealFor: "Women 25–60 years, preventive health & cancer screening",
    reportTime: "Same day",
    accentColor: "#d53f8c",
    tests: [
      "Complete Blood Count",
      "Blood Sugar & HbA1c",
      "Thyroid Profile (T3, T4, TSH)",
      "Iron Studies (Ferritin, Serum Iron)",
      "Pap Smear (Cervical Screening)",
      "Mammography (Digital)",
      "Bone Density (DEXA Scan)",
      "Pelvic Ultrasound",
      "Vitamin D & B12",
      "Calcium & Phosphorus",
    ],
    includes: [
      "Gynaecologist consultation",
      "Nutritionist session",
      "Digital + printed report",
      "Cancer screening summary",
    ],
  },
  {
    id: "couple-package",
    name: "Couple's Health Package",
    tagline: "Complete health check for you and your partner together",
    price: 2999,
    originalPrice: 4200,
    category: "Couple",
    icon: "💑",
    highlight: "Save ₹1,200",
    idealFor: "Couples, pre-marital screening, family planning",
    reportTime: "Same day",
    accentColor: "#7b2ff7",
    tests: [
      "CBC, Blood Sugar, Lipid Profile (Both)",
      "Thyroid Profile (Both)",
      "Liver & Kidney Function (Both)",
      "Blood Group & Rh Factor (Both)",
      "HIV, HBsAg, VDRL Screening",
      "Urine Routine (Both)",
      "ECG (Both)",
      "Pap Smear (Female)",
      "Vitamin D & B12 (Both)",
    ],
    includes: [
      "Physician consultation (both)",
      "Genetic counselling session",
      "Pre-marital health advisory",
      "Digital reports (both)",
    ],
  },
  {
    id: "family-package",
    name: "Family Health Package",
    tagline: "One package, complete care for your entire family",
    price: 5499,
    originalPrice: 8000,
    category: "Family",
    icon: "👨‍👩‍👧‍👦",
    highlight: "Best Value",
    idealFor: "Family of 4 (2 adults + 2 children), annual check-up",
    reportTime: "Same day",
    accentColor: "var(--teal-dark)",
    tests: [
      "CBC + Blood Sugar (All members)",
      "Lipid Profile (Adults)",
      "Thyroid (Adults)",
      "Kidney & Liver Function (Adults)",
      "Urine Routine (All)",
      "Growth Assessment (Children)",
      "Vision & Hearing Screening (Children)",
      "Haemoglobin & Iron Studies (All)",
      "Chest X-Ray (Adults)",
    ],
    includes: [
      "Paediatrician consultation (children)",
      "General physician (adults)",
      "Nutritionist session",
      "Family health report card",
      "Digital reports for all",
    ],
  },
  {
    id: "senior-care",
    name: "Senior Citizen Package",
    tagline: "Specialised preventive care for adults 60 and above",
    price: 3299,
    originalPrice: 4500,
    category: "Senior",
    icon: "🧓",
    highlight: "Age 60+",
    idealFor: "Senior citizens 60+ years, comprehensive annual check",
    reportTime: "Same day + follow-up",
    accentColor: "#c05621",
    tests: [
      "Complete Blood Count",
      "Blood Sugar (Fasting, PP, HbA1c)",
      "Lipid Profile",
      "Kidney & Liver Function",
      "Thyroid Profile",
      "Prostate Specific Antigen (PSA) — Male",
      "Bone Density Scan (DEXA)",
      "ECG (12-Lead)",
      "2D Echo",
      "Chest X-Ray",
      "Vitamin B12, D3 & Calcium",
      "Urine Routine & Culture",
    ],
    includes: [
      "Geriatrician/physician consultation",
      "Ophthalmology screening",
      "Hearing test",
      "Medication review",
      "Home sample collection available",
      "Printed + digital report",
    ],
  },
  {
    id: "corporate-package",
    name: "Corporate Health Package",
    tagline: "Employee wellness programmes for healthy workplaces",
    price: 999,
    category: "Corporate",
    icon: "🏢",
    highlight: "Per Employee",
    idealFor: "Corporate employees, group bookings of 10+",
    reportTime: "24 hours",
    accentColor: "#2b6cb0",
    tests: [
      "CBC + Blood Sugar",
      "Lipid Profile",
      "Liver & Kidney Function",
      "Urine Routine",
      "Blood Pressure & BMI",
      "ECG (Resting)",
      "Vision Screening",
    ],
    includes: [
      "On-site sample collection (50+ employees)",
      "Corporate health dashboard",
      "Physician consultation",
      "Digital reports",
      "Group counselling session",
      "Priority turnaround",
    ],
  },
];

const CATEGORIES: Category[] = ["All", "Individual", "Couple", "Family", "Senior", "Corporate"];

const CATEGORY_ICONS: Record<Category, string> = {
  All: "✦",
  Individual: "👤",
  Couple: "💑",
  Family: "👨‍👩‍👧‍👦",
  Senior: "🧓",
  Corporate: "🏢",
};

// ── Page ──────────────────────────────────────────────────────────────────

export default function HealthPackagesPage() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered =
    activeCategory === "All"
      ? PACKAGES
      : PACKAGES.filter((p) => p.category === activeCategory);

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="relative py-24 px-7 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 55%, var(--mint-deep) 100%)",
          }}
        >
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "var(--mint)" }} />
          <div className="absolute -bottom-20 -left-10 w-[300px] h-[300px] rounded-full opacity-[0.04]" style={{ background: "var(--teal)" }} />

          <div className="relative max-w-[1180px] mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2.5px] uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              ✦ Preventive Healthcare
            </div>
            <h1
              className="text-[34px] sm:text-[46px] font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Health Check-up Packages
            </h1>
            <p className="text-[16px] text-white/60 max-w-[540px] mx-auto leading-[1.85] mb-12">
              Comprehensive, affordable health screening packages designed by our specialists.
              Early detection saves lives — start your health journey today.
            </p>

            {/* Benefits strip */}
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { icon: "⚡", text: "Same-day reports" },
                { icon: "🏥", text: "NABH accredited labs" },
                { icon: "👨‍⚕️", text: "Physician consultation included" },
                { icon: "💳", text: "Cashless insurance accepted" },
              ].map(({ icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[13px] font-medium"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    color: "rgba(255,255,255,0.75)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  <span>{icon}</span>
                  <span>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Category Filter ───────────────────────── */}
        <div className="bg-white border-b sticky top-0 z-30" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto px-7 py-4 flex items-center gap-2 overflow-x-auto scrollbar-hide">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className="flex items-center gap-2 shrink-0 text-[13px] font-semibold px-4 py-2.5 rounded-full border transition-all"
                style={{
                  borderColor: activeCategory === cat ? "var(--mint-dark)" : "var(--border)",
                  background: activeCategory === cat ? "var(--mint-dark)" : "white",
                  color: activeCategory === cat ? "white" : "var(--tx-mid)",
                }}
              >
                <span>{CATEGORY_ICONS[cat]}</span>
                <span>{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* ── Packages Grid ─────────────────────────── */}
        <section className="py-14" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto px-7">
            <p className="text-[13px] text-tx-light mb-8">
              Showing <strong className="text-tx-dark">{filtered.length}</strong> package{filtered.length !== 1 ? "s" : ""}
              {activeCategory !== "All" ? ` · ${activeCategory}` : ""}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((pkg) => {
                const isOpen = expanded === pkg.id;
                return (
                  <div
                    key={pkg.id}
                    className="bg-white rounded-2xl border overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Card header */}
                    <div
                      className="relative px-6 pt-6 pb-5"
                      style={{
                        background: `linear-gradient(135deg, var(--bg-dark) 0%, ${pkg.accentColor}22 100%)`,
                        borderBottom: `2px solid ${pkg.accentColor}44`,
                      }}
                    >
                      {pkg.highlight && (
                        <div
                          className="absolute top-4 right-4 text-[10.5px] font-bold px-2.5 py-1 rounded-full"
                          style={{ background: pkg.accentColor, color: "white" }}
                        >
                          {pkg.highlight}
                        </div>
                      )}
                      <div className="text-[32px] mb-3">{pkg.icon}</div>
                      <h3
                        className="text-[17px] font-bold text-white mb-1 leading-snug"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {pkg.name}
                      </h3>
                      <p className="text-[12.5px] text-white/50 leading-relaxed">{pkg.tagline}</p>
                    </div>

                    {/* Price */}
                    <div
                      className="px-6 py-4 flex items-center justify-between border-b"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span
                            className="text-[26px] font-bold"
                            style={{ fontFamily: "var(--font-display)", color: "var(--tx-dark)" }}
                          >
                            ₹{pkg.price.toLocaleString("en-IN")}
                          </span>
                          {pkg.originalPrice && (
                            <span className="text-[14px] line-through text-tx-light">
                              ₹{pkg.originalPrice.toLocaleString("en-IN")}
                            </span>
                          )}
                        </div>
                        {pkg.originalPrice && (
                          <p className="text-[11.5px] font-semibold" style={{ color: "var(--mint-dark)" }}>
                            Save ₹{(pkg.originalPrice - pkg.price).toLocaleString("en-IN")}
                          </p>
                        )}
                      </div>
                      <div className="text-right">
                        <p className="text-[10.5px] text-tx-light uppercase tracking-wide mb-0.5">Report</p>
                        <p className="text-[12px] font-semibold text-tx-dark">{pkg.reportTime}</p>
                      </div>
                    </div>

                    {/* Quick info */}
                    <div className="px-6 py-4 flex-1">
                      <div
                        className="text-[11.5px] px-3 py-2 rounded-lg mb-4 leading-relaxed"
                        style={{ background: "var(--bg-pale)", color: "var(--tx-mid)" }}
                      >
                        <span className="font-semibold">Ideal for:</span> {pkg.idealFor}
                      </div>

                      {/* Tests summary */}
                      <p className="text-[11px] font-semibold uppercase tracking-wider text-tx-light mb-2">
                        {pkg.tests.length} Tests Included
                      </p>
                      <ul className="space-y-1.5 mb-3">
                        {(isOpen ? pkg.tests : pkg.tests.slice(0, 4)).map((t) => (
                          <li key={t} className="flex items-start gap-2 text-[12.5px] text-tx-mid">
                            <span className="shrink-0 mt-0.5" style={{ color: "var(--mint-dark)" }}>✓</span>
                            {t}
                          </li>
                        ))}
                      </ul>

                      {pkg.tests.length > 4 && (
                        <button
                          onClick={() => setExpanded(isOpen ? null : pkg.id)}
                          className="text-[12px] font-semibold transition-colors mb-4"
                          style={{ color: "var(--mint-dark)" }}
                        >
                          {isOpen ? "Show less ↑" : `+${pkg.tests.length - 4} more tests ↓`}
                        </button>
                      )}

                      {/* Includes */}
                      {isOpen && (
                        <div className="mt-3 pt-3 border-t" style={{ borderColor: "var(--border)" }}>
                          <p className="text-[11px] font-semibold uppercase tracking-wider text-tx-light mb-2">
                            Also Includes
                          </p>
                          <ul className="space-y-1.5">
                            {pkg.includes.map((inc) => (
                              <li key={inc} className="flex items-start gap-2 text-[12.5px] text-tx-mid">
                                <span className="shrink-0 mt-0.5 text-[11px]" style={{ color: pkg.accentColor }}>✦</span>
                                {inc}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>

                    {/* CTA */}
                    <div className="px-6 pb-6 pt-2 flex flex-col gap-2">
                      <Link
                        href={`/appointment?package=${pkg.id}`}
                        className="block w-full py-3 rounded-xl text-white text-[13.5px] font-bold text-center transition-all hover:opacity-90"
                        style={{ background: `linear-gradient(135deg, var(--bg-dark), ${pkg.accentColor})` }}
                      >
                        Book This Package
                      </Link>
                      <a
                        href="tel:08212541122"
                        className="block w-full py-2.5 rounded-xl text-[12.5px] font-medium text-center border transition-colors"
                        style={{ borderColor: "var(--border)", color: "var(--tx-mid)" }}
                      >
                        📞 Enquire by Phone
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why choose SJH health packages ───────── */}
        <section className="py-20 px-7 bg-white">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-14">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--teal-dark)" }}
              >
                Why SJH
              </div>
              <h2
                className="text-[28px] sm:text-[34px] font-bold text-tx-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                What Makes Our Packages Different
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                { icon: "🏆", title: "NABH Accredited Labs", desc: "All tests conducted in our NABH-certified diagnostic laboratory, ensuring accuracy and reliability." },
                { icon: "⚡", title: "Same-Day Reports", desc: "Most packages deliver digital reports the same day, so you don't have to wait for answers." },
                { icon: "👨‍⚕️", title: "Doctor Consultation", desc: "Every package includes a physician consultation to explain your results and next steps." },
                { icon: "💰", title: "Transparent Pricing", desc: "No hidden charges. The price you see is the price you pay — including consultation and reports." },
              ].map((item) => (
                <div
                  key={item.title}
                  className="p-6 rounded-2xl border hover:shadow-md transition-shadow text-center"
                  style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[26px] mx-auto mb-4"
                    style={{ background: "var(--bg-pale)" }}
                  >
                    {item.icon}
                  </div>
                  <h3
                    className="text-[15px] font-bold text-tx-dark mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-[13px] text-tx-light leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Corporate enquiry banner ───────────────── */}
        <section
          className="py-16 px-7"
          style={{ background: "var(--bg-light)" }}
        >
          <div
            className="max-w-[1180px] mx-auto rounded-2xl px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-8"
            style={{
              background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
            }}
          >
            <div>
              <div
                className="text-[11px] font-semibold tracking-[2px] uppercase mb-2"
                style={{ color: "var(--mint)" }}
              >
                Corporate Wellness
              </div>
              <h3
                className="text-[22px] sm:text-[26px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Looking for Employee Health Packages?
              </h3>
              <p className="text-[14px] text-white/55 max-w-[440px] leading-relaxed">
                We offer customised group health check-up packages for corporates, schools, and
                institutions. On-site sample collection available for 50+ employees.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <Link
                href="/contact"
                className="px-7 py-[13px] rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Get a Custom Quote
              </Link>
              <a
                href="tel:08212541122"
                className="px-7 py-[13px] rounded-xl text-[14px] font-semibold text-center transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </section>

        {/* ── FAQ ───────────────────────────────────── */}
        <section className="py-20 px-7 bg-white">
          <div className="max-w-[720px] mx-auto">
            <div className="text-center mb-12">
              <h2
                className="text-[28px] font-bold text-tx-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "Do I need to fast before the health check-up?",
                  a: "Yes, most packages require 8–12 hours of fasting for accurate blood sugar and lipid results. You may drink water. Please avoid tea, coffee, or any food before the test.",
                },
                {
                  q: "Can I book the package online?",
                  a: "Yes! Click 'Book This Package' to schedule your appointment online. Our team will call to confirm your slot and provide pre-test instructions.",
                },
                {
                  q: "Are reports available on the same day?",
                  a: "Most packages provide same-day digital reports. A few specialised tests (such as culture reports) may take 24–48 hours. This is mentioned on each package.",
                },
                {
                  q: "Do you accept health insurance for packages?",
                  a: "Yes, we accept most major health insurance providers for preventive health check-ups. Please carry your insurance card on the day of the check-up.",
                },
                {
                  q: "Is home sample collection available?",
                  a: "Home sample collection is available for senior citizen packages and corporate packages (for groups of 50+). Please call us to arrange this.",
                },
              ].map((faq, i) => (
                <FAQItem key={i} q={faq.q} a={faq.a} />
              ))}
            </div>
          </div>
        </section>

        {/* ── Final CTA ─────────────────────────────── */}
        <section
          className="py-20 px-7 text-center"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
          }}
        >
          <div className="max-w-[600px] mx-auto">
            <div className="text-[36px] mb-5">🩺</div>
            <h2
              className="text-[28px] sm:text-[34px] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Prevention is the Best Medicine
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-10">
              Don't wait for symptoms. A regular health check-up can detect problems before
              they become serious. Book your package today at St. Joseph's Hospital, Mysuru.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/appointment"
                className="px-8 py-[14px] rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:08212541122"
                className="px-8 py-[14px] rounded-xl text-[14px] font-semibold transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                📞 0821-254 1122
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

// ── FAQ accordion item ─────────────────────────────────────────────────────

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="rounded-2xl border overflow-hidden transition-all"
      style={{ borderColor: "var(--border)" }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-4 text-left gap-4"
        style={{ background: open ? "var(--bg-pale)" : "white" }}
      >
        <span className="text-[14px] font-semibold text-tx-dark leading-snug">{q}</span>
        <span
          className="text-[18px] shrink-0 transition-transform"
          style={{
            color: "var(--mint-dark)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      {open && (
        <div
          className="px-6 pb-5 pt-1 text-[13.5px] text-tx-light leading-relaxed border-t"
          style={{ borderColor: "var(--border)" }}
        >
          {a}
        </div>
      )}
    </div>
  );
}
