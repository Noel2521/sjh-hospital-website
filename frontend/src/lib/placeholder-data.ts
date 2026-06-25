// ════════════════════════════════════════════
// PLACEHOLDER DATA
// This file simulates what the NestJS API will return.
// Once the backend is connected, replace these with real
// fetch() calls — see src/lib/api.ts for the pattern to follow.
// ════════════════════════════════════════════

import type { Doctor, Department, NewsEvent, Testimonial } from "@/types";

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
];

export const doctors: Doctor[] = [
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
    fullName: "Dr. Chandrashekar P",
    slug: "chandrashekar-p",
    specialisation: "Consultant General Physician",
    departmentName: "General Medicine",
    qualifications: "MBBS, MD, MRCP, FRCP (Glasgow)",
  },
  {
    id: "3",
    fullName: "Dr. Ganesh P S",
    slug: "ganesh-p-s",
    specialisation: "Consultant General Surgeon",
    departmentName: "General Surgery",
    qualifications: "MBBS, MS, FIAGES",
  },
  {
    id: "4",
    fullName: "Dr. Kumar P S",
    slug: "kumar-p-s",
    specialisation: "Consultant Orthopedics Surgeon",
    departmentName: "Orthopedics",
    qualifications: "MBBS, MS (Orthopedics)",
  },
  {
    id: "5",
    fullName: "Dr. Nithin Raj",
    slug: "nithin-raj",
    specialisation: "Consultant Dental Surgery",
    departmentName: "Dental Surgery",
    qualifications: "BDS",
  },
   {
    id: "6",
    fullName: "Dr. Sunil Kumar M",
    slug: "sunil-kumar",
    specialisation: "Consultant Plastic Surgery",
    departmentName: "Plastic Surgery",
    qualifications: "MBBS, MS, M.Ch.",
  },
   {
    id: "7",
    fullName: "Dr. Manu Prasad S",
    slug: "manu-prasas",
    specialisation: "Consultant Faciomaxillary Surgery",
    departmentName: "Faciomaxillary Surgery",
    qualifications: "MDS, FCCS, FHTS, MBA, PGDMLS, PGDHIM",
  },
   {
    id: "8",
    fullName: "Dr.Mohammed Athaulla Shariff",
    slug: "Athaulla-shariff",
    specialisation: "Consultant Neurology & Neuro Surgery",
    departmentName: "Neurology & Neuro Surgery",
    qualifications: "MBBS, MD, DM",
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
