"use client";

import type { CSSProperties, ReactNode, ElementType } from "react";
import { useInView } from "@/hooks/useInView";
import styles from "./Reveal.module.css";

type Variant = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "zoom-in";

type Props = {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  duration?: number;
  as?: ElementType;
  className?: string;
  style?: CSSProperties;
};

export function Reveal({
  children,
  variant = "fade-up",
  delay = 0,
  duration = 700,
  as: Tag = "div",
  className = "",
  style,
}: Props) {
  const { ref, inView } = useInView<HTMLDivElement>();
  const combined: CSSProperties = {
    transitionDelay: `${delay}ms`,
    transitionDuration: `${duration}ms`,
    ...style,
  };
  const props = {
    ref,
    className: `${styles.reveal} ${styles[variant]} ${
      inView ? styles.in : ""
    } ${className}`,
    style: combined,
  } as Record<string, unknown>;
  return <Tag {...props}>{children}</Tag>;
}
