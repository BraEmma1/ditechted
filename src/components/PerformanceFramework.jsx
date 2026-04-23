import { motion } from 'framer-motion';
import { Search, PenTool, Rocket, LineChart } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const FRAMEWORK_STEPS = [
  {
    num: "01",
    icon: Search,
    title: "Diagnose",
    description: "Identify growth blockers, inefficiencies, missed opportunities."
  },
  {
    num: "02",
    icon: PenTool,
    title: "Design",
    description: "Create the right AI, software, or marketing system."
  },
  {
    num: "03",
    icon: Rocket,
    title: "Deploy",
    description: "Launch efficiently with precision and testing."
  },
  {
    num: "04",
    icon: LineChart,
    title: "Scale",
    description: "Optimize performance and compound results."
  }
];

const PerformanceFramework = () => {
  return (
    <section className="section bg-white dark:bg-[#09090f] transition-colors duration-300 relative border-t border-slate-100 dark:border-slate-800/50">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 md:mb-24"
        >
          <motion.div variants={fadeInUp}>
            <span className="heading-s">Our Methodology</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="heading-l mt-4">
            Our Performance Framework
          </motion.h2>
          <motion.p variants={fadeInUp} className="body-lead mt-5 max-w-xl mx-auto">
            How we turn business challenges into scalable, revenue-generating systems.
          </motion.p>
        </motion.div>

        {/* Framework Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative"
        >
          {/* Connector Line (Desktop) */}
          <div className="hidden lg:block absolute top-[4.5rem] left-[12%] right-[12%] h-px bg-slate-200 dark:bg-slate-800 z-0" />

          {FRAMEWORK_STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                variants={fadeInUp}
                className="relative z-10 flex flex-col items-center text-center group"
              >
                {/* Icon & Number Circle */}
                <div className="w-24 h-24 rounded-full bg-white dark:bg-[#111118] border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center shadow-sm mb-8 relative transition-transform duration-500 group-hover:-translate-y-2 group-hover:border-primary/20 dark:group-hover:border-accent/20 group-hover:shadow-[0_8px_30px_rgba(0,199,252,0.15)]">
                  <div className="absolute -top-3 -right-2 w-8 h-8 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-[11px] font-black flex items-center justify-center border-4 border-white dark:border-[#09090f]">
                    {step.num}
                  </div>
                  <Icon size={32} className="text-slate-400 dark:text-slate-500 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300" strokeWidth={1.5} />
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 leading-relaxed max-w-[260px]">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default PerformanceFramework;
