import { notFound } from "next/navigation";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { departments, doctors } from "@/lib/placeholder-data";

// ── Static data enrichment ─────────────────────────────────────────────────

const DEPT_DESCRIPTIONS: Record<string, string> = {
  orthopedics:
    "Our Orthopaedics & Sports Medicine department offers comprehensive bone, joint, and muscle care. From joint replacements and spine surgeries to fracture management and sports injury rehabilitation, our experienced team uses the latest techniques to restore mobility and improve quality of life.",
  neurology:
    "The Neurology & Neurosurgery department at St. Joseph's provides expert diagnosis and treatment for conditions affecting the brain, spine, and nervous system. Our team handles stroke, epilepsy, Parkinson's disease, brain tumours, and complex neurosurgical cases with precision and compassion.",
  gynecology:
    "We offer complete women's healthcare from adolescence through post-menopause. Our department specialises in antenatal care, high-risk pregnancies, minimally invasive gynaecological surgeries, and is backed by a well-equipped neonatal intensive care unit (NICU).",
  ophthalmology:
    "Our Ophthalmology unit provides advanced eye care for all age groups. We specialise in cataract surgery, glaucoma management, retinal diseases, squint correction, and paediatric eye care — helping patients achieve and preserve clear vision.",
  oncology:
    "Our multidisciplinary Cancer Surgery & Oncology team offers comprehensive cancer care including diagnosis, surgical oncology, chemotherapy, and palliative support. Regular cancer screening camps make early detection accessible to the community.",
  ent:
    "The ENT department provides expert care for ear, nose, and throat conditions including hearing loss, sinusitis, snoring, throat disorders, and endoscopic surgeries. Our team is experienced in both adult and paediatric ENT conditions.",
  nephrology:
    "Our Nephrology & Dialysis unit provides expert care for all kidney-related conditions. We operate a modern, well-maintained dialysis centre with trained nursing support, and work closely with transplant centres for advanced kidney care.",
  emergency:
    "Our 24/7 Emergency, ICU & Trauma Care unit is always ready. With a dedicated trauma bay, advanced life support equipment, cardiac ICU, and a rapid-response team, we handle medical emergencies of all kinds with speed and precision.",
  laparoscopy:
    "We specialise in minimally invasive (keyhole) surgical techniques for a wide range of abdominal conditions. Laparoscopic surgery means smaller cuts, less pain, faster recovery, and fewer complications compared to traditional open surgery.",
  physiotherapy:
    "Our Physiotherapy department provides evidence-based rehabilitation for post-surgical patients, stroke survivors, sports injuries, neurological conditions, and chronic pain. Personalised treatment plans help every patient regain function and independence.",
  dermatology:
    "Our Dermatology team diagnoses and treats all skin, hair, and nail conditions — from common problems like acne, eczema, and fungal infections to complex conditions like psoriasis, vitiligo, and skin cancers.",
  "general-medicine":
    "Our General Medicine department is the first point of contact for adults with health concerns. Our physicians manage a wide spectrum of conditions including diabetes, hypertension, infections, and coordinate care with specialists when needed.",
};

const DEPT_HIGHLIGHTS: Record<string, string[]> = {
  orthopedics: ["Joint Replacement Surgery", "Spine Surgery", "Sports Injuries", "Arthroscopy", "Fracture & Trauma Care", "Paediatric Orthopaedics"],
  neurology: ["Stroke Management", "Epilepsy Treatment", "Neurosurgery", "Parkinson's Disease", "Brain Tumour Surgery", "Nerve Conduction Studies"],
  gynecology: ["Normal & C-Section Delivery", "High-Risk Pregnancy", "Laparoscopic Gynaecology", "NICU Support", "Fertility Counselling", "Menopause Management"],
  ophthalmology: ["Cataract Surgery", "Glaucoma Care", "Retinal Treatment", "LASIK Counselling", "Squint Correction", "Paediatric Eye Care"],
  oncology: ["Cancer Screening Camps", "Tumour Surgery", "Chemotherapy", "Palliative & Pain Care", "Cancer Rehabilitation", "Post-op Oncology Follow-up"],
  ent: ["Endoscopic Sinus Surgery", "Cochlear Implants", "Tonsillectomy & Adenoids", "Hearing Assessment", "Voice & Swallowing Disorders", "Paediatric ENT"],
  nephrology: ["Haemodialysis", "Peritoneal Dialysis", "CKD Management", "Kidney Transplant Support", "Hypertension & Oedema", "Kidney Stone Management"],
  emergency: ["24/7 Trauma Bay", "Cardiac Emergencies", "ICU & Ventilator Support", "Poison & Overdose Management", "Resuscitation", "Multi-Casualty Readiness"],
  laparoscopy: ["Laparoscopic Cholecystectomy", "Appendectomy", "Hernia Repair", "Bariatric Surgery", "Laparoscopic Hysterectomy", "Diagnostic Laparoscopy"],
  physiotherapy: ["Post-Surgical Rehabilitation", "Stroke Rehabilitation", "Sports Injury Rehab", "Chronic Pain Therapy", "Paediatric Physiotherapy", "Electrotherapy"],
  dermatology: ["Acne & Psoriasis", "Vitiligo Treatment", "Hair Loss & PRP", "Skin Biopsy", "Wart & Corn Removal", "Cosmetic Dermatology"],
  "general-medicine": ["Diabetes Management", "Hypertension Control", "Fever & Infections", "Preventive Health Check-ups", "Chronic Disease Management", "Travel Medicine"],
};

const DEPT_WHY: Record<string, string[]> = {
  orthopedics: ["NABH-accredited surgical facility", "Latest implant technology", "Dedicated physiotherapy post-op", "Cashless insurance available"],
  neurology: ["24/7 stroke response protocol", "Advanced neuro-imaging on site", "Experienced neurosurgical team", "Multidisciplinary care approach"],
  gynecology: ["Experienced female consultants available", "Level II NICU support", "Comfortable maternity suites", "High-risk pregnancy specialists"],
  ophthalmology: ["Phacoemulsification cataract technique", "Modern vitreo-retinal equipment", "Paediatric eye camp outreach", "Post-operative follow-up care"],
  oncology: ["Multidisciplinary tumour board", "Affordable treatment plans", "Palliative care team support", "Regular community cancer camps"],
  ent: ["Endoscopic & microscopic surgery", "Audiological testing lab", "Experienced paediatric ENT team", "Outreach hearing camps"],
  nephrology: ["Modern RO water-treated dialysis", "Clean & comfortable dialysis unit", "Trained nephrology nurses", "Dietary counselling included"],
  emergency: ["Response within minutes", "Fully equipped trauma bay", "Critical care specialists on-site 24/7", "ICU step-down support"],
  laparoscopy: ["Faster recovery — back home sooner", "Smaller incisions, less pain", "Experienced laparoscopic surgeons", "Day-care surgery available"],
  physiotherapy: ["Personalised treatment plans", "Modern physiotherapy equipment", "Home exercise programme guidance", "Experienced chartered physios"],
  dermatology: ["Comprehensive skin allergy testing", "Cosmetic & medical dermatology", "Experienced consultants", "Affordable treatment"],
  "general-medicine": ["Comprehensive health screening packages", "Referral to right specialist", "Chronic disease monitoring", "Affordable OPD consultation"],
};

// ── Page ──────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return departments.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) return {};
  return {
    title: `${dept.name} | St. Joseph's Hospital Mysuru`,
    description: DEPT_DESCRIPTIONS[slug] ?? `Expert ${dept.name} care at SJH Mysuru.`,
  };
}

export default async function DepartmentDetailPage({ params }: Props) {
  const { slug } = await params;
  const dept = departments.find((d) => d.slug === slug);
  if (!dept) notFound();

  const deptDoctors = doctors.filter((d) => d.departmentName === dept.name);
  const description = DEPT_DESCRIPTIONS[slug] ?? "Expert specialist care delivered with compassion and precision at St. Joseph's Hospital, Mysuru.";
  const highlights = DEPT_HIGHLIGHTS[slug] ?? [];
  const whyPoints = DEPT_WHY[slug] ?? [];

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Breadcrumb ────────────────────────────── */}
        <div className="bg-white border-b px-7 py-3" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto text-[12.5px] text-tx-light flex items-center gap-2">
            <Link href="/" className="hover:text-mint-dark transition-colors">Home</Link>
            <span>/</span>
            <Link href="/departments" className="hover:text-mint-dark transition-colors">Departments</Link>
            <span>/</span>
            <span className="text-tx-dark font-medium">{dept.name}</span>
          </div>
        </div>

        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="py-16 px-7"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
          }}
        >
          <div className="max-w-[1180px] mx-auto flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div
              className="w-20 h-20 rounded-2xl flex items-center justify-center text-[38px] shrink-0"
              style={{ background: "rgba(255,255,255,0.12)" }}
            >
              {dept.iconEmoji}
            </div>
            <div className="flex-1">
              <div
                className="text-[11px] font-semibold tracking-[2px] uppercase mb-2"
                style={{ color: "var(--mint)" }}
              >
                Department
              </div>
              <h1
                className="text-[28px] sm:text-[36px] font-bold text-white mb-2 leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {dept.name}
              </h1>
              {deptDoctors.length > 0 && (
                <p className="text-[14px] text-white/60">
                  {deptDoctors.length} specialist{deptDoctors.length > 1 ? "s" : ""} available
                </p>
              )}
            </div>
            <Link
              href={`/appointment?dept=${dept.slug}`}
              className="shrink-0 px-6 py-[13px] rounded-lg text-[14px] font-semibold text-white transition-all hover:opacity-90"
              style={{ background: "var(--mint-dark)" }}
            >
              Book Appointment →
            </Link>
          </div>
        </div>

        <div className="max-w-[1180px] mx-auto px-7 py-14 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10">

          {/* ── Left Column ──────────────────────────── */}
          <div>
            {/* About */}
            <section className="mb-10">
              <h2
                className="text-[22px] font-bold text-tx-dark mb-4"
                style={{ fontFamily: "var(--font-display)" }}
              >
                About {dept.name}
              </h2>
              <p className="text-[15px] text-tx-light leading-[1.85]">{description}</p>
            </section>

            {/* Treatments */}
            {highlights.length > 0 && (
              <section className="mb-10">
                <h2
                  className="text-[22px] font-bold text-tx-dark mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Treatments &amp; Procedures
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {highlights.map((h) => (
                    <div
                      key={h}
                      className="flex items-center gap-3 px-4 py-3.5 rounded-xl border"
                      style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
                    >
                      <span style={{ color: "var(--mint-dark)" }}>✦</span>
                      <span className="text-[13.5px] font-medium text-tx-dark">{h}</span>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Doctors */}
            {deptDoctors.length > 0 && (
              <section className="mb-10">
                <h2
                  className="text-[22px] font-bold text-tx-dark mb-5"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Our Specialists
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {deptDoctors.map((doc) => (
                    <Link
                      key={doc.id}
                      href={`/doctors/${doc.slug}`}
                      className="bg-white rounded-2xl border overflow-hidden hover:shadow-lg hover:-translate-y-0.5 transition-all block"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <div
                        className="h-[90px] flex items-center px-5 gap-4"
                        style={{
                          background: "linear-gradient(135deg, rgba(9,46,42,0.9), rgba(0,120,100,0.8))",
                        }}
                      >
                        <div
                          className="w-12 h-12 rounded-full flex items-center justify-center text-[20px] shrink-0"
                          style={{ background: "rgba(255,255,255,0.15)" }}
                        >
                          👨‍⚕️
                        </div>
                        <div>
                          <h3
                            className="text-[14px] font-bold text-white leading-snug"
                            style={{ fontFamily: "var(--font-display)" }}
                          >
                            {doc.fullName}
                          </h3>
                          <p className="text-[11px] text-white/55">{doc.qualifications}</p>
                        </div>
                      </div>
                      <div className="px-5 py-3.5">
                        <p className="text-[12px] font-semibold" style={{ color: "var(--teal-dark)" }}>
                          {doc.specialisation}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* No doctors fallback */}
            {deptDoctors.length === 0 && (
              <div
                className="rounded-xl border px-5 py-4 mb-10 text-[13.5px] text-tx-light"
                style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
              >
                👨‍⚕️ Specialist details will be updated soon. Please call us for consultant availability.
              </div>
            )}
          </div>

          {/* ── Right Sidebar ─────────────────────────── */}
          <aside className="space-y-5">

            {/* Book CTA */}
            <div
              className="rounded-2xl p-6 text-center"
              style={{
                background: "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
              }}
            >
              <div className="text-[28px] mb-3">{dept.iconEmoji}</div>
              <h3
                className="text-[17px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book a Consultation
              </h3>
              <p className="text-[12.5px] text-white/55 mb-5 leading-relaxed">
                Same-day slots available for most departments. Our team will confirm your appointment by phone.
              </p>
              <Link
                href={`/appointment?dept=${dept.slug}`}
                className="block w-full py-3 rounded-lg text-white text-[14px] font-semibold transition-all hover:opacity-90 mb-3"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Appointment
              </Link>
              <a
                href="tel:08212541122"
                className="block w-full py-3 rounded-lg text-[13px] font-medium transition-all"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.7)",
                }}
              >
                📞 0821-254 1122
              </a>
            </div>

            {/* Why SJH for this dept */}
            {whyPoints.length > 0 && (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "white" }}
              >
                <h4
                  className="text-[14px] font-bold text-tx-dark mb-4"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Why choose SJH for {dept.name.split("&")[0].trim()}?
                </h4>
                <ul className="space-y-3">
                  {whyPoints.map((p) => (
                    <li key={p} className="flex items-start gap-2.5 text-[13px] text-tx-mid">
                      <span className="shrink-0 mt-0.5" style={{ color: "var(--mint-dark)" }}>✓</span>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Emergency */}
            <div
              className="rounded-xl border px-5 py-4 flex items-start gap-3"
              style={{ borderColor: "#fecaca", background: "#fff5f5" }}
            >
              <span className="text-[20px] shrink-0">🚨</span>
              <div>
                <p className="text-[12.5px] font-semibold text-red-700 mb-0.5">Emergency?</p>
                <p className="text-[11.5px] text-red-600/80">
                  Call 24/7:{" "}
                  <a href="tel:08212541122" className="font-bold underline">
                    0821-254 1122
                  </a>
                </p>
              </div>
            </div>

            {/* Other departments */}
            <div
              className="rounded-2xl border p-5"
              style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
            >
              <h4 className="text-[13px] font-semibold text-tx-dark mb-3 uppercase tracking-wide">
                Other Departments
              </h4>
              <div className="space-y-1">
                {departments
                  .filter((d) => d.slug !== slug)
                  .slice(0, 6)
                  .map((d) => (
                    <Link
                      key={d.id}
                      href={`/departments/${d.slug}`}
                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg hover:bg-white transition-colors text-[13px] text-tx-mid hover:text-mint-dark"
                    >
                      <span>{d.iconEmoji}</span>
                      <span>{d.name}</span>
                    </Link>
                  ))}
                <Link
                  href="/departments"
                  className="flex items-center gap-2 px-3 py-2 text-[12.5px] font-semibold transition-colors"
                  style={{ color: "var(--mint-dark)" }}
                >
                  View all departments →
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <Footer />
    </>
  );
}
