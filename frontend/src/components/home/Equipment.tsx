const equipment = [
  { icon: "🔬", title: "CT Scan (128-slice)", desc: "Multi-detector CT for rapid, detailed cross-sectional imaging in emergency and diagnostic settings." },
  { icon: "🧪", title: "Advanced Lab & Pathology", desc: "Fully automated clinical laboratory with rapid turnaround for 500+ diagnostic tests." },
  { icon: "🏥", title: "Modular Operation Theatre", desc: "Laminar air-flow, HEPA-filtered OTs with advanced laparoscopic and endoscopic systems." },
  { icon: "❤️", title: "ICU & Critical Care", desc: "Multi-parameter monitoring, ventilators, and dedicated cardiac ICU for critical patients." },
  { icon: "💧", title: "Dialysis Unit", desc: "Modern haemodialysis machines with RO water treatment for safe, comfortable dialysis sessions." },
];

export default function Equipment() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--teal-dark)" }}>
            State-of-the-Art
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-tx-dark mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Advanced Medical Equipment
          </h2>
          <p className="text-[15px] text-tx-light leading-relaxed">
            Precision diagnostics and modern technology at the service of your health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
          {equipment.map((eq) => (
            <div
              key={eq.title}
              className="rounded-2xl overflow-hidden border bg-white hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="h-[170px] flex items-center justify-center relative"
                style={{ background: "linear-gradient(135deg, rgba(9,46,42,0.55), rgba(0,100,90,0.35)), var(--bg-pale)" }}
              >
                <span className="text-[44px]" style={{ filter: "drop-shadow(0 2px 8px rgba(0,0,0,0.3))" }}>
                  {eq.icon}
                </span>
              </div>
              <div className="p-5">
                <h4 className="text-[16px] font-semibold text-tx-dark mb-2" style={{ fontFamily: "var(--font-display)" }}>
                  {eq.title}
                </h4>
                <p className="text-[13px] text-tx-light leading-relaxed">{eq.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
