/**
 * Intelligent Route Prefetcher
 * Triggers lazy-loaded route chunk download on user hover or focus,
 * ensuring instantaneous 0ms perceived navigation transition.
 */
export const prefetchRoute = (route) => {
  switch (route) {
    case 'about':
      import('../pages/AboutPage');
      break;
    case 'services':
      import('../pages/ServicesPage');
      break;
    case 'industries':
      import('../pages/IndustriesPage');
      break;
    case 'portfolio':
      import('../pages/PortfolioPage');
      break;
    case 'blog':
      import('../pages/BlogListingPage');
      break;
    case 'contact':
      import('../pages/ContactPage');
      break;
    case 'consultation':
      import('../pages/BookConsultationPage');
      break;
    case 'oracle':
    case 'odoo':
    case 'dynamics':
      import('../pages/PlatformDetailPage');
      break;
    default:
      break;
  }
};
