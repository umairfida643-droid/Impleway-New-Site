import React from 'react';
import { SEO } from '../components/ui/SEO';
import { HeroSection } from '../components/home/HeroSection';
import { StatsSection } from '../components/home/StatsSection';
import { PlatformsSection } from '../components/home/PlatformsSection';
import { ServicesGrid } from '../components/home/ServicesGrid';
import { IndustriesShowcase } from '../components/home/IndustriesShowcase';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { WhyChooseUsSection } from '../components/home/WhyChooseUsSection';
import { TechStackMarquee } from '../components/home/TechStackMarquee';
import { TestimonialsSlider } from '../components/home/TestimonialsSlider';
import { FeaturedInsightsSection } from '../components/home/FeaturedInsightsSection';
import { FAQSection } from '../components/home/FAQSection';
import { CTABanner } from '../components/home/CTABanner';

export const HomePage = () => {
  return (
    <>
      <SEO 
        title="Impleway – Simplify Implementation | Enterprise ERP & IT"
        description="Impleway provides certified enterprise ERP consulting, implementation, data migration, and ZATCA compliance across Oracle Cloud, Odoo, and Microsoft Dynamics 365 in Saudi Arabia and global markets."
      />
      <div className="flex flex-col">
        <HeroSection />
        <StatsSection />
        <PlatformsSection />
        <div className="content-auto">
          <ServicesGrid />
        </div>
        <div className="content-auto">
          <IndustriesShowcase />
        </div>
        <div className="content-auto">
          <ProcessTimeline />
        </div>
        <div className="content-auto">
          <WhyChooseUsSection />
        </div>
        <div className="content-auto">
          <TechStackMarquee />
        </div>
        <div className="content-auto">
          <TestimonialsSlider />
        </div>
        <div className="content-auto">
          <FeaturedInsightsSection />
        </div>
        <div className="content-auto">
          <FAQSection />
        </div>
        <div className="content-auto">
          <CTABanner />
        </div>
      </div>
    </>
  );
};
