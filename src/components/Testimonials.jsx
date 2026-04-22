/**
 * Testimonials.jsx
 * ─────────────────────────────────────────────────────────────
 * Scroll-triggered testimonials section for Ditechted.
 * 3-column grid (tablet: 2-col, mobile: 1-col) with
 * staggered card entrance and lift-on-hover effect.
 */

import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────
const TESTIMONIALS = [
  {
    id: 1,
    quote:
      "Ditechted completely transformed our backend infrastructure. We went from constant downtime to 99.9% uptime within 60 days. Their team's depth of expertise is genuinely world-class.",
    name: 'Sarah Mitchell',
    role: 'CTO',
    company: 'NovaPay',
    avatar: 'SM',
    accent: 'var(--brand-primary)',
  },
  {
    id: 2,
    quote:
      "The AI automation system they built reduced our manual processing time by 70%. They didn't just ship code — they understood our business and built something that actually scales.",
    name: 'James Okafor',
    role: 'Head of Operations',
    company: 'LogiCore Systems',
    avatar: 'JO',
    accent: '#7c3aed',
  },
  {
    id: 3,
    quote:
      "Working with Ditechted felt like having a senior engineering team embedded in our company. Fast, strategic, and incredibly reliable. They delivered on every promise.",
    name: 'Priya Sharma',
    role: 'Founder & CEO',
    company: 'Finvela',
    avatar: 'PS',
    accent: '#059669',
  },
];

// ─── Single testimonial card ──────────────────────────────────
const TestimonialCard = ({ quote, name, role, company, avatar, accent }) => (
  <motion.div
    variants={fadeInUp}
    className={[
      'group relative flex flex-col h-full',
      'bg-white dark:bg-slate-800 rounded-2xl p-8',
      'border border-slate-100 dark:border-slate-700',
      'shadow-[0_2px_16px_rgba(0,0,0,0.04)] dark:shadow-[0_2px_16px_rgba(0,0,0,0.15)]',
      'transition-all duration-300',
      'hover:-translate-y-1.5 hover:shadow-[0_16px_48px_rgba(0,0,0,0.09)] dark:hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)]',
      'hover:border-slate-200 dark:hover:border-slate-600',
    ].join(' ')}
  >
    {/* Quote icon */}
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center mb-6 shrink-0"
      style={{ background: `${accent}14` }}
    >
      <Quote size={18} strokeWidth={2} style={{ color: accent }} />
    </div>

    {/* Quote text */}
    <p className="body-text flex-1 leading-relaxed text-slate-600 dark:text-slate-300 mb-8">
      "{quote}"
    </p>

    {/* Author */}
    <div className="flex items-center gap-3.5 pt-6 border-t border-slate-100 dark:border-slate-700/50">
      {/* Avatar */}
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 text-white text-xs font-bold"
        style={{ background: `linear-gradient(135deg, ${accent}, ${accent}aa)` }}
      >
        {avatar}
      </div>
      <div>
        <p className="text-sm font-semibold text-slate-900 dark:text-slate-100 leading-tight">{name}</p>
        <p className="text-xs text-slate-400 mt-0.5 font-medium">
          {role} · {company}
        </p>
      </div>
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────
const Testimonials = () => (
  <section className="section bg-slate-50 dark:bg-slate-900" id="testimonials">
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
          <span className="heading-s">Testimonials</span>
        </motion.div>
        <motion.h2 variants={fadeInUp} className="heading-l mt-4">
          Trusted by teams that value{' '}
          <span className="text-primary">performance</span>
        </motion.h2>
        <motion.p variants={fadeInUp} className="body-lead mt-5">
          Don't take our word for it — here's what the teams we've worked
          with have to say.
        </motion.p>
      </motion.div>

      {/* Cards grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {TESTIMONIALS.map((t) => (
          <TestimonialCard key={t.id} {...t} />
        ))}
      </motion.div>

    </div>
  </section>
);

export default Testimonials;
