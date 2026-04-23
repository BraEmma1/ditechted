/**
 * CTA.jsx
 * ─────────────────────────────────────────────────────────────
 * Final, high-converting CTA section for Ditechted.
 * Dark deep-blue gradient background with accent glow effects,
 * staggered entrance animations, and two strong action buttons.
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

// ─── Section ──────────────────────────────────────────────────
const CTA = ({
  headline = <>Talk to an <span className="text-white">expert</span></>,
  subheadline = "Let's help you grow with AI, software, websites, and marketing systems built for real results.",
  primaryBtnText = "Start a Project",
  secondaryBtnText = "Book a Consultation",
  trustText = "No commitment required · Response within 24 hours · Free initial consultation"
}) => (
  <motion.section
    id="cta"
    className="relative overflow-hidden"
    style={{
      paddingBlock: '9rem',
      background: 'linear-gradient(135deg, var(--color-support) 0%, var(--brand-primary) 60%, var(--brand-accent) 100%)',
      backgroundSize: '200% 200%',
    }}
    animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
    transition={{ duration: 15, ease: 'linear', repeat: Infinity }}
  >
    {/* ── Ambient background glows ─────────────────────────── */}
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Top-left soft bloom */}
      <div
        className="absolute -top-1/3 -left-1/4 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.12) 0%, transparent 60%)',
        }}
      />
      {/* Bottom-right soft bloom */}
      <div
        className="absolute -bottom-1/3 -right-1/4 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%)',
        }}
      />
      {/* Center ellipse — adds subtle depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full"
        style={{
          background:
            'radial-gradient(ellipse, rgba(255,255,255,0.06) 0%, transparent 75%)',
        }}
      />
    </div>

    {/* ── Dot grid overlay ─────────────────────────────────── */}
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 opacity-[0.1]"
      style={{
        backgroundImage:
          'radial-gradient(circle, rgba(255,255,255,1) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }}
    />

    {/* ── Content ──────────────────────────────────────────── */}
    <div className="container-site relative z-10 flex flex-col items-center text-center">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center"
      >

        {/* Eyebrow pill */}
        <motion.div variants={fadeInUp}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 text-white text-[0.7rem] font-bold uppercase tracking-[0.12em] mb-8 bg-white/5 backdrop-blur-sm shadow-sm">
            <motion.span
              animate={{ opacity: [1, 0.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
            Let's build together
          </span>
        </motion.div>

        <motion.h2
          variants={fadeInUp}
          className="text-white font-black leading-[1.04] tracking-[-0.03em]"
          style={{ fontSize: 'clamp(2.75rem, 6vw, 5rem)', maxWidth: '700px' }}
        >
          {headline}
        </motion.h2>

        {/* Subtext */}
        <motion.p
          variants={fadeInUp}
          className="mt-6 text-[1.0625rem] text-blue-50 leading-relaxed max-w-lg font-medium"
        >
          {subheadline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={fadeInUp}
          className="flex flex-wrap items-center justify-center gap-4 mt-10"
        >
          {/* Primary */}
          <Link
            to="/contact"
            id="cta-start-project"
            className={[
              'inline-flex items-center gap-2.5',
              'px-8 py-4 rounded-xl',
              'bg-accent text-white text-[0.9375rem] font-bold',
              'shadow-[0_4px_24px_rgba(0,199,252,0.4)]',
              'border border-accent/50',
              'transition-all duration-300',
              'hover:scale-105 hover:bg-[#00d4ff] hover:shadow-[0_8px_40px_rgba(0,199,252,0.6)] hover:border-white/20',
              'active:scale-95',
            ].join(' ')}
          >
            {primaryBtnText}
            <ArrowRight size={17} strokeWidth={2.5} />
          </Link>

          {/* Secondary — ghost */}
          <Link
            to="/contact#consultation"
            id="cta-book-consultation"
            className={[
              'inline-flex items-center gap-2.5',
              'px-8 py-4 rounded-xl',
              'bg-white/10 backdrop-blur-md',
              'text-white text-[0.9375rem] font-semibold',
              'border border-white/20',
              'shadow-sm',
              'transition-all duration-300',
              'hover:bg-white/20 hover:border-white/30 hover:scale-105 hover:shadow-md',
              'active:scale-95',
            ].join(' ')}
          >
            <CalendarDays size={17} strokeWidth={2} />
            {secondaryBtnText}
          </Link>
        </motion.div>

        {/* Trust micro-copy */}
        <motion.p
          variants={fadeInUp}
          className="mt-8 text-[0.75rem] font-semibold tracking-wide text-blue-100/80"
        >
          {trustText}
        </motion.p>

      </motion.div>
    </div>
  </motion.section>
);

export default CTA;
