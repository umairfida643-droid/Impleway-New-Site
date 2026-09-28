import React from 'react';

export const OracleIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center ${className}`}>
    <svg className="w-full h-full" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="5" fill="#F80000" />
      <path 
        d="M12 7c-3.3 0-6 2.2-6 5s2.7 5 6 5 6-2.2 6-5-2.7-5-6-5zm0 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3z" 
        fill="#FFFFFF" 
      />
    </svg>
  </div>
);

export const OdooIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-[#714B67] overflow-hidden ${className}`}>
    <img 
      src="/logos/odoo-official.svg" 
      alt="Official Odoo Logo" 
      className="w-full h-full object-contain filter brightness-0 invert" 
    />
  </div>
);

export const Dynamics365Icon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-[#002050] overflow-hidden ${className}`}>
    <img 
      src="/logos/dynamics-365-official.svg" 
      alt="Official Microsoft Dynamics 365 Logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const ZatcaIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-[#0B4E38] overflow-hidden ${className}`}>
    <img 
      src="/logos/zatca-logo.svg" 
      alt="Official ZATCA Logo" 
      className="w-full h-full object-contain brightness-0 invert" 
    />
  </div>
);

export const Vision2030Icon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-neutral-900 overflow-hidden ${className}`}>
    <img 
      src="/logos/saudi-vision-2030.svg" 
      alt="Official Saudi Vision 2030 Logo" 
      className="w-full h-full object-contain brightness-0 invert" 
    />
  </div>
);
