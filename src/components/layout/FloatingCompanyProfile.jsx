import React, { useState } from 'react';
import { FileText, X, CheckCircle2, Download, ArrowRight, ShieldCheck, Globe, Building } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const FloatingCompanyProfile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed Sticky Trigger Button (Bottom Left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 left-6 z-40 btn-shine inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-2xl shadow-red-600/40 hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        aria-label="View Impleway Enterprise Company Profile"
      >
        <FileText className="w-4 h-4 text-white animate-pulse" />
        <span>Company Profile</span>
      </button>

      {/* Interactive Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-neutral-200 overflow-hidden animate-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="bg-[#050505] text-white p-6 sm:p-8 relative">
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                aria-label="Close Profile"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Enterprise Credentials & Capabilities</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                Impleway Corporate Profile
              </h2>
              <p className="text-neutral-400 text-sm mt-1 max-w-md">
                Enterprise ERP consulting, system integration, and digital transformation partner for Saudi Arabia and international enterprises.
              </p>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[65vh] overflow-y-auto">
              
              {/* Core Pillars */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {siteConfig.stats.map((stat, idx) => (
                  <div key={idx} className="bg-neutral-50 border border-neutral-200 rounded-xl p-3 text-center">
                    <div className="text-2xl font-black text-[#E50914]">{stat.value}</div>
                    <div className="text-xs font-semibold text-neutral-700 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>

              {/* Company Summary */}
              <div className="space-y-3 text-sm text-neutral-600 leading-relaxed">
                <p>
                  <strong>Impleway</strong> specializes in executing complex enterprise resource planning (ERP) deployments across <strong>Oracle Fusion Cloud</strong>, <strong>Odoo ERP</strong>, and <strong>Microsoft Dynamics 365</strong>.
                </p>
                <p>
                  Our certified technical team in <strong>Saudi Arabia (Riyadh & Eastern Province)</strong> and <strong>Pakistan</strong> ensures continuous regulatory compliance, including certified ZATCA Phase-2 electronic invoicing, multi-branch POS synchronization, and automated data migration pipelines.
                </p>
              </div>

              {/* Key Capabilities */}
              <div className="bg-[#F6F6F6] rounded-2xl p-4 border border-neutral-200 space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-800 mb-2">Core Competencies:</div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-medium text-neutral-700">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>ZATCA Phase 2 E-Invoicing Clearance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Zero Data-Loss Database Migration</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Manufacturing MRP & OEE Tracking</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Omnichannel POS & Multi-Store WMS</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>24/7 SLA-Backed Support Operations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
                    <span>Custom Microservices & RESTful APIs</span>
                  </div>
                </div>
              </div>

              {/* Direct Contacts */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs bg-neutral-900 text-white rounded-xl p-4">
                <div>
                  <span className="text-[#E50914] font-bold">🇸🇦 IMPLEWAY KSA:</span>
                  <div className="text-sm font-semibold mt-0.5">{siteConfig.contact.ksa.phone}</div>
                </div>
                <div>
                  <span className="text-neutral-400 font-bold">🇵🇰 IMPLEWAY PK:</span>
                  <div className="text-sm font-semibold mt-0.5">{siteConfig.contact.pk.phone}</div>
                </div>
              </div>

            </div>

            {/* Modal Footer Actions */}
            <div className="bg-neutral-50 border-t border-neutral-200 px-6 sm:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
              <span className="text-xs text-neutral-500">Need a comprehensive RFP proposal?</span>
              <div className="flex items-center gap-2 w-full sm:w-auto">
                <a
                  href={`mailto:${siteConfig.contact.email}?subject=Impleway Enterprise Profile & RFP Inquiry`}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full font-bold text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-md hover:shadow-lg transition-all"
                >
                  <span>Request Full RFP Deck</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      )}
    </>
  );
};
