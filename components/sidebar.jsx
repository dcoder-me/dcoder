"use client";

import { useActiveSection } from "./use-active-section";
import { StatCounter } from "./stat-counter";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Stack", href: "stack" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

const STATS = [
  { value: 4, suffix: "+", label: "Years" },
  { value: 50, suffix: "+", label: "Websites" },
  { value: 10, suffix: "+", label: "Clients" },
];

/**
 * @param {{ href: string }} props
 * @returns {void}
 */
const scrollTo = (href) => {
  const el = document.getElementById(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/**
 * Sticky left sidebar with profile, stats, navigation, and social links.
 * Desktop only — hidden on mobile.
 * @returns {JSX.Element}
 */
export const Sidebar = () => {
  const active = useActiveSection();

  return (
    <aside className="hidden lg:flex lg:fixed lg:left-0 lg:top-0 lg:h-screen lg:w-[340px] lg:flex-col lg:overflow-y-auto lg:border-r lg:border-void-700 lg:bg-void-900">
      {/* Subtle top gradient accent */}
      <div
        className="pointer-events-none absolute left-0 right-0 top-0 h-[2px]"
        style={{
          background: "linear-gradient(90deg, #22D3EE, #A78BFA)",
        }}
        aria-hidden="true"
      />

      <div className="flex flex-1 flex-col gap-8 px-8 py-10">
        {/* Avatar */}
        <div className="flex flex-col items-start gap-5">
          <div
            className="relative h-16 w-16 rounded-full p-[2px]"
            style={{
              background: "linear-gradient(135deg, #22D3EE, #A78BFA)",
            }}
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-void-800">
              <span className="font-heading text-xl font-bold text-slate-100">
                DC
              </span>
            </div>
          </div>

          <div>
            <h1 className="font-heading text-xl font-bold leading-tight text-slate-100">
              Darpan Chakraborty
            </h1>
            <p className="mt-0.5 font-mono text-sm text-slate-500">
              Web Developer
            </p>
          </div>

          {/* Availability badge */}
          <div className="flex items-center gap-2 rounded-full border border-void-600 bg-void-800 px-3 py-1.5">
            <span
              className="h-2 w-2 rounded-full bg-emerald-400"
              style={{ animation: "pulse-dot 2s ease-in-out infinite" }}
            />
            <span className="font-mono text-xs text-emerald-400">
              Available for projects
            </span>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-void-700" />

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2">
          {STATS.map(({ value, suffix, label }) => (
            <StatCounter key={label} value={value} suffix={suffix} label={label} />
          ))}
        </div>

        {/* Divider */}
        <div className="h-px bg-void-700" />

        {/* Location */}
        <div className="flex items-center gap-2 text-slate-500">
          <svg
            className="h-3.5 w-3.5 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
          <span className="font-mono text-xs">Kolkata, India</span>
        </div>

        {/* Nav */}
        <nav aria-label="Sections">
          <ul className="space-y-1">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <button
                  onClick={() => scrollTo(href)}
                  className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left transition-all duration-200 cursor-pointer ${
                    active === href
                      ? "bg-void-700 text-slate-100"
                      : "text-slate-500 hover:bg-void-800 hover:text-slate-300"
                  }`}
                >
                  <span
                    className={`h-px w-5 transition-all duration-200 ${
                      active === href
                        ? "w-6 bg-cyan-400"
                        : "bg-void-600 group-hover:bg-slate-500"
                    }`}
                  />
                  <span className="font-mono text-xs uppercase tracking-[0.15em]">
                    {label}
                  </span>
                  {active === href && (
                    <span className="ml-auto h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Spacer */}
        <div className="flex-1" />

        {/* Divider */}
        <div className="h-px bg-void-700" />

        {/* Social + email */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4">
            <SocialLink
              href="https://github.com/dcoder-me"
              label="GitHub"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                </svg>
              }
            />
            <SocialLink
              href="https://linkedin.com/in/darpan-chakraborty"
              label="LinkedIn"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              }
            />
            <SocialLink
              href="https://x.com/dcoder_me"
              label="X / Twitter"
              icon={
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              }
            />
          </div>

          <a
            href="mailto:hello@dcoder.me"
            className="font-mono text-xs text-slate-500 transition-colors duration-200 hover:text-cyan-400"
          >
            hello@dcoder.me
          </a>
        </div>
      </div>
    </aside>
  );
};

/**
 * @param {{ href: string, label: string, icon: React.ReactNode }} props
 * @returns {JSX.Element}
 */
const SocialLink = ({ href, label, icon }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-slate-500 transition-colors duration-200 hover:text-cyan-400 cursor-pointer"
    aria-label={label}
  >
    {icon}
  </a>
);
