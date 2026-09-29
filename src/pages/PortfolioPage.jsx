import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { projectsData } from '../data/projectsData';
import { 
  ArrowRight, ExternalLink, Calendar, User, Clock, 
  Layers, Sparkles, CheckCircle2, TrendingUp, Globe
} from 'lucide-react';

const CATEGORIES = [
  "All Projects", 
  "React & JavaScript",
  "WordPress Architecture",
  "Shopify Stores",
  "Enterprise ERP & Cloud", 
  "eCommerce & Retail", 
  "Custom SaaS Application", 
  "Digital Agencies & Media", 
  "FinTech & Advisory", 
  "Manufacturing & Industrial",
  "Custom Web Application"
];

export const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === "All Projects") return true;
    if (activeFilter === "React & JavaScript") {
      return p.technologies.some(t => t.toLowerCase().includes("react") || t.toLowerCase().includes("javascript"));
    }
    if (activeFilter === "WordPress Architecture") {
      return p.technologies.some(t => t.toLowerCase().includes("wordpress"));
    }
    if (activeFilter === "Shopify Stores") {
      return p.technologies.some(t => t.toLowerCase().includes("shopify"));
    }
    return p.category.toLowerCase().includes(activeFilter.toLowerCase()) || 
           activeFilter.toLowerCase().includes(p.category.toLowerCase());
  });

  return (
    <>
      <SEO 
        title="Portfolio & Case Studies | Proven Enterprise Deliveries"
        description="Explore Impleway's proven track record of enterprise ERP integrations, high-converting eCommerce stores, multi-tenant SaaS platforms, and digital ecosystems worldwide."
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E50914]" />
            <span>Verified Track Record & Case Studies</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Proven Digital Architecture & Deliveries
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            From tier-1 enterprise Microsoft Dynamics 365 platforms and bespoke cloud SaaS to high-volume eCommerce powerhouses delivered across UK, GCC, and international markets.
          </p>
        </div>
      </section>

      {/* Client Logos Trust Strip */}
      <section className="py-8 bg-neutral-50 border-b border-[#e7e7e7] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <span className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 whitespace-nowrap">
              Featured Client Portfolios & Live Implementations:
            </span>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
              {projectsData.slice(0, 10).map((proj, idx) => (
                <div key={idx} className="flex items-center gap-2 group/logo" title={proj.title}>
                  {proj.logo && (
                    <img 
                      src={proj.logo} 
                      alt={proj.title} 
                      className="w-7 h-7 rounded-lg object-contain bg-white border border-neutral-200 p-0.5 shadow-xs grayscale group-hover/logo:grayscale-0 transition-all duration-300"
                    />
                  )}
                  <span className="text-xs font-bold text-neutral-700 group-hover/logo:text-[#E50914] transition-colors">
                    {proj.title}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Portfolio" }]} />

      {/* Filter Tabs & Projects Grid */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2.5">
            {CATEGORIES.map((cat, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setActiveFilter(cat)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-[#E50914] text-white shadow-md shadow-red-600/30'
                    : 'bg-[#F6F6F6] text-neutral-700 hover:bg-neutral-200 border border-[#e7e7e7]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* 3D Laptop Mockup Cover Showcase */}
                <div className="relative bg-[#FAFAFA] border-b border-[#e7e7e7] overflow-hidden">
                  <Link to={`/project/${project.slug}`} className="block overflow-hidden">
                    <img 
                      src={project.image || `/projects/covers/${project.slug}.png`} 
                      alt={`${project.title} 3D Mockup Cover`}
                      loading="lazy"
                      className="w-full h-auto object-cover transform group-hover:scale-[1.03] transition-transform duration-500"
                    />
                  </Link>

                  {/* Category Pill Overlay */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider bg-white/95 backdrop-blur-md text-[#E50914] border border-neutral-200 shadow-sm">
                      {project.category}
                    </span>
                    <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-mono font-bold bg-neutral-900/85 backdrop-blur-md text-white shadow-sm">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-7 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                  
                  {/* Header: Logo + Title + Subtitle */}
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      {project.logo && (
                        <div className="w-10 h-10 rounded-xl bg-white border border-neutral-200 p-1 flex items-center justify-center shadow-xs flex-shrink-0">
                          <img src={project.logo} alt={project.title} className="w-full h-full object-contain" />
                        </div>
                      )}
                      <div>
                        <h3 className="text-2xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors leading-tight">
                          <Link to={`/project/${project.slug}`}>{project.title}</Link>
                        </h3>
                        <p className="text-xs font-semibold text-[#5F6368] line-clamp-1">
                          {project.subtitle}
                        </p>
                      </div>
                    </div>

                    <p className="text-sm text-[#5F6368] leading-relaxed pt-2 line-clamp-3">
                      {project.overview}
                    </p>
                  </div>

                  {/* Quantitative Metrics Badge Bar (if available) */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="grid grid-cols-3 gap-2 p-3 rounded-2xl bg-neutral-50 border border-neutral-200/70">
                      {project.metrics.map((m, mIdx) => (
                        <div key={mIdx} className="text-center">
                          <div className="text-base sm:text-lg font-black text-[#E50914] leading-tight">
                            {m.value}
                          </div>
                          <div className="text-[10px] font-bold text-neutral-500 uppercase tracking-tight line-clamp-1 mt-0.5">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Metadata Row */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-neutral-100 text-xs">
                    <div>
                      <span className="text-neutral-400 block font-medium">Client</span>
                      <span className="font-bold text-neutral-800 truncate block">{project.client}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block font-medium">Timeline</span>
                      <span className="font-bold text-neutral-800">{project.timeline}</span>
                    </div>
                    <div>
                      <span className="text-neutral-400 block font-medium">Services</span>
                      <span className="font-bold text-neutral-800 truncate block">{project.services.split(',')[0]}</span>
                    </div>
                  </div>

                  {/* Technologies Used */}
                  <div>
                    <div className="text-[10px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">Technologies Deployed:</div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.slice(0, 5).map((tech, tIdx) => (
                        <span key={tIdx} className="px-2.5 py-1 rounded-lg bg-[#F6F6F6] border border-[#e7e7e7] text-[11px] font-bold text-neutral-700">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 5 && (
                        <span className="px-2 py-1 rounded-lg bg-neutral-100 text-[11px] font-bold text-neutral-500">
                          +{project.technologies.length - 5}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Link & Live Link */}
                  <div className="pt-2 flex items-center gap-3">
                    <Link
                      to={`/project/${project.slug}`}
                      className="flex-1 inline-flex items-center justify-between py-3 px-5 rounded-xl font-bold text-xs sm:text-sm text-[#111111] bg-[#F6F6F6] hover:bg-[#E50914] hover:text-white transition-all group/btn"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
                    </Link>

                    {project.websiteUrl && (
                      <a
                        href={project.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-3 px-4 rounded-xl font-bold text-xs sm:text-sm text-neutral-700 bg-white border border-neutral-300 hover:border-red-500 hover:text-[#E50914] transition-all flex items-center gap-1.5 shadow-2xs whitespace-nowrap"
                        title={`Visit Live Website: ${project.websiteUrl}`}
                      >
                        <Globe className="w-4 h-4" />
                        <span className="hidden sm:inline">Live Site</span>
                        <ExternalLink className="w-3.5 h-3.5 text-neutral-400" />
                      </a>
                    )}
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
