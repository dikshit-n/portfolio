import { useReducedMotion } from 'framer-motion';
import type { Variants } from 'framer-motion';

/**
 * Standard scroll-reveal variants. Respects prefers-reduced-motion: if the
 * user prefers reduced motion, the variants collapse to instant (no movement,
 * full opacity) so the page still lays out identically.
 */
export function useScrollReveal(): {
  reduced: boolean;
  fadeUp: Variants;
  stagger: Variants;
} {
  const reduced = useReducedMotion() ?? false;

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: reduced ? 0 : 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduced ? 0 : 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const stagger: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: reduced ? 0 : 0.06,
        delayChildren: reduced ? 0 : 0.05,
      },
    },
  };

  return { reduced, fadeUp, stagger };
}
