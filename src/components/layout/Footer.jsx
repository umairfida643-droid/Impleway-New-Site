import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { navigation } from '../../data/navigation';
import { BrandLogo } from '../ui/BrandLogo';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#e5e5e5] pt-16 pb-16 sm:pb-20 border-t border-neutral-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid: 5 Separate Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12 gap-8 lg:gap-8 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand & KSA Regional Vision */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3 space-y-4">
            <Link to="/" className="inline-flex items-center select-none py-1" aria-label="Impleway – Enterprise ERP & IT">
              <BrandLogo variant="light" className="h-8 sm:h-9" />
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Empowering enterprise growth through practical ERP consulting, zero data-loss migration, and certified electronic invoicing solutions across the Kingdom of Saudi Arabia and global markets.
            </p>

            {/* Original ZATCA & Saudi Vision 2030 Logos */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors">
                <img 
                  src="/logos/zatca-logo.svg" 
                  alt="ZATCA logo — Saudi Zakat, Tax and Customs Authority" 
                  className="h-5 w-auto object-contain brightness-0 invert opacity-95" 
                />
                <span className="text-[11px] font-bold text-neutral-300">Phase 2 Certified</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-neutral-900 border border-neutral-800 hover:border-emerald-500/50 transition-colors">
                <img 
                  src="/logos/saudi-vision-2030.svg" 
                  alt="Saudi Vision 2030 logo" 
                  className="h-5 w-auto object-contain brightness-0 invert opacity-95" 
                />
                <span className="text-[11px] font-bold text-neutral-300">Vision 2030</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              <a 
                href={siteConfig.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-[#E50914] transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
              </a>
              <a 
                href={siteConfig.contact.ksa.whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 transition-all"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Core Services */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">ERP Services</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {navigation.footerNav.services.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#E50914] transition-colors flex items-center gap-1">
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: PLATFORMS */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              PLATFORMS
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link to="/oracle-erp-services" className="hover:text-[#E50914] transition-colors block">
                  Oracle ERP Cloud
                </Link>
              </li>
              <li>
                <Link to="/odoo-erp-services" className="hover:text-[#E50914] transition-colors block">
                  Odoo ERP Solutions
                </Link>
              </li>
              <li>
                <Link to="/dynamics-365-services" className="hover:text-[#E50914] transition-colors block">
                  Microsoft Dynamics 365
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: ABOUT */}
          <div className="lg:col-span-2">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              ABOUT
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <Link to="/about" className="hover:text-[#E50914] transition-colors block">
                  About Us
                </Link>
              </li>
              <li>
                <a 
                  href="/Impleway-KSA-Company-Profile_compressed.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-[#E50914] transition-colors inline-flex items-center gap-1.5"
                >
                  <span>Company Profile</span>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 bg-red-500/20 text-red-400 rounded border border-red-500/30">PDF</span>
                </a>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#E50914] transition-colors block">
                  Portfolio &amp; Case Studies
                </Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#E50914] transition-colors block">
                  Industries Served
                </Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E50914] transition-colors block">
                  Insights &amp; Articles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#E50914] transition-colors block">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 5: OFFICIAL CONTACT */}
          <div className="col-span-1 sm:col-span-2 md:col-span-3 lg:col-span-3">
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">
              OFFICIAL CONTACT
            </h4>
            <div className="space-y-4 text-sm">
              
              {/* KSA Contact */}
              <div className="space-y-1">
                <div className="text-xs font-black text-[#E50914] flex items-center gap-1.5 uppercase tracking-wide">
                  <span className="font-extrabold">SA</span>
                  <span>IMPLEWAY KSA</span>
                </div>
                <a 
                  href={`tel:${siteConfig.contact.ksa.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-2 text-base sm:text-lg font-black text-white hover:text-[#E50914] transition-colors tracking-tight"
                >
                  <Phone className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                  <span>{siteConfig.contact.ksa.phone}</span>
                </a>
                <a 
                  href={siteConfig.contact.ksa.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#10B981]" />
                  <span>WhatsApp KSA</span>
                </a>
              </div>

              {/* Thin Divider Line */}
              <div className="border-t border-neutral-800/80 my-3"></div>

              {/* PK Contact */}
              <div className="space-y-1">
                <div className="text-xs font-black text-[#F59E0B] flex items-center gap-1.5 uppercase tracking-wide">
                  <span className="font-extrabold">PK</span>
                  <span>IMPLEWAY PK</span>
                </div>
                <a 
                  href={`tel:${siteConfig.contact.pk.phone.replace(/\s+/g, '')}`} 
                  className="flex items-center gap-2 text-base sm:text-lg font-black text-white hover:text-[#E50914] transition-colors tracking-tight"
                >
                  <Phone className="w-4 h-4 text-[#E50914] flex-shrink-0" />
                  <span>{siteConfig.contact.pk.phone}</span>
                </a>
                <a 
                  href={siteConfig.contact.pk.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#10B981] hover:text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 fill-[#10B981]" />
                  <span>WhatsApp PK</span>
                </a>
              </div>

              {/* Email Inquiry */}
              <div className="pt-3 border-t border-neutral-800/80">
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-[#E50914] transition-colors flex items-center gap-2 text-neutral-300 font-semibold text-xs sm:text-sm"
                >
                  <Mail className="w-4 h-4 text-[#E50914]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 pb-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Impleway. All rights reserved. Enterprise ERP & IT Digital Solutions.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link to="/sitemap" className="hover:text-white text-neutral-300 font-semibold transition-colors">Sitemap</Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">Support SLA</Link>
          </div>
        </div>

        {/* Giant Faded Red IMPLEWAY Wordmark at the Very End of Footer */}
        <div className="pt-6 pb-2 overflow-hidden select-none pointer-events-none relative flex justify-center items-center w-full">
          {/* Subtle Ambient Red Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-24 bg-[#E50914]/10 blur-3xl pointer-events-none rounded-full"></div>
          
          <span className="relative z-10 block font-black text-transparent bg-clip-text bg-gradient-to-b from-[#E50914]/50 via-[#E50914]/25 to-[#E50914]/5 w-full text-center uppercase tracking-tighter leading-none select-none font-sans" style={{fontSize: 'clamp(72px, 16vw, 200px)', letterSpacing: '-0.02em'}}>
            IMPLEWAY
          </span>
        </div>

      </div>
    </footer>
  );
};
