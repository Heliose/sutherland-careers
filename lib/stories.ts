import type { Icon3DPalette } from "@/components/Icon3D/Icon3D";

export type Story = {
  slug: string;
  title: string;
  excerpt: string;
  category: "Life" | "Leadership" | "Engineering" | "Hiring" | "Impact";
  readMinutes: number;
  date: string;
  author: {
    name: string;
    role: string;
  };
  tone: "purple" | "magenta" | "sunset" | "ocean" | "ruby" | "indigo";
  iconPalette: Icon3DPalette;
};

export const stories: Story[] = [
  {
    slug: "tmu-cohort-14",
    title:
      "Inside Team Manager University: what we learned from cohort fourteen.",
    excerpt:
      "A dozen new leaders, two countries, and twelve months of structured coaching. Here&rsquo;s what surprised us — and what&rsquo;s shipping into cohort fifteen.",
    category: "Leadership",
    readMinutes: 6,
    date: "2026-03-28",
    author: {
      name: "Elena Petrova",
      role: "Head of Leadership Programmes",
    },
    tone: "indigo",
    iconPalette: "iris",
  },
  {
    slug: "tech-step-graduates-2026",
    title:
      "Three Tech Step graduates on how a free five-week programme changed their trajectory.",
    excerpt:
      "From support desks in Manila, Chennai, and Kingston, a generation of engineers is re-entering the workforce through a programme most of them had never heard of.",
    category: "Engineering",
    readMinutes: 8,
    date: "2026-03-14",
    author: {
      name: "Kenji Abello",
      role: "IT Operations Engineer",
    },
    tone: "ocean",
    iconPalette: "ocean",
  },
  {
    slug: "return-to-rochester",
    title:
      "A return-to-Rochester story: why our headquarters is hiring harder than ever.",
    excerpt:
      "Rochester, New York, has been our home for three decades. In 2026 it&rsquo;s also our fastest-growing office. An inside look at the roles we&rsquo;re scaling in Upstate.",
    category: "Life",
    readMinutes: 5,
    date: "2026-02-27",
    author: {
      name: "Maya Rodriguez",
      role: "Senior Customer Experience Lead",
    },
    tone: "magenta",
    iconPalette: "magenta",
  },
];

export const formatStoryDate = (iso: string) => {
  const d = new Date(iso);
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
