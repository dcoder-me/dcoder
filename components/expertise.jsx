"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./fade-in";

const EXPERTISE = [
  {
    icon: "terminal",
    title: "Full-Stack Web & Mobile Applications",
    description:
      "Production-grade web and mobile applications built with React, Next.js, and React Native. From single-page apps to cross-platform mobile experiences, optimized for performance, SEO, and scalable architecture.",
    tech: ["React", "Next.js", "React Native", "Node.js", "Vercel"],
    wide: true,
  },
  {
    icon: "document",
    title: "Headless CMS Architecture",
    description:
      "Content platforms that give teams full editorial control. I design content models and connect headless backends to modern frontend so non-technical teams can publish independently.",
    tech: ["Prismic", "Contentful", "ISR", "GraphQL"],
    wide: false,
  },
  {
    icon: "database",
    title: "SaaS Product Engineering",
    description:
      "End-to-end SaaS development with robust data layers, authentication, and payment integration. Scalable architecture designed for growth from day one.",
    tech: ["Prisma", "PostgreSQL", "Auth", "Stripe"],
    wide: false,
  },
  {
    icon: "sparkle",
    title: "AI-Integrated Solutions",
    description:
      "Embedding AI capabilities into web applications — intelligent search, content generation, and automated workflows powered by large language models.",
    tech: ["OpenAI API", "Claude API", "RAG", "Vector DB"],
    wide: true,
  },
];

const ICONS = {
  terminal: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  document: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  ),
  database: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  sparkle: (
    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.25} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
};

/**
 * @returns {JSX.Element}
 */
export const Expertise = () => (
  <section id="expertise" className="relative px-6 py-32 lg:py-40">
    <div className="mx-auto max-w-6xl">
      <FadeIn>
        <span className="inline-flex items-center rounded-full border border-accent/20 bg-accent/[0.05] px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Expertise
        </span>
        <h2 className="mt-4 font-heading text-3xl font-bold text-content sm:text-4xl lg:text-5xl">
          What I Build
        </h2>
      </FadeIn>

      {/* Asymmetric Bento Grid */}
      <StaggerContainer
        className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-12"
        staggerDelay={0.1}
      >
        {EXPERTISE.map((item) => (
          <StaggerItem
            key={item.title}
            className={item.wide ? "md:col-span-7" : "md:col-span-5"}
          >
            <ExpertiseCard {...item} />
          </StaggerItem>
        ))}
      </StaggerContainer>
    </div>
  </section>
);

/**
 * @param {{ icon: string, title: string, description: string, tech: string[] }} props
 * @returns {JSX.Element}
 */
const ExpertiseCard = ({ icon, title, description, tech }) => (
  <motion.article
    whileHover={{ y: -4 }}
    transition={{ duration: 0.4, ease: [0.32, 0.72, 0, 1] }}
    className="group h-full cursor-default"
  >
    {/* Outer shell — Double-Bezel */}
    <div className="h-full p-1.5 rounded-[2rem] ring-1 ring-white/[0.07] bg-white/[0.015] transition-all duration-500 group-hover:ring-accent/[0.18] group-hover:bg-accent/[0.01]">
      {/* Inner core */}
      <div className="h-full rounded-[calc(2rem-6px)] bg-white/[0.03] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] p-6 sm:p-8 transition-all duration-500 group-hover:bg-white/[0.05]">

        {/* Icon */}
        <div className="mb-6 inline-flex rounded-2xl bg-accent/[0.08] ring-1 ring-accent/10 p-3 text-accent transition-all duration-300 group-hover:bg-accent/[0.14] group-hover:ring-accent/20">
          {ICONS[icon]}
        </div>

        <h3 className="font-heading text-lg font-semibold text-content transition-colors duration-200 group-hover:text-accent sm:text-xl">
          {title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-content-secondary">
          {description}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {tech.map((t) => (
            <li
              key={t}
              className="rounded-full border border-white/[0.07] bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-content-muted transition-all duration-200 group-hover:border-accent/[0.12] group-hover:text-content-secondary/80"
            >
              {t}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </motion.article>
);
