import React from 'react';

export const TECH_DATA = [
  {
    name: "Oracle Fusion Cloud",
    category: "Tier-1 Cloud ERP",
    color: "#F80000",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#F80000" />
        <path d="M20 12c-5.5 0-10 3.6-10 8s4.5 8 10 8 10-3.6 10-8-4.5-8-10-8zm0 13c-3.6 0-6.5-2.2-6.5-5s2.9-5 6.5-5 6.5 2.2 6.5 5-2.9 5-6.5 5z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Odoo Enterprise",
    category: "Scalable Modular ERP",
    color: "#714B67",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#714B67" />
        <circle cx="14" cy="20" r="5" stroke="#FFFFFF" strokeWidth="2.8" fill="none" />
        <circle cx="26" cy="20" r="5" stroke="#00A09D" strokeWidth="2.8" fill="none" />
        <path d="M19.5 15v10" stroke="#FFFFFF" strokeWidth="2.8" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Microsoft Dynamics 365",
    category: "Enterprise Business Apps",
    color: "#0078D4",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#002050" />
        <path d="M10 12l9-4v24l-9-4V12z" fill="#0078D4" />
        <path d="M20 8l10 4v16l-10 4V8z" fill="#50E6FF" opacity="0.95" />
        <path d="M19 16l6 4-6 4V16z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "ZATCA Phase 2 Fatoora",
    category: "KSA Tax Compliance",
    color: "#0B4E38",
    svg: (
      <div className="w-8 h-8 rounded-xl bg-[#0B4E38] p-1 flex items-center justify-center">
        <img src="/logos/zatca-logo.svg" alt="ZATCA" className="w-full h-auto brightness-0 invert" />
      </div>
    )
  },
  {
    name: "Saudi Vision 2030",
    category: "National Mandate",
    color: "#1B4F35",
    svg: (
      <div className="w-8 h-8 rounded-xl bg-neutral-900 p-1 flex items-center justify-center">
        <img src="/logos/saudi-vision-2030.svg" alt="Saudi Vision 2030" className="w-full h-auto brightness-0 invert" />
      </div>
    )
  },
  {
    name: "SAP S/4HANA",
    category: "Enterprise Suite",
    color: "#008FD3",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#008FD3" />
        <text x="6" y="26" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="system-ui, sans-serif" letterSpacing="0.5">SAP</text>
      </svg>
    )
  },
  {
    name: "Microsoft Power BI",
    category: "Business Intelligence",
    color: "#F2C811",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E1E1E" />
        <rect x="10" y="21" width="5" height="10" rx="1.5" fill="#F2C811" />
        <rect x="17.5" y="15" width="5" height="16" rx="1.5" fill="#F2C811" />
        <rect x="25" y="9" width="5" height="22" rx="1.5" fill="#F2C811" />
      </svg>
    )
  },
  {
    name: "Amazon Web Services",
    category: "Cloud Hosting & Compute",
    color: "#FF9900",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#232F3E" />
        <path d="M10 23c6 4.5 14 4.5 20 0" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
        <path d="M28.5 22.5l2 1-1.5 2" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Microsoft Azure",
    category: "Enterprise Cloud",
    color: "#0089D6",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#0078D4" />
        <path d="M12 29l8-18h7l-8 18h-7zm6-6l5 6h7l-8-11-4 5z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Google Cloud Platform",
    category: "Hyperscale Infrastructure",
    color: "#4285F4",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#FFFFFF" stroke="#E5E7EB" strokeWidth="1.5" />
        <circle cx="16" cy="17" r="4.5" fill="#EA4335" />
        <circle cx="24" cy="17" r="4.5" fill="#4285F4" />
        <circle cx="20" cy="23" r="4.5" fill="#34A853" />
        <circle cx="17" cy="20" r="3" fill="#FBBC05" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "Relational Database",
    color: "#336791",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#336791" />
        <circle cx="20" cy="20" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <path d="M15 18c2-3 8-3 10 0M16 24c2 2 6 2 8 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Python Enterprise",
    category: "Data Pipelines & Automation",
    color: "#3776AB",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E415E" />
        <path d="M20 9c-5 0-5 2.5-5 2.5v5h5v1.5h-7s-3 0-3 5 2.5 5 2.5 5h2.5v-2.5c0-2.5 2.5-2.5 2.5-2.5h6.5v-5s0-5-5-5h-1.5zm-1 2.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#3776AB" />
        <path d="M20 31c5 0 5-2.5 5-2.5v-5h-5v-1.5h7s3 0 3-5-2.5-5-2.5-5h-2.5v2.5c0 2.5-2.5 2.5-2.5 2.5h-6.5v5s0 5 5 5h1.5zm1-2.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    name: "Docker Containerization",
    category: "DevOps & Deployment",
    color: "#2496ED",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#2496ED" />
        <rect x="12" y="17" width="3.5" height="3.5" rx="0.5" fill="#FFFFFF" />
        <rect x="17" y="17" width="3.5" height="3.5" rx="0.5" fill="#FFFFFF" />
        <rect x="22" y="17" width="3.5" height="3.5" rx="0.5" fill="#FFFFFF" />
        <rect x="17" y="12" width="3.5" height="3.5" rx="0.5" fill="#FFFFFF" />
        <path d="M9 23c2 6 17 6 22 0" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Kubernetes (K8s)",
    category: "Orchestration Cluster",
    color: "#326CE5",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#326CE5" />
        <circle cx="20" cy="20" r="9" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M20 11v18M12 15l16 10M12 25l16-10" stroke="#FFFFFF" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    name: "React.js Framework",
    category: "Enterprise Frontend",
    color: "#61DAFB",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#20232A" />
        <ellipse cx="20" cy="20" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.8" />
        <ellipse cx="20" cy="20" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(60 20 20)" />
        <ellipse cx="20" cy="20" rx="11" ry="4.5" stroke="#61DAFB" strokeWidth="1.8" transform="rotate(120 20 20)" />
        <circle cx="20" cy="20" r="2" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: "Node.js Runtimes",
    category: "Microservices Backend",
    color: "#339933",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#222222" />
        <path d="M20 10l9 5.5v11L20 32l-9-5.5v-11L20 10z" stroke="#339933" strokeWidth="2.8" fill="none" />
        <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="bold">JS</text>
      </svg>
    )
  },
  {
    name: "Redis In-Memory",
    category: "High-Speed Caching",
    color: "#DC382D",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#D82C20" />
        <path d="M10 16l10-5 10 5-10 5-10-5zm0 7l10 5 10-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Snowflake Data Cloud",
    category: "Data Warehouse",
    color: "#29B5E8",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#29B5E8" />
        <path d="M20 10v20M12 15l16 10M12 25l16-10" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Apache Kafka",
    category: "Real-time Event Streams",
    color: "#231F20",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#231F20" />
        <circle cx="14" cy="20" r="3" fill="#FFFFFF" />
        <circle cx="26" cy="14" r="3" fill="#FFFFFF" />
        <circle cx="26" cy="26" r="3" fill="#FFFFFF" />
        <path d="M14 20l12-6M14 20l12 6" stroke="#FFFFFF" strokeWidth="2.5" />
      </svg>
    )
  },
  {
    name: "Salesforce CRM",
    category: "Customer Lifecycle",
    color: "#00A1E0",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#00A1E0" />
        <path d="M14 23c-2.5 0-4-1.5-4-3.5 0-1.8 1.2-3.2 3-3.6 0-3 2.5-4.5 5-3.9 1.5-1.5 3.8-1.5 5.2 0 1.8-.8 3.8 0 4.5 1.8 1.8.3 3 1.8 3 3.4 0 2.2-1.5 3.8-3.7 3.8H14z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "FastAPI REST Framework",
    category: "High-Throughput APIs",
    color: "#009688",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#009688" />
        <path d="M22 8L13 22h7l-2 10 9-14h-7l2-10z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "GraphQL Federation",
    category: "Unified API Query Layer",
    color: "#E10098",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#E10098" />
        <polygon points="20,10 28,15 28,25 20,30 12,25 12,15" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="10" r="2.5" fill="#FFFFFF" />
        <circle cx="28" cy="15" r="2.5" fill="#FFFFFF" />
        <circle cx="28" cy="25" r="2.5" fill="#FFFFFF" />
        <circle cx="20" cy="30" r="2.5" fill="#FFFFFF" />
        <circle cx="12" cy="25" r="2.5" fill="#FFFFFF" />
        <circle cx="12" cy="15" r="2.5" fill="#FFFFFF" />
      </svg>
    )
  }
];
