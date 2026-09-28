import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';

// Pages
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { PlatformDetailPage } from './pages/PlatformDetailPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { BlogListingPage } from './pages/BlogListingPage';
import { BlogDetailPage } from './pages/BlogDetailPage';
import { ContactPage } from './pages/ContactPage';
import { BookConsultationPage } from './pages/BookConsultationPage';
import { NotFoundPage } from './pages/NotFoundPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Main Pages */}
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="services" element={<ServicesPage />} />
          <Route path="industries" element={<IndustriesPage />} />
          
          {/* Platform Specific Routes */}
          <Route path="oracle-erp-services" element={<PlatformDetailPage forcedSlug="oracle-erp-services" />} />
          <Route path="odoo-erp-services" element={<PlatformDetailPage forcedSlug="odoo-erp-services" />} />
          <Route path="dynamics-365-services" element={<PlatformDetailPage forcedSlug="dynamics-365-services" />} />

          {/* Portfolio & Case Studies (Fixing the legacy 404) */}
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="project/:slug" element={<ProjectDetailPage />} />

          {/* Blog Engine (50 Articles) */}
          <Route path="blog" element={<BlogListingPage />} />
          <Route path="blog/:slug" element={<BlogDetailPage />} />

          {/* Contact & Consultation */}
          <Route path="contact" element={<ContactPage />} />
          <Route path="book-free-consultation" element={<BookConsultationPage />} />

          {/* Dynamic Service Routes */}
          <Route path=":slug" element={<ServiceDetailPage />} />

          {/* 404 Fallback */}
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
