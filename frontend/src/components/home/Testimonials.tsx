"use client";

import { useState, useRef, useEffect } from "react";
import { testimonials } from "@/lib/placeholder-data";

export default function Testimonials() {
  const [perView, setPerView] = useState(3);
  const [index, setIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => setPerView(window.innerWidth < 768 ? 1 : 3);
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const maxIndex = Math.max(0, testimonials.length - perView);

  useEffect(() => {
    const t = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 6000);
    return () => clearInterval(t);
  }, [maxIndex]);

  const cardWidth = 100 / perView;

  return (
    <section className="py-20" style={{ background: "var(--bg-pale)" }}>
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="text-center mb-12 max-w-[600px] mx-auto">
          <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--teal-dark)" }}>
            Patient Stories
          </div>
          <h2 className="text-[28px] sm:text-[32px] font-bold text-tx-dark mb-3" style={{ fontFamily: "var(--font-display)" }}>
            What Our Patients Say
          </h2>
          <p className="text-[15px] text-tx-light leading-relaxed">
            Thousands of patients trust us with their care. Here are a few of their stories.
          </p>
        </div>

        <div className="overflow-hidden">
          <div
            ref={trackRef}
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * cardWidth}%)` }}
          >
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="shrink-0 bg-white rounded-2xl p-8 border shadow-sm"
                style={{ borderColor: "var(--border)", width: `calc(${cardWidth}% - ${(24 * (perView - 1)) / perView}px)` }}
              >
                <div className="text-[15px] tracking-widest mb-3.5" style={{ color: "#f5a623" }}>
                  {"★".repeat(t.rating)}
                </div>
                <blockquote className="text-[14px] text-tx-mid leading-[1.75] italic mb-5.5 relative">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="flex items-center gap-3.5">
                  <div
                    className="w-11 h-11 rounded-full flex items-center justify-center text-white text-[13px] font-bold shrink-0"
                    style={{ background: "linear-gradient(135deg, var(--teal), var(--mint-dark))" }}
                  >
                    {t.patientName
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div>
                    <strong className="block text-[13.5px] text-tx-dark font-semibold">{t.patientName}</strong>
                    <span className="text-[11.5px] text-tx-light">{t.patientLocation}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-center gap-4 mt-9">
          <button
            onClick={() => setIndex((i) => Math.max(0, i - 1))}
            aria-label="Previous testimonials"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
          >
            ←
          </button>
          <div className="flex gap-1.5">
            {Array.from({ length: maxIndex + 1 }).map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                aria-label={`Go to slide ${i + 1}`}
                className="h-1.5 rounded-full transition-all"
                style={{
                  width: i === index ? 20 : 7,
                  background: i === index ? "var(--mint-dark)" : "var(--border)",
                }}
              />
            ))}
          </div>
          <button
            onClick={() => setIndex((i) => Math.min(maxIndex, i + 1))}
            aria-label="Next testimonials"
            className="w-10 h-10 rounded-full border flex items-center justify-center transition-colors"
            style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}
