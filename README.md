# Impleway — Enterprise ERP & Digital Transformation Platform

> **Modernized, Production-Ready React Application** built for high-growth enterprises and operations across the **Kingdom of Saudi Arabia (KSA)** and global markets.

---

## 🌟 Executive Overview & Key Accomplishments

This repository is a complete, premium rebuild and modernization of `https://impleway.com/`, transitioning from a legacy WordPress architecture to a high-performance **React.js** enterprise web application.

### Key Highlights:
1. **100% Brand & Design System Fidelity**:
   - Preserves the signature black (`#050505`), Netflix/Oracle vibrant red (`#E50914`), dark red (`#9F0712`), and clean neutral white/gray canvas.
   - Refined typography hierarchy, tight enterprise tracking, consistent card spacing, and subtle 3D hover physics.
2. **Fixed All Critical Legacy 404s & Broken Flows**:
   - Fixed the primary navigation header's broken **Portfolio (`/portfolio`)** page with a rich case studies gallery and category filtering.
   - Fixed the global bottom-left floating **"Company Profile"** button, replacing the dead 404 URL with an interactive executive credentials & RFP modal.
   - Corrected multiple conflicting phone numbers across the site to the official authorized channels.
3. **Official Regional Contact Channels (Enforced Everywhere)**:
   - 🇸🇦 **IMPLEWAY KSA**: `+966 59 814 5042` (Call & WhatsApp)
   - 🇵🇰 **IMPLEWAY PK**: `+92 339 2244790` (Call & WhatsApp)
   - ✉️ **Email**: `hey@impleway.com`
4. **Complete 50-Article In-Depth Blog System**:
   - Features **50 comprehensive technical guides and playbooks**.
   - **100% Preserved Wikipedia Hyperlinks**: Every existing Wikipedia reference (ERP, SCM, WMS, ETL, Zero Trust, ISO 27001, etc.) has been meticulously preserved with anchor text, contextual placement, and external opening attributes intact.
   - Rich technical KSA compliance guides including ZATCA Phase-2 (FATOORA) e-invoicing clearance, Saudi Vision 2030, GOSI labor payroll compliance, and NIDLP supply chain localization.
5. **Full Suite of 20+ Enterprise Services & Platform Hubs**:
   - Replaced all 39 empty WordPress placeholder pages with rich, structured 10-section blueprints for Oracle Cloud, Odoo, Dynamics 365, and specialized IT services.

---

## 🚀 Tech Stack

- **Framework**: React 19 / Vite 8
- **Routing**: React Router DOM v7 (Clean semantic client-side routing)
- **Styling**: Tailwind CSS v4 + Custom Enterprise Design System
- **Icons**: Lucide React (Tree-shaken, zero-network-delay inline SVGs)
- **SEO & Structured Data**: Dynamic document title, meta descriptions, OpenGraph, XML sitemap (`/sitemap.xml`), and `robots.txt`
- **Build Performance**: Sub-second compilation (< 650ms production builds)

---

## 📁 Project Structure

```
impleway-app/
├── public/
│   ├── favicon.svg             # High-res vector favicon
│   ├── robots.txt              # Production crawler directives
│   └── sitemap.xml             # Complete 88+ URL XML sitemap
├── src/
│   ├── components/
│   │   ├── home/               # HeroSection (interactive telemetry), Stats, Platforms, Services, Process, Marquee, FAQs
│   │   ├── layout/             # Header (Mega Menu & region picker), Footer (KSA & PK hubs), FloatingCompanyProfile, Layout
│   │   └── ui/                 # SEO, Breadcrumbs, ScrollToTop
│   ├── data/
│   │   ├── siteConfig.js       # Official KSA/PK contacts, stats, social links
│   │   ├── navigation.js       # Mega menu taxonomy and footer tree
│   │   ├── servicesData.js     # 21 deep-dive service specifications
│   │   ├── platformsData.js    # Oracle Cloud, Odoo, Dynamics 365
│   │   ├── industriesData.js   # Manufacturing, Retail, Logistics, Healthcare, Construction, Services
│   │   ├── projectsData.js     # 6 verified client case studies
│   │   └── blogsData.js        # 50 complete articles with preserved Wikipedia links
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── AboutPage.jsx
│   │   ├── ServicesPage.jsx
│   │   ├── ServiceDetailPage.jsx
│   │   ├── PlatformDetailPage.jsx
│   │   ├── IndustriesPage.jsx
│   │   ├── PortfolioPage.jsx
│   │   ├── ProjectDetailPage.jsx
│   │   ├── BlogListingPage.jsx
│   │   ├── BlogDetailPage.jsx
│   │   ├── ContactPage.jsx
│   │   ├── BookConsultationPage.jsx
│   │   └── NotFoundPage.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── package.json
└── vite.config.js
```

---

## 🛠️ Local Development & Deployment

### Prerequisites
- Node.js `v18+` or `v24+`
- npm `v9+` or `v11+`

### Installation
```bash
# Clone the repository
git clone https://github.com/umairfida643-droid/Impleway-New-Site.git

# Navigate to project directory
cd "Impleway-New-Site"

# Install dependencies
npm install

# Launch development server
npm run dev
```

### Production Build
```bash
# Build optimized production bundle into /dist
npm run build

# Preview production build locally
npm run preview
```

---

## 🇸🇦 Saudi Arabian (KSA) Market Specialization

- **ZATCA Phase 2 E-Invoicing**: Full architectural integration workflows for B2B clearance and B2C reporting via FATOORA APIs.
- **Bilingual Context**: Designed with localization readiness for Saudi enterprises operating across Riyadh, Jeddah, Dammam, and NEOM.
- **Verified Regional Numbers**: Direct WhatsApp and phone routing for Saudi decision-makers.

---

## 📄 License & Ownership
Copyright © 2026 Impleway. All rights reserved.
