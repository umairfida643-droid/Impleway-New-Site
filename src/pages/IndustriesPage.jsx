import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { industriesData, industriesList } from '../data/industriesData';
import { IndustryIcon } from '../components/ui/IndustryIcon';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Filter } from 'lucide-react';

export const IndustriesPage = () => {
  const [selectedTag, setSelectedTag] = useState("All");

  const tags = ["All", "Discrete & Process", "Supply Chain & WMS", "Hospitals & Clinics", "Contracting & Projects", "Upstream & Downstream", "Vision 2030 & Gov"];

  const filteredIndustries = selectedTag === "All" 
    ? industriesList 
    : industriesList.filter(ind => ind.tag === selectedTag || ind.tag?.includes(selectedTag));

  return (
    <>
      <SEO 
        title="20 Specialized Industries Served | Enterprise ERP Solutions Saudi Arabia"
        description="Discover how Impleway delivers domain-specific ERP implementations, ZATCA e-invoicing, and digital operations for 20 distinct industries across Saudi Arabia and the GCC."
      />

      {/* Hero Header */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-ping"></span>
            <span>20 Specialized Verticals in Saudi Arabia & GCC</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Built for Operationally Complex Industries
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Every sector has unique inventory mechanics, regulatory compliance mandates (ZATCA, SFDA, SAMA, Etimad), and operational rhythms. We engineer ERP systems that match your exact business reality.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Industries" }]} />

      {/* Main 20 Industries Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Quick Filter Ribbon */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-12 pb-6 border-b border-neutral-200">
            <div className="flex items-center gap-2 text-sm font-bold text-neutral-800">
              <Filter className="w-4 h-4 text-[#E50914]" />
              <span>Showing all 20 specialized industries:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    selectedTag === tag 
                      ? 'bg-[#E50914] text-white shadow-md' 
                      : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>

          {/* 20 Industry Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredIndustries.map((ind, idx) => (
              <div 
                key={ind.slug || idx}
                className="bg-white rounded-3xl p-7 sm:p-8 border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712]"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition-all duration-300 shadow-sm">
                      <IndustryIcon slug={ind.slug} className="w-6 h-6" />
                    </div>
                    {ind.tag && (
                      <span className="text-[11px] font-extrabold uppercase px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-700 border border-neutral-200">
                        {ind.tag}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                    {ind.shortTitle || ind.title.split('for ')[1] || ind.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                    {ind.heroDescription}
                  </p>

                  {/* Stats pills */}
                  {ind.stats && ind.stats.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100 text-center">
                      {ind.stats.map((st, sIdx) => (
                        <div key={sIdx} className="bg-[#F6F6F6] rounded-xl p-2">
                          <div className="text-sm sm:text-base font-black text-[#E50914]">{st.val}</div>
                          <div className="text-[10px] font-semibold text-neutral-600 truncate">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Solutions Highlights */}
                <div className="pt-5 mt-5 border-t border-neutral-100 space-y-2">
                  <div className="text-[11px] uppercase font-extrabold text-neutral-400 tracking-wider">
                    Core Capabilities:
                  </div>
                  {ind.solutions && ind.solutions.slice(0, 2).map((sol, solIdx) => (
                    <div key={solIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{sol}</span>
                    </div>
                  ))}

                  <div className="pt-4">
                    <Link
                      to="/book-free-consultation"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 px-4 rounded-xl font-bold text-xs text-[#111111] bg-neutral-50 hover:bg-[#E50914] hover:text-white border border-neutral-200 hover:border-transparent transition-all"
                    >
                      <span>Discuss Your Industry Requirements</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
};
