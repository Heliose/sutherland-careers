"use client";

import Link from "next/link";
import { Input, Select, TextArea } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import styles from "./page.module.css";

export function ContactForm() {
  return (
    <div className={styles.formCard}>
      <h2 className="h-subL" style={{ marginBottom: "var(--s-24)" }}>
        Send us a message
      </h2>
      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          alert("Thanks — a recruiter will follow up.");
        }}
      >
        <div className={styles.row}>
          <Input label="First name" id="first" required autoComplete="given-name" />
          <Input label="Last name" id="last" required autoComplete="family-name" />
        </div>
        <Input
          label="Email"
          id="email"
          type="email"
          required
          placeholder="you@company.com"
          autoComplete="email"
        />
        <Input
          label="Phone (optional)"
          id="phone"
          type="tel"
          placeholder="+1 555 555 5555"
          autoComplete="tel"
        />
        <Select label="What is this about?" id="reason">
          <option>General enquiry</option>
          <option>A specific job opening</option>
          <option>Application support</option>
          <option>Referral programme</option>
          <option>Partnership or media</option>
        </Select>
        <TextArea
          label="Message"
          id="message"
          placeholder="Tell us what you need help with."
          required
        />
        <span className={styles.privacy}>
          By submitting you agree to our{" "}
          <Link href="#">privacy policy</Link>. We only use this to follow up
          about your enquiry.
        </span>
        <Button type="submit" size="lg">
          Send message
        </Button>
      </form>
    </div>
  );
}
