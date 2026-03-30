"use client";

import { motion } from "framer-motion";

const LINE_VARIANTS = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.4 + i * 0.1,
      duration: 0.6,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

/**
 * @returns {JSX.Element}
 */
export const Hero = () => (
  <section className="relative flex min-h-[100dvh] items-center px-6">
    <div className="mx-auto w-full max-w-6xl">
      <motion.p
        custom={0}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mb-4 font-mono text-sm text-cyan-400"
      >
        Hi, my name is
      </motion.p>

      <motion.h1
        custom={1}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="font-heading text-5xl font-bold leading-tight tracking-tight text-slate-200 sm:text-6xl lg:text-7xl"
      >
        Darpan Chakraborty.
      </motion.h1>

      <motion.h2
        custom={2}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mt-2 font-heading text-3xl font-semibold leading-tight text-slate-400 sm:text-4xl lg:text-5xl"
      >
        I build things for the web.
      </motion.h2>

      <motion.p
        custom={3}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mt-6 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg"
      >
        Web developer specializing in building modern, high-performance
        applications with{" "}
        <span className="text-slate-200">React, Next.js</span>, and{" "}
        <span className="text-slate-200">headless CMS architecture</span>.
        Currently at{" "}
        <a
          href="https://favfly.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 transition-colors duration-200 hover:text-cyan-500 cursor-pointer"
        >
          Favfly
        </a>
        .
      </motion.p>

      <motion.div
        custom={4}
        initial="hidden"
        animate="visible"
        variants={LINE_VARIANTS}
        className="mt-10"
      >
        <a
          href="#work"
          onClick={(e) => {
            e.preventDefault();
            document
              .querySelector("#work")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="group inline-flex items-center gap-2 rounded border border-cyan-400 px-6 py-3 font-mono text-sm text-cyan-400 transition-all duration-200 hover:bg-cyan-400/10 cursor-pointer"
        >
          View my work
          <svg
            className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5"
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
