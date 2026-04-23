import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import { PROJECTS, PROJECT_CATEGORIES } from '../lib/data';

const PortfolioGrid = ({ 
  variant = 'detailed', // 'minimal' | 'detailed'
  limit = 100,
  showFilters = true,
  headingLabel = "Our Work",
  headingTitle = "Real Solutions.",
  headingHighlight = "Real Results.",
  subheading = "A selection of projects where we designed, built, and scaled high-performance systems."
}) => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const displayProjects = PROJECTS.slice(0, limit).filter(project => 
    !showFilters || 
    activeCategory === "All Projects" || 
    project.category === activeCategory || 
    project.secondaryCategory === activeCategory
  );

  return (
    <section className={`section transition-colors duration-300 ${variant === 'detailed' ? 'bg-slate-50 dark:bg-slate-900' : 'bg-white dark:bg-[#09090f]'}`} id="works">
      <div className="container-site">
        
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col mb-16"
        >
          <motion.div variants={fadeInUp}>
            <span className="heading-s">{headingLabel}</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mt-4">
            <motion.h2 variants={fadeInUp} className="heading-l max-w-lg">
              {headingTitle} <span className="text-primary">{headingHighlight}</span>
            </motion.h2>
            
            <motion.p variants={fadeInUp} className="body-lead max-w-md md:text-right">
              {subheading}
            </motion.p>
          </div>
        </motion.div>

        {/* Filter Section (only for detailed) */}
        {showFilters && variant === 'detailed' && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {PROJECT_CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                  activeCategory === category
                    ? 'bg-primary text-white border-primary shadow-[0_4px_12px_rgba(0,199,252,0.3)]'
                    : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-700 hover:border-primary/50 dark:hover:border-primary/50'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project) => {
              const Icon = project.icon;
              
              if (variant === 'minimal') {
                return (
                  <motion.div
                    key={project.id}
                    layout
                    variants={fadeInUp}
                    className="group relative flex flex-col h-full bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-[0_4px_24px_rgba(0,0,0,0.03)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,113,197,0.12)] overflow-hidden"
                  >
                    <div className="relative h-56 w-full overflow-hidden bg-slate-100 dark:bg-slate-900 flex items-center justify-center p-6">
                      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-110" style={{ background: project.bgGradient }} />
                      <div className="relative z-10 w-full h-full max-w-[240px] rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-2xl flex flex-col p-4 transition-transform duration-700 group-hover:scale-105">
                        <div className="flex items-center gap-2 mb-4">
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                          <div className="w-2.5 h-2.5 rounded-full bg-white/20" />
                        </div>
                        <div className="flex-1 flex items-center justify-center">
                          <Icon size={48} strokeWidth={1} style={{ color: project.accent }} className="opacity-80 drop-shadow-md" />
                        </div>
                        <div className="w-1/2 h-2 rounded-full bg-white/20 mt-4" />
                      </div>
                    </div>
                    <div className="p-7 lg:p-8 flex flex-col flex-1">
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.techStack.slice(0, 3).map(tech => (
                          <span key={tech} className="px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 rounded-md">{tech}</span>
                        ))}
                      </div>
                      <h3 className="heading-m mb-3 transition-colors duration-300 group-hover:text-primary">{project.title}</h3>
                      <p className="body-text flex-1 mb-8">{project.summary}</p>
                      <Link to={project.link} className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 mt-auto group/link">
                        View Case Study
                        <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              }

              // Detailed (Default)
              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="card group flex flex-col h-full bg-white dark:bg-[#111118] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
                >
                  <div className="w-full h-56 relative bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                    <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 leading-relaxed mb-6">{project.summary}</p>
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-2">
                        {project.results.map((result, idx) => (
                          <li key={idx} className="flex items-start gap-2.5 text-[0.875rem] font-medium text-slate-700 dark:text-slate-300">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary/60 dark:bg-accent/60 mt-[0.4rem] shrink-0" />
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mb-8">
                      <div className="flex flex-wrap gap-2">
                        {project.techStack.map(tech => (
                          <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[0.8rem] font-semibold rounded-md border border-slate-200 dark:border-slate-700/50">{tech}</span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-auto border-t border-slate-100 dark:border-slate-800/80 pt-6">
                      <Link to={project.link} className="inline-flex items-center gap-2 text-[0.9375rem] font-bold text-primary dark:text-accent hover:text-slate-900 dark:hover:text-white transition-colors duration-300">
                        {project.ctaText}
                        <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {variant === 'minimal' && (
          <motion.div variants={fadeInUp} className="mt-16 text-center">
            <Link to="/case-studies" className="inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-100 text-[0.9375rem] font-semibold border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700 hover:scale-105">
              View All Projects
              <ArrowRight size={17} strokeWidth={2.5} />
            </Link>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default PortfolioGrid;
