import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { departments, doctors } from "@/lib/placeholder-data";

export const metadata = {
  title: "Departments & Specialities | St. Joseph's Hospital Mysuru",
  description:
    "Explore 18+ medical specialities at St. Joseph's Hospital, Bannimantap, Mysuru. Expert doctors, advanced diagnostics, and compassionate care.",
};

const DEPT_DESCRIPTIONS: Record<string, string> = {
  orthopedics:
    "Comprehensive bone, joint, and muscle care including joint replacements, sports injuries, spine surgery, and physiotherapy rehabilitation.",
  neurology:
    "Diagnosis and treatment of brain, spine, and nervous system disorders including stroke, epilepsy, Parkinson's, and neurosurgery.",
  gynecology:
    "Complete women's health services — antenatal care, high-risk pregnancies, laparoscopic gynaecology, and post-natal support.",
  ophthalmology:
    "Advanced eye care including cataract surgery, LASIK, glaucoma management, retinal treatment, and paediatric ophthalmology.",
  oncology:
    "Multidisciplinary cancer care — surgical oncology, chemotherapy, palliative care, and regular cancer screening camps.",
  ent: "Ear, nose, and throat treatment including hearing loss, sinusitis, snoring, tonsillitis, and endoscopic ENT surgeries.",
  nephrology:
    "Comprehensive kidney care — haemodialysis, peritoneal dialysis, kidney transplant support, and management of chronic kidney disease.",
  emergency:
    "24/7 emergency and trauma care with a fully equipped ICU, ventilator support, and a rapid-response resuscitation team.",
  laparoscopy:
    "Minimally invasive surgical procedures for appendix, gallbladder, hernia, bariatric, and gynaecological conditions.",
  physiotherapy:
    "Evidence-based physiotherapy for post-surgical rehab, sports injuries, neurological conditions, and chronic pain management.",
  dermatology:
    "Diagnosis and treatment of skin, hair, and nail conditions including acne, psoriasis, vitiligo, and cosmetic dermatology.",
  "general-medicine":
    "Diagnosis and management of general illnesses, diabetes, hypertension, infections, and preventive health check-ups.",
};

const DEPT_HIGHLIGHTS: Record<string, string[]> = {
  orthopedics: ["Joint Replacement Surgery", "Spine Surgery", "Sports Injuries", "Arthroscopy", "Fracture Care"],
  neurology: ["Stroke Management", "Epilepsy Care", "Neurosurgery", "Parkinson's Treatment", "Brain Tumour Surgery"],
  gynecology: ["Normal & C-Section Delivery", "High-Risk Pregnancy", "Laparoscopic Surgery", "NICU Support", "Fertility Counselling"],
  ophthalmology: ["Cataract Surgery", "Glaucoma Care", "Retinal Treatment", "Squint Correction", "Low Vision Aids"],
  oncology: ["Cancer Screening", "Tumour Surgery", "Chemotherapy", "Palliative Care", "Cancer Rehab"],
  ent: ["Endoscopic Sinus Surgery", "Cochlear Implants", "Tonsillectomy", "Hearing Tests", "Voice Disorders"],
  nephrology: ["Haemodialysis", "Peritoneal Dialysis", "CKD Management", "Kidney Transplant Support", "Hypertension Care"],
  emergency: ["24/7 Trauma Care", "Cardiac Emergencies", "ICU & Ventilator Support", "Poison Management", "Resuscitation"],
  laparoscopy: ["Gallbladder Removal", "Appendectomy", "Hernia Repair", "Bariatric Surgery", "Laparoscopic Hysterectomy"],
  physiotherapy: ["Post-Surgical Rehab", "Stroke Rehabilitation", "Sports Injury Rehab", "Chronic Pain Therapy", "Paediatric Physio"],
  dermatology: ["Acne & Psoriasis", "Vitiligo Treatment", "Hair Loss", "Skin Biopsy", "Cosmetic Procedures"],
  "general-medicine": ["Diabetes Management", "Hypertension", "Fever & Infections", "Preventive Check-ups", "Chronic Disease Care"],
};

export default function DepartmentsPage() {
  return (
    <>
      <EmergencyStrip />
      <Header />

      <main>
        {/* ── Hero ──────────────────────────────────── */}
        <div
          className="py-16 px-7 text-center"
          style={{
            background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
          }}
        >
          <div
            className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5"
            style={{ color: "var(--mint)" }}
          >
            Areas of Care
          </div>
          <h1
            className="text-[30px] sm:text-[38px] font-bold text-white mb-3 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Departments &amp; Specialities
          </h1>
          <p className="text-[15px] text-white/65 max-w-[500px] mx-auto leading-relaxed">
            Expert care across 18+ medical specialities, delivered by experienced consultants
            committed to your wellbeing.
          </p>
        </div>

        {/* ── Stats bar ─────────────────────────────── */}
        <div className="bg-white border-b" style={{ borderColor: "var(--border)" }}>
          <div className="max-w-[1180px] mx-auto px-7 py-5 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            {[
              { n: "18+", l: "Specialities" },
              { n: "50+", l: "Specialist Doctors" },
              { n: "24/7", l: "Emergency Care" },
              { n: "NABH", l: "Accredited" },
            ].map(({ n, l }) => (
              <div key={l}>
                <div
                  className="text-[22px] font-bold leading-none mb-1"
                  style={{ fontFamily: "var(--font-display)", color: "var(--mint-dark)" }}
                >
                  {n}
                </div>
                <div className="text-[12px] text-tx-light">{l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Department Cards ───────────────────────── */}
        <section className="py-16" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[1180px] mx-auto px-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept) => {
                const deptDoctors = doctors.filter(
                  (d) => d.departmentName === dept.name
                );
                const desc =
                  DEPT_DESCRIPTIONS[dept.slug] ??
                  "Expert specialist care delivered with compassion and precision.";
                const highlights = DEPT_HIGHLIGHTS[dept.slug] ?? [];

                return (
                  <Link
                    key={dept.id}
                    href={`/departments/${dept.slug}`}
                    className="group bg-white rounded-2xl border overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all block"
                    style={{ borderColor: "var(--border)" }}
                  >
                    {/* Card header */}
                    <div
                      className="h-[100px] flex items-center px-6 gap-4"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)",
                      }}
                    >
                      <div
                        className="w-14 h-14 rounded-xl flex items-center justify-center text-[28px] shrink-0"
                        style={{ background: "rgba(255,255,255,0.12)" }}
                      >
                        {dept.iconEmoji}
                      </div>
                      <div>
                        <h2
                          className="text-[16px] font-bold text-white leading-snug"
                          style={{ fontFamily: "var(--font-display)" }}
                        >
                          {dept.name}
                        </h2>
                        {deptDoctors.length > 0 && (
                          <p className="text-[11.5px] text-white/55 mt-0.5">
                            {deptDoctors.length} specialist{deptDoctors.length > 1 ? "s" : ""} available
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Card body */}
                    <div className="p-5">
                      <p className="text-[13px] text-tx-light leading-relaxed mb-4">{desc}</p>

                      {highlights.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {highlights.slice(0, 3).map((h) => (
                            <span
                              key={h}
                              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                              style={{
                                background: "var(--bg-pale)",
                                color: "var(--mint-deep)",
                              }}
                            >
                              {h}
                            </span>
                          ))}
                          {highlights.length > 3 && (
                            <span
                              className="text-[11px] font-medium px-2.5 py-1 rounded-full"
                              style={{ background: "var(--bg-pale)", color: "var(--tx-light)" }}
                            >
                              +{highlights.length - 3} more
                            </span>
                          )}
                        </div>
                      )}

                      <div
                        className="flex items-center justify-between text-[12.5px] font-semibold pt-3 border-t"
                        style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
                      >
                        <span>View Department →</span>
                        <span className="text-tx-light font-normal">Book Appointment</span>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section
          className="py-16 px-7 text-center"
          style={{ background: "var(--bg-pale)" }}
        >
          <h3
            className="text-[24px] sm:text-[28px] font-bold text-tx-dark mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Not sure which department to visit?
          </h3>
          <p className="text-[15px] text-tx-light mb-7 max-w-[420px] mx-auto">
            Our front desk team will guide you to the right specialist. Just call or book a
            general consultation.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/appointment"
              className="px-7 py-[13px] rounded-lg text-white text-[14px] font-semibold transition-colors"
              style={{ background: "var(--mint-dark)" }}
            >
              Book Appointment
            </Link>
            <a
              href="tel:08212541122"
              className="px-7 py-[13px] rounded-lg text-[14px] font-semibold border transition-colors"
              style={{ borderColor: "var(--border)", color: "var(--tx-mid)" }}
            >
              📞 Call Us: 0821-254 1122
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
