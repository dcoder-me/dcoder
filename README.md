# dcoder.me — Portfolio

Personal portfolio of Darpan Chakraborty, full-stack developer. Built with Next.js App Router, Framer Motion, and Tailwind CSS.

## Stack

- **Framework** — Next.js 14 (App Router)
- **Styling** — Tailwind CSS
- **Animations** — Framer Motion
- **Fonts** — Syne (heading), Outfit (body), JetBrains Mono (mono)
- **Deployment** — Vercel

## Structure

```
app/
  layout.js         # Font loading, metadata, root layout
  page.js           # Single-page composition
  globals.css       # CSS variables, base styles, scrollbar

components/
  nav.jsx           # Fixed header, active section tracking, mobile menu
  hero.jsx          # Landing section
  expertise.jsx     # Services / expertise areas
  tech-stack.jsx    # Capability cards + secondary skills
  experience.jsx    # Career timeline
  contact.jsx       # Contact CTA + footer
  cursor-spotlight.jsx  # Cursor-following radial gradient effect
  fade-in.jsx       # Scroll-triggered fade/stagger animation primitives
```

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start dev server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |
