import React from 'react';
import { TECH_DATA } from '../ui/TechLogos';

export const TechStackMarquee = () => {
  // Split into two balanced rows of 11 items each
  const row1 = TECH_DATA.slice(0, 11);
  const row2 = TECH_DATA.slice(11);

  return (
    <section className="py-16 sm:py-20 bg-[#FAFAFA] border-b border-[#e7e7e7] overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center space-y-2.5">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-bold uppercase tracking-wider text-[#E50914]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
          <span>Enterprise Technology Ecosystem</span>
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#141414] tracking-tight">
          20+ Certified Technology Stacks & Integration Frameworks
        </h2>
        <p className="text-xs sm:text-sm text-[#5F6368] font-normal max-w-2xl mx-auto leading-relaxed">
          From Tier-1 ERP architectures to high-throughput cloud streaming APIs, we build scalable foundations that power modern Saudi enterprises.
        </p>
      </div>

      {/* Subtle Side Fade Gradients for Luxury Clean Aesthetic */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 bg-gradient-to-r from-[#FAFAFA] to-transparent z-10"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 bg-gradient-to-l from-[#FAFAFA] to-transparent z-10"></div>

      {/* Row 1: Left to Right Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        <div className="animate-marquee flex items-center gap-4 sm:gap-5 whitespace-nowrap hover:[animation-play-state:paused]">
          {row1.concat(row1).concat(row1).map((tech, idx) => (
            <div
              key={`row1-${idx}`}
              className="inline-flex items-center gap-3 px-4.5 py-2.5 rounded-xl bg-white border border-[#e5e5e5] shadow-2xs hover:shadow-md hover:border-red-400/60 hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none group min-w-[220px]"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform p-0.5">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-semibold text-[#1c1c1c] group-hover:text-[#E50914] transition-colors leading-snug">
                  {tech.name}
                </span>
                <span className="text-[10.5px] font-normal text-neutral-500 capitalize tracking-normal">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2: Right to Left Marquee */}
      <div className="relative w-full overflow-hidden flex items-center py-2 mt-1.5">
        <div className="animate-marquee-reverse flex items-center gap-4 sm:gap-5 whitespace-nowrap hover:[animation-play-state:paused]">
          {row2.concat(row2).concat(row2).map((tech, idx) => (
            <div
              key={`row2-${idx}`}
              className="inline-flex items-center gap-3 px-4.5 py-2.5 rounded-xl bg-white border border-[#e5e5e5] shadow-2xs hover:shadow-md hover:border-red-400/60 hover:-translate-y-0.5 transition-all duration-200 cursor-default select-none group min-w-[220px]"
            >
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-neutral-50 border border-neutral-100 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform p-0.5">
                {tech.svg}
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[13px] font-semibold text-[#1c1c1c] group-hover:text-[#E50914] transition-colors leading-snug">
                  {tech.name}
                </span>
                <span className="text-[10.5px] font-normal text-neutral-500 capitalize tracking-normal">
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
