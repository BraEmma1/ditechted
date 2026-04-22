/**
 * ValueSections.jsx
 * ─────────────────────────────────────────────────────────────
 * Two alternating split sections for Ditechted:
 *   1. Scalable Systems  — text left, code visual right
 *   2. Operations/DevOps — pipeline visual left, text right
 *
 * Each section uses scroll-triggered slide-in animations
 * (alternating directions) with staggered bullet points.
 */

import { motion } from 'framer-motion';
import { viewportOnce } from '../lib/animations';
import {
  Layers, Code2, Zap,
  Cloud, GitBranch, Cpu,
  CheckCircle2, Package, Server, RefreshCw, FlaskConical,
} from 'lucide-react';

// ─── Animation factories ──────────────────────────────────────
const slideFrom = (x) => ({
  hidden:  { opacity: 0, x },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] },
  },
});

const staggerParent = {
  hidden:  {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const bulletReveal = {
  hidden:  { opacity: 0, y: 14 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' } },
};

// ─── Bullet item ──────────────────────────────────────────────
const BulletItem = ({ icon: Icon, text }) => (
  <motion.div
    variants={bulletReveal}
    className="flex items-center gap-4 -mx-4 px-4 py-3.5 rounded-xl group hover:bg-primary/5 transition-colors duration-200 cursor-default"
  >
    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-primary transition-all duration-200 group-hover:bg-primary group-hover:text-white">
      <Icon size={18} strokeWidth={2} />
    </div>
    <span className="text-[0.9375rem] font-medium text-slate-700 group-hover:text-slate-900 transition-colors duration-200">
      {text}
    </span>
  </motion.div>
);

// ─── Floating badge (shared) ──────────────────────────────────
const FloatBadge = ({ icon: Icon, label, value, iconBg, delay, style }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.85 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    viewport={viewportOnce}
    className="absolute flex items-center gap-2.5 bg-white rounded-2xl px-3.5 py-2.5 shadow-[0_8px_32px_rgba(0,0,0,0.12)] border border-slate-100"
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
      <p className="text-sm font-bold text-slate-800 leading-tight">{value}</p>
    </div>
  </motion.div>
);

// ─── VISUAL 1: Code editor ────────────────────────────────────
const CodeEditorVisual = () => (
  <div className="relative px-10 py-8">
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      className="relative"
    >
      {/* Card */}
      <div
        className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)] border border-white/10"
        style={{ background: 'linear-gradient(160deg, #0f172a 0%, #0c1624 100%)' }}
      >
        {/* Chrome bar */}
        <div
          className="flex items-center gap-2 px-4 py-3"
          style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
        >
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
          </div>
          <div className="flex gap-1 ml-3">
            <span
              className="text-[11px] px-3 py-1 rounded text-slate-300 font-mono"
              style={{ background: 'rgba(255,255,255,0.1)' }}
            >
              service.ts
            </span>
            <span className="text-[11px] px-3 py-1 text-slate-500 font-mono">config.ts</span>
          </div>
        </div>

        {/* Code body */}
        <div className="p-5 font-mono text-[12px] leading-7 select-none">
          <p>
            <span className="text-purple-400">export async</span>{' '}
            <span className="text-yellow-300">function</span>{' '}
            <span className="text-blue-300">createService</span>
            <span className="text-slate-300">() {'{'}</span>
          </p>
          <p className="pl-4">
            <span className="text-purple-400">const</span>{' '}
            <span className="text-blue-300">db</span>{' '}
            <span className="text-slate-300">= await</span>{' '}
            <span className="text-green-300">connect</span>
            <span className="text-slate-300">(config.db);</span>
          </p>
          <p className="pl-4">
            <span className="text-purple-400">return</span>{' '}
            <span className="text-slate-300">{'{'}</span>
          </p>
          <p className="pl-8">
            <span className="text-blue-300">scale</span>
            <span className="text-slate-300">: </span>
            <span className="text-orange-300">'horizontal'</span>
            <span className="text-slate-300">,</span>
          </p>
          <p className="pl-8">
            <span className="text-blue-300">cache</span>
            <span className="text-slate-300">: db.</span>
            <span className="text-green-300">cache</span>
            <span className="text-slate-300">(),</span>
          </p>
          <p className="pl-8">
            <span className="text-blue-300">uptime</span>
            <span className="text-slate-300">: </span>
            <span className="text-orange-300">'99.9%'</span>
            <span className="text-slate-300">,</span>
          </p>
          <p className="pl-4">
            <span className="text-slate-300">{'}'}</span>
          </p>
          <p>
            <span className="text-slate-300">{'}'}</span>
          </p>
        </div>

        {/* Status bar */}
        <div
          className="flex items-center gap-4 px-4 py-2"
          style={{
            borderTop: '1px solid rgba(255,255,255,0.07)',
            background: 'rgba(0,113,197,0.1)',
          }}
        >
          <div className="flex items-center gap-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-green-400" />
            <span className="text-[10px] text-slate-400 font-mono">TypeScript</span>
          </div>
          <span className="text-[10px] text-slate-500 font-mono">0 errors · Ready</span>
          <span className="text-[10px] text-slate-600 font-mono ml-auto">Ln 9, Col 1</span>
        </div>
      </div>

      {/* Floating badges */}
      <FloatBadge
        icon={CheckCircle2}
        label="Build Status"
        value="All Tests Pass"
        iconBg="#22c55e"
        delay={0.5}
        style={{ bottom: '-20px', left: '-30px', zIndex: 20 }}
      />
      <FloatBadge
        icon={Zap}
        label="Lighthouse"
        value="100 / 100"
        iconBg="#0071C5"
        delay={0.7}
        style={{ top: '-18px', right: '-30px', zIndex: 20 }}
      />
    </motion.div>
  </div>
);

// ─── VISUAL 2: DevOps pipeline ────────────────────────────────
const PipelineVisual = () => {
  const stages = [
    { icon: Code2,        label: 'Code',   color: '#0071C5', bg: 'rgba(0,113,197,0.15)',  border: 'rgba(0,113,197,0.3)'  },
    { icon: FlaskConical, label: 'Test',   color: '#7c3aed', bg: 'rgba(124,58,237,0.15)', border: 'rgba(124,58,237,0.3)' },
    { icon: Package,      label: 'Build',  color: '#d97706', bg: 'rgba(217,119,6,0.15)',  border: 'rgba(217,119,6,0.3)'  },
    { icon: Server,       label: 'Deploy', color: '#059669', bg: 'rgba(5,150,105,0.15)',  border: 'rgba(5,150,105,0.3)'  },
  ];

  const logs = [
    { text: '✓  Dependencies installed',      color: '#4ade80', delay: 0.6 },
    { text: '✓  47 tests passed (0 failed)',   color: '#4ade80', delay: 0.8 },
    { text: '↑  Building Docker image...',     color: '#00C7FC', delay: 1.0 },
    { text: '⚡  Deploying to production...',  color: '#facc15', delay: 1.2 },
  ];

  return (
    <div className="relative px-10 py-8">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6.5, repeat: Infinity, ease: 'easeInOut' }}
        className="relative"
      >
        {/* Card */}
        <div
          className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.22)] border border-white/10"
          style={{ background: 'linear-gradient(160deg, #0f172a 0%, #0c1624 100%)' }}
        >
          {/* Chrome bar */}
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
          >
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
            </div>
            <span className="text-[11px] text-slate-400 ml-2 font-mono">ci-pipeline.yml</span>
            <div className="ml-auto flex items-center gap-1.5">
              <motion.div
                animate={{ opacity: [1, 0.2, 1] }}
                transition={{ duration: 1.6, repeat: Infinity }}
                className="w-1.5 h-1.5 rounded-full bg-yellow-400"
              />
              <span className="text-[11px] text-yellow-400 font-medium">Running</span>
            </div>
          </div>

          <div className="p-5 space-y-5">
            {/* Stage label */}
            <p className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">
              Deployment Pipeline
            </p>

            {/* Pipeline stage nodes */}
            <div className="flex items-center">
              {stages.map((stage, i) => (
                <div key={stage.label} className="flex items-center flex-1 last:flex-none">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.75 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.25 + i * 0.13, duration: 0.35 }}
                    viewport={viewportOnce}
                    className="flex flex-col items-center gap-2"
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center"
                      style={{ background: stage.bg, border: `1px solid ${stage.border}` }}
                    >
                      <stage.icon size={18} style={{ color: stage.color }} strokeWidth={1.75} />
                    </div>
                    <span className="text-[10px] text-slate-400 font-medium">{stage.label}</span>
                  </motion.div>

                  {i < stages.length - 1 && (
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      transition={{ delay: 0.4 + i * 0.13, duration: 0.35 }}
                      viewport={viewportOnce}
                      className="flex-1 h-px mb-5 mx-2"
                      style={{
                        background:
                          'linear-gradient(90deg, rgba(0,113,197,0.5), rgba(0,199,252,0.5))',
                        transformOrigin: 'left',
                      }}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Log output */}
            <div
              className="rounded-xl p-3.5 space-y-2"
              style={{ background: 'rgba(0,0,0,0.35)' }}
            >
              {logs.map(({ text, color, delay }) => (
                <motion.p
                  key={text}
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay, duration: 0.3 }}
                  viewport={viewportOnce}
                  className="text-[11px] font-mono"
                  style={{ color }}
                >
                  {text}
                </motion.p>
              ))}
            </div>

            {/* Progress bar */}
            <div>
              <div className="flex justify-between mb-1.5">
                <span className="text-[10px] text-slate-400 font-medium">Overall Progress</span>
                <span
                  className="text-[10px] font-mono font-bold"
                  style={{ color: '#00C7FC' }}
                >
                  78%
                </span>
              </div>
              <div
                className="h-1.5 rounded-full"
                style={{ background: 'rgba(255,255,255,0.08)' }}
              >
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: '78%' }}
                  transition={{ delay: 0.8, duration: 1.5, ease: 'easeOut' }}
                  viewport={viewportOnce}
                  className="h-full rounded-full"
                  style={{ background: 'linear-gradient(90deg, #0071C5, #00C7FC)' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating badges */}
        <FloatBadge
          icon={CheckCircle2}
          label="Last Deploy"
          value="Success · 2m ago"
          iconBg="#22c55e"
          delay={0.5}
          style={{ top: '-18px', right: '-30px', zIndex: 20 }}
        />
        <FloatBadge
          icon={RefreshCw}
          label="Deployments"
          value="3× per day avg."
          iconBg="#0071C5"
          delay={0.7}
          style={{ bottom: '-20px', left: '-30px', zIndex: 20 }}
        />
      </motion.div>
    </div>
  );
};

// ─── Generic split section ────────────────────────────────────
const ValueSection = ({ label, title, description, bullets, Visual, reversed, bg }) => {
  const textX   = reversed ? 40 : -40;
  const visualX = reversed ? -40 : 40;

  return (
    <section className={`section ${bg}`}>
      <div className="container-site">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">

          {/* ── Text column ──────────────────────────────── */}
          <motion.div
            className={reversed ? 'lg:order-2' : ''}
            variants={staggerParent}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            {/* Eyebrow */}
            <motion.div variants={slideFrom(textX)}>
              <span className="heading-s">{label}</span>
            </motion.div>

            {/* Title */}
            <motion.h2 variants={slideFrom(textX)} className="heading-l mt-4">
              {title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={slideFrom(textX)}
              className="body-lead mt-5 max-w-[480px]"
            >
              {description}
            </motion.p>

            {/* Bullet points (nested stagger) */}
            <motion.div variants={staggerParent} className="mt-8 space-y-1">
              {bullets.map(({ icon, text }) => (
                <BulletItem key={text} icon={icon} text={text} />
              ))}
            </motion.div>
          </motion.div>

          {/* ── Visual column ─────────────────────────────── */}
          <motion.div
            className={reversed ? 'lg:order-1' : ''}
            variants={slideFrom(visualX)}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <Visual />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

// ─── Section data ─────────────────────────────────────────────
const SECTION_1 = {
  label:       'Scalable Systems',
  title:       'Build systems that scale with your business',
  description: 'We engineer robust digital foundations built to grow with you — from startup to enterprise scale, without technical debt slowing you down.',
  bullets: [
    { icon: Layers, text: 'Scalable architecture design' },
    { icon: Code2,  text: 'Clean, maintainable codebases' },
    { icon: Zap,    text: 'Performance-first engineering' },
  ],
  Visual:   CodeEditorVisual,
  reversed: false,
  bg:       'bg-white',
};

const SECTION_2 = {
  label:       'Operations & DevOps',
  title:       'Optimize and scale your operations',
  description: 'Streamline your infrastructure and automate your workflows with cloud-native tooling and intelligent CI/CD that keeps your business moving fast.',
  bullets: [
    { icon: Cloud,     text: 'Cloud-native deployment' },
    { icon: GitBranch, text: 'DevOps and CI/CD pipelines' },
    { icon: Cpu,       text: 'Intelligent automation systems' },
  ],
  Visual:   PipelineVisual,
  reversed: true,
  bg:       'bg-slate-50',
};

// ─── Default export ───────────────────────────────────────────
const ValueSections = () => (
  <>
    <ValueSection {...SECTION_1} />
    <ValueSection {...SECTION_2} />
  </>
);

export default ValueSections;
