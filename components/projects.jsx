"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const PROJECTS = [
  {
    title: "Niddlecraft",
    description:
      "Full-stack tailoring business platform with dual authentication (admin/user), body measurement storage, appointment scheduling, and automated email notifications. Built end-to-end from database design through deployment.",
    tech: ["Laravel", "PHP", "MySQL", "Bootstrap", "Email Integration"],
    links: {
      github: "https://github.com/dcoder-me/niddlecraft",
    },
    highlight: "28 commits · 2 contributors · Full-stack architecture",
  },
  {
    title: "Client Web Platforms — Favfly",
    description:
      "Production websites for small businesses using headless CMS architecture. Designed content models in Prismic and Contentful, built performant Next.js frontends with ISR, and deployed to Vercel with preview environments for client review.",
    tech: ["Next.js", "Prismic CMS", "Contentful", "Tailwind CSS", "Vercel"],
    highlight: "Headless CMS · ISR · Production deployments",
  },
  {
    title: "Firebase CRUD Application",
    description:
      "Real-time data application with full create, read, update, delete operations backed by Firebase Firestore. Features optimistic UI updates and responsive design, deployed on Vercel.",
    tech: ["Next.js", "Firebase", "Firestore", "Vercel"],
    links: {
      github: "https://github.com/dcoder-me",
    },
    highlight: "Real-time data · Firestore · Optimistic updates",
  },
  {
    title: "dcoder.me — This Portfolio",
    description:
      "The site you're viewing. A single-page portfolio built with Next.js App Router, featuring cursor-following spotlight effect, scroll-driven animations, and a dark navy design system. Lighthouse 95+.",
    tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Vercel"],
    links: {
      github: "https://github.com/dcoder-me/portfolio",
    },
    highlight: "App Router · Framer Motion · Dark theme",
  },
];

/**
 * @returns {JSX.Element}
 */
export const Projects = () => (
  <section id="work" className="px-6 py-24 lg:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <h2 className="flex items-center gap-3 font-heading text-2xl font-semibold text-slate-200 sm:text-3xl">
          <span className="font-mono text-base font-normal text-cyan-400">
            02.
          </span>
          Selected Work
          <span
            className="ml-2 hidden h-px flex-1 bg-navy-700 sm:block"
            aria-hidden="true"
          />
        </h2>
      </FadeIn>

      <StaggerContainer className="mt-12 space-y-6" staggerDelay={0.1}>
        {PROJECTS.map((project) => (
          <StaggerItem key={project.title}>
            <ProjectCard {...project} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

/**
 * @param {{ title: string, description: string, tech: string[], links?: { github?: string, live?: string }, highlight: string }} props
 * @returns {JSX.Element}
 */
const ProjectCard = ({ title, description, tech, links, highlight }) => (
  <motion.article
    whileHover={{ y: -2 }}
    transition={{ duration: 0.2, ease: "easeOut" }}
    className="group relative rounded-lg border border-navy-700/50 bg-navy-800/50 p-6 transition-all duration-300 hover:border-navy-700 hover:bg-navy-800/80 sm:p-8"
  >
    <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex-1">
        <div className="flex items-center gap-3">
          <FolderIcon />
          <h3 className="font-heading text-lg font-semibold text-slate-200 transition-colors duration-200 group-hover:text-cyan-400 sm:text-xl">
            {title}
          </h3>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-slate-400 sm:text-base">
          {description}
        </p>

        <p className="mt-3 font-mono text-xs text-slate-500">{highlight}</p>

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

      {links && (
        <div className="flex gap-3 sm:ml-4">
          {links.github && (
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors duration-200 hover:text-cyan-400 cursor-pointer"
              aria-label={`View ${title} on GitHub`}
            >
              <GitHubIcon />
            </a>
          )}
          {links.live && (
            <a
              href={links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 transition-colors duration-200 hover:text-cyan-400 cursor-pointer"
              aria-label={`View ${title} live site`}
            >
              <ExternalLinkIcon />
            </a>
          )}
        </div>
      )}
    </div>
  </motion.article>
);

const FolderIcon = () => (
  <svg
    className="h-5 w-5 text-cyan-400"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.06-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const ExternalLinkIcon = () => (
  <svg
    className="h-5 w-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    aria-hidden="true"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
    />
  </svg>
);
