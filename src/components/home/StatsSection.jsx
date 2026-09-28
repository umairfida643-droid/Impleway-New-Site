import React from 'react';
import { siteConfig } from '../../data/siteConfig';

export const StatsSection = () => {
  return (
    <section className="py-12 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {siteConfig.stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-white rounded-2xl p-6 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E50914] to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
              <div className="text-4xl sm:text-5xl font-black text-[#E50914] tracking-tight">
                {stat.value}
              </div>
              <div className="text-base font-bold text-[#111111] mt-1">
                {stat.label}
              </div>
              <p className="text-xs text-[#5F6368] mt-1">
                {stat.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
