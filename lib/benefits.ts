import type { LucideIcon } from "lucide-react";
import {
  TrendingUp,
  Shield,
  Stethoscope,
  Palmtree,
  Bus,
  Wallet,
  Utensils,
  Award,
  HeartHandshake,
  Brain,
  PiggyBank,
  Baby,
  BookOpen,
  Users,
} from "lucide-react";

export type BenefitCategory = "health" | "money" | "time" | "growth";

export type Benefit = {
  name: string;
  icon: LucideIcon;
  blurb: string;
  category: BenefitCategory;
};

export const benefitCategories: {
  key: BenefitCategory;
  label: string;
  description: string;
}[] = [
  {
    key: "health",
    label: "Health & wellness",
    description: "Coverage and care for you and the people you love.",
  },
  {
    key: "money",
    label: "Money",
    description: "Competitive pay, serious compounding, and everyday perks.",
  },
  {
    key: "time",
    label: "Time off",
    description: "Room for the rest of your life — family, travel, rest.",
  },
  {
    key: "growth",
    label: "Growth",
    description: "Investments in what you&rsquo;re going to be good at next.",
  },
];

export const benefits: Benefit[] = [
  // ----- HEALTH & WELLNESS -----
  {
    name: "Health insurance",
    icon: Stethoscope,
    blurb:
      "Medical, dental, and vision plans designed for you and your family — localised to every region we hire in.",
    category: "health",
  },
  {
    name: "Mental-health support",
    icon: Brain,
    blurb:
      "EAP counselling, subscription therapy credits, and manager training so the work stays sustainable.",
    category: "health",
  },
  {
    name: "Family care",
    icon: HeartHandshake,
    blurb:
      "Dependant care, elder support, and on-call nurse line — because caring is a family sport.",
    category: "health",
  },

  // ----- MONEY -----
  {
    name: "Pay increases",
    icon: TrendingUp,
    blurb:
      "Performance-based raises every review cycle — no politics, no opacity. Metrics you can see.",
    category: "money",
  },
  {
    name: "Retirement match",
    icon: PiggyBank,
    blurb:
      "Up to 6% match on qualified retirement plans across our US, UK, and APAC regions.",
    category: "money",
  },
  {
    name: "Social security",
    icon: Shield,
    blurb:
      "Full statutory protection and retirement contributions in every region we hire.",
    category: "money",
  },
  {
    name: "Employee allowance",
    icon: Wallet,
    blurb:
      "Monthly allowance you can spend on what helps you work and live well.",
    category: "money",
  },
  {
    name: "Food vouchers",
    icon: Utensils,
    blurb:
      "Daily meal credits at partner restaurants and on-site cafés.",
    category: "money",
  },

  // ----- TIME OFF -----
  {
    name: "Paid vacation",
    icon: Palmtree,
    blurb:
      "Generous, accrue-as-you-go time off so you can actually unplug.",
    category: "time",
  },
  {
    name: "Parental leave",
    icon: Baby,
    blurb:
      "16+ weeks paid leave for new parents across all of our hiring regions, with a phased return option.",
    category: "time",
  },
  {
    name: "Transportation",
    icon: Bus,
    blurb:
      "Commuter support for hybrid teams and travel stipends where it makes sense.",
    category: "time",
  },

  // ----- GROWTH -----
  {
    name: "Team Manager University",
    icon: Users,
    blurb:
      "A 12-month internal academy for first-time and experienced frontline leaders.",
    category: "growth",
  },
  {
    name: "Learning stipend",
    icon: BookOpen,
    blurb:
      "Annual budget for books, conferences, and certifications — no approval pyramid.",
    category: "growth",
  },
  {
    name: "Recognition programs",
    icon: Award,
    blurb:
      "Peer shout-outs, quarterly awards, and a culture that celebrates wins.",
    category: "growth",
  },
];
