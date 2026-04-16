import type { ReactNode } from "react";
import styles from "./Card.module.css";

type Variant = "standard" | "elevated" | "featured" | "dark" | "flat";

type Props = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  as?: "div" | "article" | "section" | "li";
  hover?: boolean;
};

export function Card({
  children,
  variant = "standard",
  className = "",
  as: Tag = "div",
  hover = false,
}: Props) {
  const classes = [
    styles.card,
    styles[variant],
    hover ? styles.hover : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");
  return <Tag className={classes}>{children}</Tag>;
}
