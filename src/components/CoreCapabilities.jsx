import { motion } from 'framer-motion';
import { Bot, Code2, Workflow, MessageSquareText, MonitorSmartphone, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const CAPABILITIES = [
  {
    icon: Bot,
    title: "AI Agent Systems",
    summary: "Intelligent autonomous systems designed to scale your operations."
  },
  {
    icon: Code2,
    title: "Custom SaaS Development",
    summary: "Cloud-based software engineered for speed, security, and growth."
  },
  {
    icon: Workflow,
    title: "AI Automation Consulting",
    summary: "Strategic workflows that eliminate manual tasks and bottlenecks."
  },
  {
    icon: MessageSquareText,
    title: "AI Chatbot Development",
    summary: "24/7 conversational agents that qualify leads and support customers."
  },
  {
    icon: MonitorSmartphone,
    title: "Website Design & Development",
    summary: "High-converting, premium websites built to generate revenue."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing Growth",
    summary: "Data-driven campaigns to acquire customers at scale."
  }
];

const CoreCapabilities = () => {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-site">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="max-w-2xl"
          >
            <motion.div variants={fadeInUp}>
              <span className="heading-s">Core Capabilities</span>
            </motion.div>
            <motion.h2 variants={fadeInUp} className="heading-l mt-4">
              What We Do Best
            </motion.h2>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={viewportOnce}
          >
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-[0.9375rem] font-bold text-primary hover:text-slate-900 dark:hover:text-white transition-colors duration-300 group"
            >
              View All Services
              <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {CAPABILITIES.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="card group bg-white dark:bg-[#111118] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,199,252,0.08)] hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                  <Icon size={24} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {capability.title}
                </h3>
                <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                  {capability.summary}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default CoreCapabilities;
