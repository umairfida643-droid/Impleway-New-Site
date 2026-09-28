import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

const STEPS = [
  { step: "01", title: "Discovery", desc: "Stakeholder alignment, current architecture review, and business requirements document (BRD)." },
  { step: "02", title: "Business Analysis", desc: "Detailed departmental workflow mapping, gap analysis, and ZATCA compliance readiness." },
  { step: "03", title: "Solution Design", desc: "Data schema definition, system topology, integration blueprints, and security model." },
  { step: "04", title: "Development", desc: "Core configuration, custom module coding, API connectors, and bespoke reporting." },
  { step: "05", title: "Data Migration", desc: "Master data extraction, cleansing, transformation, and multi-pass sandbox verification." },
  { step: "06", title: "Testing & UAT", desc: "Rigorous system integration testing (SIT), user acceptance testing, and stress audits." },
  { step: "07", title: "Role Training", desc: "Hands-on, department-specific training manuals, video walkthroughs, and super-user coaching." },
  { step: "08", title: "Go-Live", desc: "Controlled cutover strategy, production deployment, and executive operational sign-off." },
  { step: "09", title: "Managed SLA", desc: "24/7 hypercare support, continuous system optimization, and regulatory updates." }
];

export const ProcessTimeline = () => {
  return (
    <section className="py-20 sm:py-24 bg-[#050505] text-white relative overflow-hidden">
      {/* Background Accent Mesh */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
            Methodology
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            A Structured 9-Step Delivery Method
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Our disciplined delivery framework removes guesswork, controls project scope, mitigates organizational risk, and guarantees transparent milestones from day one to go-live.
          </p>
        </div>

        {/* 9 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {STEPS.map((item, idx) => (
            <div 
              key={idx}
              className="bg-neutral-900/80 rounded-2xl p-7 border border-neutral-800 shadow-xl hover:border-red-500/50 hover:bg-neutral-900 transition-all duration-300 relative group overflow-hidden"
            >
              {/* Top Step Number Pill */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-black bg-gradient-to-r from-[#E50914] to-[#9F0712] text-white shadow-md shadow-red-600/30">
                  Step {item.step}
                </span>
                <span className="text-xs font-mono text-neutral-500">Phase {Math.floor(idx / 3) + 1}</span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white group-hover:text-[#E50914] transition-colors mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
