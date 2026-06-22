"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      className={`sticky top-0 z-[100] bg-white/97 backdrop-blur-md border-b border-bg-pale transition-shadow ${
        scrolled ? "shadow-[0_2px_20px_rgba(0,180,160,0.1)]" : ""
      }`}
      style={{ borderBottomColor: "var(--border)" }}
    >
      <div className="max-w-[1180px] mx-auto px-7 h-[68px] flex items-center justify-between gap-5">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div
            className="w-[42px] h-[42px] rounded-[10px] flex items-center justify-center text-white font-bold text-[15px] shrink-0"
            style={{
              fontFamily: "var(--font-display)",
              background: "linear-gradient(135deg, var(--teal), var(--mint-dark))",
            }}
          >
            SJ
          </div>
          <div>
            <strong
              className="block text-[14.5px] font-bold leading-tight text-tx-dark"
              style={{ fontFamily: "var(--font-display)" }}
            >
              St. Joseph&apos;s Hospital
            </strong>
            <span className="text-[11px] text-tx-light">Bannimantap, Mysuru · NABH Accredited</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-0.5">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-[13px] font-medium px-3 py-1.5 rounded-md transition-colors text-tx-mid hover:text-mint-dark hover:bg-bg-pale"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="ml-2 text-[13px] font-semibold px-[18px] py-[9px] rounded-lg text-white bg-mint-dark hover:bg-mint-deep transition-colors"
          >
            Book Appointment
          </Link>
        </nav>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-1"
          aria-label="Open menu"
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            className={`block w-6 h-0.5 bg-tx-dark rounded-full transition-transform ${
              menuOpen ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span className={`block w-6 h-0.5 bg-tx-dark rounded-full transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
          <span
            className={`block w-6 h-0.5 bg-tx-dark rounded-full transition-transform ${
              menuOpen ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <nav className="lg:hidden flex flex-col py-4 border-t bg-white shadow-lg" style={{ borderTopColor: "var(--border)" }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-7 py-3 text-[14px] font-medium text-tx-mid hover:text-mint-dark hover:bg-bg-pale"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/appointment"
            className="mx-5 mt-3 text-center text-[14px] font-semibold px-[18px] py-[12px] rounded-lg text-white bg-mint-dark"
            onClick={() => setMenuOpen(false)}
          >
            Book Appointment
          </Link>
        </nav>
      )}
    </header>
  );
}
