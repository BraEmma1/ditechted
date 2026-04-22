/**
 * Services.jsx
 * ─────────────────────────────────────────────────────────────
 * Services summary section for Ditechted.
 * Features 4 cards demonstrating key IT capabilities with
 * Framer Motion staggered enter animations.
 */

import { motion } from 'framer-motion';
import { fadeInUp, staggerContainer, viewportOnce } from '../lib/animations';
import {
  MonitorSmartphone,
  CloudCog,
  Bot,
  LineChart,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

const SERVICES_DATA = [
  {
    id: 'web-app',
    title: 'Web & Application Development',
    description: 'Scalable, high-performance web applications and custom software tailored to your specific business requirements.',
    icon: MonitorSmartphone,
    link: '/services#web-app',
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps Engineering',
    description: 'Secure, robust cloud infrastructure and automated CI/CD pipelines for accelerated deployment and supreme reliability.',
    icon: CloudCog,
    link: '/services#cloud-devops',
  },
  {
    id: 'ai-automation',
    title: 'AI & Automation Solutions',
    description: 'Intelligent automation systems and AI integrations designed to optimize workflows and reduce operational costs.',
    icon: Bot,
    link: '/services#ai-automation',
  },
  {
    id: 'it-consulting',
    title: 'IT Consulting & Strategy',
    description: 'Strategic technology guidance to align your IT infrastructure with your long-term business goals for sustainable growth.',
    icon: LineChart,
    link: '/services#it-consulting',
  },
];

const ServiceCard = ({ title, description, icon: Icon, link }) => {
  return (
    <motion.div
      variants={fadeInUp}
      className="card group relative p-8 lg:p-9 flex flex-col h-full"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-2xl mb-7 flex items-center justify-center bg-primary/8 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-white group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(0,113,197,0.25)]">
        <Icon size={26} strokeWidth={1.75} />
      </div>

      {/* Text Content */}
      <h3 className="heading-m mb-3.5 transition-colors duration-300 group-hover:text-primary">
        {title}
      </h3>
      <p className="body-text flex-1 mb-8">
        {description}
      </p>

      {/* Link */}
      <Link
        to={link}
        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 mt-auto group/link"
      >
        Learn More
        <ArrowRight size={15} strokeWidth={2.5} className="transition-transform duration-300 group-hover:translate-x-1.5" />
      </Link>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="section bg-slate-50 dark:bg-slate-900 relative overflow-hidden" id="services">
      <div className="container-site z-10 relative">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 lg:mb-20"
        >
          <motion.div variants={fadeInUp}>
             <span className="heading-s">Our Services</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="heading-l mt-5"
          >
            Engineering solutions that power <span className="text-primary">modern businesses</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="body-lead mt-6 max-w-2xl"
          >
            We deliver end-to-end technology services designed to maximize efficiency, scale operations, and drive continuous innovation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8"
        >
          {SERVICES_DATA.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
