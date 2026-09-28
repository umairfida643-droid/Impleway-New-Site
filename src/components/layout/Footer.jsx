import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, MessageSquare, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { siteConfig } from '../../data/siteConfig';
import { navigation } from '../../data/navigation';

export const Footer = () => {
  return (
    <footer className="bg-[#050505] text-[#e5e5e5] pt-16 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Column 1: Brand & KSA Regional Vision */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-1.5 text-3xl font-black tracking-tighter text-white">
              <span>Impleway</span>
              <span className="w-2.5 h-2.5 rounded-full bg-[#E50914] inline-block mb-1"></span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-sm">
              Empowering enterprise growth through practical ERP consulting, zero data-loss migration, and certified electronic invoicing solutions across the Kingdom of Saudi Arabia and global markets.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <ShieldCheck className="w-3.5 h-3.5 text-[#E50914]" />
                <span>ZATCA Phase 2 Ready</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300">
                <span>🇸🇦 KSA Vision 2030 Partner</span>
              </span>
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
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.45a1.6 1.6 0 0 0-1.6 1.6 1.6 1.6 0 0 0 1.6 1.6 1.6 1.6 0 0 0 1.6-1.6 1.6 1.6 0 0 0-1.6-1.6Z"/></svg>
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
          <div>
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

          {/* Column 3: Platforms & Company */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">Platforms & Info</h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              {navigation.footerNav.platforms.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.path} className="hover:text-[#E50914] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-neutral-900">
                <Link to="/about" className="hover:text-[#E50914] transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/portfolio" className="hover:text-[#E50914] transition-colors">Portfolio & Case Studies</Link>
              </li>
              <li>
                <Link to="/industries" className="hover:text-[#E50914] transition-colors">Industries Served</Link>
              </li>
              <li>
                <Link to="/blog" className="hover:text-[#E50914] transition-colors">Insights & Articles</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Official Contact Information */}
          <div>
            <h4 className="text-white font-extrabold text-sm uppercase tracking-wider mb-4">Official Contact</h4>
            <div className="space-y-4 text-sm text-neutral-300">
              
              {/* KSA Contact */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-[#E50914] flex items-center gap-1">
                  <span>🇸🇦 IMPLEWAY KSA</span>
                </div>
                <a 
                  href={`tel:${siteConfig.contact.ksa.phone.replace(/\\s+/g, '')}`} 
                  className="block font-semibold hover:text-[#E50914] transition-colors text-white"
                >
                  {siteConfig.contact.ksa.phone}
                </a>
                <a 
                  href={siteConfig.contact.ksa.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" /> WhatsApp KSA
                </a>
              </div>

              {/* PK Contact */}
              <div className="space-y-1 pt-2 border-t border-neutral-900">
                <div className="text-xs font-bold text-neutral-400 flex items-center gap-1">
                  <span>🇵🇰 IMPLEWAY PK</span>
                </div>
                <a 
                  href={`tel:${siteConfig.contact.pk.phone.replace(/\\s+/g, '')}`} 
                  className="block font-semibold hover:text-[#E50914] transition-colors text-white"
                >
                  {siteConfig.contact.pk.phone}
                </a>
                <a 
                  href={siteConfig.contact.pk.whatsappUrl} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs text-emerald-400 hover:underline flex items-center gap-1"
                >
                  <MessageSquare className="w-3 h-3" /> WhatsApp PK
                </a>
              </div>

              {/* Email */}
              <div className="pt-2 border-t border-neutral-900">
                <a 
                  href={`mailto:${siteConfig.contact.email}`} 
                  className="hover:text-[#E50914] transition-colors flex items-center gap-1.5 text-white font-medium"
                >
                  <Mail className="w-4 h-4 text-[#E50914]" />
                  <span>{siteConfig.contact.email}</span>
                </a>
              </div>

            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} Impleway. All rights reserved. Enterprise ERP & IT Digital Solutions.
          </div>
          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-neutral-300 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-neutral-300 transition-colors">Terms of Service</Link>
            <Link to="/contact" className="hover:text-neutral-300 transition-colors">Support SLA</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
