import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import { SERVICES } from '../lib/data';

const ServicesGrid = ({ 
  variant = 'summary', // 'summary' | 'detailed' | 'capabilities'
  items = SERVICES,
  showAllLink = true,
  headingLabel,
  headingTitle,
  headingHighlight,
  subheading
}) => {
  return (
    <section className={`section transition-colors duration-300 ${variant === 'detailed' ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-[#09090f]'}`} id="services">
      <div className="container-site">
        
        {/* Section Header */}
        <div className={`flex flex-col ${variant === 'detailed' ? 'max-w-3xl' : 'md:flex-row md:items-end justify-between'} gap-6 mb-16 md:mb-20`}>
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className={variant === 'detailed' ? '' : 'max-w-2xl'}
          >
            {headingLabel && (
              <motion.div variants={fadeInUp}>
                <span className="heading-s">{headingLabel}</span>
              </motion.div>
            )}
            <motion.h2 variants={fadeInUp} className="heading-l mt-4">
              {headingTitle} <span className="text-primary">{headingHighlight}</span>
            </motion.h2>
            {subheading && (
              <motion.p variants={fadeInUp} className="body-lead mt-6 max-w-2xl">
                {subheading}
              </motion.p>
            )}
          </motion.div>
          
          {(variant === 'summary' || variant === 'capabilities') && showAllLink && (
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
          )}
        </div>

        {/* Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {items.map((service, index) => {
            const Icon = service.icon;
            
            if (variant === 'detailed') {
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="card group flex flex-col h-full bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center mb-6 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <Icon size={28} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">{service.description}</p>
                  
                  <div className="mb-8">
                    <h4 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200 uppercase mb-4">What We Deliver</h4>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-accent/40 mt-1.5 shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50">
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700/50">
                      <span className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-accent mb-1">Business Benefit</span>
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200">{service.benefit}</span>
                    </div>
                  </div>
                </motion.div>
              );
            }

            if (variant === 'capabilities') {
              return (
                <motion.div
                  key={service.id}
                  variants={fadeInUp}
                  className="card group bg-white dark:bg-[#111118] p-8 rounded-2xl border border-slate-200 dark:border-slate-800 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,199,252,0.08)] hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} strokeWidth={2} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{service.title}</h3>
                  <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 font-medium leading-relaxed">{service.shortDescription}</p>
                </motion.div>
              );
            }

            // Summary (Default)
            return (
              <motion.div
                key={service.id}
                variants={fadeInUp}
                className="card group relative p-8 lg:p-9 flex flex-col h-full bg-white dark:bg-[#111118] border border-slate-100 dark:border-slate-800"
              >
                <div className="w-14 h-14 rounded-2xl mb-7 flex items-center justify-center bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110">
                  <Icon size={26} strokeWidth={1.75} />
                </div>
                <h3 className="heading-m mb-3.5 transition-colors duration-300 group-hover:text-primary">{service.title}</h3>
                <p className="body-text flex-1 mb-8">{service.shortDescription}</p>
                <Link to={service.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 mt-auto group/link">
                  Learn More
                  <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesGrid;
