"use client";

import { motion } from "framer-motion";

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.3 + i * 0.12,
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * @returns {JSX.Element}
 */
export const Hero = () => (
  <section className="relative flex min-h-dvh items-center justify-center overflow-hidden px-6">
    {/* Wozena-inspired light beam — conic gradient from top center */}
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

    {/* Ambient warm glow orb */}
    <div
      className="pointer-events-none absolute top-1/3 left-1/4 h-[500px] w-[500px] animate-float rounded-full opacity-[0.025] blur-[120px]"
      style={{
        background: "radial-gradient(circle, #C8A960, transparent)",
      }}
      aria-hidden="true"
    />

    {/* Second ambient orb */}
    <div
      className="pointer-events-none absolute bottom-1/4 right-1/4 h-[400px] w-[400px] animate-float-slow rounded-full opacity-[0.02] blur-[100px]"
      style={{
        background: "radial-gradient(circle, #EDEDED, transparent)",
      }}
      aria-hidden="true"
    />

    {/* Subtle engineering grid */}
    <div
      className="pointer-events-none absolute inset-0 opacity-[0.025]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
      aria-hidden="true"
    />

    {/* Bottom fade to surface */}
    <div
      className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-surface to-transparent"
      aria-hidden="true"
    />

    <div className="relative mx-auto w-full max-w-5xl text-center">
      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mb-6 font-mono text-xs tracking-[0.25em] text-accent uppercase sm:text-sm"
      >
        Full-Stack Developer
      </motion.p>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="font-heading text-[clamp(3rem,8vw,8rem)] font-bold leading-[0.92] tracking-tight text-content"
      >
        Darpan
        <br />
        Chakraborty
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mx-auto mt-8 max-w-2xl text-base leading-relaxed text-content-secondary sm:text-lg"
      >
        I architect and ship production web applications — from headless content
        platforms to SaaS products and AI-powered tools — with modern JavaScript
        and cloud-native infrastructure.
      </motion.p>

      <motion.p
        custom={3}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mt-4 font-mono text-xs tracking-wide text-content-muted"
      >
        Currently at{" "}
        <a
          href="https://favfly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-accent transition-colors duration-200 hover:text-accent-hover cursor-pointer"
        >
          Favfly
        </a>
        {" "}· Kolkata, India
      </motion.p>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mt-12"
      >
        <a
          href="#expertise"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#expertise")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-3 rounded-full border border-accent/30 px-8 py-3.5 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/5 cursor-pointer"
        >
          Explore my work
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </div>
  </section>
);
