import React from 'react';
import { 
  Factory, ShoppingBag, Truck, HeartPulse, Building, Flame, 
  Car, Home, Utensils, Compass, Coins, GraduationCap, Landmark, 
  Sprout, Pickaxe, Pill, Plane, FlaskConical, Wifi, Briefcase, 
  Layers
} from 'lucide-react';

const ICON_MAP = {
  manufacturing: Factory,
  retail: ShoppingBag,
  distribution: Truck,
  healthcare: HeartPulse,
  construction: Building,
  "oil-gas": Flame,
  automotive: Car,
  "real-estate": Home,
  "food-beverage": Utensils,
  hospitality: Compass,
  "financial-services": Coins,
  education: GraduationCap,
  government: Landmark,
  agriculture: Sprout,
  mining: Pickaxe,
  pharma: Pill,
  aerospace: Plane,
  chemicals: FlaskConical,
  telecom: Wifi,
  "professional-services": Briefcase
};

export const IndustryIcon = ({ slug, className = "w-5 h-5" }) => {
  const IconComponent = ICON_MAP[slug] || Layers;
  return <IconComponent className={className} />;
};
