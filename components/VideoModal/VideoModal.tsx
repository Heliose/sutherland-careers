"use client";

import { useEffect, useRef } from "react";
import { X, Play, Volume2 } from "lucide-react";
import styles from "./VideoModal.module.css";

type Props = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  tone?: "purple" | "magenta" | "ocean" | "sunset" | "ruby" | "indigo";
  duration?: string;
};

const toneMap: Record<
  NonNullable<Props["tone"]>,
  string
> = {
  purple: "linear-gradient(135deg, #7c63ff 0%, #533afd 40%, #2e2b8c 100%)",
  magenta: "linear-gradient(135deg, #ff9de8 0%, #f96bee 45%, #7a1e70 100%)",
  ocean: "linear-gradient(135deg, #8bd7ff 0%, #3a9ffd 40%, #0f2e6b 100%)",
  sunset: "linear-gradient(135deg, #ffc98a 0%, #ea7b3e 40%, #7a2b0a 100%)",
  ruby: "linear-gradient(135deg, #ff8aa4 0%, #ea2261 45%, #6b0f2d 100%)",
  indigo: "linear-gradient(135deg, #4c51ff 0%, #1c1e54 55%, #0d1338 100%)",
};

export function VideoModal({
  open,
  onClose,
  title,
  subtitle,
  tone = "purple",
  duration = "2:48",
}: Props) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.backdrop}
      role="dialog"
      aria-modal="true"
      aria-label={`Video: ${title}`}
      onClick={onClose}
    >
      <div className={styles.stage} onClick={(e) => e.stopPropagation()}>
        <button
          ref={closeBtnRef}
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label="Close video"
        >
          <X size={18} strokeWidth={1.5} />
        </button>

        <div className={styles.player} style={{ background: toneMap[tone] }}>
          <span className={styles.grain} aria-hidden />
          <span className={styles.bloomA} aria-hidden />
          <span className={styles.bloomB} aria-hidden />

          <div className={styles.centre}>
            <div className={styles.playBtn}>
              <Play size={22} strokeWidth={1.5} />
            </div>
            <span className={styles.placeholderLabel}>
              Video placeholder · awaiting production footage
            </span>
          </div>

          <div className={styles.chrome}>
            <span className={styles.chip}>
              <Volume2 size={12} strokeWidth={1.5} />
              Subtitles available
            </span>
            <span className={styles.chip}>
              <span className={`${styles.chipDot} tnum`} />
              {duration}
            </span>
          </div>
        </div>

        <div className={styles.caption}>
          <h3 className={styles.title}>{title}</h3>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
