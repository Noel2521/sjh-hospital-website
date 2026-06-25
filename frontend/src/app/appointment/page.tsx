"use client";

import { useState } from "react";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { departments, doctors } from "@/lib/placeholder-data";

type Step = 1 | 2 | 3 | 4;

interface FormData {
  // Step 1 — Department & Doctor
  departmentSlug: string;
  doctorId: string;
  // Step 2 — Date & Time
  preferredDate: string;
  preferredTime: string;
  // Step 3 — Patient Details
  fullName: string;
  phone: string;
  email: string;
  age: string;
  gender: string;
  reason: string;
  isExisting: string;
}

const TIME_SLOTS = [
  "9:00 AM", "9:30 AM", "10:00 AM", "10:30 AM",
  "11:00 AM", "11:30 AM", "12:00 PM",
  "2:00 PM", "2:30 PM", "3:00 PM", "3:30 PM",
  "4:00 PM", "4:30 PM", "5:00 PM",
];

const STEP_LABELS = [
  { n: 1, label: "Speciality" },
  { n: 2, label: "Schedule" },
  { n: 3, label: "Details" },
  { n: 4, label: "Confirm" },
];

export default function AppointmentPage() {
  const [step, setStep] = useState<Step>(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState<FormData>({
    departmentSlug: "",
    doctorId: "",
    preferredDate: "",
    preferredTime: "",
    fullName: "",
    phone: "",
    email: "",
    age: "",
    gender: "",
    reason: "",
    isExisting: "new",
  });

  const set = (field: keyof FormData, value: string) =>
    setForm((prev) => ({ ...prev, [field]: value }));

  const filteredDoctors = form.departmentSlug
    ? doctors.filter(
        (d) =>
          departments.find((dep) => dep.slug === form.departmentSlug)?.name ===
          d.departmentName
      )
    : doctors;

  const selectedDept = departments.find((d) => d.slug === form.departmentSlug);
  const selectedDoctor = doctors.find((d) => d.id === form.doctorId);

  const canNext1 = !!form.departmentSlug;
  const canNext2 = !!form.preferredDate && !!form.preferredTime;
  const canNext3 =
    form.fullName.trim().length > 1 &&
    form.phone.trim().length >= 10 &&
    !!form.gender;

  const handleSubmit = () => setSubmitted(true);

  // ── Submitted / Confirmation ──────────────────────────────────
  if (submitted) {
    return (
      <>
        <EmergencyStrip />
        <Header />
        <main className="min-h-[70vh] flex items-center justify-center py-20 px-7" style={{ background: "var(--bg-light)" }}>
          <div className="max-w-[520px] w-full text-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center text-[36px] mx-auto mb-6 shadow-lg"
              style={{ background: "linear-gradient(135deg, var(--mint-dark), var(--teal))" }}
            >
              ✓
            </div>
            <h1
              className="text-[28px] sm:text-[32px] font-bold text-tx-dark mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Appointment Requested!
            </h1>
            <p className="text-[15px] text-tx-light leading-relaxed mb-2">
              Thank you, <strong className="text-tx-dark">{form.fullName}</strong>. Your appointment request has been received.
            </p>
            <p className="text-[14px] text-tx-light mb-8">
              Our team will call you on{" "}
              <strong className="text-tx-dark">{form.phone}</strong> within 2 hours to confirm your slot.
            </p>

            {/* Summary card */}
            <div
              className="rounded-2xl border text-left p-6 mb-8 shadow-sm"
              style={{ borderColor: "var(--border)", background: "white" }}
            >
              <h3 className="text-[13px] font-semibold uppercase tracking-widest text-tx-light mb-4">
                Appointment Summary
              </h3>
              <SummaryRow label="Department" value={selectedDept?.name ?? "Any"} />
              <SummaryRow label="Doctor" value={selectedDoctor?.fullName ?? "First Available"} />
              <SummaryRow label="Date" value={new Date(form.preferredDate + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })} />
              <SummaryRow label="Time" value={form.preferredTime} />
              <SummaryRow label="Patient" value={`${form.fullName} (${form.age ? form.age + " yrs, " : ""}${form.gender})`} />
            </div>

            <div className="flex gap-3 justify-center flex-wrap">
              <Link
                href="/"
                className="px-6 py-3 rounded-lg text-[14px] font-semibold border transition-colors"
                style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
              >
                ← Back to Home
              </Link>
              <button
                onClick={() => { setSubmitted(false); setStep(1); setForm({ departmentSlug: "", doctorId: "", preferredDate: "", preferredTime: "", fullName: "", phone: "", email: "", age: "", gender: "", reason: "", isExisting: "new" }); }}
                className="px-6 py-3 rounded-lg text-[14px] font-semibold text-white transition-colors"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Another
              </button>
            </div>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <EmergencyStrip />
      <Header />

      <main style={{ background: "var(--bg-light)" }}>
        {/* ── Page Hero ──────────────────────────────── */}
        <div
          className="py-14 px-7 text-center"
          style={{ background: "linear-gradient(135deg, var(--bg-dark) 0%, var(--mint-deep) 100%)" }}
        >
          <div className="text-[11px] font-semibold tracking-[2px] uppercase mb-2.5" style={{ color: "var(--mint)" }}>
            Outpatient Services
          </div>
          <h1
            className="text-[30px] sm:text-[36px] font-bold text-white mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Book an Appointment
          </h1>
          <p className="text-[15px] text-white/65 max-w-[480px] mx-auto leading-relaxed">
            Schedule a consultation with our specialist doctors. Same-day slots available for most departments.
          </p>
        </div>

        {/* ── Stepper ──────────────────────────────────── */}
        <div className="max-w-[700px] mx-auto px-7 pt-10 pb-2">
          <div className="flex items-center justify-between mb-10">
            {STEP_LABELS.map(({ n, label }, i) => (
              <div key={n} className="flex items-center flex-1 last:flex-none">
                <div className="flex flex-col items-center">
                  <div
                    className="w-9 h-9 rounded-full flex items-center justify-center text-[13px] font-bold transition-all"
                    style={{
                      background: step > n ? "var(--mint-dark)" : step === n ? "var(--mint-dark)" : "var(--border)",
                      color: step >= n ? "white" : "var(--tx-light)",
                    }}
                  >
                    {step > n ? "✓" : n}
                  </div>
                  <span className={`text-[11px] mt-1.5 font-medium ${step >= n ? "text-mint-dark" : "text-tx-light"}`} style={{ color: step >= n ? "var(--mint-dark)" : undefined }}>
                    {label}
                  </span>
                </div>
                {i < STEP_LABELS.length - 1 && (
                  <div
                    className="flex-1 h-[2px] mx-2 rounded-full transition-all"
                    style={{ background: step > n ? "var(--mint-dark)" : "var(--border)" }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* ── Step 1: Department & Doctor ───────────── */}
          {step === 1 && (
            <Card title="Choose Your Speciality">
              <Label>Select Department <span className="text-red-400">*</span></Label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {departments.map((dept) => (
                  <button
                    key={dept.id}
                    onClick={() => { set("departmentSlug", dept.slug); set("doctorId", ""); }}
                    className="flex flex-col items-center text-center px-3 py-4 rounded-xl border transition-all text-[13px] font-medium"
                    style={{
                      borderColor: form.departmentSlug === dept.slug ? "var(--mint-dark)" : "var(--border)",
                      background: form.departmentSlug === dept.slug ? "var(--bg-pale)" : "white",
                      color: form.departmentSlug === dept.slug ? "var(--mint-deep)" : "var(--tx-mid)",
                    }}
                  >
                    <span className="text-[22px] mb-1.5">{dept.iconEmoji}</span>
                    <span className="leading-snug">{dept.name}</span>
                  </button>
                ))}
              </div>

              {form.departmentSlug && (
                <>
                  <Label>Preferred Doctor <span className="text-tx-light text-[12px] font-normal">(optional)</span></Label>
                  <div className="space-y-2.5 mb-2">
                    <DoctorOption
                      selected={form.doctorId === ""}
                      onClick={() => set("doctorId", "")}
                      name="First Available Doctor"
                      sub={`Any specialist in ${selectedDept?.name}`}
                      emoji="👨‍⚕️"
                    />
                    {filteredDoctors.length > 0 ? filteredDoctors.map((doc) => (
                      <DoctorOption
                        key={doc.id}
                        selected={form.doctorId === doc.id}
                        onClick={() => set("doctorId", doc.id)}
                        name={doc.fullName}
                        sub={doc.qualifications ?? doc.specialisation}
                        emoji="🩺"
                      />
                    )) : (
                      <p className="text-[13px] text-tx-light py-2">No specific doctors listed for this department — any available specialist will be assigned.</p>
                    )}
                  </div>
                </>
              )}

              <StepNav
                onNext={() => setStep(2)}
                nextDisabled={!canNext1}
                nextLabel="Continue to Schedule →"
              />
            </Card>
          )}

          {/* ── Step 2: Date & Time ────────────────────── */}
          {step === 2 && (
            <Card title="Choose Date & Time">
              <Label>Preferred Date <span className="text-red-400">*</span></Label>
              <input
                type="date"
                value={form.preferredDate}
                min={new Date().toISOString().split("T")[0]}
                onChange={(e) => set("preferredDate", e.target.value)}
                className="w-full border rounded-lg px-4 py-3 text-[14px] text-tx-dark mb-5 outline-none focus:ring-2"
                style={{ borderColor: "var(--border)", focusRingColor: "var(--mint-dark)" }}
              />

              <Label>Preferred Time Slot <span className="text-red-400">*</span></Label>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-2.5 mb-2">
                {TIME_SLOTS.map((slot) => (
                  <button
                    key={slot}
                    onClick={() => set("preferredTime", slot)}
                    className="py-2.5 px-2 rounded-lg border text-[13px] font-medium transition-all"
                    style={{
                      borderColor: form.preferredTime === slot ? "var(--mint-dark)" : "var(--border)",
                      background: form.preferredTime === slot ? "var(--bg-pale)" : "white",
                      color: form.preferredTime === slot ? "var(--mint-deep)" : "var(--tx-mid)",
                    }}
                  >
                    {slot}
                  </button>
                ))}
              </div>

              <div
                className="rounded-lg px-4 py-3 text-[12.5px] mt-5 mb-1"
                style={{ background: "var(--bg-pale)", color: "var(--tx-mid)" }}
              >
                ℹ️ Our team will confirm the exact slot by phone. Please choose your preferred time and we'll do our best to accommodate.
              </div>

              <StepNav
                onBack={() => setStep(1)}
                onNext={() => setStep(3)}
                nextDisabled={!canNext2}
                nextLabel="Continue to Details →"
              />
            </Card>
          )}

          {/* ── Step 3: Patient Details ───────────────── */}
          {step === 3 && (
            <Card title="Your Details">
              <div className="mb-4">
                <Label>Are you a <span className="text-red-400">*</span></Label>
                <div className="flex gap-3">
                  {[{ v: "new", label: "New Patient" }, { v: "existing", label: "Existing Patient" }].map(({ v, label }) => (
                    <button
                      key={v}
                      onClick={() => set("isExisting", v)}
                      className="flex-1 py-2.5 rounded-lg border text-[13px] font-medium transition-all"
                      style={{
                        borderColor: form.isExisting === v ? "var(--mint-dark)" : "var(--border)",
                        background: form.isExisting === v ? "var(--bg-pale)" : "white",
                        color: form.isExisting === v ? "var(--mint-deep)" : "var(--tx-mid)",
                      }}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <Label>Full Name <span className="text-red-400">*</span></Label>
                  <Input
                    placeholder="e.g. Ramesh Kumar"
                    value={form.fullName}
                    onChange={(v) => set("fullName", v)}
                  />
                </div>
                <div>
                  <Label>Phone Number <span className="text-red-400">*</span></Label>
                  <Input
                    placeholder="10-digit mobile number"
                    value={form.phone}
                    onChange={(v) => set("phone", v)}
                    type="tel"
                  />
                </div>
                <div>
                  <Label>Email Address <span className="text-tx-light text-[12px] font-normal">(optional)</span></Label>
                  <Input
                    placeholder="you@email.com"
                    value={form.email}
                    onChange={(v) => set("email", v)}
                    type="email"
                  />
                </div>
                <div>
                  <Label>Age</Label>
                  <Input
                    placeholder="Age in years"
                    value={form.age}
                    onChange={(v) => set("age", v)}
                    type="number"
                  />
                </div>
              </div>

              <div className="mb-4">
                <Label>Gender <span className="text-red-400">*</span></Label>
                <div className="flex gap-3">
                  {["Male", "Female", "Other"].map((g) => (
                    <button
                      key={g}
                      onClick={() => set("gender", g)}
                      className="flex-1 py-2.5 rounded-lg border text-[13px] font-medium transition-all"
                      style={{
                        borderColor: form.gender === g ? "var(--mint-dark)" : "var(--border)",
                        background: form.gender === g ? "var(--bg-pale)" : "white",
                        color: form.gender === g ? "var(--mint-deep)" : "var(--tx-mid)",
                      }}
                    >
                      {g}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mb-2">
                <Label>Reason / Symptoms <span className="text-tx-light text-[12px] font-normal">(optional)</span></Label>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your symptoms or reason for visit…"
                  value={form.reason}
                  onChange={(e) => set("reason", e.target.value)}
                  className="w-full border rounded-lg px-4 py-3 text-[14px] text-tx-dark outline-none resize-none"
                  style={{ borderColor: "var(--border)" }}
                />
              </div>

              <StepNav
                onBack={() => setStep(2)}
                onNext={() => setStep(4)}
                nextDisabled={!canNext3}
                nextLabel="Review Appointment →"
              />
            </Card>
          )}

          {/* ── Step 4: Review & Confirm ──────────────── */}
          {step === 4 && (
            <Card title="Review & Confirm">
              <div
                className="rounded-xl border divide-y mb-6"
                style={{ borderColor: "var(--border)", divideColor: "var(--border)" }}
              >
                <ReviewSection title="Appointment">
                  <SummaryRow label="Department" value={selectedDept?.name ?? "—"} />
                  <SummaryRow label="Doctor" value={selectedDoctor?.fullName ?? "First Available"} />
                  <SummaryRow
                    label="Date"
                    value={form.preferredDate
                      ? new Date(form.preferredDate + "T00:00:00").toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long", year: "numeric" })
                      : "—"}
                  />
                  <SummaryRow label="Time" value={form.preferredTime} />
                </ReviewSection>

                <ReviewSection title="Patient">
                  <SummaryRow label="Name" value={form.fullName} />
                  <SummaryRow label="Phone" value={form.phone} />
                  {form.email && <SummaryRow label="Email" value={form.email} />}
                  <SummaryRow label="Gender" value={form.gender} />
                  {form.age && <SummaryRow label="Age" value={`${form.age} years`} />}
                  <SummaryRow label="Patient Type" value={form.isExisting === "existing" ? "Existing Patient" : "New Patient"} />
                  {form.reason && <SummaryRow label="Reason" value={form.reason} />}
                </ReviewSection>
              </div>

              <div
                className="rounded-lg px-4 py-3 text-[13px] mb-6"
                style={{ background: "var(--bg-pale)", color: "var(--tx-mid)" }}
              >
                📞 Our front desk will call you at <strong>{form.phone}</strong> within 2 hours to confirm your appointment slot.
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => setStep(3)}
                  className="flex-1 py-3 rounded-lg border text-[14px] font-semibold transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--tx-mid)" }}
                >
                  ← Edit Details
                </button>
                <button
                  onClick={handleSubmit}
                  className="flex-1 py-3 rounded-lg text-white text-[14px] font-semibold transition-all hover:opacity-90"
                  style={{ background: "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))" }}
                >
                  Confirm Appointment ✓
                </button>
              </div>
            </Card>
          )}

          {/* ── Emergency note ─────────────────────────── */}
          <div
            className="rounded-xl border px-5 py-4 mb-12 flex items-start gap-3"
            style={{ borderColor: "#fecaca", background: "#fff5f5" }}
          >
            <span className="text-[22px] shrink-0">🚨</span>
            <div>
              <p className="text-[13px] font-semibold text-red-700 mb-0.5">Medical Emergency?</p>
              <p className="text-[12.5px] text-red-600/80">
                Do not use this form. Call our 24/7 emergency line immediately:{" "}
                <a href="tel:08212541122" className="font-bold underline">0821-254 1122</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

// ── Sub-components ────────────────────────────────────────────────

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div
      className="rounded-2xl border shadow-sm p-6 sm:p-8 mb-6"
      style={{ borderColor: "var(--border)", background: "white" }}
    >
      <h2
        className="text-[20px] font-bold text-tx-dark mb-6"
        style={{ fontFamily: "var(--font-display)" }}
      >
        {title}
      </h2>
      {children}
    </div>
  );
}

function Label({ children }: { children: React.ReactNode }) {
  return <label className="block text-[13px] font-semibold text-tx-dark mb-2">{children}</label>;
}

function Input({
  placeholder, value, onChange, type = "text",
}: {
  placeholder?: string; value: string; onChange: (v: string) => void; type?: string;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full border rounded-lg px-4 py-3 text-[14px] text-tx-dark outline-none"
      style={{ borderColor: "var(--border)" }}
    />
  );
}

function DoctorOption({
  selected, onClick, name, sub, emoji,
}: {
  selected: boolean; onClick: () => void; name: string; sub: string; emoji: string;
}) {
  return (
    <button
      onClick={onClick}
      className="w-full flex items-start gap-3 px-4 py-3.5 rounded-xl border text-left transition-all"
      style={{
        borderColor: selected ? "var(--mint-dark)" : "var(--border)",
        background: selected ? "var(--bg-pale)" : "white",
      }}
    >
      <span className="text-[20px] shrink-0 mt-0.5">{emoji}</span>
      <div>
        <p className="text-[13.5px] font-semibold text-tx-dark">{name}</p>
        <p className="text-[12px] text-tx-light leading-relaxed">{sub}</p>
      </div>
      <div
        className="ml-auto shrink-0 w-4 h-4 rounded-full border-2 mt-1 transition-all"
        style={{
          borderColor: selected ? "var(--mint-dark)" : "var(--border)",
          background: selected ? "var(--mint-dark)" : "transparent",
        }}
      />
    </button>
  );
}

function StepNav({
  onBack, onNext, nextDisabled, nextLabel,
}: {
  onBack?: () => void; onNext: () => void; nextDisabled: boolean; nextLabel: string;
}) {
  return (
    <div className="flex gap-3 mt-7">
      {onBack && (
        <button
          onClick={onBack}
          className="px-5 py-3 rounded-lg border text-[14px] font-semibold transition-colors"
          style={{ borderColor: "var(--border)", color: "var(--tx-mid)" }}
        >
          ← Back
        </button>
      )}
      <button
        onClick={onNext}
        disabled={nextDisabled}
        className="flex-1 py-3 rounded-lg text-white text-[14px] font-semibold transition-all"
        style={{
          background: nextDisabled
            ? "var(--border)"
            : "linear-gradient(135deg, var(--mint-dark), var(--teal-dark))",
          color: nextDisabled ? "var(--tx-light)" : "white",
          cursor: nextDisabled ? "not-allowed" : "pointer",
        }}
      >
        {nextLabel}
      </button>
    </div>
  );
}

function ReviewSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="px-5 py-4">
      <h4 className="text-[11px] font-semibold uppercase tracking-widest text-tx-light mb-3">{title}</h4>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4 text-[13.5px]">
      <span className="text-tx-light shrink-0">{label}</span>
      <span className="text-tx-dark font-medium text-right">{value}</span>
    </div>
  );
}
