import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: "Which ERP platform should our company choose: Oracle, Odoo, or Dynamics 365?",
    a: "Platform selection depends on your organizational scale, transaction volume, industry complexity, and internal IT capabilities. For large conglomerates and multi-entity groups requiring strict financial controls, Oracle Fusion Cloud is best. For fast-growing SMEs seeking agile, modular deployment with lower TCO, Odoo is phenomenal. For enterprises deeply invested in Microsoft 365 and Azure ecosystem, Dynamics 365 offers unmatched integration. Impleway provides vendor-neutral discovery workshops to evaluate your exact operational fit."
  },
  {
    q: "Does Impleway support Saudi ZATCA Phase 2 electronic invoicing compliance?",
    a: "Yes. Impleway delivers certified ZATCA Phase-2 (FATOORA) integration for Oracle Cloud, Odoo, Dynamics 365, and custom ERP environments. Our module handles automated cryptographic stamping, ECDSA digital signatures, SHA-256 previous invoice hashing, and real-time XML API clearance with the ZATCA portal."
  },
  {
    q: "How long does a typical enterprise ERP implementation take?",
    a: "A standard implementation ranges from 6 to 12 weeks for focused Odoo deployments, and 4 to 9 months for complex Oracle or Dynamics 365 enterprise rollouts. Our structured 9-step methodology ensures milestones are hit on schedule with zero surprise scope creep."
  },
  {
    q: "How do you prevent data loss during legacy database migration?",
    a: "We utilize multi-pass ETL (Extract, Transform, Load) pipelines, automated schema validation checks, and pre-go-live dry runs in staging sandbox environments. All historical financial balances undergo double-entry ledger reconciliation before production cutover."
  },
  {
    q: "What support SLA is provided following system go-live?",
    a: "Impleway provides tiered 24/7 SLA-backed Application Management Services (AMS). This includes dedicated emergency response channels, routine system performance optimization, user troubleshooting, and continuous regulatory tax updates."
  }
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14 space-y-3">
          <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
            Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
            Clear Answers to Critical ERP Questions
          </h2>
          <p className="text-sm sm:text-base text-[#5F6368]">
            Everything leadership teams need to know before initiating their enterprise digital transformation.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div 
                key={idx}
                className="bg-white rounded-2xl border border-[#e7e7e7] shadow-sm overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                  className="w-full py-5 px-6 text-left flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-[#111111] hover:text-[#E50914] transition-colors cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={`w-5 h-5 flex-shrink-0 text-[#E50914] transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 text-sm sm:text-base text-[#5F6368] leading-relaxed border-t border-neutral-100 pt-4 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
