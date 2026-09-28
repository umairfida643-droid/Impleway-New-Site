import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { CTABanner } from '../components/home/CTABanner';
import { projectsData } from '../data/projectsData';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, 
  Calendar, User, Clock, Layers, Sparkles, Building2 
} from 'lucide-react';

export const ProjectDetailPage = () => {
  const { slug } = useParams();
  const project = projectsData.find(p => p.slug === slug);

  if (!project) {
    return <Navigate to="/portfolio" replace />;
  }

  return (
    <>
      <SEO 
        title={`${project.title} Case Study | Impleway`}
        description={project.overview}
      />

      {/* Hero */}
      <section className="bg-radial-hero text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none"></div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          
          <Link 
            to="/portfolio" 
            className="inline-flex items-center gap-2 text-xs font-bold text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to all case studies</span>
          </Link>

          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-black uppercase tracking-wider">
              <span>{project.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight">
              {project.title}
            </h1>
            <p className="text-lg sm:text-xl text-neutral-300 leading-relaxed max-w-3xl">
              {project.subtitle}
            </p>
          </div>

          {/* Project Meta Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Client</span>
              <span className="text-base font-bold text-white">{project.client}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Timeline</span>
              <span className="text-base font-bold text-white">{project.timeline}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Services</span>
              <span className="text-base font-bold text-white truncate block">{project.services}</span>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-4">
              <span className="text-xs text-neutral-400 block font-medium">Year</span>
              <span className="text-base font-bold text-white">{project.year}</span>
            </div>
          </div>

        </div>
      </section>

      <Breadcrumbs items={[{ name: "Portfolio", path: "/portfolio" }, { name: project.title }]} />

      {/* Case Study Details */}
      <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Project Overview */}
          <div className="space-y-4">
            <h2 className="text-3xl font-black text-[#111111]">
              Project <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Overview</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              {project.overview}
            </p>
          </div>

          {/* Objectives, Solutions & Results (3 Grid) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-3">
              <h3 className="text-xl font-black text-[#111111]">The Objectives</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                {project.objectives}
              </p>
            </div>

            <div className="bg-[#F6F6F6] rounded-3xl p-8 border border-[#e7e7e7] space-y-3">
              <h3 className="text-xl font-black text-[#111111]">Our Solution</h3>
              <p className="text-sm text-[#5F6368] leading-relaxed">
                {project.solution}
              </p>
            </div>

            <div className="bg-neutral-900 text-white rounded-3xl p-8 border border-neutral-800 space-y-3">
              <h3 className="text-xl font-black text-[#E50914]">Measurable Results</h3>
              <p className="text-sm text-neutral-300 leading-relaxed">
                {project.results}
              </p>
            </div>

          </div>

          {/* Technologies Architecture */}
          <div className="space-y-4 pt-6 border-t border-neutral-200">
            <h3 className="text-2xl font-black text-[#111111]">
              Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Deployed</span>
            </h3>
            <div className="flex flex-wrap gap-3 pt-2">
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="px-5 py-2.5 rounded-full bg-[#F6F6F6] border border-[#e7e7e7] text-sm font-extrabold text-[#111111]">
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>
      </section>

      <CTABanner />
    </>
  );
};
