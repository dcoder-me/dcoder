# &lt;DCoder /&gt; — darpan chakraborty

> Full-Stack Developer · Kolkata, India · [dcoder.me](https://dcoder.me)

I architect and ship production web applications, headless content platforms, SaaS products, and AI-powered tools — built with modern JavaScript and cloud-native infrastructure.

---

## What I Build

| Area                        | Details                                                                       |
| --------------------------- | ----------------------------------------------------------------------------- |
| **Full-Stack Web & Mobile** | React, Next.js, React Native — from SPA to cross-platform mobile              |
| **Headless CMS**            | Prismic, Contentful, ISR, GraphQL — editorial control without dev involvement |
| **SaaS Engineering**        | Prisma, PostgreSQL, Auth, Stripe — scalable architecture from day one         |
| **AI Integration**          | OpenAI API, Claude API, RAG, Vector DB — LLM-powered product features         |

---

## Core Stack

```
React & Next.js        →  Full-stack web apps · Performance · SaaS tools
Mobile Development     →  React Native · PWA · Cross-platform apps
AI Integration         →  OpenAI · Claude API · LLM-powered product features
Backend & APIs         →  Node.js · REST · GraphQL · PostgreSQL · MongoDB
Workflow Automation    →  n8n · Zapier · Make · HubSpot · webhook pipelines
Content Systems        →  Headless CMS · Prismic · Contentful
```

Also comfortable with: animation & interaction design, web performance & Core Web Vitals, database design & data modeling, containerization & deployment pipelines.

---

## Experience

**Full-Stack Developer @ [Favfly](https://favfly.com)** · 2022 – Present

- Architect and ship production web and mobile applications end-to-end, from UI to API to deployment, for business clients across multiple industries
- Integrate AI capabilities (OpenAI, Claude API) into client products, including embedded chat assistants and LLM-powered workflow features
- Build and maintain headless CMS architectures (Prismic, Contentful) that give non-technical clients full editorial control without developer involvement
- Consistently deliver Lighthouse scores of 95–100 through ISR, image optimization, and performance-first engineering practices
- Design and automate business workflows using n8n, Zapier, and Make, reducing manual overhead

---

## Site Architecture

```
app/
  layout.jsx              # Font loading, metadata, root layout
  page.jsx                # Single-page section composition
  globals.css             # CSS variables, base styles, focus ring, scrollbar
  sitemap.js              # Dynamic sitemap via Next.js App Router

components/
  nav.jsx                 # Floating pill nav, active section tracking, mobile overlay
  hero.jsx                # Landing — headline, CTA, social rail
  expertise.jsx           # Asymmetric bento grid — service areas
  tech-stack.jsx          # Capability cards + secondary skills
  experience.jsx          # Career timeline card
  contact.jsx             # Contact CTA + footer
  cursor-spotlight.jsx    # rAF-throttled cursor radial gradient (pointer only)
  smooth-scroll.jsx       # Deferred Lenis init (idle callback, off LCP path)
  fade-in.jsx             # Scroll-triggered fade/blur/stagger primitives
  motion-provider.jsx     # LazyMotion domMax provider

lib/
  scroll-to.js            # Lenis singleton — prevents native/Lenis scroll conflict
```

**Design tokens:** `#050505` surface · `#C8A960` accent gold · Syne (heading) · Outfit (body) · JetBrains Mono

---

## Setup

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

## Connect

[GitHub](https://github.com/dcoder-me) · [LinkedIn](https://linkedin.com/in/darpanchakraborty) · [X](https://x.com/dcoder_me) · [hello@dcoder.me](mailto:hello@dcoder.me)
