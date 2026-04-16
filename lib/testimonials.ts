export type Testimonial = {
  name: string;
  role: string;
  location: string;
  tenure: string;
  quote: string;
  initials: string;
};

export const testimonials: Testimonial[] = [
  {
    name: "Maya",
    role: "Senior Customer Experience Lead",
    location: "Rochester, NY",
    tenure: "6 years",
    initials: "MR",
    quote:
      "I joined as an agent. Six years later I'm leading a team of forty and a new client programme. Every promotion was earned, and every one was supported.",
  },
  {
    name: "Kenji",
    role: "IT Operations Engineer",
    location: "Manila, PH",
    tenure: "3 years",
    initials: "KA",
    quote:
      "Tech Step rebuilt my confidence. Five weeks later I was debugging Linux boxes for a Fortune 500 client and loving every minute of it.",
  },
  {
    name: "Sofía",
    role: "Workforce Analyst",
    location: "Bogotá, CO",
    tenure: "4 years",
    initials: "SM",
    quote:
      "What I love is the mobility. I started in voice, moved to analytics, and my manager helped make every step of that feel deliberate.",
  },
  {
    name: "Aarav",
    role: "Product Specialist",
    location: "Bangalore, IN",
    tenure: "2 years",
    initials: "AS",
    quote:
      "The work is interesting and the people are good to work with. That is rarer than it should be.",
  },
  {
    name: "Elena",
    role: "Team Manager",
    location: "Sofia, BG",
    tenure: "5 years",
    initials: "EP",
    quote:
      "Team Manager University gave me a playbook. I use it every week, and my team feels the difference.",
  },
  {
    name: "Dwight",
    role: "Senior Consultant",
    location: "Kingston, JM",
    tenure: "8 years",
    initials: "DB",
    quote:
      "I've worked with banking, travel, and healthcare clients under the same roof. That breadth is hard to find anywhere else.",
  },
];
