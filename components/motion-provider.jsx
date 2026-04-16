"use client";

import { LazyMotion, domMax } from "framer-motion";

/**
 * Loads framer-motion features once, so every `m.*` in the tree
 * can share them. `domMax` covers AnimatePresence + layoutId (nav
 * indicator, mobile overlay) while keeping the main bundle thin.
 * @param {{ children: React.ReactNode }} props
 * @returns {JSX.Element}
 */
export const MotionProvider = ({ children }) => (
  <LazyMotion features={domMax} strict>
    {children}
  </LazyMotion>
);
