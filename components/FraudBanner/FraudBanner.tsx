"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ShieldAlert, X, ChevronDown } from "lucide-react";
import styles from "./FraudBanner.module.css";

const STORAGE_KEY = "sg-fraud-banner-dismissed";

export function FraudBanner() {
  const [dismissed, setDismissed] = useState(true);
  const [expanded, setExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (stored !== "1") setDismissed(false);
    } catch {
      setDismissed(false);
    }
  }, []);

  if (!mounted || dismissed) return null;

  const dismiss = () => {
    setDismissed(true);
    try {
      window.localStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <div
      className={`${styles.banner} ${expanded ? styles.expanded : ""}`}
      role="alert"
      aria-live="polite"
    >
      <div className={`container-wide ${styles.inner}`}>
        <div className={styles.icon} aria-hidden>
          <ShieldAlert size={16} strokeWidth={1.5} />
        </div>
        <div className={styles.body}>
          <div className={styles.row}>
            <span className={styles.title}>Recruitment-fraud advisory.</span>
            <span className={styles.copy}>
              We never ask for payment or personal banking details during
              hiring.
            </span>
            <button
              type="button"
              className={styles.moreBtn}
              onClick={() => setExpanded((v) => !v)}
              aria-expanded={expanded}
            >
              {expanded ? "Hide details" : "Learn more"}
              <ChevronDown
                size={12}
                strokeWidth={1.5}
                className={expanded ? styles.chevOpen : ""}
              />
            </button>
          </div>
          {expanded && (
            <div className={styles.details}>
              <p className={styles.detailsP}>
                Legitimate communications from our recruiting team always come
                from one of these verified domains:
              </p>
              <ul className={styles.domainList}>
                <li className={styles.domain}>
                  <span className="tnum">@sutherlandglobal.com</span>
                </li>
                <li className={styles.domain}>
                  <span className="tnum">@sutherland.com</span>
                </li>
                <li className={styles.domain}>
                  <span className="tnum">@jobs.sutherlandglobal.com</span>
                </li>
              </ul>
              <p className={styles.detailsP}>
                If you receive a suspicious message,{" "}
                <Link href="/contact" className={styles.detailsLink}>
                  report it to our security team
                </Link>
                . We take every report seriously.
              </p>
            </div>
          )}
        </div>
        <button
          type="button"
          className={styles.close}
          onClick={dismiss}
          aria-label="Dismiss recruitment-fraud advisory"
        >
          <X size={14} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}
