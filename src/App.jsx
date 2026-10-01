import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageLoader } from './components/ui/PageLoader';

// Route-level Code Splitting for all pages
const HomePage = lazy(() => import('./pages/HomePage').then(m => ({ default: m.HomePage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const PlatformDetailPage = lazy(() => import('./pages/PlatformDetailPage').then(m => ({ default: m.PlatformDetailPage })));
const IndustriesPage = lazy(() => import('./pages/IndustriesPage').then(m => ({ default: m.IndustriesPage })));
const PortfolioPage = lazy(() => import('./pages/PortfolioPage').then(m => ({ default: m.PortfolioPage })));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const BlogListingPage = lazy(() => import('./pages/BlogListingPage').then(m => ({ default: m.BlogListingPage })));
const BlogDetailPage = lazy(() => import('./pages/BlogDetailPage').then(m => ({ default: m.BlogDetailPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const SitemapPage = lazy(() => import('./pages/SitemapPage').then(m => ({ default: m.SitemapPage })));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage').then(m => ({ default: m.NotFoundPage })));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
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
            <Route path="book-free-consultation" element={<Navigate to="/contact" replace />} />
            
            {/* Detailed Architecture Sitemap */}
            <Route path="sitemap" element={<SitemapPage />} />

            {/* Dynamic Service Routes */}
            <Route path=":slug" element={<ServiceDetailPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
