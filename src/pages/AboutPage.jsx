import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import AboutStory from '../components/AboutStory';
import MissionVision from '../components/MissionVision';
import CorePrinciples from '../components/CorePrinciples';
import Comparison from '../components/Comparison';
import CoreCapabilities from '../components/CoreCapabilities';
import ResultsMetrics from '../components/ResultsMetrics';
import Process from '../components/Process';
import Team from '../components/Team';
import CTA from '../components/CTA';

const ABOUT_METRICS = [
  { value: "150+", label: "Projects Delivered" },
  { value: "8+", label: "Years Experience" },
  { value: "95%", label: "Client Retention" },
  { value: "6+", label: "Core Service Areas" }
];

const ABOUT_PROCESS = [
  {
    num: "01",
    title: "Understand",
    bullets: ["Learn your business goals", "Identify constraints", "Map the landscape"],
  },
  {
    num: "02",
    title: "Strategize",
    bullets: ["Design smartest path", "Select architecture", "Define outcomes"],
  },
  {
    num: "03",
    title: "Execute",
    bullets: ["Build with precision", "Iterative testing", "Flawless launch"],
  },
  {
    num: "04",
    title: "Improve",
    bullets: ["Optimize continuously", "Scale infrastructure", "Compound results"],
  },
];

const TRADITIONAL_ITEMS = [
  'Focus on design only',
  'Generic execution',
  'Slow communication',
  'No growth strategy',
  'Temporary fixes'
];

const MODERN_ITEMS = [
  'Business-first systems',
  'AI and automation expertise',
  'Strategic execution',
  'Growth focused',
  'Long-term scalability'
];

const AboutPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="about-page">
      <PageHero 
        label="About Ditechted"
        headline="Built for Businesses Ready to Grow"
        subheadline="Ditechted helps ambitious businesses scale through AI systems, custom software, automation, websites, and digital growth strategies built for measurable success."
      />
      <AboutStory />
      <MissionVision />
      <CorePrinciples />
      <Comparison 
        headingLabel="What Makes Us Different"
        headingTitle="Why Businesses Choose"
        headingHighlight="Ditechted"
        subheading="We don't just act like another agency. We act as your strategic technology partner."
        traditionalHeader="Traditional Agencies"
        traditionalSub="The Old Way"
        modernHeader="Ditechted"
        modernSub="The Modern Standard"
        traditionalItems={TRADITIONAL_ITEMS}
        modernItems={MODERN_ITEMS}
      />
      <CoreCapabilities />
      <ResultsMetrics 
        headingTitle="Built on Execution"
        metricsData={ABOUT_METRICS}
      />
      <Process 
        headingTitle="How We"
        headingHighlight="Operate"
        subheading="A systematic approach to turning your business challenges into scalable, revenue-generating solutions."
        processSteps={ABOUT_PROCESS}
      />
      <Team />
      <CTA 
        headline={<>Need a Technology Partner That Understands <span className="text-white">Growth?</span></>}
        subheadline="Let’s build systems that move your business forward."
        primaryBtnText="Start a Project"
        secondaryBtnText="Book Consultation"
        trustText="Free consultation • Response within 24 hours • No obligation"
      />
    </main>
  );
};

export default AboutPage;
