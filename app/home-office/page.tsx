import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import styles from "../interior.module.css";

export const metadata = {
  title: "Work from home — Sutherland Anywhere",
};

type Pillar = {
  shape: Icon3DShape;
  palette: Icon3DPalette;
  title: string;
  body: string;
};

const pillars: Pillar[] = [
  {
    shape: "orb",
    palette: "magenta",
    title: "Work-life balance",
    body: "Schedules designed with the whole person in mind — so the work week has room for the rest of your life.",
  },
  {
    shape: "capsule",
    palette: "purple",
    title: "Flexibility",
    body: "Programme hours and regional options that let you shape your day around when you're actually at your best.",
  },
  {
    shape: "knot",
    palette: "ocean",
    title: "Mobility",
    body: "Live where you want to live. Sutherland Anywhere hires in all five of our global regions.",
  },
  {
    shape: "cone",
    palette: "sunset",
    title: "Financial savings",
    body: "No commute means real money back in your pocket every week. We help with the rest — equipment, internet, and home office.",
  },
  {
    shape: "cube",
    palette: "iris",
    title: "IT support",
    body: "A dedicated distributed-workforce support team. Real people, real response times, no ticket black holes.",
  },
];

const perks = [
  "Medical, dental, and vision coverage",
  "Paid onboarding and ongoing training",
  "Performance incentives and bonuses",
  "Paid time off that actually accrues",
  "Wellness programmes and EAP access",
  "Virtual and in-person team gatherings",
];

export default function HomeOfficePage() {
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
                  <span>Work from home</span>
                </nav>
                <Badge variant="purple">Sutherland Anywhere</Badge>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  Work from home. Thrive from anywhere.
                </h1>
                <p className={styles.pageLead}>
                  Sutherland Anywhere matches your skills with distributed
                  roles across industries and regions — the flexibility you
                  want, with the infrastructure to back it up.
                </p>
                <div className={styles.heroActions}>
                  <Button href="/job-results">See remote jobs</Button>
                  <Button href="/register" variant="ghost">
                    Create an account <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={styles.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="ocean"
                  badge="Home office"
                  label="Sutherland Anywhere kit"
                />
                <div className={styles.heroMediaIcon}>
                  <Icon3D shape="capsule" palette="ocean" size={96} floating />
                </div>
                <div className={styles.heroMediaStickerA}>
                  <Icon3D shape="orb" palette="lime" size={32} floating />
                  <div>
                    <div className={styles.heroMediaStickerLabel}>Remote roles</div>
                    <div className={styles.heroMediaStickerVal}>
                      <CountUp to={482} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Why people choose it"
            title="Five reasons Sutherland Anywhere works."
          />
        </Reveal>
        <div className="grid-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} as="div" variant="fade-up" delay={i * 70}>
              <div className={styles.pillarBig}>
                <Icon3D shape={p.shape} palette={p.palette} size={64} floating />
                <h3
                  className={styles.pillarHead}
                  style={{ fontSize: 20, letterSpacing: "-0.2px" }}
                >
                  {p.title}
                </h3>
                <p className={styles.pillarCopy}>{p.body}</p>
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
          <Reveal variant="fade-up">
            <div className={styles.cardFeature}>
              <div className={styles.cardFeatureRow}>
                <div>
                  <Icon3D shape="prism" palette="iris" size={72} floating />
                  <h3
                    className="h-section"
                    style={{ marginTop: "var(--s-16)", marginBottom: "var(--s-12)" }}
                  >
                    The whole package, not just a chair in a spare room.
                  </h3>
                  <p className="body-lg">
                    A Sutherland Anywhere role comes with the same benefits
                    and development that any in-office teammate gets — plus
                    the support you need to do it well from home.
                  </p>
                  <div className={styles.checkList}>
                    {perks.map((p) => (
                      <span key={p} className={styles.checkItem}>
                        <span className={styles.checkDot}>✓</span>
                        {p}
                      </span>
                    ))}
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--s-12)" }}>
                  <ImagePlaceholder variant="tile" tone="purple" badge="Onboarding" />
                  <ImagePlaceholder variant="tile" tone="ocean" badge="IT support" />
                  <ImagePlaceholder variant="tile" tone="sunset" badge="Wellness" />
                  <ImagePlaceholder variant="tile" tone="magenta" badge="Connection" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Global reach"
            title="We hire remote in every region we operate."
            subtitle="North America, Latin America, Asia Pacific, Europe, and the Middle East & North Africa."
          />
        </Reveal>
        <Reveal variant="zoom-in">
          <div className={styles.ctaStripLight}>
            <h2 className={styles.ctaStripLightTitle}>
              Ready to build a career from your living room?
            </h2>
            <Button href="/job-results">Browse remote roles</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
