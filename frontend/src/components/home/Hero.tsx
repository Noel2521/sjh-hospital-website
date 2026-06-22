"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Link from "next/link";
import { heroSlides } from "@/lib/placeholder-data";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = useCallback((index: number) => {
    setCurrent((index + heroSlides.length) % heroSlides.length);
  }, []);

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length);
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  return (
    <section
      className="relative h-[92vh] min-h-[560px] max-h-[820px] flex flex-col items-center justify-center overflow-hidden"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      onMouseLeave={resetTimer}
    >
      {/* Slides */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, i) => (
          <div
            key={slide.id}
            className="absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out"
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundColor: "var(--bg-dark)",
              opacity: i === current ? 1 : 0,
            }}
          >
            {/* Transparent dark overlay so text is readable over any photo */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(8,38,34,0.52) 0%, rgba(8,38,34,0.68) 60%, rgba(8,38,34,0.80) 100%)",
              }}
            />
          </div>
        ))}
      </div>

      {/* Bottom accent line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1 z-10"
        style={{ background: "linear-gradient(90deg, var(--mint), var(--teal), var(--sky))" }}
      />

      {/* Content */}
      <div className="relative z-[5] text-center px-7 pb-[120px] max-w-[760px] animate-[fadeUp_0.9s_ease_both]">
        <div
          className="inline-block px-4 py-1.5 rounded-full text-[11.5px] font-semibold tracking-widest uppercase mb-5"
          style={{
            background: "rgba(0,245,212,0.15)",
            border: "1px solid rgba(0,245,212,0.35)",
            color: "var(--mint)",
          }}
        >
          NABH Accredited · Multi-Speciality Hospital
        </div>

        <h1 className="font-bold text-white leading-[1.15] mb-2.5" style={{ fontFamily: "var(--font-display)" }}>
          <span className="block text-[34px] sm:text-[42px] md:text-[50px]">St. Joseph&apos;s Hospital</span>
          <span className="block text-[16px] sm:text-[19px] md:text-[22px] font-normal italic text-white/80 mt-1.5">
            Bannimantap, Mysuru
          </span>
        </h1>

        <p
          key={current}
          className="text-white/85 text-[15px] sm:text-[17px] font-light my-4 tracking-wide"
          style={{ animation: "fadeIn 0.6s ease" }}
        >
          {heroSlides[current].tagline}
        </p>

        <div className="flex gap-3.5 justify-center flex-wrap mt-6">
          <Link
            href="/appointment"
            className="inline-block bg-mint-dark text-white px-7 py-[13px] rounded-lg font-semibold text-[14px] hover:bg-mint-deep transition-colors"
          >
            Book an Appointment
          </Link>
          <Link
            href="/departments"
            className="inline-block border border-white/55 text-white px-[26px] py-3 rounded-lg font-medium text-[14px] hover:bg-white/10 hover:border-white transition-colors"
          >
            Our Departments
          </Link>
        </div>
      </div>

      {/* Dots */}
      <div className="absolute bottom-[96px] left-1/2 -translate-x-1/2 flex gap-2 z-[6]">
        {heroSlides.map((slide, i) => (
          <button
            key={slide.id}
            aria-label={`Slide ${i + 1}`}
            onClick={() => goTo(i)}
            className="h-2 rounded-full transition-all duration-300"
            style={{
              width: i === current ? 26 : 8,
              background: i === current ? "var(--mint)" : "rgba(255,255,255,0.4)",
            }}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        onClick={() => goTo(current - 1)}
        aria-label="Previous slide"
        className="hidden sm:flex absolute top-1/2 left-6 -translate-y-1/2 z-[6] w-[46px] h-[46px] rounded-full items-center justify-center text-white text-lg transition-colors hero-arrow-btn"
      >
        ←
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Next slide"
        className="hidden sm:flex absolute top-1/2 right-6 -translate-y-1/2 z-[6] w-[46px] h-[46px] rounded-full items-center justify-center text-white text-lg transition-colors hero-arrow-btn"
      >
        →
      </button>

      {/* Stats bar */}
      <div
        className="absolute bottom-0 left-0 right-0 z-[6] flex justify-center items-center h-[72px] px-8 overflow-x-auto"
        style={{
          background: "rgba(9,46,42,0.88)",
          backdropFilter: "blur(12px)",
          borderTop: "1px solid rgba(0,245,212,0.15)",
        }}
      >
        {[
          { num: "18+", lbl: "Specialities" },
          { num: "50+", lbl: "Specialist Doctors" },
          { num: "24/7", lbl: "Emergency Care" },
          { num: "NABH", lbl: "Accredited" },
        ].map((stat, i, arr) => (
          <div key={stat.lbl} className="flex items-center">
            <div className="flex flex-col items-center px-5 sm:px-11">
              <span
                className="text-[20px] sm:text-[24px] font-bold leading-none"
                style={{ fontFamily: "var(--font-display)", color: "var(--mint)" }}
              >
                {stat.num}
              </span>
              <span className="text-[10px] sm:text-[11px] text-white/55 mt-1 tracking-wide whitespace-nowrap">
                {stat.lbl}
              </span>
            </div>
            {i < arr.length - 1 && <div className="w-px h-[34px]" style={{ background: "rgba(255,255,255,0.12)" }} />}
          </div>
        ))}
      </div>
    </section>
  );
}
