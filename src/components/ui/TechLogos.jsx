import React from 'react';

export const TECH_DATA = [
  {
    name: "Oracle Fusion Cloud",
    category: "Tier-1 Cloud ERP",
    color: "#EA1B22",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
        <path d="M12 4.5C6.75 4.5 2.5 7.86 2.5 12s4.25 7.5 9.5 7.5 9.5-3.36 9.5-7.5-4.25-7.5-9.5-7.5zm0 11.88c-3.17 0-5.75-1.96-5.75-4.38S8.83 7.62 12 7.62s5.75 1.96 5.75 4.38-2.58 4.38-5.75 4.38z" fill="#EA1B22"/>
      </svg>
    )
  },
  {
    name: "Odoo Enterprise",
    category: "Scalable Modular ERP",
    color: "#714B67",
    svg: (
      <svg className="w-7 h-5" viewBox="0 0 64 24" fill="none">
        <path d="M11 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-4c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" fill="#714B67"/>
        <path d="M37 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-4c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" fill="#00A09D"/>
        <path d="M53 20c-5 0-9-4-9-9s4-9 9-9 9 4 9 9-4 9-9 9zm0-4c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5z" fill="#714B67"/>
        <path d="M28 2v18h-4V8.5C22.8 5 20 2 16 2v4c2.2 0 4 1.8 4 4v10h4V2h4z" fill="#714B67"/>
      </svg>
    )
  },
  {
    name: "Microsoft Dynamics 365",
    category: "Enterprise Business Apps",
    color: "#0078D4",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="d365_g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0B53CE" />
            <stop offset="100%" stopColor="#7252AA" />
          </linearGradient>
          <linearGradient id="d365_g2" x1="100%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#2266E3" />
            <stop offset="100%" stopColor="#50E6FF" />
          </linearGradient>
        </defs>
        <path d="M4 5.5l14 4.5v7l-3-1v-4l-1.5-.5c-.3-.1-.6.1-.6.4v5.3L4 14V5.5z" fill="url(#d365_g1)" />
        <path d="M28 11.5c0 .9-.5 1.7-1.3 2l-8.7 3.5v7.5l10-3.5V11.5z" fill="url(#d365_g2)" />
        <path d="M24 14.5l-3 1.2v4.8c0 .3.3.5.5.4l1.5-.6c.6-.3 1-.9 1-1.6v-4.2z" fill="#B0ADFF" opacity="0.8" />
      </svg>
    )
  },
  {
    name: "ZATCA Phase 2 Fatoora",
    category: "KSA Tax Compliance",
    color: "#006848",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
        <defs>
          <linearGradient id="zatca_g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#62B34F" />
            <stop offset="50%" stopColor="#51BAB4" />
            <stop offset="100%" stopColor="#006848" />
          </linearGradient>
          <linearGradient id="zatca_g2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#51BAB4" />
            <stop offset="100%" stopColor="#004B32" />
          </linearGradient>
        </defs>
        {/* Authentic ZATCA Faceted Shield Emblem */}
        <path d="M20 2L35 11v11c0 9-6.5 14.5-15 16C11.5 36.5 5 31 5 22V11L20 2z" fill="url(#zatca_g1)"/>
        <path d="M20 5.5l11.5 7v9.5c0 7-5 11.5-11.5 13-6.5-1.5-11.5-6-11.5-13V12.5l11.5-7z" fill="url(#zatca_g2)" opacity="0.9"/>
        <path d="M20 8l8 5v7c0 5-3.5 8-8 9.5-4.5-1.5-8-4.5-8-9.5v-7l8-5z" fill="#FFFFFF" opacity="0.2"/>
        <path d="M15 20l3.5 3.5 7.5-8" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Saudi Vision 2030",
    category: "National Mandate",
    color: "#1B4F35",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 40 40" fill="none">
        {/* Authentic Vision 2030 Geometric Palm Starburst */}
        <g transform="translate(4, 4) scale(0.8)">
          <path d="M20 2l3 6.5L30 5l-3 7.5L34 16l-7.5 2L30 26l-7-3L20 31l-3-8-7 3 3.5-8L6 16l7-3.5L10 5l7 3.5L20 2z" fill="#006C35" />
          <circle cx="20" cy="16.5" r="4.5" fill="#D4AF37" />
          <circle cx="20" cy="16.5" r="2.2" fill="#FFFFFF" />
        </g>
      </svg>
    )
  },
  {
    name: "SAP S/4HANA",
    category: "Enterprise Suite",
    color: "#008FD3",
    svg: (
      <svg className="w-7 h-5" viewBox="0 0 52 26" fill="none">
        <path d="M0 0h40l12 26H0V0z" fill="#008FD3"/>
        <text x="5" y="19" fill="#FFFFFF" fontSize="16" fontWeight="900" fontFamily="Arial, Helvetica, sans-serif" letterSpacing="0.8">SAP</text>
      </svg>
    )
  },
  {
    name: "Microsoft Power BI",
    category: "Business Intelligence",
    color: "#F2C811",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="pbi_g1" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F6D751"/>
            <stop offset="100%" stopColor="#E6AD10"/>
          </linearGradient>
          <linearGradient id="pbi_g2" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#F9E07F"/>
            <stop offset="100%" stopColor="#F2C811"/>
          </linearGradient>
        </defs>
        <rect x="5" y="17" width="5.5" height="11" rx="1.5" fill="#D99B00"/>
        <rect x="13.2" y="10" width="5.5" height="18" rx="1.5" fill="url(#pbi_g1)"/>
        <rect x="21.5" y="4" width="5.5" height="24" rx="1.5" fill="url(#pbi_g2)"/>
      </svg>
    )
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Hosting & Compute",
    color: "#FF9900",
    svg: (
      <svg className="w-7 h-5" viewBox="0 0 64 36" fill="none">
        <path d="M12.5 7h4.8l7.2 16.5h-4.2l-1.5-3.8h-7.8l-1.5 3.8H5.3L12.5 7zm4.8 9.5l-2.4-6.3-2.4 6.3h4.8z" fill="#232F3E"/>
        <path d="M26.2 7h3.9l3.5 12.2L37 7h3.8l3.4 12.2L47.7 7h3.9l-5.3 16.5h-4.2l-3.3-11.2-3.3 11.2h-4.2L26.2 7z" fill="#232F3E"/>
        <path d="M54.5 19.8c1.2.9 2.7 1.4 4.3 1.4 2.2 0 3.3-.9 3.3-2.2 0-3.3-7.5-1.7-7.5-6.8 0-3.2 2.6-5.4 6.7-5.4 1.8 0 3.3.4 4.5 1.1l-1.2 3.1c-1-.6-2.1-.9-3.3-.9-2.1 0-3.1.9-3.1 2 0 3.1 7.5 1.5 7.5 6.7 0 3.2-2.5 5.5-6.9 5.5-2.1 0-3.9-.5-5.3-1.4l1-3.1z" fill="#232F3E"/>
        <path d="M9 28.5c12 6.5 33 6.5 46 0" stroke="#FF9900" strokeWidth="3.2" strokeLinecap="round"/>
        <path d="M54 27l3.5 2-1 3.5" stroke="#FF9900" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    )
  },
  {
    name: "Microsoft Azure",
    category: "Enterprise Cloud",
    color: "#0089D6",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <defs>
          <linearGradient id="az_g1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0078D4" />
            <stop offset="100%" stopColor="#005BA1" />
          </linearGradient>
          <linearGradient id="az_g2" x1="0%" y1="100%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0078D4" />
            <stop offset="100%" stopColor="#50E6FF" />
          </linearGradient>
        </defs>
        <path d="M10 26l7-16 5 10-6 2-3 4h-3z" fill="url(#az_g1)"/>
        <path d="M17.5 5L7 21h7l3.5-7 5.5 12H27L17.5 5z" fill="url(#az_g2)"/>
      </svg>
    )
  },
  {
    name: "Google Cloud Platform",
    category: "Hyperscale Infrastructure",
    color: "#4285F4",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 8.5c-3.3 0-6.1 2.2-6.8 5.3A5.5 5.5 0 0010 24.5h12.5a4.5 4.5 0 002-8.5C23.8 11.8 20.2 8.5 16 8.5z" fill="#4285F4"/>
        <path d="M10 24.5h4.5v-7H11a5.5 5.5 0 00-1 7z" fill="#34A853"/>
        <path d="M22.5 16a4.5 4.5 0 00-4.5-4.5h-2v7h6.5z" fill="#FBBC05"/>
        <path d="M16 8.5a6.5 6.5 0 00-6 4l2.5 4.5H16V8.5z" fill="#EA4335"/>
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    color: "#336791",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 3c-6.6 0-12 5-12 11.2 0 4.2 2.5 7.8 6.1 9.7v4.6l4.5-2.5c.5.1.9.1 1.4.1 6.6 0 12-5 12-11.2C28 8 22.6 3 16 3zm-2.5 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm7 8.5c-.8 2-2.8 3.5-5.2 3.5s-4.4-1.5-5.2-3.5h10.4z" fill="#336791"/>
      </svg>
    )
  },
  {
    name: "Python Enterprise",
    category: "Data Pipelines & Automation",
    color: "#3776AB",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M15.8 4c-5.2 0-4.9 2.2-4.9 2.2l.1 2.3h5v.7H8.8s-3.2-.4-3.2 4.6 2.8 4.8 2.8 4.8h1.7v-2.4s-.1-2.8 2.8-2.8h4.8s2.7 0 2.7-2.7V7.9s.4-3.9-4.8-3.9zm-2.7 1.5a1 1 0 110 2 1 1 0 010-2z" fill="#3776AB"/>
        <path d="M16.2 28c5.2 0 4.9-2.2 4.9-2.2l-.1-2.3h-5v-.7h7.2s3.2.4 3.2-4.6-2.8-4.8-2.8-4.8h-1.7v2.4s.1 2.8-2.8 2.8h-4.8s-2.7 0-2.7 2.7v2.8s-.4 3.9 4.8 3.9zm2.7-1.5a1 1 0 110-2 1 1 0 010 2z" fill="#FFD43B"/>
      </svg>
    )
  },
  {
    name: "Docker Containerization",
    category: "DevOps & Deployment",
    color: "#2496ED",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M29.6 15.2c-.4-.3-1.6-.4-2.5.1-.3-.6-1-1.1-1.9-1.2-.2 0-.4 0-.6.1-.5-1.5-1.8-2.2-2-2.3l-.4-.2-.3.3c-.6.8-.7 1.8-.4 2.8-1 .6-2.6.7-4.1.7H2.8c-.4 0-.8.3-.8.7 0 2.8.9 5.3 2.7 7.2 2.1 2.2 5 3.5 8.7 3.5 7.5 0 12.3-4.5 13.9-9.3 1.3-.1 2.4-.8 2.8-1.7l.2-.5-.7-.5zM5.5 11h2.5v2.5H5.5V11zm3.5 0h2.5v2.5H9V11zm3.5 0H15v2.5h-2.5V11zm-7 3.5h2.5V17H5.5v-2.5zm3.5 0h2.5V17H9v-2.5zm3.5 0H15V17h-2.5v-2.5zm3.5 0h2.5V17H16v-2.5zm-7-7h2.5V10H9V7.5zm3.5 0H15V10h-2.5V7.5zm3.5 0h2.5V10H16V7.5z" fill="#2496ED"/>
      </svg>
    )
  },
  {
    name: "Kubernetes (K8s)",
    category: "Orchestration Cluster",
    color: "#326CE5",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 3l11.3 6.5v13L16 29 4.7 22.5v-13L16 3z" fill="#326CE5"/>
        <path d="M16 8.5l1.6 2.8 3.2-.8-1 3.1 2.8 1.6-2.8 1.6 1 3.1-3.2-.8L16 22l-1.6-2.8-3.2.8 1-3.1-2.8-1.6 2.8-1.6-1-3.1 3.2.8L16 8.5z" fill="#FFFFFF"/>
        <circle cx="16" cy="15.2" r="2.2" fill="#326CE5"/>
      </svg>
    )
  },
  {
    name: "React.js Framework",
    category: "Enterprise Frontend",
    color: "#61DAFB",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00B4D8" strokeWidth="1.8" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00B4D8" strokeWidth="1.8" transform="rotate(60 16 16)" />
        <ellipse cx="16" cy="16" rx="13" ry="5" stroke="#00B4D8" strokeWidth="1.8" transform="rotate(120 16 16)" />
        <circle cx="16" cy="16" r="2.2" fill="#00B4D8" />
      </svg>
    )
  },
  {
    name: "Node.js Runtimes",
    category: "Microservices Backend",
    color: "#339933",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 3.5l11 6.3v12.7L16 28.8 5 22.5V9.8L16 3.5z" fill="#339933"/>
        <path d="M16 6.5l8.5 4.9v9.8L16 26.1l-8.5-4.9v-9.8L16 6.5z" fill="#539E43"/>
        <path d="M13.5 12h3c2.2 0 3.5 1.1 3.5 2.8 0 1.2-.6 2.1-1.6 2.5 1.3.4 2 1.4 2 2.7 0 1.9-1.5 3-3.8 3h-3.1V12zm2.2 4.2h1c.8 0 1.3-.4 1.3-1s-.5-1-1.3-1h-1v2zm0 4.6h1.2c.9 0 1.5-.4 1.5-1.1s-.6-1.1-1.5-1.1h-1.2v2.2z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    name: "Redis In-Memory",
    category: "High-Speed Caching",
    color: "#DC382D",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 4l12 6-12 6-12-6 12-6z" fill="#DC382D"/>
        <path d="M4 14l12 6 12-6-2.5-1.3L16 17.5 6.5 12.7 4 14z" fill="#A8201A"/>
        <path d="M4 19l12 6 12-6-2.5-1.3L16 22.5 6.5 17.7 4 19z" fill="#7E1410"/>
        <circle cx="16" cy="9" r="1.5" fill="#FFFFFF" opacity="0.6"/>
      </svg>
    )
  },
  {
    name: "Snowflake Data Cloud",
    category: "Data Warehouse",
    color: "#29B5E8",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 3v26M3 16h26M6.8 6.8l18.4 18.4M6.8 25.2L25.2 6.8" stroke="#29B5E8" strokeWidth="2.4" strokeLinecap="round"/>
        <path d="M16 7l-2.5-2.5M16 7l2.5-2.5M16 25l-2.5 2.5M16 25l2.5 2.5M7 16l-2.5-2.5M7 16l-2.5 2.5M25 16l2.5-2.5M25 16l2.5 2.5" stroke="#29B5E8" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    )
  },
  {
    name: "Apache Kafka",
    category: "Real-time Event Streams",
    color: "#231F20",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <circle cx="9" cy="16" r="3.5" fill="#231F20"/>
        <circle cx="23" cy="9" r="3.5" fill="#231F20"/>
        <circle cx="23" cy="23" r="3.5" fill="#231F20"/>
        <path d="M9 16l14-7M9 16l14 7" stroke="#231F20" strokeWidth="2.5"/>
      </svg>
    )
  },
  {
    name: "Salesforce CRM",
    category: "Customer Lifecycle",
    color: "#00A1E0",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M13.5 9c2.3 0 4.2 1.5 4.8 3.5.7-.3 1.5-.5 2.3-.5 3.3 0 6 2.7 6 6s-2.7 6-6 6H9.5c-3 0-5.5-2.5-5.5-5.5S6.5 13 9.5 13c.4 0 .9.1 1.3.2C11.5 10.6 13.5 9 13.5 9z" fill="#00A1E0"/>
      </svg>
    )
  },
  {
    name: "FastAPI REST Framework",
    category: "High-Throughput APIs",
    color: "#009688",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="14" fill="#009688"/>
        <path d="M17.5 6L9 17.5h6.5L14 26l9-12h-7l1.5-8z" fill="#FFFFFF"/>
      </svg>
    )
  },
  {
    name: "GraphQL Federation",
    category: "Unified API Query Layer",
    color: "#E10098",
    svg: (
      <svg className="w-6 h-6" viewBox="0 0 32 32" fill="none">
        <path d="M16 4.5l10.4 6v12L16 28.5l-10.4-6v-12L16 4.5z" stroke="#E10098" strokeWidth="1.8" fill="none"/>
        <path d="M16 4.5v24M5.6 10.5l20.8 12M5.6 22.5l20.8-12" stroke="#E10098" strokeWidth="1.4" opacity="0.6"/>
        <circle cx="16" cy="4.5" r="2.2" fill="#E10098"/>
        <circle cx="26.4" cy="10.5" r="2.2" fill="#E10098"/>
        <circle cx="26.4" cy="22.5" r="2.2" fill="#E10098"/>
        <circle cx="16" cy="28.5" r="2.2" fill="#E10098"/>
        <circle cx="5.6" cy="22.5" r="2.2" fill="#E10098"/>
        <circle cx="5.6" cy="10.5" r="2.2" fill="#E10098"/>
      </svg>
    )
  }
];
