import Link from "next/link";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/Button/Button";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "../interior.module.css";

export const metadata = {
  title: "Inclusion & Belonging — Sutherland Careers",
};

type Erg = {
  name: string;
  shape: Icon3DShape;
  palette: Icon3DPalette;
  blurb: string;
};

const ergs: Erg[] = [
  {
    name: "Global Women in Leadership",
    shape: "orb",
    palette: "magenta",
    blurb:
      "Mentorship circles, skill-building, and sponsorship for women at every stage of their careers.",
  },
  {
    name: "Pride at Sutherland",
    shape: "knot",
    palette: "ruby",
    blurb:
      "An LGBTQ+ and allies community that advances policy, benefits, and culture across every region.",
  },
  {
    name: "Culture Collective",
    shape: "cone",
    palette: "sunset",
    blurb:
      "Celebrating the twenty-plus cultures represented on our teams, and the learning that comes with them.",
  },
  {
    name: "Able",
    shape: "wave",
    palette: "ocean",
    blurb:
      "Accessibility advocacy and accommodation support — for teammates with disabilities, and for those who love them.",
  },
  {
    name: "Next Gen",
    shape: "prism",
    palette: "lime",
    blurb:
      "Early-career and intern community building the skills, mentors, and networks that power the next decade.",
  },
  {
    name: "Veterans",
    shape: "cube",
    palette: "iris",
    blurb:
      "Transition support, hiring pathways, and camaraderie for service members and military families.",
  },
];

export default function InclusionPage() {
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
                  <span>Inclusion &amp; Belonging</span>
                </nav>
                <span className="meta-label">Inclusion &amp; Belonging</span>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  An inclusive team is simply a better team.
                </h1>
                <p className={styles.pageLead}>
                  Our teams speak more than twenty languages across five
                  regions. What holds us together is the belief that every
                  person has something to teach the rest of us.
                </p>
                <div className={styles.heroActions}>
                  <Button href="/job-results">Find roles</Button>
                  <Button href="/sutherland-life" variant="ghost">
                    Sutherland Life
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={120}>
              <div className={styles.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="ruby"
                  badge="Pride · Sofia"
                  label="Culture day"
                />
                <div className={styles.heroMediaIcon}>
                  <Icon3D shape="orb" palette="magenta" size={96} floating />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Employee resource groups"
            title="Communities that make Sutherland feel like Sutherland."
            subtitle="Employee-led, leadership-sponsored, and open to every teammate, anywhere in the world."
          />
        </Reveal>
        <div className="grid-3">
          {ergs.map((e, i) => (
            <Reveal key={e.name} as="div" variant="fade-up" delay={i * 80}>
              <div className={styles.pillarBig}>
                <Icon3D shape={e.shape} palette={e.palette} size={72} floating />
                <h3 className={styles.pillarHead}>{e.name}</h3>
                <p className={styles.pillarCopy}>{e.blurb}</p>
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
              eyebrow="Our commitment"
              title="Inclusive hiring, measured from the first click."
              subtitle="We publish year-over-year representation data and hold our leaders accountable to goals that actually move the numbers."
            />
          </Reveal>
          <Reveal variant="fade-up">
            <div className={styles.cardFeature}>
              <div className={styles.cardFeatureRow}>
                <div>
                  <Icon3D shape="capsule" palette="ocean" size={72} floating />
                  <h3
                    className="h-subL"
                    style={{ marginTop: "var(--s-16)", marginBottom: "var(--s-12)" }}
                  >
                    What we do — and how we measure it.
                  </h3>
                  <p className="body-lg">
                    Hiring decisions are made with structured interviews,
                    calibrated rubrics, and independent reviewers on every
                    panel. We pair that with pay-equity audits twice a year
                    and a published representation report every November.
                  </p>
                  <div className={styles.checkList}>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      Structured interviews with calibrated rubrics on every role.
                    </span>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      Bi-annual pay-equity audits across all five regions.
                    </span>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      Public representation report, published each November.
                    </span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--s-12)" }}>
                  <ImagePlaceholder variant="tile" tone="magenta" badge="Representation" />
                  <ImagePlaceholder variant="tile" tone="ocean" badge="Equity" />
                  <ImagePlaceholder variant="tile" tone="sunset" badge="Access" />
                  <ImagePlaceholder variant="tile" tone="purple" badge="Community" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <div className={styles.ctaStripLight}>
            <h2 className={styles.ctaStripLightTitle}>
              Bring your whole self to work. Seriously.
            </h2>
            <div style={{ display: "flex", gap: "var(--s-12)", flexWrap: "wrap" }}>
              <Button href="/job-results">See open roles</Button>
              <Button href="/register" variant="ghost">
                Join our talent community
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
