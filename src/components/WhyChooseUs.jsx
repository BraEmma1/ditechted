import { motion } from 'framer-motion';
import { Target, Zap, ShieldCheck, BarChart3 } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const FEATURES = [
  {
    icon: Target,
    title: "Business-First Thinking",
    description: "We solve growth problems, not just technical tasks. Every system we build is designed to directly impact your bottom line."
  },
  {
    icon: Zap,
    title: "Modern Execution",
    description: "AI-first systems built for the future. We leverage cutting-edge technology to give you a competitive advantage today."
  },
  {
    icon: ShieldCheck,
    title: "Reliable Delivery",
    description: "Clear communication and professional project management. We deliver on time, on budget, and without the typical agency headaches."
  },
  {
    icon: BarChart3,
    title: "Results Focused",
    description: "Everything measured around ROI, efficiency, and scale. If it doesn't move the needle for your business, we don't build it."
  }
];

const WhyChooseUs = () => {
  return (
    <section className="section bg-white dark:bg-[#09090f] transition-colors duration-300">
      <div className="container-site">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left: Text & Header */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="lg:col-span-5 lg:pr-8"
          >
            <motion.div variants={fadeInUp}>
              <span className="heading-s">The Ditechted Advantage</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="heading-l mt-4">
              Why Businesses Choose Ditechted
            </motion.h2>
            <motion.p variants={fadeInUp} className="body-lead mt-6 text-slate-600 dark:text-slate-400">
              We don't just write code or run campaigns. We partner with ambitious companies to build scalable systems that drive real, measurable growth.
            </motion.p>
          </motion.div>

          {/* Right: Feature Grid */}
          <div className="lg:col-span-7">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOnce}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    variants={fadeInUp}
                    className="group bg-slate-50 dark:bg-slate-800/50 p-8 rounded-2xl border border-slate-100 dark:border-slate-800 transition-all duration-300 hover:bg-white dark:hover:bg-slate-800 hover:border-primary/20 dark:hover:border-accent/20 hover:shadow-[0_8px_30px_rgba(0,199,252,0.08)]"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white dark:bg-slate-700 flex items-center justify-center shadow-sm mb-6 text-slate-700 dark:text-slate-300 group-hover:text-primary dark:group-hover:text-accent transition-colors duration-300 border border-slate-100 dark:border-slate-600/50">
                      <Icon size={24} strokeWidth={2} />
                    </div>
                    <h3 className="text-[1.125rem] font-bold text-slate-900 dark:text-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
