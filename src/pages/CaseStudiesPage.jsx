import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import ResultsMetrics from '../components/ResultsMetrics';
import CaseStudiesGrid from '../components/CaseStudiesGrid';
import PerformanceFramework from '../components/PerformanceFramework';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';

const CASE_STUDIES_TESTIMONIALS = [
  {
    id: 1,
    quote: "Ditechted delivered systems that improved our speed and revenue almost immediately.",
    name: 'Sarah Mitchell',
    role: 'Head of Operations',
    company: 'SalesFlow',
    avatar: 'SM',
    accent: 'var(--brand-primary)',
  },
  {
    id: 2,
    quote: "They understand business outcomes, not just development.",
    name: 'James Okafor',
    role: 'Founder & CEO',
    company: 'EduCore',
    avatar: 'JO',
    accent: '#7c3aed',
  },
  {
    id: 3,
    quote: "Reliable, strategic, and seriously effective.",
    name: 'Priya Sharma',
    role: 'Marketing Director',
    company: 'RetailBoost',
    avatar: 'PS',
    accent: '#059669',
  },
];

const CaseStudiesPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="case-studies-page">
      <PageHero 
        label="Case Studies"
        headline="Real Solutions. Real Results."
        subheadline="Explore how Ditechted helps businesses grow through AI systems, custom software, automation, websites, and digital growth strategies."
      />
      <ResultsMetrics />
      <CaseStudiesGrid />
      <PerformanceFramework />
      <Testimonials 
        headingLabel="What Clients Say"
        headingTitle="Trusted by Businesses"
        headingHighlight="We've Scaled"
        subheading="Don't just take our word for it. Here is what our clients have to say about the results we deliver."
        testimonialsData={CASE_STUDIES_TESTIMONIALS}
      />
      <CTA 
        headline={<>Let’s Build Your Next <span className="text-white">Success Story</span></>}
        subheadline="Whether you need AI systems, software, websites, or growth campaigns, Ditechted is ready to deliver measurable results."
        primaryBtnText="Start a Project"
        secondaryBtnText="Book Consultation"
        trustText="Free consultation • Response within 24 hours • No obligation"
      />
    </main>
  );
};

export default CaseStudiesPage;
