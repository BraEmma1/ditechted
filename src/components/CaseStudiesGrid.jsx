import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const CATEGORIES = [
  "All Projects",
  "AI Systems",
  "SaaS Platforms",
  "Websites",
  "Automation",
  "Marketing Growth"
];

const CASE_STUDIES = [
  {
    id: 1,
    title: "SalesFlow AI Assistant",
    summary: "AI lead qualification and response system that increased conversion speed and automated inquiries.",
    results: ["+40% Lead Conversion", "24/7 Automated Responses", "15hrs/week Saved"],
    techStack: ["OpenAI", "Node.js", "WhatsApp API", "CRM Integration"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "AI Systems",
    secondaryCategory: "Automation"
  },
  {
    id: 2,
    title: "EduCore SaaS Platform",
    summary: "Cloud-based management platform for schools with dashboards, automation, and reporting.",
    results: ["10,000+ Active Users", "-30% Admin Time", "Zero Downtime Launch"],
    techStack: ["React", "Node.js", "PostgreSQL", "AWS"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "SaaS Platforms"
  },
  {
    id: 3,
    title: "RetailBoost Growth Funnel",
    summary: "Paid ad campaigns, landing pages, and conversion copy that increased monthly revenue.",
    results: ["3.2x ROAS", "+65% Monthly Revenue", "-20% Cost Per Lead"],
    techStack: ["Meta Ads", "Google Ads", "Funnel Analytics", "Copywriting"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    ctaText: "View Case Study",
    category: "Marketing Growth"
  },
  {
    id: 4,
    title: "SupportBot Pro",
    summary: "AI chatbot built for website and WhatsApp support with 24/7 automated engagement.",
    results: ["2min Avg Response Time", "85% Queries Resolved", "Seamless CRM Sync"],
    techStack: ["GPT API", "Dialogflow", "WhatsApp API", "Webhooks"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "AI Systems"
  },
  {
    id: 5,
    title: "Prestige Corporate Website",
    summary: "Premium business website redesign built to improve trust and lead generation.",
    results: ["+120% Organic Traffic", "45% Lower Bounce Rate", "Page Speed < 1.5s"],
    techStack: ["WordPress", "Elementor", "SEO", "CRO"],
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "Websites"
  },
  {
    id: 6,
    title: "OpsFlow Automation System",
    summary: "Business workflow automation system that reduced repetitive tasks and improved speed.",
    results: ["20+ Workflows Automated", "$5k/month Saved", "Zero Human Error"],
    techStack: ["Zapier", "Make", "Airtable", "OpenAI"],
    image: "https://images.unsplash.com/photo-1518432031352-d6fc5c10da5a?auto=format&fit=crop&q=80&w=800",
    ctaText: "Visit Site",
    category: "Automation"
  }
];

const CaseStudiesGrid = () => {
  const [activeCategory, setActiveCategory] = useState("All Projects");

  const filteredProjects = CASE_STUDIES.filter(project => 
    activeCategory === "All Projects" || 
    project.category === activeCategory || 
    project.secondaryCategory === activeCategory
  );

  return (
    <section className="section bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <div className="container-site">
        
        {/* Filter Section */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {CATEGORIES.map((category) => (
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

        {/* Featured Case Studies Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="card group flex flex-col h-full bg-white dark:bg-[#111118] rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden"
              >
                {/* Image Section */}
                <div className="w-full h-56 relative bg-slate-100 dark:bg-slate-800 overflow-hidden shrink-0 border-b border-slate-100 dark:border-slate-800">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle overlay gradient for premium feel */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content Section */}
                <div className="p-8 flex flex-col flex-grow">
                  {/* 1. Project Name */}
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* 2. Summary */}
                  <p className="text-[0.9375rem] text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                    {project.summary}
                  </p>

                  {/* 2.5. Key Results */}
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

                  {/* 3. Tech Stack Used */}
                  <div className="mb-8">
                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map(tech => (
                        <span key={tech} className="px-3 py-1 bg-slate-100 dark:bg-slate-800/80 text-slate-600 dark:text-slate-300 text-[0.8rem] font-semibold rounded-md border border-slate-200 dark:border-slate-700/50">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* 4. CTA Button (Aligned Bottom) */}
                  <div className="mt-auto border-t border-slate-100 dark:border-slate-800/80 pt-6">
                    <Link
                      to="#"
                      className="inline-flex items-center gap-2 text-[0.9375rem] font-bold text-primary dark:text-accent hover:text-slate-900 dark:hover:text-white transition-colors duration-300"
                    >
                      {project.ctaText}
                      <ArrowRight size={18} strokeWidth={2.5} className="group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default CaseStudiesGrid;
