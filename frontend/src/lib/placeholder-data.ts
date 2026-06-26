// ════════════════════════════════════════════
// PLACEHOLDER DATA
// This file simulates what the NestJS API will return.
// Once the backend is connected, replace these with real
// fetch() calls — see src/lib/api.ts for the pattern to follow.
// ════════════════════════════════════════════

import type { Doctor, Department, NewsEvent, Testimonial, GalleryEvent } from "@/types";

export const departments: Department[] = [
  { id: "1", name: "Emergency, ICU & Trauma", slug: "emergency", iconEmoji: "🚑" },
  { id: "2", name: "Urology", slug: "urology", iconEmoji: "💧" },
  { id: "3", name: "Neurology & Neurosurgery", slug: "neurology", iconEmoji: "🧠" },
  { id: "4", name: "Gynecology & Obstetrics", slug: "gynecology", iconEmoji: "🍼" },
  { id: "5", name: "Ear, Nose & Throat", slug: "ent", iconEmoji: "👂" },
  { id: "6", name: "Nephrology & Dialysis", slug: "nephrology", iconEmoji: "🫘" },
  { id: "7", name: "Orthopedics & Sports Medicine", slug: "orthopedics", iconEmoji: "🦴" },
  { id: "8", name: "General Medicine", slug: "general-medicine", iconEmoji: "🩹" },
  { id: "9", name: "Dermatology", slug: "dermatology", iconEmoji: "🩺" },
  { id: "10", name: "Faciomaxillary Surgery & Cleft", slug: "faciomaxillary-cleft", iconEmoji: "🦷" },
  { id: "11", name: "Endoscopy", slug: "endoscopy", iconEmoji: "🔬" },
  { id: "12", name: "General Laparoscopy", slug: "laparoscopy", iconEmoji: "🩻" },
  { id: "13", name: "Pediatrics", slug: "pediatrics", iconEmoji: "🧒" },
  { id: "14", name: "Plastic Surgery", slug: "plastic-surgery", iconEmoji: "✨" },
  { id: "15", name: "ECG", slug: "ecg", iconEmoji: "💓" },
  { id: "16", name: "General Surgery", slug: "general-surgery", iconEmoji: "🔪" },
  { id: "17", name: "Dental Surgery", slug: "dental-surgery", iconEmoji: "🦷" },
  { id: "18", name: "Resident Doctor", slug: "resident-doctors", iconEmoji: "🩻" },
  { id: "19", name: "Intensivists", slug: "intensivists", iconEmoji: "🫧" },
  { id: "20", name: "CMO", slug: "cmo", iconEmoji: "🏥" },
  { id: "21", name: "Psychiatrist", slug: "psychiatry", iconEmoji: "🧩" },
  { id: "22", name: "Surgical Oncologist", slug: "surgical-oncology", iconEmoji: "🎗️" },
  { id: "23", name: "Cardiology", slug: "cardiology", iconEmoji: "❤️" },
  { id: "24", name: "Ultrasound, CT Scan, X-Ray", slug: "imaging", iconEmoji: "🩻" },
];

export const doctors: Doctor[] = [
  // ── Urology ──────────────────────────────────────────
  {
    id: "1",
    fullName: "Dr. Xavier Assissi D'Souza",
    slug: "xavier-assissi-dsouza",
    designation: "Medical Superintendent",
    specialisation: "Consultant Urology",
    departmentName: "Urology",
    qualifications: "MBBS, MS, MCh",
  },
  {
    id: "2",
    fullName: "Dr. Prasad H.L.",
    slug: "prasad-hl",
    specialisation: "Consultant Urology",
    departmentName: "Urology",
    qualifications: "MBBS, MS (Gen. Surg), MCh (Urology)",
  },

  // ── General Medicine ─────────────────────────────────
  {
    id: "3",
    fullName: "Dr. Ramakrishna G",
    slug: "ramakrishna-g",
    specialisation: "Consultant General Physician",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD",
  },
  {
    id: "4",
    fullName: "Dr. Chandrashekar P",
    slug: "chandrashekar-p",
    specialisation: "Consultant General Physician",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD, MRCP, FRCP (Glasgow)",
  },
  {
    id: "5",
    fullName: "Dr. Uttamanand",
    slug: "uttamanand",
    specialisation: "Consultant General Physician",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD, FGID",
  },

  // ── Resident Doctors ─────────────────────────────────
  {
    id: "6",
    fullName: "Dr. Helen Jayadevi",
    slug: "helen-jayadevi",
    specialisation: "Resident Doctor",
    departmentName: "Resident Doctor",
    qualifications: "MBBS",
  },
  {
    id: "7",
    fullName: "Dr. Anitha D'Coasta",
    slug: "anitha-dcoasta",
    specialisation: "Resident Doctor",
    departmentName: "Resident Doctor",
    qualifications: "MBBS",
  },
  {
    id: "8",
    fullName: "Dr. Seema Akhtar",
    slug: "seema-akhtar",
    specialisation: "Resident Doctor",
    departmentName: "Resident Doctor",
    qualifications: "MBBS",
  },
  {
    id: "9",
    fullName: "Dr. Melinda Rekha",
    slug: "melinda-rekha",
    specialisation: "Resident Doctor",
    departmentName: "Resident Doctor",
    qualifications: "MBBS",
  },

  // ── Intensivists ──────────────────────────────────────
  {
    id: "10",
    fullName: "Dr. A. Manjunath",
    slug: "a-manjunath",
    specialisation: "Intensivist",
    departmentName: "Intensivists",
    qualifications: "MBBS, MD, IDCCM",
  },
  {
    id: "11",
    fullName: "Dr. A. Chennabasappa",
    slug: "a-chennabasappa",
    specialisation: "Intensivist",
    departmentName: "Intensivists",
    qualifications: "MBBS, MD, IDCCM",
  },
  {
    id: "12",
    fullName: "Dr. Jayaram",
    slug: "jayaram",
    specialisation: "Intensivist",
    departmentName: "Intensivists",
    qualifications: "MBBS, MD, DNB",
  },

  // ── CMO ───────────────────────────────────────────────
  {
    id: "13",
    fullName: "Dr. Manjunath D G",
    slug: "manjunath-d-g",
    specialisation: "Chief Medical Officer",
    departmentName: "CMO",
    qualifications: "MBBS",
  },

  // ── Psychiatrist ──────────────────────────────────────
  {
    id: "14",
    fullName: "Dr. Narendra Kumar",
    slug: "narendra-kumar",
    specialisation: "Consultant Psychiatrist",
    departmentName: "Psychiatrist",
    qualifications: "MBBS, DCM, DND, Psycho",
  },

  // ── Neurology & Neurosurgery ──────────────────────────
  {
    id: "15",
    fullName: "Dr. Mohammed Athaulla Shariff",
    slug: "athaulla-shariff",
    specialisation: "Consultant Neurology & Neuro Surgery",
    departmentName: "Neurology & Neurosurgery",
    qualifications: "MBBS, MD, DM",
  },
  {
    id: "16",
    fullName: "Dr. Punith",
    slug: "punith",
    specialisation: "Consultant Neurosurgery",
    departmentName: "Neurology & Neurosurgery",
    qualifications: "MBBS, MS, MCh (Neuro Surgery)",
  },

  // ── Dermatology ───────────────────────────────────────
  {
    id: "17",
    fullName: "Dr. Pujith",
    slug: "pujith",
    specialisation: "Consultant Dermatologist",
    departmentName: "Dermatology",
    qualifications: "MBBS, DNB",
  },

  // ── General Surgery ───────────────────────────────────
  {
    id: "18",
    fullName: "Dr. Ganesh P S",
    slug: "ganesh-p-s",
    specialisation: "Consultant General Surgeon",
    departmentName: "General Surgery",
    qualifications: "MBBS, MS, FIAGES",
  },
  {
    id: "19",
    fullName: "Dr. Syed Mohammed Ayaz",
    slug: "syed-mohammed-ayaz",
    specialisation: "Consultant General Surgeon",
    departmentName: "General Surgery",
    qualifications: "MBBS, MSN FMS, FIAGES",
  },

  // ── Faciomaxillary Surgery & Cleft ────────────────────
  {
    id: "20",
    fullName: "Dr. Manu Prasad S",
    slug: "manu-prasad-s",
    specialisation: "Consultant Faciomaxillary Surgery",
    departmentName: "Faciomaxillary Surgery & Cleft",
    qualifications: "MDS, FCCS, FHTS, MBA, PGDMLS, PGDHIM",
  },
  {
    id: "21",
    fullName: "Dr. Namitha",
    slug: "namitha",
    specialisation: "Consultant Faciomaxillary Surgery",
    departmentName: "Faciomaxillary Surgery & Cleft",
    qualifications: "BDS, MDS (OMFS), FCLCP",
  },

  // ── Plastic Surgery ───────────────────────────────────
  {
    id: "22",
    fullName: "Dr. Sunil Kumar M",
    slug: "sunil-kumar-m",
    specialisation: "Consultant Plastic Surgery",
    departmentName: "Plastic Surgery",
    qualifications: "MBBS, MS, MCh",
  },

  // ── Surgical Oncologist ───────────────────────────────
  {
    id: "23",
    fullName: "Dr. Kiran Shankar",
    slug: "kiran-shankar",
    specialisation: "Consultant Surgical Oncologist",
    departmentName: "Surgical Oncologist",
    qualifications: "MBBS, MS, DNB (General Surgery), MRCS Ed., UICC Fellow (Germany)",
  },

  // ── Cardiology ────────────────────────────────────────
  {
    id: "24",
    fullName: "Dr. Harsha M M",
    slug: "harsha-m-m",
    specialisation: "Consultant Cardiologist",
    departmentName: "Cardiology",
    qualifications: "MD, DM (Cardiology)",
  },

  // ── Gynecology & Obstetrics ───────────────────────────
  {
    id: "25",
    fullName: "Dr. Noor Farhana",
    slug: "noor-farhana",
    specialisation: "Consultant Obstetrics & Gynecology",
    departmentName: "Gynecology & Obstetrics",
    qualifications: "MBBS, DGO",
  },

  // ── Pediatrics ────────────────────────────────────────
  {
    id: "26",
    fullName: "Dr. Panchaksharaia",
    slug: "panchaksharaia",
    specialisation: "Consultant Pediatrician",
    departmentName: "Pediatrics",
    qualifications: "MBBS, MD (Pediatrics)",
  },
  {
    id: "27",
    fullName: "Dr. Akbar Baig",
    slug: "akbar-baig",
    specialisation: "Consultant Pediatrician",
    departmentName: "Pediatrics",
    qualifications: "MBBS, DNB (Pediatrics)",
  },
  {
    id: "28",
    fullName: "Dr. Mohammed Musaib Taha",
    slug: "mohammed-musaib-taha",
    specialisation: "Consultant Pediatrician",
    departmentName: "Pediatrics",
    qualifications: "MBBS, MD (Pediatrics)",
  },

  // ── ENT ───────────────────────────────────────────────
  {
    id: "29",
    fullName: "Dr. Praveen Kumar R",
    slug: "praveen-kumar-r",
    specialisation: "Consultant ENT Surgeon",
    departmentName: "Ear, Nose & Throat",
    qualifications: "MBBS, MS",
  },

  // ── Orthopedics ───────────────────────────────────────
  {
    id: "30",
    fullName: "Dr. Kumar P S",
    slug: "kumar-p-s",
    specialisation: "Consultant Orthopedics Surgeon",
    departmentName: "Orthopedics & Sports Medicine",
    qualifications: "MBBS, MS (Orthopedics)",
  },

  // ── Dental Surgery ────────────────────────────────────
  {
    id: "31",
    fullName: "Dr. Nithin Raj",
    slug: "nithin-raj",
    specialisation: "Consultant Dental Surgery",
    departmentName: "Dental Surgery",
    qualifications: "BDS",
  },
  {
    id: "32",
    fullName: "Dr. Anchila Vincent",
    slug: "anchila-vincent",
    specialisation: "Consultant Dental Surgery",
    departmentName: "Dental Surgery",
    qualifications: "BDS",
  },

  // ── Ultrasound, CT Scan, X-Ray ────────────────────────
  {
    id: "33",
    fullName: "Dr. Nishanth",
    slug: "nishanth",
    specialisation: "Consultant Radiologist",
    departmentName: "Ultrasound, CT Scan, X-Ray",
    qualifications: "MBBS, MD (Radiology)",
  },
  {
    id: "34",
    fullName: "Dr. Sanjay",
    slug: "sanjay",
    specialisation: "Consultant Radiologist",
    departmentName: "Ultrasound, CT Scan, X-Ray",
    qualifications: "MBBS, MD (Radiology)",
  },
  {
    id: "35",
    fullName: "Ms. Prateeksha",
    slug: "prateeksha",
    specialisation: "Audiologist",
    departmentName: "Ultrasound, CT Scan, X-Ray",
    qualifications: "BASLP",
  },
];

export const newsEvents: NewsEvent[] = [
  {
    id: "1",
    title: "St. Joseph's Hospital Achieves NABH Accreditation",
    slug: "nabh-accreditation-2026",
    type: "NEWS",
    excerpt:
      "SJH Mysuru becomes one of the few hospitals in the region to receive the prestigious NABH accreditation, reaffirming our commitment to quality and patient safety.",
    publishedAt: "2026-06-01",
  },
  {
    id: "2",
    title: "Free Cardiac Health Camp",
    slug: "cardiac-health-camp-july-2026",
    type: "EVENT",
    excerpt: "Open to all Mysuru residents. ECG, BP, and cholesterol screening. No registration needed.",
    eventDate: "2026-07-15",
  },
  {
    id: "3",
    title: "New Neonatal Care Unit Inaugurated",
    slug: "neonatal-care-unit-2026",
    type: "NEWS",
    excerpt: "A state-of-the-art NICU has been added to serve premature and critically ill newborns.",
    publishedAt: "2026-05-10",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    patientName: "Ramesh Kumar",
    patientLocation: "Orthopedic Surgery Patient, Mysuru",
    quote:
      "The care I received at St. Joseph's after my knee surgery was exceptional. The doctors and nursing team were attentive, compassionate, and professional throughout.",
    rating: 5,
    category: "Orthopedics",
  },
  {
    id: "2",
    patientName: "Sunita Patil",
    patientLocation: "Maternity Care Patient, Hunsur",
    quote:
      "I delivered my baby at SJH and the gynecology team made every step feel safe and supported during a very emotional time.",
    rating: 5,
    category: "Gynecology",
  },
  {
    id: "3",
    patientName: "Arjun Joseph",
    patientLocation: "Emergency & Trauma Care, Mysuru",
    quote:
      "My father was brought in unconscious after a road accident. The emergency team acted immediately. He is fully recovered today, and we owe it to SJH's trauma unit.",
    rating: 5,
    category: "Emergency",
  },
  {
    id: "4",
    patientName: "Meera Nair",
    patientLocation: "Dialysis Patient's Daughter, Mysuru",
    quote:
      "The dialysis unit at SJH is clean, well-maintained, and the staff treat every patient with genuine warmth. My mother feels completely at home here.",
    rating: 5,
    category: "Nephrology",
  },
  {
    id: "5",
    patientName: "Girija Venkatesh",
    patientLocation: "Ophthalmology Patient, Mysuru",
    quote:
      "After years of eye problems, the team at SJH Ophthalmology gave me my vision back. The cataract surgery was quick, painless, and the follow-up care was thorough.",
    rating: 5,
    category: "Ophthalmology",
  },
];

export const heroSlides = [
  { id: 1, image: "/images/hero1.png", tagline: "Compassionate Care. Serving with Excellence." },
  { id: 2, image: "/images/hero2.png", tagline: "Your Health, Our Mission. Every Day." },
  { id: 3, image: "/images/hero3.png", tagline: "Trusted Care for Every Member of Your Family." },
  { id: 4, image: "/images/hero4.png", tagline: "Advanced Medicine. A Warm, Caring Touch." },
];

export const galleryEvents: GalleryEvent[] = [
  {
    id: "1",
    title: "NABH Accreditation Ceremony",
    slug: "nabh-accreditation-ceremony",
    date: "2026-06-01",
    description:
      "Celebrating St. Joseph's Hospital officially receiving NABH accreditation — a recognition of our commitment to quality and patient safety.",
    coverImageUrl: "/images/gallery/nabh-accreditation-ceremony/cover.jpg",
    photos: [
      { id: "1", url: "/images/gallery/nabh-accreditation-ceremony/photo-1.jpg" },
      { id: "2", url: "/images/gallery/nabh-accreditation-ceremony/photo-2.jpg" },
      { id: "3", url: "/images/gallery/nabh-accreditation-ceremony/photo-3.jpg" },
      { id: "4", url: "/images/gallery/nabh-accreditation-ceremony/photo-4.jpg" },
    ],
  },
  {
    id: "2",
    title: "Free Cardiac Health Camp",
    slug: "free-cardiac-health-camp",
    date: "2026-07-15",
    description:
      "ECG, blood pressure, and cholesterol screening offered free to the Mysuru community at our annual cardiac health camp.",
    coverImageUrl: "/images/gallery/free-cardiac-health-camp/cover.jpg",
    photos: [
      { id: "1", url: "/images/gallery/free-cardiac-health-camp/photo-1.jpg" },
      { id: "2", url: "/images/gallery/free-cardiac-health-camp/photo-2.jpg" },
      { id: "3", url: "/images/gallery/free-cardiac-health-camp/photo-3.jpg" },
    ],
  },
  {
    id: "3",
    title: "New Neonatal Care Unit Inauguration",
    slug: "neonatal-care-unit-inauguration",
    date: "2026-05-10",
    description:
      "The opening of our state-of-the-art NICU, built to care for premature and critically ill newborns.",
    coverImageUrl: "/images/gallery/neonatal-care-unit-inauguration/cover.jpg",
    photos: [
      { id: "1", url: "/images/gallery/neonatal-care-unit-inauguration/photo-1.jpg" },
      { id: "2", url: "/images/gallery/neonatal-care-unit-inauguration/photo-2.jpg" },
      { id: "3", url: "/images/gallery/neonatal-care-unit-inauguration/photo-3.jpg" },
      { id: "4", url: "/images/gallery/neonatal-care-unit-inauguration/photo-4.jpg" },
      { id: "5", url: "/images/gallery/neonatal-care-unit-inauguration/photo-5.jpg" },
    ],
  },
  {
    id: "4",
    title: "Free Eye Camp with Lions Club Mysuru",
    slug: "free-eye-camp-lions-club",
    date: "2026-06-10",
    description:
      "Over 200 patients screened and 30 free cataract surgeries performed in partnership with Lions Club Mysuru.",
    coverImageUrl: "/images/gallery/free-eye-camp-lions-club/cover.jpg",
    photos: [
      { id: "1", url: "/images/gallery/free-eye-camp-lions-club/photo-1.jpg" },
      { id: "2", url: "/images/gallery/free-eye-camp-lions-club/photo-2.jpg" },
      { id: "3", url: "/images/gallery/free-eye-camp-lions-club/photo-3.jpg" },
    ],
  },
  {
    id: "5",
    title: "Blood Donation Drive",
    slug: "blood-donation-drive",
    date: "2026-07-20",
    description:
      "Hospital staff and the Mysuru community come together for our quarterly blood donation drive.",
    coverImageUrl: "/images/gallery/blood-donation-drive/cover.jpg",
    photos: [
      { id: "1", url: "/images/gallery/blood-donation-drive/photo-1.jpg" },
      { id: "2", url: "/images/gallery/blood-donation-drive/photo-2.jpg" },
    ],
  },
];