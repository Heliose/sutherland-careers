import type { ReactNode } from "react";
import styles from "./SectionHeader.module.css";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  size?: "section" | "display";
};

export function SectionHeader({
  eyebrow,
  title,
  subtitle,
  align = "left",
  size = "section",
}: Props) {
  return (
    <div className={`${styles.wrap} ${styles[`align-${align}`]}`}>
      {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
      <h2
        className={
          size === "display" ? "display-lg" : "h-section"
        }
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`body-lg ${styles.subtitle}`}>{subtitle}</p>
      )}
    </div>
  );
}
