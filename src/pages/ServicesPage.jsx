import { useEffect } from 'react';
import PageHero from '../components/PageHero';
import DetailedServices from '../components/DetailedServices';
import WhyChooseUs from '../components/WhyChooseUs';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';

const ServicesPage = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="services-page">
      <PageHero />
      <DetailedServices />
      <WhyChooseUs />
      <Process />
      <FAQ />
      <CTA 
        headline={<>Ready to Build Something <span className="text-white">Smarter?</span></>}
        subheadline="Let’s create systems that increase revenue, improve efficiency, and scale your business."
        primaryBtnText="Start a Project"
        secondaryBtnText="Book Consultation"
        trustText="Free consultation • Response within 24 hours • No obligation"
      />
    </main>
  );
};

export default ServicesPage;
