"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, X, ArrowRight, Search } from "lucide-react";
import { primaryNav } from "@/lib/nav";
import type { NavItem } from "@/lib/nav";
import { Button } from "@/components/Button/Button";
import styles from "./Nav.module.css";

export function Nav() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Scroll-morph — Dye's dynamic morphing
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change signal via escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileOpen(false);
        setOpenMenu(null);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const openPanel = (href: string) => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setOpenMenu(href);
  };

  const schedulePanelClose = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    closeTimeout.current = setTimeout(() => setOpenMenu(null), 120);
  };

  const activeItem = primaryNav.find((i) => i.href === openMenu);

  return (
    <header
      className={`${styles.header} ${scrolled ? styles.headerScrolled : ""}`}
    >
      <div className={styles.headerInner}>
        <div className={`${styles.glassBar} ${scrolled ? styles.glassBarScrolled : ""}`}>
          <Link href="/" className={styles.brand} aria-label="Sutherland Careers">
            <Logo />
          </Link>

          <nav className={styles.primary} aria-label="Primary">
            <ul className={styles.navList}>
              {primaryNav.map((item) => {
                const hasMega = Boolean(item.megaGroups);
                return (
                  <li
                    key={item.href}
                    className={styles.navItem}
                    onMouseEnter={() => hasMega && openPanel(item.href)}
                    onMouseLeave={() => hasMega && schedulePanelClose()}
                  >
                    {hasMega ? (
                      <button
                        type="button"
                        className={styles.navTrigger}
                        aria-expanded={openMenu === item.href}
                        aria-haspopup="true"
                        onClick={() =>
                          setOpenMenu((curr) =>
                            curr === item.href ? null : item.href
                          )
                        }
                      >
                        {item.label}
                        <ChevronDown
                          size={12}
                          strokeWidth={1.5}
                          className={
                            openMenu === item.href ? styles.chevOpen : ""
                          }
                        />
                      </button>
                    ) : (
                      <Link href={item.href} className={styles.navLink}>
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className={styles.utility}>
            <Link
              href="/job-results"
              className={styles.searchBtn}
              aria-label="Search jobs"
            >
              <Search size={16} strokeWidth={1.5} />
            </Link>
            <Button href="/register" size="sm" variant="ghost">
              Sign in
            </Button>
            <Button href="/register" size="sm">
              Register
            </Button>
            <button
              className={styles.burger}
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega menu panel */}
      {activeItem && activeItem.megaGroups && (
        <div
          className={styles.megaPanel}
          onMouseEnter={() => openPanel(activeItem.href)}
          onMouseLeave={schedulePanelClose}
          role="menu"
        >
          <div className={styles.megaInner}>
            <div className={styles.megaGrid}>
              <div className={styles.megaGroups}>
                {activeItem.megaGroups.map((group) => (
                  <section key={group.heading} className={styles.megaGroup}>
                    <h3 className={styles.megaHeading}>{group.heading}</h3>
                    <ul className={styles.megaLinks}>
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            className={styles.megaLink}
                            onClick={() => setOpenMenu(null)}
                          >
                            <span className={styles.megaLinkTitle}>
                              {l.label}
                            </span>
                            {l.description && (
                              <span className={styles.megaLinkDesc}>
                                {l.description}
                              </span>
                            )}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </section>
                ))}
              </div>

              {activeItem.megaFeature && (
                <FeaturedCard item={activeItem as Required<NavItem>} />
              )}
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className={styles.mobile}>
          <ul className={styles.mobileList}>
            {primaryNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={styles.mobileLink}
                  onClick={() => setMobileOpen(false)}
                >
                  {item.label}
                </Link>
                {item.megaGroups && (
                  <div className={styles.mobileSubGroups}>
                    {item.megaGroups.map((g) => (
                      <div key={g.heading} className={styles.mobileSubGroup}>
                        <div className={styles.mobileSubHead}>{g.heading}</div>
                        <ul>
                          {g.links.map((c) => (
                            <li key={c.href}>
                              <Link
                                href={c.href}
                                className={styles.mobileSubLink}
                                onClick={() => setMobileOpen(false)}
                              >
                                {c.label}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
          <div className={styles.mobileActions}>
            <Button href="/register" variant="ghost" fullWidth>
              Sign in
            </Button>
            <Button href="/register" fullWidth>
              Register
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

function FeaturedCard({ item }: { item: Required<NavItem> }) {
  const f = item.megaFeature;
  return (
    <aside className={`${styles.feature} ${styles[`feature-${f.tone}`]}`}>
      <span className={styles.featureEyebrow}>{f.eyebrow}</span>
      <h4 className={styles.featureTitle}>{f.title}</h4>
      <p className={styles.featureBody}>{f.body}</p>
      <Link href={f.href} className={styles.featureCta}>
        {f.cta}
        <ArrowRight size={14} strokeWidth={1.5} />
      </Link>
    </aside>
  );
}

function Logo() {
  return (
    <span className={styles.logo}>
      <span className={styles.logoMark} aria-hidden>
        <svg width="22" height="22" viewBox="0 0 20 20" fill="none">
          <defs>
            <radialGradient id="logoGrad" cx="30%" cy="25%" r="85%">
              <stop offset="0%" stopColor="#c9bcff" />
              <stop offset="55%" stopColor="#533afd" />
              <stop offset="100%" stopColor="#1c1e54" />
            </radialGradient>
          </defs>
          <circle cx="10" cy="10" r="9" fill="url(#logoGrad)" />
          <path
            d="M6 7.5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 14 7.5v1a1.5 1.5 0 0 1-3 0v-.75h-1.5v.5c0 .52.23.96.67 1.25L12.4 11.2c.98.65 1.6 1.75 1.6 2.92V14a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 6 14v-1a1.5 1.5 0 0 1 3 0v.75h1.5v-.5c0-.52-.23-.96-.67-1.25L7.6 10.3C6.62 9.65 6 8.55 6 7.38z"
            fill="#fff"
          />
          <ellipse cx="6.5" cy="5" rx="2" ry="1.2" fill="rgba(255,255,255,0.6)" />
        </svg>
      </span>
      <span className={styles.logoText}>Sutherland</span>
      <span className={styles.logoSub}>Careers</span>
    </span>
  );
}
