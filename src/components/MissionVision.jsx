import { motion } from 'framer-motion';
import { Target, Compass } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const MissionVision = () => {
  return (
    <section className="py-16 md:py-24 bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto"
        >
          {/* Mission Card */}
          <motion.div
            variants={fadeInUp}
            className="card bg-white dark:bg-[#111118] rounded-2xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden group"
          >
            {/* Background accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700/50">
                <Target size={28} className="text-primary" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                To help businesses unlock growth through intelligent systems, custom software, and strategic execution.
              </p>
            </div>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={fadeInUp}
            className="card bg-white dark:bg-[#111118] rounded-2xl p-8 lg:p-10 border border-slate-200 dark:border-slate-800 relative overflow-hidden group"
          >
            {/* Background accent */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent/5 dark:bg-accent/10 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500" />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-slate-50 dark:bg-slate-800/50 flex items-center justify-center mb-6 border border-slate-100 dark:border-slate-700/50">
                <Compass size={28} className="text-accent" strokeWidth={2} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed font-medium">
                To become a trusted modern technology partner for companies building the future.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionVision;
