import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { industriesData } from '../../data/industriesData';
import { IndustryIcon } from '../ui/IndustryIcon';
import { 
  ArrowRight, CheckCircle2, TrendingUp, ShieldCheck, 
  Sparkles, Layers, ChevronRight, Check
} from 'lucide-react';

const FEATURED_SLUGS = [
  "manufacturing",
  "retail",
  "distribution",
  "construction",
  "healthcare",
  "oil-gas"
];

const PLATFORM_BADGES = {
  manufacturing: ["Oracle Cloud MES", "Odoo Manufacturing", "IoT Telemetry"],
  retail: ["Odoo Fiscal POS", "Dynamics 365 Commerce", "Mada / Apple Pay"],
  distribution: ["Oracle WMS Cloud", "Odoo Supply Chain", "ePOD Dispatch"],
  construction: ["Oracle Primavera P6 Sync", "Odoo Subcontractor Billing", "Etimad Portal"],
  healthcare: ["SFDA Traceability", "HL7 / FHIR EMR", "FEFO Batch Tracking"],
  "oil-gas": ["Aramco Vendor Ready", "Asset Maintenance", "Maximo / Oracle Bridge"]
};

export const IndustriesShowcase = () => {
  const [activeSlug, setActiveSlug] = useState("manufacturing");
  const activeIndustry = industriesData[activeSlug] || industriesData.manufacturing;
  const platformBadges = PLATFORM_BADGES[activeSlug] || ["Oracle Cloud", "Odoo Enterprise", "Dynamics 365"];

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7] relative overflow-hidden">
      {/* Background Subtle Tech Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact gradient standard */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-black uppercase tracking-wider text-[#E50914]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>Domain-Specific Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Built for Operationally Complex <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Industries in KSA</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Every sector in Saudi Arabia operates under distinct regulatory mandates (ZATCA, SFDA, Etimad, SAMA) and supply chain rhythms. We engineer ERP architectures tailored to your vertical's exact reality.
          </p>
        </div>

        {/* Industry Selector Tabs */}
        <div className="flex items-center justify-start lg:justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {FEATURED_SLUGS.map((slug) => {
            const ind = industriesData[slug];
            if (!ind) return null;
            const isActive = activeSlug === slug;

            return (
              <button
                key={slug}
                onClick={() => setActiveSlug(slug)}
                className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold whitespace-nowrap transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111] shadow-lg shadow-black/10 scale-105'
                    : 'bg-neutral-50 text-neutral-600 border-neutral-200/80 hover:bg-neutral-100 hover:text-neutral-900'
                }`}
              >
                <div className={`p-1.5 rounded-lg transition-colors ${
                  isActive ? 'bg-[#E50914] text-white' : 'bg-white text-neutral-600 border border-neutral-200'
                }`}>
                  <IndustryIcon slug={slug} className="w-4 h-4" />
                </div>
                <span>{ind.shortTitle || ind.title}</span>
              </button>
            );
          })}
        </div>

        {/* Active Industry Deep-Dive Showcase Card */}
        <div className="bg-gradient-to-br from-[#FAFAFA] to-white rounded-3xl border border-[#e7e7e7] p-6 sm:p-10 shadow-xl shadow-black/[0.03] transition-all duration-300">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Col: Overview & Verified Stats */}
            <div className="lg:col-span-6 space-y-6">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 border border-red-200/60 text-xs font-black text-[#E50914] uppercase tracking-wider">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{activeIndustry.tag}</span>
                </span>
                <span className="text-xs font-bold text-neutral-500 bg-neutral-100 px-3 py-1 rounded-full">
                  Saudi Market Optimized
                </span>
              </div>

              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight mb-3">
                  {activeIndustry.title}
                </h3>
                <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
                  {activeIndustry.heroDescription}
                </p>
              </div>

              {/* 3 Verified Quantitative Stats */}
              <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-2">
                {activeIndustry.stats && activeIndustry.stats.map((stat, i) => (
                  <div 
                    key={i} 
                    className="bg-white rounded-2xl p-4 border border-neutral-200/80 shadow-xs hover:border-red-500/30 transition-colors"
                  >
                    <div className="text-2xl sm:text-3xl font-black text-[#E50914] tracking-tight">
                      {stat.val}
                    </div>
                    <div className="text-[11px] sm:text-xs font-bold text-neutral-800 mt-1 leading-tight">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Certified Ecosystem Stacks */}
              <div className="pt-2">
                <div className="text-xs font-bold text-neutral-400 uppercase tracking-wider mb-2.5">
                  Pre-Configured Architecture Modules:
                </div>
                <div className="flex flex-wrap gap-2">
                  {platformBadges.map((badge, i) => (
                    <span 
                      key={i}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-lg bg-neutral-100 border border-neutral-200 text-xs font-bold text-neutral-700"
                    >
                      <Check className="w-3 h-3 text-[#E50914]" />
                      <span>{badge}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA link to industry page */}
              <div className="pt-2">
                <Link
                  to={`/industries/${activeSlug}`}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full font-bold text-sm text-white bg-[#111111] hover:bg-[#E50914] shadow-md hover:shadow-red-600/30 transition-all group"
                >
                  <span>Explore {activeIndustry.shortTitle} Blueprint</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

            </div>

            {/* Right Col: Pain Points vs Engineered Solutions Matrix */}
            <div className="lg:col-span-6 bg-white rounded-2xl border border-neutral-200 p-6 sm:p-8 space-y-6 shadow-sm">
              
              {/* Challenges */}
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                  <span>Core Operational Bottlenecks Solved</span>
                </div>
                <div className="space-y-2.5">
                  {activeIndustry.challenges && activeIndustry.challenges.map((c, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-600">
                      <div className="w-4 h-4 rounded-full bg-neutral-100 text-neutral-400 flex items-center justify-center flex-shrink-0 mt-0.5 text-[10px] font-bold">
                        ✕
                      </div>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full h-px bg-neutral-200"></div>

              {/* Solutions */}
              <div>
                <div className="text-xs font-black uppercase tracking-wider text-[#E50914] mb-3 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping"></span>
                  <span>Impleway's Engineered Implementation</span>
                </div>
                <div className="space-y-2.5">
                  {activeIndustry.solutions && activeIndustry.solutions.map((s, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-800 font-medium">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <span>{s}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Regulatory Assurance Callout */}
              <div className="bg-neutral-50 rounded-xl p-3.5 border border-neutral-200 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span className="font-bold text-neutral-800">Saudi Statutory Compliance:</span>
                  <span className="text-neutral-500 hidden sm:inline">ZATCA Phase-2, SAMA & Data Residency</span>
                </div>
                <span className="font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 text-[10px]">
                  100% Certified
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Banner Linking to All 20 Industries */}
        <div className="mt-10 pt-6 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs sm:text-sm text-neutral-600 text-center sm:text-left">
            We deliver domain-specific implementations across <strong className="text-neutral-900 font-black">20 distinct industries</strong> in Riyadh, Jeddah, Al-Khobar, and international markets.
          </div>
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-extrabold text-[#111111] hover:text-[#E50914] bg-neutral-100 hover:bg-neutral-200/80 border border-neutral-300 transition-all flex-shrink-0"
          >
            <span>View All 20 Specialized Verticals</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
