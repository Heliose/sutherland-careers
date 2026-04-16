import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { LocationCards } from "@/components/LocationCards/LocationCards";
import { StatsBand } from "@/components/StatsBand/StatsBand";
import { Button } from "@/components/Button/Button";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { WorldMap } from "@/components/WorldMap/WorldMap";
import interior from "../interior.module.css";

export const metadata = {
  title: "Locations — Sutherland Careers",
};

export default function LocationsHubPage() {
  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={interior.pageHeroGrid}>
            <Reveal variant="fade-up">
              <div className={interior.pageHeroInner}>
                <nav className={interior.crumbs} aria-label="Breadcrumb">
                  <Link href="/">Home</Link>
                  <span className={interior.crumbSep}>/</span>
                  <span>Locations</span>
                </nav>
                <span className="meta-label">Where we hire</span>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  Five regions. One connected team.
                </h1>
                <p className={interior.pageLead}>
                  More than sixty offices across nineteen countries, with
                  remote teammates everywhere in between. Pick the region that
                  fits.
                </p>
                <div className={interior.heroActions}>
                  <Button href="/job-results">
                    See all jobs <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={interior.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone="ocean"
                  badge="Global · 19 countries"
                  label="Our connected teams"
                />
                <div className={interior.heroMediaIcon}>
                  <Icon3D shape="knot" palette="ocean" size={96} floating />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Interactive map"
            title="Hover a pin to explore any region."
            subtitle="Click through for open roles, office directories, and regional hiring programmes."
          />
        </Reveal>
        <WorldMap />
      </section>

      <section className="section container-wide">
        <Reveal>
          <SectionHeader
            eyebrow="Regions"
            title="Start where you are. Move where you want."
            subtitle="Every region hires across every major function — from customer experience to engineering to leadership."
          />
        </Reveal>
        <LocationCards />
      </section>

      <section className="section-dark" style={{
        background: "radial-gradient(800px 400px at 80% 20%, rgba(249, 107, 238, 0.3), transparent 60%), radial-gradient(640px 360px at 10% 90%, rgba(83, 58, 253, 0.35), transparent 60%), var(--c-brand-dark)"
      }}>
        <div className="container-wide">
          <Reveal>
            <SectionHeader
              eyebrow="The footprint"
              title="A company-sized map of where we work."
            />
          </Reveal>
          <StatsBand
            variant="dark"
            animate
            stats={[
              { numericValue: 60, suffix: "+", label: "Physical offices worldwide" },
              { numericValue: 19, label: "Countries we hire in" },
              { numericValue: 5, label: "Global regions" },
              { numericValue: 20, suffix: "+", label: "Languages spoken across teams" },
            ]}
          />
        </div>
      </section>
    </>
  );
}
