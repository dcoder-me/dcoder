"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Cursor-following radial gradient spotlight with warm gold tint.
 * Skips entirely on coarse-pointer devices (touch/mobile) and
 * throttles setState to one rAF per frame to avoid main-thread
 * thrash during hydration.
 * @returns {JSX.Element | null}
 */
export const CursorSpotlight = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [enabled, setEnabled] = useState(false);
  const rafRef = useRef(0);
  const nextPosRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (isCoarsePointer || prefersReduced) return;

    setEnabled(true);

    const flush = () => {
      rafRef.current = 0;
      setPosition(nextPosRef.current);
    };

    const handleMouseMove = (e) => {
      nextPosRef.current = { x: e.clientX, y: e.clientY };
      if (!rafRef.current) rafRef.current = requestAnimationFrame(flush);
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [isVisible]);

  if (!enabled) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300"
      style={{
        opacity: isVisible ? 1 : 0,
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(200, 169, 96, 0.03), transparent 40%)`,
      }}
      aria-hidden="true"
    />
  );
};
