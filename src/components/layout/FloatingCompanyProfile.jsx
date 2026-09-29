import React from 'react';
import { FileText, ExternalLink } from 'lucide-react';

export const FloatingCompanyProfile = () => {
  return (
    <aside 
      aria-label="Enterprise Company Profile"
      className="fixed bottom-6 left-6 z-40 select-none flex items-center"
      style={{ position: 'fixed', bottom: '24px', left: '24px', zIndex: 40 }}
    >
      <a
        href="/Impleway-KSA-Company-Profile.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-[#E50914] via-red-600 to-[#9F0712] text-white shadow-2xl shadow-red-600/50 hover:scale-110 active:scale-95 transition-all duration-300 border-2 border-white cursor-pointer no-underline"
        aria-label="Open Impleway KSA Company Profile (PDF)"
        title="Open Impleway Company Profile (PDF)"
      >
        {/* Subtle Pulse Ring */}
        <span className="absolute -inset-1 rounded-full bg-red-500 opacity-40 animate-ping pointer-events-none"></span>

        {/* Center Content: Icon + Label */}
        <div className="relative z-10 flex flex-col items-center justify-center">
          <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          <span className="text-[8px] sm:text-[9px] font-black uppercase tracking-tight text-white leading-none mt-0.5">
            Profile
          </span>
        </div>

        {/* Hover Tooltip on Right */}
        <div className="absolute left-full ml-3 px-3 py-1.5 bg-[#050505] text-white text-xs font-bold rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none border border-neutral-800 flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
          <span>Open Company Profile (PDF)</span>
          <ExternalLink className="w-3 h-3 text-neutral-400" />
        </div>
      </a>
    </aside>
  );
};
