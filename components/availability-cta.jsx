"use client";

import { FadeIn } from "./fade-in";

/**
 * "Let's Work Together" CTA section with gradient-bordered card.
 * @returns {JSX.Element}
 */
export const AvailabilityCta = () => (
  <section id="contact" className="px-8 py-20 lg:px-14 lg:py-28">
    <FadeIn>
      <div
        className="rounded-2xl p-px"
        style={{
          background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
        }}
      >
        <div className="rounded-2xl bg-void-800 px-8 py-14 text-center sm:px-14">
          {/* Availability badge */}
          <div className="mb-8 flex justify-center">
            <div className="flex items-center gap-2 rounded-full border border-void-600 bg-void-900 px-4 py-2">
              <span
                className="h-2 w-2 rounded-full bg-emerald-400"
                style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
              />
              <span className="font-mono text-xs text-emerald-400">
                Open to new projects
              </span>
            </div>
          </div>

          <h2 className="font-heading text-4xl font-extrabold leading-tight text-slate-100 sm:text-5xl">
            Let's Work Together
          </h2>

          <p className="mx-auto mt-5 max-w-md text-base leading-relaxed text-slate-400">
            Have a project in mind? Whether it's a new build, a CMS migration,
            or a performance audit — I'd love to hear about it.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="mailto:hello@dcoder.me"
              className="inline-flex items-center gap-2 rounded-lg px-8 py-3.5 font-mono text-sm font-medium text-void-950 transition-opacity duration-200 hover:opacity-90 cursor-pointer"
              style={{ background: "linear-gradient(135deg, #22D3EE, #A78BFA)" }}
            >
              Email Me
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </a>

            <a
              href="https://linkedin.com/in/darpan-chakraborty"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-void-500 px-8 py-3.5 font-mono text-sm text-slate-400 transition-all duration-200 hover:border-slate-400 hover:text-slate-200 cursor-pointer"
            >
              View LinkedIn
            </a>
          </div>
        </div>
      </div>
    </FadeIn>
  </section>
);
