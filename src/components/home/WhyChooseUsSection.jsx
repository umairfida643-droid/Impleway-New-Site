import React from 'react';
import { Link } from 'react-router-dom';
import { 
  ShieldCheck, Zap, Users, TrendingDown, Clock, CheckCircle2, 
  XCircle, AlertCircle, ArrowRight, Award, Lock, Sparkles 
} from 'lucide-react';

const COMPARISON_DATA = [
  {
    feature: "Implementation Timeline",
    impleway: "60–90 Days (Agile Sprints)",
    legacy: "9–18 Months (Slow Waterfall)",
    agencies: "Unpredictable / Delayed",
    implewayAdvantage: true
  },
  {
    feature: "ZATCA Phase-2 Compliance",
    impleway: "100% Native & Guaranteed (18ms clearance)",
    legacy: "Costly Custom Extension / Extra Scope",
    agencies: "Fragile Third-Party Workarounds",
    implewayAdvantage: true
  },
  {
    feature: "Architect Seniority",
    impleway: "Principal Consultants Only (10+ Yrs Exp.)",
    legacy: "Sold by Partners, Staffed by Juniors",
    agencies: "Freelancers / Non-Certified Devs",
    implewayAdvantage: true
  },
  {
    feature: "Commercial Transparency",
    impleway: "Fixed Milestone Deliverables (Zero Hidden Fees)",
    legacy: "Open-Ended T&M with Scope Creep",
    agencies: "Low Initial Quote, High Change Orders",
    implewayAdvantage: true
  },
  {
    feature: "Post-Go-Live Support",
    impleway: "60-Day Dedicated SLA Hypercare Included",
    legacy: "Expensive Ongoing Retainer Required",
    agencies: "Minimal / Project Abandonment",
    implewayAdvantage: true
  },
  {
    feature: "Saudi Market Localization",
    impleway: "Bilingual AR/EN, Saudi Tax & Labor Laws",
    legacy: "Generic Global Template Adapted",
    agencies: "Manual Adjustments & Translation Errors",
    implewayAdvantage: true
  }
];

export const WhyChooseUsSection = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#F8F9FA] border-b border-[#e7e7e7] relative overflow-hidden">
      {/* Background Soft Accents */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-red-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-900/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact gradient standard */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-black uppercase tracking-wider text-[#E50914]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>The Impleway Enterprise Advantage</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
            Why Enterprise Leaders Choose Impleway Over <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Legacy Consultancies</span>
          </h2>
          <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
            We replace bloated billable hours, generic offshore teams, and delayed go-lives with senior solution architects, fixed sprint deliverables, and 100% regulatory compliance.
          </p>
        </div>

        {/* 4 Strategic Value Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Pillar 1: ZATCA Clearance */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#E50914] flex items-center justify-center mb-5 group-hover:bg-[#E50914] group-hover:text-white transition-colors">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div className="text-xs font-black uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-0.5 rounded-full w-max mb-2">
              100% First-Pass
            </div>
            <h3 className="text-lg font-black text-[#111111] tracking-tight mb-2">
              Guaranteed ZATCA Phase-2
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
              Cryptographic ECDSA SHA-256 clearance, XML invoice validation, and direct integration into ZATCA Fatoora with zero third-party middleman markup.
            </p>
          </div>

          {/* Pillar 2: Principal Architects */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#E50914] flex items-center justify-center mb-5 group-hover:bg-[#E50914] group-hover:text-white transition-colors">
              <Users className="w-6 h-6" />
            </div>
            <div className="text-xs font-black uppercase tracking-wider text-neutral-700 bg-neutral-100 px-2.5 py-0.5 rounded-full w-max mb-2">
              Principal Level Only
            </div>
            <h3 className="text-lg font-black text-[#111111] tracking-tight mb-2">
              Zero Junior Hand-Offs
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
              Every client engagement is directed by senior solution architects with 10+ years in Oracle Fusion, Odoo Enterprise, and Microsoft Dynamics 365.
            </p>
          </div>

          {/* Pillar 3: 40-60% TCO Savings */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#E50914] flex items-center justify-center mb-5 group-hover:bg-[#E50914] group-hover:text-white transition-colors">
              <TrendingDown className="w-6 h-6" />
            </div>
            <div className="text-xs font-black uppercase tracking-wider text-[#E50914] bg-red-50 px-2.5 py-0.5 rounded-full w-max mb-2">
              40%–60% Lower TCO
            </div>
            <h3 className="text-lg font-black text-[#111111] tracking-tight mb-2">
              Predictable Commercials
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
              Transparent, milestone-governed contracts. No runaway billable hours, no unexpected scope creep, and zero vendor licensing markups.
            </p>
          </div>

          {/* Pillar 4: Rapid 60-90 Day Go-Live */}
          <div className="bg-white rounded-3xl p-6 sm:p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden group">
            <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] to-[#9F0712] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            <div className="w-12 h-12 rounded-2xl bg-red-50 border border-red-100 text-[#E50914] flex items-center justify-center mb-5 group-hover:bg-[#E50914] group-hover:text-white transition-colors">
              <Clock className="w-6 h-6" />
            </div>
            <div className="text-xs font-black uppercase tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full w-max mb-2">
              Agile 60–90 Days
            </div>
            <h3 className="text-lg font-black text-[#111111] tracking-tight mb-2">
              Production Go-Live
            </h3>
            <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
              Pre-built Saudi localization modules and automated sandbox ETL tools enable rapid rollouts backed by 60 days of dedicated hypercare.
            </p>
          </div>

        </div>

        {/* Head-to-Head Comparative Table */}
        <div className="bg-white rounded-3xl border border-[#e7e7e7] shadow-lg shadow-black/[0.02] overflow-hidden">
          
          {/* Table Header Bar */}
          <div className="p-6 sm:p-8 bg-gradient-to-r from-[#111111] to-[#1A1F2C] text-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-1">
                Objective Evaluation
              </div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight text-white">
                Enterprise Consultancy Comparative Matrix
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/20 text-xs font-bold text-neutral-200">
              <Sparkles className="w-3.5 h-3.5 text-amber-400" />
              <span>Saudi Market Benchmark 2026</span>
            </div>
          </div>

          {/* Table Content */}
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-neutral-200 text-xs font-black uppercase tracking-wider bg-neutral-50/80 text-neutral-600">
                  <th className="py-4 px-6 w-1/4">Evaluation Criteria</th>
                  <th className="py-4 px-6 w-1/3 bg-red-500/[0.04] text-[#E50914] font-black border-x border-red-500/20">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E50914]"></span>
                      <span>Impleway Enterprise</span>
                    </div>
                  </th>
                  <th className="py-4 px-6 w-1/4 text-neutral-500 font-bold">
                    Legacy Tier-1 Consultancies
                  </th>
                  <th className="py-4 px-6 w-1/4 text-neutral-400 font-bold hidden md:table-cell">
                    Generic Agencies / Freelancers
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-100 text-xs sm:text-sm">
                {COMPARISON_DATA.map((row, idx) => (
                  <tr key={idx} className="hover:bg-neutral-50/50 transition-colors">
                    <td className="py-4 px-6 font-bold text-neutral-800">
                      {row.feature}
                    </td>
                    <td className="py-4 px-6 bg-red-500/[0.03] border-x border-red-500/20 font-bold text-neutral-900">
                      <div className="flex items-center gap-2 text-neutral-900">
                        <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                        <span>{row.impleway}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-600">
                      <div className="flex items-center gap-2">
                        <AlertCircle className="w-4 h-4 text-amber-500 flex-shrink-0" />
                        <span>{row.legacy}</span>
                      </div>
                    </td>
                    <td className="py-4 px-6 text-neutral-500 hidden md:table-cell">
                      <div className="flex items-center gap-2">
                        <XCircle className="w-4 h-4 text-neutral-400 flex-shrink-0" />
                        <span>{row.agencies}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bottom Card Footer Callout */}
          <div className="p-6 bg-neutral-50 border-t border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs sm:text-sm text-neutral-600 text-center sm:text-left">
              Looking for a verifiable feasibility study and platform assessment for your enterprise?
            </div>
            <Link
              to="/book-free-consultation"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full font-bold text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-md shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all flex-shrink-0"
            >
              <span>Book Principal Architect Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};
