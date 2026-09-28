import React, { useState } from 'react';
import { 
  Star, Quote, ChevronLeft, ChevronRight, 
  ShieldCheck, CheckCircle2, TrendingUp, Sparkles 
} from 'lucide-react';

const TESTIMONIALS = [
  {
    id: 1,
    name: "Eng. Tariq Al-Mansoor",
    role: "Chief Operating Officer",
    company: "Al-Mansoor Industrial Group",
    country: "ksa",
    city: "Riyadh, KSA",
    flag: "🇸🇦",
    avatar: "TM",
    avatarBg: "from-red-600 to-amber-700",
    quote: "Impleway executed our Oracle ERP Cloud and ZATCA Phase-2 clearance integration across 14 manufacturing facilities with zero downtime. Their functional architects understood shop-floor mechanics and Saudi statutory mandates deeply.",
    metrics: [
      { label: "ZATCA Clearance", val: "100% Phase-2" },
      { label: "Dispatch Velocity", val: "+38%" }
    ],
    platform: "Oracle Fusion Cloud ERP"
  },
  {
    id: 2,
    name: "Kamran Farooq",
    role: "Chief Technology Officer",
    company: "Crescent FMCG & Retail Networks",
    country: "pk",
    city: "Lahore, PK",
    flag: "🇵🇰",
    avatar: "KF",
    avatarBg: "from-emerald-600 to-teal-800",
    quote: "Impleway re-architected our retail POS ecosystem and synchronized 280+ outlets nationwide with Microsoft Dynamics 365. Month-end financial reconciliation time plummeted from 8 business days down to 4 hours.",
    metrics: [
      { label: "Month-End Close", val: "8 Days → 4 Hrs" },
      { label: "POS Synced", val: "280+ Stores" }
    ],
    platform: "Microsoft Dynamics 365"
  },
  {
    id: 3,
    name: "Dr. Reem Al-Ghamdi",
    role: "VP of Digital Transformation",
    company: "Saudi Logistics & Cold-Chain Co.",
    country: "ksa",
    city: "Jeddah, KSA",
    flag: "🇸🇦",
    avatar: "RG",
    avatarBg: "from-purple-600 to-indigo-800",
    quote: "Migrating our nationwide multi-warehouse distribution from an aging legacy AS400 system to Odoo Enterprise was carried out with extraordinary precision. Multi-pass sandbox data validation ensured not a single consignment was lost.",
    metrics: [
      { label: "Data Loss", val: "0% (Zero)" },
      { label: "WMS Throughput", val: "+45%" }
    ],
    platform: "Odoo 17 Enterprise"
  },
  {
    id: 4,
    name: "Zainab Mir",
    role: "Head of Corporate Systems",
    company: "Apex Healthcare & Pharma Holdings",
    country: "pk",
    city: "Karachi, PK",
    flag: "🇵🇰",
    avatar: "ZM",
    avatarBg: "from-rose-600 to-pink-800",
    quote: "Automating First-Expired-First-Out (FEFO) pharmaceutical batch traceability across 12 clinical centers and 4 regional depots in under 5 months seemed impossible until Impleway took over. Transparent milestone delivery and SLA care.",
    metrics: [
      { label: "Expired Stock Loss", val: "0% Elimination" },
      { label: "Implementation", val: "5 Months" }
    ],
    platform: "Odoo Enterprise Healthcare"
  },
  {
    id: 5,
    name: "Faisal Al-Harbi",
    role: "Finance Director",
    company: "PetroServices Contracting & EPC",
    country: "ksa",
    city: "Al-Khobar, KSA",
    flag: "🇸🇦",
    avatar: "FH",
    avatarBg: "from-blue-600 to-cyan-800",
    quote: "Our subcontractor milestone progress billing and complex job-costing under Saudi Etimad and ZATCA standards were transformed completely. Impleway eliminated spreadsheet bottlenecks and gave our board real-time visibility.",
    metrics: [
      { label: "Billing Cycle", val: "50% Faster" },
      { label: "Cost Overrun Cut", val: "22% Saved" }
    ],
    platform: "Oracle Cloud Financials"
  },
  {
    id: 6,
    name: "Bilal Tariq",
    role: "Managing Director",
    company: "National Textiles & Export Mills",
    country: "pk",
    city: "Faisalabad, PK",
    flag: "🇵🇰",
    avatar: "BT",
    avatarBg: "from-amber-600 to-orange-800",
    quote: "Deploying a unified ERP that handles spinning production yield, chemical dye formulation, export L/C documentation, and 2,500+ workforce payroll was a monumental task. Impleway delivered on schedule with hands-on role training.",
    metrics: [
      { label: "Production Yield", val: "+18%" },
      { label: "Export L/C Clearance", val: "2x Faster" }
    ],
    platform: "Dynamics 365 SCM"
  }
];

export const TestimonialsSlider = () => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [pageIndex, setPageIndex] = useState(0);

  // Filter items
  const filteredList = TESTIMONIALS.filter(item => {
    if (selectedFilter === 'all') return true;
    return item.country === selectedFilter;
  });

  const itemsPerPage = 3;
  const totalPages = Math.ceil(filteredList.length / itemsPerPage);

  // Handle page navigation
  const handlePrev = () => {
    setPageIndex(prev => (prev === 0 ? totalPages - 1 : prev - 1));
  };

  const handleNext = () => {
    setPageIndex(prev => (prev === totalPages - 1 ? 0 : prev + 1));
  };

  const visibleItems = filteredList.slice(
    pageIndex * itemsPerPage,
    pageIndex * itemsPerPage + itemsPerPage
  );

  return (
    <section className="py-16 sm:py-24 bg-[#FAFAFA] border-b border-[#e7e7e7] relative overflow-hidden">
      {/* Subtle Ambient Background Gradients */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with Actions */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-black uppercase tracking-wider text-[#E50914]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
              <span>Client Validation & Regional Endorsements</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              Trusted by Enterprise Leaders in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">KSA & Pakistan</span>
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              Real feedback from COOs, CTOs, and Finance Directors across Riyadh, Jeddah, Al-Khobar, Lahore, Karachi, and Faisalabad.
            </p>
          </div>

          {/* Filter Pills & Pagination Controls */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Filter Tabs */}
            <div className="flex items-center p-1 bg-white rounded-xl border border-[#e5e5e5] shadow-xs">
              <button
                type="button"
                onClick={() => { setSelectedFilter('all'); setPageIndex(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                  selectedFilter === 'all'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                All Leaders ({TESTIMONIALS.length})
              </button>
              <button
                type="button"
                onClick={() => { setSelectedFilter('ksa'); setPageIndex(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === 'ksa'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span>🇸🇦</span>
                <span>Saudi Arabia</span>
              </button>
              <button
                type="button"
                onClick={() => { setSelectedFilter('pk'); setPageIndex(0); }}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  selectedFilter === 'pk'
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'text-neutral-600 hover:text-black hover:bg-neutral-50'
                }`}
              >
                <span>🇵🇰</span>
                <span>Pakistan</span>
              </button>
            </div>

            {/* Slider Controls (Active when more than 1 page) */}
            {totalPages > 1 && (
              <div className="flex items-center gap-1.5">
                <button
                  type="button"
                  onClick={handlePrev}
                  className="w-9 h-9 rounded-xl bg-white border border-[#e5e5e5] hover:border-neutral-400 text-neutral-700 hover:text-black flex items-center justify-center transition-all shadow-xs hover:shadow-sm cursor-pointer"
                  aria-label="Previous Page"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-9 h-9 rounded-xl bg-white border border-[#e5e5e5] hover:border-neutral-400 text-neutral-700 hover:text-black flex items-center justify-center transition-all shadow-xs hover:shadow-sm cursor-pointer"
                  aria-label="Next Page"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* 3-Column Responsive Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 items-stretch">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl p-6 sm:p-7 border border-[#e5e5e5] shadow-xs hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between relative group overflow-hidden"
            >
              {/* Subtle Red Top Highlight Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E50914] via-red-500 to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

              <div>
                {/* Card Top Header: Stars & Location Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-neutral-50 border border-neutral-200 text-[11px] font-semibold text-neutral-700">
                    <span>{item.flag}</span>
                    <span>{item.city}</span>
                  </span>
                </div>

                {/* Quote Text */}
                <div className="relative mb-6">
                  <Quote className="w-8 h-8 text-neutral-200/80 absolute -top-2 -left-1 -z-0" />
                  <p className="relative z-10 text-[14.5px] sm:text-[15px] text-[#222222] leading-relaxed font-normal">
                    "{item.quote}"
                  </p>
                </div>

                {/* Measurable ROI Metric Badges */}
                <div className="grid grid-cols-2 gap-2 mb-6 pt-1">
                  {item.metrics.map((m, mIdx) => (
                    <div 
                      key={mIdx}
                      className="px-3 py-2 rounded-xl bg-[#F8F9FA] border border-neutral-100 flex flex-col"
                    >
                      <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-wider">
                        {m.label}
                      </span>
                      <span className="text-[13px] font-black text-[#E50914] mt-0.5">
                        {m.val}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Author & Platform Signature Footer */}
              <div className="pt-4 border-t border-[#f0f0f0]">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.avatarBg} text-white flex items-center justify-center font-black text-xs shadow-xs flex-shrink-0`}>
                    {item.avatar}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="font-bold text-[#111111] text-sm truncate">
                      {item.name}
                    </div>
                    <div className="text-[11.5px] text-[#5F6368] truncate">
                      {item.role} • <span className="font-semibold text-neutral-800">{item.company}</span>
                    </div>
                  </div>
                </div>

                {/* Stack Pill */}
                <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px]">
                  <span className="text-neutral-500 font-medium">Deployed Stack:</span>
                  <span className="font-bold text-neutral-800 bg-neutral-100 px-2 py-0.5 rounded-md">
                    {item.platform}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Bottom Pagination Dots (when multiple pages) */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 mt-8">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setPageIndex(idx)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  pageIndex === idx ? 'w-6 bg-[#E50914]' : 'w-2 bg-neutral-300 hover:bg-neutral-400'
                }`}
                aria-label={`Go to page ${idx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Enterprise Trust Footer Banner */}
        <div className="mt-14 p-5 sm:p-6 rounded-2xl bg-white border border-[#e5e5e5] shadow-xs flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center flex-shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-[#111111]">
                Certified Enterprise Delivery Standards
              </div>
              <div className="text-xs text-[#5F6368]">
                ISO 27001 Security Controls, ZATCA Phase-2 Clearance, & 24/7 SLA Support
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs font-bold text-neutral-700">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              100% On-Time Go-Live
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Zero Data Loss Migration
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              Production SLA Guaranteed
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
