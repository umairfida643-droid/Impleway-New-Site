import React from 'react';

export const OracleIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#F80000" />
    <path 
      d="M12 7c-3.3 0-6 2.2-6 5s2.7 5 6 5 6-2.2 6-5-2.7-5-6-5zm0 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3z" 
      fill="#FFFFFF" 
    />
  </svg>
);

export const OdooIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#714B67" />
    <circle cx="8" cy="12" r="3.2" stroke="#FFFFFF" strokeWidth="2" fill="none" />
    <circle cx="15.5" cy="12" r="3.2" stroke="#00A09D" strokeWidth="2" fill="none" />
    <path d="M11.5 8.8v6.4" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
  </svg>
);

export const Dynamics365Icon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#002050" />
    <path d="M6 7.5l5.5-2.5v14L6 16.5v-9z" fill="#0078D4" />
    <path d="M12.5 5l5.5 3v8l-5.5 3V5z" fill="#50E6FF" opacity="0.9" />
    <path d="M11.5 9.5l3.5 2.5-3.5 2.5V9.5z" fill="#FFFFFF" />
  </svg>
);

export const ZatcaIcon = ({ className = "w-8 h-8" }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none">
    <rect width="24" height="24" rx="6" fill="#0B4E38" />
    <path d="M12 4L4 8v6c0 5 4.5 7.5 8 9 3.5-1.5 8-4 8-9V8l-8-4z" fill="#0E7552" />
    <path d="M9 12.5l2 2 4.5-4.5" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);
