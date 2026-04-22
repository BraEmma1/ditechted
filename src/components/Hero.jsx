/**
 * Hero.jsx
 * ─────────────────────────────────────────────────────────────
 * Two-column hero section for Ditechted.
 * Left: headline, subtext, CTAs, trust stats
 * Right: animated dark dashboard / tech visual
 */

import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ChevronRight,
  Shield, TrendingUp, Zap,
} from 'lucide-react';
import { fadeInUp, staggerContainer } from '../lib/animations';

// ─── Reusable helpers ─────────────────────────────────────────

/** Floating badge card (shown outside the dashboard) */
const StatBadge = ({ icon: Icon, label, value, iconBg, delay, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.8, y: 10 }}
    animate={{ opacity: 1, scale: 1, y: 0 }}
    transition={{ delay, duration: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
    className="absolute flex items-center gap-2.5 bg-white/95 dark:bg-slate-800/95 backdrop-blur-sm rounded-2xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.13)] border border-white dark:border-slate-700"
    style={style}
  >
    <div
      className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0"
      style={{ background: iconBg }}
    >
      <Icon size={14} strokeWidth={2.5} className="text-white" />
    </div>
    <div>
      <p className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider leading-none mb-0.5">
        {label}
      </p>
      <p className="text-sm font-bold text-slate-800 dark:text-slate-100 leading-tight">{value}</p>
    </div>
  </motion.div>
);

/** Animated progress bar inside dashboard */
const ProgressBar = ({ label, value, width, delay }) => (
  <div>
    <div className="flex justify-between mb-1.5">
      <span className="text-[11px] text-slate-400 font-medium">{label}</span>
      <span className="text-[11px] font-mono font-bold" style={{ color: 'var(--brand-accent)' }}>{value}</span>
    </div>
    <div className="h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.08)' }}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width }}
        transition={{ delay, duration: 1.2, ease: 'easeOut' }}
        className="h-full rounded-full"
        style={{ background: 'linear-gradient(90deg, var(--brand-primary), var(--brand-accent))' }}
      />
    </div>
  </div>
);

// ─── Right-side visual ────────────────────────────────────────
const HeroVisual = () => {
  const chartBars = [38, 55, 47, 72, 58, 88, 74];

  return (
    /* Outer container — enough padding for overflowing badges */
    <div className="relative w-full flex items-center justify-center min-h-[500px] px-14 py-10">

      {/* Radial glow backdrop */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 70% at 55% 50%, rgba(0,113,197,0.09) 0%, transparent 70%)',
        }}
      />

      {/* Subtle dot-grid pattern */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #cbd5e1 1px, transparent 1px)',
          backgroundSize: '22px 22px',
        }}
      />

      {/* Floating wrapper — subtle vertical bob */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative z-10 w-full max-w-[400px]"
      >

        {/* ── Dashboard card ─────────────────────────────── */}
        <div
          className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.25)]"
          style={{ background: 'linear-gradient(160deg, #0f172a 0%, #0c1624 100%)' }}
        >
          {/* Chrome bar */}
          <div
            className="flex items-center gap-2 px-4 py-3 border-b"
            style={{ borderColor: 'rgba(255,255,255,0.07)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-[11px] text-slate-500 ml-1.5 font-mono">
              ditechted.dashboard
            </span>
            <div className="ml-auto flex items-center gap-1.5">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 2.2, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-green-400"
              />
              <span className="text-[11px] text-green-400 font-medium">Live</span>
            </div>
          </div>

          {/* Card content */}
          <div className="p-5 space-y-5">

            {/* Header row */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest">
                  System Overview
                </p>
                <p className="text-white font-semibold text-sm mt-0.5">Q2 2025 Report</p>
              </div>
              <div className="text-right">
                <p className="text-[10px] text-slate-500 font-medium">Global Uptime</p>
                <p className="text-sm font-bold font-mono" style={{ color: 'var(--brand-accent)' }}>
                  99.9%
                </p>
              </div>
            </div>

            {/* Progress bars */}
            <div className="space-y-3.5">
              <ProgressBar label="Performance Score"   value="98.6%"  width="98.6%" delay={0.6} />
              <ProgressBar label="Response Time"       value="142 ms" width="88%"   delay={0.8} />
              <ProgressBar label="Deploy Success Rate" value="100%"   width="100%"  delay={1.0} />
            </div>

            {/* Bar chart — Monthly Growth */}
            <div>
              <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-3">
                Monthly Growth
              </p>
              <div className="flex items-end gap-1.5" style={{ height: '56px' }}>
                {chartBars.map((h, i) => (
                  <div
                    key={i}
                    style={{ flex: 1, height: '100%', display: 'flex', alignItems: 'flex-end' }}
                  >
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{
                        delay: 0.7 + i * 0.07,
                        duration: 0.55,
                        ease: 'easeOut',
                      }}
                      style={{
                        width: '100%',
                        borderRadius: '3px 3px 0 0',
                        background:
                          i === 5
                            ? 'linear-gradient(to top, var(--brand-primary), var(--brand-accent))'
                            : 'rgba(0, 113, 197, 0.22)',
                      }}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Tag strip */}
            <div className="flex items-center gap-2 flex-wrap">
              {['Cloud Native', 'AI-Ready', 'Zero Downtime', 'SOC 2'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.3 + i * 0.08 }}
                  className="text-[10px] font-semibold px-2.5 py-1 rounded-full"
                  style={{
                    background: 'rgba(0,113,197,0.18)',
                    color: 'var(--brand-accent)',
                    border: '1px solid rgba(0,199,252,0.2)',
                  }}
                >
                  {tag}
                </motion.span>
              ))}
            </div>

          </div>
        </div>

        {/* ── Floating badge — top-left ──────────────────── */}
        <StatBadge
          icon={Shield}
          label="Security"
          value="All Systems Secure"
          iconBg="#22c55e"
          delay={1.0}
          style={{ top: '-22px', left: '-56px', zIndex: 20 }}
        />

        {/* ── Floating badge — bottom-right ─────────────── */}
        <StatBadge
          icon={TrendingUp}
          label="Client Growth"
          value="+42% YoY"
          iconBg="var(--brand-primary)"
          delay={1.2}
          style={{ bottom: '-20px', right: '-52px', zIndex: 20 }}
        />

        {/* ── Floating badge — middle-right ─────────────── */}
        <StatBadge
          icon={Zap}
          label="Delivery Speed"
          value="2× Faster"
          iconBg="#7c3aed"
          delay={1.4}
          style={{ top: '50%', right: '-60px', transform: 'translateY(-50%)', zIndex: 20 }}
        />

      </motion.div>
    </div>
  );
};

// ─── Hero Section ─────────────────────────────────────────────
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(160deg,#f5f9ff_0%,#ffffff_55%,#f0f7ff_100%)] dark:bg-[linear-gradient(160deg,#0f172a_0%,#0c1624_55%,#0f172a_100%)]"
      style={{
        paddingTop: '5rem',
        paddingBottom: '6rem',
      }}
    >
      {/* Decorative background blobs */}
      <div
        aria-hidden="true"
        className="absolute -top-48 -right-48 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,199,252,0.10) 0%, transparent 65%)',
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-36 -left-36 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(0,113,197,0.09) 0%, transparent 65%)',
        }}
      />

      <div className="container-site relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 xl:gap-20 items-center">

          {/* ── Left: Text Content ─────────────────────────── */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Eyebrow label */}
            <motion.div variants={fadeInUp}>
              <span className="heading-s">
                IT Consulting &amp; Digital Transformation
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="heading-xl mt-4 lg:mt-5"
            >
              We build{' '}
              <span className="text-primary">high&#8209;performance</span>{' '}
              digital systems for modern businesses
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={fadeInUp}
              className="body-lead mt-5 lg:mt-6 max-w-[500px]"
            >
              Custom software, cloud infrastructure, and AI solutions designed
              to scale your business — built for performance and built to last.
            </motion.p>

            {/* Trust Indicators */}
            <motion.div
              variants={fadeInUp}
              className="mt-8 lg:mt-10 flex items-center gap-6 md:gap-8"
            >
              {[
                { value: '150+', label: 'Projects' },
                { value: '99.9%', label: 'Uptime' },
                { value: '8+', label: 'Years' },
              ].map(({ value, label }, i) => (
                <div key={label} className="flex flex-col">
                  <span className="text-[1.75rem] font-extrabold text-slate-900 dark:text-slate-100 leading-none tracking-tight">
                    {value}
                  </span>
                  <span className="text-sm text-slate-500 dark:text-slate-400 mt-1.5 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-4 mt-8 lg:mt-12"
            >
              {/* Primary */}
              <Link
                to="/contact"
                id="hero-cta-primary"
                className={[
                  'inline-flex items-center justify-center gap-2',
                  'px-7 py-3 rounded-md',
                  'bg-primary text-white text-[0.9375rem] font-semibold',
                  'shadow-sm',
                  'transition-all duration-200',
                  'hover:bg-support',
                  'active:scale-95',
                ].join(' ')}
              >
                Start a Project
              </Link>

              {/* Secondary */}
              <Link
                to="/case-studies"
                id="hero-cta-secondary"
                className={[
                  'inline-flex items-center justify-center gap-2',
                  'px-7 py-3 rounded-md',
                  'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-[0.9375rem] font-semibold',
                  'border border-slate-200 dark:border-slate-700',
                  'transition-all duration-200',
                  'hover:bg-slate-50 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 hover:text-slate-900 dark:hover:text-white',
                  'active:scale-95',
                ].join(' ')}
              >
                View Case Studies
                <ArrowRight size={16} strokeWidth={2} className="text-slate-400" />
              </Link>
            </motion.div>
          </motion.div>

          {/* ── Right: Dashboard Visual ─────────────────────── */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
          >
            <HeroVisual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
