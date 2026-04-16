import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { JobSearchBar } from "@/components/JobSearchBar/JobSearchBar";
import { IndustryGrid } from "@/components/IndustryGrid/IndustryGrid";
import { TestimonialCarousel } from "@/components/TestimonialCarousel/TestimonialCarousel";
import { LocationCards } from "@/components/LocationCards/LocationCards";
import { AwardsMarquee } from "@/components/AwardsMarquee/AwardsMarquee";
import { StatsBand } from "@/components/StatsBand/StatsBand";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { MouseParallax } from "@/components/MouseParallax/MouseParallax";
import { PullQuote } from "@/components/PullQuote/PullQuote";
import { FeaturedJobsRail } from "@/components/FeaturedJobsRail/FeaturedJobsRail";
import { StoriesFeed } from "@/components/StoriesFeed/StoriesFeed";
import { TalentCommunity } from "@/components/TalentCommunity/TalentCommunity";
import { BenefitsTabbed } from "@/components/BenefitsTabbed/BenefitsTabbed";
import { JourneyLine } from "@/components/JourneyLine/JourneyLine";
import styles from "./page.module.css";

export default function HomePage() {
  return (
    <>
      {/* =======================  HERO  ======================= */}
      <section className={styles.hero}>
        <div className="container-wide">
          <div className={styles.heroGrid}>
            <Reveal variant="fade-up">
              <div>
                <span className={styles.heroTicker}>
                  <span className={styles.heroLive} />
                  <CountUp to={1427} /> roles open across 19 countries
                </span>
                <h1 className={styles.heroTitle}>
                  Build a career that <em>leads</em> in the digital era.
                </h1>
                <p className={styles.heroLead}>
                  Partner with iconic brands, learn at the edge of every major
                  industry, and grow with a global team that believes in the
                  careers it builds.
                </p>
                <div className={styles.heroSearchWrap}>
                  <JobSearchBar />
                </div>
                <div className={styles.heroMeta}>
                  <div className={styles.heroMetaItem}>
                    <span className={styles.heroMetaVal}>
                      <CountUp to={60} />+
                    </span>
                    <span className={styles.heroMetaLabel}>Offices</span>
                  </div>
                  <div className="hr-vert" />
                  <div className={styles.heroMetaItem}>
                    <span className={styles.heroMetaVal}>
                      <CountUp to={19} />
                    </span>
                    <span className={styles.heroMetaLabel}>Countries</span>
                  </div>
                  <div className="hr-vert" />
                  <div className={styles.heroMetaItem}>
                    <span className={styles.heroMetaVal}>
                      <CountUp to={38} />K
                    </span>
                    <span className={styles.heroMetaLabel}>Teammates</span>
                  </div>
                  <div className="hr-vert" />
                  <div className={styles.heroMetaItem}>
                    <span className={styles.heroMetaVal}>
                      <CountUp to={30} />yr
                    </span>
                    <span className={styles.heroMetaLabel}>Heritage</span>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide-right" delay={120}>
              <MouseParallax intensity={18}>
                <div className={styles.heroCollage}>
                  <div className={`${styles.heroTileA} parallax-slow`}>
                    <ImagePlaceholder
                      variant="portrait"
                      tone="purple"
                      badge="Rochester"
                      label="Operations floor — HQ"
                    />
                  </div>
                  <div className={`${styles.heroTileB} parallax-med`}>
                    <ImagePlaceholder
                      variant="landscape"
                      tone="magenta"
                      badge="Bangalore"
                      label="Tech Step cohort kick-off"
                    />
                  </div>
                  <div className={`${styles.heroTileC} parallax-fast`}>
                    <ImagePlaceholder
                      variant="tile"
                      tone="indigo"
                      badge="Sofia"
                    />
                  </div>
                  <div className={`${styles.heroStickerA} parallax-med`}>
                    <Icon3D shape="orb" palette="magenta" size={36} floating />
                    <div>
                      <div className={styles.heroStickerLabel}>Promoted this quarter</div>
                      <div className={styles.heroStickerVal}>
                        <CountUp to={1842} />
                      </div>
                    </div>
                  </div>
                  <div className={`${styles.heroStickerB} parallax-fast`}>
                    <Icon3D shape="capsule" palette="iris" size={36} floating />
                    <div>
                      <div className={styles.heroStickerLabel}>Avg. tenure</div>
                      <div className={styles.heroStickerVal}>
                        <CountUp to={4.2} decimals={1} /> yrs
                      </div>
                    </div>
                  </div>
                </div>
              </MouseParallax>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =======================  JOURNEY LINE (I7) — decorative scroll-draw path  ======================= */}
      <div style={{ position: "relative" }}>
        <JourneyLine />

      {/* =======================  WHO WE ARE  ======================= */}
      <section className={`${styles.who} section-tall`}>
        <div className="container-wide">
          <div className={styles.whoGrid}>
            <Reveal variant="slide-left">
              <div className={styles.whoCopyCol}>
                <span className="meta-label">Who we are</span>
                <h2 className={styles.whoHead} style={{ marginTop: "var(--s-16)" }}>
                  A global team, building the operations that{" "}
                  <span>power modern brands.</span>
                </h2>
                <p className={`${styles.whoBody} ${styles.whoDropCap}`}>
                  For more than three decades we have helped companies across
                  every sector turn ambition into everyday reality. Today that
                  means more than sixty locations across nineteen countries,
                  serving the biggest names in banking, travel, retail,
                  healthcare, and technology.
                </p>
                <Button href="/sutherland-life" variant="ghost">
                  Our story <ArrowRight size={14} strokeWidth={1.5} />
                </Button>
                <div className={styles.whoFootnote}>
                  <span className={styles.whoFootnoteKey}>Est.</span>
                  <span className={styles.whoFootnoteVal}>
                    Rochester, New York. Publicly traded. Privately minded.
                  </span>
                </div>
              </div>
            </Reveal>

            <Reveal variant="slide-right" delay={120}>
              <div className={styles.whoStack}>
                <div className={styles.whoStackA}>
                  <ImagePlaceholder
                    variant="landscape"
                    tone="indigo"
                    badge="Campus · Chennai"
                    label="Centre of Excellence"
                  />
                </div>
                <div className={styles.whoStackB}>
                  <ImagePlaceholder
                    variant="photo"
                    tone="sunset"
                    caption="Summer offsite · Kingston"
                    label="Team gathering"
                  />
                </div>
                <div className={styles.whoStackSticker}>
                  <div className={styles.whoStackStickerVal}>
                    <CountUp to={2} />
                    <span>K+</span>
                  </div>
                  <div className={styles.whoStackStickerLabel}>
                    Internal promotions every year across our global team.
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* =======================  FEATURED JOBS RAIL (C7)  ======================= */}
      <section className="section-sm container-wide">
        <Reveal variant="fade-up">
          <FeaturedJobsRail />
        </Reveal>
      </section>

      {/* =======================  PULL QUOTE — editorial bridge (Vinh)  ======================= */}
      <section className="container-wide" style={{ paddingBottom: "var(--space-2xl)" }}>
        <Reveal variant="fade-up">
          <PullQuote
            variant="accent"
            align="center"
            cite="Maya Rodriguez"
            role="Senior Customer Experience Lead · Rochester"
          >
            I joined as an agent. Six years later I&rsquo;m leading a team of
            forty and a new client programme. Every promotion was earned, and
            every one was supported.
          </PullQuote>
        </Reveal>
      </section>

      {/* =======================  PILLARS — editorial manifesto  ======================= */}
      <section className={`${styles.pillars} section-tall`}>
        <div className="container-wide">
          <Reveal>
            <div className={styles.pillarsIntro}>
              <span className="meta-label">Life at Sutherland</span>
              <h2
                className={styles.pillarsHeading}
                style={{ marginTop: "var(--s-16)" }}
              >
                Three ideas we live by.
              </h2>
            </div>
          </Reveal>

          {/* Row 01 */}
          <Reveal variant="fade-up">
            <article className={styles.pillarRow}>
              <div className={styles.pillarNum}>01</div>
              <div className={styles.pillarCopy}>
                <h3 className={styles.pillarTitle}>
                  Solve interesting business problems.
                </h3>
                <p className={styles.pillarLead}>
                  Our clients are some of the most recognisable names in the
                  world. That means the work you do here has real consequence —
                  and real range.
                </p>
                <div className={styles.pillarTags}>
                  <Badge variant="purple">Banking</Badge>
                  <Badge variant="purple">Retail</Badge>
                  <Badge variant="purple">Travel</Badge>
                  <Badge variant="purple">Healthcare</Badge>
                </div>
                <Link href="/sutherland-life" className="hover-arrow">
                  Explore the work
                  <span className="hover-arrow__line" aria-hidden />
                  <span className="hover-arrow__tip" aria-hidden>›</span>
                </Link>
              </div>
              <div className={styles.pillarMedia}>
                <div className={styles.pillarMediaIcon}>
                  <Icon3D shape="cube" palette="purple" size={88} floating />
                </div>
                <ImagePlaceholder
                  variant="photo"
                  tone="purple"
                  label="Client workshop · Pittsford"
                />
              </div>
            </article>
          </Reveal>

          {/* Row 02 */}
          <Reveal variant="fade-up">
            <article className={styles.pillarRow}>
              <div className={styles.pillarNum}>02</div>
              <div className={styles.pillarMedia}>
                <div className={styles.pillarMediaIcon}>
                  <Icon3D shape="cone" palette="magenta" size={88} floating />
                </div>
                <ImagePlaceholder
                  variant="photo"
                  tone="magenta"
                  label="Team Manager University · Cohort 14"
                />
              </div>
              <div className={styles.pillarCopy}>
                <h3 className={styles.pillarTitle}>Grow your own way.</h3>
                <p className={styles.pillarLead}>
                  Structured programmes like Team Manager University and free
                  technical training with Tech Step give you a real path to the
                  career you want.
                </p>
                <div className={styles.pillarTags}>
                  <Badge variant="magenta">TMU</Badge>
                  <Badge variant="magenta">Tech Step</Badge>
                  <Badge variant="magenta">IT Lab</Badge>
                </div>
                <Link href="/enterprise" className="hover-arrow">
                  See our programmes
                  <span className="hover-arrow__line" aria-hidden />
                  <span className="hover-arrow__tip" aria-hidden>›</span>
                </Link>
              </div>
            </article>
          </Reveal>

          {/* Row 03 */}
          <Reveal variant="fade-up">
            <article className={styles.pillarRow}>
              <div className={styles.pillarNum}>03</div>
              <div className={styles.pillarCopy}>
                <h3 className={styles.pillarTitle}>Be yourself.</h3>
                <p className={styles.pillarLead}>
                  We celebrate the mix of backgrounds, languages, and
                  experiences that make our teams better at what they do — and
                  at the rest of the day too.
                </p>
                <div className={styles.pillarTags}>
                  <Badge variant="success">20+ languages</Badge>
                  <Badge variant="success">6 ERGs</Badge>
                </div>
                <Link href="/inclusion-belonging" className="hover-arrow">
                  Inclusion &amp; belonging
                  <span className="hover-arrow__line" aria-hidden />
                  <span className="hover-arrow__tip" aria-hidden>›</span>
                </Link>
              </div>
              <div className={styles.pillarMedia}>
                <div className={styles.pillarMediaIcon}>
                  <Icon3D shape="donut" palette="ruby" size={88} floating />
                </div>
                <ImagePlaceholder
                  variant="photo"
                  tone="ruby"
                  label="Pride month · Sofia"
                />
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* =======================  INDUSTRIES  ======================= */}
      <section className={`${styles.industries} section-tall`}>
        <div className="container-wide">
          <Reveal>
            <div className={styles.industriesHead}>
              <div>
                <span className="meta-label">Industries</span>
                <h2 className={styles.industriesTitle} style={{ marginTop: "var(--s-16)" }}>
                  Nine sectors.<br />
                  One connected platform.
                </h2>
              </div>
              <p className="editorial-lead" style={{ marginLeft: "auto" }}>
                Wherever your expertise lies — or wants to go — there's a team
                here that matches it. Hover the tiles to meet them.
              </p>
            </div>
          </Reveal>
          <IndustryGrid />
        </div>
      </section>

      </div>{/* close JourneyLine wrapper */}

      {/* =======================  SKILL-MATCHER TEASER  ======================= */}
      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <Link href="/skill-match" className={styles.skillTeaser}>
            <div className={styles.skillTeaserBody}>
              <Badge variant="purple">AI-powered · Beta</Badge>
              <h2 className={styles.skillTeaserTitle}>
                Upload your resume. <br />
                <span className="serif-italic">We&rsquo;ll match you to 1,427 roles.</span>
              </h2>
              <p className={styles.skillTeaserCopy}>
                Four transparent steps: upload → parse → preferences → matches.
                We show you exactly what we read and how we score.
              </p>
            </div>
            <div className={styles.skillTeaserIcon}>
              <Icon3D shape="knot" palette="magenta" size={96} floating />
            </div>
          </Link>
        </Reveal>
      </section>

      {/* =======================  DOPAMINE BAND — editorial punctuation (Trend 2)  ======================= */}
      <section className={`dopamine-band ${styles.manifesto}`}>
        <span className={`organic-blob organic-blob--electric ${styles.manifestoBlobA}`} aria-hidden />
        <span className={`organic-blob organic-blob--c ${styles.manifestoBlobB}`} aria-hidden />
        <div className="container-wide" style={{ position: "relative", zIndex: 1 }}>
          <Reveal variant="fade-up">
            <div className={styles.manifestoInner}>
              <span className={styles.manifestoKicker}>
                <span className="serif-italic">A note on</span> scale.
              </span>
              <h2 className={styles.manifestoTitle}>
                You&rsquo;re not joining a team.
                <br />
                <span className={styles.manifestoEm}>You&rsquo;re joining 38,000 of them</span> —
                <br />
                across <span className="tnum">19</span> countries, <span className="tnum">60+</span> offices, and every time zone that matters.
              </h2>
              <div className={styles.manifestoMeta}>
                <span className={styles.manifestoMetaItem}>
                  <span className={styles.manifestoMetaLive} />
                  Hiring now · Customer Experience · Engineering · Analytics
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* =======================  TESTIMONIALS  ======================= */}
      <section className={`${styles.testimonials} section-tall`}>
        <span className={styles.testimonialsGlowA} aria-hidden />
        <span className={styles.testimonialsGlowB} aria-hidden />
        <div className={`container-wide ${styles.testimonialsInner}`}>
          <Reveal>
            <div className={styles.testimonialsHead}>
              <div>
                <span className="meta-label" style={{ color: "var(--c-purple-light)" }}>
                  Employee voices
                </span>
                <h2 className={styles.testimonialsTitle} style={{ marginTop: "var(--s-16)" }}>
                  Six perspectives. Six offices. One shared reason they stay.
                </h2>
              </div>
            </div>
          </Reveal>
          <TestimonialCarousel />
        </div>
      </section>

      {/* =======================  BENEFITS (tabbed — F3)  ======================= */}
      <section className="section-tall">
        <div className="container-wide">
          <Reveal>
            <div className={styles.benefitsHead}>
              <span className="meta-label">Perks &amp; benefits</span>
              <h2 className={styles.benefitsTitle} style={{ marginTop: "var(--s-16)" }}>
                Benefits that meet you where you are.
              </h2>
              <p className="editorial-lead" style={{ marginTop: "var(--s-16)" }}>
                Fourteen programmes across four categories — localised per
                region, tuned to every life stage.
              </p>
            </div>
          </Reveal>
          <BenefitsTabbed />
        </div>
      </section>

      {/* =======================  LOCATIONS  ======================= */}
      <section className={`${styles.locations} section-tall`}>
        <div className="container-wide">
          <Reveal>
            <div className={styles.locationsHead}>
              <span className="meta-label">Global footprint</span>
              <h2 className={styles.locationsTitle} style={{ marginTop: "var(--s-16)" }}>
                Careers across five regions.
              </h2>
              <p className="editorial-lead" style={{ marginTop: "var(--s-16)" }}>
                Every region hires across every function. Pick where you want
                to build.
              </p>
            </div>
          </Reveal>
          <LocationCards />
        </div>
      </section>

      {/* =======================  STORIES (D9)  ======================= */}
      <section className="section-tall" style={{ background: "var(--c-surface-alt)" }}>
        <div className="container-wide">
          <StoriesFeed />
        </div>
      </section>

      {/* =======================  AWARDS  ======================= */}
      <section className={styles.awardsSection}>
        <div className="container-wide">
          <h3 className={styles.awardsTitle}>
            Recognised by the analysts and institutions who pay attention
          </h3>
          <AwardsMarquee />
        </div>
      </section>

      {/* =======================  BY THE NUMBERS  ======================= */}
      <section className={`${styles.numbers} section-tall`}>
        <div className="container-wide">
          <Reveal>
            <div className={styles.numbersHead}>
              <span className="meta-label" style={{ color: "var(--c-purple-light)" }}>
                Sutherland by the numbers
              </span>
              <h2 className={styles.numbersTitle} style={{ marginTop: "var(--s-16)" }}>
                The shape of a company at work.
              </h2>
            </div>
          </Reveal>
          <StatsBand
            variant="dark"
            animate
            stats={[
              { numericValue: 38, suffix: "K", label: "People we employ worldwide" },
              { numericValue: 200, suffix: "+", label: "Active enterprise clients" },
              { numericValue: 1.4, decimals: 1, suffix: "K+", label: "Roles open right now" },
              { numericValue: 19, label: "Countries where we hire" },
            ]}
          />
        </div>
      </section>

      {/* =======================  TALENT COMMUNITY (G1)  ======================= */}
      <TalentCommunity />

      {/* =======================  CTA  ======================= */}
      <section className={styles.cta}>
        <div className="container-wide">
          <Reveal variant="zoom-in">
            <div className={styles.ctaCard}>
              <span className={styles.ctaDecoration} aria-hidden />
              <div className={styles.ctaGrid}>
                <div>
                  <h2 className={styles.ctaTitle}>
                    Ready to explore open roles?
                  </h2>
                  <p className={styles.ctaBody}>
                    Browse more than a thousand active openings, save the ones
                    you like, and apply when you're ready.
                  </p>
                </div>
                <div className={styles.ctaActions}>
                  <Button href="/job-results" size="lg">
                    Search all jobs
                  </Button>
                  <Button href="/register" variant="dark-ghost" size="lg">
                    Create an account
                  </Button>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
