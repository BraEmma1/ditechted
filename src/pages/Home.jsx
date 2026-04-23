// src/pages/Home.jsx
import Hero from "../components/Hero";
import ServicesGrid from "../components/ServicesGrid";
import ValueSections from "../components/ValueSections";
import PortfolioGrid from "../components/PortfolioGrid";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Comparison from "../components/Comparison";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <ServicesGrid 
        variant="summary"
        headingLabel="Our Core Solutions"
        headingTitle="End-to-end systems built for"
        headingHighlight="growth"
        subheading="End-to-end systems built to increase efficiency, revenue, and business growth."
      />
      <ValueSections />
      <PortfolioGrid 
        variant="minimal"
        limit={3}
        showFilters={false}
        headingLabel="Our Work"
        headingTitle="Real Solutions."
        headingHighlight="Real Results."
        subheading="A selection of projects where we designed, built, and scaled high-performance systems that moved the needle."
      />
      <Process />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
