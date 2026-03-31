"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, animate } from "framer-motion";

/**
 * Animated number counter that triggers once when scrolled into view.
 * @param {{ value: number, suffix?: string, label: string }} props
 * @returns {JSX.Element}
 */
export const StatCounter = ({ value, suffix = "", label }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.25, 0.46, 0.45, 0.94],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return controls.stop;
  }, [isInView, value]);

  return (
    <div ref={ref} className="text-center">
      <p className="font-heading text-2xl font-bold text-slate-100">
        {display}
        {suffix}
      </p>
      <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.15em] text-slate-500">
        {label}
      </p>
    </div>
  );
};
