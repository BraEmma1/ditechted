import { motion } from 'framer-motion';
import { Bot, Code, Workflow, MessageSquare, Monitor, TrendingUp } from 'lucide-react';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';

const DETAILED_SERVICES = [
  {
    icon: Bot,
    title: "AI Agent Systems",
    description: "Deploy intelligent AI agents that handle support, lead qualification, scheduling, operations, and internal workflows.",
    deliverables: [
      "AI support agents",
      "Lead qualification bots",
      "Appointment booking agents",
      "Internal workflow assistants",
      "CRM-connected AI systems"
    ],
    benefit: "Reduce workload, improve speed, and increase efficiency."
  },
  {
    icon: Code,
    title: "Custom SaaS Development",
    description: "We design and build scalable software platforms tailored to your business model.",
    deliverables: [
      "SaaS products",
      "Dashboards",
      "Client portals",
      "Admin systems",
      "Subscription platforms",
      "Internal tools"
    ],
    benefit: "Launch faster and scale with confidence."
  },
  {
    icon: Workflow,
    title: "AI Automation Consulting",
    description: "We identify repetitive processes and replace them with intelligent automation systems.",
    deliverables: [
      "Workflow mapping",
      "Process automation strategy",
      "AI tool integration",
      "Productivity systems",
      "Cost-saving automation plans"
    ],
    benefit: "Save time, reduce overhead, improve output."
  },
  {
    icon: MessageSquare,
    title: "AI Chatbot Development",
    description: "Custom chatbots for websites, WhatsApp, sales, customer support, and operations.",
    deliverables: [
      "Website chatbots",
      "WhatsApp bots",
      "FAQ bots",
      "Lead capture bots",
      "Customer support assistants"
    ],
    benefit: "24/7 engagement and faster customer response."
  },
  {
    icon: Monitor,
    title: "Website Design & Development",
    description: "Modern websites built for credibility, conversions, and growth.",
    deliverables: [
      "Corporate websites",
      "Landing pages",
      "eCommerce websites",
      "Booking systems",
      "SEO-ready builds",
      "Conversion optimization"
    ],
    benefit: "Turn traffic into qualified leads and customers."
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Growth campaigns powered by strategy, data, and compelling messaging.",
    deliverables: [
      "Social media management",
      "Google Ads",
      "Meta Ads",
      "Funnel strategy",
      "Copywriting",
      "Lead generation campaigns"
    ],
    benefit: "Increase visibility, traffic, and revenue."
  }
];

const DetailedServices = () => {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900 transition-colors duration-300" id="services">
      <div className="container-site">
        
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <motion.div variants={fadeInUp}>
            <span className="heading-s">What We Build</span>
          </motion.div>
          <motion.h2 variants={fadeInUp} className="heading-l mt-4">
            End-to-end systems engineered to improve operations, increase revenue, and accelerate growth.
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {DETAILED_SERVICES.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewportOnce}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card group flex flex-col h-full bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-200 dark:border-slate-700/50"
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 dark:bg-accent/10 flex items-center justify-center mb-6 text-primary dark:text-accent group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <Icon size={28} strokeWidth={2} />
                </div>
                
                {/* Title & Desc */}
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-8 flex-grow">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mb-8">
                  <h4 className="text-sm font-bold tracking-wider text-slate-900 dark:text-slate-200 uppercase mb-4">
                    What We Deliver
                  </h4>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-slate-600 dark:text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary/40 dark:bg-accent/40 mt-1.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefit */}
                <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  <div className="bg-slate-50 dark:bg-slate-800/50 rounded-lg p-4 border border-slate-100 dark:border-slate-700/50">
                    <span className="block text-xs font-bold uppercase tracking-wider text-primary dark:text-accent mb-1">
                      Business Benefit
                    </span>
                    <span className="text-sm font-medium text-slate-800 dark:text-slate-200">
                      {service.benefit}
                    </span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default DetailedServices;
