import Link from "next/link";
import Image from "next/image";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { galleryEvents } from "@/lib/placeholder-data";

export const metadata = {
  title: "Photo Gallery | St. Joseph's Hospital Mysuru",
  description:
    "Browse photos from health camps, ceremonies, and community events at St. Joseph's Hospital, Bannimantap, Mysuru.",
};

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryPage() {
  const sorted = [...galleryEvents].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
  const totalPhotos = galleryEvents.reduce((sum, e) => sum + e.photos.length, 0);

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="relative py-16 sm:py-20 px-5 sm:px-7 overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 55%, var(--mint-deep) 100%)",
          }}
        >
          <div
            className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full opacity-[0.04]"
            style={{ background: "var(--mint)" }}
          />
          <div
            className="absolute -bottom-16 -left-10 w-[260px] h-[260px] rounded-full opacity-[0.04]"
            style={{ background: "var(--teal)" }}
          />

          <div className="relative max-w-[1180px] mx-auto text-center">
            <div
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2.5px] uppercase mb-5 px-4 py-1.5 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              ✦ Moments at SJH
            </div>
            <h1
              className="text-[30px] sm:text-[42px] font-bold text-white mb-4 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Photo Gallery
            </h1>
            <p className="text-[14.5px] sm:text-[16px] text-white/60 max-w-[480px] mx-auto leading-[1.85] mb-8">
              Health camps, ceremonies, and community moments from St. Joseph&apos;s Hospital —
              organised by event.
            </p>

            {/* Quick stats */}
            <div className="flex items-center justify-center gap-6 sm:gap-10 flex-wrap">
              <div>
                <p
                  className="text-[22px] sm:text-[26px] font-bold leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--mint)" }}
                >
                  {galleryEvents.length}
                </p>
                <p className="text-[11px] sm:text-[12px] text-white/50">Events</p>
              </div>
              <div className="w-px h-9" style={{ background: "rgba(255,255,255,0.15)" }} />
              <div>
                <p
                  className="text-[22px] sm:text-[26px] font-bold leading-none"
                  style={{ fontFamily: "var(--font-display)", color: "var(--mint)" }}
                >
                  {totalPhotos}+
                </p>
                <p className="text-[11px] sm:text-[12px] text-white/50">Photos</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Events grid ───────────────────────────── */}
        <section className="py-12 sm:py-16 px-5 sm:px-7" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {sorted.map((event) => (
                <Link
                  key={event.id}
                  href={`/gallery/${event.slug}`}
                  className="group bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col"
                  style={{ borderColor: "var(--border)" }}
                >
                  {/* Cover image */}
                  <div className="relative h-[180px] sm:h-[200px] overflow-hidden">
                    <Image
                      src={event.coverImageUrl}
                      alt={event.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(8,38,34,0.75) 0%, rgba(8,38,34,0.05) 55%, transparent 100%)",
                      }}
                    />
                    {/* Photo count badge */}
                    <span
                      className="absolute top-3 right-3 text-[11px] font-bold px-2.5 py-1 rounded-full"
                      style={{ background: "rgba(0,0,0,0.45)", color: "white" }}
                    >
                      📷 {event.photos.length}
                    </span>
                    {/* Date */}
                    <span className="absolute bottom-3 left-4 text-[12px] font-medium text-white/80">
                      {formatDate(event.date)}
                    </span>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <h3
                      className="text-[16px] sm:text-[17px] font-bold text-tx-dark mb-2 leading-snug group-hover:text-mint-dark transition-colors"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {event.title}
                    </h3>
                    {event.description && (
                      <p className="text-[12.5px] text-tx-light leading-relaxed mb-4 line-clamp-2 flex-1">
                        {event.description}
                      </p>
                    )}
                    <span
                      className="text-[12.5px] font-semibold group-hover:underline mt-auto"
                      style={{ color: "var(--mint-dark)" }}
                    >
                      View Photos →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section
          className="py-14 sm:py-16 px-5 sm:px-7 text-center"
          style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)" }}
        >
          <div className="max-w-[560px] mx-auto">
            <h2
              className="text-[22px] sm:text-[26px] font-bold text-white mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Want to see what&apos;s happening at SJH next?
            </h2>
            <p className="text-[14px] text-white/60 leading-relaxed mb-7">
              Check our News &amp; Events page for upcoming health camps and community drives.
            </p>
            <Link
              href="/news"
              className="inline-block px-7 py-[13px] rounded-xl text-[14px] font-bold text-white transition-all hover:opacity-90"
              style={{ background: "var(--mint-dark)" }}
            >
              See News & Events
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
