import React from 'react';

export const OracleIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/oracle-app-icon.png" 
      alt="Oracle ERP Cloud Logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const OdooIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/odoo-app-icon.png" 
      alt="Official Odoo Logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const Dynamics365Icon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/dynamics-app-icon.png" 
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
