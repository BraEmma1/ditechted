import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const AboutStory = () => {
  return (
    <section className="section bg-white dark:bg-[#09090f] transition-colors duration-300">
      <div className="container-site">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-4xl mx-auto"
        >
          {/* Subheading / Label */}
          <motion.div variants={fadeInUp} className="mb-6 flex justify-center md:justify-start">
            <span className="heading-s">The Origin</span>
          </motion.div>

          <div className="grid md:grid-cols-[1fr_2fr] gap-12 md:gap-16 items-start">
            {/* Title Section */}
            <motion.h2 
              variants={fadeInUp} 
              className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-[1.15] tracking-tight"
            >
              Why <span className="text-primary">Ditechted</span> Exists
            </motion.h2>

            {/* Story Text Section */}
            <motion.div variants={staggerContainer} className="flex flex-col gap-6 text-lg md:text-[1.15rem] leading-relaxed text-slate-600 dark:text-slate-400 font-medium">
              <motion.p variants={fadeInUp}>
                Too many businesses are held back by outdated systems, slow execution, disconnected tools, and agencies that focus on tasks instead of outcomes.
              </motion.p>
              
              <motion.p variants={fadeInUp} className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white">
                Ditechted was built to solve that.
              </motion.p>
              
              <motion.p variants={fadeInUp}>
                We combine technology, strategy, and execution to help companies move faster, operate smarter, and grow with confidence. We don't just build software or run campaigns; we build the foundational systems that allow your business to scale without friction.
              </motion.p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutStory;
