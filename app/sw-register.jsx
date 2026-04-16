"use client";

import { useEffect } from "react";

/**
 * Registers the service worker for PWA offline support.
 * Renders nothing — side-effect only.
 */
export function SwRegister() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js").catch(console.error);
    }
  }, []);

  return null;
}
