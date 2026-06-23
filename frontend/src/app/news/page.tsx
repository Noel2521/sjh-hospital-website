"use client";

import { useState } from "react";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { newsEvents } from "@/lib/placeholder-data";

// ── Extended news data ────────────────────────────────────────────────────

const EXTENDED_NEWS = [
  ...newsEvents,
  {
    id: "4",
    title: "Free Eye Camp at SJH — 200 Patients Screened",
    slug: "eye-camp-june-2026",
    type: "NEWS" as const,
    excerpt:
      "Our Ophthalmology department conducted a free eye screening camp in collaboration with Lions Club Mysuru. Over 200 patients were examined, and 30 received free cataract surgery.",
    publishedAt: "2026-06-10",
  },
  {
    id: "5",
    title: "Blood Donation Drive — Join Us This Sunday",
    slug: "blood-donation-july-2026",
    type: "EVENT" as const,
    excerpt:
      "St. Joseph's Hospital invites all healthy adults to participate in our blood donation drive. Every unit donated can save up to 3 lives. Refreshments provided.",
    eventDate: "2026-07-20",
  },
  {
    id: "6",
    title: "Diabetes Awareness Walk — World Diabetes Day",
    slug: "diabetes-awareness-walk-2026",
    type: "EVENT" as const,
    excerpt:
      "Join us for a 3km awareness walk around Bannimantap to mark World Diabetes Day. Free blood sugar testing and diet counselling available at the finish line.",
    eventDate: "2026-11-14",
  },
  {
    id: "7",
    title: "SJH Launches 24/7 Tele-Consultation Service",
    slug: "tele-consultation-launch-2026",
    type: "NEWS" as const,
    excerpt:
      "St. Joseph's Hospital has launched a round-the-clock tele-consultation service, allowing patients to consult our specialist doctors from the comfort of their homes.",
    publishedAt: "2026-05-28",
  },
  {
    id: "8",
    title: "Free Orthopaedic Consultation Camp",
    slug: "ortho-camp-august-2026",
    type: "EVENT" as const,
    excerpt:
      "Dr. Rajesh Kumar M. and the Orthopaedics team will conduct a free consultation camp for joint pain, back pain, and sports injuries. No prior appointment needed.",
    eventDate: "2026-08-10",
  },
  {
    id: "9",
    title: "SJH Nursing Staff Win State Excellence Award",
    slug: "nursing-excellence-award-2026",
    type: "NEWS" as const,
    excerpt:
      "The nursing team of St. Joseph's Hospital was honoured with the Karnataka State Nursing Excellence Award 2026 for outstanding patient care and professional standards.",
    publishedAt: "2026-04-15",
  },
];

const TYPE_COLORS = {
  NEWS: { bg: "var(--bg-pale)", text: "var(--mint-deep)", dot: "var(--mint-dark)" },
  EVENT: { bg: "#fef9ec", text: "#92610a", dot: "#f5a623" },
};

type Filter = "All" | "NEWS" | "EVENT";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function NewsPage() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? EXTENDED_NEWS : EXTENDED_NEWS.filter((n) => n.type === filter);

  const featured = EXTENDED_NEWS[0];
  const rest = EXTENDED_NEWS.slice(1);

  const displayList = filter === "All" ? rest : filtered;

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
              ✦ Stay Informed
            </div>
            <h1
              className="text-[34px] sm:text-[46px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              News &amp; Events
            </h1>
            <p className="text-[16px] text-white/60 max-w-[500px] mx-auto leading-[1.85]">
              Stay up to date with the latest happenings at St. Joseph's Hospital — health
              camps, hospital news, medical milestones, and community events.
            </p>
          </div>
        </div>

        {/* ── Featured Article ──────────────────────── */}
        {filter === "All" && (
          <section className="bg-white border-b" style={{ borderColor: "var(--border)" }}>
            <div className="max-w-[1180px] mx-auto px-7 py-12">
              <p className="text-[11px] font-semibold uppercase tracking-widest mb-5" style={{ color: "var(--teal-dark)" }}>
                Featured Story
              </p>
              <Link
                href={`/news/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8 items-center"
              >
                {/* Featured visual */}
                <div
                  className="relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden flex items-end p-7"
                  style={{
                    background:
                      "linear-gradient(160deg, #0d3b36 0%, #0a5248 50%, #1a7a68 100%)",
                  }}
                >
                  {/* Decorative pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {[...Array(6)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute rounded-full border"
                        style={{
                          width: `${(i + 1) * 80}px`,
                          height: `${(i + 1) * 80}px`,
                          top: "50%",
                          left: "50%",
                          transform: "translate(-50%,-50%)",
                          borderColor: "rgba(0,245,212,0.4)",
                        }}
                      />
                    ))}
                  </div>
                  <div className="relative">
                    <span
                      className="inline-block text-[10.5px] font-bold px-3 py-1 rounded-full mb-3 uppercase tracking-wide"
                      style={{ background: "var(--mint-dark)", color: "white" }}
                    >
                      {featured.type}
                    </span>
                    <h2
                      className="text-[22px] font-bold text-white leading-snug"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {featured.title}
                    </h2>
                  </div>
                </div>

                {/* Featured text */}
                <div>
                  <span
                    className="inline-flex items-center gap-1.5 text-[11px] font-semibold px-3 py-1 rounded-full mb-4"
                    style={{
                      background: TYPE_COLORS[featured.type].bg,
                      color: TYPE_COLORS[featured.type].text,
                    }}
                  >
                    <span
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: TYPE_COLORS[featured.type].dot }}
                    />
                    {featured.type === "NEWS" ? "Hospital News" : "Upcoming Event"}
                  </span>
                  <h3
                    className="text-[24px] sm:text-[28px] font-bold text-tx-dark mb-4 leading-tight group-hover:text-mint-dark transition-colors"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {featured.title}
                  </h3>
                  <p className="text-[14.5px] text-tx-light leading-[1.85] mb-6">
                    {featured.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <p className="text-[12.5px] text-tx-light">
                      📅{" "}
                      {featured.type === "NEWS"
                        ? formatDate(featured.publishedAt!)
                        : `Event: ${formatDate(featured.eventDate!)}`}
                    </p>
                    <span
                      className="text-[13px] font-semibold group-hover:underline"
                      style={{ color: "var(--mint-dark)" }}
                    >
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </section>
        )}

        {/* ── Filter + Grid ─────────────────────────── */}
        <section className="py-14" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto px-7">

            {/* Filter tabs */}
            <div className="flex items-center gap-3 mb-10 flex-wrap">
              {(["All", "NEWS", "EVENT"] as Filter[]).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className="text-[13px] font-semibold px-5 py-2.5 rounded-full border transition-all"
                  style={{
                    borderColor: filter === f ? "var(--mint-dark)" : "var(--border)",
                    background: filter === f ? "var(--mint-dark)" : "white",
                    color: filter === f ? "white" : "var(--tx-mid)",
                  }}
                >
                  {f === "All" ? "All Updates" : f === "NEWS" ? "📰 News" : "📅 Events"}
                </button>
              ))}
              <span className="text-[13px] text-tx-light ml-auto">
                {displayList.length} {filter === "All" ? "more articles" : "articles"}
              </span>
            </div>

            {/* Cards grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {displayList.map((item) => {
                const isEvent = item.type === "EVENT";
                const dateStr = isEvent ? item.eventDate! : item.publishedAt!;
                const dateObj = new Date(dateStr + "T00:00:00");
                const day = dateObj.toLocaleDateString("en-IN", { day: "2-digit" });
                const month = dateObj.toLocaleDateString("en-IN", { month: "short" });
                const year = dateObj.getFullYear();

                return (
                  <Link
                    key={item.id}
                    href={`/news/${item.slug}`}
                    className="group bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Card visual header */}
                    <div
                      className="relative h-[140px] flex items-center justify-center overflow-hidden"
                      style={{
                        background: isEvent
                          ? "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
                          : "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
                      }}
                    >
                      {/* Date badge */}
                      <div
                        className="relative z-10 text-center px-5 py-4 rounded-xl"
                        style={{ background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)" }}
                      >
                        <p className="text-[28px] font-bold text-white leading-none" style={{ fontFamily: "var(--font-display)" }}>
                          {day}
                        </p>
                        <p className="text-[12px] font-semibold text-white/70 uppercase tracking-wide">
                          {month} {year}
                        </p>
                      </div>

                      {/* Type label */}
                      <div className="absolute bottom-3 right-3">
                        <span
                          className="text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide"
                          style={{
                            background: isEvent ? "#f5a623" : "var(--mint-dark)",
                            color: "white",
                          }}
                        >
                          {isEvent ? "Event" : "News"}
                        </span>
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5 flex-1 flex flex-col">
                      <h3
                        className="text-[15px] font-bold text-tx-dark mb-2.5 leading-snug group-hover:text-mint-dark transition-colors flex-1"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {item.title}
                      </h3>
                      <p className="text-[12.5px] text-tx-light leading-relaxed mb-4 line-clamp-3">
                        {item.excerpt}
                      </p>
                      <div
                        className="flex items-center justify-between pt-3 border-t text-[12.5px]"
                        style={{ borderColor: "var(--border)" }}
                      >
                        <span className="text-tx-light">
                          {isEvent ? "📅 Event date" : "📰 Published"}: {formatDate(dateStr)}
                        </span>
                        <span
                          className="font-semibold group-hover:underline"
                          style={{ color: "var(--mint-dark)" }}
                        >
                          Read →
                        </span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Newsletter / Stay Connected ───────────── */}
        <section
          className="py-20 px-7 text-center"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
          }}
        >
          <div className="max-w-[560px] mx-auto">
            <div className="text-[32px] mb-5">📬</div>
            <h2
              className="text-[28px] sm:text-[32px] font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Stay Connected with SJH
            </h2>
            <p className="text-[15px] text-white/60 leading-relaxed mb-8">
              Be the first to know about free health camps, new services, and important
              hospital updates. Call or visit us for the latest.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/contact"
                className="px-7 py-[13px] rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Contact Us
              </Link>
              <a
                href="tel:08212541122"
                className="px-7 py-[13px] rounded-xl text-[14px] font-semibold transition-all hover:bg-white/10"
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
