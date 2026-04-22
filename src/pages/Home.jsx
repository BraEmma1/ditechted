// src/pages/Home.jsx
import Hero from "../components/Hero";
import Services from "../components/Services";
import ValueSections from "../components/ValueSections";
import Works from "../components/Works";
import Process from "../components/Process";
import FAQ from "../components/FAQ";
import Testimonials from "../components/Testimonials";
import Comparison from "../components/Comparison";
import CTA from "../components/CTA";

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <Services />
      <ValueSections />
      <Works />
      <Process />
      <Testimonials />
      <Comparison />
      <FAQ />
      <CTA />
    </div>
  );
};

export default Home;
