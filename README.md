# Sutherland Careers — Stripe × Editorial × Liquid Glass

A recreation of the information architecture and content of jobs.sutherlandglobal.com, re-skinned through a fusion design lens:

- **Katie Dill / Stripe** — enterprise token system, data presentation quality bar
- **Khoi Vinh / NYT** — editorial grid, modular scale, pull quotes, scannable hierarchy
- **Alan Dye / Jony Ive / Apple** — Liquid Glass floating chrome, concentric geometry, dynamic scroll-morph
- **Ethan Marcotte** — container queries, View Transitions API, fluid type & spacing
- **Kat Holmes** — inclusive by default (skip link, sr-only, prefers-contrast, prefers-reduced-motion)
- **Trends adopted** — Dopamine (Trend 2), Anti-grid organic (Trend 3), Liquid Glass (Trend 1), Kinetic type (Trend 4), MX Design (Trend 5), Micro-delight (Trend 6), Bento (Trend 8), Sustainability (Trend 11)

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- CSS Modules (no Tailwind — Stripe's custom shadow formula and OpenType features need hand-written CSS)
- Fraunces (variable serif via `next/font/google`) + sohne-var fallback to SF Pro Display

## Run

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Build

```bash
npm run build
npm run start
```

## Routes (20)

| Route | Purpose |
|---|---|
| `/` | Homepage — editorial hero, featured jobs rail, 3 pillars, industries bento, testimonials, tabbed benefits, locations, stories, talent community, CTA |
| `/sutherland-life` | Three pillars + TMU + corporate citizenship |
| `/inclusion-belonging` | ERGs + inclusive hiring commitment |
| `/home-office` | Sutherland Anywhere — remote work |
| `/enterprise` | IT careers + Tech Step + HackerRank + hiring process |
| `/refer` | Referral programme — submit/earn/smile |
| `/job-results` | Job search — faceted filters, quick chips, job alerts, dense card list |
| `/job-application` | Multi-step application form |
| `/register` | Account creation with social login |
| `/contact` | Contact form + recruiter directory |
| `/locations` | Interactive world map + region cards |
| `/locations/[region]` | 5 regional pages (NA, LATAM, APAC, EU, MENA) |
| `/skill-match` | AI skill-matcher — 4-step transparent wizard |

## Performance Budget (Trend 11 — Sustainability as Design Practice)

| Metric | Target | Actual (build) |
|---|---|---|
| First Load JS (shared) | < 200 KB | **87.3 KB** |
| Homepage first-load JS | < 150 KB | **118 KB** |
| Static routes | 100% SSG | **20/20** |
| Build status | 0 errors | **Clean** |
| `prefers-reduced-motion` | Respected | All animations disabled |
| `prefers-contrast: more` | Respected | Stronger borders + contrast |
| Skip-to-content link | Present | First focusable element |
| Container queries | Used | JobCard, IndustryGrid, LocationCards, BenefitsGrid |
| View Transitions API | Wired | Page crossfade + rise |
| Schema.org JSON-LD | Organization + JobPosting | In head and /job-results |
| Semantic landmarks | main, nav, footer, header, article, section | Yes |

## Design tokens

All tokens live in `app/globals.css` as CSS custom properties in 3 layers:

1. **Primitive** (`--p-*`) — raw color/size values
2. **Semantic** (`--c-*`, `--space-*`, `--step-*`) — purpose-mapped
3. **Component-specific** — in `.module.css` files via `var(--c-*)` references

The Stripe design system anchors (sohne-var, ss01, weight 300, blue-tinted shadows, navy headings) are preserved at Layer 2. Fraunces (editorial serif) is loaded via `next/font/google` with SOFT, WONK, and opsz variable axes.

## Content notes

- All headlines, body copy, and labels are original prose — not copy-pasted from the source site
- Sample job data, testimonials, and stories are fictional
- 3D icon placeholders use SVG gradient orbs (replace with production 3D renders when ready)
- Image placeholders are gradient tiles with shimmer + bloom (replace with photography when ready)
- ChatBubble is a mock — responses are not real
- Skill-matcher wizard is a demo — no backend parsing
