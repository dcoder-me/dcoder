"use client";

import { m, useReducedMotion } from "framer-motion";
import { scrollTo } from "@/lib/scroll-to";

const EASE = [0.32, 0.72, 0, 1];

const SOCIAL_LINKS = [
  {
    href: "https://github.com/dcoder-me",
    label: "GitHub",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    href: "https://linkedin.com/in/darpanchakraborty",
    label: "LinkedIn",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    href: "https://x.com/dcoder_me",
    label: "X / Twitter",
    icon: (
      <svg
        className="h-5 w-5"
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
];

/**
 * @returns {JSX.Element}
 */
export const Hero = () => {
  const shouldReduce = useReducedMotion();

  const lineVariants = {
    hidden: shouldReduce ? {} : { opacity: 0, y: 30, filter: "blur(12px)" },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: shouldReduce
        ? { duration: 0 }
        : { delay: 0.3 + i * 0.12, duration: 0.9, ease: EASE },
    }),
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-6">
      {/* Conic light beam */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "conic-gradient(from 180deg at 50% -5%, transparent 40%, rgba(255,255,255,0.015) 44%, rgba(255,255,255,0.04) 48%, rgba(255,255,255,0.08) 50%, rgba(255,255,255,0.04) 52%, rgba(255,255,255,0.015) 56%, transparent 60%)",
        }}
        aria-hidden="true"
      />

      {/* Top radial glow */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 50% 30% at 50% 0%, rgba(255,255,255,0.05), transparent)",
        }}
        aria-hidden="true"
      />

      {/* Warm gold orb */}
      <div
        className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] animate-float rounded-full opacity-[0.025] blur-[120px]"
        style={{ background: "radial-gradient(circle, #C8A960, transparent)" }}
        aria-hidden="true"
      />

      {/* Cool ambient orb */}
      <div
        className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-float-slow rounded-full opacity-[0.02] blur-[100px]"
        style={{ background: "radial-gradient(circle, #EDEDED, transparent)" }}
        aria-hidden="true"
      />

      {/* Engineering grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.022]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
        aria-hidden="true"
      />

      {/* Bottom fade */}
      <div
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto w-full max-w-5xl text-center">
        {/* Eyebrow badge */}
        <m.div
          custom={0}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="mb-6 flex justify-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/[0.06] px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
            <span
              className="h-1.5 w-1.5 rounded-full bg-accent/70 animate-pulse"
              aria-hidden="true"
            />
            Full-Stack Developer
          </span>
        </m.div>

        <m.h1
          custom={1}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="font-heading text-[clamp(2.5rem,8vw,8rem)] font-bold leading-[0.92] tracking-tight text-content"
        >
          Darpan
          <br />
          Chakraborty
        </m.h1>

        <m.p
          custom={2}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-content-secondary sm:text-lg"
        >
          I architect and ship production web applications, headless content
          platforms, SaaS products, and AI-powered tools — built with modern
          JavaScript and cloud-native infrastructure.
        </m.p>

        <m.p
          custom={3}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="mt-4 font-mono text-xs tracking-wide text-content-muted"
        >
          Currently at{" "}
          <a
            href="https://favfly.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent transition-colors duration-300 hover:text-accent-hover cursor-pointer"
          >
            Favfly
          </a>{" "}
          · Kolkata, India
        </m.p>

        {/* CTA — Button-in-Button architecture */}
        <m.div
          custom={4}
          initial="hidden"
          animate="visible"
          variants={lineVariants}
          className="mt-12"
        >
          <a
            href="#expertise"
            onClick={(e) => {
              e.preventDefault();
              scrollTo("#expertise");
            }}
            className="group inline-flex items-center gap-3 rounded-full border border-accent/20 bg-accent/[0.04] pl-6 pr-2 py-2 font-mono text-sm text-accent transition-all duration-500 hover:border-accent/45 hover:bg-accent/[0.08] active:scale-[0.98] cursor-pointer"
            style={{ transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
          >
            Explore my work
            {/* Nested icon pill */}
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 transition-all duration-500 group-hover:bg-accent/20 group-hover:translate-x-0.5 group-hover:-translate-y-px group-hover:scale-105"
              style={{
                transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
              }}
              aria-hidden="true"
            >
              <svg
                className="h-3.5 w-3.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
          </a>
        </m.div>

        {/* Desktop Left Sidebar Social Links */}
        <div className="pointer-events-none absolute left-10 top-1/2 hidden -translate-y-1/2 lg:flex lg:flex-col lg:items-center lg:gap-7">
          <m.div
            className="w-px h-16 bg-gradient-to-b from-transparent to-accent/25"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            style={{ transformOrigin: "top" }}
            aria-hidden="true"
          />

          {SOCIAL_LINKS.map((link, index) => (
            <m.a
              key={`left-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="pointer-events-auto group relative flex items-center text-content-muted/50 transition-colors duration-300 hover:text-accent cursor-pointer"
              initial={{ opacity: 0, x: -16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: 0.55 + index * 0.15,
                duration: 0.7,
                ease: EASE,
              }}
            >
              <m.span
                className="absolute inset-0 -m-2 rounded-full bg-accent/10 blur-md"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                transition={{ duration: 0.25 }}
                aria-hidden="true"
              />
              <m.div
                className="relative z-10"
                animate={{ y: [0, -3, 0] }}
                transition={{
                  duration: 2.8 + index * 0.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                {link.icon}
              </m.div>
              <m.span
                className="absolute left-full ml-4 whitespace-nowrap font-mono text-[10px] tracking-wider text-accent uppercase overflow-hidden"
                initial={{ opacity: 0, x: -6 }}
                whileHover={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
              >
                {link.label}
              </m.span>
            </m.a>
          ))}

          <m.div
            className="w-px h-16 bg-gradient-to-b from-accent/25 to-transparent"
            initial={{ scaleY: 0, opacity: 0 }}
            animate={{ scaleY: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8, ease: EASE }}
            style={{ transformOrigin: "bottom" }}
            aria-hidden="true"
          />
        </div>

        {/* Mobile Social Links */}
        <m.div
          className="mt-8 flex justify-center gap-1 sm:gap-2 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {SOCIAL_LINKS.map((link, index) => (
            <m.a
              key={`mobile-${link.href}`}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.7 + index * 0.1,
                duration: 0.6,
                ease: EASE,
              }}
              className="inline-flex h-11 w-11 items-center justify-center text-content-muted transition-colors duration-200 hover:text-accent cursor-pointer"
            >
              {link.icon}
            </m.a>
          ))}
        </m.div>
      </div>
    </section>
  );
};
