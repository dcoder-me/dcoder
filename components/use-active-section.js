"use client";

import { useState, useEffect } from "react";

const SECTION_IDS = ["about", "services", "stack", "experience", "contact"];

/**
 * Tracks which section is currently in view based on scroll position.
 * @returns {string} The id of the currently active section.
 */
export const useActiveSection = () => {
  const [active, setActive] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const current = SECTION_IDS.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 140 && rect.bottom > 140;
      });
      if (current) setActive(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return active;
};
