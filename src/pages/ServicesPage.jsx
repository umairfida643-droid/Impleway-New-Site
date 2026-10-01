import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { servicesData } from '../data/servicesData';
import { 
  Briefcase, Search, ArrowRight, Layers, Sparkles, Globe, 
  CheckCircle2, ShieldCheck 
} from 'lucide-react';
import { ServiceIcon } from '../components/ui/ServiceIcon';

const CATEGORIES = ["All Services", "ERP Services", "Digital Presence", "Software & IT"];

export const ServicesPage = () => {
  const [activeCategory, setActiveCategory] = useState("All Services");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredServices = servicesData.filter(service => {
    const matchesCategory = activeCategory === "All Services" || service.category === activeCategory;
    const matchesSearch = service.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          service.heroDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <SEO 
        title="Enterprise Services Catalog | ERP & Digital Solutions"
        description="Explore Impleway's comprehensive portfolio of 20+ specialized enterprise ERP consulting, cloud engineering, cybersecurity, and digital transformation services."
      />

      {/* Hero Section */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>Enterprise Solutions Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            ERP Services & Digital Solutions
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            From strategic roadmaps and zero-downtime migration to bespoke software engineering and 24/7 SLA operations.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Services" }]} />

      {/* Services Grid Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Controls: Search & Category Tabs */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-[#e7e7e7]">
            {/* Category Tabs */}
            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                    activeCategory === cat
                      ? 'bg-[#E50914] text-white shadow-md shadow-red-600/30'
                      : 'bg-[#F6F6F6] text-neutral-700 hover:bg-neutral-200 border border-[#e7e7e7]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-72">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
              <input
                type="text"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-[#F6F6F6] border border-[#e7e7e7] focus:outline-none focus:border-[#E50914] focus:bg-white transition-all text-[#111111]"
              />
            </div>
          </div>

          {/* Result Count */}
          <div className="py-6 text-xs text-[#5F6368] font-medium flex items-center justify-between">
            <span>Showing {filteredServices.length} specialized services</span>
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery("")}
                className="text-[#E50914] hover:underline cursor-pointer"
              >
                Clear search
              </button>
            )}
          </div>

          {/* Services Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl p-8 border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E50914] to-[#9F0712] opacity-0 group-hover:opacity-100 transition-opacity"></div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-11 h-11 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition-all shadow-sm">
                      <ServiceIcon slug={service.slug} className="w-5 h-5" />
                    </div>
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider bg-neutral-100 text-neutral-700">
                      <span>{service.category}</span>
                    </div>
                  </div>

                  <h3 className="text-xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#5F6368] line-clamp-3 leading-relaxed">
                    {service.heroDescription}
                  </p>

                  {/* Highlights */}
                  <div className="pt-2 space-y-1.5 border-t border-neutral-100">
                    {service.keyFocusAreas.slice(0, 3).map((area, aIdx) => (
                      <div key={aIdx} className="flex items-center gap-2 text-xs font-semibold text-neutral-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#E50914] flex-shrink-0" />
                        <span className="line-clamp-1 break-words">{area}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-neutral-100">
                  <Link
                    to={`/${service.slug}`}
                    className="w-full inline-flex items-center justify-between text-xs font-bold text-[#111111] group-hover:text-[#E50914] transition-colors"
                  >
                    <span>View Service Blueprint</span>
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                  </Link>
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
