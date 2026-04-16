"use client";

import { useState } from "react";
import { Mail, Bell, Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { jobCategories } from "@/lib/jobs";
import { regions } from "@/lib/locations";
import styles from "./TalentCommunity.module.css";

type Frequency = "daily" | "weekly" | "monthly";

export function TalentCommunity() {
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState(jobCategories[0]);
  const [region, setRegion] = useState("All regions");
  const [frequency, setFrequency] = useState<Frequency>("weekly");
  const [submitted, setSubmitted] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className={styles.section}>
        <div className={`container-wide ${styles.card}`}>
          <span className={styles.blobA} aria-hidden />
          <span className={styles.blobB} aria-hidden />
          <div className={styles.successWrap}>
            <div className={styles.successIcon}>
              <Check size={24} strokeWidth={2} />
            </div>
            <h2 className={styles.successTitle}>Check your inbox.</h2>
            <p className={styles.successCopy}>
              We sent a confirmation to{" "}
              <span className={styles.emailEm}>{email}</span>. Click the link
              inside and we&rsquo;ll start sending <strong>{frequency}</strong>{" "}
              alerts for <strong>{category}</strong> roles across{" "}
              <strong>{region}</strong>.
            </p>
            <p className={styles.successFinePrint}>
              No confirmation? Check your spam folder. You can unsubscribe any
              time from any email we send.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={styles.section}>
      <div className={`container-wide ${styles.card}`}>
        <span className={styles.blobA} aria-hidden />
        <span className={styles.blobB} aria-hidden />

        <div className={styles.grid}>
          <div className={styles.left}>
            <div className={styles.iconRow}>
              <Icon3D shape="orb" palette="magenta" size={48} floating />
              <Icon3D shape="donut" palette="ocean" size={48} floating />
              <Icon3D shape="cone" palette="sunset" size={48} floating />
            </div>
            <span className={styles.eyebrow}>Talent community</span>
            <h2 className={styles.title}>
              Not ready to apply? <span className={styles.titleEm}>Stay close.</span>
            </h2>
            <p className={styles.copy}>
              Get curated roles in your inbox — only the ones that match your
              category, region, and cadence. Unsubscribe any time with a single
              click.
            </p>
            <ul className={styles.bullets}>
              <li className={styles.bullet}>
                <span className={styles.bulletDot} />
                Matching roles only — we won&rsquo;t fire-hose you
              </li>
              <li className={styles.bullet}>
                <span className={styles.bulletDot} />
                First dibs on Tech Step cohort openings
              </li>
              <li className={styles.bullet}>
                <span className={styles.bulletDot} />
                Unsubscribe in one click
              </li>
            </ul>
          </div>

          <form className={styles.form} onSubmit={submit} noValidate>
            <div className={styles.formHead}>
              <Bell size={14} strokeWidth={1.5} />
              <span>Join the talent community</span>
            </div>

            <label className={styles.field}>
              <span className={styles.label}>Email</span>
              <div className={styles.inputWrap}>
                <Mail size={14} strokeWidth={1.5} className={styles.inputIcon} />
                <input
                  type="email"
                  required
                  placeholder="you@personal.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={styles.input}
                />
              </div>
            </label>

            <div className={styles.pair}>
              <label className={styles.field}>
                <span className={styles.label}>Category</span>
                <select
                  className={styles.select}
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {jobCategories.map((c) => (
                    <option key={c}>{c}</option>
                  ))}
                </select>
              </label>
              <label className={styles.field}>
                <span className={styles.label}>Region</span>
                <select
                  className={styles.select}
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option>All regions</option>
                  {regions.map((r) => (
                    <option key={r.slug}>{r.name}</option>
                  ))}
                </select>
              </label>
            </div>

            <fieldset className={styles.freq}>
              <legend className={styles.label}>Cadence</legend>
              <div className={styles.freqRow}>
                {(["daily", "weekly", "monthly"] as Frequency[]).map((f) => (
                  <label
                    key={f}
                    className={`${styles.freqOpt} ${
                      frequency === f ? styles.freqOptActive : ""
                    }`}
                  >
                    <input
                      type="radio"
                      name="frequency"
                      value={f}
                      checked={frequency === f}
                      onChange={() => setFrequency(f)}
                    />
                    <span>{f.charAt(0).toUpperCase() + f.slice(1)}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <Button type="submit" size="lg" fullWidth>
              Send me matching roles
              <ArrowRight size={14} strokeWidth={1.5} />
            </Button>

            <p className={styles.finePrint}>
              By subscribing you agree to our{" "}
              <a href="#" className={styles.finePrintLink}>
                privacy policy
              </a>
              . We use double opt-in — check your inbox after submitting.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
