/**
 * Comparison.jsx
 * ─────────────────────────────────────────────────────────────
 * Side-by-side "Traditional IT vs Modern IT" comparison section.
 * Left column slides in from left; right column slides in from
 * right. Items inside each column stagger in sequentially.
 */

import { motion } from 'framer-motion';
import { X, CheckCircle2, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────
const TRADITIONAL_ITEMS = [
  'Slow, rigid development cycles',
  'On-premise, inflexible infrastructure',
  'Reactive, break-fix support model',
  'Hard ceiling on scalability',
  'High operational overhead',
  'Siloed teams and slow delivery',
];

const MODERN_ITEMS = [
  'Agile, iterative development sprints',
  'Cloud-native, elastic infrastructure',
  'Proactive monitoring & incident response',
  'Infinitely scalable architecture',
  'Optimised for cost efficiency',
  'Unified teams with fast deployment',
];

// ─── Animation factories ──────────────────────────────────────
const slideFrom = (x) => ({
  hidden:  { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const staggerItems = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.3 } },
};

const itemReveal = {
  hidden:  { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
};

// ─── Traditional item row ─────────────────────────────────────
const TraditionalItem = ({ text }) => (
  <motion.div
    variants={itemReveal}
    className="flex items-center gap-3.5 py-3.5 border-b border-slate-100 dark:border-slate-700/50 last:border-0"
  >
    <div className="w-6 h-6 rounded-full bg-slate-100 dark:bg-slate-700/50 flex items-center justify-center shrink-0">
      <X size={12} strokeWidth={2.5} className="text-slate-400" />
    </div>
    <span className="text-[0.9375rem] text-slate-400 font-medium line-through decoration-slate-200">
      {text}
    </span>
  </motion.div>
);

// ─── Modern item row ──────────────────────────────────────────
const ModernItem = ({ text }) => (
  <motion.div
    variants={itemReveal}
    className="flex items-center gap-3.5 py-3.5 border-b border-slate-100 dark:border-slate-700/50 last:border-0 group"
  >
    <CheckCircle2
      size={20}
      strokeWidth={2}
      className="shrink-0 text-accent transition-transform duration-300 group-hover:scale-110"
    />
    <span className="text-[0.9375rem] text-slate-700 dark:text-slate-300 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors duration-200">
      {text}
    </span>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────
const Comparison = () => (
  <section className="section bg-slate-50 dark:bg-slate-900" id="comparison">
    <div className="container-site">

      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
      >
        <motion.div variants={fadeInUp}>
          <span className="heading-s">Why Ditechted</span>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="heading-l mt-4">
          Traditional IT vs{' '}
          <span className="text-primary">Modern IT Solutions</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="body-lead mt-5">
          The difference between outdated systems and scalable engineering is more
          than technology — it's a philosophy shift.
        </motion.p>
      </motion.div>

      {/* Comparison columns */}
      <div className="relative grid md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

        {/* ── Left: Traditional ──────────────────────────── */}
        <motion.div
          variants={slideFrom(-48)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-200 dark:border-slate-700 overflow-hidden"
        >
          {/* Column header */}
          <div className="px-8 py-6 bg-slate-50 dark:bg-slate-900/50 border-b border-slate-200 dark:border-slate-700">
            <p className="text-[0.7rem] text-slate-400 font-semibold uppercase tracking-widest mb-1">
              The Old Way
            </p>
            <h3 className="text-xl font-bold text-slate-400">Traditional IT</h3>
          </div>

          {/* Items */}
          <motion.div
            variants={staggerItems}
            className="px-8 py-2"
          >
            {TRADITIONAL_ITEMS.map((item) => (
              <TraditionalItem key={item} text={item} />
            ))}
          </motion.div>
        </motion.div>

        {/* ── VS Badge (desktop only) ─────────────────────── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={viewportOnce}
          className="absolute hidden md:flex left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-11 h-11 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 items-center justify-center shadow-md"
        >
          <span className="text-[0.65rem] font-black text-slate-400 tracking-wider">VS</span>
        </motion.div>

        {/* ── Right: Modern (Ditechted) ───────────────────── */}
        <motion.div
          variants={slideFrom(48)}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="bg-white dark:bg-slate-800 rounded-2xl border border-primary/20 dark:border-primary/40 overflow-hidden shadow-[0_8px_40px_rgba(0,113,197,0.08)] dark:shadow-[0_8px_40px_rgba(0,113,197,0.15)] relative"
        >
          {/* Top accent line */}
          <div
            className="absolute top-0 inset-x-0 h-1 rounded-t-2xl"
            style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-accent))' }}
          />

          {/* Column header */}
          <div className="px-8 py-6 border-b border-slate-100 dark:border-slate-700 flex items-start justify-between mt-1">
            <div>
              <p className="text-[0.7rem] font-semibold uppercase tracking-widest mb-1 text-primary">
                The Ditechted Way
              </p>
              <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100">
                Modern IT{' '}
                <span className="text-primary">(Ditechted)</span>
              </h3>
            </div>
            {/* Recommended badge */}
            <span className="shrink-0 inline-flex items-center px-2.5 py-1 rounded-full text-[0.65rem] font-bold uppercase tracking-wider bg-accent/10 text-accent border border-accent/20">
              Recommended
            </span>
          </div>

          {/* Items */}
          <motion.div
            variants={staggerItems}
            className="px-8 py-2"
          >
            {MODERN_ITEMS.map((item) => (
              <ModernItem key={item} text={item} />
            ))}
          </motion.div>

          {/* CTA inside card */}
          <div className="px-8 pb-8 pt-4">
            <Link
              to="/contact"
              className={[
                'inline-flex items-center gap-2 mt-2',
                'text-sm font-semibold text-primary',
                'hover:text-accent transition-colors duration-200',
              ].join(' ')}
            >
              Get started with Ditechted
              <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

      </div>
    </div>
  </section>
);

export default Comparison;
