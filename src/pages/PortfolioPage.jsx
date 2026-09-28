import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { projectsData } from '../data/projectsData';
import { ArrowRight, ExternalLink, Calendar, User, Clock, Layers, Sparkles } from 'lucide-react';

const CATEGORIES = ["All Projects", "Custom Web Application", "Shopify Store & Custom Apps", "Custom SaaS Application", "WordPress Architecture", "eCommerce Store", "SaaS Platform"];

export const PortfolioPage = () => {
  const [activeFilter, setActiveFilter] = useState("All Projects");

  const filteredProjects = projectsData.filter(p => {
    if (activeFilter === "All Projects") return true;
    return p.category.toLowerCase().includes(activeFilter.toLowerCase()) || 
           activeFilter.toLowerCase().includes(p.category.toLowerCase());
  });

  return (
    <>
      <SEO 
        title="Portfolio & Case Studies | Proven Enterprise Deliveries"
        description="Explore Impleway's proven track record of custom CRM development, high-converting eCommerce stores, multi-tenant SaaS platforms, and enterprise web solutions."
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>Verified Track Record</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Case Studies & Proven Deliveries
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Real software architecture, measurable business impact, and rapid go-live milestones delivered for clients worldwide.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Portfolio" }]} />

      {/* Portfolio Grid */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          {/* Projects 2-Column Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {filteredProjects.map((project, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-3xl border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 overflow-hidden flex flex-col justify-between group"
              >
                {/* Card Header Media Simulation */}
                <div className="bg-[#050505] p-8 text-white relative overflow-hidden border-b border-neutral-800">
                  <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
                  <div className="relative space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-red-500/20 border border-red-500/30 text-red-400">
                        {project.category}
                      </span>
                      <span className="text-xs font-mono text-neutral-400">Year {project.year}</span>
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black text-white group-hover:text-[#E50914] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-300">
                      {project.subtitle}
                    </p>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-8 space-y-6 flex-grow flex flex-col justify-between">
                  
                  {/* Overview */}
                  <p className="text-sm text-[#5F6368] leading-relaxed">
                    {project.overview}
                  </p>

                  {/* Metadata Chips */}
                  <div className="grid grid-cols-3 gap-3 py-3 border-y border-neutral-100 text-xs">
                    <div>
                      <span className="text-neutral-400 block font-medium">Client</span>
                      <span className="font-bold text-neutral-800">{project.client}</span>
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

                  {/* Tech Stack Pills */}
                  <div>
                    <div className="text-[11px] font-extrabold uppercase tracking-wider text-neutral-500 mb-2">Technologies Used:</div>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, tIdx) => (
                        <span key={tIdx} className="px-3 py-1 rounded-full bg-[#F6F6F6] border border-[#e7e7e7] text-xs font-bold text-neutral-700">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Link */}
                  <div className="pt-4">
                    <Link
                      to={`/project/${project.slug}`}
                      className="w-full inline-flex items-center justify-between py-3.5 px-6 rounded-xl font-bold text-sm text-[#111111] bg-[#F6F6F6] hover:bg-[#E50914] hover:text-white transition-all group/btn"
                    >
                      <span>Read Deep-Dive Case Study</span>
                      <ArrowRight className="w-4 h-4 transform group-hover/btn:translate-x-1.5 transition-transform" />
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
