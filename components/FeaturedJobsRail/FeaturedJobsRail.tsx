"use client";

import Link from "next/link";
import { useRef } from "react";
import { ArrowLeft, ArrowRight, MapPin, Wallet, Sparkles, Bookmark } from "lucide-react";
import { jobs, formatSalary } from "@/lib/jobs";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import type { Icon3DShape, Icon3DPalette } from "@/components/Icon3D/Icon3D";
import styles from "./FeaturedJobsRail.module.css";

// Curate six "featured" jobs by id
const featuredIds = [
  "SG-2048", // Cloud Engineer — AWS
  "SG-2047", // Team Manager — CX
  "SG-2057", // CX Associate Work from Home
  "SG-2042", // Senior IT Support Engineer
  "SG-2050", // Data Analyst — Healthcare
  "SG-2061", // Contact Center Ops Manager
];

const treatments: { shape: Icon3DShape; palette: Icon3DPalette }[] = [
  { shape: "cube", palette: "iris" },
  { shape: "orb", palette: "magenta" },
  { shape: "capsule", palette: "ocean" },
  { shape: "cone", palette: "purple" },
  { shape: "knot", palette: "sunset" },
  { shape: "donut", palette: "ruby" },
];

export function FeaturedJobsRail() {
  const scrollerRef = useRef<HTMLDivElement>(null);

  const featured = featuredIds
    .map((id) => jobs.find((j) => j.id === id))
    .filter(Boolean) as typeof jobs;

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector<HTMLElement>("[data-featured-card]");
    const step = card ? card.offsetWidth + 20 : 360;
    el.scrollBy({ left: step * dir, behavior: "smooth" });
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <span className="meta-label">Featured openings</span>
          <h2 className={styles.title}>
            Six roles our hiring managers are watching closely.
          </h2>
        </div>
        <div className={styles.controls}>
          <Link href="/job-results" className={styles.viewAll}>
            See all <span className="tnum">1,427</span> jobs
          </Link>
          <button
            className={styles.arrow}
            onClick={() => scrollBy(-1)}
            aria-label="Scroll featured roles left"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            className={styles.arrow}
            onClick={() => scrollBy(1)}
            aria-label="Scroll featured roles right"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div
        className={styles.scroller}
        ref={scrollerRef}
        role="region"
        aria-label="Featured openings"
        tabIndex={0}
      >
        {featured.map((job, i) => {
          const t = treatments[i % treatments.length];
          return (
            <article
              key={job.id}
              data-featured-card
              className={styles.card}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <div className={styles.cardHead}>
                <Icon3D
                  shape={t.shape}
                  palette={t.palette}
                  size={56}
                  floating
                />
                <button
                  className={styles.saveBtn}
                  aria-label={`Save ${job.title}`}
                >
                  <Bookmark size={14} strokeWidth={1.5} />
                </button>
              </div>

              <div className={styles.cardBody}>
                <span className={styles.ref}>
                  <span className={styles.refDot} />
                  {job.id}
                </span>
                <h3 className={styles.cardTitle}>
                  <Link href={`/job-application?id=${job.id}`}>
                    {job.title}
                  </Link>
                </h3>
                <p className={styles.cardDesc}>{job.description}</p>
              </div>

              <dl className={styles.meta}>
                <div>
                  <dt>
                    <MapPin size={12} strokeWidth={1.5} />
                    Location
                  </dt>
                  <dd>{job.city}, {job.country}</dd>
                </div>
                <div>
                  <dt>
                    <Wallet size={12} strokeWidth={1.5} />
                    Comp
                  </dt>
                  <dd className="tnum">{formatSalary(job)}</dd>
                </div>
                <div>
                  <dt>
                    <Sparkles size={12} strokeWidth={1.5} />
                    Type
                  </dt>
                  <dd>{job.workType} · {job.workModel}</dd>
                </div>
              </dl>

              <Link
                href={`/job-application?id=${job.id}`}
                className={styles.cta}
              >
                Apply now
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </article>
          );
        })}
        <div className={styles.endcap}>
          <span className={styles.endcapMeta}>End of featured</span>
          <Link href="/job-results" className={styles.endcapCta}>
            Browse all roles
            <ArrowRight size={14} strokeWidth={1.5} />
          </Link>
        </div>
      </div>
    </div>
  );
}
