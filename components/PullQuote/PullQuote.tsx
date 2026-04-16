import type { ReactNode } from "react";
import styles from "./PullQuote.module.css";

type Props = {
  children: ReactNode;
  cite?: string;
  role?: string;
  variant?: "default" | "accent" | "dark";
  align?: "left" | "center";
  className?: string;
};

export function PullQuote({
  children,
  cite,
  role,
  variant = "default",
  align = "center",
  className = "",
}: Props) {
  return (
    <figure
      className={`${styles.wrap} ${styles[variant]} ${styles[`align-${align}`]} ${className}`}
    >
      <span className={styles.mark} aria-hidden>
        &ldquo;
      </span>
      <blockquote className={styles.quote}>{children}</blockquote>
      {(cite || role) && (
        <figcaption className={styles.cite}>
          {cite && <span className={styles.citeName}>{cite}</span>}
          {cite && role && <span className={styles.citeSep}>·</span>}
          {role && <span className={styles.citeRole}>{role}</span>}
        </figcaption>
      )}
    </figure>
  );
}
