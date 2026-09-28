import React from 'react';
import { SEO } from '../components/ui/SEO';
import { Breadcrumbs } from '../components/ui/Breadcrumbs';
import { ContactPage } from './ContactPage';

export const BookConsultationPage = () => {
  return (
    <>
      <SEO 
        title="Book Free Enterprise Consultation | Impleway"
        description="Schedule a 45-minute zero-obligation ERP architecture and ZATCA compliance consultation with Impleway's senior engineers in Saudi Arabia and Pakistan."
      />
      <ContactPage />
    </>
  );
};
