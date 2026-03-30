"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const EXPERIENCE = [
  {
    role: "Web Developer",
    company: "Favfly",
    url: "https://favfly.com",
    period: "2022 — Present",
    description: [
      "Build and maintain production websites for small business clients using React, Next.js, and headless CMS platforms (Prismic, Contentful).",
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
  <section id="experience" className="px-6 py-24 lg:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <h2 className="flex items-center gap-3 font-heading text-2xl font-semibold text-slate-200 sm:text-3xl">
          <span className="font-mono text-base font-normal text-cyan-400">
            03.
          </span>
          Experience
          <span
            className="ml-2 hidden h-px flex-1 bg-navy-700 sm:block"
            aria-hidden="true"
          />
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
  <div className="group grid gap-4 sm:grid-cols-[140px_1fr]">
    <p className="pt-1 font-mono text-xs uppercase tracking-wide text-slate-500">
      {period}
    </p>

    <div>
      <h3 className="font-heading text-lg font-semibold text-slate-200">
        {role}{" "}
        <span className="text-cyan-400">
          @{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors duration-200 hover:text-cyan-500 cursor-pointer"
          >
            {company}
          </a>
        </span>
      </h3>

      <ul className="mt-4 space-y-3">
        {description.map((item, i) => (
          <li
            key={i}
            className="flex gap-3 text-sm leading-relaxed text-slate-400"
          >
            <span
              className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400"
              aria-hidden="true"
            />
            {item}
          </li>
        ))}
      </ul>

      <ul className="mt-4 flex flex-wrap gap-2">
        {tech.map((t) => (
          <li
            key={t}
            className="rounded-full bg-cyan-400/10 px-3 py-1 font-mono text-xs text-cyan-400"
          >
            {t}
          </li>
        ))}
      </ul>
    </div>
  </div>
);
