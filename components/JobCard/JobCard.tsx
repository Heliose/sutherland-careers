import Link from "next/link";
import { MapPin, Clock, Briefcase, Bookmark, Share2 } from "lucide-react";
import { Badge } from "@/components/Badge/Badge";
import { postedLabel, type Job } from "@/lib/jobs";
import styles from "./JobCard.module.css";

export function JobCard({ job }: { job: Job }) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div className={styles.titleBlock}>
          <span className={styles.ref}>{job.id}</span>
          <h3 className={styles.title}>
            <Link href={`/job-application?id=${job.id}`}>{job.title}</Link>
          </h3>
          <p className={styles.desc}>{job.description}</p>
        </div>
        <div className={styles.actions}>
          <button aria-label="Save job" className={styles.iconBtn}>
            <Bookmark size={16} strokeWidth={1.5} />
          </button>
          <button aria-label="Share" className={styles.iconBtn}>
            <Share2 size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      <div className={styles.meta}>
        <span className={styles.metaItem}>
          <MapPin size={14} strokeWidth={1.5} />
          {job.city}, {job.country}
        </span>
        <span className={styles.metaItem}>
          <Briefcase size={14} strokeWidth={1.5} />
          {job.workType} · {job.workModel}
        </span>
        <span className={styles.metaItem}>
          <Clock size={14} strokeWidth={1.5} />
          {postedLabel(job.postedDays)}
        </span>
      </div>

      <div className={styles.footer}>
        <Badge variant="purple">{job.category}</Badge>
        <Badge>{job.subCategory}</Badge>
        {job.workModel === "Remote" && (
          <Badge variant="success">Remote-friendly</Badge>
        )}
      </div>
    </article>
  );
}
