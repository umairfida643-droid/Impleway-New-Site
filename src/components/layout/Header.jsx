import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Mail, MessageSquare, ChevronDown, Menu, X, ArrowRight, 
  Layers, ShieldCheck, Sparkles, Globe, Compass
} from 'lucide-react';
import { navigation } from '../../data/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { ServiceIcon } from '../ui/ServiceIcon';
import { prefetchRoute } from '../../utils/prefetchRoutes';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPlatformsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
          const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
          setScrollProgress(Math.min(100, Math.max(0, progress)));
          setIsScrolled(window.scrollY > 20);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md transition-all duration-300">
      {/* Top Announcement Bar */}
      <div className="bg-[#0b0b0b] text-white text-[13px] border-b border-white/10 py-2 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Numbers with Country Badges */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6 font-medium">
            <a 
              href="tel:+966598145042" 
              className="flex items-center gap-1.5 hover:text-[#E50914] transition-colors"
            >
              <span className="text-sm">🇸🇦</span>
              <span className="font-semibold text-white/90">KSA:</span>
              <span className="text-white/80">+966 59 814 5042</span>
            </a>
            <span className="hidden sm:inline text-white/20">|</span>
            <a 
              href="tel:+923392244790" 
              className="flex items-center gap-1.5 hover:text-[#E50914] transition-colors"
            >
              <span className="text-sm">🇵🇰</span>
              <span className="font-semibold text-white/90">PK:</span>
              <span className="text-white/80">+92 339 2244790</span>
            </a>
            <span className="hidden md:inline text-white/20">|</span>
            <a 
              href="mailto:hey@impleway.com" 
              className="hidden md:flex items-center gap-1.5 hover:text-[#E50914] transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#E50914]" />
              <span className="text-white/80">hey@impleway.com</span>
            </a>
          </div>

          {/* Direct WhatsApp Quick Connects & Official Saudi Compliance Badges */}
          <div className="flex items-center gap-3">
            {/* Original ZATCA & Saudi Vision 2030 Logos */}
            <div className="hidden lg:flex items-center gap-2 pr-3 border-r border-white/15">
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10" title="ZATCA Phase-2 Certified">
                <img 
                  src="/logos/zatca-logo.svg" 
                  alt="ZATCA Official" 
                  className="h-3.5 w-auto object-contain brightness-0 invert opacity-95" 
                />
              </div>
              <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-white/5 border border-white/10" title="Saudi Vision 2030 Partner">
                <img 
                  src="/logos/saudi-vision-2030.svg" 
                  alt="Saudi Vision 2030 Official" 
                  className="h-3.5 w-auto object-contain brightness-0 invert opacity-95" 
                />
              </div>
            </div>

            <span className="text-white/60 text-xs hidden xl:inline">Instant WhatsApp Support:</span>
            <a 
              href="https://wa.me/966598145042" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/20 transition-all"
            >
              <MessageSquare className="w-3 h-3" />
              <span>KSA Chat</span>
            </a>
            <a 
              href="https://wa.me/923392244790" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/15 text-white/90 text-xs font-semibold hover:bg-white/10 transition-all"
            >
              <MessageSquare className="w-3 h-3" />
              <span>PK Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 border-b border-[#e7e7e7] transition-all duration-200 ${isScrolled ? 'py-3' : 'py-4'}`}>
        <div className="flex items-center justify-between gap-6">
          
          {/* Logo with Animated Pulsing Red Dot */}
          <Link to="/" className="flex items-center select-none py-1" aria-label="Impleway – Simplify, Implementation">
            <BrandLogo variant="dark" className="h-8 sm:h-9" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-7 text-[15px] font-bold text-[#161616]">
            <NavLink 
              to="/" 
              className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}
            >
              Home
            </NavLink>

            {/* Services Mega Menu Trigger */}
            <div 
              className="relative group"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-[#E50914] transition-colors py-2 cursor-pointer"
                onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Menu Overlay Dropdown */}
              {servicesDropdownOpen && (
                <div className="absolute top-full -left-48 w-[920px] bg-white rounded-2xl shadow-2xl border border-[#e7e7e7] p-7 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  {navigation.mainNav[1].sections.map((section, idx) => (
                    <div key={idx} className="space-y-3">
                      <div className="text-xs uppercase tracking-wider font-extrabold text-[#E50914] border-b border-[#e7e7e7] pb-2 flex items-center gap-2">
                        {idx === 0 && <Layers className="w-3.5 h-3.5" />}
                        {idx === 1 && <Globe className="w-3.5 h-3.5" />}
                        {idx === 2 && <Sparkles className="w-3.5 h-3.5" />}
                        <span>{section.title}</span>
                      </div>
                      <div className="space-y-1">
                        {section.items.map((item, itemIdx) => (
                          <Link 
                            key={itemIdx} 
                            to={item.path} 
                            className="group/item flex items-center justify-between p-2 rounded-xl hover:bg-[#F6F6F6] transition-all"
                          >
                            <div className="flex items-center gap-2.5 min-w-0">
                              <div className="w-8 h-8 rounded-lg bg-red-50 text-[#E50914] group-hover/item:bg-[#E50914] group-hover/item:text-white flex items-center justify-center flex-shrink-0 transition-all duration-200 shadow-xs">
                                <ServiceIcon slug={item.path.replace('/', '')} className="w-4 h-4" />
                              </div>
                              <div className="min-w-0">
                                <div className="text-[13.5px] font-bold text-[#111111] group-hover/item:text-[#E50914] transition-colors leading-tight">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#5F6368] leading-tight truncate mt-0.5">
                                  {item.desc}
                                </div>
                              </div>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 text-[#E50914] opacity-0 group-hover/item:opacity-100 transform -translate-x-1 group-hover/item:translate-x-0 transition-all flex-shrink-0 ml-1.5" />
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                  
                  {/* Mega Menu Footer Banner */}
                  <div className="col-span-3 pt-3 border-t border-[#e7e7e7] flex items-center justify-between text-xs text-[#5F6368]">
                    <span>Need customized enterprise software or cloud architecture?</span>
                    <Link to="/services" className="font-bold text-[#E50914] hover:underline flex items-center gap-1">
                      <span>View All 20+ Services</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Platforms Dropdown with Original Logos */}
            <div 
              className="relative group"
              onMouseEnter={() => setPlatformsDropdownOpen(true)}
              onMouseLeave={() => setPlatformsDropdownOpen(false)}
            >
              <button 
                className="flex items-center gap-1 hover:text-[#E50914] transition-colors py-2 cursor-pointer"
                onClick={() => setPlatformsDropdownOpen(!platformsDropdownOpen)}
              >
                <span>Platforms</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${platformsDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {platformsDropdownOpen && (
                <div className="absolute top-full -left-56 w-[860px] bg-white rounded-3xl shadow-2xl border border-[#e7e7e7] p-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
                  
                  {/* Top Header Bar */}
                  <div className="flex items-center justify-between pb-4 mb-5 border-b border-neutral-100">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded-lg bg-red-50 text-[#E50914] flex items-center justify-center">
                        <Layers className="w-3.5 h-3.5" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider text-neutral-800">
                        Official Enterprise ERP Platforms
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/80">
                        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                        <span>ZATCA Phase 2 Certified</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold text-neutral-600 bg-neutral-100 border border-neutral-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span>Saudi Vision 2030 Localized</span>
                      </span>
                    </div>
                  </div>

                  {/* Main 2-Column Content Grid */}
                  <div className="grid grid-cols-12 gap-6">
                    
                    {/* Left: 3 Core Certified Platforms (7 cols) */}
                    <div className="col-span-7 space-y-3">
                      
                      {/* Oracle ERP Cloud */}
                      <Link 
                        to="/oracle-erp-services" 
                        onMouseEnter={() => prefetchRoute('oracle')}
                        className="group/p flex items-start gap-4 p-3.5 rounded-2xl border border-transparent hover:border-red-100 hover:bg-[#FAF9F9] transition-all duration-200 shadow-none hover:shadow-md"
                      >
                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xs flex-shrink-0 group-hover/p:scale-105 transition-transform bg-white border border-neutral-100">
                          <img 
                            src="/logos/oracle-app-icon.png" 
                            alt="Oracle ERP Cloud Logo" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[14.5px] font-black text-[#111111] group-hover/p:text-[#E50914] transition-colors leading-tight">
                              Oracle ERP Cloud
                            </h4>
                            <span className="text-[10px] uppercase font-extrabold tracking-wide text-[#E50914] bg-red-50 border border-red-100 px-2 py-0.5 rounded-md">
                              Tier-1 Enterprise
                            </span>
                          </div>
                          <p className="text-[12px] text-[#5F6368] leading-snug mt-1">
                            Multi-entity financial consolidation, global procurement, and executive treasury.
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {['Financials Cloud', 'Fusion SCM', 'Oracle Analytics', 'ZATCA Phase 2'].map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E50914] opacity-0 group-hover/p:opacity-100 transform -translate-x-1 group-hover/p:translate-x-0 transition-all flex-shrink-0 mt-1" />
                      </Link>

                      {/* Odoo ERP Solutions */}
                      <Link 
                        to="/odoo-erp-services" 
                        onMouseEnter={() => prefetchRoute('odoo')}
                        className="group/p flex items-start gap-4 p-3.5 rounded-2xl border border-transparent hover:border-purple-100 hover:bg-[#FAF9FA] transition-all duration-200 shadow-none hover:shadow-md"
                      >
                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xs flex-shrink-0 group-hover/p:scale-105 transition-transform bg-white border border-neutral-100">
                          <img 
                            src="/logos/odoo-app-icon.png" 
                            alt="Official Odoo Logo" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[14.5px] font-black text-[#111111] group-hover/p:text-[#E50914] transition-colors leading-tight">
                              Odoo ERP Solutions
                            </h4>
                            <span className="text-[10px] uppercase font-extrabold tracking-wide text-purple-700 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md">
                              Agile &amp; Modular
                            </span>
                          </div>
                          <p className="text-[12px] text-[#5F6368] leading-snug mt-1">
                            Rapid 6–12 week deployment for growing SMEs, retail chains, inventory, and factories.
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {['Retail POS', 'Smart WMS', 'Saudi Labor / GOSI', 'Custom Apps'].map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E50914] opacity-0 group-hover/p:opacity-100 transform -translate-x-1 group-hover/p:translate-x-0 transition-all flex-shrink-0 mt-1" />
                      </Link>

                      {/* Microsoft Dynamics 365 */}
                      <Link 
                        to="/dynamics-365-services" 
                        onMouseEnter={() => prefetchRoute('dynamics')}
                        className="group/p flex items-start gap-4 p-3.5 rounded-2xl border border-transparent hover:border-blue-100 hover:bg-[#F9FBFC] transition-all duration-200 shadow-none hover:shadow-md"
                      >
                        <div className="w-12 h-12 rounded-2xl overflow-hidden shadow-xs flex-shrink-0 group-hover/p:scale-105 transition-transform bg-white border border-neutral-100">
                          <img 
                            src="/logos/dynamics-app-icon.png" 
                            alt="Microsoft Dynamics 365 Logo" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <h4 className="text-[14.5px] font-black text-[#111111] group-hover/p:text-[#E50914] transition-colors leading-tight">
                              Microsoft Dynamics 365
                            </h4>
                            <span className="text-[10px] uppercase font-extrabold tracking-wide text-blue-700 bg-blue-50 border border-blue-100 px-2 py-0.5 rounded-md">
                              Copilot AI Native
                            </span>
                          </div>
                          <p className="text-[12px] text-[#5F6368] leading-snug mt-1">
                            Connected operations across Business Central &amp; F&amp;O with native Microsoft 365 and Power BI.
                          </p>
                          <div className="flex flex-wrap items-center gap-1.5 mt-2">
                            {['Business Central', 'Finance & Ops', 'Power Platform', 'Copilot AI'].map((tag, tIdx) => (
                              <span key={tIdx} className="text-[10.5px] font-medium text-neutral-600 bg-neutral-100 px-2 py-0.5 rounded-md">
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                        <ArrowRight className="w-4 h-4 text-[#E50914] opacity-0 group-hover/p:opacity-100 transform -translate-x-1 group-hover/p:translate-x-0 transition-all flex-shrink-0 mt-1" />
                      </Link>

                    </div>

                    {/* Right: Enterprise Advisory & Platform Comparison Spotlight (5 cols) */}
                    <div className="col-span-5 bg-gradient-to-br from-[#0F141C] to-[#1A2230] rounded-2xl p-5 text-white flex flex-col justify-between border border-neutral-800 shadow-md relative overflow-hidden">
                      {/* Ambient Accent Glow */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-[#E50914]/20 rounded-full blur-2xl pointer-events-none" />

                      <div className="space-y-3 relative z-10">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 border border-white/15 text-[10.5px] font-bold tracking-wide text-white uppercase">
                          <Compass className="w-3 h-3 text-[#E50914]" />
                          <span>Platform Selection Advisory</span>
                        </div>

                        <h4 className="text-[15px] font-black text-white leading-tight">
                          Which ERP fits your business size &amp; goals?
                        </h4>

                        <p className="text-[11.5px] text-neutral-300 leading-relaxed">
                          We provide vendor-neutral architectural guidance to match your company size, user volume, and regulatory mandates in Saudi Arabia.
                        </p>

                        <div className="space-y-2 pt-1 border-t border-neutral-700/60 text-[11.5px]">
                          <div className="flex items-start gap-2 text-neutral-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-1.5 flex-shrink-0" />
                            <span className="leading-snug"><strong className="text-white">Oracle:</strong> 250+ users &amp; multi-company groups</span>
                          </div>
                          <div className="flex items-start gap-2 text-neutral-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0" />
                            <span className="leading-snug"><strong className="text-white">Odoo:</strong> Fast 8–12 wk go-live &amp; modular SMBs</span>
                          </div>
                          <div className="flex items-start gap-2 text-neutral-200">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0" />
                            <span className="leading-snug"><strong className="text-white">Dynamics 365:</strong> Deep Microsoft 365 &amp; Copilot stack</span>
                          </div>
                        </div>

                        {/* Guide link */}
                        <div className="pt-1">
                          <Link 
                            to="/blog/oracle-erp-vs-odoo-erp-which-platform-is-right-for-your-business"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-red-400 hover:text-red-300 transition-colors"
                          >
                            <span>Read 3-Way Platform Comparison Guide</span>
                            <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4 relative z-10">
                        <Link 
                          to="/book-free-consultation"
                          className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl font-bold text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] hover:opacity-95 shadow-md transition-all"
                        >
                          <span>Request Platform Assessment</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                      </div>
                    </div>

                  </div>

                  {/* Mega Menu Footer Banner */}
                  <div className="mt-5 pt-3.5 border-t border-neutral-100 flex items-center justify-between text-xs text-[#5F6368]">
                    <div className="flex items-center gap-2 text-neutral-600 font-medium">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0"></span>
                      <span>Certified Implementation Specialists across Riyadh, Jeddah, Khobar &amp; GCC</span>
                    </div>
                    <div className="flex items-center gap-4 font-bold text-[#111111]">
                      <Link to="/erp-consulting" className="hover:text-[#E50914] transition-colors">ERP Advisory</Link>
                      <span className="text-neutral-300">•</span>
                      <Link to="/erp-migration" className="hover:text-[#E50914] transition-colors">Data Migration</Link>
                      <span className="text-neutral-300">•</span>
                      <Link to="/managed-support" className="hover:text-[#E50914] transition-colors">Managed Support</Link>
                      <span className="text-neutral-300">•</span>
                      <Link to="/services" className="text-[#E50914] hover:underline flex items-center gap-1">
                        <span>All Services</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>

                </div>
              )}
            </div>

            <NavLink to="/industries" onMouseEnter={() => prefetchRoute('industries')} className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Industries
            </NavLink>
            <NavLink to="/portfolio" onMouseEnter={() => prefetchRoute('portfolio')} className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Portfolio
            </NavLink>
            <NavLink to="/about" onMouseEnter={() => prefetchRoute('about')} className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              About
            </NavLink>
            <NavLink to="/blog" onMouseEnter={() => prefetchRoute('blog')} className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" onMouseEnter={() => prefetchRoute('contact')} className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link 
              to="/book-free-consultation" 
              onMouseEnter={() => prefetchRoute('consultation')}
              className="btn-shine inline-flex items-center justify-center px-6 py-2.5 rounded-full font-black text-sm text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-lg shadow-red-600/25 hover:shadow-red-600/40 hover:-translate-y-0.5 active:translate-y-0 transition-all"
            >
              Book Consultation
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            type="button"
            className="xl:hidden p-2 rounded-xl text-[#050505] hover:bg-neutral-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#e7e7e7] shadow-xl px-5 py-6 max-h-[85vh] overflow-y-auto space-y-4">
          <div className="space-y-1 border-b border-[#e7e7e7] pb-4">
            <Link to="/" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">Home</Link>
            <Link to="/about" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">About Us</Link>
            <Link to="/portfolio" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">Portfolio & Case Studies</Link>
            <Link to="/industries" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">Industries Served</Link>
            <Link to="/blog" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">Insights & Blog</Link>
            <Link to="/contact" className="block py-2 text-base font-bold text-[#111111] hover:text-[#E50914]">Contact Us</Link>
          </div>

          {/* Platforms in Mobile Drawer with Official Brand Icons */}
          <div className="space-y-2 border-b border-[#e7e7e7] pb-4">
            <div className="flex items-center justify-between">
              <div className="text-xs uppercase font-extrabold text-[#E50914] tracking-wider">Certified ERP Platforms</div>
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">ZATCA Ready</span>
            </div>
            <div className="space-y-2 pt-1">
              <Link to="/oracle-erp-services" className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 hover:bg-red-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs flex-shrink-0 bg-white border border-neutral-200/80">
                  <img src="/logos/oracle-app-icon.png" alt="Oracle ERP Cloud" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">Oracle ERP Cloud</span>
                    <span className="text-[9.5px] uppercase font-extrabold text-[#E50914] bg-red-50 px-1.5 py-0.5 rounded">Enterprise</span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] font-normal truncate mt-0.5">Tier-1 Multi-Entity &amp; Treasury</div>
                </div>
              </Link>

              <Link to="/odoo-erp-services" className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 hover:bg-purple-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs flex-shrink-0 bg-white border border-neutral-200/80">
                  <img src="/logos/odoo-app-icon.png" alt="Odoo ERP Solutions" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">Odoo ERP Solutions</span>
                    <span className="text-[9.5px] uppercase font-extrabold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Modular SMB</span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] font-normal truncate mt-0.5">Fast 8–12 Wk Launch &amp; WMS</div>
                </div>
              </Link>

              <Link to="/dynamics-365-services" className="flex items-center gap-3 p-2.5 rounded-xl bg-neutral-50 hover:bg-blue-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-9 h-9 rounded-xl overflow-hidden shadow-xs flex-shrink-0 bg-white border border-neutral-200/80">
                  <img src="/logos/dynamics-app-icon.png" alt="Microsoft Dynamics 365" className="w-full h-full object-contain" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-bold text-[#111111]">Microsoft Dynamics 365</span>
                    <span className="text-[9.5px] uppercase font-extrabold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Copilot AI</span>
                  </div>
                  <div className="text-[11px] text-[#5F6368] font-normal truncate mt-0.5">Business Central, F&amp;O &amp; Power BI</div>
                </div>
              </Link>
            </div>
          </div>

          {/* Services Accordion List in Mobile */}
          <div className="space-y-2 border-b border-[#e7e7e7] pb-4">
            <div className="text-xs uppercase font-extrabold text-[#E50914] tracking-wider">ERP &amp; Digital Services</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 pt-1">
              {[
                { name: "ERP Consulting", path: "/erp-consulting" },
                { name: "ERP Implementation", path: "/erp-implementation" },
                { name: "ERP Migration", path: "/erp-migration" },
                { name: "Data Migration", path: "/data-migration" },
                { name: "Managed Support", path: "/managed-support" },
                { name: "Web Development", path: "/web-development" },
                { name: "Cloud Solutions", path: "/cloud-solutions" },
                { name: "Cyber Security", path: "/cyber-security" },
                { name: "AI Automation", path: "/ai-automation-solutions" }
              ].map((service, sIdx) => (
                <Link 
                  key={sIdx}
                  to={service.path} 
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-red-50 text-sm font-semibold text-neutral-700 hover:text-[#E50914] transition-colors"
                >
                  <div className="w-6 h-6 rounded-md bg-red-50 text-[#E50914] flex items-center justify-center flex-shrink-0">
                    <ServiceIcon slug={service.path.replace('/', '')} className="w-3.5 h-3.5" />
                  </div>
                  <span>{service.name}</span>
                </Link>
              ))}
            </div>
            <div className="pt-2">
              <Link to="/services" className="text-xs font-bold text-[#E50914] hover:underline flex items-center gap-1">
                View All Services <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>

          {/* Action CTAs in Mobile Drawer */}
          <div className="space-y-3 pt-2">
            <Link 
              to="/book-free-consultation"
              className="w-full inline-flex items-center justify-center py-3 rounded-xl font-bold text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] text-sm shadow-md"
            >
              Book Free Consultation
            </Link>
            
            <div className="flex gap-2 text-xs">
              <a 
                href="https://wa.me/966598145042" 
                className="flex-1 text-center py-2.5 rounded-lg border border-neutral-300 font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                🇸🇦 WhatsApp KSA
              </a>
              <a 
                href="https://wa.me/923392244790" 
                className="flex-1 text-center py-2.5 rounded-lg border border-neutral-300 font-semibold text-neutral-800 hover:bg-neutral-50"
              >
                🇵🇰 WhatsApp PK
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Sleek Scroll Progress Bar directly underneath the sticky header */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[3px] bg-neutral-200/50 overflow-hidden pointer-events-none"
        role="progressbar"
        aria-valuenow={Math.round(scrollProgress)}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div 
          className="h-full bg-gradient-to-r from-[#E50914] via-red-500 to-[#9F0712] transition-[width] duration-100 ease-out shadow-[0_0_10px_rgba(229,9,20,0.9)]"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>
    </header>
  );
};
