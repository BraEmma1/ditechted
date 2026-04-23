import { motion } from 'framer-motion';
import { BarChart3, Layers, Zap, Clock } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const PRINCIPLES = [
  {
    num: "01",
    icon: BarChart3,
    title: "Results Over Noise",
    description: "We focus on outcomes, not empty buzzwords.",
    color: "var(--brand-primary)"
  },
  {
    num: "02",
    icon: Layers,
    title: "Systems Win",
    description: "Strong systems create consistent growth.",
    color: "#8b5cf6" // Purple
  },
  {
    num: "03",
    icon: Zap,
    title: "Simplicity Scales",
    description: "The best solutions are clear, efficient, and sustainable.",
    color: "#f59e0b" // Amber
  },
  {
    num: "04",
    icon: Clock,
    title: "Long-Term Thinking",
    description: "We build with tomorrow in mind.",
    color: "var(--brand-accent)"
  }
];

const CorePrinciples = () => {
  return (
    <section className="section bg-white dark:bg-[#09090f] transition-colors duration-300">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="heading-s">What We Believe</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="heading-l mt-4">
            Our Principles
          </motion.h2>
        </motion.div>

        {/* Principles Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;
            return (
              <motion.div
                key={principle.num}
                variants={fadeInUp}
                className="card group flex flex-col p-8 rounded-2xl bg-slate-50 dark:bg-[#111118] border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)] dark:hover:shadow-[0_8px_30px_rgba(0,199,252,0.05)] hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm border border-slate-100 dark:border-slate-700/50">
                    <Icon size={24} style={{ color: principle.color }} strokeWidth={2} />
                  </div>
                  <span className="text-2xl font-black text-slate-200 dark:text-slate-800 tracking-tighter">
                    {principle.num}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary transition-colors duration-300">
                  {principle.title}
                </h3>
                <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default CorePrinciples;
