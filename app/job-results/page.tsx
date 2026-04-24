"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Map, SlidersHorizontal, X, Bell, ArrowRight, Zap } from "lucide-react";
import { Select, Input } from "@/components/Input/Input";
import { Button } from "@/components/Button/Button";
import { Badge } from "@/components/Badge/Badge";
import { JobCard } from "@/components/JobCard/JobCard";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { jobs, jobCategories, workTypes, workModels } from "@/lib/jobs";
import { regions } from "@/lib/locations";
import styles from "./page.module.css";
import interior from "../interior.module.css";

type QuickFilter = {
  label: string;
  apply: (state: {
    setWorkModel: (v: string) => void;
    setWorkType: (v: string) => void;
    setCategory: (v: string) => void;
  }) => void;
  matches: (state: { workModel: string; workType: string; category: string }) => boolean;
};

const quickFilters: QuickFilter[] = [
  {
    label: "Remote",
    apply: ({ setWorkModel }) => setWorkModel("Remote"),
    matches: ({ workModel }) => workModel === "Remote",
  },
  {
    label: "Full-time",
    apply: ({ setWorkType }) => setWorkType("Full-time"),
    matches: ({ workType }) => workType === "Full-time",
  },
  {
    label: "Hybrid",
    apply: ({ setWorkModel }) => setWorkModel("Hybrid"),
    matches: ({ workModel }) => workModel === "Hybrid",
  },
  {
    label: "Technology & Engineering",
    apply: ({ setCategory }) => setCategory("Technology & Engineering"),
    matches: ({ category }) => category === "Technology & Engineering",
  },
  {
    label: "Customer Experience",
    apply: ({ setCategory }) => setCategory("Customer Experience"),
    matches: ({ category }) => category === "Customer Experience",
  },
  {
    label: "Analytics",
    apply: ({ setCategory }) => setCategory("Analytics"),
    matches: ({ category }) => category === "Analytics",
  },
];

type SortKey = "recent" | "alpha";

export default function JobResultsPage() {
  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState(jobCategories[0]);
  const [workType, setWorkType] = useState(workTypes[0]);
  const [workModel, setWorkModel] = useState(workModels[0]);
  const [region, setRegion] = useState("All regions");
  const [sort, setSort] = useState<SortKey>("recent");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = [...jobs];
    if (keyword.trim()) {
      const k = keyword.toLowerCase();
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(k) ||
          j.description.toLowerCase().includes(k) ||
          j.id.toLowerCase().includes(k)
      );
    }
    if (category !== jobCategories[0]) {
      list = list.filter((j) => j.category === category);
    }
    if (workType !== workTypes[0]) {
      list = list.filter((j) => j.workType === workType);
    }
    if (workModel !== workModels[0]) {
      list = list.filter((j) => j.workModel === workModel);
    }
    if (region !== "All regions") {
      list = list.filter((j) => j.region === region);
    }
    if (sort === "alpha") {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      list.sort((a, b) => a.postedDays - b.postedDays);
    }
    return list;
  }, [keyword, category, workType, workModel, region, sort]);

  const resetAll = () => {
    setKeyword("");
    setCategory(jobCategories[0]);
    setWorkType(workTypes[0]);
    setWorkModel(workModels[0]);
    setRegion("All regions");
  };

  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={interior.pageHeroInner}>
            <nav className={interior.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={interior.crumbSep}>/</span>
              <span>Careers</span>
            </nav>
            <span className="eyebrow">Search jobs</span>
            <h1 className="display-lg">
              <span className="tnum">{jobs.length}</span>+ open roles across
              the global team.
            </h1>
            <p className={interior.pageLead}>
              Filter by role, region, and work model. Save what you like, apply
              when you're ready.
            </p>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <div className={styles.layout}>
          {/* Filters */}
          <aside
            className={`${styles.sidebar} ${filtersOpen ? styles.open : ""}`}
            aria-label="Filters"
          >
            <div className={styles.sidebarHead}>
              <h2 className={styles.sidebarTitle}>Filters</h2>
              <button
                className={styles.closeBtn}
                onClick={() => setFiltersOpen(false)}
                aria-label="Close filters"
              >
                <X size={16} strokeWidth={1.5} />
              </button>
            </div>
            <div className={styles.filterGroup}>
              <Input
                id="keyword"
                label="Keyword"
                placeholder="Job title, ref, or keyword"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className={styles.filterGroup}>
              <Select
                id="category"
                label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {jobCategories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </div>
            <div className={styles.filterGroup}>
              <Select
                id="work-type"
                label="Work type"
                value={workType}
                onChange={(e) => setWorkType(e.target.value)}
              >
                {workTypes.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </div>
            <div className={styles.filterGroup}>
              <Select
                id="work-model"
                label="Work model"
                value={workModel}
                onChange={(e) => setWorkModel(e.target.value)}
              >
                {workModels.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </Select>
            </div>
            <div className={styles.filterGroup}>
              <Select
                id="region"
                label="Region"
                value={region}
                onChange={(e) => setRegion(e.target.value)}
              >
                <option>All regions</option>
                {regions.map((r) => (
                  <option key={r.slug}>{r.name}</option>
                ))}
              </Select>
            </div>
            <div className={styles.mapBlock}>
              <div className={styles.mapHeader}>
                <Map size={14} strokeWidth={1.5} />
                Map view
              </div>
              <div className={styles.mapPreview} aria-hidden>
                <div className={styles.mapDot} style={{ left: "22%", top: "34%" }} />
                <div className={styles.mapDot} style={{ left: "38%", top: "28%" }} />
                <div className={styles.mapDot} style={{ left: "54%", top: "42%" }} />
                <div className={styles.mapDot} style={{ left: "72%", top: "36%" }} />
                <div className={styles.mapDot} style={{ left: "84%", top: "54%" }} />
              </div>
              <span className={styles.mapNote}>
                Interactive map — demo only.
              </span>
            </div>

            <Button variant="neutral" onClick={resetAll} fullWidth>
              Clear all filters
            </Button>

            <div className={styles.alertsCard}>
              <div className={styles.alertsHead}>
                <Icon3D shape="orb" palette="magenta" size={40} floating />
                <div>
                  <span className={styles.alertsEyebrow}>
                    <Bell size={10} strokeWidth={1.5} />
                    Job alerts
                  </span>
                  <h3 className={styles.alertsTitle}>Email me matching roles.</h3>
                </div>
              </div>
              <p className={styles.alertsCopy}>
                Never miss a fit. We&rsquo;ll only send roles that match your
                current filters.
              </p>
              <input
                type="email"
                placeholder="you@personal.com"
                className={styles.alertsInput}
                aria-label="Email for job alerts"
              />
              <div className={styles.alertsFreq}>
                <label className={styles.freqChip}>
                  <input type="radio" name="alert-freq" defaultChecked /> Daily
                </label>
                <label className={styles.freqChip}>
                  <input type="radio" name="alert-freq" /> Weekly
                </label>
              </div>
              <Button size="sm" fullWidth>
                Get alerts
                <ArrowRight size={12} strokeWidth={1.5} />
              </Button>
            </div>
          </aside>

          {/* Results */}
          <div className={styles.results}>
            {/* Quick-filter chips (C9) */}
            <div className={styles.chipsRow} role="toolbar" aria-label="Quick filters">
              <span className={styles.chipsLabel}>
                <Zap size={12} strokeWidth={1.5} />
                Try
              </span>
              {quickFilters.map((qf) => {
                const active = qf.matches({ workModel, workType, category });
                return (
                  <button
                    key={qf.label}
                    type="button"
                    className={`${styles.chip} ${active ? styles.chipActive : ""}`}
                    onClick={() =>
                      active
                        ? resetAll()
                        : qf.apply({ setCategory, setWorkModel, setWorkType })
                    }
                    aria-pressed={active}
                  >
                    {qf.label}
                  </button>
                );
              })}
            </div>

            <header className={styles.resultsHead}>
              <div>
                <span className={styles.resultsCount}>
                  <span className="tnum">{filtered.length}</span> roles found
                </span>
                {(keyword || category !== jobCategories[0] || region !== "All regions") && (
                  <div className={styles.activeFilters}>
                    {keyword && (
                      <Badge variant="purple">Keyword: {keyword}</Badge>
                    )}
                    {category !== jobCategories[0] && (
                      <Badge variant="purple">{category}</Badge>
                    )}
                    {region !== "All regions" && (
                      <Badge variant="purple">{region}</Badge>
                    )}
                    {workModel !== workModels[0] && (
                      <Badge variant="success">{workModel}</Badge>
                    )}
                  </div>
                )}
              </div>
              <div className={styles.resultsTools}>
                <button
                  className={styles.mobileFilter}
                  onClick={() => setFiltersOpen(true)}
                  aria-label="Open filters"
                >
                  <SlidersHorizontal size={14} strokeWidth={1.5} />
                  Filters
                </button>
                <div className={styles.sortWrap}>
                  <label htmlFor="sort" className={styles.sortLabel}>
                    Sort
                  </label>
                  <select
                    id="sort"
                    value={sort}
                    onChange={(e) => setSort(e.target.value as SortKey)}
                    className={styles.sortSelect}
                  >
                    <option value="recent">Most recent</option>
                    <option value="alpha">A – Z</option>
                  </select>
                </div>
              </div>
            </header>

            {filtered.length === 0 ? (
              <div className={styles.empty}>
                <h3 className="h-sub">No roles match those filters.</h3>
                <p>Try widening the category or clearing a filter or two.</p>
                <Button onClick={resetAll} variant="ghost">
                  Clear filters
                </Button>
              </div>
            ) : (
              <ul className={styles.list}>
                {filtered.map((j) => (
                  <li key={j.id}>
                    <JobCard job={j} />
                  </li>
                ))}
              </ul>
            )}

            <div className={styles.pagination}>
              <Button variant="neutral" size="sm">
                Previous
              </Button>
              <span className={styles.pageInfo}>
                Page <span className="tnum">1</span> of{" "}
                <span className="tnum">1</span>
              </span>
              <Button variant="neutral" size="sm">
                Next
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
