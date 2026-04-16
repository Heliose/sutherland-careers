import Link from "next/link";
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
  title: "Power up your IT career — Sutherland Enterprise",
};

const skills = [
  "Java",
  "Linux",
  "VOIP / PBX",
  "Windows Server",
  "SQL",
  "Oracle",
  "AWS / Azure",
  "Security",
];

type Program = {
  shape: Icon3DShape;
  palette: Icon3DPalette;
  label: string;
  title: string;
  body: string;
};

const programs: Program[] = [
  {
    shape: "cube",
    palette: "purple",
    label: "Assessment",
    title: "HackerRank",
    body: "Industry-standard technical assessments trusted by more than 2,000 companies. Your first chance to show us what you can do.",
  },
  {
    shape: "prism",
    palette: "lime",
    label: "Training",
    title: "Tech Step",
    body: "Free five-week virtual programme covering Windows Server, Linux, networking, storage, cloud, security, and virtualization.",
  },
  {
    shape: "knot",
    palette: "iris",
    label: "Practice",
    title: "Sutherland IT Lab",
    body: "Hands-on lab environment with enterprise backup, virtualization, data-management, and security technologies.",
  },
];

const steps = [
  { num: 1, title: "Search", body: "Browse open IT roles and apply to the ones that match your experience." },
  { num: 2, title: "Test", body: "Complete a HackerRank assessment calibrated to the role you applied for." },
  { num: 3, title: "Interview", body: "Technical and behavioural rounds with the team you'd actually work with." },
  { num: 4, title: "Join", body: "Onboarding, Tech Step training if you need it, and your first project." },
];

export default function EnterprisePage() {
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
                  <span>Enterprise IT</span>
                </nav>
                <Badge variant="purple">Enterprise IT careers</Badge>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  Power up your IT career.
                </h1>
                <p className={styles.pageLead}>
                  Work on cloud, backup, storage, and database problems for
                  Fortune 500 clients — with structured training and real
                  mentorship along the way.
                </p>
                <div className={styles.heroActions}>
                  <Button href="/job-results">View technical roles</Button>
                  <Button href="#programs" variant="ghost">
                    Explore our programmes
                  </Button>
                </div>
                <div className={styles.badgeRow}>
                  {skills.map((s) => (
                    <span key={s} className={styles.techBadge}>
                      <span className={styles.techBadgeDot} />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={styles.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="indigo"
                  badge="IT Lab · Chennai"
                  label="Enterprise engineering floor"
                />
                <div className={styles.heroMediaIcon}>
                  <Icon3D shape="cube" palette="iris" size={96} floating />
                </div>
                <div className={styles.heroMediaStickerA}>
                  <Icon3D shape="orb" palette="ocean" size={32} floating />
                  <div>
                    <div className={styles.heroMediaStickerLabel}>Tech Step grads</div>
                    <div className={styles.heroMediaStickerVal}>
                      <CountUp to={3200} />+
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section id="programs" className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Development programmes"
            title="Three paths. One goal — keep you building."
            subtitle="From assessment to practice, our programmes are built to help you grow without leaving the job."
          />
        </Reveal>
        <div className="grid-3">
          {programs.map((p, i) => (
            <Reveal key={p.title} as="div" variant="fade-up" delay={i * 120}>
              <div className={styles.pillarBig}>
                <Icon3D shape={p.shape} palette={p.palette} size={72} floating />
                <span className={styles.pillarLabel}>{p.label}</span>
                <h3 className={styles.pillarHead}>{p.title}</h3>
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
          <Reveal>
            <SectionHeader
              eyebrow="Hiring process"
              title="How we hire, step by step."
              subtitle="Predictable, technical, and fast where it can be."
            />
          </Reveal>
          <div className={styles.timeline}>
            {steps.map((s, i) => (
              <Reveal key={s.num} as="div" variant="fade-up" delay={i * 100}>
                <div className={styles.timelineStep}>
                  <span className={styles.timelineNum}>{s.num}</span>
                  <h3 className={styles.timelineTitle}>{s.title}</h3>
                  <p className={styles.timelineCopy}>{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <div className={styles.ctaStripLight}>
            <div>
              <h2 className={styles.ctaStripLightTitle}>
                Ready to put those skills to work?
              </h2>
              <p
                style={{
                  marginTop: "var(--s-8)",
                  fontSize: 15,
                  color: "var(--c-body)",
                }}
              >
                Over 420 technical roles open across our regions right now.
              </p>
            </div>
            <Button href="/job-results">Search technical jobs</Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
