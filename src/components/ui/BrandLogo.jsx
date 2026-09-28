import React from 'react';

export const BrandLogo = ({ variant = 'dark', className = 'h-8 sm:h-9' }) => {
  const isDark = variant === 'dark'; // dark text for light navbar
  const src = isDark ? '/logo.png' : '/logo-white.png';

  return (
    <div className={`relative inline-flex items-center select-none ${className}`}>
      <img
        src={src}
        alt="Impleway – Simplify, Implementation"
        width="160"
        height="36"
        loading="eager"
        fetchpriority="high"
        decoding="async"
        className="h-full w-auto object-contain block"
      />
      {/* Pulsing Red Dot over the logo's dot (at ~90.1% X, ~61.1% Y) */}
      <span 
        aria-hidden="true"
        className="absolute left-[90.2%] top-[61.5%] -translate-x-1/2 -translate-y-1/2 pointer-events-none flex h-2.5 w-2.5 sm:h-3 sm:w-3"
      >
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E50914] opacity-80" />
        <span className="relative inline-flex rounded-full h-full w-full bg-[#E50914] shadow-[0_0_10px_#E50914]" />
      </span>
    </div>
  );
};
