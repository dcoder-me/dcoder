"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = [
  { label: "Expertise", href: "#expertise" },
  { label: "Stack", href: "#stack" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

/**
 * @returns {JSX.Element}
 */
export const Nav = () => {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        // Fires when section crosses ~25% from the top of the viewport
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-2xl border-b border-white/[0.10] shadow-[0_2px_40px_rgba(0,0,0,0.55),0_1px_0_rgba(255,255,255,0.05)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="font-mono text-sm font-semibold text-content transition-colors duration-200 hover:text-accent cursor-pointer"
        >
          <span className="text-accent/70">&lt;</span>
          DCoder
          <span className="text-accent/70"> /&gt;</span>
        </a>

        <ul className="hidden items-center gap-8 sm:flex">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                onClick={(e) => handleClick(e, href)}
                className={`relative font-mono text-xs uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  activeSection === href
                    ? "text-accent"
                    : "text-content-muted hover:text-content"
                }`}
              >
                {label}
                {activeSection === href && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <MobileNav activeSection={activeSection} onNavigate={handleClick} />
      </nav>
    </motion.header>
  );
};

/**
 * @param {{ activeSection: string, onNavigate: Function }} props
 * @returns {JSX.Element}
 */
const MobileNav = ({ activeSection, onNavigate }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="relative z-50 flex h-10 w-10 items-center justify-center cursor-pointer"
        aria-label={open ? "Close menu" : "Open menu"}
      >
        <div className="flex flex-col gap-1.5">
          <span
            className={`block h-px w-6 bg-content transition-all duration-300 ${
              open ? "translate-y-[3.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-content transition-all duration-300 ${
              open ? "-translate-y-[3.5px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-40 flex items-center justify-center bg-surface/95 backdrop-blur-md"
        >
          <ul className="flex flex-col items-center gap-8">
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => {
                    onNavigate(e, href);
                    setOpen(false);
                  }}
                  className={`font-mono text-sm uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                    activeSection === href
                      ? "text-accent"
                      : "text-content-muted hover:text-content"
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
};
