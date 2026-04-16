import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { regions } from "@/lib/locations";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Reveal } from "@/components/Reveal/Reveal";
import { CountUp } from "@/components/CountUp/CountUp";
import styles from "./LocationCards.module.css";

const regionPalette: Record<string, Icon3DPalette> = {
  "north-america": "purple",
  "latin-america": "sunset",
  "asia-pacific": "magenta",
  europe: "ocean",
  mena: "ruby",
};

const regionTone: Record<string, "purple" | "sunset" | "magenta" | "ocean" | "ruby" | "indigo"> = {
  "north-america": "indigo",
  "latin-america": "sunset",
  "asia-pacific": "magenta",
  europe: "ocean",
  mena: "ruby",
};

export function LocationCards() {
  return (
    <ul className={styles.grid}>
      {regions.map((r, i) => (
        <Reveal
          key={r.slug}
          as="li"
          variant="fade-up"
          delay={i * 80}
          className={styles.item}
        >
          <Link href={`/locations/${r.slug}`} className={styles.card}>
            <div className={styles.cover}>
              <ImagePlaceholder
                variant="landscape"
                tone={regionTone[r.slug] ?? "purple"}
                badge={r.short}
              />
              <div className={styles.coverIcon}>
                <Icon3D
                  shape="orb"
                  palette={regionPalette[r.slug] ?? "purple"}
                  size={56}
                  floating
                />
              </div>
            </div>

            <div className={styles.body}>
              <div className={styles.titleRow}>
                <h3 className={styles.name}>{r.name}</h3>
                <ArrowUpRight size={16} strokeWidth={1.5} className={styles.arrow} />
              </div>
              <p className={styles.tagline}>{r.tagline}</p>

              <div className={styles.countries}>
                {r.countries.map((c) => (
                  <span key={c} className={styles.country}>
                    {c}
                  </span>
                ))}
              </div>

              <div className={styles.meta}>
                <span className={styles.metaVal}>
                  <CountUp to={r.openRoles} />
                </span>
                <span className={styles.metaLabel}>Open roles</span>
                <span className={styles.metaSpacer} />
                <span className={styles.metaVal}>{r.countries.length}</span>
                <span className={styles.metaLabel}>Countries</span>
              </div>
            </div>
          </Link>
        </Reveal>
      ))}
    </ul>
  );
}
