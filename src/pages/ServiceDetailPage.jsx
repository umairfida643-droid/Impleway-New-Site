import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { servicesData } from '../data/servicesData';
import { 
  CheckCircle2, ArrowRight, ShieldCheck, ChevronDown, 
  Layers, Sparkles, Building2, HelpCircle 
} from 'lucide-react';
import { ServiceIcon } from '../components/ui/ServiceIcon';

export const ServiceDetailPage = () => {
  const { slug } = useParams();
  
  // Find current service
  const service = servicesData.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  // Related services objects
  const relatedServicesList = service.relatedServices
    .map(relSlug => servicesData.find(s => s.slug === relSlug))
    .filter(Boolean);

  return (
    <>
      <SEO 
        title={`${service.title} | Impleway`}
        description={service.metaDescription}
      />

      {/* 1. Service Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-red-500/20 border border-red-500/30 text-white text-xs font-black uppercase tracking-wider">
            <ServiceIcon slug={service.slug} className="w-4 h-4 text-red-300" />
            <span>{service.category}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight max-w-4xl mx-auto leading-tight">
            {service.title}
          </h1>

          <p className="text-lg sm:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            {service.heroDescription}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/book-free-consultation"
              className="btn-shine inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-xl shadow-red-600/30 hover:shadow-red-600/50 hover:-translate-y-0.5 transition-all"
            >
              <span>Book Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center px-7 py-3.5 rounded-full font-bold text-sm text-white bg-white/10 hover:bg-white/15 border border-white/20 transition-all backdrop-blur-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      <Breadcrumbs items={[{ name: "Services", path: "/services" }, { name: service.title }]} />

      {/* 2. Problem Statement & Key Focus Areas (2-Col) */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Problem Statement */}
            <div className="lg:col-span-6 space-y-4">
              <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                The Challenge
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Problem Statement
              </h2>
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
                {service.problemStatement}
              </p>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Without a structured implementation strategy, businesses struggle with fragmented data, operational delays, and low user adoption. Impleway establishes clear milestone ownership to mitigate implementation risks before go-live.
              </p>
            </div>

            {/* Key Focus Areas */}
            <div className="lg:col-span-6 bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-4">
              <h3 className="text-xl font-black text-[#111111]">
                Key Focus Areas
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {service.keyFocusAreas.map((area, idx) => (
                  <div key={idx} className="bg-white p-3.5 rounded-xl border border-neutral-200 flex items-center gap-2.5 shadow-sm">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                    <span className="text-xs font-bold text-neutral-800">{area}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Technology Stack Badges */}
      {service.techStack && service.techStack.length > 0 && (
        <section className="py-12 bg-neutral-900 text-white border-b border-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="space-y-1 text-center md:text-left">
                <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                  Ecosystem Alignment
                </div>
                <div className="text-lg font-bold">
                  Technologies Evaluated & Integrated
                </div>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-2.5">
                {service.techStack.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="px-4 py-2 rounded-full bg-white/10 border border-white/15 text-xs font-bold text-white hover:border-[#E50914] transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 4. Why It Matters (4-Benefit Grid) */}
      <section className="py-20 sm:py-24 bg-[#F6F6F6] border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
              Business Value
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
              {service.whyItMatters.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.whyItMatters.items.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-2xl p-7 border border-[#e7e7e7] shadow-sm hover:shadow-xl hover:border-red-500/40 transition-all duration-300 relative group overflow-hidden"
              >
                <div className="w-10 h-10 rounded-xl bg-red-50 text-[#E50914] flex items-center justify-center font-black text-sm mb-4">
                  0{idx + 1}
                </div>
                <h3 className="text-lg font-black text-[#111111] mb-2 group-hover:text-[#E50914] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">
                  {item.desc || "Delivering measurable gains in speed, compliance, and user satisfaction across all operational workflows."}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Our Approach vs What You Get */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Approach */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 sm:p-10 border border-[#e7e7e7] space-y-5">
              <h3 className="text-2xl font-black text-[#111111]">Our Approach</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                We combine deep technical rigor with hands-on stakeholder workshops. Every architectural decision is validated against production data before deployment.
              </p>
              <ul className="space-y-3 pt-2">
                {service.approach.map((app, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-[#E50914] flex-shrink-0 mt-0.5" />
                    <span>{app}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="bg-[#F6F6F6] rounded-3xl p-8 sm:p-10 border border-[#e7e7e7] space-y-5">
              <h3 className="text-2xl font-black text-[#111111]">What You Get</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                Transparent tangible artifacts and configured environments that empower your internal team from the very first sprint.
              </p>
              <ul className="space-y-3 pt-2">
                {service.deliverables.map((del, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-neutral-800 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* 6. Process Steps */}
      <section className="py-20 sm:py-24 bg-[#050505] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
              Execution Blueprint
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              A Structured 5-Step Delivery Path
            </h2>
            <p className="text-sm sm:text-base text-neutral-400">
              Clear checkpoints, documentation, and stakeholder review gates keep your project transparent and controlled.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {service.processSteps.map((step, idx) => (
              <div 
                key={idx}
                className="bg-neutral-900 rounded-2xl p-6 border border-neutral-800 space-y-3 relative group hover:border-red-500/40 transition-colors"
              >
                <div className="text-2xl font-black text-[#E50914]">{step.step}</div>
                <h4 className="text-base font-bold text-white group-hover:text-red-400 transition-colors">{step.title}</h4>
                <p className="text-xs text-neutral-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Industry Use Cases */}
      {service.useCases && service.useCases.length > 0 && (
        <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
              <div className="text-xs uppercase font-extrabold tracking-wider text-[#E50914]">
                Practical Applications
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                Industry Use Cases
              </h2>
              <p className="text-sm sm:text-base text-[#5F6368]">
                Real-world operational scenarios where this service produces measurable business impact.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {service.useCases.map((uc, idx) => (
                <div key={idx} className="bg-[#F6F6F6] rounded-2xl p-8 border border-[#e7e7e7] space-y-3 hover:shadow-xl transition-all duration-300">
                  <div className="text-xs font-black uppercase text-[#E50914]">Use Case 0{idx + 1}</div>
                  <h4 className="text-lg font-black text-[#111111]">{uc.title}</h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">{uc.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 8. Service FAQs */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="py-16 sm:py-20 bg-[#F6F6F6] border-b border-[#e7e7e7]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
            <div className="text-center space-y-2">
              <h3 className="text-2xl sm:text-3xl font-black text-[#111111]">
                Frequently Asked Questions
              </h3>
            </div>
            <div className="space-y-4">
              {service.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#e7e7e7] shadow-sm space-y-2">
                  <h4 className="text-base font-bold text-[#111111]">{faq.q}</h4>
                  <p className="text-xs sm:text-sm text-[#5F6368] leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 9. Related Services */}
      {relatedServicesList.length > 0 && (
        <section className="py-16 sm:py-20 bg-white border-b border-[#e7e7e7]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl sm:text-2xl font-black text-[#111111]">
                Related Services You May Need
              </h3>
              <Link to="/services" className="text-xs font-bold text-[#E50914] hover:underline flex items-center gap-1">
                View all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedServicesList.map((rel, idx) => (
                <Link
                  key={idx}
                  to={`/${rel.slug}`}
                  className="bg-[#F6F6F6] p-6 rounded-2xl border border-[#e7e7e7] hover:border-red-500/40 hover:bg-white hover:shadow-lg transition-all duration-200 space-y-2 group"
                >
                  <div className="text-sm font-bold text-[#111111] group-hover:text-[#E50914] transition-colors">
                    {rel.title}
                  </div>
                  <p className="text-xs text-[#5F6368] line-clamp-2">
                    {rel.heroDescription}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </>
  );
};
