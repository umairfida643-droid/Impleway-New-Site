import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { PageLoader } from './components/ui/PageLoader';

// Core Landing Page - loaded eagerly for instant FCP (First Contentful Paint)
import { HomePage } from './pages/HomePage';

// Route-level Code Splitting for secondary pages & heavy data engines
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
const BookConsultationPage = lazy(() => import('./pages/BookConsultationPage').then(m => ({ default: m.BookConsultationPage })));
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
            <Route path="book-free-consultation" element={<BookConsultationPage />} />

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
