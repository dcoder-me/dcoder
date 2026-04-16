"use client";

import { useState, useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import { scrollTo } from "@/lib/scroll-to";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

const EASE = [0.32, 0.72, 0, 1];

/**
 * @returns {JSX.Element}
 */
export const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        const intersecting = entries.filter((e) => e.isIntersecting);
        if (!intersecting.length) return;
        const best = intersecting.reduce((a, b) =>
          a.intersectionRatio >= b.intersectionRatio ? a : b
        );
        setActiveSection(`#${best.target.id}`);
      },
      { rootMargin: "-20% 0px -70% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );

    const heroObserver = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setActiveSection(""); },
      { threshold: 0.2 }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const hero = document.querySelector("section:first-of-type");
    if (hero) heroObserver.observe(hero);

    return () => {
      observer.disconnect();
      heroObserver.disconnect();
    };
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    scrollTo(href);
  };

  const handleMobileNav = (e, href) => {
    handleClick(e, href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Floating pill nav — detached from top */}
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
        <m.nav
          initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
          animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
          transition={{ duration: 0.9, ease: EASE }}
          className="flex items-center gap-8 rounded-full ring-1 ring-white/[0.08] bg-black/60 backdrop-blur-2xl px-6 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_1px_0_rgba(255,255,255,0.05)]"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              scrollTo(0);
            }}
            className="font-mono text-sm font-semibold text-content transition-colors duration-300 cursor-pointer hover:text-accent/80"
          >
            <span className="text-accent/70">&lt;</span>
            DCoder
            <span className="text-accent/70"> /&gt;</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-8 sm:flex">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleClick(e, href)}
                  className={`relative font-mono text-xs uppercase tracking-widest transition-colors duration-300 cursor-pointer ${
                    activeSection === href
                      ? "text-accent"
                      : "text-content-muted hover:text-content"
                  }`}
                  style={{ transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)" }}
                >
                  {label}
                  {activeSection === href && (
                    <m.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-0 right-0 h-px bg-accent/60"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Hamburger — morphs to X */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden flex h-8 w-8 items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="relative h-4 w-5">
              <span
                className="absolute top-1/2 left-0 block h-px w-5 bg-content -translate-y-[3px] transition-all duration-500"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
                  transform: mobileOpen
                    ? "translateY(-50%) rotate(45deg)"
                    : "translateY(calc(-50% - 3px))",
                }}
              />
              <span
                className="absolute top-1/2 left-0 block h-px w-5 bg-content transition-all duration-500"
                style={{
                  transitionTimingFunction: "cubic-bezier(0.32,0.72,0,1)",
                  transform: mobileOpen
                    ? "translateY(-50%) rotate(-45deg)"
                    : "translateY(calc(-50% + 3px))",
                }}
              />
            </div>
          </button>
        </m.nav>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center sm:hidden"
            style={{
              background: "rgba(5,5,5,0.96)",
              backdropFilter: "blur(28px)",
            }}
            onClick={() => setMobileOpen(false)}
          >
            {/* Close button */}
            <button
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-6 flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/10 bg-white/[0.04] text-content-muted cursor-pointer"
              aria-label="Close menu"
            >
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <ul
              className="flex flex-col items-center gap-10"
              onClick={(e) => e.stopPropagation()}
            >
              {NAV_LINKS.map(({ label, href }, i) => (
                <m.li
                  key={href}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: 10, filter: "blur(4px)" }}
                  transition={{ duration: 0.55, delay: 0.06 + i * 0.07, ease: EASE }}
                >
                  <a
                    href={href}
                    onClick={(e) => handleMobileNav(e, href)}
                    className={`font-heading text-3xl font-bold tracking-tight transition-colors duration-200 cursor-pointer ${
                      activeSection === href
                        ? "text-accent"
                        : "text-content hover:text-accent"
                    }`}
                  >
                    {label}
                  </a>
                </m.li>
              ))}
            </ul>

            {/* Bottom eyebrow */}
            <m.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="absolute bottom-12 font-mono text-[10px] tracking-[0.25em] uppercase text-content-muted/40"
            >
              dcoder.me
            </m.p>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
};
