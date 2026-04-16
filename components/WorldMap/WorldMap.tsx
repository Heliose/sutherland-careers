"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, ArrowRight, Users } from "lucide-react";
import { regions } from "@/lib/locations";
import { CountUp } from "@/components/CountUp/CountUp";
import styles from "./WorldMap.module.css";

type Pin = {
  slug: string;
  label: string;
  short: string;
  cx: number;
  cy: number;
  roles: number;
};

const pins: Pin[] = [
  { slug: "north-america", label: "North America", short: "NA", cx: 22, cy: 34, roles: 348 },
  { slug: "latin-america", label: "Latin America", short: "LATAM", cx: 28, cy: 60, roles: 212 },
  { slug: "europe", label: "Europe", short: "EU", cx: 50, cy: 28, roles: 186 },
  { slug: "mena", label: "Middle East & North Africa", short: "MENA", cx: 58, cy: 42, roles: 94 },
  { slug: "asia-pacific", label: "Asia Pacific", short: "APAC", cx: 76, cy: 46, roles: 514 },
];

export function WorldMap() {
  const [activePin, setActivePin] = useState<string | null>(null);
  const active = activePin ? pins.find((p) => p.slug === activePin) : null;

  return (
    <div className={styles.wrap}>
      <div className={styles.mapContainer}>
        {/* Stylised SVG world silhouette */}
        <svg
          viewBox="0 0 100 70"
          className={styles.mapSvg}
          aria-hidden
        >
          <defs>
            <radialGradient id="map-glow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="var(--c-primary)" stopOpacity="0.12" />
              <stop offset="100%" stopColor="var(--c-primary)" stopOpacity="0" />
            </radialGradient>
          </defs>
          {/* Continental masses — simplified shapes */}
          <ellipse cx="50" cy="35" rx="48" ry="32" fill="url(#map-glow)" />
          {/* NA */}
          <path d="M8,18 Q12,10 22,12 Q32,10 30,22 Q28,30 20,34 Q12,36 10,28 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* SA */}
          <path d="M22,42 Q26,38 30,42 Q34,50 30,60 Q26,66 22,58 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* Europe */}
          <path d="M44,14 Q48,10 54,14 Q58,18 56,24 Q52,28 46,26 Q42,22 44,14 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* Africa */}
          <path d="M46,30 Q50,28 54,32 Q58,40 54,52 Q50,58 46,50 Q44,40 46,30 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* Asia */}
          <path d="M58,12 Q66,8 80,14 Q90,20 88,32 Q84,40 76,42 Q68,44 62,38 Q56,30 58,12 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* Australia */}
          <path d="M78,52 Q84,48 88,52 Q90,56 86,60 Q82,62 78,58 Z" fill="var(--c-border)" fillOpacity="0.5" />
          {/* Grid dots */}
          {Array.from({ length: 180 }).map((_, i) => {
            const x = (i % 20) * 5 + 2.5;
            const y = Math.floor(i / 20) * 8 + 4;
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="0.3"
                fill="var(--c-border)"
                fillOpacity="0.35"
              />
            );
          })}
        </svg>

        {/* Interactive pins */}
        {pins.map((pin) => {
          const isActive = activePin === pin.slug;
          return (
            <button
              key={pin.slug}
              type="button"
              className={`${styles.pin} ${isActive ? styles.pinActive : ""}`}
              style={{ left: `${pin.cx}%`, top: `${pin.cy}%` }}
              onMouseEnter={() => setActivePin(pin.slug)}
              onMouseLeave={() => setActivePin(null)}
              onFocus={() => setActivePin(pin.slug)}
              onBlur={() => setActivePin(null)}
              aria-label={`${pin.label}: ${pin.roles} open roles`}
            >
              <span className={styles.pinDot} />
              <span className={styles.pinRing} />
              <span className={styles.pinLabel}>{pin.short}</span>
            </button>
          );
        })}

        {/* Tooltip */}
        {active && (
          <div
            className={styles.tooltip}
            style={{
              left: `${active.cx}%`,
              top: `${active.cy}%`,
            }}
          >
            <div className={styles.tooltipInner}>
              <div className={styles.tooltipHead}>
                <MapPin size={14} strokeWidth={1.5} />
                <span className={styles.tooltipName}>{active.label}</span>
              </div>
              <div className={styles.tooltipStats}>
                <div className={styles.tooltipStat}>
                  <span className={`${styles.tooltipStatVal} tnum`}>
                    {active.roles}
                  </span>
                  <span className={styles.tooltipStatLabel}>open roles</span>
                </div>
                <div className={styles.tooltipStat}>
                  <span className={`${styles.tooltipStatVal} tnum`}>
                    {regions.find((r) => r.slug === active.slug)?.countries.length ?? 0}
                  </span>
                  <span className={styles.tooltipStatLabel}>countries</span>
                </div>
              </div>
              <Link
                href={`/locations/${active.slug}`}
                className={styles.tooltipCta}
              >
                Explore {active.short}
                <ArrowRight size={12} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Quick-access pills below the map */}
      <div className={styles.pills}>
        {pins.map((p) => (
          <Link
            key={p.slug}
            href={`/locations/${p.slug}`}
            className={`${styles.pill} ${activePin === p.slug ? styles.pillActive : ""}`}
            onMouseEnter={() => setActivePin(p.slug)}
            onMouseLeave={() => setActivePin(null)}
          >
            <span className={styles.pillShort}>{p.short}</span>
            <span className={styles.pillName}>{p.label}</span>
            <span className={`${styles.pillCount} tnum`}>
              <CountUp to={p.roles} />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
