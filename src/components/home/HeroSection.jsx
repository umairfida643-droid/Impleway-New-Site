import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Activity 
} from 'lucide-react';

const TYPEWRITER_WORDS = [
  "Oracle ERP",
  "Odoo ERP",
  "Dynamics 365",
  "ZATCA Phase 2",
  "Cloud Migration"
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
    <section className="relative overflow-hidden bg-[#050505] text-white py-16 sm:py-24 lg:py-28">
      {/* Faded Ambient Corporate Background Video */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-[0.16] sm:opacity-[0.22] filter grayscale contrast-125 brightness-90 transition-opacity duration-1000 scale-105"
        >
          <source src="/videos/hero-corporate.webm" type="video/webm" />
          <source src="/videos/hero-corporate.mp4" type="video/mp4" />
        </video>
        
        {/* Signature Brand Radial Glow & Gradient Overlay */}
        <div className="absolute inset-0 bg-radial-hero opacity-90"></div>

        {/* Ambient Dark Vignette & Edge Blend */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505]"></div>

        {/* Subtle Tech Grid Texture */}
        <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Copy & Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Official KSA National & Regulatory Authority Logos (ZATCA & Saudi Vision 2030) */}
            <div className="flex items-center gap-5 sm:gap-7 pb-1">
              <img 
                src="/logos/zatca-logo.svg" 
                alt="ZATCA Official" 
                className="h-9 sm:h-11 w-auto brightness-0 invert opacity-95 hover:opacity-100 transition-opacity drop-shadow-md" 
              />
              <div className="h-8 w-px bg-white/20"></div>
              <img 
                src="/logos/saudi-vision-2030.svg" 
                alt="Saudi Vision 2030" 
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
                {/* 1. Oracle Fusion */}
                <Link 
                  to="/oracle-erp-services"
                  className="flex items-center gap-1.5 opacity-85 hover:opacity-100 transition-all hover:scale-105 group"
                  title="Oracle Fusion Cloud ERP"
                >
                  <svg viewBox="0 0 79 16" className="h-4 sm:h-4.5 w-auto fill-white" fill="currentColor">
                    <path d="M7.8 15.5C3.5 15.5 0 12 0 7.8 0 3.5 3.5 0 7.8 0c4.3 0 7.8 3.5 7.8 7.8 0 4.3-3.5 7.7-7.8 7.7zm0-3.3c2.4 0 4.4-2 4.4-4.4 0-2.4-2-4.4-4.4-4.4-2.4 0-4.4 2-4.4 4.4 0 2.4 2 4.4 4.4 4.4zm16.5-4.4c1.8-.5 3.1-2 3.1-4 0-2.3-1.8-3.8-4.4-3.8H17v15.5h3.4V10h1.7l3.6 5.5h4.1l-4.5-6.7c-.3-.4-.7-.8-1-1zm-2.8-1.5H20.4V3.3h1.1c1 0 1.7.5 1.7 1.5 0 1.1-.7 1.5-1.7 1.5zm13.6 9.2h3.6l-5.6-15.5h-3.6L24 15.5h3.6l1-3h5.5l1 3zm-5.7-5.9l1.9-5.4 1.9 5.4h-3.8zm19.3.9c-.8.8-1.8 1.3-3 1.3-2.4 0-4.4-2-4.4-4.4 0-2.4 2-4.4 4.4-4.4 1.2 0 2.3.5 3 1.3l2.4-2.3C49.9.8 48.5 0 46.8 0c-4.3 0-7.8 3.5-7.8 7.8 0 4.3 3.5 7.7 7.8 7.7 1.7 0 3.2-.8 4.2-2.1l-2.3-2.1zM53.4 0h3.4v12.2h6.7v3.3H53.4V0zm14.8 0h11.2v3.3H71.6v2.8h6.5v3.3h-6.5v2.8h7.8v3.3H68.2V0z"/>
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
