import { benefits } from "@/lib/benefits";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./BenefitsGrid.module.css";

type Treatment = {
  shape: Icon3DShape;
  palette: Icon3DPalette;
  span: 3 | 4 | 5 | 6;
};

// Bento layout — varied card widths in a 12-col grid
const treatments: Treatment[] = [
  { shape: "cone", palette: "sunset", span: 4 }, // pay increases
  { shape: "capsule", palette: "purple", span: 4 }, // social security
  { shape: "orb", palette: "ruby", span: 4 }, // health insurance
  { shape: "knot", palette: "ocean", span: 5 }, // paid vacation
  { shape: "prism", palette: "lime", span: 3 }, // transportation
  { shape: "cube", palette: "iris", span: 4 }, // employee allowance
  { shape: "donut", palette: "magenta", span: 4 }, // food vouchers
  { shape: "wave", palette: "sand", span: 4 }, // recognition
];

export function BenefitsGrid() {
  return (
    <ul className={styles.grid}>
      {benefits.map((b, i) => {
        const t = treatments[i % treatments.length];
        return (
          <Reveal
            key={b.name}
            as="li"
            variant="fade-up"
            delay={i * 50}
            className={styles[`span-${t.span}`]}
          >
            <div className={styles.card}>
              <Icon3D shape={t.shape} palette={t.palette} size={64} floating />
              <div className={styles.body}>
                <h3 className={styles.name}>{b.name}</h3>
                <p className={styles.blurb}>{b.blurb}</p>
              </div>
              <span className={styles.index}>
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
          </Reveal>
        );
      })}
    </ul>
  );
}
