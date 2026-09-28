import React from 'react';
import { 
  Briefcase, Settings2, RefreshCw, Database, GitMerge, Sliders, 
  GraduationCap, Headphones, Cloud, ShieldCheck, Laptop, 
  Bot, Globe, TrendingUp, PenTool, ShoppingCart, Zap, 
  Megaphone, Layers, Smartphone, Layout, Palette, Search, 
  FileCode, Wrench, ShieldAlert 
} from 'lucide-react';
import { OracleIcon, OdooIcon, Dynamics365Icon } from './PlatformIcons';

const ICON_MAP = {
  "erp-consulting": Briefcase,
  "erp-implementation": Settings2,
  "erp-migration": RefreshCw,
  "data-migration": Database,
  "erp-integration": GitMerge,
  "erp-customization": Sliders,
  "user-training": GraduationCap,
  "managed-support": Headphones,
  "cloud-solutions": Cloud,
  "cyber-security": ShieldCheck,
  "custom-software-development": Laptop,
  "ai-automation-solutions": Bot,
  "web-development": Globe,
  "wordpress-development": FileCode,
  "ecommerce-development": ShoppingCart,
  "ui-ux-design": Palette,
  "seo-services": Search,
  "seo-optimization": TrendingUp,
  "digital-marketing": Megaphone,
  "mobile-app-development": Smartphone,
  "it-support-maintenance": Wrench,
  "content-writing": PenTool,
  "ecommerce-management": ShoppingCart,
  "speed-optimization": Zap,
  "meta-ads-management": Megaphone,
  "oracle-erp-services": OracleIcon,
  "odoo-erp-services": OdooIcon,
  "dynamics-365-services": Dynamics365Icon
};

export const ServiceIcon = ({ slug, className = "w-5 h-5" }) => {
  const Component = ICON_MAP[slug] || Layers;
  return <Component className={className} />;
};
