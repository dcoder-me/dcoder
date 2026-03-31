"use client";

import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const STACK = [
  {
    category: "Frontend",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion",
      "JavaScript (ES2022+)",
    ],
  },
  {
    category: "Backend & Data",
    items: [
      "Node.js",
      "Prisma",
      "PostgreSQL",
      "MongoDB",
      "Firebase",
      "REST APIs",
      "GraphQL",
    ],
  },
  {
    category: "CMS",
    items: ["Prismic", "Contentful"],
  },
  {
    category: "Platform & Tools",
    items: ["Vercel", "Git", "GitHub", "Docker"],
  },
];

/**
 * @returns {JSX.Element}
 */
export const TechStack = () => (
  <section id="stack" className="relative px-6 py-24 lg:py-32">
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
          Technologies
        </p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-content sm:text-4xl">
          Tech Stack
        </h2>
      </FadeIn>

      <StaggerContainer
        className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4"
        staggerDelay={0.08}
      >
        {STACK.map(({ category, items }) => (
          <StaggerItem key={category}>
            <div>
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-content-muted">
                {category}
              </h3>
              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-content-secondary transition-colors duration-200 hover:text-content"
                  >
                    <span
                      className="h-1 w-1 flex-shrink-0 rounded-full bg-accent/50"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);
