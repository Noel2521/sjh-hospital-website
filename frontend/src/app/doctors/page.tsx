"use client";

import { useState } from "react";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { doctors, departments } from "@/lib/placeholder-data";

const ALL = "All Specialities";

export default function DoctorsPage() {
  const [activeFilter, setActiveFilter] = useState(ALL);
  const [search, setSearch] = useState("");

  const filters = [ALL, ...Array.from(new Set(doctors.map((d) => d.departmentName)))];

  const filtered = doctors.filter((d) => {
    const matchesDept = activeFilter === ALL || d.departmentName === activeFilter;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      d.fullName.toLowerCase().includes(q) ||
      d.specialisation.toLowerCase().includes(q) ||
      d.departmentName.toLowerCase().includes(q);
    return matchesDept && matchesSearch;
  });

  const totalDoctors = doctors.length;
  const totalDepartments = new Set(doctors.map((d) => d.departmentName)).size;

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="relative py-20 px-7 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 60%, var(--mint-deep) 100%)",
          }}
        >
          {/* Decorative circles */}
          <div
            className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-[0.05]"
            style={{ background: "var(--mint)" }}
          />
          <div
            className="absolute -bottom-16 -left-10 w-[280px] h-[280px] rounded-full opacity-[0.04]"
            style={{ background: "var(--teal)" }}
          />

          <div className="relative max-w-[1180px] mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2.5px] uppercase mb-4 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              ✦ Our Medical Team
            </div>
            <h1
              className="text-[34px] sm:text-[44px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Meet Our Specialist Doctors
            </h1>
            <p className="text-[16px] text-white/60 max-w-[520px] mx-auto leading-relaxed mb-10">
              {totalDoctors}+ experienced consultants across {totalDepartments}+ specialities, dedicated to your health
              and recovery.
            </p>

            {/* Search bar */}
            <div className="max-w-[480px] mx-auto relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] opacity-50">🔍</span>
              <input
                type="text"
                placeholder="Search by name, speciality…"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-5 py-3.5 rounded-xl text-[14px] text-tx-dark outline-none shadow-lg"
                style={{ background: "white" }}
              />
            </div>
          </div>
        </div>

        {/* ── Stats strip ───────────────────────────── */}
        <div className="bg-white border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto px-7 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: `${totalDoctors}+`, l: "Specialist Doctors" },
              { n: `${totalDepartments}+`, l: "Specialities" },
              { n: "NABH", l: "Accredited Hospital" },
              { n: "24/7", l: "Emergency Care" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="text-[22px] font-bold leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--mint-dark)" }}
                >
                  {n}
                </div>
                <div className="text-[12px] text-tx-light">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Filters + Grid ────────────────────────── */}
        <section className="py-14" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto px-7">

            {/* Filter pills */}
            <div className="flex flex-wrap gap-2 mb-10">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className="text-[12.5px] font-semibold px-4 py-2 rounded-full border transition-all"
                  style={{
                    borderColor: activeFilter === f ? "var(--mint-dark)" : "var(--border)",
                    background: activeFilter === f ? "var(--mint-dark)" : "white",
                    color: activeFilter === f ? "white" : "var(--tx-mid)",
                  }}
                >
                  {f}
                </button>
              ))}
            </div>

            {/* Result count */}
            <p className="text-[13px] text-tx-light mb-6">
              Showing <strong className="text-tx-dark">{filtered.length}</strong> doctor{filtered.length !== 1 ? "s" : ""}
              {activeFilter !== ALL ? ` in ${activeFilter}` : ""}
            </p>

            {/* Doctor cards */}
            {filtered.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filtered.map((doc) => (
                  <Link
                    key={doc.id}
                    href={`/doctors/${doc.slug}`}
                    className="group bg-white rounded-2xl border overflow-hidden hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 block"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Photo / gradient header */}
                    <div
                      className="relative h-[200px] flex items-end"
                      style={{
                        background:
                          "linear-gradient(160deg, #0d3b36 0%, #0a5248 50%, #1a7a68 100%)",
                      }}
                    >
                      {/* Avatar initials */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div
                          className="w-24 h-24 rounded-full flex items-center justify-center text-[32px] font-bold text-white border-4 shadow-xl"
                          style={{
                            fontFamily: "var(--font-display)",
                            background: "linear-gradient(135deg, rgba(0,245,212,0.25), rgba(0,180,160,0.35))",
                            borderColor: "rgba(255,255,255,0.15)",
                          }}
                        >
                          {doc.fullName
                            .replace(/Dr\.?\s*(Prof\.?\s*)?/i, "")
                            .split(" ")
                            .filter(Boolean)
                            .slice(0, 2)
                            .map((w) => w[0])
                            .join("")}
                        </div>
                      </div>

                      {/* Dept badge */}
                      <div className="relative w-full px-5 pb-4 flex items-center justify-between">
                        <span
                          className="text-[10.5px] font-semibold px-3 py-1 rounded-full tracking-wide"
                          style={{ background: "rgba(0,245,212,0.18)", color: "var(--mint)" }}
                        >
                          {doc.departmentName}
                        </span>
                        {doc.experienceYears && (
                          <span
                            className="text-[10.5px] font-semibold px-3 py-1 rounded-full"
                            style={{ background: "rgba(255,255,255,0.1)", color: "rgba(255,255,255,0.7)" }}
                          >
                            {doc.experienceYears} yrs exp.
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <h3
                        className="text-[17px] font-bold text-tx-dark mb-0.5 leading-snug group-hover:text-mint-deep transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {doc.fullName}
                      </h3>
                      <p className="text-[12.5px] font-semibold mb-0.5" style={{ color: "var(--teal-dark)" }}>
                        {doc.specialisation}
                      </p>
                      <p className="text-[11.5px] text-tx-light mb-4">{doc.qualifications}</p>

                      <div
                        className="flex items-center justify-between text-[12.5px] font-semibold pt-3 border-t"
                        style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
                      >
                        <span className="group-hover:underline">View Profile →</span>
                        <span
                          className="text-[11px] px-3 py-1 rounded-full font-semibold"
                          style={{ background: "var(--bg-pale)", color: "var(--mint-deep)" }}
                        >
                          Book Appointment
                        </span>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div className="text-[48px] mb-4">🔍</div>
                <h3 className="text-[20px] font-bold text-tx-dark mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  No doctors found
                </h3>
                <p className="text-[14px] text-tx-light mb-6">Try a different name or speciality.</p>
                <button
                  onClick={() => { setSearch(""); setActiveFilter(ALL); }}
                  className="px-6 py-2.5 rounded-lg text-white text-[13px] font-semibold"
                  style={{ background: "var(--mint-dark)" }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section
          className="py-16 px-7"
          style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)" }}
        >
          <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-8">
            <div>
              <h3
                className="text-[24px] sm:text-[28px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Not sure which doctor to see?
              </h3>
              <p className="text-[14.5px] text-white/60 max-w-[420px]">
                Our front desk will match you with the right specialist based on your symptoms.
              </p>
            </div>
            <div className="flex flex-wrap gap-3 shrink-0">
              <Link
                href="/appointment"
                className="px-7 py-[13px] rounded-lg text-[14px] font-semibold text-white border border-white/30 hover:bg-white/10 transition-colors"
              >
                Book Appointment
              </Link>
              <a
                href="tel:08212541122"
                className="px-7 py-[13px] rounded-lg text-[14px] font-semibold transition-colors"
                style={{ background: "var(--mint-dark)", color: "white" }}
              >
                📞 Call Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}