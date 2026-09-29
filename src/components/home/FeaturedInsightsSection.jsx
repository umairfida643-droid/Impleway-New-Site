import React from 'react';
import { Link } from 'react-router-dom';
import { blogsData } from '../../data/blogsData';
import { ArrowRight, Clock, Calendar, Sparkles, BookOpen } from 'lucide-react';

const FEATURED_SLUGS = [
  'erp-services-in-ksa-implementation-partner',
  'website-development-service-in-ksa-enterprise-guide',
  'seo-services-in-ksa-b2b-enterprise-growth'
];

export const FeaturedInsightsSection = () => {
  // Grab the 3 primary Saudi market articles
  const featuredArticles = FEATURED_SLUGS
    .map(slug => blogsData.find(b => b.slug === slug))
    .filter(Boolean);

  return (
    <section className="py-20 sm:py-24 bg-white border-b border-[#e7e7e7] relative overflow-hidden">
      {/* Subtle Background Mesh & Light Glow */}
      <div className="absolute top-0 right-1/3 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header matching exact gradient standard */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-black uppercase tracking-wider text-[#E50914]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse"></span>
              <span>Strategic Research & Playbooks</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#111111] tracking-tight">
              Latest Insights for Enterprise Leaders in <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Saudi Arabia</span>
            </h2>
            <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
              Deep-dive architectural playbooks, ZATCA regulatory compliance analyses, and digital transformation strategies written by senior ERP consultants for the KSA market.
            </p>
          </div>
          <Link 
            to="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-[#E50914] hover:text-white bg-red-50 hover:bg-[#E50914] border border-red-100 hover:border-[#E50914] transition-all group flex-shrink-0"
          >
            <span>Explore All 30+ Research Guides</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 3 Featured Insight Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredArticles.map((article, idx) => (
            <article 
              key={idx}
              className="bg-white rounded-3xl border border-[#e7e7e7] overflow-hidden shadow-sm hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Featured Cover Image Container */}
                <Link to={`/blog/${article.slug}`} className="block relative aspect-video overflow-hidden bg-neutral-900">
                  <img 
                    src={article.featuredImage} 
                    alt={article.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  {/* Category Pill Tag */}
                  <span className="absolute top-3 left-3 px-3 py-1 rounded-full text-[10.5px] font-black uppercase tracking-wider text-white bg-neutral-900/90 border border-white/20 backdrop-blur-md">
                    {article.category}
                  </span>

                  {/* Saudi Market Badge */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md text-[10px] font-bold text-white bg-emerald-700/80 border border-emerald-500/40 backdrop-blur-xs flex items-center gap-1">
                    <span>🇸🇦 KSA Vision 2030</span>
                  </span>
                </Link>

                {/* Article Card Content */}
                <div className="p-6 sm:p-7 space-y-3">
                  
                  {/* Meta Bar: Date & Read Time */}
                  <div className="flex items-center gap-3 text-xs text-neutral-400 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#E50914]" />
                      <span>{article.readTime}</span>
                    </span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-neutral-400" />
                      <span>{article.publishedDate}</span>
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-black text-[#111111] group-hover:text-[#E50914] transition-colors line-clamp-2 leading-snug">
                    <Link to={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-xs sm:text-sm text-[#5F6368] line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>

                </div>
              </div>

              {/* Bottom Author & CTA Bar */}
              <div className="px-6 sm:px-7 pb-6 pt-3 border-t border-neutral-100 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img 
                    src="/favicon.png" 
                    alt="Impleway" 
                    className="w-7 h-7 rounded-full object-contain flex-shrink-0 shadow-xs" 
                  />
                  <span className="text-xs font-bold text-neutral-700">
                    Impleway Advisory
                  </span>
                </div>
                <Link
                  to={`/blog/${article.slug}`}
                  className="inline-flex items-center gap-1 text-xs font-black text-[#E50914] group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Guide</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </article>
          ))}
        </div>

        {/* Search & Topic Quick-Links Ribbon */}
        <div className="mt-12 p-6 rounded-2xl bg-[#F8F9FA] border border-[#e7e7e7] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-neutral-700">
            <BookOpen className="w-4 h-4 text-[#E50914]" />
            <span>Popular Saudi Enterprise Search Queries:</span>
          </div>
          <div className="flex flex-wrap gap-2 justify-center sm:justify-end">
            <Link 
              to="/blog/erp-services-in-ksa-implementation-partner"
              className="px-3 py-1 rounded-full text-xs font-bold bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition-colors"
            >
              ERP Services in KSA
            </Link>
            <Link 
              to="/blog/website-development-service-in-ksa-enterprise-guide"
              className="px-3 py-1 rounded-full text-xs font-bold bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition-colors"
            >
              Website Development Service in KSA
            </Link>
            <Link 
              to="/blog/seo-services-in-ksa-b2b-enterprise-growth"
              className="px-3 py-1 rounded-full text-xs font-bold bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition-colors"
            >
              SEO Services in KSA
            </Link>
            <Link 
              to="/blog/zatca-phase-2-einvoicing-integration-saudi-arabia"
              className="px-3 py-1 rounded-full text-xs font-bold bg-white hover:bg-neutral-100 text-neutral-700 border border-neutral-200 transition-colors"
            >
              ZATCA Phase-2 Clearance
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};
