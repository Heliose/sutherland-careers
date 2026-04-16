import type { ReactNode } from "react";
import styles from "./Badge.module.css";

type Variant = "neutral" | "success" | "purple" | "magenta";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

export function Badge({ children, variant = "neutral", className = "" }: Props) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {children}
    </span>
  );
}
