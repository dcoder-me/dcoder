"use client";

import { useEffect } from "react";
import { registerLenis } from "@/lib/scroll-to";

/**
 * Initializes Lenis smooth scrolling globally, but defers the Lenis
 * import + RAF loop until after the browser is idle — keeps it off
 * the LCP critical path on mobile.
 * @returns {null}
 */
export const SmoothScroll = () => {
  useEffect(() => {
    let lenis;
    let rafId;
    let idleHandle;
    let cancelled = false;

    const schedule =
      typeof window.requestIdleCallback === "function"
        ? window.requestIdleCallback
        : (cb) => setTimeout(cb, 1);
    const cancel =
      typeof window.cancelIdleCallback === "function"
        ? window.cancelIdleCallback
        : clearTimeout;

    idleHandle = schedule(async () => {
      const { default: Lenis } = await import("lenis");
      if (cancelled) return;

      lenis = new Lenis({
        duration: 1.8,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
        smoothTouch: false,
        lerp: 0.1,
      });
      registerLenis(lenis);

      const raf = (time) => {
        lenis.raf(time);
        rafId = requestAnimationFrame(raf);
      };

      rafId = requestAnimationFrame(raf);
    });

    return () => {
      cancelled = true;
      registerLenis(null);
      if (idleHandle != null) cancel(idleHandle);
      if (rafId != null) cancelAnimationFrame(rafId);
      lenis?.destroy();
    };
  }, []);

  return null;
};
