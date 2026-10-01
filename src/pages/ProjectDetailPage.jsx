import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { projectsData } from '../data/projectsData';
import { getProjectCoverAlt, getProjectLogoAlt } from '../data/altTexts';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, 
  Calendar, User, Clock, Layers, Sparkles, Building2,
  Globe, ExternalLink, Quote, Cpu, Award, BarChart3, Check
} from 'lucide-react';

import { NotFoundPage } from './NotFoundPage';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const projectIndex = projectsData.findIndex(p => p.slug === slug);
  const project = projectsData[projectIndex];

  if (!project) {
    return <NotFoundPage />;
  }

  // Next and Previous projects for seamless case study navigation
  const prevProject = projectIndex > 0 ? projectsData[projectIndex - 1] : projectsData[projectsData.length - 1];
  const nextProject = projectIndex < projectsData.length - 1 ? projectsData[projectIndex + 1] : projectsData[0];

  return (
    <>
      <SEO 
        title={`${project.title} Case Study | Proven Enterprise Architecture`}
        description={project.overview}
        ogImage={project.image || `/projects/covers/${project.slug}.png`}
      />

      {/* Hero Header */}
      <section className="bg-radial-hero text-white py-14 sm:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all case studies</span>
          </Link>

          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2.5">
                {project.logo && (
                  <div className="w-9 h-9 rounded-xl bg-white p-1 flex items-center justify-center shadow-md">
                    <img src={project.logo} alt={getProjectLogoAlt(project.slug, project.title)} className="w-full h-full object-contain" />
                  </div>
                )}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-mono font-bold bg-white/10 text-neutral-300">
                  Year {project.year}
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-3xl">
                {project.subtitle}
              </p>
            </div>

            {/* Visit Live Website Button */}
            {project.websiteUrl && (
              <div className="flex-shrink-0">
                <a
                  href={project.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-extrabold text-sm text-white bg-[#E50914] hover:bg-[#9F0712] shadow-xl shadow-red-600/30 transition-all hover:scale-105 active:scale-95"
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit Live Website</span>
                  <ExternalLink className="w-4 h-4 text-white/80" />
                </a>
              </div>
            )}
          </div>

          {/* Project Meta Metrics Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10 text-xs sm:text-sm">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Client Account</span>
              <span className="text-base font-bold text-white truncate block">{project.client}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Delivery Timeline</span>
              <span className="text-base font-bold text-white">{project.timeline}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Core Services</span>
              <span className="text-base font-bold text-white truncate block">{project.services.split(',')[0]}</span>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Architecture</span>
              <span className="text-base font-bold text-white truncate block">{project.technologies[0]}</span>
            </div>
          </div>

        </div>
      </section>

      <Breadcrumbs items={[{ name: "Portfolio", path: "/portfolio" }, { name: project.title }]} />

      {/* Main Case Study Body */}
      <section className="py-16 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* High-Resolution 3D Laptop Showcase */}
          <div className="rounded-3xl overflow-hidden border border-neutral-200 shadow-2xl bg-[#FAFAFA]">
            <img 
              src={project.image || `/projects/covers/${project.slug}.png`} 
              alt={getProjectCoverAlt(project.slug, project.title)}
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Quantitative Impact Stat Cards (if available) */}
          {project.metrics && project.metrics.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E50914]">
                <BarChart3 className="w-4 h-4" />
                <span>Quantitative Business Impact</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.metrics.map((m, mIdx) => (
                  <div 
                    key={mIdx}
                    className="p-6 sm:p-8 rounded-3xl bg-neutral-50 border border-neutral-200/80 shadow-xs relative overflow-hidden"
                  >
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#E50914] to-[#9F0712]"></div>
                    <div className="text-3xl sm:text-4xl font-black text-[#111111] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-sm font-bold text-neutral-600 mt-2">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Overview & Strategic Objectives (2 Columns) */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#E50914]">
                <Building2 className="w-4 h-4" />
                <span>Executive Overview</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-[#111111] leading-tight">
                About the Client & Business Context
              </h2>
              <p className="text-base text-[#5F6368] leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="p-8 rounded-3xl bg-[#F6F6F6] border border-[#e7e7e7] space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-700">
                <ShieldCheck className="w-4 h-4 text-[#E50914]" />
                <span>The Core Challenge</span>
              </div>
              <h3 className="text-xl font-black text-[#111111]">Strategic Objectives</h3>
              <p className="text-sm sm:text-base text-[#5F6368] leading-relaxed">
                {project.objectives}
              </p>
            </div>
          </div>

          {/* Engineering Solution & Architecture Highlights */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#050505] text-white border border-neutral-800 space-y-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
            <div className="relative space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-red-400">
                <Cpu className="w-4 h-4" />
                <span>Impleway Engineering Delivery</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-black text-white">
                The Architectural Solution
              </h2>
              <p className="text-base sm:text-lg text-neutral-300 leading-relaxed max-w-4xl">
                {project.solution}
              </p>

              {project.architecture && (
                <div className="pt-4 border-t border-neutral-800">
                  <p className="text-sm text-neutral-400 leading-relaxed font-mono">
                    <span className="text-red-400 font-bold">SYSTEM ARCHITECTURE:</span> {project.architecture}
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Key Architectural Deliverables / Features */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#111111]">
                Key Deliverables & <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Capabilities Implemented</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-start gap-3.5 p-5 rounded-2xl bg-neutral-50 border border-neutral-200/80">
                    <div className="w-7 h-7 rounded-xl bg-red-100 text-[#E50914] flex items-center justify-center flex-shrink-0 mt-0.5 font-bold">
                      <Check className="w-4 h-4" />
                    </div>
                    <span className="text-sm sm:text-base font-bold text-neutral-800">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Measurable Business Results */}
          <div className="p-8 sm:p-10 rounded-3xl bg-neutral-900 border border-neutral-800 text-white space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-wider text-[#ff3838]">
              <Award className="w-4 h-4" />
              <span>Measurable Business Results & ROI</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Proven Outcomes & ROI
            </h3>
            <p className="text-base sm:text-lg text-neutral-200 leading-relaxed">
              {project.results}
            </p>
          </div>

          {/* Client Testimonial / Endorsement */}
          {project.clientQuote && (
            <div className="p-8 sm:p-10 rounded-3xl bg-neutral-50 border border-neutral-200/80 relative space-y-4">
              <Quote className="w-10 h-10 text-red-500/20 absolute top-6 right-6" />
              <div className="text-xs font-black uppercase tracking-wider text-[#E50914]">
                Client Endorsement
              </div>
              <blockquote className="text-base sm:text-lg italic font-medium text-neutral-800 leading-relaxed">
                "{project.clientQuote}"
              </blockquote>
              <div className="pt-2 flex items-center gap-3">
                {project.logo && (
                  <img src={project.logo} alt={getProjectLogoAlt(project.slug, project.title)} className="w-8 h-8 rounded-lg object-contain bg-white border border-neutral-200 p-0.5" />
                )}
                <div>
                  <div className="font-extrabold text-sm text-[#111111]">{project.client}</div>
                  <div className="text-xs text-neutral-500 font-medium">Verified Enterprise Partner</div>
                </div>
              </div>
            </div>
          )}

          {/* Technologies Deployed Stack */}
          <div className="space-y-4 pt-4 border-t border-neutral-200">
            <h3 className="text-2xl font-black text-[#111111]">
              Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Deployed</span>
            </h3>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-4 py-2 rounded-xl bg-[#F6F6F6] border border-[#e7e7e7] text-xs sm:text-sm font-extrabold text-[#111111] shadow-2xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Prev / Next Project Navigation Bar */}
          <div className="pt-10 border-t border-neutral-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <Link
              to={`/project/${prevProject.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 hover:border-red-500/50 hover:bg-neutral-50 transition-all flex items-center gap-3 group"
            >
              <ArrowLeft className="w-5 h-5 text-neutral-400 group-hover:text-[#E50914] transition-colors" />
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Previous Case Study</span>
                <span className="text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">{prevProject.title}</span>
              </div>
            </Link>

            <Link
              to={`/project/${nextProject.slug}`}
              className="p-5 rounded-2xl border border-neutral-200 hover:border-red-500/50 hover:bg-neutral-50 transition-all flex items-center justify-between group text-right"
            >
              <div className="flex-1">
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400 block">Next Case Study</span>
                <span className="text-sm font-black text-[#111111] group-hover:text-[#E50914] transition-colors">{nextProject.title}</span>
              </div>
              <ArrowRight className="w-5 h-5 text-neutral-400 group-hover:text-[#E50914] transition-colors ml-3" />
            </Link>
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
};
