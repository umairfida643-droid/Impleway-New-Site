import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { PlatformsSection } from '../components/home/PlatformsSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { TechStackMarquee } from '../components/home/TechStackMarquee';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { FAQSection } from '../components/home/FAQSection';
import { CTABanner } from '../components/home/CTABanner';

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="Simplify, Implementation | Enterprise ERP & IT Transformation Partner"
        description="Impleway provides certified enterprise ERP consulting, implementation, data migration, and ZATCA compliance across Oracle Cloud, Odoo, and Microsoft Dynamics 365 in Saudi Arabia and global markets."
      />
      <div className="flex flex-col">
        <HeroSection />
        <StatsSection />
        <PlatformsSection />
        <ServicesGrid />
        <ProcessTimeline />
        <TechStackMarquee />
        <TestimonialsSlider />
        <FAQSection />
        <CTABanner />
      </div>
    </>
  );
};
