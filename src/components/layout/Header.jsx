import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MessageSquare, ChevronDown, Menu, X, ArrowRight, 
  ExternalLink, Layers, ShieldCheck, Sparkles, Building2, Globe
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { navigation } from '../../data/navigation';
import { BrandLogo } from '../ui/BrandLogo';
import { ServiceIcon } from '../ui/ServiceIcon';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  
  const location = useLocation();
  const megaMenuRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPlatformsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = totalScroll > 0 ? (window.scrollY / totalScroll) * 100 : 0;
      setScrollProgress(Math.min(100, Math.max(0, progress)));
      setIsScrolled(window.scrollY > 20);
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
                <div className="absolute top-full -left-48 w-[860px] bg-white rounded-2xl shadow-2xl border border-[#e7e7e7] p-7 grid grid-cols-3 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 z-50">
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
                            className="group/item flex items-center justify-between p-2 rounded-lg hover:bg-[#F6F6F6] transition-all"
                          >
                            <div className="flex items-center min-w-0">
                              <div className="w-0 group-hover/item:w-7 transition-all duration-200 overflow-hidden opacity-0 group-hover/item:opacity-100 flex-shrink-0 flex items-center justify-start">
                                <div className="w-6 h-6 rounded-md bg-red-50 text-[#E50914] flex items-center justify-center mr-2">
                                  <ServiceIcon slug={item.path.replace('/', '')} className="w-3.5 h-3.5" />
                                </div>
                              </div>
                              <div className="transition-transform duration-200">
                                <div className="text-[14px] font-bold text-[#111111] group-hover/item:text-[#E50914] transition-colors leading-tight">
                                  {item.name}
                                </div>
                                <div className="text-[11px] text-[#5F6368] leading-tight truncate">
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
                <div className="absolute top-full -left-12 w-80 bg-white rounded-2xl shadow-2xl border border-[#e7e7e7] p-2.5 space-y-1.5 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <div className="px-3 py-1.5 text-[11px] font-black uppercase tracking-wider text-neutral-400 border-b border-neutral-100 flex items-center justify-between">
                    <span>Certified ERP Platforms</span>
                    <span className="text-[9.5px] text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded-full font-bold">KSA Ready</span>
                  </div>

                  {/* Oracle ERP Cloud */}
                  <Link 
                    to="/oracle-erp-services" 
                    className="group/platform flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6F6F6] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#F80000] p-1 flex items-center justify-center flex-shrink-0 shadow-xs group-hover/platform:scale-105 transition-transform">
                      <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                        <path d="M12 7c-3.3 0-6 2.2-6 5s2.7 5 6 5 6-2.2 6-5-2.7-5-6-5zm0 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3z" fill="#FFFFFF" />
                      </svg>
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#111111] group-hover/platform:text-[#E50914] transition-colors leading-tight">
                          Oracle ERP Cloud
                        </span>
                        <span className="text-[9.5px] uppercase font-extrabold text-[#E50914] bg-red-50 border border-red-100 px-1.5 py-0.5 rounded">
                          Enterprise
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5F6368] leading-tight mt-0.5">
                        Tier-1 Multi-Entity &amp; Treasury
                      </div>
                    </div>
                  </Link>

                  {/* Odoo ERP Solutions */}
                  <Link 
                    to="/odoo-erp-services" 
                    className="group/platform flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6F6F6] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#714B67] p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs group-hover/platform:scale-105 transition-transform">
                      <img 
                        src="/logos/odoo-official.svg" 
                        alt="Official Odoo Logo" 
                        className="w-full h-full object-contain filter brightness-0 invert" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#111111] group-hover/platform:text-[#E50914] transition-colors leading-tight">
                          Odoo ERP Solutions
                        </span>
                        <span className="text-[9.5px] uppercase font-extrabold text-purple-700 bg-purple-50 border border-purple-100 px-1.5 py-0.5 rounded">
                          Agile SMB
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5F6368] leading-tight mt-0.5">
                        Modular ERP &amp; Fast 8-12 Wk Launch
                      </div>
                    </div>
                  </Link>

                  {/* Microsoft Dynamics 365 */}
                  <Link 
                    to="/dynamics-365-services" 
                    className="group/platform flex items-center gap-3 p-2.5 rounded-xl hover:bg-[#F6F6F6] transition-all"
                  >
                    <div className="w-10 h-10 rounded-xl bg-[#002050] p-1.5 flex items-center justify-center flex-shrink-0 shadow-xs group-hover/platform:scale-105 transition-transform">
                      <img 
                        src="/logos/dynamics-365-official.svg" 
                        alt="Official Microsoft Dynamics 365 Logo" 
                        className="w-full h-full object-contain" 
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-bold text-[#111111] group-hover/platform:text-[#E50914] transition-colors leading-tight">
                          Microsoft Dynamics 365
                        </span>
                        <span className="text-[9.5px] uppercase font-extrabold text-blue-700 bg-blue-50 border border-blue-100 px-1.5 py-0.5 rounded">
                          Copilot AI
                        </span>
                      </div>
                      <div className="text-[11px] text-[#5F6368] leading-tight mt-0.5">
                        Finance, Supply Chain &amp; BC
                      </div>
                    </div>
                  </Link>

                  {/* Dropdown Bottom Banner */}
                  <div className="pt-2 border-t border-neutral-100 px-2 flex items-center justify-between text-[11px] text-[#5F6368]">
                    <span className="flex items-center gap-1 font-semibold text-neutral-600">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                      ZATCA Phase 2 Ready
                    </span>
                    <Link to="/services" className="font-bold text-[#E50914] hover:underline flex items-center gap-1">
                      <span>All Services</span>
                      <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/industries" className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Industries
            </NavLink>
            <NavLink to="/portfolio" className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Portfolio
            </NavLink>
            <NavLink to="/about" className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              About
            </NavLink>
            <NavLink to="/blog" className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Blog
            </NavLink>
            <NavLink to="/contact" className={({ isActive }) => `hover:text-[#E50914] transition-colors py-2 ${isActive ? 'text-[#E50914]' : ''}`}>
              Contact
            </NavLink>
          </nav>

          {/* Primary CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Link 
              to="/book-free-consultation" 
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

          {/* Platforms in Mobile Drawer with Original Logos */}
          <div className="space-y-2 border-b border-[#e7e7e7] pb-4">
            <div className="text-xs uppercase font-extrabold text-[#E50914] tracking-wider">Enterprise Platforms</div>
            <div className="space-y-1.5 pt-1">
              <Link to="/oracle-erp-services" className="flex items-center gap-3 p-2 rounded-xl bg-neutral-50 hover:bg-red-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#F80000] p-1 flex items-center justify-center flex-shrink-0">
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
                    <path d="M12 7c-3.3 0-6 2.2-6 5s2.7 5 6 5 6-2.2 6-5-2.7-5-6-5zm0 8c-2.2 0-4-1.3-4-3s1.8-3 4-3 4 1.3 4 3-1.8 3-4 3z" fill="#FFFFFF" />
                  </svg>
                </div>
                <span>Oracle ERP Cloud</span>
              </Link>
              <Link to="/odoo-erp-services" className="flex items-center gap-3 p-2 rounded-xl bg-neutral-50 hover:bg-purple-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#714B67] p-1 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/odoo-official.svg" alt="Odoo" className="w-full h-full object-contain filter brightness-0 invert" />
                </div>
                <span>Odoo ERP Solutions</span>
              </Link>
              <Link to="/dynamics-365-services" className="flex items-center gap-3 p-2 rounded-xl bg-neutral-50 hover:bg-blue-50 text-sm font-bold text-neutral-800 hover:text-[#E50914] transition-colors">
                <div className="w-7 h-7 rounded-lg bg-[#002050] p-1 flex items-center justify-center flex-shrink-0">
                  <img src="/logos/dynamics-365-official.svg" alt="Dynamics 365" className="w-full h-full object-contain" />
                </div>
                <span>Microsoft Dynamics 365</span>
              </Link>
            </div>
          </div>

          {/* Services Accordion List in Mobile */}
          <div className="space-y-2 border-b border-[#e7e7e7] pb-4">
            <div className="text-xs uppercase font-extrabold text-[#E50914] tracking-wider">ERP &amp; Digital Services</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
              <Link to="/erp-consulting" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">ERP Consulting</Link>
              <Link to="/erp-implementation" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">ERP Implementation</Link>
              <Link to="/erp-migration" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">ERP Migration</Link>
              <Link to="/data-migration" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Data Migration</Link>
              <Link to="/managed-support" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Managed Support</Link>
              <Link to="/web-development" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Web Development</Link>
              <Link to="/cloud-solutions" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Cloud Solutions</Link>
              <Link to="/cyber-security" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Cyber Security</Link>
              <Link to="/ai-automation-solutions" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">AI Automation</Link>
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
