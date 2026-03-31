"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FadeIn } from "./fade-in";
import { SectionLabel } from "./section-label";

const SERVICES = [
  {
    id: "frontend",
    title: "Frontend Development",
    description:
      "Building fast, accessible, and visually refined web interfaces using React and Next.js. From component architecture to pixel-perfect implementation — I bridge design and engineering with precision.",
    tags: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
  },
  {
    id: "cms",
    title: "Headless CMS Architecture",
    description:
      "Designing and implementing content models in Prismic and Contentful, then wiring them to modern React frontends. I empower non-technical teams to own their content without touching code.",
    tags: ["Prismic", "Contentful", "Sanity", "GraphQL", "REST APIs"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 5.625c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
      </svg>
    ),
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description:
      "Auditing and optimizing web applications for Core Web Vitals, load times, and rendering performance. Consistent Lighthouse scores above 90 through ISR, image optimization, and strategic caching.",
    tags: ["Core Web Vitals", "ISR", "Image Optimization", "Vercel", "Lighthouse"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    id: "fullstack",
    title: "Full-Stack Solutions",
    description:
      "End-to-end development across the stack — from Laravel APIs and Firebase backends to MySQL databases and Node.js services. I handle the full picture when projects demand it.",
    tags: ["Node.js", "Laravel", "PHP", "Firebase", "MySQL"],
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 17.25v.75a3 3 0 01-3 3h-15a3 3 0 01-3-3v-.75m19.5 0a3 3 0 00-3-3H5.25a3 3 0 00-3 3m19.5 0v-.75A3 3 0 0018.75 12h-1.5m-12 5.25V12a3 3 0 013-3h.75M12 9.75V3m0 6.75l-3-3m3 3l3-3" />
      </svg>
    ),
  },
];

/**
 * @returns {JSX.Element}
 */
export const Services = () => {
  const [expanded, setExpanded] = useState("frontend");

  return (
    <section id="services" className="px-8 py-20 lg:px-14 lg:py-28">
      <FadeIn>
        <SectionLabel>What I Do</SectionLabel>
      </FadeIn>

      <FadeIn delay={0.05}>
        <h2 className="mb-10 font-heading text-3xl font-bold text-slate-100 sm:text-4xl">
          Services
        </h2>
      </FadeIn>

      <div className="space-y-2">
        {SERVICES.map((service, i) => (
          <FadeIn key={service.id} delay={0.08 + i * 0.05}>
            <ServiceItem
              {...service}
              isOpen={expanded === service.id}
              onToggle={() =>
                setExpanded(expanded === service.id ? null : service.id)
              }
            />
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

/**
 * @param {{ id: string, title: string, description: string, tags: string[], icon: React.ReactNode, isOpen: boolean, onToggle: () => void }} props
 * @returns {JSX.Element}
 */
const ServiceItem = ({ title, description, tags, icon, isOpen, onToggle }) => (
  <div
    className="rounded-xl transition-all duration-300"
    style={{
      background: isOpen
        ? `linear-gradient(#111115, #111115) padding-box, linear-gradient(135deg, #22D3EE, #A78BFA) border-box`
        : `linear-gradient(#111115, #111115) padding-box, linear-gradient(135deg, #1A1A22, #1A1A22) border-box`,
      border: "1px solid transparent",
    }}
  >
    <button
      onClick={onToggle}
      className="flex w-full items-center gap-4 px-6 py-5 text-left cursor-pointer"
      aria-expanded={isOpen}
    >
      <span
        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg transition-colors duration-200 ${
          isOpen ? "bg-cyan-400/10 text-cyan-400" : "bg-void-700 text-slate-500"
        }`}
      >
        {icon}
      </span>

      <span
        className={`flex-1 font-heading text-base font-semibold transition-colors duration-200 ${
          isOpen ? "text-slate-100" : "text-slate-300"
        }`}
      >
        {title}
      </span>

      <motion.span
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.25 }}
        className={`flex-shrink-0 transition-colors duration-200 ${
          isOpen ? "text-cyan-400" : "text-slate-600"
        }`}
      >
        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.span>
    </button>

    <AnimatePresence initial={false}>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden"
        >
          <div className="px-6 pb-6 pt-0">
            <div className="ml-[52px]">
              <p className="text-sm leading-relaxed text-slate-400">
                {description}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-void-700 px-2.5 py-1 font-mono text-xs text-slate-400"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);
