import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/Button/Button";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { PullQuote } from "@/components/PullQuote/PullQuote";
import styles from "../interior.module.css";

export const metadata = {
  title: "Sutherland Life — A career journey filled with choices",
};

export default function SutherlandLifePage() {
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
                  <span>Sutherland Life</span>
                </nav>
                <span className="meta-label">Sutherland Life</span>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  Step into a career journey filled with choices.
                </h1>
                <p className={styles.pageLead}>
                  Sutherland Life is how we describe the everyday — the work,
                  the growth, and the people. Three ideas shape all of it.
                </p>
                <div className={styles.heroActions}>
                  <Button href="/job-results">See open roles</Button>
                  <Button href="/inclusion-belonging" variant="ghost">
                    Inclusion &amp; belonging <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={styles.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="purple"
                  badge="Rochester · HQ"
                  label="Team Manager University"
                />
                <div className={styles.heroMediaIcon}>
                  <Icon3D shape="knot" palette="iris" size={96} floating />
                </div>
                <div className={styles.heroMediaStickerA}>
                  <Icon3D shape="orb" palette="magenta" size={32} floating />
                  <div>
                    <div className={styles.heroMediaStickerLabel}>Cohorts shipped</div>
                    <div className={styles.heroMediaStickerVal}>
                      <CountUp to={47} />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Three ideas we live by"
            title="The shape of life at Sutherland."
          />
        </Reveal>
        <div className="grid-3">
          <Reveal as="div" variant="fade-up" delay={0}>
            <div className={styles.pillarBig}>
              <Icon3D shape="cube" palette="purple" size={72} floating />
              <span className={styles.pillarLabel}>01 · Work</span>
              <h3 className={styles.pillarHead}>
                Solve interesting business problems.
              </h3>
              <p className={styles.pillarCopy}>
                Our clients are some of the most recognisable names across
                banking, retail, healthcare, travel, and technology. The work
                has scope and scale — and so does the difference you make on
                any given Tuesday.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" variant="fade-up" delay={120}>
            <div className={styles.pillarBig}>
              <Icon3D shape="cone" palette="magenta" size={72} floating />
              <span className={styles.pillarLabel}>02 · Growth</span>
              <h3 className={styles.pillarHead}>Grow your own way.</h3>
              <p className={styles.pillarCopy}>
                Move between functions, between teams, and between regions.
                Managers are trained to coach career moves, not just
                performance. Our internal mobility rate speaks for itself.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" variant="fade-up" delay={240}>
            <div className={styles.pillarBig}>
              <Icon3D shape="donut" palette="ruby" size={72} floating />
              <span className={styles.pillarLabel}>03 · Belonging</span>
              <h3 className={styles.pillarHead}>Be yourself.</h3>
              <p className={styles.pillarCopy}>
                Our teams speak more than twenty languages between them. What
                they share is a belief that an inclusive team is a better team
                — at the work, and at the rest of the day too.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* EDITORIAL PULL QUOTE */}
      <section className="container-wide" style={{ paddingBottom: "var(--space-2xl)" }}>
        <Reveal variant="fade-up">
          <PullQuote
            variant="accent"
            align="center"
            cite="Elena Petrova"
            role="Team Manager · Sofia"
          >
            Team Manager University gave me a playbook. I use it every week —
            and my team feels the difference.
          </PullQuote>
        </Reveal>
      </section>

      {/* TEAM MANAGER UNIVERSITY */}
      <section
        className="section"
        style={{ background: "var(--c-surface-alt)" }}
      >
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="Featured programme"
              title="Team Manager University."
              subtitle="Our internal academy for first-time and experienced frontline leaders — designed by people who have done the job."
            />
          </Reveal>
          <Reveal variant="fade-up">
            <div className={styles.cardFeature}>
              <div className={styles.cardFeatureRow}>
                <div>
                  <Icon3D shape="prism" palette="iris" size={72} floating />
                  <h3
                    className="h-subL"
                    style={{ marginTop: "var(--s-16)", marginBottom: "var(--s-12)" }}
                  >
                    A playbook you will actually use.
                  </h3>
                  <p className="body-lg">
                    Self-paced modules, weekly live workshops, and a coaching
                    cohort that stays with you for twelve months. Designed for
                    team managers running fifteen to twenty-five agents.
                  </p>
                  <div className={styles.checkList}>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      12-month curriculum combining on-demand and live sessions.
                    </span>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      One-to-one coaching with a senior operations leader.
                    </span>
                    <span className={styles.checkItem}>
                      <span className={styles.checkDot}>✓</span>
                      A shared playbook your team can use the week after you
                      finish.
                    </span>
                  </div>
                </div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "var(--s-12)" }}>
                  <ImagePlaceholder variant="tile" tone="purple" badge="Workshop" />
                  <ImagePlaceholder variant="tile" tone="magenta" badge="Coaching" />
                  <ImagePlaceholder variant="tile" tone="indigo" badge="Cohort" />
                  <ImagePlaceholder variant="tile" tone="sunset" badge="Playbook" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CORPORATE CITIZENSHIP */}
      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Corporate citizenship"
            title="Three commitments we hold ourselves to."
            subtitle="Environmental, economic, and social — the lenses we use for every community where we work."
          />
        </Reveal>
        <div className="grid-3">
          <Reveal as="div" variant="fade-up" delay={0}>
            <div className={styles.pillarBig}>
              <Icon3D shape="wave" palette="lime" size={72} floating />
              <h3 className={styles.pillarHead}>Environmental</h3>
              <p className={styles.pillarCopy}>
                Energy, waste, and travel reductions with targets we publish
                and track — plus employee-led environmental action across
                every region.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" variant="fade-up" delay={120}>
            <div className={styles.pillarBig}>
              <Icon3D shape="capsule" palette="ocean" size={72} floating />
              <h3 className={styles.pillarHead}>Economic</h3>
              <p className={styles.pillarCopy}>
                Workforce-development partnerships that remove barriers to
                employment — second-chance hiring, apprenticeships, and
                pathways for career changers.
              </p>
            </div>
          </Reveal>
          <Reveal as="div" variant="fade-up" delay={240}>
            <div className={styles.pillarBig}>
              <Icon3D shape="orb" palette="ruby" size={72} floating />
              <h3 className={styles.pillarHead}>Social</h3>
              <p className={styles.pillarCopy}>
                Volunteer time off, skills-based volunteering, and matched
                giving so our people can put their time and money where it
                matters to them.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <div className={styles.ctaStripLight}>
            <h2 className={styles.ctaStripLightTitle}>
              Start somewhere. Move anywhere.
            </h2>
            <div style={{ display: "flex", gap: "var(--s-12)", flexWrap: "wrap" }}>
              <Button href="/job-results">Search jobs</Button>
              <Button href="/register" variant="ghost">
                Create an account
              </Button>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
