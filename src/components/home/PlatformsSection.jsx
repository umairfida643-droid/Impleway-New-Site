import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Layers, Zap } from 'lucide-react';
import { platformsData } from '../../data/platformsData';

export const PlatformsSection = () => {
  const platforms = Object.values(platformsData);

  return (
    <section className="py-20 sm:py-24 bg-[#F6F6F6] border-b border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
            Enterprise Ecosystems
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Expertise Across the Platforms Your Business Depends On
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            We provide vendor-neutral advisory and certified engineering across the world's leading ERP architectures, customized for the regulatory and operational landscape of Saudi Arabia.
          </p>
        </div>

        {/* 3 Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {platforms.map((platform, idx) => (
            <div 
              key={idx}
              className="bg-white rounded-3xl p-8 border border-[#e7e7e7] shadow-sm hover:shadow-2xl hover:border-red-500/40 transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar */}
              <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712]"></div>

              <div className="space-y-5">
                {/* Badge */}
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-red-50 text-[#E50914] border border-red-100">
                  <Shield className="w-3 h-3" />
                  <span>{platform.badge}</span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                  {platform.title.split('&')[0]}
                </h3>

                {/* Description */}
                <p className="text-sm text-[#5F6368] leading-relaxed">
                  {platform.heroDescription}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2.5 pt-2 border-t border-neutral-100">
                  {platform.benefits.slice(0, 3).map((benefit, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs font-medium text-neutral-700">
                      <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-8">
                <Link
                  to={`/${platform.slug}`}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-4 rounded-xl font-bold text-sm text-[#111111] bg-neutral-50 hover:bg-[#E50914] hover:text-white border border-neutral-200 hover:border-transparent transition-all"
                >
                  <span>Explore {platform.badge.split('&')[0]}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
