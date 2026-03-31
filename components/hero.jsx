"use client";

import { motion } from "framer-motion";
import { VolumetricLight } from "./volumetric-light";

const VARIANTS = {
  hidden: { opacity: 0, y: 24 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2 + i * 0.12,
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * @returns {JSX.Element}
 */
export const Hero = () => (
  <section className="relative overflow-hidden px-8 pb-24 pt-16 lg:px-14 lg:pb-32 lg:pt-28">
    <VolumetricLight />

    <div className="relative max-w-2xl">
      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={VARIANTS}
        className="font-mono text-xs uppercase tracking-[0.2em] text-cyan-400"
      >
        Full-Stack Web Developer
      </motion.p>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={VARIANTS}
        className="mt-5 font-heading text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-100 sm:text-6xl lg:text-7xl"
      >
        Building the{" "}
        <span
          className="bg-clip-text text-transparent"
          style={{
            backgroundImage: "linear-gradient(135deg, #22D3EE 0%, #A78BFA 100%)",
          }}
        >
          modern
        </span>{" "}
        web.
      </motion.h1>

      <motion.p
        custom={2}
        initial="hidden"
        animate="visible"
        variants={VARIANTS}
        className="mt-6 max-w-lg text-base leading-relaxed text-slate-400 sm:text-lg"
      >
        Specializing in React, Next.js, and headless CMS architecture. Four
        years building production-grade digital experiences at{" "}
        <a
          href="https://favfly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-slate-200 underline-offset-2 hover:text-cyan-400 transition-colors duration-200 cursor-pointer"
        >
          Favfly
        </a>
        .
      </motion.p>

      <motion.div
        custom={3}
        initial="hidden"
        animate="visible"
        variants={VARIANTS}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href="mailto:hello@dcoder.me"
          className="inline-flex items-center gap-2 rounded-lg px-6 py-3 font-mono text-sm font-medium text-void-950 transition-opacity duration-200 hover:opacity-90 cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
          }}
        >
          Get in touch
        </a>

        <button
          onClick={() => {
            const el = document.getElementById("about");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          className="inline-flex items-center gap-2 rounded-lg border border-void-600 px-6 py-3 font-mono text-sm text-slate-400 transition-all duration-200 hover:border-slate-500 hover:text-slate-200 cursor-pointer"
        >
          Explore
          <svg
            className="h-3.5 w-3.5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </motion.div>
    </div>
  </section>
);
