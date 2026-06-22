import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-bg-darker text-white/65 pt-16 pb-7">
      <div className="max-w-[1180px] mx-auto px-7">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr] gap-10 mb-12">
          <div>
            <div className="text-[19px] font-bold text-white mb-3.5" style={{ fontFamily: "var(--font-display)" }}>
              St. Joseph&apos;s Hospital
            </div>
            <p className="text-[13px] leading-[1.8] text-white/50 max-w-[280px]">
              A unit of the Catholic Diocese of Mysore. Delivering compassionate, affordable, and ethical
              healthcare to the people of Mysuru — guided by Christian values of healing with dignity.
            </p>
            <div className="mt-4.5 text-[12.5px] text-white/50 space-y-2 pt-2">
              <p>📍 Bannimantap, Mysuru – 570 015, Karnataka</p>
              <p>
                📞{" "}
                <a href="tel:08212541122" className="text-mint hover:text-white transition-colors">
                  0821-254 1122
                </a>
              </p>
              <p>
                ✉️{" "}
                <a href="mailto:info@sjhmysuru.com" className="text-mint hover:text-white transition-colors">
                  info@sjhmysuru.com
                </a>
              </p>
            </div>
          </div>

          <FooterCol
            title="Quick Links"
            links={[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/departments", label: "Departments" },
              { href: "/doctors", label: "Doctor Directory" },
              { href: "/gallery", label: "Gallery" },
              { href: "/careers", label: "Careers" },
            ]}
          />
          <FooterCol
            title="Patients"
            links={[
              { href: "/appointment", label: "Book Appointment" },
              { href: "/health-packages", label: "Health Packages" },
              { href: "/patient-info", label: "Patient Information" },
              { href: "/govt-schemes", label: "Govt. Schemes" },
              { href: "/news", label: "News & Events" },
            ]}
          />
          <FooterCol
            title="Specialities"
            links={[
              { href: "/departments/neurology", label: "Neurology" },
              { href: "/departments/orthopedics", label: "Orthopedics" },
              { href: "/departments/gynecology", label: "Gynecology" },
              { href: "/departments/ophthalmology", label: "Ophthalmology" },
              { href: "/departments/emergency", label: "Emergency & ICU" },
            ]}
          />
        </div>

        <div
          className="border-t pt-5 flex flex-wrap justify-between items-center gap-2 text-[12px] text-white/30"
          style={{ borderTopColor: "rgba(255,255,255,0.08)" }}
        >
          <span>© 2026 St. Joseph&apos;s Hospital, Bannimantap, Mysuru. All rights reserved.</span>
          <span>Catholic Diocese of Mysore</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: { href: string; label: string }[] }) {
  return (
    <div>
      <h5 className="text-[12px] font-semibold text-white/90 tracking-wide uppercase mb-4.5">{title}</h5>
      <ul className="space-y-2.5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-[13px] text-white/50 hover:text-mint transition-colors">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
