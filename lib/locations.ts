export type Office = {
  city: string;
  state?: string;
  country: string;
  phone?: string;
  isHQ?: boolean;
};

export type Region = {
  slug: string;
  name: string;
  short: string;
  tagline: string;
  blurb: string;
  countries: string[];
  offices?: Office[];
  openRoles: number;
};

export const regions: Region[] = [
  {
    slug: "north-america",
    name: "North America",
    short: "NA",
    tagline: "Headquartered in Rochester, operating everywhere it matters.",
    blurb:
      "From our global headquarters in Rochester, New York, our North America team partners with clients across every sector to turn transformation ambition into everyday reality.",
    countries: ["United States", "Canada", "Jamaica"],
    offices: [
      { city: "Rochester", state: "NY", country: "United States", phone: "+1 585-498-2000", isHQ: true },
      { city: "Pittsford", state: "NY", country: "United States", phone: "+1 585-264-5600" },
      { city: "Clifton", state: "NJ", country: "United States", phone: "+1 973-574-1111" },
      { city: "Chesapeake", state: "VA", country: "United States", phone: "+1 757-366-0400" },
      { city: "San Francisco", state: "CA", country: "United States", phone: "+1 415-400-4000" },
      { city: "San Francisco (FiDi)", state: "CA", country: "United States", phone: "+1 415-400-4100" },
      { city: "Springfield", state: "IL", country: "United States", phone: "+1 217-698-3400" },
      { city: "Torrance", state: "CA", country: "United States", phone: "+1 310-784-7300" },
      { city: "Tulsa", state: "OK", country: "United States", phone: "+1 918-609-2900" },
    ],
    openRoles: 348,
  },
  {
    slug: "latin-america",
    name: "Latin America",
    short: "LATAM",
    tagline: "Fifteen+ years building careers across the region.",
    blurb:
      "Our Latin America team has spent more than fifteen years training, developing, and promoting extraordinary people who deliver services across industries and in multiple languages.",
    countries: ["Mexico", "Colombia"],
    openRoles: 212,
  },
  {
    slug: "asia-pacific",
    name: "Asia Pacific",
    short: "APAC",
    tagline: "Five Centers of Excellence. One connected platform.",
    blurb:
      "Established in 2002, our Asia Pacific team operates Centers of Excellence in Mumbai, Bangalore, Chennai, Hyderabad, and Kochi — critical hubs in our global delivery strategy.",
    countries: ["India", "Philippines", "Malaysia", "China"],
    openRoles: 514,
  },
  {
    slug: "europe",
    name: "Europe",
    short: "EU",
    tagline: "Smart processes, designed and delivered from the ground up.",
    blurb:
      "Our European teams have amassed deep expertise designing and delivering smart processes for some of the continent's most recognisable brands.",
    countries: ["Bulgaria", "Kosovo", "United Kingdom"],
    openRoles: 186,
  },
  {
    slug: "mena",
    name: "Middle East & North Africa",
    short: "MENA",
    tagline: "Strategic insight for the region's most ambitious institutions.",
    blurb:
      "In MENA we work alongside leading consulting firms, government institutions, and private conglomerates to bring world-class service delivery to the region.",
    countries: ["Egypt", "United Arab Emirates", "South Africa"],
    openRoles: 94,
  },
];

export const regionBySlug = (slug: string) =>
  regions.find((r) => r.slug === slug);
