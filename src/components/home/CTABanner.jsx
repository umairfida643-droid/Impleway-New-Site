import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, ShieldCheck, Clock, CheckCircle2 } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';

export const CTABanner = () => {
  return (
    <section className="relative overflow-hidden bg-radial-hero text-white py-16 sm:py-20">
      {/* Background Accent Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900/90 rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/15 shadow-2xl backdrop-blur-xl flex flex-col lg:flex-row items-center justify-between gap-10">
          
          {/* Left Text */}
          <div className="max-w-2xl space-y-4 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 text-xs font-black uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Start Your Digital Transformation Today</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
              Ready to Build a Smarter, More Efficient Enterprise?
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              Schedule a comprehensive 45-minute discovery consultation with Impleway's certified ERP advisory team in Saudi Arabia and Pakistan.
            </p>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2 text-xs font-semibold text-neutral-300">
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Zero Obligation Review</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>ZATCA Phase 2 Audit</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Direct Technical Team</span>
              </div>
            </div>
          </div>

          {/* Right Action Buttons */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-4 w-full sm:w-auto flex-shrink-0">
            <Link
              to="/book-free-consultation"
              className="btn-shine inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:scale-105 active:scale-95 transition-all text-center"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href={siteConfig.contact.ksa.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all text-center"
            >
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span>WhatsApp KSA Office</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};
