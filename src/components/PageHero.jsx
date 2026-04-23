import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarDays } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import ParticleBackground from './ParticleBackground';

const PageHero = ({
  label = "Our Services",
  headline = "Solutions Built for Growth",
  subheadline = "We help modern businesses scale with AI systems, custom software, automation, websites, and digital growth strategies designed for measurable results.",
  primaryBtnText = "Start a Project",
  secondaryBtnText = "Book Consultation"
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-50 dark:bg-[#09090f] pt-32 pb-20 md:pt-40 md:pb-28 transition-colors duration-300">
      
      {/* Background Visuals */}
      <ParticleBackground />
      
      <div className="absolute inset-0 pointer-events-none">
        {/* Subtle gradients for depth */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1000px] h-[500px] bg-gradient-to-b from-primary/5 dark:from-primary/10 to-transparent blur-3xl opacity-50 dark:opacity-30" />
      </div>

      <div className="container-site relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          {/* Label */}
          <motion.div variants={fadeInUp}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-800/50 backdrop-blur-md text-xs font-bold uppercase tracking-widest text-primary dark:text-accent mb-6 shadow-sm">
              {label}
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.1] tracking-tight mb-6"
          >
            {headline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeInUp}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl font-medium mb-10"
          >
            {subheadline}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="btn-primary"
            >
              {primaryBtnText}
              <ArrowRight size={18} strokeWidth={2.5} />
            </Link>
            <Link
              to="/contact#consultation"
              className="btn-secondary"
            >
              <CalendarDays size={18} strokeWidth={2.5} />
              {secondaryBtnText}
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PageHero;
