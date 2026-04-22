/**
 * Works.jsx
 * ─────────────────────────────────────────────────────────────
 * Portfolio / Case Studies section for Ditechted.
 * Displays a responsive grid of project cards with image placeholders,
 * tech tags, and hover zoom effects.
 */

import { motion } from 'framer-motion';
import { ArrowRight, Activity, Fingerprint, Network } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import { Link } from 'react-router-dom';

// ─── Data ─────────────────────────────────────────────────────
const PROJECTS = [
  {
    id: 1,
    title: 'NovaPay Transaction Core',
    description: 'Re-architected a legacy payment gateway to handle 10k+ TPS with 99.99% uptime using a cloud-native microservices approach.',
    tags: ['Go', 'Kubernetes', 'PostgreSQL'],
    link: '/case-studies/novapay',
    // We use a CSS gradient + Lucide icon for a premium mockup placeholder
    bgGradient: 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)',
    icon: Activity,
    accent: 'var(--brand-accent)'
  },
  {
    id: 2,
    title: 'LogiCore AI Dispatch',
    description: 'Built an intelligent routing platform that optimized delivery fleets across 5 countries, reducing operational costs by 24%.',
    tags: ['Python', 'TensorFlow', 'AWS'],
    link: '/case-studies/logicore',
    bgGradient: 'linear-gradient(135deg, #064e3b 0%, #022c22 100%)',
    icon: Network,
    accent: '#34d399'
  },
  {
    id: 3,
    title: 'HealthSync Data Lake',
    description: 'Designed a HIPAA-compliant real-time data lake, unifying patient records across 40+ regional clinics into one secure dashboard.',
    tags: ['React', 'Node.js', 'Snowflake'],
    link: '/case-studies/healthsync',
    bgGradient: 'linear-gradient(135deg, #4c1d95 0%, #2e1065 100%)',
    icon: Fingerprint,
    accent: '#a78bfa'
  }
];

// ─── Single Project Card ──────────────────────────────────────
const ProjectCard = ({ title, description, tags, link, bgGradient, icon: Icon, accent }) => (
  <motion.div
    variants={fadeInUp}
    className="group relative flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0_4px_24px_rgba(0,0,0,0.03)] dark:shadow-none transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,113,197,0.12)] overflow-hidden"
  >
    {/* Visual Mockup Area */}
    <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-6">
      {/* Background layer */}
      <div 
        className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110"
        style={{ background: bgGradient }}
      />
      
      {/* Abstract Dashboard/System UI wireframe */}
      <div className="relative z-10 w-full h-full max-w-[240px] rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col p-4 transition-transform duration-700 group-hover:scale-105">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Icon size={48} strokeWidth={1} style={{ color: accent }} className="opacity-80 drop-shadow-md" />
        </div>
        <div className="w-1/2 h-2 rounded-full bg-white/20 mt-4" />
        <div className="w-1/3 h-2 rounded-full bg-white/10 mt-2" />
      </div>
    </div>

    {/* Content Area */}
    <div className="p-7 lg:p-8 flex flex-col flex-1">
      {/* Tech Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map(tag => (
          <span key={tag} className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 rounded-md">
            {tag}
          </span>
        ))}
      </div>

      <h3 className="heading-m mb-3 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      
      <p className="body-text flex-1 mb-8">
        {description}
      </p>

      {/* Action Link */}
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 mt-auto group/link"
      >
        View Case Study
        <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
      </Link>
    </div>
  </motion.div>
);

// ─── Section ──────────────────────────────────────────────────
const Works = () => (
  <section className="section bg-white dark:bg-slate-900" id="works">
    <div className="container-site">

      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col mb-16"
      >
        <motion.div variants={fadeInUp}>
          <span className="heading-s">Our Work</span>
        </motion.div>
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
          <motion.h2 
            variants={fadeInUp} 
            className="heading-l max-w-lg"
          >
            Real systems. <span className="text-primary">Real results.</span>
          </motion.h2>
          
          <motion.p 
            variants={fadeInUp} 
            className="body-lead max-w-md md:text-right"
          >
            A selection of projects where we designed, built, and scaled high-performance systems.
          </motion.p>
        </div>
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {PROJECTS.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </motion.div>

      {/* View All CTA */}
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        variants={fadeInUp}
        className="mt-16 text-center"
      >
        <Link
          to="/case-studies"
          className={[
            'inline-flex items-center gap-2.5',
            'px-7 py-3.5 rounded-xl',
            'bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-[0.9375rem] font-semibold',
            'border border-slate-200 dark:border-slate-700',
            'transition-all duration-300',
            'hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105',
            'active:scale-95',
          ].join(' ')}
        >
          View All Projects
          <ArrowRight size={17} strokeWidth={2.5} />
        </Link>
      </motion.div>

    </div>
  </section>
);

export default Works;
