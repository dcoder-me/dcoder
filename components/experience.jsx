"use client";

import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

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
    tech: ["React", "Next.js", "Prismic", "Contentful", "Tailwind CSS", "Vercel"],
  },
];

/**
 * @returns {JSX.Element}
 */
export const Experience = () => (
  <section id="experience" className="px-8 py-20 lg:px-14 lg:py-28">
    <FadeIn>
      <SectionLabel>Experience</SectionLabel>
    </FadeIn>

    <FadeIn delay={0.05}>
      <h2 className="mb-12 font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
        Where I've Worked
      </h2>
    </FadeIn>

    <div className="space-y-10">
      {EXPERIENCE.map((job, i) => (
        <FadeIn key={`${job.company}-${job.role}`} delay={0.1 + i * 0.08}>
          <ExperienceItem {...job} />
        </FadeIn>
      ))}
    </div>
  </section>
);

/**
 * @param {{ role: string, company: string, url: string, period: string, description: string[], tech: string[] }} props
 * @returns {JSX.Element}
 */
const ExperienceItem = ({ role, company, url, period, description, tech }) => (
  <div className="relative pl-6 before:absolute before:left-0 before:top-2 before:h-[calc(100%-0.5rem)] before:w-px before:bg-void-600">
    {/* Timeline dot */}
    <div
      className="absolute left-[-4px] top-[7px] h-2 w-2 rounded-full"
      style={{ background: "linear-gradient(135deg, #22D3EE, #A78BFA)" }}
    />

    <div className="flex flex-wrap items-start justify-between gap-3">
      <div>
        <h3 className="font-heading text-lg font-semibold text-slate-100">
          {role}{" "}
          <span className="text-slate-500">@</span>{" "}
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-400 transition-colors duration-200 hover:text-cyan-300 cursor-pointer"
          >
            {company}
          </a>
        </h3>
      </div>

      <span className="rounded-full border border-void-600 bg-void-800 px-3 py-1 font-mono text-xs text-slate-500">
        {period}
      </span>
    </div>

    <ul className="mt-5 space-y-3">
      {description.map((item, i) => (
        <li key={i} className="flex gap-3 text-sm leading-relaxed text-slate-400">
          <span
            className="mt-[6px] block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-cyan-400/50"
            aria-hidden="true"
          />
          {item}
        </li>
      ))}
    </ul>

    <div className="mt-5 flex flex-wrap gap-2">
      {tech.map((t) => (
        <span
          key={t}
          className="rounded-md bg-cyan-400/8 px-2.5 py-1 font-mono text-xs text-cyan-400"
          style={{ background: "rgba(34,211,238,0.07)" }}
        >
          {t}
        </span>
      ))}
    </div>
  </div>
);
