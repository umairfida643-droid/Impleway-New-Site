import React from 'react';
import { TECH_DATA } from '../ui/TechLogos';

export const TechStackMarquee = () => {
  // Split into two balanced rows of 11 items each
  const row1 = TECH_DATA.slice(0, 11);
  const row2 = TECH_DATA.slice(11);

  return (
    <section className="py-20 bg-[#FAFAFA] border-b border-[#e7e7e7] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-3">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-black uppercase tracking-wider text-[#E50914]">
          <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
          <span>Enterprise Technology Ecosystem & Integration Frameworks</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
          Battle-Tested on Global Stacks & Local Saudi Mandates
        </h2>
        <p className="text-sm sm:text-base text-[#5F6368] max-w-2xl mx-auto leading-relaxed">
          From Tier-1 enterprise ERP suites and ZATCA compliance engines to high-throughput cloud streaming APIs, our engineers build on proven architectures.
        </p>
      </div>

      {/* Subtle Side Fade Gradients for Luxury Look */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2.5">
        <div className="animate-marquee flex items-center gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
          {row1.concat(row1).concat(row1).map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none group min-w-[260px]"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2.5 mt-2">
        <div className="animate-marquee-reverse flex items-center gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
          {row2.concat(row2).concat(row2).map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="inline-flex items-center gap-3.5 px-6 py-4 rounded-2xl bg-white border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-0.5 transition-all duration-300 cursor-default select-none group min-w-[260px]"
            >
              <div className="w-10 h-10 rounded-xl bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                  {tech.name}
                </span>
                <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider mt-0.5">
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
