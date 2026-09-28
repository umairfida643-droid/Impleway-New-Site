import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCompanyProfile } from './FloatingCompanyProfile';
import { FloatingWhatsApp } from './FloatingWhatsApp';
import { ScrollToTop } from '../ui/ScrollToTop';

export const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111] antialiased">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <FloatingCompanyProfile />
      <FloatingWhatsApp />
      <Footer />
    </div>
  );
};
