# St. Joseph's Hospital — Complete Setup Guide
**From VS Code → GitHub → Live Website**

---

## BEFORE YOU START — Create Hospital Accounts

All accounts must be created with the **hospital's official email** (e.g. `admin@sjhmysuru.com`).
Do NOT use a personal email for any of these.

| Service | URL | Purpose |
|---|---|---|
| GitHub | github.com | Code repository |
| Vercel | vercel.com | Frontend hosting (Next.js) |
| Railway | railway.app | Backend hosting + PostgreSQL |
| Cloudinary | cloudinary.com | Doctor photos, gallery images |
| Resend | resend.com | Appointment confirmation emails |
| Anthropic | console.anthropic.com | AI chatbot API key |
| Google Cloud | console.cloud.google.com | Maps embed on contact page |

---

## STEP 1 — Install Required Software (one-time)

Open a terminal (Command Prompt or PowerShell on Windows, Terminal on Mac) and run:

```bash
# Check Node.js is installed (need version 18 or higher)
node --version

# If not installed, download from https://nodejs.org (LTS version)

# Install Git
# Download from https://git-scm.com/downloads

# Verify Git
git --version
```

In VS Code, install these extensions:
- **ESLint** — code linting
- **Prettier** — code formatting
- **Prisma** — database schema syntax highlighting
- **Tailwind CSS IntelliSense** — autocomplete for Tailwind classes
- **GitLens** — GitHub integration

---

## STEP 2 — Create GitHub Organisation & Repository

1. Go to **github.com** and log in with the hospital email
2. Click your profile picture → **Your organizations** → **New organization**
3. Name it: `sjh-mysuru` (or `stjosephs-hospital-mysuru`)
4. Choose the **Free** plan
5. Now create a new repository:
   - Go to the organization page
   - Click **New repository**
   - Name: `sjh-hospital-website`
   - Set to **Private** (important — code is proprietary)
   - Do NOT initialise with README (we already have our code)
   - Click **Create repository**

---

## STEP 3 — Push the Code to GitHub

Open VS Code. Go to **File → Open Folder** and open the `sjh-hospital-website` folder.

Open the VS Code terminal (**Terminal → New Terminal**) and run:

```bash
# Navigate to the project root
cd path/to/sjh-hospital-website

# Initialise Git
git init

# Add all files
git add .

# First commit
git commit -m "feat: initial project setup — Next.js frontend + NestJS backend"

# Connect to your GitHub repository
# Replace YOUR-ORG with your org name (e.g. sjh-mysuru)
git remote add origin https://github.com/YOUR-ORG/sjh-hospital-website.git

# Push to GitHub
git push -u origin main
```

---

## STEP 4 — Set Up the Database (Railway)

1. Go to **railway.app** and sign in with the hospital GitHub account
2. Click **New Project** → **Provision PostgreSQL**
3. Once created, click the PostgreSQL service → **Variables** tab
4. Copy the `DATABASE_URL` value — you'll need it shortly
5. Click **New Service** → **GitHub Repo** → select `sjh-hospital-website`
6. Set the **Root Directory** to `backend`
7. Railway will auto-detect it's a Node.js app

---

## STEP 5 — Configure Backend Environment Variables (Railway)

In Railway, click your backend service → **Variables** → add each of these:

```
DATABASE_URL        = (paste the PostgreSQL URL from Step 4)
JWT_SECRET          = (run: node -e "console.log(require('crypto').randomBytes(32).toString('hex'))")
ANTHROPIC_API_KEY   = (from console.anthropic.com)
RESEND_API_KEY      = (from resend.com)
EMAIL_FROM          = noreply@sjhmysuru.com
ADMIN_EMAIL         = admin@sjhmysuru.com
FRONTEND_URL        = https://sjhmysuru.com
PORT                = 4000
```

---

## STEP 6 — Run Database Migrations

In VS Code terminal, navigate to the backend folder:

```bash
cd backend

# Copy the env example and fill in your values
cp .env.example .env
# Now open .env and paste your DATABASE_URL and other values

# Install dependencies
npm install

# Generate the Prisma client (downloads Prisma engine — needs internet)
npx prisma generate

# Push the schema to your PostgreSQL database (creates all tables)
npx prisma db push

# Create the first SUPER_ADMIN user (run this once)
node scripts/seed-admin.js
```

The seed script (see `backend/scripts/seed-admin.js`) creates the first admin account.
You'll use these credentials to log into the admin dashboard.

---

## STEP 7 — Deploy Frontend to Vercel

1. Go to **vercel.com** → sign in with hospital GitHub account
2. Click **Add New Project** → import `sjh-hospital-website` from GitHub
3. Set **Root Directory** to `frontend`
4. Add Environment Variable:
   ```
   NEXT_PUBLIC_API_URL = https://your-backend.railway.app
   ```
   (get the Railway backend URL from the Railway dashboard → your backend service → Settings → Domain)
5. Click **Deploy**
6. After deployment, go to **Settings → Domains** → add `sjhmysuru.com`

---

## STEP 8 — Set Up GitHub Secrets for Auto-Deploy

In GitHub: go to your repository → **Settings** → **Secrets and variables** → **Actions**

Add these secrets:
```
VERCEL_TOKEN       = (Vercel → Account Settings → Tokens → Create token)
VERCEL_ORG_ID      = (Vercel → Account Settings → General → Your ID)
VERCEL_PROJECT_ID  = (Vercel → Project → Settings → Project ID)
RAILWAY_TOKEN      = (Railway → Account Settings → Tokens → Create token)
```

Now every time you push code to the `main` branch, it automatically deploys.

---

## STEP 9 — Run Locally for Development

Open two VS Code terminals side by side:

**Terminal 1 — Frontend:**
```bash
cd frontend
cp .env.local.example .env.local
# Edit .env.local — set NEXT_PUBLIC_API_URL=http://localhost:4000
npm install
npm run dev
# Opens at http://localhost:3000
```

**Terminal 2 — Backend:**
```bash
cd backend
# Make sure .env is filled in
npm install
npx prisma generate
npm run start:dev
# API runs at http://localhost:4000
```

---

## STEP 10 — Add Real Hospital Photos

Replace the placeholder images in `frontend/public/images/`:

| File | What it should show |
|---|---|
| `hero1.jpg` | Hospital building exterior or reception |
| `hero2.jpg` | Doctors with patients or OT |
| `hero3.jpg` | Nursing care / ward |
| `hero4.jpg` | Equipment / labs |
| `equip-mri.jpg` | Your MRI machine |
| `equip-ct.jpg` | CT scanner |
| `equip-lab.jpg` | Laboratory |
| `equip-ot.jpg` | Operation theatre |
| `equip-icu.jpg` | ICU ward |
| `equip-dialysis.jpg` | Dialysis unit |
| `dr1.jpg` – `dr4.jpg` | Doctor profile photos |

All images should be:
- **Size:** 1920×1080px for hero, 400×400px for doctor photos
- **Format:** `.jpg` (compressed) — keeps page loading fast
- **Max file size:** 200KB per image (use https://squoosh.app to compress)

---

## STEP 11 — Update Doctor & Department Data

Open `frontend/src/lib/placeholder-data.ts` and replace the sample data with real doctor names, qualifications, and consultation timings.

Later, once the admin dashboard is built, the hospital admin can update all this directly through the dashboard — no coding needed.

---

## DAY-TO-DAY WORKFLOW (for the developer)

```bash
# 1. Pull latest changes before starting work
git pull origin main

# 2. Make changes in VS Code

# 3. Test locally
npm run dev (frontend) + npm run start:dev (backend)

# 4. Commit and push
git add .
git commit -m "feat: added careers page"
git push origin main

# 5. GitHub Actions automatically deploys to Vercel + Railway
#    Check progress at: github.com/YOUR-ORG/sjh-hospital-website/actions
```

---

## TROUBLESHOOTING

| Problem | Solution |
|---|---|
| `npm run dev` fails with port 3000 busy | Run `npx kill-port 3000` then try again |
| Prisma errors on `npx prisma generate` | Make sure `DATABASE_URL` is set in `.env` |
| CORS error in browser | Check `FRONTEND_URL` in Railway env vars matches your domain |
| Admin login fails | Run the seed script again, verify the hashed password |
| Images not showing | Check file names match exactly (case-sensitive on Linux servers) |

---

## PROJECT STRUCTURE REFERENCE

```
sjh-hospital-website/
├── frontend/                    ← Next.js 14 (React, TypeScript, Tailwind)
│   ├── src/
│   │   ├── app/                 ← Pages (App Router)
│   │   │   ├── page.tsx         ← Home page
│   │   │   ├── layout.tsx       ← Root layout (fonts, metadata)
│   │   │   └── globals.css      ← Design tokens + global styles
│   │   ├── components/
│   │   │   ├── layout/          ← Header, Footer, EmergencyStrip
│   │   │   └── home/            ← Hero, Doctors, WhySJH, Equipment etc.
│   │   ├── lib/
│   │   │   ├── api.ts           ← All fetch calls to backend
│   │   │   └── placeholder-data.ts  ← Temporary data (replace with API calls)
│   │   └── types/index.ts       ← TypeScript interfaces
│   └── public/images/           ← Put hospital photos here
│
├── backend/                     ← NestJS API (TypeScript, Prisma)
│   ├── src/
│   │   ├── app.module.ts        ← Root module
│   │   ├── main.ts              ← App bootstrap (CORS, validation)
│   │   ├── prisma/              ← Database client service
│   │   ├── auth/                ← Login, JWT, guards
│   │   ├── departments/         ← Departments CRUD
│   │   ├── doctors/             ← Doctors CRUD
│   │   ├── appointments/        ← Booking + admin management
│   │   ├── ai/                  ← Patient chatbot + admin content assist
│   │   └── common/              ← Shared guards and decorators
│   └── prisma/schema.prisma     ← Database schema (copy from database/)
│
├── database/
│   └── prisma/schema.prisma     ← MASTER schema — edit this one
│
├── docs/                        ← Roadmap, architecture docs
└── .github/workflows/           ← Auto-deploy CI/CD pipeline
```
