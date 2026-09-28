import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { StatsSection } from '../components/home/StatsSection';
import { ProcessTimeline } from '../components/home/ProcessTimeline';
import { 
  ShieldCheck, Target, Eye, Award, CheckCircle2, ArrowRight, 
  MapPin, Globe, Users, HeartHandshake, Sparkles, Building2
} from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const AboutPage = () => {
  return (
    <>
      <SEO 
        title="About Us | Enterprise ERP & IT Transformation Partner"
        description="Learn about Impleway's mission, values, 9-step delivery framework, and dedicated enterprise operations across Saudi Arabia and international business hubs."
      />
      
      {/* Page Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <span>About Impleway</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            Practical ERP and IT Transformation Partner
          </h1>
          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            We help companies modernize operations, eliminate data silos, achieve ZATCA compliance, and build scalable digital foundations through disciplined execution.
          </p>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "About Us" }]} />

      <StatsSection />

      {/* Mission, Vision, Promise */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
              Organizational Purpose
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Built for Companies That Need Clarity, Not Complexity
            </h2>
            <p className="text-base text-[#5F6368] leading-relaxed">
              Impleway focuses on business outcomes first. We combine senior ERP consulting with hands-on technical architecture to ensure systems actually get adopted.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Mission */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 text-[#E50914] flex items-center justify-center shadow-sm">
                <Target className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#111111]">Our Mission</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                To simplify enterprise technology adoption by delivering transparent, zero-bloat ERP solutions, reliable data integrations, and continuous operational support that produce measurable commercial ROI.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 text-[#E50914] flex items-center justify-center shadow-sm">
                <Eye className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#111111]">Our Vision</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                To be the most trusted, dependable digital transformation partner across the Kingdom of Saudi Arabia and the GCC, known for flawless delivery, regulatory compliance, and enduring client partnerships.
              </p>
            </div>

            {/* Promise */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 hover:shadow-xl transition-all duration-300">
              <div className="w-12 h-12 rounded-2xl bg-white border border-neutral-200 text-[#E50914] flex items-center justify-center shadow-sm">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-[#111111]">Our Promise</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                No surprises, no vendor lock-in, and no hidden scope creep. We commit to strict milestone accountability, transparent pricing, and 100% data integrity throughout every engagement.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* Our Story & Differentiators */}
      <section className="py-20 sm:py-24 bg-[#F6F6F6] border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            <div className="space-y-6">
              <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                Our Background
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight leading-tight">
                From Operational Pain Points to Measurable Business Improvement
              </h2>
              <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
                Too many ERP implementations fail because software is chosen before the business operations and regulatory environment are truly understood. Teams get overwhelmed by rigid, generic templates and surprise consulting bills.
              </p>
              <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
                Impleway was founded to fix this paradigm. By uniting certified functional consultants, veteran software engineers, and local compliance specialists in Saudi Arabia, we deliver systems that match the exact tempo of your physical operations.
              </p>
              
              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm font-bold text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                  <span>Vendor-Neutral Advisory Across Oracle, Odoo & Dynamics 365</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                  <span>Certified In-Kingdom ZATCA Phase-2 Clearance Integration</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-bold text-neutral-800">
                  <CheckCircle2 className="w-5 h-5 text-[#E50914]" />
                  <span>Zero Data-Loss Guarantee with Multi-Pass Sandbox Staging</span>
                </div>
              </div>
            </div>

            {/* Core Values 2x2 Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { num: "01", title: "Clarity", desc: "Scope, timelines, and budgets are documented with unambiguous milestone deliverables." },
                { num: "02", title: "Accountability", desc: "We take full ownership of system architecture, integration APIs, and go-live readiness." },
                { num: "03", title: "Adoption", desc: "Systems succeed only when users love them. We invest heavily in role-based training." },
                { num: "04", title: "Partnership", desc: "We support your journey long after launch through 24/7 SLA-backed managed operations." }
              ].map((val, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e7e7e7] shadow-sm space-y-2">
                  <div className="text-xs font-black text-[#E50914]">{val.num}</div>
                  <h4 className="text-lg font-black text-[#111111]">{val.title}</h4>
                  <p className="text-xs text-[#5F6368] leading-relaxed">{val.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 9-Step Process Timeline */}
      <ProcessTimeline />

      {/* Regional Operations (KSA & Global) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
              Global Delivery Footprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              Where We Operate & Serve Our Clients
            </h2>
            <p className="text-base text-[#5F6368]">
              Strategic hubs delivering round-the-clock technical architecture and localized on-the-ground support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* KSA Hub */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
                <span>🇸🇦 Saudi Arabia Branch</span>
              </div>
              <h3 className="text-2xl font-black text-[#111111]">Kingdom of Saudi Arabia</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Dedicated consulting and ZATCA compliance operations supporting businesses across <strong>Riyadh, Jeddah, Dammam, and Eastern Province</strong>.
              </p>
              <div className="pt-4 border-t border-neutral-200 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                  <MapPin className="w-4 h-4 text-[#E50914]" />
                  <span>Riyadh & Eastern Province, KSA</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                  <span>Phone:</span>
                  <a href="tel:+966598145042" className="text-[#E50914] hover:underline font-bold">+966 59 814 5042</a>
                </div>
              </div>
            </div>

            {/* PK Hub */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4 relative overflow-hidden">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-200 text-neutral-800 text-xs font-bold uppercase tracking-wider">
                <span>🇵🇰 Pakistan Technical Centre</span>
              </div>
              <h3 className="text-2xl font-black text-[#111111]">Technical Center of Excellence</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Senior engineering facility housing certified Oracle, Odoo, and Microsoft Dynamics 365 software developers, DevOps, and 24/7 SLA support desks.
              </p>
              <div className="pt-4 border-t border-neutral-200 space-y-2 text-sm">
                <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                  <MapPin className="w-4 h-4 text-[#E50914]" />
                  <span>Lahore & Islamabad, Pakistan</span>
                </div>
                <div className="flex items-center gap-2 text-neutral-800 font-semibold">
                  <span>Phone:</span>
                  <a href="tel:+923392244790" className="text-[#E50914] hover:underline font-bold">+92 339 2244790</a>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
};
