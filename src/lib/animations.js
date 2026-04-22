/**
 * animations.js
 * ─────────────────────────────────────────────
 * Reusable Framer Motion animation variants for Ditechted.
 *
 * USAGE:
 *   import { fadeInUp, staggerContainer } from '@/lib/animations';
 *
 *   <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
 *     <motion.h1 variants={fadeInUp}>Hello</motion.h1>
 *     <motion.p variants={fadeInUp}>World</motion.p>
 *   </motion.div>
 */

// ─── Fade In + Slide Up ───────────────────────────────────────
// For individual elements: headings, paragraphs, cards.
export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 28,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // cubic-bezier — smooth ease-out
    },
  },
};

// ─── Fade In Only ─────────────────────────────────────────────
// Subtle opacity reveal, no movement. Good for backgrounds / overlays.
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
};

// ─── Stagger Container ────────────────────────────────────────
// Wraps child elements to animate them in sequence.
// Pair with fadeInUp on children.
export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,    // 100ms between each child
      delayChildren: 0.05,     // tiny initial delay before sequence starts
    },
  },
};

// ─── Slide In from Left ───────────────────────────────────────
// For content panels, feature rows that enter from the side.
export const slideInLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Slide In from Right ──────────────────────────────────────
export const slideInRight = {
  hidden: {
    opacity: 0,
    x: 40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.55,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Scale In ────────────────────────────────────────────────
// For cards, icons, or badge elements that "pop in".
export const scaleIn = {
  hidden: {
    opacity: 0,
    scale: 0.92,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.45,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

// ─── Viewport defaults ────────────────────────────────────────
// Shared viewport config — use with whileInView for scroll-triggered animations.
// import { viewportOnce } from '@/lib/animations';
// <motion.div whileInView="visible" viewport={viewportOnce} ...>
export const viewportOnce = {
  once: true,
  margin: '0px 0px -80px 0px', // trigger slightly before element enters view
};
