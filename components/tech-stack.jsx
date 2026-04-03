"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

// Disciplines — each is a genuine area of depth
const PRIMARY_STACK = [
  {
    name: "React & Next.js",
    context: "Full-stack web apps · Performance · Saas tools",
  },
  {
    name: "Mobile Development",
    context: "React Native · PWA · Cross-Platform apps",
  },
  {
    name: "AI Integration",
    context: "OpenAI · Claude API · LLM-powered product features",
  },
  {
    name: "Backend & APIs",
    context: "Node.js · REST · GraphQL · PostgreSQL · MongoDB",
  },
  {
    name: "Workflow Automation",
    context: "n8n · Zapier · Make · HubSpot · webhook pipelines",
  },
  { name: "Content Systems", context: "Headless CMS · Prismic · Contentful" },
];

// Supporting capabilities — intentionally broad
const CAPABILITIES = [
  "Animation & interaction design",
  "Web performance & Core Web Vitals",
  "Database design & data modeling",
  "Containerization & deployment pipelines",
];

/**
 * @returns {JSX.Element}
 */
export const TechStack = () => (
  <section id="stack" className="relative px-6 py-24 lg:py-32">
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
          Capabilities
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-content sm:text-4xl">
          What I Build
        </h2>
        <p className="mt-4 max-w-xl text-sm leading-relaxed text-content-muted">
          Full-stack across web, mobile, and AI, from product interface to
          backend logic to automated workflows.
        </p>
      </FadeIn>

      {/* Primary stack */}
      <div className="mt-5 mb-2">
        <FadeIn delay={0.05}>
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-content-muted/60">
            Core Stack
          </p>
        </FadeIn>
      </div>

      <StaggerContainer
        className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3"
        staggerDelay={0.07}
      >
        {PRIMARY_STACK.map(({ name, context }) => (
          <StaggerItem key={name}>
            <PrimaryCard name={name} context={context} />
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Capability areas */}
      <FadeIn delay={0.3}>
        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3">
          <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-content-muted/50 shrink-0">
            Also comfortable with
          </p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2">
            {CAPABILITIES.map((cap) => (
              <li
                key={cap}
                className="flex items-center gap-2 text-sm text-content-muted"
              >
                <span
                  className="h-px w-4 bg-accent/30 flex-shrink-0"
                  aria-hidden="true"
                />
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </FadeIn>
    </div>
  </section>
);

/**
 * @param {{ name: string, context: string }} props
 * @returns {JSX.Element}
 */
const PrimaryCard = ({ name, context }) => (
  <div className="group relative overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] backdrop-blur-md px-6 py-5 transition-all duration-300 hover:border-accent/20 hover:bg-white/[0.06]">
    {/* Top accent line */}
    <div
      className="absolute inset-x-0 top-0 h-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,169,96,0.5), transparent)",
      }}
      aria-hidden="true"
    />
    <p className="font-heading text-base font-bold text-content">{name}</p>
    <p className="mt-1 font-mono text-[11px] text-content-muted">{context}</p>
  </div>
);
