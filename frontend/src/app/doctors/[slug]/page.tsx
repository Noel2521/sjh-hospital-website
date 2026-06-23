import { notFound } from "next/navigation";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { doctors, departments, testimonials } from "@/lib/placeholder-data";

// ── Enrichment data ────────────────────────────────────────────────────────

const DOCTOR_BIO: Record<string, string> = {
  "manu-prasad":
    "Dr. Prof. Manu Prasad S. is one of Karnataka's most respected neurologists, with over 22 years of clinical experience in managing complex neurological disorders. He has trained at premier institutions in India and the UK, and has published extensively in peer-reviewed journals. At St. Joseph's, he leads a dedicated neurology and neurosurgery team, bringing world-class care to the people of Mysuru.",
  "maria-theresa":
    "Dr. Sr. Maria Theresa brings 18 years of dedicated experience in Gynaecology and Obstetrics. Her compassionate approach and clinical expertise have made her one of the most trusted obstetricians in the region. She specialises in high-risk pregnancies, minimally invasive gynaecological surgery, and is a strong advocate for maternal and newborn health.",
  "rajesh-kumar":
    "Dr. Rajesh Kumar M. is a highly experienced orthopaedic surgeon with 15 years of practice, specialising in joint replacement surgery, spine care, and sports injuries. He has performed over 2,000 joint replacement surgeries and is known for his meticulous surgical technique and commitment to his patients' long-term recovery.",
  "anitha-rao":
    "Dr. Anitha Rao is a skilled ophthalmologist with 12 years of experience in medical and surgical eye care. She specialises in phacoemulsification cataract surgery, glaucoma management, and paediatric ophthalmology. She regularly participates in eye care outreach camps in rural Karnataka.",
};

const DOCTOR_EXPERTISE: Record<string, string[]> = {
  "manu-prasad": ["Stroke Management & Rehabilitation", "Epilepsy & Seizure Disorders", "Parkinson's Disease", "Brain Tumour Surgery", "Nerve Conduction Studies", "Spine & Disc Disorders", "Migraine & Headache Clinic", "Neurovascular Diseases"],
  "maria-theresa": ["High-Risk Pregnancy Care", "Normal & Caesarean Delivery", "Laparoscopic Gynaecology", "Fertility Evaluation", "Menopause Management", "Polycystic Ovary (PCOS)", "Hysterectomy (Laparoscopic)", "Neonatal Care Coordination"],
  "rajesh-kumar": ["Total Knee Replacement", "Total Hip Replacement", "Spine Decompression Surgery", "Sports Injury Management", "Arthroscopy (Knee & Shoulder)", "Paediatric Orthopaedics", "Fracture Management", "Revision Joint Surgery"],
  "anitha-rao": ["Phacoemulsification Cataract Surgery", "Glaucoma Diagnosis & Treatment", "Diabetic Retinopathy", "Retinal Laser Surgery", "Squint Correction (Strabismus)", "Paediatric Eye Care", "Dry Eye Management", "Low Vision Aids"],
};

const DOCTOR_ACHIEVEMENTS: Record<string, string[]> = {
  "manu-prasad": ["FRCP (Edinburgh)", "Gold Medal — MD Neurology", "10+ international publications", "Visiting Faculty, NIMHANS Bangalore"],
  "maria-theresa": ["MS (OBG) — Top of Batch", "Fellowship in Minimal Access Surgery", "15+ years at SJH", "Maternal Health Advocate, Diocese of Mysore"],
  "rajesh-kumar": ["DNB (Orthopaedics)", "2,000+ joint replacement surgeries", "Fellowship — AO Trauma, Switzerland", "Best Orthopaedic Surgeon Award, Mysuru 2023"],
  "anitha-rao": ["MS Ophthalmology — Distinction", "3,000+ cataract surgeries performed", "Rural Eye Camp Coordinator", "Member — All India Ophthalmological Society"],
};

// ── Page ──────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return doctors.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) return {};
  return {
    title: `${doc.fullName} — ${doc.specialisation} | St. Joseph's Hospital Mysuru`,
    description: DOCTOR_BIO[slug]?.slice(0, 155) ?? `${doc.fullName} is a specialist in ${doc.specialisation} at St. Joseph's Hospital, Mysuru.`,
  };
}

export default async function DoctorProfilePage({ params }: Props) {
  const { slug } = await params;
  const doc = doctors.find((d) => d.slug === slug);
  if (!doc) notFound();

  const dept = departments.find((d) => d.name === doc.departmentName);
  const bio = DOCTOR_BIO[slug] ?? `${doc.fullName} is an experienced specialist in ${doc.specialisation} at St. Joseph's Hospital, Bannimantap, Mysuru.`;
  const expertise = DOCTOR_EXPERTISE[slug] ?? [];
  const achievements = DOCTOR_ACHIEVEMENTS[slug] ?? [];

  // Related doctors (same department, different doctor)
  const related = doctors.filter((d) => d.departmentName === doc.departmentName && d.slug !== slug);

  // Relevant testimonials for this department
  const deptTestimonials = testimonials.filter((t) =>
    t.category.toLowerCase() === doc.departmentName.toLowerCase()
  );

  const initials = doc.fullName
    .replace(/Dr\.?\s*(Prof\.?\s*)?/i, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("");

  const DAYS = ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
  const SHORT = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun"];

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Breadcrumb ────────────────────────────── */}
        <div className="bg-white border-b px-7 py-3" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto text-[12.5px] text-tx-light flex items-center gap-2 flex-wrap">
            <Link href="/" className="hover:text-mint-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/doctors" className="hover:text-mint-dark transition-colors">Doctors</Link>
            <span>/</span>
            <span className="text-tx-dark font-medium">{doc.fullName}</span>
          </div>
        </div>

        {/* ── Doctor Hero ───────────────────────────── */}
        <div
          className="relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 60%, var(--mint-deep) 100%)",
          }}
        >
          {/* Decorative BG */}
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "var(--mint)" }} />
          <div className="absolute bottom-0 left-0 w-full h-[1px]" style={{ background: "rgba(0,245,212,0.15)" }} />

          <div className="relative max-w-[1180px] mx-auto px-7 py-14">
            <div className="flex flex-col sm:flex-row gap-8 items-start sm:items-center">
              {/* Avatar */}
              <div
                className="w-32 h-32 rounded-2xl flex items-center justify-center text-[44px] font-bold text-white shrink-0 border-2 shadow-2xl"
                style={{
                  fontFamily: "var(--font-display)",
                  background: "linear-gradient(135deg, rgba(0,245,212,0.2), rgba(0,180,160,0.3))",
                  borderColor: "rgba(0,245,212,0.25)",
                }}
              >
                {initials}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div
                  className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[2px] uppercase mb-3 px-3 py-1 rounded-full"
                  style={{ background: "rgba(0,245,212,0.12)", color: "var(--mint)" }}
                >
                  {doc.departmentName}
                </div>
                <h1
                  className="text-[30px] sm:text-[38px] font-bold text-white mb-1 leading-tight"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {doc.fullName}
                </h1>
                <p className="text-[15px] font-semibold mb-1" style={{ color: "var(--mint)" }}>
                  {doc.specialisation}
                </p>
                <p className="text-[13.5px] text-white/50 mb-6">{doc.qualifications}</p>

                {/* Quick stats */}
                <div className="flex flex-wrap gap-4">
                  {doc.experienceYears && (
                    <div
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px]"
                      style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)" }}
                    >
                      <span style={{ color: "var(--mint)" }}>🏅</span>
                      <span><strong className="text-white">{doc.experienceYears}+</strong> years experience</span>
                    </div>
                  )}
                  <div
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px]"
                    style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)" }}
                  >
                    <span style={{ color: "var(--mint)" }}>✦</span>
                    <span>NABH Accredited Hospital</span>
                  </div>
                  {doc.consultationTime && (
                    <div
                      className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-[13px]"
                      style={{ background: "rgba(255,255,255,0.07)", color: "rgba(255,255,255,0.75)" }}
                    >
                      <span style={{ color: "var(--mint)" }}>🕐</span>
                      <span>{doc.consultationTime}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* CTA */}
              <div className="shrink-0">
                <Link
                  href={`/appointment?doctor=${doc.id}`}
                  className="block px-7 py-[14px] rounded-xl text-[14px] font-bold text-white text-center shadow-lg transition-all hover:opacity-90 hover:scale-[1.02]"
                  style={{ background: "var(--mint-dark)", minWidth: 180 }}
                >
                  Book Appointment
                </Link>
                <a
                  href="tel:08212541122"
                  className="block mt-2.5 px-7 py-[11px] rounded-xl text-[13px] font-medium text-center transition-all"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.65)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  📞 0821-254 1122
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Main content ──────────────────────────── */}
        <div className="max-w-[1180px] mx-auto px-7 py-14 grid grid-cols-1 lg:grid-cols-[1fr_330px] gap-10">

          {/* ── Left column ──────────────────────────── */}
          <div className="space-y-10">

            {/* About */}
            <section>
              <SectionTitle>About {doc.fullName}</SectionTitle>
              <p className="text-[15px] text-tx-light leading-[1.9]">{bio}</p>
            </section>

            {/* Areas of Expertise */}
            {expertise.length > 0 && (
              <section>
                <SectionTitle>Areas of Expertise</SectionTitle>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {expertise.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl border"
                      style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                    >
                      <span
                        className="w-6 h-6 rounded-full flex items-center justify-center text-[11px] text-white shrink-0"
                        style={{ background: "var(--mint-dark)" }}
                      >
                        ✓
                      </span>
                      <span className="text-[13.5px] font-medium text-tx-dark">{item}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Achievements & Education */}
            {achievements.length > 0 && (
              <section>
                <SectionTitle>Qualifications &amp; Achievements</SectionTitle>
                <div className="space-y-3">
                  {achievements.map((a, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-4 px-5 py-4 rounded-xl border"
                      style={{ borderColor: "var(--border)", background: "white" }}
                    >
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center text-[13px] text-white shrink-0 mt-0.5"
                        style={{ background: "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))" }}
                      >
                        {i + 1}
                      </div>
                      <p className="text-[14px] text-tx-dark font-medium leading-relaxed">{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Schedule */}
            <section>
              <SectionTitle>Consultation Schedule</SectionTitle>
              <div
                className="rounded-2xl border overflow-hidden"
                style={{ borderColor: "var(--border)" }}
              >
                <div
                  className="px-6 py-4 flex items-center justify-between"
                  style={{ background: "var(--bg-pale)" }}
                >
                  <p className="text-[13px] font-semibold text-tx-dark">OPD Days & Timings</p>
                  {doc.consultationTime && (
                    <p className="text-[12.5px] font-medium" style={{ color: "var(--mint-dark)" }}>
                      🕐 {doc.consultationTime}
                    </p>
                  )}
                </div>
                <div className="px-6 py-5 grid grid-cols-7 gap-2">
                  {DAYS.map((day, i) => {
                    const active = doc.availableDays.includes(day);
                    return (
                      <div key={day} className="flex flex-col items-center gap-1.5">
                        <span className="text-[10.5px] font-semibold text-tx-light">{SHORT[i]}</span>
                        <div
                          className="w-9 h-9 rounded-lg flex items-center justify-center text-[11px] font-bold transition-all"
                          style={{
                            background: active ? "var(--mint-dark)" : "var(--border)",
                            color: active ? "white" : "var(--tx-light)",
                          }}
                        >
                          {active ? "✓" : "—"}
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div
                  className="px-6 py-3 border-t text-[12px] text-tx-light"
                  style={{ borderColor: "var(--border)" }}
                >
                  ℹ️ Please call before visiting to confirm availability. Timings may vary on public holidays.
                </div>
              </div>
            </section>

            {/* Patient testimonials for this department */}
            {deptTestimonials.length > 0 && (
              <section>
                <SectionTitle>Patient Experiences</SectionTitle>
                <div className="space-y-4">
                  {deptTestimonials.map((t) => (
                    <div
                      key={t.id}
                      className="rounded-2xl border p-6"
                      style={{ borderColor: "var(--border)", background: "white" }}
                    >
                      <div className="text-[13px] tracking-widest mb-3" style={{ color: "#f5a623" }}>
                        {"★".repeat(t.rating)}
                      </div>
                      <blockquote className="text-[14px] text-tx-mid leading-[1.8] italic mb-4">
                        &ldquo;{t.quote}&rdquo;
                      </blockquote>
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-[12px] font-bold shrink-0"
                          style={{ background: "linear-gradient(135deg, var(--teal), var(--mint-dark))" }}
                        >
                          {t.patientName.split(" ").slice(0, 2).map((w) => w[0]).join("")}
                        </div>
                        <div>
                          <p className="text-[13px] font-semibold text-tx-dark">{t.patientName}</p>
                          <p className="text-[11.5px] text-tx-light">{t.patientLocation}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          {/* ── Right sidebar ─────────────────────────── */}
          <aside className="space-y-5">

            {/* Book CTA */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
              }}
            >
              <h3
                className="text-[17px] font-bold text-white mb-1.5"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Consultation
              </h3>
              <p className="text-[12.5px] text-white/55 mb-5 leading-relaxed">
                with {doc.fullName.split(" ").slice(0, 2).join(" ")}
              </p>
              <Link
                href={`/appointment?doctor=${doc.id}`}
                className="block w-full py-3 rounded-xl text-white text-[14px] font-bold text-center mb-3 transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:08212541122"
                className="block w-full py-3 rounded-xl text-[13px] font-medium text-center"
                style={{ background: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.65)" }}
              >
                📞 0821-254 1122
              </a>
            </div>

            {/* Quick info card */}
            <div
              className="rounded-2xl border p-5"
              style={{ borderColor: "var(--border)", background: "white" }}
            >
              <h4
                className="text-[13px] font-bold text-tx-dark mb-4 uppercase tracking-wide"
              >
                Doctor at a Glance
              </h4>
              <div className="space-y-3.5">
                <InfoRow icon="🏥" label="Department" value={doc.departmentName} />
                <InfoRow icon="🎓" label="Qualification" value={doc.qualifications ?? "—"} />
                {doc.experienceYears && (
                  <InfoRow icon="🏅" label="Experience" value={`${doc.experienceYears}+ years`} />
                )}
                <InfoRow icon="🕐" label="Timings" value={doc.consultationTime ?? "Call for details"} />
                <InfoRow
                  icon="📅"
                  label="Available"
                  value={doc.availableDays.map((d) => d.slice(0, 3)).join(", ")}
                />
              </div>
            </div>

            {/* Department link */}
            {dept && (
              <Link
                href={`/departments/${dept.slug}`}
                className="flex items-center gap-4 rounded-2xl border p-4 hover:shadow-md transition-all group"
                style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-[22px] shrink-0"
                  style={{ background: "var(--bg-pale)" }}
                >
                  {dept.iconEmoji}
                </div>
                <div className="flex-1">
                  <p className="text-[11px] font-semibold uppercase tracking-wide text-tx-light mb-0.5">Department</p>
                  <p className="text-[13.5px] font-bold text-tx-dark group-hover:text-mint-dark transition-colors">
                    {dept.name}
                  </p>
                </div>
                <span style={{ color: "var(--mint-dark)" }}>→</span>
              </Link>
            )}

            {/* Related doctors */}
            {related.length > 0 && (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "white" }}
              >
                <h4 className="text-[13px] font-bold text-tx-dark mb-4 uppercase tracking-wide">
                  Other Specialists
                </h4>
                <div className="space-y-3">
                  {related.map((r) => (
                    <Link
                      key={r.id}
                      href={`/doctors/${r.slug}`}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-bg-light transition-colors group"
                    >
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-[13px] font-bold text-white shrink-0"
                        style={{ background: "linear-gradient(135deg, var(--teal), var(--mint-dark))" }}
                      >
                        {r.fullName.replace(/Dr\.?\s*(Prof\.?\s*)?/i, "").split(" ").filter(Boolean).slice(0, 2).map((w) => w[0]).join("")}
                      </div>
                      <div>
                        <p className="text-[13px] font-semibold text-tx-dark group-hover:text-mint-dark transition-colors">{r.fullName}</p>
                        <p className="text-[11px] text-tx-light">{r.specialisation}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Emergency */}
            <div
              className="rounded-xl border px-5 py-4 flex items-start gap-3"
              style={{ borderColor: "#fecaca", background: "#fff5f5" }}
            >
              <span className="text-[20px] shrink-0">🚨</span>
              <div>
                <p className="text-[12.5px] font-semibold text-red-700 mb-0.5">Medical Emergency?</p>
                <p className="text-[11.5px] text-red-600/80 leading-relaxed">
                  Do not wait. Call our 24/7 emergency line:{" "}
                  <a href="tel:08212541122" className="font-bold underline">0821-254 1122</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ── Sub-components ─────────────────────────────────────────────────────────

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2
      className="text-[20px] font-bold text-tx-dark mb-5 pb-3 border-b flex items-center gap-2"
      style={{ fontFamily: "var(--font-display)", borderColor: "var(--border)" }}
    >
      <span
        className="w-1 h-5 rounded-full shrink-0"
        style={{ background: "var(--mint-dark)" }}
      />
      {children}
    </h2>
  );
}

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="text-[15px] shrink-0 mt-0.5">{icon}</span>
      <div className="flex-1 min-w-0">
        <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-0.5">{label}</p>
        <p className="text-[13px] text-tx-dark font-medium leading-snug">{value}</p>
      </div>
    </div>
  );
}
