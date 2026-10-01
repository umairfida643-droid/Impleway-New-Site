import React, { useEffect } from 'react';

export const buildTitle = (title) => {
  if (!title) {
    return "Impleway – Simplify Implementation | Enterprise ERP & IT";
  }

  const t = title.trim();
  if (
    t === "Impleway – Simplify Implementation | Enterprise ERP & IT" ||
    t === "Impleway – Simplify, Implementation | Enterprise ERP & IT"
  ) {
    return "Impleway – Simplify Implementation | Enterprise ERP & IT";
  }

  let clean = t;
  let modified = true;
  while (modified) {
    modified = false;
    for (const suffix of ['| Impleway', '- Impleway', '| Impleway Insights', '| Impleway Blog']) {
      if (clean.endsWith(suffix)) {
        clean = clean.slice(0, -suffix.length).trim();
        modified = true;
      }
    }
  }

  return `${clean} | Impleway`;
};

const DEFAULT_ORG_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Impleway",
  "url": "https://impleway.com/",
  "logo": "https://impleway.com/logo.png",
  "sameAs": [
    "https://www.facebook.com/heyimpleway/",
    "https://www.instagram.com/impleway",
    "https://www.tiktok.com/@impleway",
    "https://www.linkedin.com/company/impleway/"
  ],
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "telephone": "+966 59 814 5042",
      "contactType": "customer service",
      "areaServed": "SA"
    },
    {
      "@type": "ContactPoint",
      "telephone": "+92 339 2244790",
      "contactType": "customer service",
      "areaServed": "PK"
    }
  ],
  "email": "hey@impleway.com"
};

export const SEO = ({ 
  title, 
  description = "Impleway provides enterprise ERP consulting, implementation, data migration, and ZATCA compliance across Oracle Cloud, Odoo, and Microsoft Dynamics 365 in Saudi Arabia and global markets.",
  canonical,
  ogType = "website",
  ogImage = "https://impleway.com/og-image.png",
  schema = null
}) => {
  useEffect(() => {
    const fullTitle = buildTitle(title);
    document.title = fullTitle;

    // 1. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // 2. Canonical URL
    const canonicalUrl = canonical || (typeof window !== 'undefined' ? `https://impleway.com${window.location.pathname}` : 'https://impleway.com/');
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonicalUrl;

    // 3. OpenGraph tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:type': ogType,
      'og:url': canonicalUrl,
      'og:image': ogImage,
      'og:image:width': '1200',
      'og:image:height': '630',
      'og:image:alt': 'Impleway — Enterprise ERP & Digital Transformation',
      'og:site_name': 'Impleway'
    };

    Object.entries(ogTags).forEach(([property, content]) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // 4. Twitter Card tags
    const twitterTags = {
      'twitter:card': 'summary_large_image',
      'twitter:title': fullTitle,
      'twitter:description': description,
      'twitter:image': ogImage
    };

    Object.entries(twitterTags).forEach(([name, content]) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.content = content;
    });

    // 5. JSON-LD Structured Data
    // Ensure default organization schema script exists
    let orgScript = document.getElementById('json-ld-org');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.id = 'json-ld-org';
      orgScript.type = 'application/ld+json';
      orgScript.textContent = JSON.stringify(DEFAULT_ORG_SCHEMA);
      document.head.appendChild(orgScript);
    }

    // Page-specific schema (FAQPage, LocalBusiness, etc.)
    let pageScript = document.getElementById('json-ld-page');
    if (schema) {
      if (!pageScript) {
        pageScript = document.createElement('script');
        pageScript.id = 'json-ld-page';
        pageScript.type = 'application/ld+json';
        document.head.appendChild(pageScript);
      }
      pageScript.textContent = JSON.stringify(schema);
    } else if (pageScript) {
      pageScript.remove();
    }

    return () => {
      // Clean up page-specific schema on unmount
      const existingPageScript = document.getElementById('json-ld-page');
      if (existingPageScript) {
        existingPageScript.remove();
      }
    };
  }, [title, description, canonical, ogType, ogImage, schema]);

  return null;
};
