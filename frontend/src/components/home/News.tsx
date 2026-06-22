import Link from "next/link";
import { newsEvents } from "@/lib/placeholder-data";

export default function News() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="flex flex-wrap items-end justify-between gap-5 mb-10">
          <div>
            <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--teal-dark)" }}>
              Latest Updates
            </div>
            <h2 className="text-[28px] sm:text-[32px] font-bold text-tx-dark" style={{ fontFamily: "var(--font-display)" }}>
              News &amp; Events
            </h2>
          </div>
          <Link
            href="/news"
            className="inline-block border px-[22px] py-2.5 rounded-lg font-semibold text-[13px] whitespace-nowrap"
            style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
          >
            All News →
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr_1fr] gap-5.5">
          {newsEvents.map((item, i) => (
            <Link
              href={`/news/${item.slug}`}
              key={item.id}
              className="rounded-2xl overflow-hidden border bg-white flex flex-col hover:-translate-y-1 hover:shadow-lg transition-all"
              style={{ borderColor: "var(--border)" }}
            >
              <div
                className={`relative flex items-center justify-center ${i === 0 ? "h-[220px]" : "h-[160px]"}`}
                style={{ background: ["#d0ede0", "#c8e6d8", "#bfd7e8"][i % 3] }}
              >
                <span className="text-[50px]">{item.type === "EVENT" ? "📅" : "🏥"}</span>
                <div
                  className="absolute top-3.5 left-3.5 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wider"
                  style={{
                    background: item.type === "EVENT" ? "var(--teal-dark)" : "var(--bg-dark)",
                    color: item.type === "EVENT" ? "#fff" : "var(--mint)",
                  }}
                >
                  {item.type === "EVENT" ? "Event" : "News"}
                </div>
              </div>
              <div className="p-5 pb-5.5 flex-1 flex flex-col">
                <div className="text-[11px] text-tx-light font-medium mb-2 uppercase tracking-wide">
                  {item.eventDate
                    ? new Date(item.eventDate).toLocaleDateString("en-IN", { month: "long", day: "numeric", year: "numeric" })
                    : item.publishedAt &&
                      new Date(item.publishedAt).toLocaleDateString("en-IN", { month: "long", year: "numeric" })}
                </div>
                <h3
                  className="text-[16px] font-bold text-tx-dark leading-snug mb-2.5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[13px] text-tx-light leading-relaxed flex-1 mb-3.5">{item.excerpt}</p>
                <span className="text-[13px] font-semibold" style={{ color: "var(--mint-dark)" }}>
                  Read more →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
