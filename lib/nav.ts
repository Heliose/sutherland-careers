export type NavLink = {
  label: string;
  href: string;
  description?: string;
  children?: NavLink[];
};

export type MegaGroup = {
  heading: string;
  links: NavLink[];
};

export type MegaFeature = {
  eyebrow: string;
  title: string;
  body: string;
  href: string;
  cta: string;
  tone: "purple" | "magenta" | "ocean" | "sunset" | "ruby";
};

export type NavItem = {
  label: string;
  href: string;
  megaGroups?: MegaGroup[];
  megaFeature?: MegaFeature;
};

export const primaryNav: NavItem[] = [
  {
    label: "Home",
    href: "/",
    megaGroups: [
      {
        heading: "Start here",
        links: [
          { label: "Browse all jobs", href: "/job-results", description: "1,427 roles open across 19 countries" },
          { label: "Life at Sutherland", href: "/sutherland-life", description: "Three ideas we live by" },
          { label: "Inclusion & Belonging", href: "/inclusion-belonging", description: "6 ERGs. 20+ languages." },
        ],
      },
      {
        heading: "Programmes",
        links: [
          { label: "Refer a friend", href: "/refer", description: "Submit. Earn. Smile." },
          { label: "Work from home", href: "/home-office", description: "Sutherland Anywhere" },
          { label: "Enterprise IT careers", href: "/enterprise", description: "Power up your IT career" },
          { label: "AI skill-matcher", href: "/skill-match", description: "Upload your resume, see matches" },
        ],
      },
    ],
    megaFeature: {
      eyebrow: "Featured programme",
      title: "Team Manager University",
      body:
        "A 12-month internal academy for first-time and experienced frontline leaders.",
      href: "/sutherland-life",
      cta: "Meet cohort 14",
      tone: "purple",
    },
  },
  { label: "Sutherland Life", href: "/sutherland-life" },
  { label: "Inclusion & Belonging", href: "/inclusion-belonging" },
  { label: "Careers", href: "/job-results" },
  {
    label: "Locations",
    href: "/locations",
    megaGroups: [
      {
        heading: "Regions",
        links: [
          { label: "North America", href: "/locations/north-america", description: "HQ in Rochester, NY · 9 offices" },
          { label: "Latin America", href: "/locations/latin-america", description: "15+ years across Mexico & Colombia" },
          { label: "Asia Pacific", href: "/locations/asia-pacific", description: "5 Centers of Excellence" },
          { label: "Europe", href: "/locations/europe", description: "Smart processes, end to end" },
          { label: "Middle East & North Africa", href: "/locations/mena", description: "Strategic insight, delivered" },
        ],
      },
      {
        heading: "Ways to work",
        links: [
          { label: "Work from home", href: "/home-office", description: "Remote-first roles worldwide" },
          { label: "On-site offices", href: "/locations", description: "60+ offices across 19 countries" },
          { label: "Hybrid programmes", href: "/home-office", description: "Two or three days in the office" },
        ],
      },
    ],
    megaFeature: {
      eyebrow: "Global footprint",
      title: "60+ offices. 19 countries.",
      body:
        "Every region hires across every function. Pick where you want to build.",
      href: "/locations",
      cta: "Explore the map",
      tone: "ocean",
    },
  },
  { label: "Contact", href: "/contact" },
];

export const utilityNav: NavLink[] = [
  { label: "Sign in", href: "/register" },
  { label: "Register", href: "/register" },
];

export const languages = [
  "English",
  "Español",
  "Français",
  "Deutsch",
  "Italiano",
  "Português",
  "Български",
  "العربية",
  "日本語",
  "中文",
];

export const footerColumns: { title: string; links: NavLink[] }[] = [
  {
    title: "Explore",
    links: [
      { label: "Home", href: "/" },
      { label: "Sutherland Life", href: "/sutherland-life" },
      { label: "Inclusion & Belonging", href: "/inclusion-belonging" },
      { label: "Search jobs", href: "/job-results" },
    ],
  },
  {
    title: "Programs",
    links: [
      { label: "Refer a friend", href: "/refer" },
      { label: "Work from home", href: "/home-office" },
      { label: "Enterprise IT", href: "/enterprise" },
      { label: "AI skill-matcher", href: "/skill-match" },
      { label: "Apply now", href: "/job-application" },
    ],
  },
  {
    title: "Locations",
    links: [
      { label: "North America", href: "/locations/north-america" },
      { label: "Latin America", href: "/locations/latin-america" },
      { label: "Asia Pacific", href: "/locations/asia-pacific" },
      { label: "Europe", href: "/locations/europe" },
      { label: "MENA", href: "/locations/mena" },
    ],
  },
  {
    title: "Connect",
    links: [
      { label: "Contact us", href: "/contact" },
      { label: "Register", href: "/register" },
      { label: "LinkedIn", href: "#" },
      { label: "Twitter / X", href: "#" },
    ],
  },
];
