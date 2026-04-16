"use client";

import { useRouter } from "next/navigation";
import { Search, MapPin, Briefcase } from "lucide-react";
import { useState } from "react";
import styles from "./JobSearchBar.module.css";
import { jobCategories, workModels } from "@/lib/jobs";

export function JobSearchBar() {
  const router = useRouter();
  const [keyword, setKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState(jobCategories[0]);
  const [model, setModel] = useState(workModels[0]);

  return (
    <form
      className={styles.bar}
      onSubmit={(e) => {
        e.preventDefault();
        router.push("/job-results");
      }}
      role="search"
      aria-label="Search jobs"
    >
      <label className={styles.field}>
        <Search size={16} strokeWidth={1.5} className={styles.icon} />
        <input
          type="text"
          placeholder="Keyword or job title"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          aria-label="Keyword"
        />
      </label>
      <span className={styles.divider} aria-hidden />
      <label className={styles.field}>
        <MapPin size={16} strokeWidth={1.5} className={styles.icon} />
        <input
          type="text"
          placeholder="City, country, or region"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          aria-label="Location"
        />
      </label>
      <span className={styles.divider} aria-hidden />
      <label className={styles.field}>
        <Briefcase size={16} strokeWidth={1.5} className={styles.icon} />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Category"
        >
          {jobCategories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <span className={styles.divider} aria-hidden />
      <label className={styles.fieldShort}>
        <select
          value={model}
          onChange={(e) => setModel(e.target.value)}
          aria-label="Work model"
        >
          {workModels.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </label>
      <button type="submit" className={styles.btn}>
        Search jobs
      </button>
    </form>
  );
}
