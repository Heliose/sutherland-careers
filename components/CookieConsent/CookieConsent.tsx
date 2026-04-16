"use client";

import { useEffect, useState } from "react";
import { Cookie, Settings2, Check, X } from "lucide-react";
import { Button } from "@/components/Button/Button";
import styles from "./CookieConsent.module.css";

type Prefs = {
  strictly: boolean;
  analytics: boolean;
  marketing: boolean;
  personalisation: boolean;
};

const STORAGE_KEY = "sg-cookie-consent-v1";
const DEFAULT_PREFS: Prefs = {
  strictly: true,
  analytics: false,
  marketing: false,
  personalisation: false,
};

export function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const [customizing, setCustomizing] = useState(false);
  const [prefs, setPrefs] = useState<Prefs>(DEFAULT_PREFS);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      if (!stored) {
        setTimeout(() => setVisible(true), 900);
      }
    } catch {
      setTimeout(() => setVisible(true), 900);
    }
  }, []);

  const save = (next: Prefs) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  const acceptAll = () =>
    save({ strictly: true, analytics: true, marketing: true, personalisation: true });
  const rejectAll = () => save(DEFAULT_PREFS);
  const savePrefs = () => save(prefs);

  if (!visible) return null;

  return (
    <div
      className={styles.wrap}
      role="dialog"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-body"
    >
      <div className={styles.sheet}>
        <div className={styles.topRow}>
          <div className={styles.badge} aria-hidden>
            <Cookie size={18} strokeWidth={1.5} />
          </div>
          <button
            type="button"
            onClick={rejectAll}
            className={styles.closeBtn}
            aria-label="Reject optional cookies and close"
          >
            <X size={14} strokeWidth={1.5} />
          </button>
        </div>

        <div className={styles.body}>
          <h2 id="cookie-title" className={styles.title}>
            Your privacy, your call.
          </h2>
          <p id="cookie-body" className={styles.copy}>
            We use cookies to make the careers site work, remember your saved
            jobs, and help us understand which pages help candidates the most.
            You decide what&rsquo;s on.
          </p>

          {!customizing && (
            <div className={styles.actions}>
              <Button onClick={acceptAll} size="md">
                Accept all
              </Button>
              <Button onClick={rejectAll} variant="ghost" size="md">
                Reject non-essential
              </Button>
              <button
                type="button"
                className={styles.customize}
                onClick={() => setCustomizing(true)}
              >
                <Settings2 size={14} strokeWidth={1.5} />
                Customise
              </button>
            </div>
          )}

          {customizing && (
            <div className={styles.customPane}>
              <ul className={styles.prefList}>
                <PrefRow
                  title="Strictly necessary"
                  desc="Keeps the site working. Login, security, saved-jobs memory."
                  checked
                  locked
                />
                <PrefRow
                  title="Analytics"
                  desc="Aggregated traffic patterns so we know what helps candidates."
                  checked={prefs.analytics}
                  onChange={(v) => setPrefs({ ...prefs, analytics: v })}
                />
                <PrefRow
                  title="Personalisation"
                  desc="Remembers your region and preferred categories for better job matches."
                  checked={prefs.personalisation}
                  onChange={(v) => setPrefs({ ...prefs, personalisation: v })}
                />
                <PrefRow
                  title="Marketing"
                  desc="Lets us show you relevant roles on other sites. Off by default."
                  checked={prefs.marketing}
                  onChange={(v) => setPrefs({ ...prefs, marketing: v })}
                />
              </ul>
              <div className={styles.actionsRow}>
                <Button onClick={savePrefs} size="md">
                  Save preferences
                </Button>
                <button
                  type="button"
                  className={styles.link}
                  onClick={() => setCustomizing(false)}
                >
                  Back
                </button>
              </div>
            </div>
          )}

          <p className={styles.legal}>
            Read our{" "}
            <a href="#" className={styles.legalLink}>
              privacy policy
            </a>{" "}
            and{" "}
            <a href="#" className={styles.legalLink}>
              cookie policy
            </a>
            . You can change this any time at the bottom of any page.
          </p>
        </div>
      </div>
    </div>
  );
}

function PrefRow({
  title,
  desc,
  checked,
  locked,
  onChange,
}: {
  title: string;
  desc: string;
  checked: boolean;
  locked?: boolean;
  onChange?: (v: boolean) => void;
}) {
  return (
    <li className={styles.prefRow}>
      <div className={styles.prefText}>
        <span className={styles.prefTitle}>{title}</span>
        <span className={styles.prefDesc}>{desc}</span>
      </div>
      <label className={`${styles.toggle} ${locked ? styles.toggleLocked : ""}`}>
        <input
          type="checkbox"
          checked={checked}
          disabled={locked}
          onChange={(e) => onChange?.(e.target.checked)}
          aria-label={title}
        />
        <span className={styles.track}>
          <span className={styles.thumb}>
            {checked && <Check size={10} strokeWidth={3} />}
          </span>
        </span>
      </label>
    </li>
  );
}
