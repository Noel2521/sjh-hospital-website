"use client";

import { useState } from "react";
import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { galleryEvents } from "@/lib/placeholder-data";

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default function GalleryEventPage() {
  const params = useParams<{ slug: string }>();
  const event = galleryEvents.find((e) => e.slug === params.slug);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  if (!event) {
    notFound();
  }

  const photos = event.photos;

  const showPrev = () =>
    setActiveIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length));
  const showNext = () =>
    setActiveIndex((i) => (i === null ? null : (i + 1) % photos.length));

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Breadcrumb ────────────────────────────── */}
        <div className="bg-white border-b px-5 sm:px-7 py-3" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto text-[12px] sm:text-[12.5px] text-tx-light flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-mint-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/gallery" className="hover:text-mint-dark transition-colors">Gallery</Link>
            <span>/</span>
            <span className="text-tx-dark font-medium">{event.title}</span>
          </div>
        </div>

        {/* ── Event header ──────────────────────────── */}
        <div
          className="relative py-12 sm:py-16 px-5 sm:px-7 overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 60%, var(--mint-deep) 100%)",
          }}
        >
          <div className="relative max-w-[1180px] mx-auto">
            <span
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2px] uppercase mb-4 px-3 py-1 rounded-full"
              style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
            >
              {formatDate(event.date)}
            </span>
            <h1
              className="text-[26px] sm:text-[36px] font-bold text-white mb-3 leading-tight max-w-[700px]"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {event.title}
            </h1>
            {event.description && (
              <p className="text-[14px] sm:text-[15px] text-white/60 max-w-[600px] leading-[1.8]">
                {event.description}
              </p>
            )}
            <p className="text-[12.5px] text-white/40 mt-4">📷 {photos.length} photos</p>
          </div>
        </div>

        {/* ── Photo grid ────────────────────────────── */}
        <section className="py-10 sm:py-14 px-5 sm:px-7" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
              {photos.map((photo, i) => (
                <button
                  key={photo.id}
                  onClick={() => setActiveIndex(i)}
                  className="relative aspect-square rounded-xl overflow-hidden group focus:outline-none focus:ring-2"
                  style={{ "--tw-ring-color": "var(--mint-dark)" } as React.CSSProperties}
                >
                  <Image
                    src={photo.url}
                    alt={photo.caption ?? `${event.title} photo ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                    style={{ background: "rgba(8,38,34,0.35)" }}
                  >
                    <span className="text-white text-[20px]">🔍</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ── Back link ─────────────────────────────── */}
        <div className="pb-12 sm:pb-16 px-5 sm:px-7 text-center" style={{ background: "var(--bg-light)" }}>
          <Link
            href="/gallery"
            className="inline-block text-[13.5px] font-semibold"
            style={{ color: "var(--mint-dark)" }}
          >
            ← Back to All Events
          </Link>
        </div>
      </main>

      {/* ── Lightbox ──────────────────────────────────── */}
      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center px-4"
          style={{ background: "rgba(5,20,18,0.92)" }}
          onClick={() => setActiveIndex(null)}
        >
          {/* Close */}
          <button
            onClick={() => setActiveIndex(null)}
            aria-label="Close"
            className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 rounded-full flex items-center justify-center text-white text-[20px]"
            style={{ background: "rgba(255,255,255,0.1)" }}
          >
            ✕
          </button>

          {/* Prev */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showPrev();
              }}
              aria-label="Previous photo"
              className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-[20px]"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              ←
            </button>
          )}

          {/* Image */}
          <div
            className="relative w-full max-w-[860px] h-[60vh] sm:h-[75vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[activeIndex].url}
              alt={photos[activeIndex].caption ?? `${event.title} photo ${activeIndex + 1}`}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>

          {/* Next */}
          {photos.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                showNext();
              }}
              aria-label="Next photo"
              className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center text-white text-[20px]"
              style={{ background: "rgba(255,255,255,0.1)" }}
            >
              →
            </button>
          )}

          {/* Counter */}
          <span className="absolute bottom-5 left-1/2 -translate-x-1/2 text-white/70 text-[13px]">
            {activeIndex + 1} / {photos.length}
          </span>
        </div>
      )}

      <Footer />
    </>
  );
}
