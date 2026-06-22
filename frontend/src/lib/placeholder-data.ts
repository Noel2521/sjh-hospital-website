// ════════════════════════════════════════════
// PLACEHOLDER DATA
// This file simulates what the NestJS API will return.
// Once the backend is connected, replace these with real
// fetch() calls — see src/lib/api.ts for the pattern to follow.
// ════════════════════════════════════════════

import type { Doctor, Department, NewsEvent, Testimonial } from "@/types";

export const departments: Department[] = [
  { id: "1", name: "Orthopedics & Sports Medicine", slug: "orthopedics", iconEmoji: "🦴" },
  { id: "2", name: "Neurology & Neurosurgery", slug: "neurology", iconEmoji: "🧠" },
  { id: "3", name: "Gynecology & Obstetrics", slug: "gynecology", iconEmoji: "🍼" },
  { id: "4", name: "Ophthalmology", slug: "ophthalmology", iconEmoji: "👁️" },
  { id: "5", name: "Cancer Surgery & Oncology", slug: "oncology", iconEmoji: "🫁" },
  { id: "6", name: "Ear, Nose & Throat", slug: "ent", iconEmoji: "👂" },
  { id: "7", name: "Nephrology & Dialysis", slug: "nephrology", iconEmoji: "🫘" },
  { id: "8", name: "Emergency, ICU & Trauma", slug: "emergency", iconEmoji: "🚑" },
  { id: "9", name: "Laparoscopic Surgery", slug: "laparoscopy", iconEmoji: "🔬" },
  { id: "10", name: "Physiotherapy", slug: "physiotherapy", iconEmoji: "🏃" },
  { id: "11", name: "Dermatology", slug: "dermatology", iconEmoji: "🩺" },
  { id: "12", name: "General Medicine", slug: "general-medicine", iconEmoji: "🩹" },
];

export const doctors: Doctor[] = [
  {
    id: "1",
    fullName: "Dr. Prof. Manu Prasad S.",
    slug: "manu-prasad",
    specialisation: "Neurology & Neurosurgery",
    departmentName: "Neurology",
    qualifications: "MBBS, MD (Neurology), FRCP",
    experienceYears: 22,
    availableDays: ["Monday", "Wednesday", "Friday"],
    consultationTime: "10:00 AM – 1:00 PM",
  },
  {
    id: "2",
    fullName: "Dr. Sr. Maria Theresa",
    slug: "maria-theresa",
    specialisation: "Gynecology & Obstetrics",
    departmentName: "Gynecology",
    qualifications: "MBBS, MS (OBG)",
    experienceYears: 18,
    availableDays: ["Tuesday", "Thursday", "Saturday"],
    consultationTime: "9:00 AM – 12:00 PM",
  },
  {
    id: "3",
    fullName: "Dr. Rajesh Kumar M.",
    slug: "rajesh-kumar",
    specialisation: "Orthopedics & Joint Replacement",
    departmentName: "Orthopedics",
    qualifications: "MBBS, MS (Ortho), DNB",
    experienceYears: 15,
    availableDays: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    consultationTime: "11:00 AM – 2:00 PM",
  },
  {
    id: "4",
    fullName: "Dr. Anitha Rao",
    slug: "anitha-rao",
    specialisation: "Ophthalmology & Eye Surgery",
    departmentName: "Ophthalmology",
    qualifications: "MBBS, MS (Ophthalmology)",
    experienceYears: 12,
    availableDays: ["Monday", "Tuesday", "Thursday"],
    consultationTime: "10:00 AM – 1:00 PM",
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
  { id: 1, image: "/images/hero1.jpg", tagline: "Healing with Compassion. Serving with Excellence." },
  { id: 2, image: "/images/hero2.jpg", tagline: "Your Health, Our Mission. Every Day." },
  { id: 3, image: "/images/hero3.jpg", tagline: "Trusted Care for Every Member of Your Family." },
  { id: 4, image: "/images/hero4.jpg", tagline: "Advanced Medicine. A Warm, Caring Touch." },
];
