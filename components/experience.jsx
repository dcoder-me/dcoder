"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const EXPERIENCE = [
  {
    role: "Full-Stack Developer",
    company: "Favfly",
    url: "https://favfly.com",
    period: "2022 - Present",
    description: [
      "Architect and ship production web and mobile applications end-to-end, from UI to API to deployment, for business clients across multiple industries.",
      "Integrate AI capabilities (OpenAI, Claude API) into client products, including embedded chat assistants and LLM-powered workflow features.",
      "Build and maintain headless CMS architectures (Prismic, Contentful) that give non-technical clients full editorial control without developer involvement.",
      "Consistently deliver Lighthouse scores of 95–100 through ISR, image optimization, and performance-first engineering practices.",
      "Design and automate business workflows using n8n, Zapier, and Make, connecting CRMs, webhooks, and internal tools to reduce manual overhead.",
    ],
    tech: [
      "React / Next.js",
      "Mobile Development",
      "AI Integration",
      "Headless CMS",
      "Workflow Automation",
      "Web Performance",
    ],
  },
];

/**
 * @returns {JSX.Element}
 */
export const Experience = () => (
  <section id="experience" className="relative px-6 py-24 lg:py-32">
    <div
      className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2"
      style={{ background: "linear-gradient(90deg, transparent, rgba(200,169,96,0.15), transparent)" }}
      aria-hidden="true"
    />

    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/[0.05] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Career
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold text-content sm:text-4xl">
          Experience
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-12 space-y-6" staggerDelay={0.15}>
        {EXPERIENCE.map((job) => (
          <StaggerItem key={`${job.company}-${job.role}`}>
            <ExperienceItem {...job} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

/**
 * @param {{ role: string, company: string, url: string, period: string, description: string[], tech: string[] }} props
 * @returns {JSX.Element}
 */
const ExperienceItem = ({ role, company, url, period, description, tech }) => (
  <motion.div
    whileHover={{ y: -2 }}
    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    className="group cursor-default"
  >
    {/* Outer shell — Double-Bezel */}
    <div className="p-1.5 rounded-[2rem] ring-1 ring-white/[0.07] bg-white/[0.015] transition-all duration-500 group-hover:ring-white/[0.12]">
      {/* Inner core */}
      <div className="rounded-[calc(2rem-6px)] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-8 transition-all duration-500 group-hover:bg-white/[0.05] relative overflow-hidden">

        {/* Left timeline accent */}
        <div
          className="absolute left-0 top-8 bottom-8 w-px rounded-full"
          style={{ background: "linear-gradient(180deg, rgba(200,169,96,0.55) 0%, rgba(200,169,96,0.12) 60%, transparent 100%)" }}
          aria-hidden="true"
        />

        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between mb-6">
          <div>
            <h3 className="font-heading text-xl font-bold text-content">{role}</h3>
            <div className="mt-1.5 flex items-center gap-2">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-accent transition-colors duration-200 hover:text-accent-hover cursor-pointer"
              >
                {company}
              </a>
              <span className="text-content-muted/50 text-xs" aria-hidden="true">·</span>
              <span className="font-mono text-xs text-content-muted">{period}</span>
            </div>
          </div>

          <span className="inline-flex shrink-0 w-fit items-center gap-1.5 rounded-full border border-accent/25 bg-accent/[0.08] px-3 py-1 font-mono text-[10px] tracking-wide text-accent uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
            Current
          </span>
        </div>

        <ul className="space-y-3 mb-6">
          {description.map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-content-secondary">
              <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-accent/50" aria-hidden="true" />
              {item}
            </li>
          ))}
        </ul>

        <ul className="flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/[0.09] bg-white/[0.04] px-3 py-1 font-mono text-xs text-content-muted transition-all duration-200 hover:text-content hover:border-accent/20 hover:bg-accent/[0.04]"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);
