"use client";

import { useEffect, useRef } from "react";
import styles from "./JourneyLine.module.css";

export function JourneyLine() {
  const svgRef = useRef<SVGSVGElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const svg = svgRef.current;
    if (!path || !svg) return;

    // Measure total path length and set initial dasharray/offset
    const len = path.getTotalLength();
    path.style.strokeDasharray = `${len}`;
    path.style.strokeDashoffset = `${len}`;

    // Respect reduced-motion
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      path.style.strokeDashoffset = "0";
      return;
    }

    const onScroll = () => {
      const rect = svg.getBoundingClientRect();
      const vh = window.innerHeight;
      // Progress: 0 when top of SVG enters viewport bottom, 1 when bottom of SVG passes viewport top
      const start = rect.top + window.scrollY - vh;
      const end = rect.bottom + window.scrollY;
      const raw = (window.scrollY - start) / (end - start);
      const progress = Math.min(1, Math.max(0, raw));
      path.style.strokeDashoffset = `${len * (1 - progress)}`;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={styles.svg}
      viewBox="0 0 200 3600"
      preserveAspectRatio="none"
      aria-hidden
    >
      <defs>
        <linearGradient id="journey-grad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="var(--c-primary)" stopOpacity="0.3" />
          <stop offset="30%" stopColor="var(--c-accent-magenta)" stopOpacity="0.5" />
          <stop offset="60%" stopColor="var(--c-accent-electric, #00e0ff)" stopOpacity="0.4" />
          <stop offset="100%" stopColor="var(--c-primary)" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        ref={pathRef}
        d="
          M 100,0
          C 40,200 160,400 100,600
          C 40,800 160,1000 100,1200
          C 40,1400 160,1600 100,1800
          C 40,2000 160,2200 100,2400
          C 40,2600 160,2800 100,3000
          C 40,3200 160,3400 100,3600
        "
        fill="none"
        stroke="url(#journey-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeDasharray="12 6"
        className={styles.path}
      />
      {/* Dot markers at each section crossing */}
      {[0, 600, 1200, 1800, 2400, 3000, 3600].map((y) => (
        <circle
          key={y}
          cx="100"
          cy={y}
          r="4"
          fill="var(--c-primary)"
          fillOpacity="0.35"
          className={styles.dot}
        />
      ))}
    </svg>
  );
}
