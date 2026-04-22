/**
 * FAQ.jsx
 * ─────────────────────────────────────────────────────────────
 * Frequently Asked Questions accordion section.
 * Uses Framer Motion for smooth height expansions and icon rotations.
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

// ─── Data ─────────────────────────────────────────────────────
const FAQS = [
  {
    id: 1,
    question: 'How long does a typical project take?',
    answer: 'Timelines vary based on scope and complexity. A standard web application MVP takes 6–8 weeks, while large-scale enterprise migrations or complex AI integrations can run for 3–6 months. We define clear milestones during the initial discovery phase.',
  },
  {
    id: 2,
    question: 'What technologies do you work with?',
    answer: 'We focus on modern, scalable stacks. Our core expertise includes React, Next.js, and Node.js for software development, alongside cloud infrastructure running on AWS or Google Cloud. For data and AI, we leverage Python, TensorFlow, and modern data warehouses.',
  },
  {
    id: 3,
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes. We offer fully managed post-launch retainers that cover server monitoring, performance optimization, security patching, and iterative feature development to ensure your systems remain scalable and secure.',
  },
  {
    id: 4,
    question: 'How do you ensure project quality and performance?',
    answer: 'Quality is built into our routine. We enforce strict code reviews, maintain comprehensive automated testing pipelines (CI/CD), and perform rigorous load testing before launch. Performance budgets are established mapped back to your business KPIs.',
  },
  {
    id: 5,
    question: 'Can you work with our existing systems or team?',
    answer: 'Absolutely. We frequently augment existing engineering teams or take over legacy codebases. We start with a comprehensive technical audit to understand your current architecture and identify safe paths for modernization or integration.',
  },
  {
    id: 6,
    question: 'How do we get started?',
    answer: 'It begins with a free initial discovery call. Reach out via our contact page to schedule a session where we’ll discuss your goals, immediate technical challenges, and see if our engineering approach is the right fit for your business.',
  },
];

// ─── Accordion Item ───────────────────────────────────────────
const AccordionItem = ({ faq, isOpen, onToggle }) => {
  return (
    <div className="border-b border-slate-100 dark:border-slate-800 last:border-none">
      <button
        type="button"
        className="w-full py-6 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md group"
        onClick={onToggle}
      >
        <span
          className={`text-lg font-semibold transition-colors duration-200 ${
            isOpen ? 'text-primary' : 'text-slate-800 dark:text-slate-200 group-hover:text-primary'
          }`}
        >
          {faq.question}
        </span>
        
        {/*
          Icon wrapper: Rotates 180deg when open so the Plus icon does a flip.
          When open, we also want to fade out the vertical bar to make it look like a Minus.
          Actually, rotating 45deg makes an X, rotating 180deg keeps it a Plus if it's the exact same icon.
          We can just use a Framer Motion animation to switch between Plus and Minus.
        */}
        <div 
          className={`w-9 h-9 rounded-full flex items-center justify-center shrink-0 ml-4 transition-colors duration-300 ${
            isOpen ? 'bg-primary/10 text-primary' : 'bg-slate-50 dark:bg-slate-800 text-slate-400 dark:text-slate-500 group-hover:bg-slate-100 dark:group-hover:bg-slate-700 group-hover:text-primary'
          }`}
        >
            <motion.div
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {/* To switch from Plus to Minus cleanly without layout shift: */}
              <div className="relative w-4 h-4 flex items-center justify-center">
                {/* Horizontal bar (always visible) */}
                <span className="absolute w-full h-[2px] bg-current rounded-full" />
                {/* Vertical bar (fades/scales away when open) */}
                <motion.span 
                  className="absolute w-[2px] h-full bg-current rounded-full"
                  animate={{ 
                    scaleY: isOpen ? 0 : 1,
                    opacity: isOpen ? 0 : 1
                  }}
                  transition={{ duration: 0.2 }}
                />
              </div>
            </motion.div>
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
            className="overflow-hidden"
          >
            <p className="body-text pb-6 text-[1.0625rem]">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Section ──────────────────────────────────────────────────
const FAQ = () => {
  // Only one item open at a time; null means all closed
  const [openId, setOpenId] = useState(null);

  const handleToggle = (id) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="section bg-white dark:bg-slate-900" id="faq">
      <div className="container-site">

        <div className="max-w-3xl mx-auto flex flex-col items-center text-center mb-12 lg:mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
          >
            <motion.div variants={fadeInUp}>
              <span className="heading-s">FAQ</span>
            </motion.div>
            
            <motion.h2 variants={fadeInUp} className="heading-l mt-4">
              Frequently asked questions
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="body-lead mt-5">
              Everything you need to know before starting a project with us.
            </motion.p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          {FAQS.map((faq) => (
            <AccordionItem
              key={faq.id}
              faq={faq}
              isOpen={openId === faq.id}
              onToggle={() => handleToggle(faq.id)}
            />
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default FAQ;
