import React from 'react';

export const OracleIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/oracle-app-icon.png" 
      alt="Oracle logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const OdooIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/odoo-app-icon.png" 
      alt="Odoo logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const Dynamics365Icon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center rounded-xl overflow-hidden shadow-xs ${className}`}>
    <img 
      src="/logos/dynamics-app-icon.png" 
      alt="Microsoft Dynamics 365 logo" 
      className="w-full h-full object-contain" 
    />
  </div>
);

export const ZatcaIcon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-[#0B4E38] overflow-hidden ${className}`}>
    <img 
      src="/logos/zatca-logo.svg" 
      alt="ZATCA logo — Saudi Zakat, Tax and Customs Authority" 
      className="w-full h-full object-contain brightness-0 invert" 
    />
  </div>
);

export const Vision2030Icon = ({ className = "w-8 h-8" }) => (
  <div className={`relative inline-flex items-center justify-center p-1 rounded-xl bg-neutral-900 overflow-hidden ${className}`}>
    <img 
      src="/logos/saudi-vision-2030.svg" 
      alt="Saudi Vision 2030 logo" 
      className="w-full h-full object-contain brightness-0 invert" 
    />
  </div>
);
