import { CountUp } from "@/components/CountUp/CountUp";
import styles from "./StatsBand.module.css";

type Stat = {
  value?: string;
  numericValue?: number;
  decimals?: number;
  label: string;
  suffix?: string;
};

type Props = {
  stats: Stat[];
  variant?: "light" | "dark";
  orientation?: "horizontal" | "vertical";
  animate?: boolean;
};

export function StatsBand({
  stats,
  variant = "light",
  orientation = "horizontal",
  animate = false,
}: Props) {
  const style =
    orientation === "horizontal"
      ? { gridTemplateColumns: `repeat(${stats.length}, minmax(0, 1fr))` }
      : undefined;
  return (
    <dl
      className={`${styles.band} ${styles[variant]} ${styles[orientation]}`}
      style={style}
    >
      {stats.map((s) => (
        <div key={s.label} className={styles.item}>
          <dt className={`${styles.value} tnum`}>
            {animate && typeof s.numericValue === "number" ? (
              <CountUp to={s.numericValue} decimals={s.decimals ?? 0} />
            ) : (
              s.value
            )}
            {s.suffix && <span className={styles.suffix}>{s.suffix}</span>}
          </dt>
          <dd className={styles.label}>{s.label}</dd>
        </div>
      ))}
    </dl>
  );
}
