import Link from "next/link";

export function AppointmentCTA() {
  return (
    <section className="py-14" style={{ background: "linear-gradient(135deg, #00c4a0, #3dbdbd, #5aabee)" }}>
      <div className="max-w-[1180px] mx-auto px-7 flex flex-wrap items-center justify-between gap-8">
        <div>
          <h2 className="text-[24px] sm:text-[26px] font-bold text-white mb-1.5" style={{ fontFamily: "var(--font-display)" }}>
            Ready to Consult Our Specialists?
          </h2>
          <p className="text-white/80 text-[14px]">
            Book an appointment in under 2 minutes. Choose your department and preferred time.
          </p>
        </div>
        <div className="flex items-center gap-4.5 flex-wrap">
          <Link
            href="/appointment"
            className="inline-block bg-white px-8 py-[15px] rounded-lg font-semibold text-[15px] hover:bg-[#f0fffc] transition-colors"
            style={{ color: "var(--mint-dark)" }}
          >
            Book Appointment Online
          </Link>
          <span className="text-white/65 text-[13px]">or call</span>
          <a href="tel:08212541122" className="text-[20px] font-bold text-white tracking-wide hover:underline">
            0821-254 1122
          </a>
        </div>
      </div>
    </section>
  );
}

export function EmergencyBar() {
  return (
    <section className="py-11" style={{ background: "linear-gradient(135deg, #8b1a1a, #b52929)" }}>
      <div className="max-w-[1180px] mx-auto px-7 flex flex-wrap items-center justify-between gap-8">
        <div className="flex items-center gap-5 text-center sm:text-left flex-col sm:flex-row">
          <div className="text-[40px]">🚑</div>
          <div>
            <h3 className="text-[20px] font-bold text-white mb-1" style={{ fontFamily: "var(--font-display)" }}>
              Medical Emergency? We are ready.
            </h3>
            <p className="text-white/70 text-[13.5px]">
              Our Emergency &amp; Trauma unit operates round the clock with trained specialists on standby.
            </p>
          </div>
        </div>
        <div className="flex gap-8 flex-wrap justify-center">
          <EmergencyContact label="Hospital Line" number="0821-254 1122" href="tel:08212541122" />
          <EmergencyContact label="Emergency Direct" number="+91 98450 00000" href="tel:9845000000" />
          <EmergencyContact label="Ambulance" number="108" href="tel:108" />
        </div>
      </div>
    </section>
  );
}

function EmergencyContact({ label, number, href }: { label: string; number: string; href: string }) {
  return (
    <div className="text-center">
      <span className="block text-[10.5px] text-white/55 font-semibold tracking-wider uppercase mb-1">{label}</span>
      <a href={href} className="block text-[20px] font-bold text-white hover:text-[#ffd6d6] transition-colors">
        {number}
      </a>
    </div>
  );
}
