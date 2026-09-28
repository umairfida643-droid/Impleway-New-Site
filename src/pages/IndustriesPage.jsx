import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { industriesData } from '../data/industriesData';
import { Factory, ShoppingCart, Warehouse, HeartPulse, HardHat, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

const ICON_MAP = {
  manufacturing: Factory,
  retail: ShoppingCart,
  distribution: Warehouse,
  healthcare: HeartPulse,
  construction: HardHat,
  "professional-services": Briefcase
};

export const IndustriesPage = () => {
  const industries = Object.values(industriesData);

  return (
    <>
      <SEO 
        title="Industries Served | Tailored Enterprise ERP Solutions"
        description="Explore how Impleway deploys specialized ERP, WMS, and ZATCA compliance workflows for Manufacturing, Retail, Distribution, Healthcare, Construction, and Services across Saudi Arabia."
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>Specialized Vertical Solutions</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Built for Operationally Complex Businesses
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Every industry has unique inventory mechanics, regulatory compliance mandates, and operational tempos. We build ERP systems that match your exact business reality.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Industries" }]} />

      {/* Industries Grid */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((ind, idx) => {
              const Icon = ICON_MAP[ind.slug] || Briefcase;

              return (
                <div 
                  key={idx}
                  className="bg-white rounded-3xl p-8 border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  <div className="space-y-4">
                    <div className="w-12 h-12 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-2xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                      {ind.title.split('for ')[1] || ind.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                      {ind.heroDescription}
                    </p>

                    {/* Stats pills */}
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-neutral-100 text-center">
                      {ind.stats.map((st, sIdx) => (
                        <div key={sIdx} className="bg-[#F6F6F6] rounded-xl p-2">
                          <div className="text-base font-black text-[#E50914]">{st.val}</div>
                          <div className="text-[10px] font-semibold text-neutral-600 truncate">{st.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Solutions Highlights */}
                  <div className="pt-6 mt-6 border-t border-neutral-100 space-y-2">
                    {ind.solutions.slice(0, 2).map((sol, solIdx) => (
                      <div key={solIdx} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0 mt-0.5" />
                        <span className="line-clamp-2">{sol}</span>
                      </div>
                    ))}
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
};
