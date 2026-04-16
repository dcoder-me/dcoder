/** @type {import('lenis').default | null} */
let lenis = null;

/**
 * Register the Lenis instance so scrollTo can use it.
 * Called once from SmoothScroll after Lenis initializes.
 * @param {import('lenis').default} instance
 */
export const registerLenis = (instance) => {
  lenis = instance;
};

/**
 * Scroll to a target using Lenis if available, with native fallback.
 * @param {string | number | HTMLElement} target - CSS selector, y offset, or element
 * @param {{ offset?: number }} [options]
 */
export const scrollTo = (target, options = {}) => {
  if (lenis) {
    lenis.scrollTo(target, { offset: -100, ...options });
    return;
  }
  if (typeof target === "number") {
    window.scrollTo({ top: target });
  } else {
    const el = typeof target === "string" ? document.querySelector(target) : target;
    el?.scrollIntoView();
  }
};
