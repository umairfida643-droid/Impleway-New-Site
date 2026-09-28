import React from 'react';

const STACK_ITEMS = [
  "Oracle ERP Cloud",
  "Odoo Enterprise",
  "Microsoft Dynamics 365",
  "SAP S/4HANA",
  "Microsoft Power BI",
  "Python",
  "PostgreSQL",
  "Amazon Web Services (AWS)",
  "Google Cloud Platform",
  "React.js",
  "Docker",
  "Node.js",
  "FastAPI",
  "Tailwind CSS"
];

export const TechStackMarquee = () => {
  return (
    <section className="py-14 bg-white border-b border-[#e7e7e7] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
        <div className="text-xs uppercase font-extrabold tracking-wider text-[#5F6368]">
          Enterprise Technology Ecosystem & Integration Frameworks
        </div>
      </div>

      {/* Infinite Scrolling Ticker (Row 1) */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        <div className="animate-marquee flex items-center gap-4 whitespace-nowrap">
          {STACK_ITEMS.concat(STACK_ITEMS).map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F6F6] border border-[#e7e7e7] text-xs sm:text-sm font-extrabold text-[#111111] hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-default select-none shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#E50914]"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Reverse Infinite Scrolling Ticker (Row 2) */}
      <div className="relative w-full overflow-hidden flex items-center py-2">
        <div className="animate-marquee-reverse flex items-center gap-4 whitespace-nowrap">
          {STACK_ITEMS.slice().reverse().concat(STACK_ITEMS.slice().reverse()).map((tech, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#F6F6F6] border border-[#e7e7e7] text-xs sm:text-sm font-extrabold text-[#111111] hover:border-[#E50914] hover:text-[#E50914] transition-colors cursor-default select-none shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-[#111111]"></span>
              <span>{tech}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
