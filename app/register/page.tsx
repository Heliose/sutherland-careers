"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, AlertCircle } from "lucide-react";
import { Input, Select } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import interior from "../interior.module.css";
import styles from "./page.module.css";

export default function RegisterPage() {
  const [password, setPassword] = useState("");

  const rules = [
    { label: "At least 8 characters", ok: password.length >= 8 },
    { label: "One uppercase letter", ok: /[A-Z]/.test(password) },
    { label: "One number", ok: /\d/.test(password) },
    {
      label: "One special character (!@#$%^&*?)",
      ok: /[!@#$%^&*?]/.test(password),
    },
  ];

  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={interior.pageHeroInner}>
            <nav className={interior.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={interior.crumbSep}>/</span>
              <span>Register</span>
            </nav>
            <span className="eyebrow">Create your account</span>
            <h1 className="display-lg">
              One account. Every Sutherland role.
            </h1>
            <p className={interior.pageLead}>
              Save jobs, track applications, and come back to your progress
              whenever you're ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <div className={styles.layout}>
          <div className={styles.formCard}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                alert("Demo only — account not created.");
              }}
              className={styles.form}
            >
              <div className={styles.socialRow}>
                <Button variant="ghost" fullWidth>
                  <LinkedInIcon /> Continue with LinkedIn
                </Button>
                <Button variant="ghost" fullWidth>
                  <GoogleIcon /> Continue with Google
                </Button>
              </div>
              <div className={styles.sep}>
                <span>or register with email</span>
              </div>
              <div className={styles.row}>
                <Input label="First name" id="first" required autoComplete="given-name" />
                <Input label="Last name" id="last" required autoComplete="family-name" />
              </div>
              <Input
                label="Email"
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="you@personal.com"
              />
              <div className={styles.row}>
                <Input
                  label="Phone (optional)"
                  id="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+1 555 555 5555"
                />
                <Select label="Country" id="country">
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Jamaica</option>
                  <option>Mexico</option>
                  <option>Colombia</option>
                  <option>Brazil</option>
                  <option>Bulgaria</option>
                  <option>Kosovo</option>
                  <option>United Kingdom</option>
                  <option>India</option>
                  <option>Philippines</option>
                  <option>Malaysia</option>
                  <option>United Arab Emirates</option>
                  <option>Egypt</option>
                  <option>Other</option>
                </Select>
              </div>
              <div>
                <Input
                  label="Password"
                  id="password"
                  type="password"
                  required
                  autoComplete="new-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <ul className={styles.rules}>
                  {rules.map((r) => (
                    <li
                      key={r.label}
                      className={`${styles.rule} ${
                        r.ok ? styles.ruleOk : ""
                      }`}
                    >
                      {r.ok ? (
                        <Check size={12} strokeWidth={2} />
                      ) : (
                        <AlertCircle size={12} strokeWidth={1.5} />
                      )}
                      {r.label}
                    </li>
                  ))}
                </ul>
              </div>
              <label className={styles.checkRow}>
                <input type="checkbox" required />
                <span>
                  I agree to the{" "}
                  <Link href="#">terms of use</Link> and{" "}
                  <Link href="#">privacy policy</Link>.
                </span>
              </label>
              <Button type="submit" size="lg">
                Create account
              </Button>
              <span className={styles.foot}>
                Already have an account? <Link href="#">Sign in</Link>
              </span>
            </form>
          </div>

          <aside className={styles.aside}>
            <div className={styles.benefitsCard}>
              <h3 className={styles.asideTitle}>What you get</h3>
              <ul className={styles.benefitList}>
                <li>
                  <span className={styles.benefitDot}>✓</span>
                  One-click applications to saved roles
                </li>
                <li>
                  <span className={styles.benefitDot}>✓</span>
                  Personalised alerts when matching jobs open
                </li>
                <li>
                  <span className={styles.benefitDot}>✓</span>
                  Progress-tracked applications across regions
                </li>
                <li>
                  <span className={styles.benefitDot}>✓</span>
                  Referral Portal access (if you're a teammate or alum)
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function LinkedInIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M4 3.5A1.5 1.5 0 1 1 4 6.5a1.5 1.5 0 0 1 0-3zm-1 5h2v12H3v-12zm5 0h1.9v1.6h.03c.27-.5 1.0-1.07 2.07-1.07 2.2 0 2.6 1.45 2.6 3.33v8.14h-2v-7.2c0-1.72-.03-3.94-2.4-3.94-2.4 0-2.77 1.88-2.77 3.82v7.32h-2v-12z" />
    </svg>
  );
}

function GoogleIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="#ea2261"
        d="M12 10.2v3.6h5.04c-.2 1.25-.82 2.3-1.74 3v2.5h2.82c1.65-1.52 2.6-3.77 2.6-6.46 0-.6-.05-1.18-.14-1.74H12z"
      />
      <path
        fill="#15be53"
        d="M6.5 13.7l-.6.46-2.19 1.7C5.1 19.02 8.27 21 12 21c2.62 0 4.82-.86 6.42-2.33l-2.82-2.5c-.78.52-1.78.84-3.0.84-2.31 0-4.27-1.56-4.97-3.67l-.13.34z"
      />
      <path
        fill="#9b6829"
        d="M3.71 7.14A9 9 0 0 0 3 12c0 1.55.37 3 .71 4.86l3.36-2.6A5.4 5.4 0 0 1 6.6 12c0-.79.14-1.55.36-2.26L3.71 7.14z"
      />
      <path
        fill="#533afd"
        d="M12 6.6c1.43 0 2.7.5 3.7 1.45l2.5-2.5C16.82 4.1 14.62 3 12 3 8.27 3 5.1 4.98 3.71 7.14l3.36 2.6C7.73 7.64 9.69 6.6 12 6.6z"
      />
    </svg>
  );
}
