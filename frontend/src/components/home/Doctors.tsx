import Link from "next/link";
import { doctors } from "@/lib/placeholder-data";

export default function Doctors() {
  return (
    <section className="py-20" style={{ background: "var(--bg-sky)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <div>
            <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--teal-dark)" }}>
              Our Team
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-tx-dark mb-3" style={{ fontFamily: "var(--font-display)" }}>
              Meet Our Specialist Doctors
            </h2>
            <p className="text-[15px] text-tx-light max-w-[460px] leading-relaxed">
              Experienced consultants dedicated to your health, recovery, and long-term wellbeing.
            </p>
          </div>
          <Link
            href="/doctors"
            className="inline-block border px-[22px] py-2.5 rounded-lg font-semibold text-[13px] transition-colors whitespace-nowrap"
            style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
          >
            View All Doctors →
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5.5">
          {doctors.map((doc) => (
            <Link
              href={`/doctors/${doc.slug}`}
              key={doc.id}
              className="bg-white rounded-2xl overflow-hidden border shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 block"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className="h-[190px] bg-cover bg-top relative flex items-center justify-center"
                style={{ backgroundImage: "linear-gradient(160deg, #b8ede6, #bfd7ff)" }}
              >
                <div
                  className="absolute bottom-3 left-3 text-[10.5px] font-semibold px-2.5 py-1 rounded-full tracking-wide"
                  style={{ background: "var(--bg-dark)", color: "var(--mint)" }}
                >
                  {doc.departmentName}
                </div>
              </div>
              <div className="p-4.5 pb-5">
                <h3
                  className="text-[15px] font-bold text-tx-dark mb-1 leading-snug"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {doc.fullName}
                </h3>
                <p className="text-[12.5px] font-semibold mb-0.5" style={{ color: "var(--teal-dark)" }}>
                  {doc.specialisation}
                </p>
                <p className="text-[11.5px] text-tx-light">{doc.qualifications}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
