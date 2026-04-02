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
  const [mobileOpen, setMobileOpen] = useState(false);

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
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      },
    );

    // Clear active when hero is in view
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setActiveSection("");
      },
      { threshold: 0.2 },
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
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleMobileNav = (e, href) => {
    handleClick(e, href);
    setMobileOpen(false);
  };

  return (
    <>
      {/* Header — fixed, always on top */}
      <motion.header
        initial={{ y: 0, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/[0.04] backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="font-mono text-sm font-semibold text-content transition-colors duration-200 cursor-pointer"
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
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger — inside the header, hidden on desktop */}
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="sm:hidden flex h-10 w-10 items-center justify-center cursor-pointer"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            <div className="flex flex-col gap-1.5">
              <span
                className={`block h-px w-6 bg-content transition-all duration-300 ${
                  mobileOpen ? "translate-y-[3.5px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-6 bg-content transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[3.5px] -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </nav>
      </motion.header>

      {/* Mobile overlay — sibling to header, renders above everything */}
      {mobileOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center sm:hidden"
          style={{
            background: "rgba(5,5,5,0.97)",
            backdropFilter: "blur(20px)",
          }}
          onClick={() => setMobileOpen(false)}
        >
          <ul
            className="flex flex-col items-center gap-8"
            onClick={(e) => e.stopPropagation()}
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={(e) => handleMobileNav(e, href)}
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
    </>
  );
};
