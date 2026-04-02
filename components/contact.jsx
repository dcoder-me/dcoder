"use client";

import { FadeIn } from "./fade-in";

/**
 * @returns {JSX.Element}
 */
export const Contact = () => (
  <section id="contact" className="relative px-6 py-32 lg:py-40">
    {/* Subtle divider glow */}
    <div
      className="pointer-events-none absolute top-0 left-1/2 h-px w-2/3 -translate-x-1/2"
      style={{
        background:
          "linear-gradient(90deg, transparent, rgba(200,169,96,0.15), transparent)",
      }}
      aria-hidden="true"
    />

    <div className="mx-auto max-w-2xl text-center">
      <FadeIn>
        <p className="font-mono text-xs tracking-[0.25em] text-accent uppercase sm:text-sm">
          Contact
        </p>
      </FadeIn>

      <FadeIn delay={0.1}>
        <h2 className="mt-4 font-heading text-4xl font-bold text-content sm:text-5xl lg:text-6xl">
          Say Hello
        </h2>
      </FadeIn>

      <FadeIn delay={0.2}>
        <p className="mt-6 text-base leading-relaxed text-content-secondary">
          Got a project to build, a product to ship, or just want to talk about
          the web? Either way — the inbox is open.
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <a
          href="mailto:hello@dcoder.me"
          className="group mt-10 inline-flex items-center gap-3 rounded-full border border-accent/30 px-10 py-4 font-mono text-sm text-accent transition-all duration-300 hover:border-accent/60 hover:bg-accent/[0.07] cursor-pointer"
        >
          <svg
            className="h-4 w-4 transition-transform duration-300 group-hover:scale-110"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          Write to me
        </a>
      </FadeIn>
    </div>
  </section>
);

/**
 * @returns {JSX.Element}
 */
export const Footer = () => (
  <footer className="px-6 pb-8 pt-16">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-6">
      <div className="flex items-center gap-6">
        <SocialLink
          href="https://github.com/dcoder-me"
          label="GitHub"
          icon={
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          }
        />
        <SocialLink
          href="https://linkedin.com/in/darpan-chakraborty"
          label="LinkedIn"
          icon={
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          }
        />
        <SocialLink
          href="https://x.com/dcoder_me"
          label="X / Twitter"
          icon={
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
          }
        />
      </div>

      <p className="font-mono text-xs text-content-muted">
        Designed & Built by Darpan Chakraborty
      </p>
    </div>
  </footer>
);

/**
 * @param {{ href: string, label: string, icon: React.ReactNode }} props
 * @returns {JSX.Element}
 */
const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-content-muted transition-colors duration-200 hover:text-accent cursor-pointer"
    aria-label={label}
  >
    {icon}
  </a>
);
