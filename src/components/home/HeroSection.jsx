import React, { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Activity, ShieldCheck, CheckCircle2, TrendingUp, Zap, Server
} from 'lucide-react';

const TYPEWRITER_WORDS = [
  "Oracle ERP",
  "Odoo ERP",
  "Dynamics 365",
  "ZATCA Phase 2",
  "Cloud Migration"
];

const generateSplinePath = (points, width = 420, height = 120) => {
  if (!points || points.length === 0) return { path: "", area: "", coords: [] };
  // Add 38px headroom at the top so line and bars never hit or exceed container ceiling
  const coords = points.map((p, i) => {
    const x = (i / (points.length - 1)) * (width - 32) + 16;
    const y = height - 14 - ((p / 100) * 68);
    return { x: Math.round(x * 10) / 10, y: Math.round(y * 10) / 10, val: p };
  });

  let path = `M ${coords[0].x} ${coords[0].y}`;
  for (let i = 0; i < coords.length - 1; i++) {
    const curr = coords[i];
    const next = coords[i + 1];
    const cpX = (curr.x + next.x) / 2;
    path += ` C ${cpX} ${curr.y}, ${cpX} ${next.y}, ${next.x} ${next.y}`;
  }

  const last = coords[coords.length - 1];
  const area = `${path} L ${last.x} ${height} L ${coords[0].x} ${height} Z`;

  return { path, area, coords };
};

const MODULE_DATA = {
  Finance: {
    tabLabel: "Finance & Tax",
    title: "Finance & ZATCA Tax Compliance",
    metric1: "38.6%",
    label1: "Faster Financial Month-End Close",
    badge1: "+14.2% MoM",
    metric2: "100%",
    label2: "ZATCA Phase 2 Fatoora Clearance",
    badge2: "ECDSA SHA-256",
    telemetryTitle: "Real-Time Ledger Velocity",
    telemetryRate: "4,820 tx/sec",
    healthRate: "99.98% Optimal",
    curvePoints: [35, 42, 58, 52, 68, 85, 74, 92, 88, 96, 91, 98],
    liveLog: {
      tag: "ZATCA CLEARANCE API",
      color: "text-emerald-400 bg-emerald-500/15 border-emerald-500/30",
      text: "Invoice #INV-2026-9481 Cleared • QR Stamped (18ms)",
      status: "PASS ✓"
    }
  },
  Inventory: {
    tabLabel: "Inventory & WMS",
    title: "Autonomous Multi-Hub Supply Chain",
    metric1: "99.8%",
    label1: "Multi-Warehouse Stock Accuracy",
    badge1: "Zero Drift",
    metric2: "28.4%",
    label2: "Carrying Cost Reduction",
    badge2: "FEFO Active",
    telemetryTitle: "Autonomous Replenishment Velocity",
    telemetryRate: "14,250 SKUs/min",
    healthRate: "100% Synced",
    curvePoints: [48, 55, 62, 70, 65, 82, 88, 80, 91, 87, 95, 99],
    liveLog: {
      tag: "WMS CLOUD",
      color: "text-purple-400 bg-purple-500/15 border-purple-500/30",
      text: "Jeddah Central Hub: 1,420 Pallets Reconciled via RFID",
      status: "SYNCED ✓"
    }
  },
  Sales: {
    tabLabel: "Omnichannel",
    title: "High-Velocity POS & B2B Portals",
    metric1: "3.4x",
    label1: "Order Processing Velocity",
    badge1: "Sub-Second",
    metric2: "24/7",
    label2: "Cross-Branch High Availability",
    badge2: "99.99% Uptime",
    telemetryTitle: "Live Regional GMV Stream",
    telemetryRate: "SAR 1.84M/hr",
    healthRate: "Zero Latency",
    curvePoints: [28, 45, 52, 68, 75, 82, 79, 90, 86, 94, 91, 97],
    liveLog: {
      tag: "POS GATEWAY",
      color: "text-blue-400 bg-blue-500/15 border-blue-500/30",
      text: "Branch #14 (Riyadh): Mada & Apple Pay Settled",
      status: "SETTLED ✓"
    }
  },
  Ops: {
    tabLabel: "Operations & AI",
    title: "Manufacturing MES & Copilot Workflows",
    metric1: "0.02%",
    label1: "Unplanned Plant & Line Downtime",
    badge1: "IoT Predictive",
    metric2: "4.2x",
    label2: "Autonomous Workflow Efficiency",
    badge2: "Copilot AI Native",
    telemetryTitle: "Industrial Equipment OEE Index",
    telemetryRate: "94.8% Overall OEE",
    healthRate: "Continuous",
    curvePoints: [42, 50, 65, 72, 68, 84, 89, 85, 93, 90, 96, 100],
    liveLog: {
      tag: "COPILOT AI",
      color: "text-red-400 bg-red-500/15 border-red-500/30",
      text: "Automated Supply Chain Anomaly Resolved in 12s",
      status: "RESOLVED ✓"
    }
  }
};

export const HeroSection = () => {
  // Typewriter logic
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeModule, setActiveModule] = useState("Finance");
  const [rateVariation, setRateVariation] = useState(0);
  const [isStreamPaused, setIsStreamPaused] = useState(false);
  const MODULE_KEYS = useMemo(() => Object.keys(MODULE_DATA), []);

  useEffect(() => {
    const rateInterval = setInterval(() => {
      setRateVariation((prev) => (prev + 1) % 10);
    }, 2200);
    return () => clearInterval(rateInterval);
  }, []);

  useEffect(() => {
    if (isStreamPaused) return;
    const streamTimer = setInterval(() => {
      setActiveModule((curr) => {
        const idx = MODULE_KEYS.indexOf(curr);
        return MODULE_KEYS[(idx + 1) % MODULE_KEYS.length];
      });
    }, 6500);
    return () => clearInterval(streamTimer);
  }, [isStreamPaused, MODULE_KEYS]);

  useEffect(() => {
    const currentWord = TYPEWRITER_WORDS[wordIndex];
    const typingSpeed = isDeleting ? 35 : 75;

    const timer = setTimeout(() => {
      if (!isDeleting && displayedText.length < currentWord.length) {
        setDisplayedText(currentWord.slice(0, displayedText.length + 1));
      } else if (!isDeleting && displayedText.length === currentWord.length) {
        setTimeout(() => setIsDeleting(true), 1800);
      } else if (isDeleting && displayedText.length > 0) {
        setDisplayedText(currentWord.slice(0, displayedText.length - 1));
      } else if (isDeleting && displayedText.length === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % TYPEWRITER_WORDS.length);
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, wordIndex]);

  const currentMod = MODULE_DATA[activeModule];
  const spline = useMemo(() => generateSplinePath(currentMod.curvePoints, 420, 120), [currentMod.curvePoints]);

  const getLiveRate = () => {
    if (activeModule === "Finance") {
      const base = 4820;
      const offsets = [0, 14, 28, 12, -8, 22, -15, 36, 18, 5];
      return `${(base + offsets[rateVariation]).toLocaleString()} tx/sec`;
    }
    if (activeModule === "Inventory") {
      const base = 14250;
      const offsets = [0, 40, -25, 80, 110, -50, 65, 30, -10, 95];
      return `${(base + offsets[rateVariation]).toLocaleString()} SKUs/min`;
    }
    if (activeModule === "Sales") {
      const base = 1.84;
      const offsets = [0, 0.02, 0.05, 0.01, -0.02, 0.04, 0.06, 0.03, -0.01, 0.05];
      return `SAR ${(base + offsets[rateVariation]).toFixed(2)}M/hr`;
    }
    return currentMod.telemetryRate;
  };

  return (
    <section className="relative overflow-hidden bg-radial-hero text-white py-16 sm:py-24 lg:py-28">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official KSA National & Regulatory Authority Logos (ZATCA & Saudi Vision 2030) */}
            <div className="flex items-center gap-5 sm:gap-7 pb-1">
              <img 
                src="/logos/zatca-logo.svg" 
                alt="ZATCA Official" 
                width="140"
                height="44"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="h-9 sm:h-11 w-auto brightness-0 invert opacity-95 hover:opacity-100 transition-opacity drop-shadow-md" 
              />
              <div className="h-8 w-px bg-white/20"></div>
              <img 
                src="/logos/saudi-vision-2030.svg" 
                alt="Saudi Vision 2030" 
                width="140"
                height="44"
                loading="eager"
                fetchpriority="high"
                decoding="async"
                className="h-9 sm:h-11 w-auto opacity-95 hover:opacity-100 transition-opacity drop-shadow-md" 
              />
            </div>

            {/* Eyebrow Pill with Pulsing Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping"></span>
              <span>ERP & Digital Transformation Partner</span>
            </div>

            {/* H1 Heading with Dynamic Typewriter - Locked single line to eliminate any vertical shift */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
              <span className="block">Transform Your Business With</span>
              <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[#E50914] drop-shadow-[0_0_24px_rgba(229,9,20,0.5)] h-[1.25em] min-h-[1.25em] overflow-visible">
                <span>{displayedText || "\u00A0"}</span>
                <span className="text-[#E50914] animate-pulse font-normal ml-1 inline-block">|</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg sm:text-xl text-neutral-300 max-w-2xl leading-relaxed">
              Impleway empowers leading enterprises across the Kingdom of Saudi Arabia and international markets to simplify operations, eliminate data silos, achieve certified ZATCA Phase-2 compliance, and scale on Oracle, Odoo, and Microsoft Dynamics 365.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/book-free-consultation"
                className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all"
              >
                <span>Book Free Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-7 py-4 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm"
              >
                Explore Services
              </Link>
            </div>

            {/* Platform Ecosystem Logos Strip matching user reference */}
            <div className="pt-5 sm:pt-6">
              <div className="flex flex-wrap items-center gap-7 sm:gap-9 lg:gap-10 pb-4">
                {/* 1. Official Oracle Logo */}
                <Link 
                  to="/oracle-erp-services"
                  className="flex items-center gap-2 opacity-90 hover:opacity-100 transition-all hover:scale-105 group"
                  title="Oracle Fusion Cloud ERP"
                >
                  <svg 
                    viewBox="0 0 231 30" 
                    className="h-4 sm:h-4.5 w-auto fill-white group-hover:fill-[#FF4D55] transition-colors" 
                    fill="currentColor"
                  >
                    <path d="M99.61,19.52h15.24l-8.05-13L92,30H85.27l18-28.17a4.29,4.29,0,0,1,7-.05L128.32,30h-6.73l-3.17-5.25H103l-3.36-5.23m69.93,5.23V0.28h-5.72V27.16a2.76,2.76,0,0,0,.85,2,2.89,2.89,0,0,0,2.08.87h26l3.39-5.25H169.54M75,20.38A10,10,0,0,0,75,.28H50V30h5.71V5.54H74.65a4.81,4.81,0,0,1,0,9.62H58.54L75.6,30h8.29L72.43,20.38H75M14.88,30H32.15a14.86,14.86,0,0,0,0-29.71H14.88a14.86,14.86,0,1,0,0,29.71m16.88-5.23H15.26a9.62,9.62,0,0,1,0-19.23h16.5a9.62,9.62,0,1,1,0,19.23M140.25,30h17.63l3.34-5.23H140.64a9.62,9.62,0,1,1,0-19.23h16.75l3.38-5.25H140.25a14.86,14.86,0,1,0,0,29.71m69.87-5.23a9.62,9.62,0,0,1-9.26-7h24.42l3.36-5.24H200.86a9.61,9.61,0,0,1,9.26-7h16.76l3.35-5.25h-20.5a14.86,14.86,0,0,0,0,29.71h17.63l3.35-5.23h-20.6" />
                  </svg>
                  <span className="text-xs sm:text-sm font-medium tracking-normal text-neutral-200">Fusion</span>
                </Link>

                {/* 2. Odoo */}
                <Link 
                  to="/odoo-erp-services"
                  className="flex items-center opacity-85 hover:opacity-100 transition-all hover:scale-105 group"
                  title="Odoo ERP Solutions"
                >
                  <img 
                    src="/logos/odoo-official.svg" 
                    alt="odoo" 
                    width="60"
                    height="20"
                    loading="eager"
                    decoding="async"
                    className="h-4 sm:h-5 w-auto brightness-0 invert" 
                  />
                </Link>

                {/* 3. SAP Business One */}
                <Link 
                  to="/services"
                  className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-all hover:scale-105 group"
                  title="SAP Business One ERP"
                >
                  <svg viewBox="0 0 38 20" className="h-4 sm:h-5 w-auto" fill="none">
                    <path d="M0 0H38L27 20H0V0Z" fill="#FFFFFF" />
                    <path d="M6 14.5c-2.2 0-3.6-1.2-3.6-3.2h2c0 .9.6 1.4 1.6 1.4s1.5-.5 1.5-1.2c0-.8-.6-1-1.8-1.3-2-.4-3-1.1-3-2.5 0-1.8 1.4-2.9 3.3-2.9s3.2 1.1 3.2 2.8h-2c0-.8-.5-1.2-1.3-1.2s-1.2.4-1.2 1.1c0 .6.5.9 1.6 1.2 2.1.4 3.3 1 3.3 2.6 0 2-1.4 3.2-3.6 3.2zm6.9-9.2h2.1l3.3 9h-2.1l-.6-2h-3.2l-.6 2h-2l3.1-9zm2 5.5l-1.1-3.4-1.1 3.4h2.2zm5.8-5.5h3.8c2.2 0 3.5 1.2 3.5 3s-1.3 3-3.5 3h-1.7v3h-2.1V5.3zm2.1 4.2h1.6c1 0 1.6-.5 1.6-1.2s-.6-1.2-1.6-1.2H22.8v2.4z" fill="#050505" />
                  </svg>
                  <div className="flex flex-col justify-center leading-none text-left">
                    <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight">Business</span>
                    <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-tight">One</span>
                  </div>
                </Link>

                {/* 4. Dynamics 365 */}
                <Link 
                  to="/dynamics-365-services"
                  className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-all hover:scale-105 group"
                  title="Microsoft Dynamics 365"
                >
                  <svg viewBox="0 0 16 16" className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white" fill="currentColor">
                    <rect x="0" y="0" width="7" height="7" />
                    <rect x="9" y="0" width="7" height="7" />
                    <rect x="0" y="9" width="7" height="7" />
                    <rect x="9" y="9" width="7" height="7" />
                  </svg>
                  <span className="text-xs sm:text-sm font-semibold tracking-tight text-white">Dynamics 365</span>
                </Link>
              </div>

              {/* Thin horizontal line matching reference */}
              <div className="w-full h-px bg-white/20"></div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Cyber-Enterprise Cockpit */}
          <div 
            className="lg:col-span-5 relative mt-6 lg:mt-0"
            onMouseEnter={() => setIsStreamPaused(true)}
            onMouseLeave={() => setIsStreamPaused(false)}
          >
            
            {/* Ambient Cyber Neon Back-Glow */}
            <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600/30 via-red-900/20 to-neutral-900/40 rounded-3xl blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none" />

            {/* Floating Satellite Badge 1 (Top-Right): ZATCA Verification */}
            <div className="hidden sm:flex absolute -top-4 -right-4 z-20 items-center gap-2.5 px-3.5 py-2 rounded-2xl bg-[#0E1520]/95 border border-emerald-500/40 shadow-xl backdrop-blur-xl animate-float-hud hover:scale-105 transition-transform">
              <div className="w-7 h-7 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <div className="text-[11px] font-black text-white flex items-center gap-1.5">
                  <span>ZATCA Phase-2 Verified</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                </div>
                <div className="text-[9.5px] font-mono text-emerald-400/90">
                  Instant Clearance • 18ms
                </div>
              </div>
            </div>

            {/* Floating Satellite Badge 2 (Bottom-Left): Multi-Cloud ERP Fabric */}
            <div className="hidden sm:flex absolute -bottom-4 -left-4 z-20 items-center gap-3 px-3.5 py-2 rounded-2xl bg-[#0E1520]/95 border border-red-500/30 shadow-xl backdrop-blur-xl animate-float-hud-delay hover:scale-105 transition-transform">
              <div className="flex -space-x-1.5">
                <div className="w-6 h-6 rounded-lg overflow-hidden border border-white/20 shadow-xs">
                  <img src="/logos/oracle-app-icon.png" alt="Oracle" className="w-full h-full object-contain" />
                </div>
                <div className="w-6 h-6 rounded-lg overflow-hidden border border-white/20 shadow-xs">
                  <img src="/logos/odoo-app-icon.png" alt="Odoo" className="w-full h-full object-contain" />
                </div>
                <div className="w-6 h-6 rounded-lg overflow-hidden border border-white/20 shadow-xs">
                  <img src="/logos/dynamics-app-icon.png" alt="Dynamics" className="w-full h-full object-contain" />
                </div>
              </div>
              <div>
                <div className="text-[11px] font-black text-white flex items-center gap-1">
                  <span>Multi-Cloud ERP Fabric</span>
                </div>
                <div className="text-[9.5px] font-mono text-neutral-400">
                  99.99% Live Sync • Riyadh
                </div>
              </div>
            </div>

            {/* Main Cockpit Hub Card */}
            <div className="relative rounded-3xl bg-[#0B0F17]/95 border border-white/15 p-5 sm:p-6 shadow-[0_20px_50px_rgba(0,0,0,0.8),0_0_40px_rgba(229,9,20,0.15)] backdrop-blur-2xl transition-all duration-300 hover:border-red-500/50">
              
              {/* Window Bar Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E50914] shadow-[0_0_8px_rgba(229,9,20,0.8)]"></span>
                  <span className="w-3 h-3 rounded-full bg-amber-400/80"></span>
                  <span className="w-3 h-3 rounded-full bg-emerald-400/80"></span>
                  <span className="text-[10.5px] font-mono text-neutral-400 ml-1.5 hidden sm:inline">
                    telemetry.sys/live
                  </span>
                </div>
                <div className="text-[11px] font-mono font-bold text-neutral-300 flex items-center gap-2 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="text-emerald-400 tracking-wider">LIVE TELEMETRY</span>
                  <span className="text-neutral-500">•</span>
                  <span className="text-neutral-400 text-[10px]">KSA NODE</span>
                </div>
              </div>

              {/* Dynamic Interactive Metrics (2 Cards) */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-3.5 transition-all hover:border-white/20">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                    <span className="truncate">{currentMod.tabLabel}</span>
                    <span className="text-[9.5px] font-bold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-1.5 py-0.5 rounded">
                      {currentMod.badge1}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                    {currentMod.metric1}
                  </div>
                  <div className="text-[11px] font-medium text-neutral-400 mt-1 leading-tight line-clamp-1">
                    {currentMod.label1}
                  </div>
                </div>

                <div className="bg-gradient-to-b from-white/[0.07] to-white/[0.02] border border-white/10 rounded-2xl p-3.5 transition-all hover:border-red-500/30">
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-1">
                    <span className="truncate">Compliance</span>
                    <span className="text-[9.5px] font-bold text-red-400 bg-red-500/10 border border-red-500/20 px-1.5 py-0.5 rounded">
                      {currentMod.badge2}
                    </span>
                  </div>
                  <div className="text-2xl sm:text-3xl font-black text-[#E50914] tracking-tight drop-shadow-[0_0_12px_rgba(229,9,20,0.4)]">
                    {currentMod.metric2}
                  </div>
                  <div className="text-[11px] font-medium text-neutral-400 mt-1 leading-tight line-clamp-1">
                    {currentMod.label2}
                  </div>
                </div>
              </div>

              {/* Advanced SVG Spline & Telemetry Equalizer Chart */}
              <div className="bg-gradient-to-b from-black/60 to-black/30 border border-white/10 rounded-2xl p-3.5 mb-4 relative overflow-hidden">
                
                {/* Header row inside chart */}
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-2">
                  <div className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#E50914] animate-pulse" />
                    <span className="font-semibold text-neutral-300 text-[11.5px]">{currentMod.telemetryTitle}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono font-bold text-white bg-white/10 px-2 py-0.5 rounded-md transition-all">
                      {getLiveRate()}
                    </span>
                    <span className="text-emerald-400 font-mono text-[10.5px]">
                      {currentMod.healthRate}
                    </span>
                  </div>
                </div>

                {/* SVG Visualizer Container */}
                <div className="relative h-28 w-full">
                  
                  {/* Subtle Grid Guidelines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-20">
                    <div className="w-full border-b border-white/30 border-dashed"></div>
                    <div className="w-full border-b border-white/30 border-dashed"></div>
                    <div className="w-full border-b border-white/30 border-dashed"></div>
                    <div className="w-full border-b border-white/30"></div>
                  </div>

                  {/* SVG Spline Curve, Integrated Equalizer Bars & Neon Waves */}
                  <svg 
                    viewBox="0 0 420 120" 
                    preserveAspectRatio="none" 
                    className="absolute inset-0 w-full h-full overflow-hidden"
                  >
                    <defs>
                      {/* Gradient for Area Fill */}
                      <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#E50914" stopOpacity="0.4" />
                        <stop offset="60%" stopColor="#E50914" stopOpacity="0.08" />
                        <stop offset="100%" stopColor="#E50914" stopOpacity="0" />
                      </linearGradient>

                      {/* Gradient for Line Stroke */}
                      <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#FF6B72" />
                        <stop offset="50%" stopColor="#E50914" />
                        <stop offset="100%" stopColor="#FFFFFF" />
                      </linearGradient>

                      {/* Equalizer Bar Vertical Gradient */}
                      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#FF4D55" stopOpacity="0.5" />
                        <stop offset="35%" stopColor="#E50914" stopOpacity="0.25" />
                        <stop offset="100%" stopColor="#E50914" stopOpacity="0.02" />
                      </linearGradient>

                      {/* Glow Filter */}
                      <filter id="neonGlow" x="-20%" y="-20%" width="140%" height="140%">
                        <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#E50914" floodOpacity="0.8" />
                      </filter>
                    </defs>

                    {/* Integrated Equalizer Bars - strictly anchored at pt.y + 3 so they NEVER exceed the curve */}
                    <g className="transition-all duration-500 ease-out">
                      {spline.coords.map((pt, idx) => {
                        const barTop = pt.y + 3;
                        const barHeight = Math.max(0, 120 - barTop);
                        return (
                          <rect
                            key={idx}
                            x={pt.x - 3.5}
                            y={barTop}
                            width="7"
                            height={barHeight}
                            rx="3.5"
                            fill="url(#barGradient)"
                            className="animate-bar-breath"
                            style={{ animationDelay: `${idx * 0.12}s` }}
                          />
                        );
                      })}
                    </g>

                    {/* Area Fill */}
                    {spline.area && (
                      <path 
                        d={spline.area} 
                        fill="url(#areaGradient)" 
                        className="transition-all duration-700 ease-out pointer-events-none"
                      />
                    )}

                    {/* Neon Spline Path */}
                    {spline.path && (
                      <path 
                        d={spline.path} 
                        fill="none" 
                        stroke="url(#lineGradient)" 
                        strokeWidth="2.5" 
                        filter="url(#neonGlow)"
                        className="transition-all duration-700 ease-out"
                      />
                    )}

                    {/* Electric Live Current Running Along Spline */}
                    {spline.path && (
                      <path 
                        d={spline.path} 
                        fill="none" 
                        stroke="#FFFFFF" 
                        strokeWidth="1.8" 
                        strokeLinecap="round"
                        className="animate-dash-flow opacity-70"
                      />
                    )}

                    {/* Active Peak Beacon with Concentric Ripple Radar */}
                    {spline.coords.length > 0 && (
                      <g className="transition-all duration-700 ease-out">
                        <circle 
                          cx={spline.coords[spline.coords.length - 1].x} 
                          cy={spline.coords[spline.coords.length - 1].y} 
                          r="10" 
                          fill="#E50914" 
                          className="animate-ping"
                          opacity="0.3"
                        />
                        <circle 
                          cx={spline.coords[spline.coords.length - 1].x} 
                          cy={spline.coords[spline.coords.length - 1].y} 
                          r="5.5" 
                          fill="#E50914" 
                          opacity="0.8"
                        />
                        <circle 
                          cx={spline.coords[spline.coords.length - 1].x} 
                          cy={spline.coords[spline.coords.length - 1].y} 
                          r="3" 
                          fill="#FFFFFF" 
                          stroke="#E50914" 
                          strokeWidth="1.5"
                        />
                      </g>
                    )}
                  </svg>

                  {/* Floating Micro Tooltip at Peak - cleanly positioned with safe top clearance */}
                  <div className="absolute top-1.5 right-3 bg-neutral-950/90 border border-red-500/40 px-2 py-0.5 rounded-full text-[9px] font-mono text-white flex items-center gap-1 shadow-md pointer-events-none backdrop-blur-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
                    <span>Peak Throughput</span>
                  </div>

                </div>

                {/* Timeline axis labels */}
                <div className="flex items-center justify-between text-[9.5px] font-mono text-neutral-500 mt-2 px-1">
                  <span>00:00</span>
                  <span>04:00</span>
                  <span>08:00</span>
                  <span>12:00</span>
                  <span>16:00</span>
                  <span>20:00</span>
                  <span className="text-emerald-400 font-bold">LIVE NOW</span>
                </div>

                {/* Cryptographic Event Log Ticker */}
                <div className="mt-3 pt-2.5 border-t border-white/10 flex items-center justify-between text-[10.5px] font-mono">
                  <div className="flex items-center gap-2 min-w-0">
                    <span className={`px-1.5 py-0.5 rounded text-[9px] font-bold border uppercase flex-shrink-0 ${currentMod.liveLog.color}`}>
                      {currentMod.liveLog.tag}
                    </span>
                    <span className="text-neutral-300 truncate">
                      {currentMod.liveLog.text}
                    </span>
                  </div>
                  <span className="text-emerald-400 font-bold flex-shrink-0 ml-2">
                    {currentMod.liveLog.status}
                  </span>
                </div>

              </div>

              {/* Business Stream Tabs (Selector) */}
              <div>
                <div className="flex items-center justify-between text-[10.5px] uppercase font-bold text-neutral-400 tracking-wider mb-2">
                  <span>Active Architecture Stream:</span>
                  <span className="text-[#E50914] font-semibold text-[10px] lowercase font-sans">click to switch view</span>
                </div>
                <div className="grid grid-cols-4 gap-1.5 bg-black/50 p-1.5 rounded-2xl border border-white/10">
                  {Object.keys(MODULE_DATA).map((mod) => (
                    <button
                      key={mod}
                      onClick={() => setActiveModule(mod)}
                      className={`py-2 px-1 text-center text-xs font-bold rounded-xl transition-all cursor-pointer ${
                        activeModule === mod 
                          ? 'bg-gradient-to-r from-[#E50914] to-[#9F0712] text-white shadow-lg shadow-red-600/30 border border-red-400/40 scale-[1.02]' 
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {MODULE_DATA[mod].tabLabel}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
