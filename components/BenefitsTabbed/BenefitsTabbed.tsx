"use client";

import { useState } from "react";
import { benefits, benefitCategories, type BenefitCategory } from "@/lib/benefits";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./BenefitsTabbed.module.css";

type Treatment = { shape: Icon3DShape; palette: Icon3DPalette; span: 3 | 4 | 5 | 6 };

// Tone-mapped treatment per category — gives each tab a palette identity
const categoryPalette: Record<BenefitCategory, Icon3DPalette[]> = {
  health: ["ruby", "magenta", "lime"],
  money: ["iris", "purple", "sunset", "ocean", "magenta"],
  time: ["sunset", "lime", "ocean"],
  growth: ["purple", "iris", "magenta"],
};

const categoryShapes: Record<BenefitCategory, Icon3DShape[]> = {
  health: ["orb", "wave", "knot"],
  money: ["cube", "capsule", "cone", "prism", "donut"],
  time: ["cone", "orb", "wave"],
  growth: ["knot", "cube", "prism"],
};

// Span pattern per position within the filtered list
const spanPattern: (3 | 4 | 5 | 6)[] = [5, 4, 3, 4, 4, 4];

export function BenefitsTabbed() {
  const [active, setActive] = useState<BenefitCategory>("health");

  const activeMeta = benefitCategories.find((c) => c.key === active)!;
  const visible = benefits.filter((b) => b.category === active);

  return (
    <div className={styles.wrap}>
      {/* Tab bar */}
      <div className={styles.tabBar} role="tablist" aria-label="Benefits categories">
        {benefitCategories.map((c) => {
          const count = benefits.filter((b) => b.category === c.key).length;
          const isActive = c.key === active;
          return (
            <button
              key={c.key}
              role="tab"
              aria-selected={isActive}
              aria-controls={`benefits-panel-${c.key}`}
              id={`benefits-tab-${c.key}`}
              className={`${styles.tab} ${isActive ? styles.tabActive : ""}`}
              onClick={() => setActive(c.key)}
            >
              <span className={styles.tabLabel}>{c.label}</span>
              <span className={`${styles.tabCount} tnum`}>{count}</span>
              {isActive && <span className={styles.tabGlow} aria-hidden />}
            </button>
          );
        })}
      </div>

      {/* Tab panel */}
      <div
        className={styles.panel}
        role="tabpanel"
        id={`benefits-panel-${active}`}
        aria-labelledby={`benefits-tab-${active}`}
        key={active}
      >
        <p
          className={styles.panelIntro}
          dangerouslySetInnerHTML={{ __html: activeMeta.description }}
        />
        <ul className={styles.grid}>
          {visible.map((b, i) => {
            const palettes = categoryPalette[b.category];
            const shapes = categoryShapes[b.category];
            const palette = palettes[i % palettes.length];
            const shape = shapes[i % shapes.length];
            const span = spanPattern[i % spanPattern.length];
            return (
              <Reveal
                key={b.name}
                as="li"
                variant="fade-up"
                delay={i * 60}
                className={styles[`span-${span}`]}
              >
                <div className={styles.card}>
                  <Icon3D shape={shape} palette={palette} size={64} floating />
                  <div className={styles.body}>
                    <h3 className={styles.name}>{b.name}</h3>
                    <p className={styles.blurb}>{b.blurb}</p>
                  </div>
                  <span className={styles.index}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
