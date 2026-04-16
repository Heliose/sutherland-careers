"use client";

import Link from "next/link";
import { Upload, FileCheck, AlertCircle } from "lucide-react";
import { Input, Select, TextArea } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import interior from "../interior.module.css";
import styles from "./page.module.css";

export default function JobApplicationPage() {
  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={interior.pageHeroInner}>
            <nav className={interior.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={interior.crumbSep}>/</span>
              <Link href="/job-results">Careers</Link>
              <span className={interior.crumbSep}>/</span>
              <span>Apply</span>
            </nav>
            <Badge variant="purple">Application</Badge>
            <h1 className="display-lg" style={{ marginTop: "var(--s-16)" }}>
              Apply for a role at Sutherland.
            </h1>
            <p className={interior.pageLead}>
              Should take about five minutes. You can pause and come back — we
              save your progress.
            </p>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <div className={styles.layout}>
          <aside className={styles.stepper}>
            <div className={styles.stepperTitle}>Your progress</div>
            <ol className={styles.steps}>
              <li className={`${styles.step} ${styles.stepActive}`}>
                <span className={styles.stepNum}>1</span>
                <div>
                  <div className={styles.stepLabel}>Your details</div>
                  <div className={styles.stepHelp}>Tell us who you are.</div>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNum}>2</span>
                <div>
                  <div className={styles.stepLabel}>Resume &amp; cover letter</div>
                  <div className={styles.stepHelp}>Attach what you have.</div>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNum}>3</span>
                <div>
                  <div className={styles.stepLabel}>Screening questions</div>
                  <div className={styles.stepHelp}>A few role-specific items.</div>
                </div>
              </li>
              <li className={styles.step}>
                <span className={styles.stepNum}>4</span>
                <div>
                  <div className={styles.stepLabel}>Review &amp; submit</div>
                  <div className={styles.stepHelp}>Double-check and send.</div>
                </div>
              </li>
            </ol>
          </aside>

          <form
            className={styles.formCard}
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks — application received.");
            }}
          >
            <div className={styles.greetRow}>
              <h2 className="h-subL">Welcome back.</h2>
              <Badge variant="success">Returning applicant</Badge>
            </div>
            <p className="body">
              We found your profile. Confirm your details below, or update
              anything that has changed.
            </p>

            <div className={styles.divider} />

            <div className={styles.row}>
              <Input label="First name" id="first" required defaultValue="" />
              <Input label="Last name" id="last" required defaultValue="" />
            </div>
            <Input
              label="Email"
              id="email"
              type="email"
              required
              autoComplete="email"
            />
            <div className={styles.row}>
              <Input
                label="Phone"
                id="phone"
                type="tel"
                autoComplete="tel"
                placeholder="+1 555 555 5555"
              />
              <Select label="Country" id="country">
                <option>United States</option>
                <option>Canada</option>
                <option>India</option>
                <option>Philippines</option>
                <option>Mexico</option>
                <option>Colombia</option>
                <option>United Kingdom</option>
                <option>Bulgaria</option>
                <option>Other</option>
              </Select>
            </div>

            <div className={styles.divider} />

            <h3 className={styles.sectionTitle}>Resume</h3>
            <div className={styles.uploadZone}>
              <div className={styles.uploadIcon}>
                <Upload size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className={styles.uploadLabel}>
                  Upload a new resume
                </div>
                <div className={styles.uploadHelp}>
                  PDF, DOC, DOCX · Max 10 MB
                </div>
              </div>
              <Button variant="ghost" size="sm">
                Choose file
              </Button>
            </div>
            <div className={styles.existingRow}>
              <FileCheck size={16} strokeWidth={1.5} />
              <span>Or use the one on file: resume_final_2025.pdf</span>
              <Button variant="ghost" size="sm">
                Use this one
              </Button>
            </div>

            <div className={styles.divider} />

            <h3 className={styles.sectionTitle}>Screening questions</h3>
            <Select label="Are you legally authorised to work in the country where this role is based?" id="auth">
              <option>Please select</option>
              <option>Yes</option>
              <option>No, but I will be by my start date</option>
              <option>No</option>
            </Select>
            <Select label="Will you now or in the future require visa sponsorship?" id="visa">
              <option>Please select</option>
              <option>No</option>
              <option>Yes</option>
            </Select>
            <TextArea
              label="Why Sutherland? (optional, 200 words max)"
              id="why"
              placeholder="Tell us what made you apply."
            />

            <div className={styles.divider} />

            <div className={styles.noteRow}>
              <AlertCircle size={16} strokeWidth={1.5} />
              <span>
                You'll be able to review everything before submitting on the
                next step.
              </span>
            </div>

            <div className={styles.actions}>
              <Button variant="ghost">Save and exit</Button>
              <Button type="submit" size="lg">
                Continue
              </Button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
