export const navigation = {
  mainNav: [
    { name: "Home", path: "/" },
    {
      name: "Services",
      path: "/services",
      hasMegaMenu: true,
      sections: [
        {
          title: "ERP Services",
          items: [
            { name: "ERP Consulting", path: "/erp-consulting", desc: "Roadmap, ROI & system selection" },
            { name: "ERP Implementation", path: "/erp-implementation", desc: "End-to-end setup & deployment" },
            { name: "ERP Migration", path: "/erp-migration", desc: "Zero data-loss platform transition" },
            { name: "ERP Integration", path: "/erp-integration", desc: "APIs, middleware & real-time sync" },
            { name: "ERP Customization", path: "/erp-customization", desc: "Bespoke workflows & reporting" },
            { name: "Data Migration", path: "/data-migration", desc: "ETL, validation & schema mapping" },
            { name: "User Training", path: "/user-training", desc: "Role-based training & change adoption" },
            { name: "Managed Support", path: "/managed-support", desc: "SLA-backed 24/7 post go-live operations" }
          ]
        },
        {
          title: "Digital Presence",
          items: [
            { name: "Web Development", path: "/web-development", desc: "Fast, modern web platforms" },
            { name: "WordPress Development", path: "/wordpress-development", desc: "Enterprise WordPress solutions" },
            { name: "E-Commerce Development", path: "/ecommerce-development", desc: "High-converting online stores" },
            { name: "UI/UX Design", path: "/ui-ux-design", desc: "User-centric interface architecture" },
            { name: "SEO Services", path: "/seo-services", desc: "Enterprise organic visibility" },
            { name: "Digital Marketing", path: "/digital-marketing", desc: "Multi-channel growth & acquisition" }
          ]
        },
        {
          title: "Software & Cloud IT",
          items: [
            { name: "Mobile App Development", path: "/mobile-app-development", desc: "iOS & Android enterprise apps" },
            { name: "Custom Software Development", path: "/custom-software-development", desc: "Tailored microservices & SaaS" },
            { name: "Cloud Solutions", path: "/cloud-solutions", desc: "AWS, Azure & hybrid cloud" },
            { name: "Cyber Security", path: "/cyber-security", desc: "Zero-trust & compliance audits" },
            { name: "AI Automation Solutions", path: "/ai-automation-solutions", desc: "Generative AI, OCR & RPA workflows" },
            { name: "IT Support & Maintenance", path: "/it-support-maintenance", desc: "Infrastructure monitoring & SLA" }
          ]
        }
      ]
    },
    {
      name: "Platforms",
      path: "/services",
      dropdown: [
        { name: "Oracle ERP Services", path: "/oracle-erp-services", badge: "Enterprise Tier" },
        { name: "Odoo ERP Services", path: "/odoo-erp-services", badge: "SME & Scale-Up" },
        { name: "Microsoft Dynamics 365", path: "/dynamics-365-services", badge: "Cloud Native" }
      ]
    },
    { name: "Industries", path: "/industries" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" }
  ],
  footerNav: {
    services: [
      { name: "ERP Consulting", path: "/erp-consulting" },
      { name: "ERP Implementation", path: "/erp-implementation" },
      { name: "ERP Migration", path: "/erp-migration" },
      { name: "Managed Support", path: "/managed-support" },
      { name: "Custom Software Development", path: "/custom-software-development" },
      { name: "Cloud & Cybersecurity", path: "/cyber-security" }
    ],
    platforms: [
      { name: "Oracle ERP Cloud", path: "/oracle-erp-services" },
      { name: "Odoo ERP Solutions", path: "/odoo-erp-services" },
      { name: "Microsoft Dynamics 365", path: "/dynamics-365-services" }
    ],
    company: [
      { name: "About Us", path: "/about" },
      { name: "Case Studies / Portfolio", path: "/portfolio" },
      { name: "Industries Served", path: "/industries" },
      { name: "Insights & Blog", path: "/blog" },
      { name: "Contact Us", path: "/contact" },
      { name: "Book Free Consultation", path: "/book-free-consultation" }
    ]
  }
};
