"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Upload,
  Brain,
  MapPin,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Sparkles,
  FileText,
  Loader2,
} from "lucide-react";
import { Button } from "@/components/Button/Button";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { Select } from "@/components/Input/Input";
import { Badge } from "@/components/Badge/Badge";
import { Reveal } from "@/components/Reveal/Reveal";
import { regions } from "@/lib/locations";
import { jobs } from "@/lib/jobs";
import interior from "../interior.module.css";
import styles from "./page.module.css";

type Step = 1 | 2 | 3 | 4;

const steps = [
  { num: 1, icon: Upload, label: "Upload", desc: "Send us your resume" },
  { num: 2, icon: Brain, label: "Parse", desc: "We extract your skills" },
  { num: 3, icon: MapPin, label: "Preferences", desc: "Set location & model" },
  { num: 4, icon: CheckCircle2, label: "Matches", desc: "See your top roles" },
];

const mockSkills = [
  "Customer Experience",
  "Data Analysis",
  "SQL",
  "Team Leadership",
  "Process Improvement",
  "Healthcare Operations",
  "CRM Platforms",
  "English / Spanish Bilingual",
];

export default function SkillMatchPage() {
  const [step, setStep] = useState<Step>(1);
  const [loading, setLoading] = useState(false);

  const next = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStep((s) => Math.min(4, s + 1) as Step);
    }, 1800);
  };

  const back = () => setStep((s) => Math.max(1, s - 1) as Step);

  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <Reveal variant="fade-up">
            <div className={interior.pageHeroInner}>
              <nav className={interior.crumbs} aria-label="Breadcrumb">
                <Link href="/">Home</Link>
                <span className={interior.crumbSep}>/</span>
                <span>AI skill-matcher</span>
              </nav>
              <Badge variant="purple">Beta</Badge>
              <h1 className="display-xl" style={{ marginTop: "var(--s-16)" }}>
                Upload your resume. We&rsquo;ll match you.
              </h1>
              <p className={interior.pageLead}>
                Four steps. Real transparency at each one — we show you exactly
                what we&rsquo;re reading, parsing, and matching against.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section container-wide">
        {/* Stepper */}
        <div className={styles.stepper}>
          {steps.map((s) => {
            const Icon = s.icon;
            const isCurrent = s.num === step;
            const isDone = s.num < step;
            return (
              <div
                key={s.num}
                className={`${styles.step} ${isCurrent ? styles.stepCurrent : ""} ${isDone ? styles.stepDone : ""}`}
              >
                <span className={styles.stepIcon}>
                  {isDone ? (
                    <CheckCircle2 size={16} strokeWidth={1.5} />
                  ) : (
                    <Icon size={16} strokeWidth={1.5} />
                  )}
                </span>
                <span className={styles.stepLabel}>{s.label}</span>
                <span className={styles.stepDesc}>{s.desc}</span>
                {s.num < 4 && <span className={styles.stepLine} />}
              </div>
            );
          })}
        </div>

        {/* Steps */}
        <div className={styles.panel} key={step}>
          {step === 1 && (
            <div className={styles.uploadStep}>
              <div className={styles.uploadIcon}>
                <Icon3D shape="cube" palette="iris" size={96} floating />
              </div>
              <div className={styles.dropZone}>
                <div className={styles.dropIcon}>
                  <FileText size={28} strokeWidth={1} />
                </div>
                <h2 className={styles.dropTitle}>
                  Drop your resume here
                </h2>
                <p className={styles.dropDesc}>
                  PDF, DOCX, or plain text. Max 10 MB. We read it once, extract
                  skills, and discard the file.
                </p>
                <Button onClick={next} size="lg">
                  Choose file & continue
                  <ArrowRight size={14} strokeWidth={1.5} />
                </Button>
                <div className={styles.altSources}>
                  <span className={styles.altLabel}>Or import from</span>
                  <button className={styles.altBtn}>LinkedIn</button>
                  <button className={styles.altBtn}>Google Drive</button>
                </div>
              </div>
              <p className={styles.transparency}>
                <Sparkles size={14} strokeWidth={1.5} />
                <strong>What happens next:</strong> We parse your resume into a
                list of skills. You review and edit that list before we match.
              </p>
            </div>
          )}

          {step === 2 && (
            <div className={styles.parseStep}>
              {loading ? (
                <div className={styles.loadingState}>
                  <Loader2 size={32} strokeWidth={1.5} className={styles.spinner} />
                  <h2 className={styles.loadingTitle}>
                    Reading your resume…
                  </h2>
                  <p className={styles.loadingDesc}>
                    Extracting skills, experience, and qualifications. This
                    takes about 3 seconds.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className={styles.stepTitle}>
                    We found <span className="tnum">{mockSkills.length}</span>{" "}
                    skills. Edit if we missed anything.
                  </h2>
                  <div className={styles.skillChips}>
                    {mockSkills.map((s) => (
                      <span key={s} className={styles.skillChip}>
                        {s}
                        <button className={styles.chipX} aria-label={`Remove ${s}`}>
                          ×
                        </button>
                      </span>
                    ))}
                    <button className={styles.addChip}>+ Add skill</button>
                  </div>
                  <p className={styles.transparency}>
                    <Sparkles size={14} strokeWidth={1.5} />
                    <strong>Transparency:</strong> These skills were extracted
                    from your resume text. We don&rsquo;t store the file — only
                    this skill list, for the duration of your session.
                  </p>
                  <div className={styles.stepActions}>
                    <Button variant="ghost" onClick={back}>
                      <ArrowLeft size={14} strokeWidth={1.5} />
                      Back
                    </Button>
                    <Button onClick={next} size="lg">
                      Confirm skills & continue
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 3 && (
            <div className={styles.prefsStep}>
              {loading ? (
                <div className={styles.loadingState}>
                  <Loader2 size={32} strokeWidth={1.5} className={styles.spinner} />
                  <h2 className={styles.loadingTitle}>
                    Matching against 1,427 open roles…
                  </h2>
                  <p className={styles.loadingDesc}>
                    Scoring by skill overlap, location fit, and work-model
                    preference.
                  </p>
                </div>
              ) : (
                <>
                  <h2 className={styles.stepTitle}>
                    Almost there — a few preferences.
                  </h2>
                  <div className={styles.prefsGrid}>
                    <Select label="Preferred region" id="pref-region">
                      <option>Any region</option>
                      {regions.map((r) => (
                        <option key={r.slug}>{r.name}</option>
                      ))}
                    </Select>
                    <Select label="Work model" id="pref-model">
                      <option>No preference</option>
                      <option>Remote</option>
                      <option>Hybrid</option>
                      <option>On-site</option>
                    </Select>
                    <Select label="Work type" id="pref-type">
                      <option>Full-time</option>
                      <option>Part-time</option>
                      <option>Contract</option>
                    </Select>
                    <Select label="Minimum salary (USD equivalent)" id="pref-sal">
                      <option>Any salary</option>
                      <option>$30,000+</option>
                      <option>$50,000+</option>
                      <option>$80,000+</option>
                      <option>$120,000+</option>
                    </Select>
                  </div>
                  <p className={styles.transparency}>
                    <Sparkles size={14} strokeWidth={1.5} />
                    <strong>Transparency:</strong> We&rsquo;re about to score
                    your {mockSkills.length} skills against 1,427 active
                    requisitions using cosine similarity on normalised skill
                    embeddings. The top matches will show in 2–3 seconds.
                  </p>
                  <div className={styles.stepActions}>
                    <Button variant="ghost" onClick={back}>
                      <ArrowLeft size={14} strokeWidth={1.5} />
                      Back
                    </Button>
                    <Button onClick={next} size="lg">
                      Show me matches
                      <ArrowRight size={14} strokeWidth={1.5} />
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}

          {step === 4 && (
            <div className={styles.resultsStep}>
              {loading ? (
                <div className={styles.loadingState}>
                  <Loader2 size={32} strokeWidth={1.5} className={styles.spinner} />
                  <h2 className={styles.loadingTitle}>
                    Found 12 strong matches.
                  </h2>
                </div>
              ) : (
                <>
                  <div className={styles.resultsBanner}>
                    <Icon3D shape="orb" palette="magenta" size={72} floating />
                    <div>
                      <h2 className={styles.stepTitle}>
                        <span className="tnum">12</span> strong matches for your
                        profile.
                      </h2>
                      <p className={styles.resultsSubtitle}>
                        Ranked by skill overlap × location fit × model match.
                      </p>
                    </div>
                  </div>
                  <ul className={styles.matchList}>
                    {jobs.slice(0, 5).map((j, i) => (
                      <li key={j.id} className={styles.matchCard}>
                        <span className={`${styles.matchScore} tnum`}>
                          {96 - i * 7}%
                        </span>
                        <div className={styles.matchBody}>
                          <h3 className={styles.matchTitle}>{j.title}</h3>
                          <span className={styles.matchMeta}>
                            {j.city}, {j.country} · {j.workType} · {j.workModel}
                          </span>
                        </div>
                        <Link
                          href={`/job-application?id=${j.id}`}
                          className={styles.matchCta}
                        >
                          Apply
                          <ArrowRight size={12} strokeWidth={1.5} />
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className={styles.stepActions}>
                    <Button variant="ghost" onClick={() => setStep(1)}>
                      Start over
                    </Button>
                    <Button href="/job-results" size="lg">
                      Browse all 1,427 roles
                    </Button>
                  </div>
                </>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
