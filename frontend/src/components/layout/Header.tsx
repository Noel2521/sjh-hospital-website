"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/departments", label: "Departments" },
  { href: "/doctors", label: "Doctors" },
  { href: "/health-packages", label: "Health Packages" },
  { href: "/news", label: "News & Events" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[100] bg-white border-b transition-shadow ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,180,160,0.12)]" : ""
      }`}
      style={{ borderBottomColor: "var(--border)" }}
    >
      <div className="max-w-[1240px] mx-auto px-6 h-[72px] flex items-center justify-between gap-4">

        {/* ── LOGO ── */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <Image
            src="/images/sjh-logo.png"
            alt="St. Joseph's Hospital Mysuru Logo"
            width={54}
            height={54}
            className="object-contain"
            priority
          />
          <div className="hidden sm:block">
            <strong
              className="block text-[14px] leading-tight text-tx-dark"
              style={{ fontFamily: "var(--font-display)", fontWeight: 700 }}
            >
              St. Joseph&apos;s Hospital
            </strong>
            <span className="text-[11px] text-tx-light">
              Bannimantap, Mysuru
            </span>
          </div>
        </Link>

        {/* ── DESKTOP NAV ── */}
        <nav className="hidden lg:flex items-center gap-0.5 flex-1 justify-center">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium px-3 py-1.5 rounded-md transition-colors whitespace-nowrap"
              style={{ color: "var(--tx-mid)" }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "var(--mint-dark)";
                e.currentTarget.style.background = "var(--bg-pale)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "var(--tx-mid)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* ── RIGHT SIDE: Book Appointment + NABH badge ── */}
        <div className="hidden lg:flex items-center gap-3 shrink-0">
          {/* Book Appointment button */}
          <Link
            href="/appointment"
            className="text-[13px] font-semibold px-5 py-[9px] rounded-lg text-white transition-colors whitespace-nowrap"
            style={{ background: "var(--mint-dark)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "var(--mint-deep)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "var(--mint-dark)")
            }
          >
            Book Appointment
          </Link>

          {/* NABH Certificate Badge */}
          <div className="flex flex-col items-center group relative">
            <Image
              src="/images/nabh-logo.png"
              alt="NABH Entry Level Certified — Patient Safety & Quality of Care"
              width={48}
              height={48}
              className="object-contain cursor-pointer"
            />
            {/* Tooltip on hover */}
            <div
              className="absolute top-full mt-2 right-0 w-[180px] text-center text-[11px] text-white py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 whitespace-normal leading-relaxed"
              style={{ background: "var(--bg-dark)" }}
            >
              NABH Entry Level Certified<br />Patient Safety & Quality of Care
            </div>
          </div>
        </div>

        {/* ── HAMBURGER (mobile) ── */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1 ml-auto"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className="block w-6 h-0.5 rounded-full transition-transform"
            style={{
              background: "var(--tx-dark)",
              transform: menuOpen ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block w-6 h-0.5 rounded-full transition-opacity"
            style={{
              background: "var(--tx-dark)",
              opacity: menuOpen ? 0 : 1,
            }}
          />
          <span
            className="block w-6 h-0.5 rounded-full transition-transform"
            style={{
              background: "var(--tx-dark)",
              transform: menuOpen
                ? "translateY(-7px) rotate(-45deg)"
                : "none",
            }}
          />
        </button>
      </div>

      {/* ── MOBILE NAV ── */}
      {menuOpen && (
        <nav
          className="lg:hidden flex flex-col py-3 border-t bg-white shadow-lg"
          style={{ borderTopColor: "var(--border)" }}
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-6 py-3 text-[14px] font-medium transition-colors"
              style={{ color: "var(--tx-mid)" }}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile: Book + NABH side by side */}
          <div className="flex items-center gap-3 px-6 pt-3 pb-2 border-t mt-1"
            style={{ borderTopColor: "var(--border)" }}>
            <Link
              href="/appointment"
              className="flex-1 text-center text-[14px] font-semibold py-3 rounded-lg text-white"
              style={{ background: "var(--mint-dark)" }}
              onClick={() => setMenuOpen(false)}
            >
              Book Appointment
            </Link>
            <Image
              src="/images/nabh-logo.png"
              alt="NABH Certified"
              width={42}
              height={42}
              className="object-contain shrink-0"
            />
          </div>
        </nav>
      )}
    </header>
  );
}
