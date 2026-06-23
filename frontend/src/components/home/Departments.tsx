import Link from "next/link";
import { departments } from "@/lib/placeholder-data";

export default function Departments() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--teal-dark)" }}>
            Areas of Care
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-tx-dark mb-3" style={{ fontFamily: "var(--font-display)" }}>
            Our Departments &amp; Services
          </h2>
          <p className="text-[15px] text-tx-light leading-relaxed">
            Expert care across 18+ specialities, delivered by experienced consultants committed to your wellbeing.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {departments.map((dept) => (
            <Link
              key={dept.id}
              href={`/departments/${dept.slug}`}
              className="group flex flex-col items-center text-center px-4 pt-7 pb-5.5 rounded-xl border bg-bg-light hover:bg-white transition-all hover:-translate-y-1 dept-card-link"
            >
              <div className="text-[30px] mb-3 transition-transform group-hover:scale-110">{dept.iconEmoji}</div>
              <h4 className="text-[13px] font-semibold text-tx-dark leading-snug">{dept.name}</h4>
            </Link>
          ))}
          <Link
            href="/departments"
            className="flex flex-col items-center text-center px-4 pt-7 pb-5.5 rounded-xl border border-dashed bg-bg-pale hover:-translate-y-1 transition-all"
            style={{ borderColor: "var(--teal)" }}
          >
            <div className="text-[30px] mb-3">➕</div>
            <h4 className="text-[13px] font-semibold" style={{ color: "var(--mint-dark)" }}>
              View All Departments
            </h4>
          </Link>
        </div>
      </div>
    </section>
  );
}
