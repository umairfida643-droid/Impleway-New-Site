import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Home, ArrowRight, Search, ShieldAlert } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="404 — Page Not Found | Impleway"
        description="The page you are looking for has been moved or does not exist. Explore Impleway's enterprise ERP services, case studies, and insights."
      />

      <section className="min-h-[70vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-radial-hero text-white text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>404 Error: Resource Not Found</span>
          </div>

          <h1 className="text-6xl sm:text-8xl font-black text-white tracking-tighter">
            404
          </h1>

          <h2 className="text-2xl sm:text-3xl font-black text-white">
            Looking for an Impleway Solution?
          </h2>

          <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
            The link you accessed may have been updated in our new platform rebuild. Explore our core services or return to the main dashboard.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-lg hover:shadow-xl transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
