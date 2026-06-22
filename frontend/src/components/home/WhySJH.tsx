import Link from "next/link";

const points = [
  {
    title: "NABH Accredited Quality",
    desc: "Meeting the highest national standards for patient safety and quality of care.",
  },
  {
    title: "Compassionate, Affordable Care",
    desc: "World-class treatment accessible to every section of society.",
  },
  {
    title: "Christian Values of Dignity",
    desc: "Every patient is treated with respect, empathy, and unwavering commitment.",
  },
  {
    title: "50+ Experienced Specialists",
    desc: "Expert consultants across 18+ specialities under one roof.",
  },
];

export default function WhySJH() {
  return (
    <section className="py-24" style={{ background: "var(--bg-dark)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
          {/* Left */}
          <div>
            <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--mint)" }}>
              Why Choose SJH
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-display)" }}>
              A Hospital Built on Faith, Compassion &amp; Modern Medicine
            </h2>
            <p className="text-white/65 text-[14.5px] leading-[1.8] mb-7 max-w-[460px]">
              St. Joseph&apos;s Hospital — a unit of the Catholic Diocese of Mysore — has been the cornerstone of
              healthcare in Mysuru for decades. We combine the warmth of compassionate care with the precision of
              advanced medical technology.
            </p>

            <div className="flex flex-col gap-5 mb-9">
              {points.map((p) => (
                <div key={p.title} className="flex gap-3.5 items-start">
                  <div className="mt-0.5 text-[14px] shrink-0" style={{ color: "var(--mint)" }}>
                    ✦
                  </div>
                  <div>
                    <strong className="block text-white text-[14px] font-semibold mb-0.5">{p.title}</strong>
                    <p className="text-white/55 text-[13px] leading-relaxed">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-block bg-mint-dark text-white px-7 py-[13px] rounded-lg font-semibold text-[14px] hover:bg-mint-deep transition-colors"
            >
              Learn More About Us
            </Link>
          </div>

          {/* Right */}
          <div>
            <div className="grid grid-cols-2 gap-4 mb-5">
              <Stat num="18+" lbl="Medical Specialities" />
              <Stat num="50+" lbl="Specialist Doctors" accent />
              <Stat num="24/7" lbl="Emergency & ICU" accent />
              <Stat num="NABH" lbl="Nationally Accredited" />
            </div>
            <div
              className="flex items-center gap-4 rounded-xl p-5"
              style={{ background: "rgba(0,245,212,0.08)", border: "1px solid rgba(0,245,212,0.2)" }}
            >
              <div className="text-[28px] shrink-0" style={{ color: "var(--mint)" }}>
                ✛
              </div>
              <div>
                <strong className="block text-white text-[13.5px] mb-0.5">NABH Accredited Hospital</strong>
                <p className="text-[11.5px] text-white/50 leading-relaxed">
                  National Accreditation Board for Hospitals &amp; Healthcare Providers
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ num, lbl, accent }: { num: string; lbl: string; accent?: boolean }) {
  return (
    <div
      className="rounded-xl p-7 text-center"
      style={{
        background: accent ? "rgba(0,245,212,0.07)" : "rgba(255,255,255,0.05)",
        border: accent ? "1px solid rgba(0,245,212,0.2)" : "1px solid rgba(255,255,255,0.1)",
      }}
    >
      <div className="text-[32px] font-bold mb-1.5 leading-none" style={{ fontFamily: "var(--font-display)", color: "var(--mint)" }}>
        {num}
      </div>
      <div className="text-[12px] text-white/50 leading-snug">{lbl}</div>
    </div>
  );
}
