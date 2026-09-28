import React, { useState } from 'react';
import { 
  ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Layers, 
  Compass, FileCheck, Code2, Database, TestTube, Users, Rocket, HeartHandshake 
} from 'lucide-react';

const STEPS = [
  {
    step: "01",
    phase: "Phase 1: Inception & Architecture",
    title: "Discovery & Alignment",
    icon: Compass,
    desc: "Stakeholder interviews, legacy IT architecture assessment, and formulation of the definitive Business Requirements Document (BRD).",
    deliverables: ["Stakeholder Matrix", "As-Is Process Map", "Signed-off BRD"],
    gate: "BRD Executive Sign-off",
    riskMitigation: "Eliminates scope ambiguity before technical work commences."
  },
  {
    step: "02",
    phase: "Phase 1: Inception & Architecture",
    title: "Business Gap Analysis",
    icon: FileCheck,
    desc: "Detailed departmental workflow mapping against Oracle, Odoo, or Dynamics standard modules with ZATCA Phase-2 compliance scoping.",
    deliverables: ["Fit-Gap Register", "Localization Checklist", "Regulatory Matrix"],
    gate: "Architecture Scope Freeze",
    riskMitigation: "Identifies custom vs. out-of-the-box delta to prevent budget overruns."
  },
  {
    step: "03",
    phase: "Phase 1: Inception & Architecture",
    title: "Solution Blueprint",
    icon: Layers,
    desc: "Master data dictionary, ERP schema design, integration middleware topology, security roles, and sandbox staging environment.",
    deliverables: ["Technical Architecture Doc (TAD)", "Data Dictionary", "Security Role Matrix"],
    gate: "Security & Cloud Review",
    riskMitigation: "Guarantees database integrity and compliance with NCA data regulations."
  },
  {
    step: "04",
    phase: "Phase 2: Engineering & Verification",
    title: "Agile Development",
    icon: Code2,
    desc: "Sprint-based configuration of core financial and supply chain modules, custom business logic, and API microservices.",
    deliverables: ["Functional Sprint Releases", "Custom REST/SOAP APIs", "ZATCA SDK Connectors"],
    gate: "Sprint Demo Acceptance",
    riskMitigation: "Continuous demo cadence avoids surprises at the end of development."
  },
  {
    step: "05",
    phase: "Phase 2: Engineering & Verification",
    title: "Multi-Pass Data Migration",
    icon: Database,
    desc: "Extract, Transform, and Load (ETL) pipeline execution. Cleansing legacy data with iterative staging runs in test sandboxes.",
    deliverables: ["ETL Migration Scripts", "Reconciliation Reports", "Delta Sync Blueprint"],
    gate: "Zero-Data-Loss Audit",
    riskMitigation: "Eliminates orphan records and corrupt balances before production cutover."
  },
  {
    step: "06",
    phase: "Phase 2: Engineering & Verification",
    title: "System Integration & UAT",
    icon: TestTube,
    desc: "End-to-end integration testing (SIT), performance load tests, and rigorous User Acceptance Testing (UAT) executed by key business users.",
    deliverables: ["UAT Test Script Suite", "Bug Triage Matrix", "ZATCA Clearance Certificates"],
    gate: "Formal UAT Sign-off",
    riskMitigation: "Verifies every mission-critical workflow with actual end-user accounts."
  },
  {
    step: "07",
    phase: "Phase 3: Transition & Managed Care",
    title: "Role-Based Training",
    icon: Users,
    desc: "Department-specific training workshops, bilingual operational manuals (Arabic/English), and train-the-trainer coaching.",
    deliverables: ["Role Playbooks", "LMS Video Library", "Certified Super-Users"],
    gate: "User Competency Readiness",
    riskMitigation: "Overcomes internal change resistance and secures rapid day-1 adoption."
  },
  {
    step: "08",
    phase: "Phase 3: Transition & Managed Care",
    title: "Cutover & Go-Live",
    icon: Rocket,
    desc: "Precise hour-by-hour weekend cutover sequence, freeze of legacy systems, delta data load, and live operational switch.",
    deliverables: ["Cutover Runbook", "Fallback Rollback Protocol", "Live System Handover"],
    gate: "Executive Go-Live Authorization",
    riskMitigation: "Guarantees zero operational downtime during business operating hours."
  },
  {
    step: "09",
    phase: "Phase 3: Transition & Managed Care",
    title: "24/7 SLA Hypercare",
    icon: HeartHandshake,
    desc: "Dedicated war-room on-site and remote engineers, SLA-backed ticket resolution, and scheduled post-launch optimization.",
    deliverables: ["24/7 War Room Desk", "Monthly Optimization Review", "Statutory Updates"],
    gate: "Ongoing Value Realization",
    riskMitigation: "Ensures stability, prompt resolution of initial queries, and long-term ROI."
  }
];

export const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);
  const current = STEPS[activeStep];
  const CurrentIcon = current.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#050505] text-white relative overflow-hidden border-b border-neutral-900">
      {/* Background Subtle Tech Mesh Texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span className="w-2 h-2 rounded-full bg-[#E50914] animate-pulse"></span>
            <span>Enterprise Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            A Structured 9-Step Delivery Method
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            Our disciplined delivery framework removes guesswork, controls scope creep, mitigates organizational risk, and guarantees transparent milestones from discovery to 24/7 hypercare.
          </p>
        </div>

        {/* Interactive Step Navigator Nodes (Desktop & Tablet) */}
        <div className="hidden md:block mb-12">
          <div className="relative flex items-center justify-between">
            {/* Connecting Track Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-neutral-800 -translate-y-1/2 z-0"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-[#E50914] to-red-500 -translate-y-1/2 z-0 transition-all duration-500"
              style={{ width: `${(activeStep / (STEPS.length - 1)) * 100}%` }}
            ></div>

            {/* 9 Interactive Steps */}
            {STEPS.map((item, idx) => {
              const isPassed = idx <= activeStep;
              const isActive = idx === activeStep;

              return (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`relative z-10 flex flex-col items-center group cursor-pointer transition-all duration-300 ${
                    isActive ? 'scale-110' : 'hover:scale-105'
                  }`}
                  aria-label={`Select Step ${item.step}: ${item.title}`}
                >
                  <div className={`w-11 h-11 rounded-full flex items-center justify-center font-black text-xs transition-all duration-300 border-2 ${
                    isActive 
                      ? 'bg-[#E50914] text-white border-white shadow-[0_0_20px_rgba(229,9,20,0.8)]' 
                      : isPassed
                      ? 'bg-red-950 text-red-300 border-red-600'
                      : 'bg-neutral-900 text-neutral-500 border-neutral-700 hover:border-neutral-500'
                  }`}>
                    {item.step}
                  </div>
                  <span className={`text-[11px] font-bold mt-2 whitespace-nowrap transition-colors max-w-[85px] text-center truncate ${
                    isActive ? 'text-white' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`}>
                    {item.title.split(' ')[0]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Step Deep-Dive Showcase Card */}
        <div className="bg-neutral-900/90 rounded-3xl p-6 sm:p-10 border border-neutral-800 shadow-2xl relative overflow-hidden backdrop-blur-xl mb-14">
          <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E50914] via-red-500 to-[#9F0712]"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left Column: Step Details */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-black bg-[#E50914] text-white">
                  Step {current.step}
                </span>
                <span className="text-xs font-mono font-bold text-neutral-400">
                  {current.phase}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-[#E50914]">
                  <CurrentIcon className="w-6 h-6" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {current.title}
                </h3>
              </div>

              <p className="text-base text-neutral-300 leading-relaxed">
                {current.desc}
              </p>

              {/* Deliverables Pills */}
              <div className="space-y-2">
                <div className="text-xs font-bold uppercase tracking-wider text-neutral-400">
                  Key Milestone Deliverables:
                </div>
                <div className="flex flex-wrap gap-2">
                  {current.deliverables.map((del, dIdx) => (
                    <span 
                      key={dIdx} 
                      className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white/5 border border-white/10 text-xs font-semibold text-neutral-200"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{del}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next Buttons */}
              <div className="pt-2 flex items-center gap-3">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="px-4 py-2 rounded-xl border border-neutral-700 text-xs font-bold text-neutral-300 hover:text-white hover:border-neutral-500 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer"
                >
                  Previous Step
                </button>
                <button
                  disabled={activeStep === STEPS.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(STEPS.length - 1, prev + 1))}
                  className="px-5 py-2 rounded-xl bg-gradient-to-r from-[#E50914] to-[#9F0712] text-xs font-black text-white hover:opacity-90 disabled:opacity-30 disabled:pointer-events-none transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Next Step</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

            </div>

            {/* Right Column: Governance, Gate & Risk Mitigation */}
            <div className="lg:col-span-5 space-y-4 bg-black/40 border border-white/10 rounded-2xl p-6">
              <div className="text-xs font-black uppercase tracking-wider text-[#E50914] flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                <span>Enterprise Governance & Quality Gate</span>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-neutral-400">Exit / Approval Gate:</div>
                <div className="text-sm font-bold text-white bg-white/5 p-3 rounded-xl border border-white/10 flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>{current.gate}</span>
                </div>
              </div>

              <div className="space-y-1">
                <div className="text-xs text-neutral-400">Risk Mitigation Factor:</div>
                <p className="text-xs text-neutral-300 leading-relaxed bg-white/5 p-3 rounded-xl border border-white/10">
                  {current.riskMitigation}
                </p>
              </div>

              <div className="pt-2 text-[11px] text-neutral-500 font-mono">
                100% Audit-Compliant • ISO 9001 / ZATCA Aligned Delivery
              </div>
            </div>

          </div>
        </div>

        {/* 9 Steps Overview Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {STEPS.map((item, idx) => {
            const ItemIcon = item.icon;
            const isCurrent = idx === activeStep;

            return (
              <div 
                key={idx}
                onClick={() => setActiveStep(idx)}
                className={`rounded-2xl p-6 border transition-all duration-300 cursor-pointer text-left relative overflow-hidden group ${
                  isCurrent 
                    ? 'bg-neutral-900 border-red-500 shadow-xl shadow-red-600/10' 
                    : 'bg-neutral-900/60 border-neutral-800/80 hover:border-neutral-700 hover:bg-neutral-900'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`inline-flex items-center justify-center px-2.5 py-0.5 rounded-full text-xs font-black ${
                    isCurrent ? 'bg-[#E50914] text-white' : 'bg-neutral-800 text-neutral-400 group-hover:text-white'
                  }`}>
                    Step {item.step}
                  </span>
                  <ItemIcon className={`w-4 h-4 transition-colors ${
                    isCurrent ? 'text-[#E50914]' : 'text-neutral-500 group-hover:text-neutral-300'
                  }`} />
                </div>

                <h4 className="text-base font-bold text-white group-hover:text-[#E50914] transition-colors mb-1.5">
                  {item.title}
                </h4>

                <p className="text-xs text-neutral-400 leading-relaxed line-clamp-2">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
