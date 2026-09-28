import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Activity 
} from 'lucide-react';
import { OracleIcon, OdooIcon, Dynamics365Icon } from '../ui/PlatformIcons';

const TYPEWRITER_WORDS = [
  "Oracle ERP Cloud",
  "Odoo ERP Solutions",
  "Microsoft Dynamics 365",
  "ZATCA Phase 2 E-Invoicing",
  "Zero-Downtime Migration"
];

const MODULE_DATA = {
  Finance: {
    metric1: "38%",
    label1: "Faster Month-End Close",
    metric2: "100%",
    label2: "ZATCA Phase 2 Cleared",
    bars: [45, 65, 80, 95, 70]
  },
  Inventory: {
    metric1: "99.4%",
    label1: "Stock Accuracy",
    metric2: "28%",
    label2: "Lower Carrying Costs",
    bars: [60, 75, 50, 90, 85]
  },
  Sales: {
    metric1: "42%",
    label1: "Order Velocity Increase",
    metric2: "24/7",
    label2: "Omnichannel Sync",
    bars: [30, 55, 70, 85, 95]
  },
  Ops: {
    metric1: "0%",
    label1: "Unplanned Shop Downtime",
    metric2: "3.2x",
    label2: "Workflow Efficiency",
    bars: [70, 85, 90, 65, 98]
  }
};

export const HeroSection = () => {
  // Typewriter logic
  const [wordIndex, setWordIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [activeModule, setActiveModule] = useState("Finance");

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

  return (
    <section className="relative overflow-hidden bg-radial-hero text-white py-16 sm:py-24 lg:py-28">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-60 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Eyebrow Pill with Pulsing Dot */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] animate-ping"></span>
              <span>ERP & Digital Transformation Partner</span>
            </div>

            {/* H1 Heading with Dynamic Typewriter - Height locked to prevent layout jump */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.08] text-white min-h-[140px] sm:min-h-[165px] lg:min-h-[195px] flex flex-col justify-start">
              <span>Transform Your Business With</span>
              <span className="mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-white via-red-100 to-[#E50914] drop-shadow-[0_0_24px_rgba(229,9,20,0.5)] block min-h-[2.3em] sm:min-h-[1.25em]">
                <span>{displayedText || "\u00A0"}</span>
                <span className="text-[#E50914] animate-pulse font-normal ml-0.5 inline-block">|</span>
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

            {/* Platform Badges with Official Logos */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link 
                to="/oracle-erp-services"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-red-500/50 hover:bg-white/10 transition-all group"
              >
                <OracleIcon className="w-4 h-4 rounded" />
                <span className="text-xs font-bold text-neutral-200 group-hover:text-white">Oracle Fusion Cloud</span>
              </Link>

              <Link 
                to="/odoo-erp-services"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-purple-500/50 hover:bg-white/10 transition-all group"
              >
                <OdooIcon className="w-4 h-4 rounded" />
                <span className="text-xs font-bold text-neutral-200 group-hover:text-white">Odoo ERP</span>
              </Link>

              <Link 
                to="/dynamics-365-services"
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all group"
              >
                <Dynamics365Icon className="w-4 h-4 rounded" />
                <span className="text-xs font-bold text-neutral-200 group-hover:text-white">Microsoft Dynamics 365</span>
              </Link>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                <img src="/logos/zatca-logo.svg" alt="ZATCA Official" className="h-4 w-auto brightness-0 invert opacity-95" />
                <span className="text-xs font-bold">Phase 2 Certified</span>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/40 border border-emerald-500/40 text-emerald-300">
                <img src="/logos/saudi-vision-2030.svg" alt="Saudi Vision 2030" className="h-4 w-auto brightness-0 invert opacity-95" />
                <span className="text-xs font-bold">Vision 2030</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive 3D Red Dashboard Card */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-neutral-900/80 border border-white/15 p-6 sm:p-7 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-red-500/40">
              
              {/* Dashboard Window Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#E50914] animate-pulse"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E50914]/60"></span>
                  <span className="w-3 h-3 rounded-full bg-[#E50914]/30"></span>
                </div>
                <div className="text-xs font-mono font-medium text-neutral-400 flex items-center gap-1.5">
                  <Activity className="w-3.5 h-3.5 text-emerald-400" />
                  <span>LIVE ERP TELEMETRY</span>
                </div>
              </div>

              {/* Dynamic Interactive Metrics */}
              <div className="grid grid-cols-2 gap-4 mb-5">
                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-all">
                  <div className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                    {currentMod.metric1}
                  </div>
                  <div className="text-xs font-semibold text-neutral-400 mt-1">
                    {currentMod.label1}
                  </div>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-2xl p-4 transition-all">
                  <div className="text-3xl sm:text-4xl font-black text-[#E50914] tracking-tight">
                    {currentMod.metric2}
                  </div>
                  <div className="text-xs font-semibold text-neutral-400 mt-1">
                    {currentMod.label2}
                  </div>
                </div>
              </div>

              {/* Dynamic Animated Activity Bars */}
              <div className="bg-white/5 border border-white/10 rounded-2xl p-4 mb-5">
                <div className="flex items-center justify-between text-xs text-neutral-400 mb-3">
                  <span>Resource Utilization Index</span>
                  <span className="text-emerald-400 font-mono">99.8% Optimal</span>
                </div>
                <div className="h-24 flex items-end justify-between gap-3 px-2">
                  {currentMod.bars.map((height, i) => (
                    <div key={i} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end">
                      <div 
                        className="w-full rounded-t-lg bg-gradient-to-t from-[#E50914] to-red-400 transition-all duration-500 ease-out shadow-lg shadow-red-600/30"
                        style={{ height: `${height}%` }}
                      ></div>
                      <span className="text-[10px] text-neutral-500 font-mono">P{i + 1}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive Pipeline Module Selector */}
              <div>
                <div className="text-[11px] uppercase font-bold text-neutral-400 tracking-wider mb-2">
                  Select Business Stream:
                </div>
                <div className="grid grid-cols-4 gap-1.5 bg-black/40 p-1.5 rounded-xl border border-white/10">
                  {Object.keys(MODULE_DATA).map((mod) => (
                    <button
                      key={mod}
                      onClick={() => setActiveModule(mod)}
                      className={`py-1.5 text-xs font-bold rounded-lg transition-all cursor-pointer ${
                        activeModule === mod 
                          ? 'bg-gradient-to-r from-[#E50914] to-[#9F0712] text-white shadow-md' 
                          : 'text-neutral-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {mod}
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
