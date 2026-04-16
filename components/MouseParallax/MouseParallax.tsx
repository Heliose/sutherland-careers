"use client";

import type { ReactNode } from "react";
import { useRef, useEffect } from "react";
import styles from "./MouseParallax.module.css";

type Props = {
  children: ReactNode;
  intensity?: number;
  className?: string;
};

export function MouseParallax({ children, intensity = 14, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    let raf = 0;
    let targetX = 0;
    let targetY = 0;
    let curX = 0;
    let curY = 0;

    const mql = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mql.matches) return;

    const onMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      targetX = ((e.clientX - cx) / rect.width) * intensity;
      targetY = ((e.clientY - cy) / rect.height) * intensity;
    };

    const tick = () => {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      node.style.setProperty("--mx", `${curX.toFixed(2)}px`);
      node.style.setProperty("--my", `${curY.toFixed(2)}px`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, [intensity]);

  return (
    <div ref={ref} className={`${styles.wrap} ${className}`}>
      {children}
    </div>
  );
}
