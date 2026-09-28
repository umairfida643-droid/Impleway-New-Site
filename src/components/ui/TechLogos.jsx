import React from 'react';

export const TECH_DATA = [
  {
    name: "Oracle Fusion Cloud",
    category: "ERP Ecosystem",
    color: "#F80000",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#F80000" />
        <path d="M12 7c-3.3 0-6 2.2-6 5s2.7 5 6 5 6-2.2 6-5-2.7-5-6-5zm0 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3z" fill="#FFFFFF" />
      </svg>
    )
  },
  {
    name: "Odoo Enterprise",
    category: "ERP Ecosystem",
    color: "#714B67",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#714B67" />
        <circle cx="8" cy="12" r="3" stroke="#FFF" strokeWidth="1.8" />
        <circle cx="15.5" cy="12" r="3" stroke="#00A09D" strokeWidth="1.8" />
      </svg>
    )
  },
  {
    name: "Microsoft Dynamics 365",
    category: "ERP Ecosystem",
    color: "#0078D4",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#002050" />
        <path d="M6 7l5-2v14l-5-2V7z" fill="#0078D4" />
        <path d="M12 5l5 2v10l-5 2V5z" fill="#50E6FF" />
      </svg>
    )
  },
  {
    name: "SAP S/4HANA",
    category: "Enterprise ERP",
    color: "#008FD3",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#008FD3" />
        <text x="3" y="16" fill="#FFF" fontSize="9" fontWeight="900" fontFamily="sans-serif">SAP</text>
      </svg>
    )
  },
  {
    name: "ZATCA Fatoora Phase 2",
    category: "KSA Regulatory",
    color: "#0B4E38",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0B4E38" />
        <path d="M12 4L5 8v5c0 4.5 3.5 6.5 7 8 3.5-1.5 7-3.5 7-8V8l-7-4z" fill="#0E7552" />
        <path d="M9.5 12l2 2 3.5-3.5" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Microsoft Power BI",
    category: "Analytics & BI",
    color: "#F2C811",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E1E1E" />
        <rect x="6" y="13" width="3" height="6" rx="1" fill="#F2C811" />
        <rect x="10.5" y="9" width="3" height="10" rx="1" fill="#F2C811" />
        <rect x="15" y="5" width="3" height="14" rx="1" fill="#F2C811" />
      </svg>
    )
  },
  {
    name: "Amazon Web Services (AWS)",
    category: "Cloud Infrastructure",
    color: "#FF9900",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#232F3E" />
        <path d="M6 14c3 3 8 3 12 0" stroke="#FF9900" strokeWidth="2" strokeLinecap="round" />
        <path d="M17 13.5l1.5.5-1 1.5" stroke="#FF9900" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Microsoft Azure",
    category: "Cloud Infrastructure",
    color: "#0089D6",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0078D4" />
        <path d="M7 18l5-12h4l-5 12H7zm4-4l3 4h4l-5-7-2 3z" fill="#FFF" />
      </svg>
    )
  },
  {
    name: "Google Cloud Platform",
    category: "Cloud Infrastructure",
    color: "#4285F4",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#FFFFFF" stroke="#E0E0E0" />
        <circle cx="10" cy="10" r="3" fill="#EA4335" />
        <circle cx="14" cy="10" r="3" fill="#4285F4" />
        <circle cx="12" cy="14" r="3" fill="#34A853" />
        <circle cx="10" cy="12" r="2" fill="#FBBC05" />
      </svg>
    )
  },
  {
    name: "Python",
    category: "Data & Backend",
    color: "#3776AB",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#1E415E" />
        <path d="M12 5c-3 0-3 1.5-3 1.5v3h3v1H7s-2 0-2 3 1.5 3 1.5 3h1.5v-1.5c0-1.5 1.5-1.5 1.5-1.5h4v-3s0-3-3-3h-1zm-.5 1.5a.75.75 0 110 1.5.75.75 0 010-1.5z" fill="#3776AB" />
        <path d="M12 19c3 0 3-1.5 3-1.5v-3h-3v-1h5s2 0 2-3-1.5-3-1.5-3h-1.5v1.5c0 1.5-1.5 1.5-1.5 1.5h-4v3s0 3 3 3h1zm.5-1.5a.75.75 0 110-1.5.75.75 0 010 1.5z" fill="#FFD43B" />
      </svg>
    )
  },
  {
    name: "PostgreSQL",
    category: "Enterprise Database",
    color: "#336791",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#336791" />
        <circle cx="12" cy="12" r="5" stroke="#FFF" strokeWidth="1.5" />
        <path d="M9 11c1-2 5-2 6 0M10 15c1 1 3 1 4 0" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Docker",
    category: "DevOps & Containers",
    color: "#2496ED",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#2496ED" />
        <rect x="7" y="10" width="2" height="2" fill="#FFF" />
        <rect x="10" y="10" width="2" height="2" fill="#FFF" />
        <rect x="13" y="10" width="2" height="2" fill="#FFF" />
        <rect x="10" y="7" width="2" height="2" fill="#FFF" />
        <path d="M5 14c1 4 10 4 14 0" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Kubernetes",
    category: "Container Orchestration",
    color: "#326CE5",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#326CE5" />
        <circle cx="12" cy="12" r="5" stroke="#FFF" strokeWidth="1.5" />
        <path d="M12 7v10M7.5 9.5l9 5M7.5 14.5l9-5" stroke="#FFF" strokeWidth="1" />
      </svg>
    )
  },
  {
    name: "React.js",
    category: "Frontend UI",
    color: "#61DAFB",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#20232A" />
        <ellipse cx="12" cy="12" rx="7" ry="2.8" stroke="#61DAFB" strokeWidth="1.2" />
        <ellipse cx="12" cy="12" rx="7" ry="2.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="7" ry="2.8" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="1.2" fill="#61DAFB" />
      </svg>
    )
  },
  {
    name: "Node.js",
    category: "Backend Runtimes",
    color: "#339933",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#333333" />
        <path d="M12 6l6 3.5v7L12 20l-6-3.5v-7L12 6z" stroke="#339933" strokeWidth="1.8" />
        <text x="9" y="15" fill="#FFF" fontSize="8" fontWeight="bold">JS</text>
      </svg>
    )
  },
  {
    name: "FastAPI",
    category: "API Microservices",
    color: "#059669",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#009688" />
        <path d="M13 5L8 13h4l-1 6 5-8h-4l1-6z" fill="#FFF" />
      </svg>
    )
  },
  {
    name: "Redis",
    category: "Caching & In-Memory",
    color: "#DC382D",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#D82C20" />
        <path d="M6 10l6-3 6 3-6 3-6-3zm0 4l6 3 6-3" stroke="#FFF" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Snowflake",
    category: "Cloud Data Warehouse",
    color: "#29B5E8",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#29B5E8" />
        <path d="M12 6v12M7 9l10 6M7 15l10-6" stroke="#FFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  {
    name: "Apache Kafka",
    category: "Event Streaming",
    color: "#231F20",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#231F20" />
        <circle cx="8" cy="12" r="2" fill="#FFF" />
        <circle cx="15" cy="8" r="2" fill="#FFF" />
        <circle cx="15" cy="16" r="2" fill="#FFF" />
        <path d="M8 12l7-4M8 12l7 4" stroke="#FFF" strokeWidth="1.5" />
      </svg>
    )
  },
  {
    name: "Salesforce CRM",
    category: "CRM & Omnichannel",
    color: "#00A1E0",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#00A1E0" />
        <path d="M8 14c-1.5 0-2.5-1-2.5-2.5 0-1.2.8-2.2 2-2.4C8 7 9.8 6 11.5 6.5 12.5 5.5 14 5.5 15 6.5c1.2-.5 2.5 0 3 1.2 1.2.2 2 1.2 2 2.3 0 1.5-1 2.5-2.5 2.5H8z" fill="#FFF" />
      </svg>
    )
  },
  {
    name: "GraphQL",
    category: "API Architecture",
    color: "#E10098",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#E10098" />
        <polygon points="12,6 17,9 17,15 12,18 7,15 7,9" stroke="#FFF" strokeWidth="1.5" fill="none" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    category: "Design System",
    color: "#06B6D4",
    svg: (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <rect width="24" height="24" rx="4" fill="#0F172A" />
        <path d="M7 12c1-2 2.5-3 4.5-3 2.5 0 3 2 4.5 2s2-1 3-2c-1 2-2.5 3-4.5 3-2.5 0-3-2-4.5-2s-2 1-3 2z" fill="#06B6D4" />
      </svg>
    )
  }
];
