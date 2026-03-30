"use client";

import { motion } from "framer-motion";

/**
 * @param {{ children: React.ReactNode, delay?: number, className?: string, y?: number }} props
 * @returns {JSX.Element}
 */
export const FadeIn = ({ children, delay = 0, className = "", y = 24 }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-80px" }}
    transition={{ duration: 0.5, delay, ease: [0.16, 1, 0.3, 1] }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * @param {{ children: React.ReactNode, staggerDelay?: number, className?: string }} props
 * @returns {JSX.Element}
 */
export const StaggerContainer = ({
  children,
  staggerDelay = 0.08,
  className = "",
}) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-80px" }}
    variants={{
      hidden: {},
      visible: { transition: { staggerChildren: staggerDelay } },
    }}
    className={className}
  >
    {children}
  </motion.div>
);

/**
 * @param {{ children: React.ReactNode, className?: string }} props
 * @returns {JSX.Element}
 */
export const StaggerItem = ({ children, className = "" }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
      },
    }}
    className={className}
  >
    {children}
  </motion.div>
);
