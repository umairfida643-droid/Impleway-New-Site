import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Network, Search, ArrowRight, ExternalLink, Layers, 
  Building2, Briefcase, FileText, CheckCircle2, ShieldCheck, 
  FolderGit2, Sparkles, Compass, Download, Globe 
} from 'lucide-react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { blogsData } from '../data/blogsData';
import { servicesData } from '../data/servicesData';
import { industriesData } from '../data/industriesData';
import { projectsData } from '../data/projectsData';

export const SitemapPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTab, setActiveTab] = useState('all');

  // Core Static Pages
  const corePages = [
    { title: "Home Page", path: "/", desc: "Main portal for enterprise ERP consulting, ZATCA Phase-2, and digital transformation.", category: "Core" },
    { title: "About Us", path: "/about", desc: "Corporate background, certified architectural leadership, and dual KSA-PK delivery model.", category: "Core" },
    { title: "Services Directory", path: "/services", desc: "Comprehensive index of 21+ enterprise implementation, cloud, and engineering services.", category: "Core" },
    { title: "Industries Served", path: "/industries", desc: "Vertical-specific ERP blueprints tailored for operationally complex Saudi industries.", category: "Core" },
    { title: "Portfolio & Case Studies", path: "/portfolio", desc: "Demonstrated client ROI, zero data-loss migrations, and multi-branch rollouts.", category: "Core" },
    { title: "Knowledge Base & Insights", path: "/blog", desc: "80+ executive guides, regulatory analysis, and ERP platform evaluations.", category: "Core" },
    { title: "Contact Us", path: "/contact", desc: "Direct communication with Riyadh, Jeddah, Al-Khobar, and Pakistan regional offices.", category: "Core" },
    { title: "Book Free Consultation", path: "/book-free-consultation", desc: "Schedule an architectural discovery session with senior ERP specialists.", category: "Core" },
  ];

  // Platforms
  const platformPages = [
    { title: "Oracle Fusion Cloud ERP", path: "/oracle-erp-services", desc: "Tier-1 enterprise financial management, SCM, and automated ZATCA Phase-2 clearance.", category: "Platforms" },
    { title: "Odoo Enterprise Solutions", path: "/odoo-erp-services", desc: "Modular, high-velocity ERP for growing enterprises, multi-store POS, and WMS.", category: "Platforms" },
    { title: "Microsoft Dynamics 365", path: "/dynamics-365-services", desc: "Enterprise F&O and Business Central with seamless Microsoft 365 integration.", category: "Platforms" },
  ];

  // Services
  const servicePages = servicesData.map(s => ({
    title: s.title,
    path: `/${s.slug}`,
    desc: s.shortDescription || `Enterprise grade ${s.title} tailored for Saudi market regulations and scalability.`,
    category: "Services"
  }));

  // Industries
  const industryList = Object.keys(industriesData).map(key => {
    const ind = industriesData[key];
    return {
      title: ind.title,
      path: "/industries",
      desc: ind.overview ? ind.overview.slice(0, 100) + '...' : `ERP architecture for Saudi ${ind.title} operations.`,
      category: "Industries"
    };
  });

  // Projects
  const projectPages = projectsData.map(p => ({
    title: p.title,
    path: `/project/${p.slug || p.id}`,
    desc: p.description ? p.description.slice(0, 100) + '...' : `Enterprise case study: ${p.title}`,
    category: "Projects"
  }));

  // Blogs
  const blogPages = blogsData.map(b => ({
    title: b.title,
    path: `/blog/${b.slug}`,
    desc: b.excerpt || b.metaDescription || '',
    category: "Insights",
    topic: b.category
  }));

  // Downloads & Raw Crawlers
  const systemPages = [
    { title: "Impleway KSA Company Profile (PDF)", path: "/Impleway-KSA-Company-Profile_compressed.pdf", desc: "Official downloadable corporate deck, credentials, and capabilities portfolio.", category: "Assets", isExternal: true },
    { title: "XML Sitemap Feed (sitemap.xml)", path: "/sitemap.xml", desc: "Machine-readable search engine index for Google, Bing, and web indexers.", category: "Assets", isExternal: true },
    { title: "Robots Crawler Protocol (robots.txt)", path: "/robots.txt", desc: "Search engine crawler permission directives.", category: "Assets", isExternal: true }
  ];

  // Total Collection
  const allLinks = useMemo(() => [
    ...corePages,
    ...platformPages,
    ...servicePages,
    ...industryList,
    ...projectPages,
    ...blogPages,
    ...systemPages
  ], []);

  // Filtered Collection
  const filteredLinks = useMemo(() => {
    return allLinks.filter(item => {
      const matchesSearch = searchQuery === '' || 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.topic && item.topic.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesTab = activeTab === 'all' || item.category.toLowerCase() === activeTab.toLowerCase();

      return matchesSearch && matchesTab;
    });
  }, [allLinks, searchQuery, activeTab]);

  return (
    <>
      <SEO 
        title="Enterprise Sitemap | Complete Architecture & Directory Index - Impleway"
        description="Comprehensive directory and sitemap of all Impleway pages, Oracle & Odoo ERP platforms, implementation services, industry solutions, and Saudi Vision 2030 digital transformation guides."
      />

      <div className="bg-[#FAFAFA] min-h-screen">
        
        {/* Header Hero */}
        <section className="bg-white border-b border-[#e7e7e7] pt-12 pb-14 relative overflow-hidden">
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Breadcrumbs items={[{ label: 'Sitemap', path: '/sitemap' }]} />
            
            <div className="mt-6 max-w-3xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 border border-red-100 text-[11px] font-black uppercase tracking-wider text-[#E50914]">
                <Network className="w-3.5 h-3.5 text-[#E50914]" />
                <span>Global URL Directory & Architectural Index</span>
              </div>
              
              <h1 className="text-3xl sm:text-5xl font-black text-[#111111] tracking-tight leading-[1.15]">
                Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#111111] via-[#E50914] to-[#9F0712]">Sitemap Index</span>
              </h1>
              
              <p className="text-base sm:text-lg text-[#5F6368] leading-relaxed">
                Explore every page, platform blueprint, industry framework, case study, and Saudi regulatory guide published across the Impleway digital ecosystem.
              </p>
            </div>

            {/* Quick Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 pt-6 border-t border-neutral-100">
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-black text-[#E50914]">{allLinks.length}</div>
                <div className="text-xs font-bold text-neutral-600 mt-0.5">Total Indexed URLs</div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-900">{servicePages.length}</div>
                <div className="text-xs font-bold text-neutral-600 mt-0.5">Enterprise Services</div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-900">{industryList.length}</div>
                <div className="text-xs font-bold text-neutral-600 mt-0.5">Industries in KSA</div>
              </div>
              <div className="bg-neutral-50 p-4 rounded-2xl border border-neutral-200">
                <div className="text-2xl font-black text-neutral-900">{blogPages.length}</div>
                <div className="text-xs font-bold text-neutral-600 mt-0.5">Insights & Guides</div>
              </div>
            </div>

            {/* Search & Filter Toolbar */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <Search className="w-4 h-4 text-neutral-400 absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search any page, service, or article..."
                  className="w-full pl-11 pr-4 py-3 bg-neutral-50 border border-neutral-200 rounded-2xl text-sm focus:outline-none focus:border-[#E50914] focus:bg-white transition-all shadow-2xs"
                />
                {searchQuery && (
                  <button 
                    onClick={() => setSearchQuery('')}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-xs font-bold text-neutral-400 hover:text-black p-1"
                  >
                    Clear
                  </button>
                )}
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap items-center gap-1.5 p-1 bg-neutral-100/80 rounded-2xl border border-neutral-200 text-xs">
                {['all', 'core', 'platforms', 'services', 'industries', 'projects', 'insights', 'assets'].map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1.5 rounded-xl font-bold capitalize transition-all cursor-pointer ${
                      activeTab === tab
                        ? 'bg-[#111111] text-white shadow-xs'
                        : 'text-neutral-600 hover:text-black hover:bg-neutral-200/50'
                    }`}
                  >
                    {tab === 'all' ? 'All' : tab}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </section>

        {/* Content Directory Grid */}
        <section className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* If searching or filtering */}
            {(searchQuery || activeTab !== 'all') ? (
              <div>
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-[#111111]">
                    Filtered Results ({filteredLinks.length})
                  </h2>
                  {(searchQuery || activeTab !== 'all') && (
                    <button
                      onClick={() => { setSearchQuery(''); setActiveTab('all'); }}
                      className="text-xs font-bold text-[#E50914] hover:underline cursor-pointer"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>

                {filteredLinks.length === 0 ? (
                  <div className="text-center py-16 bg-white rounded-3xl border border-neutral-200 p-8">
                    <p className="text-neutral-500 font-medium">No pages or articles match your search query.</p>
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {filteredLinks.map((item, idx) => (
                      <div key={idx} className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-red-500/40 hover:shadow-md transition-all flex flex-col justify-between group">
                        <div>
                          <div className="flex items-center justify-between text-[11px] mb-2 font-bold uppercase tracking-wider text-neutral-400">
                            <span className="px-2 py-0.5 rounded bg-neutral-100 text-neutral-600">{item.category}</span>
                            {item.topic && <span className="text-[#E50914] truncate max-w-[150px]">{item.topic}</span>}
                          </div>
                          <h3 className="font-bold text-[#111111] group-hover:text-[#E50914] transition-colors leading-snug">
                            {item.title}
                          </h3>
                          {item.desc && (
                            <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                              {item.desc}
                            </p>
                          )}
                        </div>
                        <div className="pt-4 mt-3 border-t border-neutral-100 flex items-center justify-between text-xs">
                          {item.isExternal ? (
                            <a 
                              href={item.path} 
                              target="_blank" 
                              rel="noopener noreferrer"
                              className="font-bold text-[#E50914] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                            >
                              <span>Open Resource</span>
                              <ExternalLink className="w-3.5 h-3.5" />
                            </a>
                          ) : (
                            <Link 
                              to={item.path}
                              className="font-bold text-[#E50914] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                            >
                              <span>View Page</span>
                              <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          )}
                          <span className="text-[11px] font-mono text-neutral-400">{item.path}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              /* Structured Hierarchy Sections */
              <div className="space-y-16">
                
                {/* 1. Core Enterprise Portals */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <Compass className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Core Enterprise Portals
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Primary navigational hubs, company credentials, and engagement workflows.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {corePages.map((page, idx) => (
                      <Link 
                        key={idx}
                        to={page.path}
                        className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-red-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-mono text-neutral-400 mb-1">{page.path}</div>
                          <h3 className="font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                            {page.title}
                          </h3>
                          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                            {page.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E50914]">
                          <span>Visit Page</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 2. Flagship ERP Platforms */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <Layers className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        ERP Platforms & Ecosystem Blueprints
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Certified implementation architectures across leading global software vendors.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {platformPages.map((plat, idx) => (
                      <Link 
                        key={idx}
                        to={plat.path}
                        className="bg-white p-6 rounded-2xl border border-neutral-200 hover:border-red-500/50 hover:shadow-lg hover:-translate-y-0.5 transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-mono text-neutral-400 mb-1">{plat.path}</div>
                          <h3 className="text-lg font-black text-[#111111] group-hover:text-[#E50914] transition-colors">
                            {plat.title}
                          </h3>
                          <p className="text-xs text-neutral-600 mt-2 leading-relaxed">
                            {plat.desc}
                          </p>
                        </div>
                        <div className="mt-5 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E50914]">
                          <span>Explore Architecture</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 3. Enterprise Implementation & Engineering Services */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Enterprise IT & ERP Services ({servicePages.length})
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Turnkey functional consulting, zero data-loss migration, custom development, and SLA operations.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {servicePages.map((serv, idx) => (
                      <Link 
                        key={idx}
                        to={serv.path}
                        className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-red-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <h3 className="font-bold text-sm text-[#111111] group-hover:text-[#E50914] transition-colors">
                            {serv.title}
                          </h3>
                          <p className="text-xs text-neutral-500 mt-1.5 line-clamp-2 leading-relaxed">
                            {serv.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E50914]">
                          <span>Service Details</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 4. Target Industries in KSA */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <Building2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Target Industries in Saudi Arabia ({industryList.length})
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Operational solutions mapped to ZATCA, SFDA, Etimad, and Vision 2030 standards.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5">
                    {industryList.map((ind, idx) => (
                      <Link 
                        key={idx}
                        to={ind.path}
                        className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-red-500/40 hover:bg-neutral-50 transition-all flex items-center justify-between group"
                      >
                        <span className="font-bold text-xs sm:text-sm text-[#111111] group-hover:text-[#E50914] transition-colors truncate">
                          {ind.title}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-[#E50914] group-hover:translate-x-0.5 transition-all flex-shrink-0" />
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 5. Case Studies & Client Projects */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <FolderGit2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Enterprise Deliveries & Case Studies ({projectPages.length})
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Documented case studies showcasing business outcome metrics and technical deliverables.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {projectPages.map((proj, idx) => (
                      <Link 
                        key={idx}
                        to={proj.path}
                        className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-red-500/40 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <h3 className="font-black text-sm text-[#111111] group-hover:text-[#E50914] transition-colors">
                            {proj.title}
                          </h3>
                          <p className="text-xs text-neutral-500 mt-2 line-clamp-2 leading-relaxed">
                            {proj.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-2.5 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E50914]">
                          <span>Read Case Study</span>
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 6. Saudi Arabia Executive Guides & Insights (All 80) */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <FileText className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Saudi Market Knowledge Base & Articles ({blogPages.length})
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        In-depth publications covering ERP consulting in KSA, website development, SEO services, and ZATCA compliance.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-h-[700px] overflow-y-auto pr-2 scrollbar-thin">
                    {blogPages.map((blog, idx) => (
                      <Link 
                        key={idx}
                        to={blog.path}
                        className="bg-white p-4 rounded-xl border border-neutral-200 hover:border-red-500/40 hover:shadow-xs transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-[10px] font-bold text-[#E50914] uppercase tracking-wider mb-1 truncate">
                            {blog.topic}
                          </div>
                          <h3 className="font-bold text-xs text-[#111111] group-hover:text-[#E50914] transition-colors leading-snug line-clamp-2">
                            {blog.title}
                          </h3>
                        </div>
                        <div className="mt-3 pt-2 border-t border-neutral-100 flex items-center justify-between text-[11px] font-bold text-[#E50914]">
                          <span>Read Article</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* 7. Corporate Assets & Web Indexers */}
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-2xl bg-red-50 text-[#E50914] flex items-center justify-center font-bold">
                      <Download className="w-5 h-5" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-[#111111] tracking-tight">
                        Official Corporate Assets & Web Indexers
                      </h2>
                      <p className="text-xs sm:text-sm text-neutral-500">
                        Direct download links for official enterprise collateral, crawler feeds, and specifications.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {systemPages.map((item, idx) => (
                      <a 
                        key={idx}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white p-5 rounded-2xl border border-neutral-200 hover:border-red-500/50 hover:shadow-md transition-all flex flex-col justify-between group"
                      >
                        <div>
                          <div className="text-xs font-mono text-neutral-400 mb-1">{item.path}</div>
                          <h3 className="font-bold text-sm text-[#111111] group-hover:text-[#E50914] transition-colors">
                            {item.title}
                          </h3>
                          <p className="text-xs text-neutral-500 mt-2 leading-relaxed">
                            {item.desc}
                          </p>
                        </div>
                        <div className="mt-4 pt-3 border-t border-neutral-100 flex items-center justify-between text-xs font-bold text-[#E50914]">
                          <span>Open File</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            )}

          </div>
        </section>

      </div>
    </>
  );
};
