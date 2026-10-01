import React from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '../components/ui/SEO';
import { Home } from 'lucide-react';

export const NotFoundPage = () => {
  return (
    <>
      <SEO 
        title="404 — Page Not Found | Impleway"
        description="Page not found."
      />

      <section className="min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 bg-radial-hero text-white text-center">
        <div className="max-w-md mx-auto space-y-6">
          <h1 className="text-7xl sm:text-8xl font-black text-white tracking-tighter">
            404
          </h1>

          <p className="text-lg sm:text-xl font-bold text-neutral-200">
            Page not found
          </p>

          <div className="pt-2">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-black text-xs text-white bg-gradient-to-r from-[#E50914] to-[#9F0712] shadow-lg hover:shadow-xl transition-all"
            >
              <Home className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};
