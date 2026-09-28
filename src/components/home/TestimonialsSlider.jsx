import React, { useState } from 'react';
import { 
  Star, Quote, ChevronLeft, ChevronRight, RotateCcw, 
  ShieldCheck, CheckCircle2, Building2, MapPin, Sparkles 
} from 'lucide-react';

const TESTIMONIALS = [
  {
    name: "Eng. Tariq Al-Mansoor",
    role: "Chief Operating Officer",
    company: "Al-Mansoor Industrial Group",
    location: "🇸🇦 Riyadh, Kingdom of Saudi Arabia",
    avatar: "TM",
    avatarBg: "from-red-600 to-amber-700",
    quote: "Impleway executed our Oracle ERP Cloud and ZATCA Phase-2 clearance integration across 14 manufacturing facilities in Riyadh and Dammam with zero downtime. Their functional architects understood both complex shop-floor mechanics and Saudi statutory mandates deeply.",
    metrics: [
      { label: "ZATCA Clearance", val: "100% Phase-2" },
      { label: "Dispatch Velocity", val: "+38%" },
      { label: "Data Integrity", val: "99.98%" }
    ],
    platform: "Oracle Fusion Cloud ERP",
    projectScope: "Multi-plant MRP, Supply Chain, Finance & ZATCA Integration"
  },
  {
    name: "Kamran Farooq",
    role: "Chief Technology Officer",
    company: "Crescent FMCG & Retail Networks",
    location: "🇵🇰 Lahore, Pakistan",
    avatar: "KF",
    avatarBg: "from-emerald-600 to-teal-800",
    quote: "Impleway re-architected our retail POS ecosystem and synchronized 280+ outlets nationwide with Microsoft Dynamics 365. Month-end financial reconciliation time plummeted from 8 business days down to 4 hours. They are world-class engineers.",
    metrics: [
      { label: "Month-End Close", val: "8 Days → 4 Hrs" },
      { label: "POS Synced Outlets", val: "280+ Stores" },
      { label: "Inventory Accuracy", val: "99.4%" }
    ],
    platform: "Microsoft Dynamics 365 Finance & Ops",
    projectScope: "Omnichannel POS, Warehousing & Real-time Financial Ledger"
  },
  {
    name: "Dr. Reem Al-Ghamdi",
    role: "VP of Digital Transformation",
    company: "Saudi Logistics & Cold-Chain Co.",
    location: "🇸🇦 Jeddah, Kingdom of Saudi Arabia",
    avatar: "RG",
    avatarBg: "from-purple-600 to-indigo-800",
    quote: "Migrating our nationwide multi-warehouse distribution from an aging legacy AS400 system to Odoo Enterprise was carried out with extraordinary precision. Impleway's multi-pass sandbox data validation ensured not a single consignment record was lost.",
    metrics: [
      { label: "Data Loss", val: "0% (Zero)" },
      { label: "WMS Throughput", val: "+45%" },
      { label: "Cold Storage SFDA", val: "100% Compliant" }
    ],
    platform: "Odoo 17 Enterprise Edition",
    projectScope: "3PL Warehouse Automation, Cold-Chain Telematics & Billing"
  },
  {
    name: "Zainab Mir",
    role: "Head of Corporate Systems",
    company: "Apex Healthcare & Pharma Holdings",
    location: "🇵🇰 Karachi, Pakistan",
    avatar: "ZM",
    avatarBg: "from-rose-600 to-pink-800",
    quote: "Automating First-Expired-First-Out (FEFO) pharmaceutical batch traceability across 12 clinical centers and 4 regional depots in under 5 months seemed impossible until Impleway took over. Transparent milestone delivery and exceptional post-go-live SLA care.",
    metrics: [
      { label: "Expired Stock Loss", val: "0% Elimination" },
      { label: "Batch Trace Speed", val: "<45 Seconds" },
      { label: "Implementation Time", val: "5 Months" }
    ],
    platform: "Odoo Enterprise Healthcare ERP",
    projectScope: "FEFO Batch Tracking, Clinical Procurement & Insurance APIs"
  },
  {
    name: "Faisal Al-Harbi",
    role: "Finance Director",
    company: "PetroServices Contracting & EPC",
    location: "🇸🇦 Al-Khobar, Eastern Province, KSA",
    avatar: "FH",
    avatarBg: "from-blue-600 to-cyan-800",
    quote: "Our subcontractor milestone progress billing and complex job-costing under Saudi Etimad and ZATCA standards were transformed completely. Impleway eliminated our spreadsheet bottlenecks and gave our board executive real-time project profitability dashboards.",
    metrics: [
      { label: "Billing Cycle", val: "50% Faster" },
      { label: "Etimad Compliance", val: "100% Automated" },
      { label: "Cost Overrun Cut", val: "22% Saved" }
    ],
    platform: "Oracle Cloud Financials & Projects",
    projectScope: "Mega Project Job Costing, Subcontractor Retentions & Invoicing"
  },
  {
    name: "Bilal Tariq",
    role: "Managing Director",
    company: "National Textiles & Export Mills",
    location: "🇵🇰 Faisalabad, Pakistan",
    avatar: "BT",
    avatarBg: "from-amber-600 to-orange-800",
    quote: "Deploying a unified ERP that handles spinning production yield, chemical dye formulation, export L/C documentation, and 2,500+ workforce payroll was a monumental task. Impleway delivered on schedule with hands-on role training for all our plant operators.",
    metrics: [
      { label: "Production Yield Gain", val: "+18%" },
      { label: "Payroll Processing", val: "100% Automated" },
      { label: "Export L/C Clearance", val: "2x Faster" }
    ],
    platform: "Microsoft Dynamics 365 SCM",
    projectScope: "Yarn & Fabric MRP, Global Export Logistics & Workforce HR"
  }
];

export const TestimonialsSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [flipDirection, setFlipDirection] = useState('next');
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setFlipDirection('prev');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
      setIsFlipped(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 40);
    }, 260);
  };

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setFlipDirection('next');
    setTimeout(() => {
      setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
      setIsFlipped(false);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 40);
    }, 260);
  };

  const current = TESTIMONIALS[currentIndex];

  return (
    <section className="py-14 sm:py-20 bg-[#F6F6F6] border-b border-[#e7e7e7] relative overflow-hidden">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-100 text-xs font-black uppercase tracking-wider text-[#E50914]">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>Client Validation & Regional Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Trusted by Enterprise Leaders in KSA & Pakistan
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            Real feedback from COOs, CTOs, and Finance Directors across Riyadh, Jeddah, Al-Khobar, Lahore, Karachi, and Faisalabad.
          </p>
        </div>

        {/* Interactive Flippable Testimonial Stage with Left/Right Buttons */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Left Navigation Button */}
          <button
            onClick={handlePrev}
            aria-label="Previous Testimonial"
            className="absolute -left-3 sm:-left-6 lg:-left-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-neutral-800 hover:text-white hover:bg-[#E50914] border border-neutral-300 shadow-xl hover:shadow-red-600/30 flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Right Navigation Button */}
          <button
            onClick={handleNext}
            aria-label="Next Testimonial"
            className="absolute -right-3 sm:-right-6 lg:-right-12 top-1/2 -translate-y-1/2 z-30 w-11 h-11 sm:w-13 sm:h-13 rounded-full bg-white text-neutral-800 hover:text-white hover:bg-[#E50914] border border-neutral-300 shadow-xl hover:shadow-red-600/30 flex items-center justify-center transition-all duration-300 active:scale-95 cursor-pointer"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* 3D Flip Card Container */}
          <div 
            className="w-full [perspective:1400px]"
          >
            <div 
              className={`relative w-full h-[430px] sm:h-[350px] transition-all duration-500 ease-out transform-style-3d ${
                isTransitioning 
                  ? flipDirection === 'next'
                    ? '[transform:rotateY(-90deg)_scale(0.92)] opacity-20' 
                    : '[transform:rotateY(90deg)_scale(0.92)] opacity-20'
                  : isFlipped 
                  ? '[transform:rotateY(180deg)]' 
                  : '[transform:rotateY(0deg)_scale(1)] opacity-100'
              }`}
            >

              {/* ===== FRONT SIDE OF CARD: Executive Quote ===== */}
              <div 
                className="absolute inset-0 w-full h-full bg-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-[#e7e7e7] shadow-xl flex flex-col justify-between backface-hidden overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#E50914] via-red-500 to-[#9F0712]"></div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Top Bar: Stars, Region & Flip Button */}
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-1.5 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-amber-400" />
                      ))}
                      <span className="text-xs font-black text-neutral-800 ml-1.5">5.0 Verified</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 text-neutral-700">
                        {current.location}
                      </span>
                      
                      {/* Flip Card Action Button */}
                      <button
                        onClick={() => setIsFlipped(true)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-[#E50914] bg-red-50 hover:bg-[#E50914] hover:text-white border border-red-200 hover:border-transparent transition-all cursor-pointer shadow-sm"
                        title="Flip to view verified delivery metrics"
                      >
                        <RotateCcw className="w-3.5 h-3.5" />
                        <span>View Metrics</span>
                      </button>
                    </div>
                  </div>

                  {/* Testimonial Quote */}
                  <div className="relative">
                    <Quote className="w-10 h-10 text-red-100 absolute -top-4 -left-3 -z-0" />
                    <p className="relative z-10 text-base sm:text-xl text-neutral-800 leading-relaxed font-medium italic">
                      "{current.quote}"
                    </p>
                  </div>
                </div>

                {/* Author Executive Bio */}
                <div className="pt-4 mt-4 border-t border-neutral-100 flex items-center justify-between">
                  <div className="flex items-center gap-3.5">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${current.avatarBg} text-white flex items-center justify-center font-black text-base shadow-md flex-shrink-0`}>
                      {current.avatar}
                    </div>
                    <div>
                      <div className="font-black text-[#111111] text-base leading-tight">
                        {current.name}
                      </div>
                      <div className="text-xs font-semibold text-[#5F6368] mt-0.5">
                        {current.role} • <span className="text-[#E50914] font-bold">{current.company}</span>
                      </div>
                    </div>
                  </div>

                  <div className="hidden sm:flex flex-col text-right">
                    <span className="text-[10px] uppercase font-bold text-neutral-400">Deployed Stack:</span>
                    <span className="text-xs font-bold text-neutral-700">{current.platform}</span>
                  </div>
                </div>
              </div>

              {/* ===== BACK SIDE OF CARD: Verified Implementation Metrics ===== */}
              <div 
                className="absolute inset-0 w-full h-full bg-[#050505] text-white rounded-3xl p-6 sm:p-8 lg:p-10 border border-neutral-800 shadow-xl flex flex-col justify-between [transform:rotateY(180deg)] backface-hidden overflow-hidden"
              >
                {/* Top Accent Gradient Bar */}
                <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-[#E50914] to-[#9F0712]"></div>

                <div className="space-y-4 sm:space-y-5">
                  {/* Top Bar: Verification Badge & Flip Back Button */}
                  <div className="flex items-center justify-between">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Verified Client Audit & ROI</span>
                    </div>

                    <button
                      onClick={() => setIsFlipped(false)}
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-extrabold text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer"
                      title="Flip back to quote"
                    >
                      <RotateCcw className="w-3.5 h-3.5" />
                      <span>Flip to Quote</span>
                    </button>
                  </div>

                  {/* Project Details */}
                  <div className="space-y-1.5">
                    <div className="text-[11px] font-mono text-neutral-400 uppercase tracking-wider">Enterprise Engagement:</div>
                    <h3 className="text-xl sm:text-2xl font-black text-white">
                      {current.company} ({current.location.split(' ')[1] || 'KSA/PK'})
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-300">
                      <strong>Scope:</strong> {current.projectScope}
                    </p>
                  </div>

                  {/* 3 Measurable KPI Metrics */}
                  <div className="grid grid-cols-3 gap-2.5 pt-1">
                    {current.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="bg-white/5 border border-white/10 rounded-2xl p-3 sm:p-4 text-center">
                        <div className="text-base sm:text-xl font-black text-[#E50914]">
                          {m.val}
                        </div>
                        <div className="text-[9.5px] sm:text-[11px] font-bold text-neutral-400 mt-1 uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Platform & Stakeholder Signature */}
                <div className="pt-4 border-t border-neutral-800 flex items-center justify-between text-xs text-neutral-400">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span className="text-[11px] sm:text-xs">Production System Live & SLA Supported</span>
                  </div>
                  <div className="font-mono text-neutral-300 text-[11px] sm:text-xs hidden sm:block">
                    Sign-off: {current.name}
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

        {/* Carousel Dots & Counter */}
        <div className="flex flex-col items-center justify-center gap-2 mt-6 sm:mt-8">
          <div className="flex items-center gap-2">
            {TESTIMONIALS.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setIsFlipped(false);
                  setCurrentIndex(idx);
                }}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  currentIndex === idx ? 'w-8 bg-[#E50914]' : 'w-2.5 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
          </div>
          <span className="text-xs font-mono font-bold text-neutral-500">
            {currentIndex + 1} of {TESTIMONIALS.length} Enterprise Leaders
          </span>
        </div>

      </div>
    </section>
  );
};
