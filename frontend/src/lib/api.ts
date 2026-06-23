// ════════════════════════════════════════════
// API CLIENT
// All calls to the NestJS backend go through here.
// Set NEXT_PUBLIC_API_URL in .env.local once the
// backend is deployed (see backend/README.md).
// ════════════════════════════════════════════

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

async function apiFetch<T>(path: string, options: RequestInit = {}): Promise<T> {
  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
  });

  if (!res.ok) {
    const errorBody = await res.text();
    throw new Error(`API error ${res.status}: ${errorBody}`);
  }

  return res.json();
}

// ── Public endpoints ──
export const api = {
  getDoctors: () => apiFetch("/doctors"),
  getDoctor: (slug: string) => apiFetch(`/doctors/${slug}`),
  getDepartments: () => apiFetch("/departments"),
  getDepartment: (slug: string) => apiFetch(`/departments/${slug}`),
  getNews: () => apiFetch("/news-events"),
  getBanners: () => apiFetch("/banners"),
  getHealthPackages: () => apiFetch("/health-packages"),
  getGallery: () => apiFetch("/gallery"),
  getCareers: () => apiFetch("/careers"),
  getPatientForms: () => apiFetch("/patient-forms"),
  getSiteSettings: () => apiFetch("/site-settings"),

  bookAppointment: (data: unknown) =>
    apiFetch("/appointments", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  // ── AI chatbot endpoint ──
  askChatbot: (message: string, conversationId?: string) =>
    apiFetch("/ai/chat", {
      method: "POST",
      body: JSON.stringify({ message, conversationId }),
    }),

  // ── Admin endpoints (require auth token) ──
  adminLogin: (email: string, password: string) =>
    apiFetch("/auth/login", {
      method: "POST",
      body: JSON.stringify({ email, password }),
    }),
};
