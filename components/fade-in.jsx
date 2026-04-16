"use client";

import { m, useReducedMotion } from "framer-motion";

const EASE = [0.32, 0.72, 0, 1];

/**
 * @param {{ children: React.ReactNode, delay?: number, className?: string, y?: number }} props
 * @returns {JSX.Element}
 */
export const FadeIn = ({ children, delay = 0, className = "", y = 24 }) => {
  const shouldReduce = useReducedMotion();
  return (
    <m.div
      initial={shouldReduce ? {} : { opacity: 0, y, filter: "blur(6px)" }}
      whileInView={shouldReduce ? {} : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: shouldReduce ? 0 : 0.75, delay, ease: EASE }}
      className={className}
    >
      {children}
    </m.div>
  );
};

/**
 * @param {{ children: React.ReactNode, staggerDelay?: number, className?: string }} props
 * @returns {JSX.Element}
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  className = "",
}) => {
  const shouldReduce = useReducedMotion();
  return (
    <m.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: shouldReduce ? 0 : staggerDelay },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 * @returns {JSX.Element}
 */
export const StaggerItem = ({ children, className = "" }) => {
  const shouldReduce = useReducedMotion();
  return (
    <m.div
      variants={{
        hidden: shouldReduce ? {} : { opacity: 0, y: 24, filter: "blur(6px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: shouldReduce ? 0 : 0.75, ease: EASE },
        },
      }}
      className={className}
    >
      {children}
    </m.div>
  );
};
