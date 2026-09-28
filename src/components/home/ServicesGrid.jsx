import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Briefcase, Settings, Database, GitMerge, Wrench, 
  GraduationCap, Headphones, MonitorSmartphone, ArrowRight 
} from 'lucide-react';
import { servicesData } from '../../data/servicesData';

const ICON_MAP = {
  "erp-consulting": Briefcase,
  "erp-implementation": Settings,
  "data-migration": Database,
  "erp-integration": GitMerge,
  "erp-customization": Wrench,
  "user-training": GraduationCap,
  "managed-support": Headphones,
  "custom-software-development": MonitorSmartphone
};

export const ServicesGrid = () => {
  // Highlight top 8 core services
  const coreSlugs = [
    "erp-consulting",
    "erp-implementation",
    "data-migration",
    "erp-integration",
    "erp-customization",
    "user-training",
    "managed-support",
    "custom-software-development"
  ];

  const coreServices = coreSlugs
    .map(slug => servicesData.find(s => s.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
              End-to-End Solutions
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              Everything Required to Plan, Build and Support Enterprise ERP
            </h2>
          </div>
          <div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 font-bold text-sm text-[#E50914] hover:text-[#9F0712] transition-colors group"
            >
              <span>View All 20+ Services</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {coreServices.map((service, idx) => {
            const Icon = ICON_MAP[service.slug] || Briefcase;

            return (
              <Link
                key={idx}
                to={`/${service.slug}`}
                className="group bg-white rounded-2xl p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  {/* Icon Container */}
                  <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-100 text-[#E50914] flex items-center justify-center group-hover:bg-[#E50914] group-hover:text-white transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-black text-[#111111] group-hover:text-[#E50914] transition-colors leading-tight">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-xs sm:text-sm text-[#5F6368] line-clamp-3 leading-relaxed">
                    {service.heroDescription}
                  </p>
                </div>

                {/* Bottom Action Link */}
                <div className="pt-6 flex items-center gap-1.5 text-xs font-extrabold text-[#E50914] group-hover:underline">
                  <span>Learn more</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            );
          })}
        </div>

      </div>
    </section>
  );
};
