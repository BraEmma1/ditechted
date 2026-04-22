/**
 * Process.jsx
 * ─────────────────────────────────────────────────────────────
 * "Our Process" horizontal timeline section for Ditechted.
 * Displays 4 steps with numbers, a connecting line on desktop,
 * stagger animations, and card hover effects.
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────
const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Discovery',
    bullets: ['Understanding business needs', 'Defining goals and KPIs', 'Initial feasibility study'],
  },
  {
    num: '02',
    title: 'Planning & Architecture',
    bullets: ['System design & modeling', 'Tech stack decisions', 'Sprint resource allocation'],
  },
  {
    num: '03',
    title: 'Development',
    bullets: ['Agile development cycles', 'Continuous testing (CI/CD)', 'Regular stakeholder demos'],
  },
  {
    num: '04',
    title: 'Deployment & Optimization',
    bullets: ['Stress testing & launch', 'Proactive monitoring', 'Iterative continuous improvement'],
  },
];

// ─── Component ────────────────────────────────────────────────
const Process = () => (
  <section className="section bg-slate-50 dark:bg-slate-900" id="process">
    <div className="container-site">

      {/* Section header */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20"
      >
        <motion.div variants={fadeInUp}>
          <span className="heading-s">Our Process</span>
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp} 
          className="heading-l mt-5"
        >
          A structured approach to building scalable systems
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp} 
          className="body-lead mt-6 max-w-2xl"
        >
          From discovery to deployment, we follow a clear and efficient process to deliver reliable results without the guesswork.
        </motion.p>
      </motion.div>

      {/* Process Timeline Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={viewportOnce}
        className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6"
      >
        {/* Connecting Background Line (Desktop only) */}
        <div 
          className="hidden lg:block absolute top-[2.75rem] left-[10%] right-[10%] h-0.5 bg-slate-200 dark:bg-slate-700/50 -z-0"
          aria-hidden="true"
        />

        {PROCESS_STEPS.map((step, idx) => (
          <motion.div
            key={step.num}
            variants={fadeInUp}
            className="group relative z-10 flex flex-col bg-white dark:bg-slate-800 lg:bg-transparent lg:dark:bg-transparent rounded-2xl lg:rounded-none p-8 lg:p-0 border border-slate-100 dark:border-slate-700 lg:border-none lg:dark:border-none shadow-[0_4px_24px_rgba(0,0,0,0.02)] lg:shadow-none hover:-translate-y-1.5 lg:hover:-translate-y-0 lg:hover:-mt-2 transition-all duration-300"
          >
            {/* Step Number Dot */}
            <div className="flex justify-center mb-8 lg:mb-10 relative">
              <div className="w-14 h-14 lg:w-20 lg:h-20 rounded-full bg-white dark:bg-slate-800 border-4 border-slate-50 dark:border-slate-900 flex items-center justify-center shadow-sm relative z-10 group-hover:border-primary/10 transition-colors duration-300">
                <div className="w-full h-full rounded-full bg-slate-100 dark:bg-slate-700 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <span className="text-xl lg:text-2xl font-black text-slate-400 dark:text-slate-300 group-hover:text-white transition-colors duration-300">
                    {step.num}
                  </span>
                </div>
              </div>
            </div>

            {/* Card Content - Has white background on desktop to look like a card */}
            <div className="relative flex flex-col items-center text-center lg:bg-white lg:dark:bg-slate-800 lg:rounded-2xl lg:p-6 lg:border lg:border-slate-100 lg:dark:border-slate-700 lg:shadow-[0_4px_24px_rgba(0,0,0,0.02)] lg:group-hover:shadow-[0_16px_48px_rgba(0,113,197,0.1)] lg:group-hover:border-primary/30 transition-all duration-300 h-full">
              <h3 className="heading-m mb-4 group-hover:text-primary transition-colors duration-300">
                {step.title}
              </h3>
              
              <ul className="flex flex-col gap-2.5 text-center items-center w-full">
                {step.bullets.map((bullet) => (
                  <li key={bullet} className="text-[0.9375rem] text-slate-500 dark:text-slate-400 font-medium w-full pb-2.5 border-b border-slate-100 dark:border-slate-700/50 last:border-0 last:pb-0">
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Arrow connector between cards (Mobile/Tablet only) */}
            {idx !== PROCESS_STEPS.length - 1 && (
              <div className="lg:hidden absolute -bottom-6 left-1/2 -translate-x-1/2 w-0.5 h-4 bg-slate-200 dark:bg-slate-700" />
            )}
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default Process;
