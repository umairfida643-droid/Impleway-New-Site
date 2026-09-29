import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { FloatingCompanyProfile } from './FloatingCompanyProfile';
import { AccessibilityWidget } from './AccessibilityWidget';
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
      <AccessibilityWidget />
      <FloatingWhatsApp />
      <div className="content-auto">
        <Footer />
      </div>
    </div>
  );
};
