import Link from "next/link";
import { notFound } from "next/navigation";
import { MapPin, Phone, ArrowRight } from "lucide-react";
import { SectionHeader } from "@/components/SectionHeader/SectionHeader";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import { StatsBand } from "@/components/StatsBand/StatsBand";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import { regionBySlug } from "@/lib/locations";
import interior from "@/app/interior.module.css";
import styles from "./RegionPage.module.css";

const regionPalette: Record<string, Icon3DPalette> = {
  "north-america": "iris",
  "latin-america": "sunset",
  "asia-pacific": "magenta",
  europe: "ocean",
  mena: "ruby",
};

const regionTone: Record<
  string,
  "purple" | "sunset" | "magenta" | "ocean" | "ruby" | "indigo"
> = {
  "north-america": "indigo",
  "latin-america": "sunset",
  "asia-pacific": "magenta",
  europe: "ocean",
  mena: "ruby",
};

export function RegionPage({ slug }: { slug: string }) {
  const region = regionBySlug(slug);
  if (!region) notFound();

  const palette = regionPalette[slug] ?? "purple";
  const tone = regionTone[slug] ?? "purple";

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
                  <Link href="/locations">Locations</Link>
                  <span className={interior.crumbSep}>/</span>
                  <span>{region.name}</span>
                </nav>
                <Badge variant="purple">{region.short}</Badge>
                <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                  {region.name}
                </h1>
                <p className={interior.pageLead}>{region.blurb}</p>
                <div className={interior.heroActions}>
                  <Button href={`/job-results?region=${region.slug}`}>
                    See {region.short} jobs
                  </Button>
                  <Button href="/locations" variant="ghost">
                    All regions <ArrowRight size={14} strokeWidth={1.5} />
                  </Button>
                </div>
              </div>
            </Reveal>
            <Reveal variant="slide-right" delay={100}>
              <div className={interior.heroMediaWrap}>
                <ImagePlaceholder
                  variant="photo"
                  tone={tone}
                  badge={region.short}
                  label={region.tagline}
                />
                <div className={interior.heroMediaIcon}>
                  <Icon3D shape="knot" palette={palette} size={96} floating />
                </div>
                <div className={interior.heroMediaStickerA}>
                  <Icon3D shape="orb" palette={palette} size={32} floating />
                  <div>
                    <div className={interior.heroMediaStickerLabel}>Open roles</div>
                    <div className={interior.heroMediaStickerVal}>
                      <CountUp to={region.openRoles} />
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
          <div className={styles.split}>
            <div>
              <span className="meta-label">Countries where we hire</span>
              <h2 className="h-section" style={{ marginTop: "var(--s-16)", marginBottom: "var(--s-24)" }}>
                {region.tagline}
              </h2>
              <ul className={styles.countryList}>
                {region.countries.map((c) => (
                  <li key={c} className={styles.countryItem}>
                    <Icon3D shape="orb" palette={palette} size={22} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.statsBox}>
              <StatsBand
                variant="light"
                orientation="vertical"
                animate
                stats={[
                  {
                    numericValue: region.openRoles,
                    label: "Open roles right now",
                  },
                  {
                    numericValue: region.countries.length,
                    label: "Countries in this region",
                  },
                ]}
              />
            </div>
          </div>
        </Reveal>
      </section>

      {region.offices && region.offices.length > 0 && (
        <section
          className="section"
          style={{ background: "var(--c-surface-alt)" }}
        >
          <div className="container-wide">
            <Reveal>
              <SectionHeader
                eyebrow="Office directory"
                title="Where we're based."
                subtitle={`${region.offices.length} offices across ${region.name}.`}
              />
            </Reveal>
            <ul className={styles.officeGrid}>
              {region.offices.map((o, i) => (
                <Reveal
                  key={`${o.city}-${o.state ?? o.country}`}
                  as="li"
                  variant="fade-up"
                  delay={i * 50}
                  className={styles.officeItem}
                >
                  <div className={styles.officeHead}>
                    <div className={styles.officeCity}>
                      <MapPin size={14} strokeWidth={1.5} />
                      {o.city}
                      {o.state && <span className={styles.officeState}>, {o.state}</span>}
                    </div>
                    {o.isHQ && <Badge variant="magenta">Global HQ</Badge>}
                  </div>
                  <div className={styles.officeCountry}>{o.country}</div>
                  {o.phone && (
                    <div className={`${styles.officePhone} tnum`}>
                      <Phone size={12} strokeWidth={1.5} />
                      {o.phone}
                    </div>
                  )}
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="section container-wide">
        <Reveal variant="zoom-in">
          <div className={interior.ctaStripLight}>
            <h2 className={interior.ctaStripLightTitle}>
              Ready to join our {region.name} team?
            </h2>
            <Button href={`/job-results?region=${region.slug}`}>
              Browse {region.short} roles
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
