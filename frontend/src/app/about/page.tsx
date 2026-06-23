import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "About Us | St. Joseph's Hospital Mysuru — NABH Accredited",
  description:
    "Learn about St. Joseph's Hospital, Bannimantap, Mysuru — a unit of the Catholic Diocese of Mysore. Our history, mission, values, and commitment to compassionate healthcare.",
};

const MILESTONES = [
  {
    year: "1998",
    title: "Foundation Stone Laid",
    desc: "Most Rev. Dr. Joseph Roy, Bishop of Mysore, laid the foundation stone of St. Joseph's Hospital on 1st May 1998, marking the beginning of a vision for compassionate healthcare in Bannimantap.",
  },
  {
    year: "2008",
    title: "Hospital Opens Its Doors",
    desc: "Blessed and dedicated to service by Most Rev. Dr. Thomas A. Vazhapilly on 12th March 2008, the hospital opened under the United Doctors Guild with laparoscopic surgery and specialist care from day one.",
  },
  {
    year: "2011",
    title: "Diocese Takes Over & Expands",
    desc: "The Catholic Diocese of Mysore assumed administration in January 2011, expanding the first floor, separating wards, and launching the Dialysis Unit with two machines — growing to six by 2015.",
  },
  {
    year: "2012",
    title: "CT Scan Unit Launched",
    desc: "A GE CT unit was commissioned in 2012. In 2021 it was upgraded to a Siemens 32-slice machine, bringing high-precision diagnostic imaging to the community.",
  },
  {
    year: "2015",
    title: "Blood Bank, Physiotherapy & Insurance Schemes",
    desc: "Blood Bank established, Physiotherapy and Sports Medicine departments launched, and government schemes including RSBY, MSHS, ABY, Yeshaswini and MediAssist insurance were activated — now covering 18+ insurers.",
  },
  {
    year: "2016",
    title: "Infrastructure Upgrades & Cleft Services",
    desc: "New generator installed, lift facility added, ambulance purchased, ICU ventilators and rotating cots procured. Cleft Services were also launched this year, extending care to the most vulnerable.",
  },
  {
    year: "2018",
    title: "NABH Process & Neuro Rehab Centre",
    desc: "The NABH accreditation process was completed between 2016 and 2018, a landmark quality milestone. The Neuro Rehabilitation Centre was also inaugurated, adding specialist rehabilitation to the hospital's portfolio.",
  },
];

const VALUES = [
  {
    icon: "✛",
    title: "Compassion",
    desc: "Every patient is treated as a whole person — with dignity, empathy, and genuine care — not just a medical case.",
  },
  {
    icon: "⚖️",
    title: "Integrity",
    desc: "We uphold the highest ethical standards in clinical practice, billing, and every interaction with patients and families.",
  },
  {
    icon: "🎯",
    title: "Excellence",
    desc: "We continuously raise the bar — through NABH accreditation, ongoing training, and adoption of advanced medical technology.",
  },
  {
    icon: "🤝",
    title: "Service",
    desc: "Rooted in the Christian tradition of healing, we are committed to serving all patients — regardless of background or means.",
  },
  {
    icon: "🔬",
    title: "Innovation",
    desc: "We invest in modern diagnostics, minimally invasive techniques, and evidence-based treatment to give patients the best outcomes.",
  },
  {
    icon: "🌍",
    title: "Community",
    desc: "Through health camps, outreach programmes, and affordable care, we serve not just our patients but the wider community of Mysuru.",
  },
];

const LEADERSHIP = [
  {
    name: "Most Rev. Dr. Francis Serrao, S.J.",
    role: "Bishop of Mysore",
    desc: "Bishop of the Roman Catholic Diocese of Mysore, His Lordship guides St. Joseph's Hospital in its mission of healing rooted in Christian values of love, service, and compassion.",
    initial: "FS",
  },
  {
    name: "Fr. Thomas Roxan Baroos",
    role: "Hospital Director",
    desc: "Fr. Thomas Roxan Baroos leads the hospital with vision and pastoral care, ensuring SJH remains a beacon of faith-based, quality healthcare for the people of Mysuru.",
    initial: "TB",
  },
  {
    name: "Fr. Naveen Kumar K",
    role: "Assistant Director",
    desc: "Fr. Naveen Kumar K assists in the hospital's administration and operations, supporting the mission of delivering compassionate and affordable care to every patient.",
    initial: "NK",
  },
];

const ACCREDITATIONS = [
  { icon: "🏆", title: "NABH Accredited", sub: "National Accreditation Board for Hospitals & Healthcare Providers" },
  { icon: "🏛️", title: "Catholic Diocese of Mysore", sub: "A unit of the Diocese — committed to ethical, faith-based healthcare since 2008" },
  { icon: "🩺", title: "Registered Multi-Speciality Hospital", sub: "Karnataka State Health Department — serving Bannimantap, Mysuru" },
  { icon: "🔬", title: "Approved Training Centre", sub: "Clinical training for nursing and paramedical students" },
];

export default function AboutPage() {
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
          {/* Decorative rings */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-[0.04]" style={{ background: "var(--mint)" }} />
          <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] rounded-full opacity-[0.04]" style={{ background: "var(--teal)" }} />
          <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: "rgba(0,245,212,0.15)" }} />

          <div className="relative max-w-[1180px] mx-auto">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2.5px] uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              ✦ Est. 2008 · Catholic Diocese of Mysore
            </div>
            <h1
              className="text-[34px] sm:text-[48px] font-bold text-white mb-5 leading-tight max-w-[700px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Compassionate Care.
              <br />
              <span style={{ color: "var(--mint)" }}>Serving with Excellence.</span>
            </h1>
            <p className="text-[16px] text-white/60 max-w-[560px] leading-[1.85] mb-10">
              Since 2008, St. Joseph's Hospital has been the cornerstone of healthcare in
              Bannimantap, Mysuru — combining the warmth of faith-based care with the
              precision of modern medicine.
            </p>

            {/* Quick stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-[700px]">
              {[
                { n: "18+", l: "Years of Service" },
                { n: "18+", l: "Specialities" },
                { n: "20+", l: "Specialist Doctors" },
                { n: "NABH", l: "Accredited" },
              ].map(({ n, l }) => (
                <div
                  key={l}
                  className="rounded-xl px-5 py-4 text-center"
                  style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <div
                    className="text-[26px] font-bold leading-none mb-1"
                    style={{ fontFamily: "var(--font-display)", color: "var(--mint)" }}
                  >
                    {n}
                  </div>
                  <div className="text-[11px] text-white/50">{l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Mission & Vision ──────────────────────── */}
        <section className="py-20 px-7 bg-white">
          <div className="max-w-[1180px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--teal-dark)" }}
              >
                Who We Are
              </div>
              <h2
                className="text-[28px] sm:text-[34px] font-bold text-tx-dark mb-6 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                A Hospital Built on Faith, Compassion Care
              </h2>
              <div className="space-y-4 text-[15px] text-tx-light leading-[1.9]">
                <p>
                  St. Joseph's Hospital, a healthcare institution of the{" "}
                  <strong className="text-tx-dark">Catholic Diocese of Mysore</strong>,
                  was envisioned by the late Most Rev. Dr. Mathias Fernandes. The foundation
                  stone was laid on 1st May 1998 by Most Rev. Dr. Joseph Roy, and the hospital
                  was blessed and dedicated to service on 12th March 2008 by Most Rev. Dr.
                  Thomas A. Vazhapilly.
                </p>
                <p>
                  Located in Bannimantap, Mysuru, we have grown over 18 years into a{" "}
                  <strong className="text-tx-dark">NABH-accredited multi-speciality hospital</strong>{" "}
                  with 18+ departments, 20+ specialist doctors, a Dialysis Unit, CT Scan, Blood
                  Bank, Physiotherapy, Neuro Rehabilitation, and round-the-clock emergency services.
                </p>
                <p>
                  Guided by the values of compassion, dignity, and service, we are committed
                  to providing quality, affordable, and patient-centred healthcare — with special
                  attention to the poor, the marginalised, and those in need.
                </p>
              </div>
            </div>

            {/* Mission / Vision / Values cards */}
            <div className="space-y-4">
              {[
                {
                  icon: "🎯",
                  title: "Our Mission",
                  text: "To continue Jesus Christ's healing ministry and loving concern for the sick and the suffering through holistic and quality healthcare.",
                  accent: "var(--mint-dark)",
                },
                {
                  icon: "🌟",
                  title: "Our Vision",
                  text: "Best healthcare at an affordable cost to everyone, in compliance with the highest ethical standards.",
                  accent: "var(--teal-dark)",
                },
                {
                  icon: "✛",
                  title: "Our Foundation",
                  text: "Rooted in the Catholic Diocese of Mysore's tradition of service, we are committed to healing the sick, comforting the suffering, and caring for the vulnerable — regardless of background or means.",
                  accent: "var(--sky-dark)",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-5 p-5 rounded-2xl border"
                  style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                >
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center text-[20px] shrink-0"
                    style={{ background: "white", border: `2px solid ${item.accent}22` }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[15px] font-bold mb-1.5"
                      style={{ color: item.accent, fontFamily: "var(--font-display)" }}
                    >
                      {item.title}
                    </h3>
                    <p className="text-[13.5px] text-tx-light leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Leadership ────────────────────────────── */}
        <section className="pt-20 pb-24 px-7" style={{ background: "var(--bg-dark)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-14">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--mint)" }}
              >
                Leadership
              </div>
              <h2
                className="text-[28px] sm:text-[34px] font-bold text-white mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                The People Who Lead Us
              </h2>
              <p className="text-[15px] text-white/50 max-w-[440px] mx-auto leading-relaxed">
                Guided by faith, experience, and a deep commitment to patient welfare.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-[900px] mx-auto">
              {LEADERSHIP.map((l) => (
                <div
                  key={l.name}
                  className="rounded-2xl p-6 text-center"
                  style={{
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.09)",
                  }}
                >
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-[20px] font-bold text-white mx-auto mb-4 shadow-lg"
                    style={{
                      fontFamily: "var(--font-display)",
                      background:
                        "linear-gradient(135deg, rgba(0,245,212,0.25), rgba(0,180,160,0.35))",
                      border: "1.5px solid rgba(0,245,212,0.2)",
                    }}
                  >
                    {l.initial}
                  </div>
                  <h3
                    className="text-[14.5px] font-bold text-white mb-1 leading-snug"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {l.name}
                  </h3>
                  <p className="text-[11.5px] font-semibold mb-3" style={{ color: "var(--mint)" }}>
                    {l.role}
                  </p>
                  <p className="text-[12.5px] text-white/45 leading-relaxed">{l.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Divider ───────────────────────────────── */}
        <div className="px-7" style={{ background: "var(--bg-dark)" }}>
          <div
            className="max-w-[1180px] mx-auto h-px"
            style={{ background: "rgba(255,255,255,0.08)" }}
          />
        </div>

        {/* ── Timeline ──────────────────────────────── */}
        <section className="py-24 px-7 overflow-hidden" style={{ background: "var(--bg-dark)" }}>
          <div className="max-w-[1180px] mx-auto">
            {/* Section header */}
            <div className="text-center mb-20">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--mint)" }}
              >
                Our Journey
              </div>
              <h2
                className="text-[30px] sm:text-[38px] font-bold text-white mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Milestones That Define Us
              </h2>
              <p className="text-[15px] text-white/40 max-w-[420px] mx-auto leading-relaxed">
                From a vision in 1998 to a NABH-accredited hospital — every step has been
                guided by faith and a commitment to serve.
              </p>
            </div>

            {/* Horizontal scroll track on mobile, vertical stagger on desktop */}
            <div className="relative">
              {/* Glowing vertical spine */}
              <div
                className="absolute left-[28px] top-0 bottom-0 w-[2px] hidden sm:block"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent, var(--mint-dark) 15%, var(--teal-dark) 85%, transparent)",
                }}
              />

              <div className="space-y-0">
                {MILESTONES.map((m, i) => (
                  <div key={m.year} className="relative flex gap-8 sm:gap-14 group">
                    {/* Left column: year + dot */}
                    <div className="flex flex-col items-center shrink-0 w-14">
                      {/* Year bubble */}
                      <div
                        className="relative z-10 w-14 h-14 rounded-2xl flex items-center justify-center font-bold text-[12px] shadow-lg mb-0 shrink-0 transition-transform group-hover:scale-110"
                        style={{
                          background:
                            i === MILESTONES.length - 1
                              ? "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))"
                              : "rgba(255,255,255,0.07)",
                          border:
                            i === MILESTONES.length - 1
                              ? "none"
                              : "1.5px solid rgba(0,245,212,0.2)",
                          color: i === MILESTONES.length - 1 ? "white" : "var(--mint)",
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {m.year}
                      </div>
                      {/* Connector line to next */}
                      {i < MILESTONES.length - 1 && (
                        <div
                          className="w-[2px] flex-1 min-h-[32px]"
                          style={{ background: "rgba(0,245,212,0.12)" }}
                        />
                      )}
                    </div>

                    {/* Right column: card */}
                    <div
                      className={`flex-1 rounded-2xl border p-6 mb-4 transition-all group-hover:shadow-xl group-hover:-translate-y-0.5 ${
                        i === MILESTONES.length - 1 ? "mb-0" : ""
                      }`}
                      style={{
                        background:
                          i === MILESTONES.length - 1
                            ? "rgba(0,245,212,0.06)"
                            : "rgba(255,255,255,0.04)",
                        borderColor:
                          i === MILESTONES.length - 1
                            ? "rgba(0,245,212,0.25)"
                            : "rgba(255,255,255,0.07)",
                      }}
                    >
                      <h3
                        className="text-[15px] font-bold mb-2"
                        style={{
                          fontFamily: "var(--font-display)",
                          color: i === MILESTONES.length - 1 ? "var(--mint)" : "white",
                        }}
                      >
                        {m.title}
                      </h3>
                      <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
                        {m.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Core Values ───────────────────────────── */}
        <section className="py-20 px-7 bg-white">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-14">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--teal-dark)" }}
              >
                What Guides Us
              </div>
              <h2
                className="text-[28px] sm:text-[34px] font-bold text-tx-dark mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Our Core Values
              </h2>
              <p className="text-[15px] text-tx-light max-w-[480px] mx-auto leading-relaxed">
                These six values are not just words on a wall — they shape every decision,
                every interaction, and every moment of care at SJH.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {VALUES.map((v, i) => (
                <div
                  key={v.title}
                  className="group rounded-2xl border p-6 hover:shadow-lg hover:-translate-y-1 transition-all"
                  style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] mb-4 transition-transform group-hover:scale-110"
                    style={{
                      background:
                        i % 3 === 0
                          ? "linear-gradient(135deg, var(--mint-dark), var(--teal))"
                          : i % 3 === 1
                          ? "linear-gradient(135deg, var(--teal-dark), var(--sky-dark))"
                          : "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
                    }}
                  >
                    {v.icon}
                  </div>
                  <h3
                    className="text-[16px] font-bold text-tx-dark mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {v.title}
                  </h3>
                  <p className="text-[13.5px] text-tx-light leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Accreditations ────────────────────────── */}
        <section className="py-20 px-7 bg-white">
          <div className="max-w-[1180px] mx-auto">
            <div className="text-center mb-14">
              <div
                className="text-[11px] font-semibold tracking-[2.5px] uppercase mb-3"
                style={{ color: "var(--teal-dark)" }}
              >
                Trust &amp; Standards
              </div>
              <h2
                className="text-[28px] sm:text-[34px] font-bold text-tx-dark"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Accreditations &amp; Recognition
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {ACCREDITATIONS.map((a) => (
                <div
                  key={a.title}
                  className="flex items-start gap-5 p-6 rounded-2xl border hover:shadow-md transition-shadow"
                  style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] shrink-0"
                    style={{ background: "white", border: "1.5px solid var(--border)" }}
                  >
                    {a.icon}
                  </div>
                  <div>
                    <h3
                      className="text-[15px] font-bold text-tx-dark mb-1"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {a.title}
                    </h3>
                    <p className="text-[13px] text-tx-light leading-relaxed">{a.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section
          className="py-20 px-7"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
          }}
        >
          <div className="max-w-[900px] mx-auto text-center">
            <div
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-[28px] mx-auto mb-6"
              style={{ background: "rgba(0,245,212,0.15)", border: "1.5px solid rgba(0,245,212,0.25)" }}
            >
              ✛
            </div>
            <h2
              className="text-[28px] sm:text-[36px] font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Experience the SJH Difference
            </h2>
            <p className="text-[15px] text-white/60 max-w-[480px] mx-auto leading-relaxed mb-10">
              Whether you need a routine consultation, a specialist opinion, or emergency
              care — we are here for you, every day, with compassion and expertise.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/appointment"
                className="px-8 py-[14px] rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90 hover:scale-[1.02]"
                style={{ background: "var(--mint-dark)" }}
              >
                Book an Appointment
              </Link>
              <Link
                href="/departments"
                className="px-8 py-[14px] rounded-xl text-[14px] font-semibold transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Explore Our Departments
              </Link>
              <Link
                href="/contact"
                className="px-8 py-[14px] rounded-xl text-[14px] font-semibold transition-all hover:bg-white/10"
                style={{
                  color: "rgba(255,255,255,0.8)",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}