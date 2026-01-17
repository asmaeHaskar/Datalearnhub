import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import BenefitsSection from './components/BenefitsSection';
import JourneySection from './components/JourneySection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

const HomeLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <JourneySection />
        <TestimonialsSection />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
};

export default HomeLanding;