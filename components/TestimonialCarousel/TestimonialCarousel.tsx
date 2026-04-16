"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import { testimonials } from "@/lib/testimonials";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DPalette } from "@/components/Icon3D/Icon3D";
import { VideoModal } from "@/components/VideoModal/VideoModal";
import styles from "./TestimonialCarousel.module.css";

const palettes: Icon3DPalette[] = [
  "purple",
  "magenta",
  "ocean",
  "sunset",
  "iris",
  "ruby",
];

export function TestimonialCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [videoOpen, setVideoOpen] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = testimonials.length;

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % total);
    }, 6500);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [paused, total]);

  const current = testimonials[index];
  const palette = palettes[index % palettes.length];

  return (
    <div
      className={styles.wrap}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className={styles.stage}>
        {testimonials.map((t, i) => {
          const isActive = i === index;
          const pal = palettes[i % palettes.length];
          return (
            <article
              key={t.name}
              className={`${styles.slide} ${isActive ? styles.active : ""}`}
              aria-hidden={!isActive}
            >
              <div className={styles.portrait}>
                <ImagePlaceholder
                  variant="portrait"
                  tone={toneFor(pal)}
                  label={`${t.name} · ${t.location}`}
                  badge={pal.toUpperCase()}
                />
                <button
                  type="button"
                  className={styles.playBtn}
                  onClick={() => {
                    setVideoOpen(true);
                    setPaused(true);
                  }}
                  aria-label={`Watch ${t.name}'s story`}
                >
                  <span className={styles.playBtnInner}>
                    <Play size={20} strokeWidth={1.5} />
                  </span>
                  <span className={styles.playBtnMeta}>
                    <span className={styles.playBtnLabel}>Watch story</span>
                    <span className={`${styles.playBtnDuration} tnum`}>
                      2:48
                    </span>
                  </span>
                </button>
                <div className={styles.portraitIcon}>
                  <Icon3D shape="orb" palette={pal} size={72} floating />
                </div>
              </div>
              <div className={styles.quoteCol}>
                <span className={styles.quoteMark} aria-hidden>
                  &ldquo;
                </span>
                <blockquote className={styles.quote}>{t.quote}</blockquote>
                <div className={styles.bylineRow}>
                  <div className={styles.byline}>
                    <div className={styles.bylineName}>{t.name}</div>
                    <div className={styles.bylineRole}>
                      {t.role} · {t.location}
                    </div>
                  </div>
                  <div className={styles.tenure}>
                    <span className={styles.tenureLabel}>Tenure</span>
                    <span className="tnum">{t.tenure}</span>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <div className={styles.controls}>
        <div className={styles.progressRow}>
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              className={`${styles.progress} ${i === index ? styles.progressActive : ""}`}
              onClick={() => setIndex(i)}
              aria-label={`Story ${i + 1} of ${total}: ${t.name}`}
            >
              <span className={styles.progressFill} key={`fill-${index === i ? index : "x"}`} />
            </button>
          ))}
        </div>
        <div className={styles.pager}>
          <span className={styles.pagerNow}>
            <span className="tnum">{(index + 1).toString().padStart(2, "0")}</span>
            <span className={styles.pagerSep}>/</span>
            <span className="tnum">{total.toString().padStart(2, "0")}</span>
          </span>
          <button
            className={styles.arrow}
            aria-label="Previous story"
            onClick={() => setIndex((i) => (i - 1 + total) % total)}
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            className={styles.arrow}
            aria-label="Next story"
            onClick={() => setIndex((i) => (i + 1) % total)}
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <VideoModal
        open={videoOpen}
        onClose={() => {
          setVideoOpen(false);
          setPaused(false);
        }}
        title={`${current.name} — ${current.role}`}
        subtitle={`${current.tenure} at Sutherland · ${current.location}`}
        tone={toneFor(palette)}
      />
    </div>
  );
}

function toneFor(p: Icon3DPalette): "purple" | "magenta" | "ruby" | "sunset" | "ocean" | "indigo" {
  if (p === "iris") return "indigo";
  if (p === "lime" || p === "sand") return "sunset";
  if (p === "sunset" || p === "ocean" || p === "purple" || p === "magenta" || p === "ruby") return p;
  return "purple";
}
