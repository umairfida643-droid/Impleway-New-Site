import React from 'react';
import { TECH_DATA } from '../ui/TechLogos';

export const TechStackMarquee = () => {
  // Split into two rows of 11 items each for visual density and balance
  const row1 = TECH_DATA.slice(0, 11);
  const row2 = TECH_DATA.slice(11);

  return (
    <section className="py-16 bg-white border-b border-[#e7e7e7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center space-y-2">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-xs font-black uppercase tracking-wider text-[#E50914]">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
          <span>Enterprise Technology Ecosystem</span>
        </div>
        <h3 className="text-2xl sm:text-3xl font-black text-[#111111] tracking-tight">
          20+ Certified Technology Stacks & Integration Frameworks
        </h3>
        <p className="text-sm text-[#5F6368] max-w-2xl mx-auto">
          From Tier-1 ERP architectures to high-throughput cloud streaming APIs, we build scalable foundations that power modern Saudi enterprises.
        </p>
      </div>

      {/* Infinite Scrolling Ticker (Row 1 - Left to Right) */}
      <div className="relative w-full overflow-hidden flex items-center py-2.5">
        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
          {row1.concat(row1).concat(row1).map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F6F6F6] border border-[#e7e7e7] text-xs sm:text-sm font-extrabold text-[#111111] hover:border-[#E50914] hover:bg-white hover:shadow-lg transition-all cursor-default select-none group"
            >
              <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-semibold text-[#5F6368] uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Infinite Scrolling Ticker (Row 2 - Right to Left) */}
      <div className="relative w-full overflow-hidden flex items-center py-2.5">
        <div className="animate-marquee-reverse flex items-center gap-4 whitespace-nowrap">
          {row2.concat(row2).concat(row2).map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#F6F6F6] border border-[#e7e7e7] text-xs sm:text-sm font-extrabold text-[#111111] hover:border-[#E50914] hover:bg-white hover:shadow-lg transition-all cursor-default select-none group"
            >
              <div className="w-6 h-6 flex items-center justify-center group-hover:scale-110 transition-transform">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-xs sm:text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[10px] font-semibold text-[#5F6368] uppercase tracking-wider">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
