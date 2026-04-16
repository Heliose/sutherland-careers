import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "../interior.module.css";

export const metadata = {
  title: "Refer a friend — Sutherland Careers",
};

type Step = {
  num: number;
  shape: Icon3DShape;
  palette: Icon3DPalette;
  title: string;
  body: string;
};

const steps: Step[] = [
  {
    num: 1,
    shape: "cone",
    palette: "magenta",
    title: "Submit",
    body: "Sign into the Referral Portal and submit the people you think would be a great fit.",
  },
  {
    num: 2,
    shape: "orb",
    palette: "sunset",
    title: "Earn",
    body: "Track your referrals' progress and earn a bonus if they join and stay in good standing.",
  },
  {
    num: 3,
    shape: "capsule",
    palette: "lime",
    title: "Smile",
    body: "Work with someone you trust. It really is that much better with a friend around.",
  },
];

type Referrer = {
  shape: Icon3DShape;
  palette: Icon3DPalette;
  title: string;
  body: string;
};

const refererTypes: Referrer[] = [
  {
    shape: "knot",
    palette: "purple",
    title: "Sutherland employee",
    body: "Current full-time and part-time teammates in good standing. Eligible for the cash bonus programme.",
  },
  {
    shape: "cube",
    palette: "ocean",
    title: "External referrer",
    body: "Not an employee, not an alumnus — but you know someone great. Submit them anyway; we always notice.",
  },
  {
    shape: "donut",
    palette: "ruby",
    title: "Alumni",
    body: "Former teammates who want to send someone our way. Tap into the network that started with you.",
  },
];

const regions = [
  "United States & Canada",
  "Jamaica",
  "Bulgaria",
  "Kosovo",
  "Asia Pacific",
  "Latin America",
  "India",
];

export default function ReferPage() {
  return (
    <>
      <section className={styles.pageHero}>
        <span className={styles.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={styles.pageHeroGrid}>
            <Reveal variant="fade-up">
              <div className={styles.pageHeroInner}>
                <nav className={styles.crumbs} aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span className={styles.crumbSep}>/</span>
                  <span>Refer a friend</span>
                </nav>
                <Badge variant="magenta">Referral programme</Badge>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  Submit. Earn. Smile.
                </h1>
                <p className={styles.pageLead}>
                  Work is better with friends. Our referral programme rewards
                  you for sending us the great people you already know.
                </p>
                <div className={styles.heroActions}>
                  <Button href="#how-it-works">How it works</Button>
                  <Button href="/register" variant="ghost">
                    Open the Referral Portal <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={styles.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="magenta"
                  badge="Referrals · 2026"
                  label="Team onboarding"
                />
                <div className={styles.heroMediaIcon}>
                  <Icon3D shape="knot" palette="magenta" size={96} floating />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="how-it-works" className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="How it works"
            title="Three steps, and a paycheque."
          />
        </Reveal>
        <div className="grid-3">
          {steps.map((s, i) => (
            <Reveal key={s.title} as="div" variant="fade-up" delay={i * 120}>
              <div className={styles.pillarBig}>
                <Icon3D shape={s.shape} palette={s.palette} size={72} floating />
                <span className={styles.pillarLabel}>
                  Step {s.num.toString().padStart(2, "0")}
                </span>
                <h3 className={styles.pillarHead}>{s.title}</h3>
                <p className={styles.pillarCopy}>{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section
        className="section"
        style={{ background: "var(--c-surface-alt)" }}
      >
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Who can refer"
              title="Three ways people point talent our way."
              subtitle="Bonus eligibility varies. Every referral still matters."
            />
          </Reveal>
          <div className="grid-3">
            {refererTypes.map((r, i) => (
              <Reveal key={r.title} as="div" variant="fade-up" delay={i * 100}>
                <div className={styles.pillarBig}>
                  <Icon3D shape={r.shape} palette={r.palette} size={72} floating />
                  <h3 className={styles.pillarHead}>{r.title}</h3>
                  <p className={styles.pillarCopy}>{r.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Regional policies"
            title="Programme rules vary by region."
            subtitle="Pick your region to read the specific eligibility, bonus structure, and submission rules."
          />
        </Reveal>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
            gap: "var(--s-12)",
          }}
        >
          {regions.map((r, i) => (
            <Reveal key={r} as="div" variant="fade-up" delay={i * 50}>
              <Link
                href="#"
                style={{
                  background: "var(--c-white)",
                  border: "1px solid var(--c-border)",
                  borderRadius: "var(--r-5)",
                  padding: "var(--s-16) var(--s-20)",
                  textDecoration: "none",
                  color: "var(--c-navy)",
                  fontSize: 15,
                  fontWeight: 300,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  boxShadow: "var(--shadow-ambient)",
                }}
              >
                {r}
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <div className={styles.ctaStripLight}>
            <h2 className={styles.ctaStripLightTitle}>
              Already know someone great?
            </h2>
            <Button href="/register">Submit a referral</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
