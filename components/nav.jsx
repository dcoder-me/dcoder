"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useActiveSection } from "./use-active-section";

const NAV_LINKS = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Stack", href: "stack" },
  { label: "Experience", href: "experience" },
  { label: "Contact", href: "contact" },
];

/**
 * @param {string} href
 * @returns {void}
 */
const scrollTo = (href) => {
  const el = document.getElementById(href);
  if (el) el.scrollIntoView({ behavior: "smooth" });
};

/**
 * Mobile-only top navigation bar with hamburger drawer.
 * Hidden on lg+ (desktop uses Sidebar).
 * @returns {JSX.Element}
 */
export const Nav = () => {
  const [open, setOpen] = useState(false);
  const active = useActiveSection();

  const handleNav = (href) => {
    scrollTo(href);
    setOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 lg:hidden">
      <div
        className="flex items-center justify-between border-b border-void-700 bg-void-900/90 px-5 py-4 backdrop-blur-md"
      >
        {/* DC logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex h-9 w-9 items-center justify-center rounded-full cursor-pointer"
          style={{ background: "linear-gradient(135deg, #22D3EE, #A78BFA)" }}
          aria-label="Scroll to top"
        >
          <span className="font-heading text-sm font-bold text-void-950">
            DC
          </span>
        </button>

        {/* Hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] cursor-pointer"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-[1.5px] w-5 bg-slate-300 transition-all duration-300 ${
              open ? "translate-y-[6.5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-slate-300 transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-[1.5px] w-5 bg-slate-300 transition-all duration-300 ${
              open ? "-translate-y-[6.5px] -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="border-b border-void-700 bg-void-900/95 px-5 py-6 backdrop-blur-md"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <button
                    onClick={() => handleNav(href)}
                    className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left transition-all duration-200 cursor-pointer ${
                      active === href
                        ? "bg-void-700 text-slate-100"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                  >
                    <span
                      className={`h-px transition-all duration-200 ${
                        active === href ? "w-5 bg-cyan-400" : "w-3 bg-void-600"
                      }`}
                    />
                    <span className="font-mono text-xs uppercase tracking-[0.15em]">
                      {label}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
