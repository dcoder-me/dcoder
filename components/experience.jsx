"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Favfly",
    url: "https://favfly.com",
    period: "2022 — Present",
    description: [
      "Build and maintain production websites for business clients using React, Next.js, and headless CMS platforms (Prismic, Contentful).",
      "Architect content models and frontend integrations that empower non-technical clients to manage their own content independently.",
      "Implement performance-optimized builds with ISR, image optimization, and Vercel deployment pipelines achieving consistent Lighthouse scores above 90.",
      "Collaborate with design and marketing teams to translate wireframes and business requirements into responsive, accessible web experiences.",
    ],
    tech: [
      "React",
      "Next.js",
      "Prismic",
      "Contentful",
      "Tailwind CSS",
      "Vercel",
    ],
  },
];

/**
 * @returns {JSX.Element}
 */
export const Experience = () => (
  <section id="experience" className="relative px-6 py-24 lg:py-32">
    {/* Subtle divider glow */}
    <div
      className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,169,96,0.15), transparent)",
      }}
      aria-hidden="true"
    />

    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sm:text-sm">
          Career
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-content sm:text-4xl">
          Experience
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-12 space-y-12" staggerDelay={0.15}>
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
  <div className="group grid gap-6 sm:grid-cols-[160px_1fr]">
    <p className="pt-1 font-mono text-xs tracking-wide text-content-muted">
      {period}
    </p>

    <div>
      <h3 className="font-heading text-lg font-semibold text-content">
        {role}{" "}
        <span className="text-accent">
          @{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-accent-hover cursor-pointer"
          >
            {company}
          </a>
        </span>
      </h3>

      <ul className="mt-4 space-y-3">
        {description.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-content-secondary"
          >
            <span
              className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-accent/50"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-5 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full border border-white/[0.06] bg-white/[0.03] px-3 py-1 font-mono text-xs text-content-muted"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
