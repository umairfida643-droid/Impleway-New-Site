import React from 'react';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Cpu, 
  Layers, Database, Cloud, Lock, Terminal, Globe, Server 
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Comprehensive Registry of Technology Logos with authentic SVG vectors
export const TECH_CATALOG = {
  // --- ERP Core & Compliance ---
  "Oracle": {
    name: "Oracle Fusion Cloud",
    role: "Tier-1 Cloud ERP",
    desc: "Autonomous financial ledger, MRP, and global supply chain.",
    color: "#F80000",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#F80000" />
        <path d="M20 12c-5.5 0-10 3.6-10 8s4.5 8 10 8 10-3.6 10-8-4.5-8-10-8zm0 13c-3.6 0-6.5-2.2-6.5-5s2.9-5 6.5-5 6.5 2.2 6.5 5-2.9 5-6.5 5z" fill="#FFFFFF" />
      </svg>
    )
  },
  "Odoo": {
    name: "Odoo 17 Enterprise",
    role: "Agile Modular ERP",
    desc: "Seamless POS, WMS multi-warehouse, and manufacturing workflows.",
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
  "Dynamics": {
    name: "Microsoft Dynamics 365",
    role: "Enterprise Business Suite",
    desc: "Unified finance, operations, and Copilot AI intelligence.",
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
  "SAP": {
    name: "SAP S/4HANA",
    role: "Enterprise Core ERP",
    desc: "High-volume transactional consistency and real-time in-memory analytics.",
    color: "#008FD3",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#008FD3" />
        <text x="6" y="26" fill="#FFFFFF" fontSize="14" fontWeight="900" fontFamily="system-ui, sans-serif">SAP</text>
      </svg>
    )
  },
  "ZATCA": {
    name: "ZATCA Fatoora Phase-2",
    role: "KSA Statutory Mandate",
    desc: "Automated cryptographic stamp, TLV QR code, and clearance API.",
    color: "#0B4E38",
    svg: (
      <div className="w-8 h-8 rounded-xl bg-[#0B4E38] p-1 flex items-center justify-center">
        <img src="/logos/zatca-logo.svg" alt="ZATCA" className="w-full h-auto brightness-0 invert" />
      </div>
    )
  },
  "Vision 2030": {
    name: "Saudi Vision 2030",
    role: "Digital Compliance",
    desc: "Local data residency, national cloud security, and institutional governance.",
    color: "#1B4F35",
    svg: (
      <div className="w-8 h-8 rounded-xl bg-neutral-900 p-1 flex items-center justify-center">
        <img src="/logos/saudi-vision-2030.svg" alt="Vision 2030" className="w-full h-auto brightness-0 invert" />
      </div>
    )
  },

  // --- Cloud & Infrastructure ---
  "AWS": {
    name: "Amazon Web Services",
    role: "Cloud Infrastructure",
    desc: "Elastic EC2, RDS Aurora, S3 high-durability storage, and VPC isolation.",
    color: "#FF9900",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#232F3E" />
        <path d="M10 23c6 4.5 14 4.5 20 0" stroke="#FF9900" strokeWidth="3" strokeLinecap="round" />
        <path d="M28.5 22.5l2 1-1.5 2" stroke="#FF9900" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  "Azure": {
    name: "Microsoft Azure Cloud",
    role: "Enterprise Cloud Hybrid",
    desc: "ExpressRoute, Entra ID SSO, and automated geo-redundant backups.",
    color: "#0089D6",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#0078D4" />
        <path d="M12 29l8-18h7l-8 18h-7zm6-6l5 6h7l-8-11-4 5z" fill="#FFFFFF" />
      </svg>
    )
  },
  "GCP": {
    name: "Google Cloud Platform",
    role: "Hyperscale Compute",
    desc: "BigQuery data analytics, Kubernetes Engine (GKE), and secure VPCs.",
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
  "Docker": {
    name: "Docker Containerization",
    role: "Microservices Isolation",
    desc: "Immutable container images and rapid standardized environment rollouts.",
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
  "Kubernetes": {
    name: "Kubernetes (K8s)",
    role: "Cluster Orchestration",
    desc: "Zero-downtime rolling deploys, auto-scaling pods, and self-healing nodes.",
    color: "#326CE5",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#326CE5" />
        <circle cx="20" cy="20" r="9" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M20 11v18M12 15l16 10M12 25l16-10" stroke="#FFFFFF" strokeWidth="1.8" />
      </svg>
    )
  },

  // --- Data, Messaging & Analytics ---
  "PostgreSQL": {
    name: "PostgreSQL Enterprise",
    role: "Relational Master DB",
    desc: "ACID compliance, point-in-time recovery, and partition scaling.",
    color: "#336791",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#336791" />
        <circle cx="20" cy="20" r="8" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <path d="M15 18c2-3 8-3 10 0M16 24c2 2 6 2 8 0" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
      </svg>
    )
  },
  "Redis": {
    name: "Redis In-Memory Cache",
    role: "Sub-Millisecond Cache",
    desc: "Session caching, pub/sub queues, and fast token verification.",
    color: "#DC382D",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#D82C20" />
        <path d="M10 16l10-5 10 5-10 5-10-5zm0 7l10 5 10-5" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  },
  "Kafka": {
    name: "Apache Kafka",
    role: "Event Streaming Bus",
    desc: "Decoupled real-time message streaming across ERP and external APIs.",
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
  "Power BI": {
    name: "Microsoft Power BI",
    role: "Executive Dashboards",
    desc: "Live KPI telemetry, drill-through financial models, and automated board decks.",
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

  // --- Development Frameworks & Languages ---
  "Python": {
    name: "Python Enterprise",
    role: "ETL & Scripting Engine",
    desc: "Pandas/NumPy data sanitization, schema migration, and async integrations.",
    color: "#3776AB",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E415E" />
        <path d="M20 9c-5 0-5 2.5-5 2.5v5h5v1.5h-7s-3 0-3 5 2.5 5 2.5 5h2.5v-2.5c0-2.5 2.5-2.5 2.5-2.5h6.5v-5s0-5-5-5h-1.5zm-1 2.5a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill="#3776AB" />
        <path d="M20 31c5 0 5-2.5 5-2.5v-5h-5v-1.5h7s3 0 3-5-2.5-5-2.5-5h-2.5v2.5c0 2.5-2.5 2.5-2.5 2.5h-6.5v5s0 5 5 5h1.5zm1-2.5a1.2 1.2 0 110-2.4 1.2 1.2 0 010 2.4z" fill="#FFD43B" />
      </svg>
    )
  },
  "React": {
    name: "React.js Framework",
    role: "Modern Frontend",
    desc: "Single-page responsive dashboards, component architecture, and fast virtual DOM.",
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
  "Node": {
    name: "Node.js Runtimes",
    role: "Microservices Backend",
    desc: "High-concurrency event-driven APIs, WebSocket sync, and microservices.",
    color: "#339933",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#222222" />
        <path d="M20 10l9 5.5v11L20 32l-9-5.5v-11L20 10z" stroke="#339933" strokeWidth="2.8" fill="none" />
        <text x="14" y="24" fill="#FFFFFF" fontSize="12" fontWeight="bold">JS</text>
      </svg>
    )
  },
  "FastAPI": {
    name: "FastAPI REST Engine",
    role: "High-Speed Microservice",
    desc: "Pydantic-validated REST endpoints, OpenAPI auto-docs, and async execution.",
    color: "#009688",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#009688" />
        <path d="M22 8L13 22h7l-2 10 9-14h-7l2-10z" fill="#FFFFFF" />
      </svg>
    )
  },
  "GraphQL": {
    name: "GraphQL Gateway",
    role: "Unified Query Layer",
    desc: "Single endpoint federation across disparate ERP backends and CRM tables.",
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
  },

  // --- Web, CMS & E-Commerce ---
  "WordPress": {
    name: "WordPress Enterprise",
    role: "Headless & Core CMS",
    desc: "Custom Gutenberg workflows, enterprise caching, and decoupled REST APIs.",
    color: "#21759B",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#21759B" />
        <circle cx="20" cy="20" r="10" stroke="#FFFFFF" strokeWidth="2" fill="none" />
        <path d="M14 17l4 9 2.5-6-2-6" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 20l3 6 3-9" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  "Shopify": {
    name: "Shopify Plus / Commerce",
    role: "Enterprise E-Commerce",
    desc: "High-volume checkout, inventory sync with ERP, and payment gateway routing.",
    color: "#96BF48",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#5E8E3E" />
        <path d="M25 12c-.5-1.5-2-2-3-2-1 0-2 .5-2.5 1.5L14 14l-2 15 14 3 6-4-7-16z" fill="#96BF48" />
        <path d="M22 10c0 1.5-.5 3-1.5 4l3.5 1c.5-.5 1-1.5 1-2.5 0-1-.5-2-1.5-2.5h-1.5z" fill="#FFFFFF" />
      </svg>
    )
  },
  "Figma": {
    name: "Figma Design Systems",
    role: "UI/UX & Prototyping",
    desc: "Design tokens, atomic components, user journey mapping, and interactive prototypes.",
    color: "#F24E1E",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#1E1E1E" />
        <circle cx="26" cy="20" r="4.5" fill="#1ABCFE" />
        <path d="M14 11h6v9h-6a4.5 4.5 0 0 1 0-9z" fill="#F24E1E" />
        <path d="M14 20h6v9h-6a4.5 4.5 0 0 1 0-9z" fill="#0ACF83" />
        <path d="M20 11h6a4.5 4.5 0 0 1 0 9h-6v-9z" fill="#FF7262" />
      </svg>
    )
  },
  "Mobile": {
    name: "Flutter & React Native",
    role: "Cross-Platform Mobile",
    desc: "Single codebase iOS/Android, native performance, offline-first sync with ERP.",
    color: "#02569B",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#02569B" />
        <path d="M12 20l8-8h8l-8 8 8 8h-8l-8-8z" fill="#FFFFFF" />
      </svg>
    )
  },

  // --- AI, Automation & Security ---
  "OpenAI": {
    name: "OpenAI & Generative AI",
    role: "Cognitive Intelligence",
    desc: "Enterprise Copilots, automated OCR invoice extraction, and smart RPA routing.",
    color: "#10A37F",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#10A37F" />
        <circle cx="20" cy="20" r="7" stroke="#FFFFFF" strokeWidth="2.5" fill="none" />
        <circle cx="20" cy="20" r="2" fill="#FFFFFF" />
      </svg>
    )
  },
  "Security": {
    name: "Zero-Trust Cybersecurity",
    role: "Defense & Compliance",
    desc: "Role-based access control (RBAC), end-to-end encryption, and SOC2 audits.",
    color: "#E50914",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#111111" />
        <path d="M20 10l9 4v7c0 6-4 10-9 12-5-2-9-6-9-12v-7l9-4z" stroke="#E50914" strokeWidth="2.5" fill="none" />
        <path d="M17 21l2 2 4-4" stroke="#E50914" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  "SLA": {
    name: "24/7 Managed Operations",
    role: "SLA Support & Telemetry",
    desc: "Proactive uptime monitoring, automated failover, and L1/L2/L3 response desk.",
    color: "#10B981",
    svg: (
      <svg className="w-8 h-8" viewBox="0 0 40 40" fill="none">
        <rect width="40" height="40" rx="10" fill="#052E16" />
        <circle cx="20" cy="20" r="9" stroke="#10B981" strokeWidth="2.5" fill="none" />
        <path d="M20 15v5l3 3" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" />
      </svg>
    )
  }
};

// Fallback resolver to map any text string to the most relevant tech entry
const resolveTech = (rawName, categoryHint = "") => {
  const clean = rawName.toLowerCase();
  
  if (clean.includes("oracle")) return TECH_CATALOG["Oracle"];
  if (clean.includes("odoo")) return TECH_CATALOG["Odoo"];
  if (clean.includes("dynamic") || clean.includes("microsoft 365") || clean.includes("d365")) return TECH_CATALOG["Dynamics"];
  if (clean.includes("sap")) return TECH_CATALOG["SAP"];
  if (clean.includes("zatca") || clean.includes("fatoora") || clean.includes("tax")) return TECH_CATALOG["ZATCA"];
  if (clean.includes("vision")) return TECH_CATALOG["Vision 2030"];
  if (clean.includes("aws") || clean.includes("amazon")) return TECH_CATALOG["AWS"];
  if (clean.includes("azure")) return TECH_CATALOG["Azure"];
  if (clean.includes("gcp") || clean.includes("google")) return TECH_CATALOG["GCP"];
  if (clean.includes("docker") || clean.includes("container")) return TECH_CATALOG["Docker"];
  if (clean.includes("k8s") || clean.includes("kubernetes")) return TECH_CATALOG["Kubernetes"];
  if (clean.includes("postgres") || clean.includes("sql") || clean.includes("database")) return TECH_CATALOG["PostgreSQL"];
  if (clean.includes("redis") || clean.includes("cache")) return TECH_CATALOG["Redis"];
  if (clean.includes("kafka") || clean.includes("stream") || clean.includes("queue")) return TECH_CATALOG["Kafka"];
  if (clean.includes("power bi") || clean.includes("bi") || clean.includes("analytics")) return TECH_CATALOG["Power BI"];
  if (clean.includes("python") || clean.includes("etl")) return TECH_CATALOG["Python"];
  if (clean.includes("react") || clean.includes("vue") || clean.includes("frontend")) return TECH_CATALOG["React"];
  if (clean.includes("node") || clean.includes("express") || clean.includes("nest")) return TECH_CATALOG["Node"];
  if (clean.includes("fastapi") || clean.includes("api") || clean.includes("rest")) return TECH_CATALOG["FastAPI"];
  if (clean.includes("graphql") || clean.includes("query")) return TECH_CATALOG["GraphQL"];
  if (clean.includes("word") || clean.includes("cms")) return TECH_CATALOG["WordPress"];
  if (clean.includes("shop") || clean.includes("commerce") || clean.includes("store")) return TECH_CATALOG["Shopify"];
  if (clean.includes("figma") || clean.includes("ui") || clean.includes("ux")) return TECH_CATALOG["Figma"];
  if (clean.includes("mobile") || clean.includes("app") || clean.includes("flutter") || clean.includes("ios") || clean.includes("android")) return TECH_CATALOG["Mobile"];
  if (clean.includes("ai") || clean.includes("openai") || clean.includes("gpt") || clean.includes("machine")) return TECH_CATALOG["OpenAI"];
  if (clean.includes("security") || clean.includes("cyber") || clean.includes("zero") || clean.includes("iso")) return TECH_CATALOG["Security"];
  if (clean.includes("support") || clean.includes("sla") || clean.includes("maintain") || clean.includes("monitor")) return TECH_CATALOG["SLA"];

  // Default fallback with generated card
  return {
    name: rawName,
    role: categoryHint || "Enterprise Technology",
    desc: `Enterprise-grade integration and configuration certified for ${rawName}.`,
    color: "#E50914",
    svg: (
      <div className="w-8 h-8 rounded-xl bg-neutral-900 border border-neutral-700 flex items-center justify-center text-[#E50914] font-bold text-xs">
        <Cpu className="w-4 h-4" />
      </div>
    )
  };
};

export const ServiceTechStack = ({ service }) => {
  if (!service) return null;

  // Curate primary 4 to 6 technology cards for this service
  const rawList = service.techStack || [
    "Oracle Cloud", "Odoo Enterprise", "Microsoft Dynamics 365", 
    "PostgreSQL", "ZATCA Phase 2", "Python Enterprise"
  ];

  // Resolve objects
  const resolvedTechs = rawList.map(item => resolveTech(item, service.category));

  // Supporting ecosystem items
  const ecosystemBadges = [
    { label: "🇸🇦 ZATCA Phase 2 Certified", note: "Saudi Electronic Invoicing" },
    { label: "🇸🇦 Saudi Vision 2030 Mandate", note: "Local Data Residency" },
    { label: "🔒 Zero-Trust Security", note: "SOC 2 & ISO 27001 Stacks" },
    { label: "⚡ 99.9% Uptime SLA", note: "High-Availability Clusters" },
    { label: "🔄 Zero Data-Loss Pipelines", note: "Transactional Rollback Protection" }
  ];

  return (
    <section className="py-20 sm:py-24 bg-[#0A0A0A] text-white border-b border-neutral-900 relative overflow-hidden">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-xs font-black uppercase tracking-wider text-[#E50914]">
            <Cpu className="w-3.5 h-3.5 text-[#E50914] animate-pulse" />
            <span>Certified Technology Stack</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Technologies &amp; Architecture for {service.title}
          </h2>
          
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed max-w-2xl mx-auto">
            We architect and deploy production-grade, highly scalable software frameworks tailored to Saudi enterprise standards, ZATCA clearance, and international benchmarks.
          </p>
        </div>

        {/* Primary Technology Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resolvedTechs.map((tech, idx) => (
            <div 
              key={idx}
              className="group p-6 rounded-2xl bg-neutral-900/90 border border-neutral-800 hover:border-[#E50914]/60 hover:bg-neutral-900 transition-all duration-300 shadow-xl flex flex-col justify-between relative overflow-hidden"
            >
              {/* Top Accent Gradient Bar on Hover */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-[#E50914] to-[#9F0712] opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div>
                <div className="flex items-center justify-between gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform p-1">
                    {tech.svg}
                  </div>
                  <span className="text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-md bg-white/5 border border-white/10 text-neutral-300 group-hover:text-red-400 group-hover:border-red-500/30 transition-colors">
                    {tech.role}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white group-hover:text-[#E50914] transition-colors mb-1.5">
                  {tech.name}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {tech.desc}
                </p>
              </div>

              {/* Card Footer Indicator */}
              <div className="pt-4 mt-4 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-400">
                <span className="flex items-center gap-1.5 font-semibold text-emerald-400">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Enterprise Verified
                </span>
                <span className="font-mono text-neutral-500">Tier-1 Deployment</span>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Ecosystem Trust Badges */}
        <div className="mt-12 pt-8 border-t border-neutral-800/80 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-neutral-300">
          {ecosystemBadges.map((badge, bIdx) => (
            <div 
              key={bIdx}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-colors shadow-xs"
            >
              <span className="font-bold text-white">{badge.label}</span>
              <span className="text-neutral-500">·</span>
              <span className="text-neutral-400 text-[11px]">{badge.note}</span>
            </div>
          ))}
        </div>

        {/* Action Link Banner */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-400">
            Need customized architecture or cloud integration for your enterprise?{" "}
            <Link 
              to="/book-free-consultation" 
              className="font-bold text-[#E50914] hover:underline inline-flex items-center gap-1 ml-1"
            >
              <span>Schedule Architecture Review with our Lead Engineers</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
