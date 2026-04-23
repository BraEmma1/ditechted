import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const METRICS = [
  {
    value: "150+",
    label: "Projects Delivered"
  },
  {
    value: "42%",
    label: "Average Growth Increase"
  },
  {
    value: "68%",
    label: "Process Efficiency Gains"
  },
  {
    value: "95%",
    label: "Client Retention"
  }
];

const ResultsMetrics = ({
  headingTitle = "Impact Across Projects",
  metricsData = METRICS
}) => {
  return (
    <section className="py-16 md:py-24 bg-white dark:bg-[#09090f] transition-colors duration-300 relative border-b border-slate-100 dark:border-slate-800/50">
      <div className="container-site relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="heading-s">{headingTitle}</span>
          </motion.div>
        </motion.div>

        {/* Metrics Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 lg:gap-8"
        >
          {metricsData.map((metric, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center text-center p-6 rounded-2xl bg-slate-50 dark:bg-slate-800/30 border border-slate-100 dark:border-slate-700/30"
            >
              <h3 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white tracking-tighter mb-2" style={{ background: 'linear-gradient(135deg, var(--brand-primary), var(--brand-accent))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {metric.value}
              </h3>
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400 tracking-wide uppercase">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default ResultsMetrics;
