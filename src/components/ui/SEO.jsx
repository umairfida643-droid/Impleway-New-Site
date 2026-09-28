import React, { useEffect } from 'react';

export const SEO = ({ 
  title, 
  description = "Impleway provides enterprise ERP consulting, implementation, migration, and digital IT transformation for businesses in Saudi Arabia and international markets.",
  canonical,
  ogType = "website",
  ogImage = "https://impleway.com/wp-content/uploads/2026/06/cropped-fav-192x192.png"
}) => {
  useEffect(() => {
    const fullTitle = title ? `${title} | Impleway` : "Impleway – Simplify, Implementation | Enterprise ERP & IT";
    document.title = fullTitle;

    // Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    // Update OpenGraph tags
    const ogTags = {
      'og:title': fullTitle,
      'og:description': description,
      'og:type': ogType,
      'og:image': ogImage,
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

  }, [title, description, canonical, ogType, ogImage]);

  return null;
};
