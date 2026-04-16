import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { industries } from "@/lib/industries";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./IndustryGrid.module.css";

type Treatment = {
  shape: Icon3DShape;
  palette: Icon3DPalette;
  size: "s" | "m" | "l";
};

const treatments: Record<string, Treatment> = {
  banking: { shape: "cube", palette: "iris", size: "l" },
  retail: { shape: "orb", palette: "magenta", size: "m" },
  communications: { shape: "wave", palette: "ocean", size: "m" },
  "travel-logistics": { shape: "cone", palette: "sunset", size: "m" },
  energy: { shape: "prism", palette: "lime", size: "m" },
  insurance: { shape: "capsule", palette: "purple", size: "m" },
  technology: { shape: "knot", palette: "purple", size: "l" },
  healthcare: { shape: "orb", palette: "ruby", size: "m" },
  mortgage: { shape: "donut", palette: "sand", size: "m" },
};

export function IndustryGrid() {
  return (
    <ul className={styles.grid}>
      {industries.map((ind, i) => {
        const t = treatments[ind.slug] ?? {
          shape: "orb",
          palette: "purple",
          size: "m",
        };
        return (
          <Reveal
            key={ind.slug}
            as="li"
            variant="fade-up"
            delay={i * 60}
            className={`${styles.item} ${styles[`size-${t.size}`]}`}
          >
            <Link href="/job-results" className={styles.card}>
              <div className={styles.cardHead}>
                <Icon3D shape={t.shape} palette={t.palette} size={64} floating />
                <ArrowUpRight
                  size={16}
                  strokeWidth={1.5}
                  className={styles.arrow}
                />
              </div>
              <div className={styles.cardBody}>
                <span className={styles.meta}>Sector · {String(i + 1).padStart(2, "0")}</span>
                <h3 className={styles.name}>{ind.name}</h3>
                <p className={styles.blurb}>{ind.blurb}</p>
              </div>
              <div className={styles.footBar}>
                <span className={styles.footLabel}>Explore roles</span>
                <span className={styles.footLine} />
              </div>
            </Link>
          </Reveal>
        );
      })}
    </ul>
  );
}
