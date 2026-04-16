import type { LucideIcon } from "lucide-react";
import {
  Landmark,
  ShoppingBag,
  Radio,
  Plane,
  Zap,
  ShieldCheck,
  Cpu,
  HeartPulse,
  Home,
} from "lucide-react";

export type Industry = {
  slug: string;
  name: string;
  icon: LucideIcon;
  blurb: string;
};

export const industries: Industry[] = [
  {
    slug: "banking",
    name: "Banking",
    icon: Landmark,
    blurb: "Reimagining retail and commercial banking for a digital-first generation.",
  },
  {
    slug: "retail",
    name: "Retail",
    icon: ShoppingBag,
    blurb: "Connecting storefronts, marketplaces, and customer experiences end to end.",
  },
  {
    slug: "communications",
    name: "Communications",
    icon: Radio,
    blurb: "Simplifying how telecom and media brands reach and retain their subscribers.",
  },
  {
    slug: "travel-logistics",
    name: "Travel & Logistics",
    icon: Plane,
    blurb: "Moving people and parcels with smarter routing and always-on support.",
  },
  {
    slug: "energy",
    name: "Energy",
    icon: Zap,
    blurb: "Powering grids, utilities, and the energy transition with scalable operations.",
  },
  {
    slug: "insurance",
    name: "Insurance",
    icon: ShieldCheck,
    blurb: "Claims, underwriting, and policyholder experiences modernised for every channel.",
  },
  {
    slug: "technology",
    name: "Technology",
    icon: Cpu,
    blurb: "Engineering support and cloud services for the companies that build the future.",
  },
  {
    slug: "healthcare",
    name: "Healthcare",
    icon: HeartPulse,
    blurb: "Helping payers and providers deliver faster, more human care at scale.",
  },
  {
    slug: "mortgage",
    name: "Mortgage Services",
    icon: Home,
    blurb: "Processing, servicing, and compliance built for today's housing market.",
  },
];
