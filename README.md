# St. Joseph's Hospital — Website & Patient Portal

**Bannimantap, Mysuru** · Official website, content management system, and online appointment booking.

This repository is owned and operated by **St. Joseph's Hospital** (hospital GitHub organization account — not a personal account). Billing/financial operations are handled by a separate internal application and are out of scope here.

---

## 📁 Repository Structure

```
sjh-hospital-website/
├── frontend/          → Next.js 14 (React, TypeScript, Tailwind CSS)
├── backend/           → NestJS API (TypeScript, Prisma, PostgreSQL)
├── database/          → Prisma schema, migrations, seed data
├── docs/              → Roadmap, design system, deployment guides
└── .github/workflows/ → CI/CD (auto-deploy on push)
```

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Frontend | Next.js 14 (App Router), React 18, TypeScript, Tailwind CSS |
| Backend | NestJS, TypeScript, Prisma ORM |
| Database | PostgreSQL |
| Auth | JWT (admin-only login) |
| Image storage | Cloudinary |
| Email | Resend |
| AI features | Anthropic Claude API (patient chatbot + admin content assist) |
| Hosting (frontend) | Vercel |
| Hosting (backend + DB) | Railway |

## 🔐 Access Control

- **Public visitors**: view-only — browse doctors, departments, news, book appointments
- **Admin** (hospital staff, logged in): full CMS access — manage doctors, departments, news, banners, gallery, appointments, careers, patient forms, site settings

## 🤖 AI Features (Planned)

1. **Patient-facing chatbot** — Helps visitors find the right department based on symptoms described in plain language, answers FAQs about visiting hours, parking, insurance, etc. Does **not** give medical diagnoses — only routes patients to the right department/doctor.
2. **Admin content assist** — Inside the dashboard, helps staff draft news/event posts from bullet points, and generates a daily/weekly plain-English summary of new appointments.

Both use the Anthropic Claude API and are documented in `docs/ai-features.md`.

## 🏁 Getting Started

See `docs/SETUP.md` for full step-by-step instructions (GitHub setup, local dev, environment variables, deployment).

Quick start:
```bash
# Frontend
cd frontend
npm install
npm run dev          # http://localhost:3000

# Backend
cd backend
npm install
npm run start:dev    # http://localhost:4000
```

## 📋 Project Roadmap

See `docs/ROADMAP.md` for the full phased build plan, database schema, and deployment strategy.

---

© 2026 St. Joseph's Hospital, Bannimantap, Mysuru — Catholic Diocese of Mysore
