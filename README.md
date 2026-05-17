# Rehan Ali — Digital Marketing Portfolio

A modern, dark-mode personal portfolio website for **Rehan Ali**, a digital marketing specialist. Built with **Next.js 16**, **TypeScript**, and **Tailwind CSS v4**.

![Portfolio Preview](public/preview.png)

---

## 🚀 Tech Stack

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 16.2.6 | React framework & routing |
| [React](https://react.dev/) | 19.2.4 | UI library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Type safety |
| [Tailwind CSS](https://tailwindcss.com/) | ^4 | Utility-first styling |

---

## 📁 Project Structure

```
rehan-portfolio/
├── app/
│   ├── components/
│   │   ├── Navbar.tsx        # Responsive top navigation bar
│   │   ├── Hero.tsx          # Landing hero section
│   │   ├── About.tsx         # About me section
│   │   ├── Services.tsx      # Services offered
│   │   ├── Skills.tsx        # Skills & expertise
│   │   ├── Portfolio.tsx     # Portfolio / case studies
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── CtaBand.tsx       # Call-to-action banner
│   │   ├── Contact.tsx       # Contact form section
│   │   └── Footer.tsx        # Site footer
│   ├── globals.css           # Global styles & design tokens
│   ├── layout.tsx            # Root layout (metadata, fonts)
│   └── page.tsx              # Main page (composes all sections)
├── public/                   # Static assets (images, icons)
├── next.config.ts            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
├── tsconfig.json             # TypeScript configuration
└── package.json              # Dependencies & scripts
```

---

## ✨ Features

- 🌑 **Dark-mode first** design with premium glassmorphism aesthetics
- 📱 **Fully responsive** — mobile, tablet & desktop
- ⚡ **Next.js App Router** for fast, server-rendered pages
- 🎨 **Consistent design system** — custom CSS variables for colors, spacing & typography
- 🖋 **Inter font** (Google Fonts) for clean, modern typography
- 🧩 **Component-based architecture** — 10 modular, reusable sections
- 📬 **Contact form** ready for backend integration
- 🔍 **SEO-ready** — meta tags, semantic HTML & descriptive titles

---

## 🛠️ Getting Started

### Prerequisites

- **Node.js** ≥ 18.x
- **npm** ≥ 9.x (or `yarn` / `pnpm` / `bun`)

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/rehanali/rehan-portfolio.git

# 2. Navigate into the project directory
cd rehan-portfolio

# 3. Install dependencies
npm install
```

### Running Locally

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the portfolio live.

---

## 📜 Available Scripts

| Script | Command | Description |
|---|---|---|
| Development server | `npm run dev` | Starts local dev server with hot reload |
| Production build | `npm run build` | Compiles and optimizes for production |
| Production server | `npm start` | Starts the production server |
| Lint | `npm run lint` | Runs ESLint to check for code issues |

---

## 🌍 Deployment

### Deploy on Vercel (Recommended)

The simplest way to deploy is via the **Vercel Platform** — zero config needed for Next.js projects.

1. Push your code to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new) and import the repository.
3. Click **Deploy** — Vercel will detect Next.js automatically.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Deploy on Other Platforms

```bash
# Build the production bundle
npm run build

# Then start the production server
npm start
```

The output will be in the `.next/` directory. You can host it on any Node.js-compatible platform (Railway, Render, DigitalOcean App Platform, etc.).

---

## 🎨 Design System

The global design tokens are defined in `app/globals.css`:

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0a0a0f` | Page background |
| `--color-surface` | `#13131a` | Card / panel background |
| `--color-primary` | `#7c3aed` | Accent / CTA color (purple) |
| `--color-text` | `#e2e8f0` | Primary text |
| `--color-text-muted` | `#94a3b8` | Secondary / muted text |
| Font | Inter (Google Fonts) | All typography |

---

## 🤝 Contact

**Rehan Ali** — Digital Marketing Specialist

- 📧 Email: [rehanansari26353@gmail.com](mailto:rehanansari26353@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/rehanali](https://linkedin.com/in/rehanali)

---

## 📄 License

This project is for personal use. All rights reserved © 2026 Rehan Ali.
