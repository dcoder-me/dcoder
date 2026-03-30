"use client";

import { FadeIn } from "./fade-in";

const TECH_STACK = [
  "JavaScript (ES2022+)",
  "React.js",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Laravel / PHP",
  "Prismic CMS",
  "Contentful",
  "Firebase",
  "MySQL",
  "Git & GitHub",
  "Vercel",
];

/**
 * @returns {JSX.Element}
 */
export const About = () => (
  <section id="about" className="px-6 py-24 lg:py-32">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <SectionHeading number="01" title="About Me" />
      </FadeIn>

      <div className="mt-10 grid gap-12 lg:grid-cols-[3fr_2fr]">
        <div className="space-y-4">
          <FadeIn delay={0.1}>
            <p className="text-base leading-relaxed text-slate-400">
              I'm a web developer based in Kolkata, India with a focus on
              building modern, performant web applications. Over the past four
              years at{" "}
              <span className="text-slate-200">Favfly</span>, I've been
              shipping production-grade websites for businesses using React,
              Next.js, and headless CMS platforms — turning complex requirements
              into clean, maintainable code.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="text-base leading-relaxed text-slate-400">
              My work sits at the intersection of frontend engineering and
              content architecture. I specialize in wiring{" "}
              <span className="text-slate-200">
                headless CMS backends (Prismic, Contentful)
              </span>{" "}
              to modern React frontends — a workflow that demands both technical
              depth and an understanding of how content teams operate. Every
              project I deliver is fast, accessible, and built to scale.
            </p>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-base leading-relaxed text-slate-400">
              When I'm not building for clients, I'm exploring the broader
              JavaScript ecosystem — currently deepening my work with TypeScript,
              GraphQL, and modern deployment pipelines.
            </p>
          </FadeIn>
        </div>

        <FadeIn delay={0.3}>
          <div>
            <p className="mb-4 font-mono text-sm text-cyan-400">
              Technologies I work with:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2">
              {TECH_STACK.map((tech) => (
                <li
                  key={tech}
                  className="flex items-center gap-2 font-mono text-xs text-slate-400"
                >
                  <span className="text-cyan-400" aria-hidden="true">
                    ▹
                  </span>
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/**
 * @param {{ number: string, title: string }} props
 * @returns {JSX.Element}
 */
const SectionHeading = ({ number, title }) => (
  <h2 className="flex items-center gap-3 font-heading text-2xl font-semibold text-slate-200 sm:text-3xl">
    <span className="font-mono text-base font-normal text-cyan-400">
      {number}.
    </span>
    {title}
    <span className="ml-2 hidden h-px flex-1 bg-navy-700 sm:block" aria-hidden="true" />
  </h2>
);
