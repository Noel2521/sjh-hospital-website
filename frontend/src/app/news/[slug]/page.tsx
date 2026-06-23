import { notFound } from "next/navigation";
import Link from "next/link";
import EmergencyStrip from "@/components/layout/EmergencyStrip";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { newsEvents } from "@/lib/placeholder-data";

// ── Extended news data (same as listing page) ─────────────────────────────

const EXTENDED_NEWS = [
  ...newsEvents,
  {
    id: "4",
    title: "Free Eye Camp at SJH — 200 Patients Screened",
    slug: "eye-camp-june-2026",
    type: "NEWS" as const,
    excerpt:
      "Our Ophthalmology department conducted a free eye screening camp in collaboration with Lions Club Mysuru. Over 200 patients were examined, and 30 received free cataract surgery.",
    publishedAt: "2026-06-10",
  },
  {
    id: "5",
    title: "Blood Donation Drive — Join Us This Sunday",
    slug: "blood-donation-july-2026",
    type: "EVENT" as const,
    excerpt:
      "St. Joseph's Hospital invites all healthy adults to participate in our blood donation drive. Every unit donated can save up to 3 lives. Refreshments provided.",
    eventDate: "2026-07-20",
  },
  {
    id: "6",
    title: "Diabetes Awareness Walk — World Diabetes Day",
    slug: "diabetes-awareness-walk-2026",
    type: "EVENT" as const,
    excerpt:
      "Join us for a 3km awareness walk around Bannimantap to mark World Diabetes Day. Free blood sugar testing and diet counselling available at the finish line.",
    eventDate: "2026-11-14",
  },
  {
    id: "7",
    title: "SJH Launches 24/7 Tele-Consultation Service",
    slug: "tele-consultation-launch-2026",
    type: "NEWS" as const,
    excerpt:
      "St. Joseph's Hospital has launched a round-the-clock tele-consultation service, allowing patients to consult our specialist doctors from the comfort of their homes.",
    publishedAt: "2026-05-28",
  },
  {
    id: "8",
    title: "Free Orthopaedic Consultation Camp",
    slug: "ortho-camp-august-2026",
    type: "EVENT" as const,
    excerpt:
      "Dr. Rajesh Kumar M. and the Orthopaedics team will conduct a free consultation camp for joint pain, back pain, and sports injuries. No prior appointment needed.",
    eventDate: "2026-08-10",
  },
  {
    id: "9",
    title: "SJH Nursing Staff Win State Excellence Award",
    slug: "nursing-excellence-award-2026",
    type: "NEWS" as const,
    excerpt:
      "The nursing team of St. Joseph's Hospital was honoured with the Karnataka State Nursing Excellence Award 2026 for outstanding patient care and professional standards.",
    publishedAt: "2026-04-15",
  },
];

// ── Full article content ──────────────────────────────────────────────────

const ARTICLE_CONTENT: Record<string, { body: string[]; highlights?: string[]; eventDetails?: { date: string; time: string; venue: string; contact: string } }> = {
  "nabh-accreditation-2026": {
    body: [
      "St. Joseph's Hospital, Bannimantap, Mysuru — a unit of the Catholic Diocese of Mysore — has achieved the prestigious National Accreditation Board for Hospitals & Healthcare Providers (NABH) accreditation, becoming one of the few hospitals in the Mysuru region to receive this distinction.",
      "The NABH accreditation is the gold standard for hospital quality in India, recognising institutions that meet the highest benchmarks in patient safety, clinical care, infection control, facility management, and staff competency. The evaluation involved a rigorous multi-day assessment by NABH surveyors across all departments.",
      "Speaking on the occasion, Hospital Administrator Fr. Thomas Mathew said: \"This accreditation is not just a certificate — it is a reaffirmation of our commitment to every patient who trusts St. Joseph's with their health and wellbeing. It belongs to our entire team — doctors, nurses, and support staff.\"",
      "Chief of Medical Staff Dr. Prof. Manu Prasad S. added that the accreditation process had helped the hospital strengthen its clinical protocols, improve documentation standards, and enhance infection prevention practices. \"Our patients can now be even more confident that they are receiving care that meets national quality standards,\" he said.",
      "St. Joseph's Hospital has been serving the community of Bannimantap and wider Mysuru for over six decades. The NABH accreditation marks a significant milestone in the hospital's quality journey and reflects its continued investment in people, processes, and infrastructure.",
    ],
    highlights: [
      "One of the few NABH-accredited hospitals in Mysuru region",
      "Evaluated across all departments and clinical services",
      "Recognised for patient safety, infection control, and clinical care",
      "Covers OPD, IPD, ICU, surgical, and support services",
    ],
  },
  "cardiac-health-camp-july-2026": {
    body: [
      "St. Joseph's Hospital is organising a Free Cardiac Health Camp on 15th July 2026, open to all residents of Mysuru and surrounding areas. The camp aims to bring preventive cardiac care to the community and help detect heart disease risk factors early.",
      "Cardiovascular disease is the leading cause of death in India, and many cases go undetected until a serious event occurs. This camp is designed to change that — providing free screenings that would normally cost ₹1,500 or more, at no charge.",
      "The camp will be conducted by our Cardiology team, led by experienced cardiac specialists. All screenings will be performed with NABH-standard equipment, and results will be reviewed by a doctor on the same day.",
      "Participants with abnormal results will be given a follow-up consultation appointment at a subsidised rate. Those requiring further investigation will be fast-tracked through our Cardiology OPD.",
      "No registration is required. Participants are requested to come fasting (8 hours) for accurate blood sugar and cholesterol results. Please bring a valid photo ID and any existing medical reports.",
    ],
    highlights: [
      "Free ECG for all participants",
      "Blood pressure measurement (3-point)",
      "Cholesterol & blood sugar screening",
      "BMI & obesity risk assessment",
      "Doctor consultation included",
      "Follow-up for abnormal results",
    ],
    eventDetails: {
      date: "15th July 2026, Sunday",
      time: "8:00 AM – 1:00 PM",
      venue: "St. Joseph's Hospital, Bannimantap, Mysuru – 570015",
      contact: "0821-254 1122",
    },
  },
  "neonatal-care-unit-2026": {
    body: [
      "St. Joseph's Hospital has inaugurated a state-of-the-art Neonatal Intensive Care Unit (NICU), significantly expanding its capacity to care for premature and critically ill newborns. The new unit is equipped with the latest technology to support babies who need specialised medical attention from the moment of birth.",
      "The NICU features 10 beds with individual warmers and incubators, non-invasive ventilation support, continuous pulse oximetry monitoring, phototherapy units for jaundice treatment, and a dedicated paediatrician on-site round the clock.",
      "Hospital Administrator Fr. Thomas Mathew said the new NICU was a long-cherished dream of the hospital's Gynaecology and Paediatrics teams. \"Every baby deserves the best possible start to life. This unit means that high-risk pregnancies and premature births can now be managed entirely within St. Joseph's, without the stress and expense of transfer to another hospital.\"",
      "The unit will work in close coordination with the hospital's Gynaecology & Obstetrics department, which handles over 600 deliveries per year. Mothers in the maternity ward will have easy access to their babies in the NICU, with a dedicated family support area.",
      "The NICU is staffed by trained neonatal nurses who have received specialised training in neonatal care, kangaroo mother care, and infection prevention protocols.",
    ],
    highlights: [
      "10-bed NICU with individual incubators",
      "24/7 paediatrician and neonatal nursing support",
      "Non-invasive ventilator support",
      "Phototherapy for jaundice",
      "Kangaroo mother care programme",
      "Family-centred care design",
    ],
  },
  "eye-camp-june-2026": {
    body: [
      "The Ophthalmology department of St. Joseph's Hospital, in partnership with Lions Club Mysuru, conducted a large-scale free eye screening camp, examining over 200 patients from across the Bannimantap and KRS Road neighbourhoods.",
      "The camp was organised in response to the growing prevalence of uncorrected vision problems, cataracts, and diabetic eye disease in the community. Many patients, particularly the elderly and daily wage workers, cannot afford regular eye care — making outreach programmes like this vital.",
      "Of the 200+ patients screened, 80 were found to have correctable refractive errors and were given free spectacles. 30 patients were diagnosed with cataracts and have been scheduled for free cataract surgery at SJH. 12 patients were found to have early signs of glaucoma and have been enrolled in the hospital's subsidised glaucoma monitoring programme.",
      "Dr. Anitha Rao, Head of Ophthalmology at SJH, said: \"Eye problems are often silent — patients don't realise how much their vision has deteriorated until it is severely impaired. Early detection and treatment can prevent blindness. That is the goal of every camp we run.\"",
      "The hospital plans to conduct quarterly eye camps across different areas of Mysuru and rural Karnataka. Community organisations and RWAs wishing to host a camp may contact the hospital.",
    ],
    highlights: [
      "200+ patients screened",
      "80 patients given free spectacles",
      "30 free cataract surgeries scheduled",
      "12 patients enrolled in glaucoma monitoring",
      "Conducted in partnership with Lions Club Mysuru",
    ],
  },
  "blood-donation-july-2026": {
    body: [
      "St. Joseph's Hospital is organising a Blood Donation Drive on 20th July 2026 and invites all healthy adults between the ages of 18 and 65 to contribute. Blood is a precious resource that cannot be manufactured — only donated — and every unit can save up to three lives.",
      "The hospital's blood bank currently supports emergency surgeries, trauma cases, cancer treatment, and maternity care. Donations collected during this drive will directly benefit patients treated at SJH and partner hospitals in Mysuru.",
      "The donation process is safe, takes approximately 30–45 minutes, and is performed by trained nursing staff under strict sterile protocols. Donors will receive a health check including blood pressure, haemoglobin, and pulse rate before donation.",
      "Refreshments will be provided to all donors. Each donor will receive a blood donation certificate and a complimentary health check report. Donors who wish to be contacted in future donation drives will be added to our voluntary donor registry.",
    ],
    highlights: [
      "Open to healthy adults aged 18–65",
      "Each donation can save up to 3 lives",
      "Free pre-donation health check",
      "Certificate provided to all donors",
      "Refreshments and snacks arranged",
      "Voluntary donor registry sign-up available",
    ],
    eventDetails: {
      date: "20th July 2026, Sunday",
      time: "8:30 AM – 12:30 PM",
      venue: "Ground Floor Lobby, St. Joseph's Hospital, Bannimantap",
      contact: "0821-254 1122",
    },
  },
  "diabetes-awareness-walk-2026": {
    body: [
      "To mark World Diabetes Day on 14th November 2026, St. Joseph's Hospital is organising a 3-kilometre Diabetes Awareness Walk through Bannimantap, Mysuru. The walk aims to spread awareness about diabetes prevention, the importance of physical activity, and healthy eating habits.",
      "India has the second highest number of people with diabetes in the world, and Karnataka is among the states with the highest prevalence. Yet a large proportion of people with diabetes remain undiagnosed or poorly managed. This walk is a step — literally — towards changing that.",
      "At the finish line, participants can avail free blood sugar testing (fasting and random), BMI assessment, and diet counselling sessions conducted by our Endocrinology and Nutrition teams. Patients already diagnosed with diabetes can speak to our specialists about better disease management.",
      "The walk is open to everyone — patients, families, hospital staff, and members of the public. Comfortable walking shoes are recommended. Water and healthy snacks will be provided at the start and finish.",
    ],
    highlights: [
      "3km awareness walk through Bannimantap",
      "Free blood sugar testing at finish line",
      "Free diet counselling session",
      "BMI & diabetes risk assessment",
      "Open to all — no registration required",
      "Healthy snacks & water provided",
    ],
    eventDetails: {
      date: "14th November 2026 — World Diabetes Day",
      time: "6:30 AM – 9:00 AM",
      venue: "Start: SJH Main Gate, Bannimantap, Mysuru",
      contact: "0821-254 1122",
    },
  },
  "tele-consultation-launch-2026": {
    body: [
      "St. Joseph's Hospital has launched a 24/7 Tele-Consultation Service, allowing patients across Mysuru and Karnataka to access specialist consultations from the comfort of their homes. The service is available via phone and video call, and covers 12 specialities.",
      "The tele-consultation service is designed to serve patients who face barriers to in-person visits — including those in rural areas, senior citizens with mobility challenges, working professionals, and patients seeking follow-up care after hospitalisation.",
      "Consultations are available in Kannada, Tamil, Hindi, and English. Patients can book a slot online or by calling the hospital's front desk. A doctor will call at the scheduled time for a private, confidential consultation.",
      "Prescriptions issued during tele-consultations are valid across pharmacies and can be sent digitally to the patient's registered mobile number. Patients requiring in-person investigations or procedures will be referred to the hospital's OPD with priority appointment.",
      "The service is currently available for General Medicine, Gynaecology, Neurology, Orthopaedics, Ophthalmology, ENT, Dermatology, Diabetology, and Paediatrics. Additional specialities will be added over the coming months.",
    ],
    highlights: [
      "24/7 availability — including weekends",
      "Video and phone consultation options",
      "Available in Kannada, Tamil, Hindi, English",
      "Digital prescription to registered mobile",
      "Covers 9 specialities at launch",
      "Priority in-person referral when needed",
    ],
  },
  "ortho-camp-august-2026": {
    body: [
      "The Orthopaedics department of St. Joseph's Hospital will conduct a free consultation camp on 10th August 2026, specifically addressing joint pain, back pain, knee problems, and sports injuries — some of the most common yet undertreated conditions in the region.",
      "The camp will be led by Dr. Rajesh Kumar M. (MBBS, MS Ortho, DNB), one of Mysuru's leading orthopaedic surgeons with 15+ years of experience and over 2,000 joint replacement surgeries to his credit. He will be joined by the hospital's physiotherapy team.",
      "Patients attending the camp will receive a free consultation and physical examination, basic X-ray assessment, physiotherapy evaluation, and advice on conservative and surgical management options. Those requiring further imaging (MRI/CT) or surgery will be offered subsidised rates.",
      "The camp is especially relevant for elderly patients with knee arthritis, working adults with chronic back pain, sportspersons with joint injuries, and post-surgical patients needing rehabilitation guidance.",
    ],
    highlights: [
      "Free consultation with Dr. Rajesh Kumar M.",
      "Joint pain, back pain & knee problems",
      "Sports injury assessment",
      "Physiotherapy evaluation included",
      "Basic X-ray assessment",
      "No prior appointment needed",
    ],
    eventDetails: {
      date: "10th August 2026, Monday",
      time: "9:00 AM – 1:00 PM",
      venue: "Orthopaedics OPD, Ground Floor, SJH, Bannimantap",
      contact: "0821-254 1122",
    },
  },
  "nursing-excellence-award-2026": {
    body: [
      "The nursing team of St. Joseph's Hospital, Mysuru has been honoured with the Karnataka State Nursing Excellence Award 2026, presented by the Karnataka State Nurses Association in recognition of exceptional patient care, professional standards, and community health service.",
      "The award was presented at a state-level ceremony in Bengaluru, attended by the Health Minister of Karnataka and senior officials of the Indian Nursing Council. Director of Nursing Sr. Grace Fernandes received the award on behalf of the 80-member nursing team at SJH.",
      "Sr. Grace Fernandes, speaking after the ceremony, dedicated the award to the patients of SJH. \"Every day, our nurses come to work with one purpose — to make a patient feel cared for, safe, and seen. This award is for every nurse who held a patient's hand through their most difficult moment.\"",
      "Hospital Administrator Fr. Thomas Mathew said the award was a recognition of the hospital's long-standing culture of nursing excellence. \"Our nurses are the backbone of St. Joseph's. Their skill, compassion, and professionalism set SJH apart. We are deeply proud of this honour.\"",
      "The SJH nursing team is known for its specialised training in neonatal care, critical care, infection prevention, and palliative nursing. The team regularly participates in community health camps and outreach programmes across rural Karnataka.",
    ],
    highlights: [
      "Karnataka State Nursing Excellence Award 2026",
      "Presented by Karnataka State Nurses Association",
      "Received by Director of Nursing Sr. Grace Fernandes",
      "80-member nursing team recognised",
      "Specialised in critical care, neonatal care & palliative nursing",
    ],
  },
};

// ── Helpers ───────────────────────────────────────────────────────────────

function formatDate(dateStr: string) {
  return new Date(dateStr + "T00:00:00").toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// ── Page ──────────────────────────────────────────────────────────────────

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return EXTENDED_NEWS.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = EXTENDED_NEWS.find((n) => n.slug === slug);
  if (!item) return {};
  return {
    title: `${item.title} | St. Joseph's Hospital Mysuru`,
    description: item.excerpt,
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = EXTENDED_NEWS.find((n) => n.slug === slug);
  if (!item) notFound();

  const content = ARTICLE_CONTENT[slug];
  const isEvent = item.type === "EVENT";
  const dateStr = isEvent ? item.eventDate! : item.publishedAt!;

  // Related articles (same type, different slug)
  const related = EXTENDED_NEWS.filter(
    (n) => n.slug !== slug && n.type === item.type
  ).slice(0, 3);

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
            <Link href="/news" className="hover:text-mint-dark transition-colors">News &amp; Events</Link>
            <span>/</span>
            <span className="text-tx-dark font-medium line-clamp-1">{item.title}</span>
          </div>
        </div>

        {/* ── Article Hero ──────────────────────────── */}
        <div
          className="relative py-20 px-7 overflow-hidden"
          style={{
            background: isEvent
              ? "linear-gradient(135deg, #2d1b69 0%, #11998e 100%)"
              : "linear-gradient(135deg, var(--bg-dark) 0%, #0a4a42 55%, var(--mint-deep) 100%)",
          }}
        >
          <div className="absolute -top-24 -right-24 w-[500px] h-[500px] rounded-full opacity-[0.04]" style={{ background: "var(--mint)" }} />

          <div className="relative max-w-[860px] mx-auto">
            <div className="flex items-center gap-3 mb-5">
              <span
                className="text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider"
                style={{
                  background: isEvent ? "#f5a623" : "var(--mint-dark)",
                  color: "white",
                }}
              >
                {isEvent ? "📅 Event" : "📰 News"}
              </span>
              <span className="text-[12.5px] text-white/50">
                {isEvent ? `Event Date: ${formatDate(dateStr)}` : `Published: ${formatDate(dateStr)}`}
              </span>
            </div>

            <h1
              className="text-[28px] sm:text-[40px] font-bold text-white mb-5 leading-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              {item.title}
            </h1>

            <p className="text-[16px] text-white/65 leading-[1.85] max-w-[680px]">
              {item.excerpt}
            </p>
          </div>
        </div>

        {/* ── Main content ──────────────────────────── */}
        <div className="max-w-[1180px] mx-auto px-7 py-14 grid grid-cols-1 lg:grid-cols-[1fr_310px] gap-12">

          {/* Left — Article body */}
          <article>
            {/* Event details card */}
            {isEvent && content?.eventDetails && (
              <div
                className="rounded-2xl border p-6 mb-10"
                style={{ borderColor: "var(--border)", background: "var(--bg-pale)" }}
              >
                <h3
                  className="text-[15px] font-bold text-tx-dark mb-5 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="w-6 h-6 rounded-full flex items-center justify-center text-white text-[11px]"
                    style={{ background: "#f5a623" }}
                  >
                    📅
                  </span>
                  Event Details
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { icon: "📅", label: "Date", value: content.eventDetails.date },
                    { icon: "🕐", label: "Time", value: content.eventDetails.time },
                    { icon: "📍", label: "Venue", value: content.eventDetails.venue },
                    { icon: "📞", label: "Contact", value: content.eventDetails.contact },
                  ].map(({ icon, label, value }) => (
                    <div key={label} className="flex items-start gap-3">
                      <span className="text-[16px] shrink-0 mt-0.5">{icon}</span>
                      <div>
                        <p className="text-[10.5px] font-semibold uppercase tracking-wide text-tx-light mb-0.5">{label}</p>
                        <p className="text-[13.5px] font-semibold text-tx-dark">{value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Body paragraphs */}
            {content?.body ? (
              <div className="prose-like space-y-5">
                {content.body.map((para, i) => (
                  <p key={i} className="text-[15.5px] text-tx-light leading-[1.95]">
                    {para}
                  </p>
                ))}
              </div>
            ) : (
              <p className="text-[15px] text-tx-light leading-[1.9]">{item.excerpt}</p>
            )}

            {/* Highlights */}
            {content?.highlights && (
              <div
                className="mt-10 rounded-2xl border p-6"
                style={{ borderColor: "var(--border)", background: "var(--bg-light)" }}
              >
                <h3
                  className="text-[15px] font-bold text-tx-dark mb-4 flex items-center gap-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  <span
                    className="w-1 h-5 rounded-full"
                    style={{ background: "var(--mint-dark)" }}
                  />
                  Key Highlights
                </h3>
                <ul className="space-y-2.5">
                  {content.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3 text-[13.5px] text-tx-mid">
                      <span
                        className="w-5 h-5 rounded-full flex items-center justify-center text-white text-[10px] shrink-0 mt-0.5"
                        style={{ background: "var(--mint-dark)" }}
                      >
                        ✓
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA for events */}
            {isEvent && (
              <div
                className="mt-10 rounded-2xl p-6 text-center"
                style={{
                  background: "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
                }}
              >
                <h3
                  className="text-[18px] font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Join Us at This Event
                </h3>
                <p className="text-[13px] text-white/55 mb-5">
                  No registration required. Just walk in on the day.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link
                    href="/appointment"
                    className="px-6 py-3 rounded-lg text-white text-[13.5px] font-bold transition-all hover:opacity-90"
                    style={{ background: "var(--mint-dark)" }}
                  >
                    Book Appointment
                  </Link>
                  <a
                    href="tel:08212541122"
                    className="px-6 py-3 rounded-lg text-[13.5px] font-semibold"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      color: "rgba(255,255,255,0.7)",
                    }}
                  >
                    📞 0821-254 1122
                  </a>
                </div>
              </div>
            )}

            {/* Back link */}
            <div className="mt-10 pt-6 border-t" style={{ borderColor: "var(--border)" }}>
              <Link
                href="/news"
                className="inline-flex items-center gap-2 text-[13px] font-semibold transition-colors"
                style={{ color: "var(--mint-dark)" }}
              >
                ← Back to News &amp; Events
              </Link>
            </div>
          </article>

          {/* Right sidebar */}
          <aside className="space-y-5">
            {/* Book appointment */}
            <div
              className="rounded-2xl p-6"
              style={{
                background: "linear-gradient(135deg, var(--bg-dark), var(--mint-deep))",
              }}
            >
              <h4
                className="text-[16px] font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book an Appointment
              </h4>
              <p className="text-[12.5px] text-white/50 mb-5 leading-relaxed">
                Consult our specialist doctors at SJH, Bannimantap, Mysuru.
              </p>
              <Link
                href="/appointment"
                className="block w-full py-3 rounded-xl text-white text-[13.5px] font-bold text-center mb-2.5 transition-all hover:opacity-90"
                style={{ background: "var(--mint-dark)" }}
              >
                Book Now
              </Link>
              <a
                href="tel:08212541122"
                className="block w-full py-2.5 rounded-xl text-[12.5px] font-medium text-center"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                📞 0821-254 1122
              </a>
            </div>

            {/* Related articles */}
            {related.length > 0 && (
              <div
                className="rounded-2xl border p-5"
                style={{ borderColor: "var(--border)", background: "white" }}
              >
                <h4
                  className="text-[12.5px] font-bold text-tx-dark uppercase tracking-wide mb-4"
                >
                  More {isEvent ? "Events" : "News"}
                </h4>
                <div className="space-y-4">
                  {related.map((r) => {
                    const rDate = r.type === "EVENT" ? r.eventDate! : r.publishedAt!;
                    return (
                      <Link
                        key={r.id}
                        href={`/news/${r.slug}`}
                        className="group block"
                      >
                        <p className="text-[13px] font-semibold text-tx-dark group-hover:text-mint-dark transition-colors leading-snug mb-1">
                          {r.title}
                        </p>
                        <p className="text-[11.5px] text-tx-light">
                          {new Date(rDate + "T00:00:00").toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </p>
                      </Link>
                    );
                  })}
                </div>
                <Link
                  href="/news"
                  className="block mt-4 pt-4 border-t text-[12px] font-semibold transition-colors"
                  style={{ borderColor: "var(--border)", color: "var(--mint-dark)" }}
                >
                  View all news &amp; events →
                </Link>
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
                  24/7:{" "}
                  <a href="tel:08212541122" className="font-bold underline">
                    0821-254 1122
                  </a>
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
