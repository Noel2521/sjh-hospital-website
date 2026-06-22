export interface Doctor {
  id: string;
  fullName: string;
  slug: string;
  designation?: string;
  specialisation: string;
  departmentName: string;
  qualifications?: string;
  experienceYears?: number;
  photoUrl?: string;
  bio?: string;
  availableDays: string[];
  consultationTime?: string;
}

export interface Department {
  id: string;
  name: string;
  slug: string;
  description?: string;
  iconEmoji?: string;
  bannerUrl?: string;
}

export interface NewsEvent {
  id: string;
  title: string;
  slug: string;
  type: "NEWS" | "EVENT";
  excerpt?: string;
  coverImageUrl?: string;
  eventDate?: string;
  publishedAt?: string;
}

export interface Banner {
  id: string;
  title?: string;
  subtitle?: string;
  imageUrl: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface Testimonial {
  id: string;
  patientName: string;
  patientLocation: string;
  quote: string;
  rating: number;
  category: string;
}

export interface AppointmentFormData {
  patientName: string;
  patientPhone: string;
  patientEmail?: string;
  patientAge?: number;
  patientGender?: "MALE" | "FEMALE" | "OTHER";
  departmentId: string;
  doctorId?: string;
  appointmentDate: string;
  preferredTime?: string;
  reason?: string;
}
