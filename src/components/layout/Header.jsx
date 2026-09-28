import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { 
  Phone, Mail, MessageSquare, ChevronDown, Menu, X, ArrowRight, 
  ExternalLink, Layers, ShieldCheck, Sparkles, Building2, Globe
} from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { navigation } from '../../data/navigation';

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [platformsDropdownOpen, setPlatformsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  const location = useLocation();
  const megaMenuRef = useRef(null);

  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
    setPlatformsDropdownOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
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

          {/* Direct WhatsApp Quick Connects */}
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs hidden lg:inline">Instant WhatsApp Support:</span>
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
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-1.5 text-2xl sm:text-3xl font-black tracking-tighter text-[#050505] select-none">
            <span>Impleway</span>
            <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] inline-block mb-1 animate-pulse"></span>
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
                            className="group/item block p-2 rounded-lg hover:bg-[#F6F6F6] transition-colors"
                          >
                            <div className="text-[14px] font-bold text-[#111111] group-hover/item:text-[#E50914] transition-colors">
                              {item.name}
                            </div>
                            <div className="text-[11px] text-[#5F6368] leading-tight">
                              {item.desc}
                            </div>
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

            {/* Platforms Dropdown */}
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
                <div className="absolute top-full left-0 w-64 bg-white rounded-xl shadow-xl border border-[#e7e7e7] p-2 space-y-1 animate-in fade-in slide-in-from-top-2 duration-150 z-50">
                  <Link 
                    to="/oracle-erp-services" 
                    className="block p-2.5 rounded-lg hover:bg-[#F6F6F6] transition-colors"
                  >
                    <div className="text-sm font-bold text-[#111111] hover:text-[#E50914]">Oracle ERP Cloud</div>
                    <span className="text-[10px] uppercase font-extrabold text-[#E50914] bg-red-50 px-1.5 py-0.5 rounded">Enterprise Tier</span>
                  </Link>
                  <Link 
                    to="/odoo-erp-services" 
                    className="block p-2.5 rounded-lg hover:bg-[#F6F6F6] transition-colors"
                  >
                    <div className="text-sm font-bold text-[#111111] hover:text-[#E50914]">Odoo ERP Solutions</div>
                    <span className="text-[10px] uppercase font-extrabold text-purple-700 bg-purple-50 px-1.5 py-0.5 rounded">Agile & Scalable</span>
                  </Link>
                  <Link 
                    to="/dynamics-365-services" 
                    className="block p-2.5 rounded-lg hover:bg-[#F6F6F6] transition-colors"
                  >
                    <div className="text-sm font-bold text-[#111111] hover:text-[#E50914]">Microsoft Dynamics 365</div>
                    <span className="text-[10px] uppercase font-extrabold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Cloud Native</span>
                  </Link>
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

          {/* Services Accordion List in Mobile */}
          <div className="space-y-2 border-b border-[#e7e7e7] pb-4">
            <div className="text-xs uppercase font-extrabold text-[#E50914] tracking-wider">ERP & Digital Services</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1 pt-1">
              <Link to="/oracle-erp-services" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Oracle ERP Cloud</Link>
              <Link to="/odoo-erp-services" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Odoo ERP</Link>
              <Link to="/dynamics-365-services" className="py-1 text-sm font-semibold text-neutral-700 hover:text-[#E50914]">Microsoft Dynamics 365</Link>
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
    </header>
  );
};
