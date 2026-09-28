import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { platformsData } from '../data/platformsData';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Layers, 
  Sparkles, HelpCircle, Activity 
} from 'lucide-react';
import { OracleIcon, OdooIcon, Dynamics365Icon } from '../components/ui/PlatformIcons';
import { ServiceTechStack } from '../components/services/ServiceTechStack';

const PLATFORM_SVG_MAP = {
  "oracle-erp-services": OracleIcon,
  "odoo-erp-services": OdooIcon,
  "dynamics-365-services": Dynamics365Icon
};

export const PlatformDetailPage = ({ forcedSlug }) => {
  const { slug } = useParams();
  const currentSlug = forcedSlug || slug;
  
  const platform = platformsData[currentSlug];

  if (!platform) {
    return <Navigate to="/services" replace />;
  }

  const SvgIcon = PLATFORM_SVG_MAP[currentSlug] || ShieldCheck;

  return (
    <>
      <SEO 
        title={`${platform.title} | Impleway`}
        description={platform.heroDescription}
      />

      {/* Platform Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-wider backdrop-blur-md">
            <SvgIcon className="w-5 h-5 rounded" />
            <span>{platform.eyebrow}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {platform.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {platform.heroDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book-free-consultation"
              className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all"
            >
              <span>Schedule Architecture Review</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm"
            >
              Contact Specialists
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Platforms", path: "/services" }, { name: platform.title }]} />

      {/* Overview & Architecture */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                Enterprise Capabilities
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight leading-tight">
                Designed for Operationally <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Complex Businesses</span>
              </h2>
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
                {platform.overview}
              </p>
              
              <div className="space-y-3 pt-2">
                {platform.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-sm font-bold text-neutral-800">
                    <CheckCircle2 className="w-5 h-5 text-[#E50914] flex-shrink-0" />
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Feature Cards Grid */}
            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {platform.keyFeatures.map((feat, idx) => (
                <div key={idx} className="bg-[#F6F6F6] rounded-2xl p-6 border border-[#e7e7e7] space-y-2 hover:border-red-500/40 hover:shadow-md transition-all">
                  <h4 className="text-base font-bold text-[#111111]">{feat.title}</h4>
                  <p className="text-xs text-[#5F6368] leading-relaxed">{feat.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Certified Technology Stack & Architecture Section */}
      <ServiceTechStack 
        service={{ 
          title: platform.title, 
          category: platform.badge || "Certified Enterprise Platform", 
          techStack: currentSlug === 'oracle-erp-services'
            ? ["Oracle", "ZATCA", "Power BI", "PostgreSQL", "FastAPI", "Python"]
            : currentSlug === 'odoo-erp-services'
            ? ["Odoo", "Python", "PostgreSQL", "ZATCA", "Docker", "Redis"]
            : ["Dynamics", "Azure", "Power BI", "ZATCA", "OpenAI", "Kafka"]
        }} 
      />

      {/* Platform FAQs */}
      {platform.faqs && (
        <section className="py-16 sm:py-20 bg-[#F6F6F6] border-b border-[#e7e7e7]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
                Platform <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">FAQs</span>
              </h3>
            </div>
            <div className="space-y-4">
              {platform.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e7e7e7] shadow-sm space-y-2">
                  <h4 className="text-base font-bold text-[#111111]">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
};
