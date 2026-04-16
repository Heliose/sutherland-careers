import styles from "./AwardsMarquee.module.css";

const awards = [
  "Forbes Global 2000",
  "Great Place to Work",
  "Gartner Magic Quadrant",
  "Everest Group PEAK",
  "ISG Provider Lens",
  "HFS Horizons",
  "Stevie Awards",
  "MetaBeat Excellence",
];

export function AwardsMarquee() {
  return (
    <div className={styles.wrap}>
      <div className={styles.row}>
        {[...awards, ...awards].map((a, i) => (
          <span key={i} className={styles.item}>
            <span className={styles.dot} aria-hidden />
            {a}
          </span>
        ))}
      </div>
    </div>
  );
}
