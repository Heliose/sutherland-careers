import Link from "next/link";
import { Linkedin, Twitter, Facebook, Youtube } from "lucide-react";
import { footerColumns } from "@/lib/nav";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container-wide">
        <div className={styles.top}>
          <div className={styles.brand}>
            <div className={styles.brandRow}>
              <span className={styles.mark} aria-hidden>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="9" fill="#ffffff" />
                  <path
                    d="M6 7.5a2.5 2.5 0 0 1 2.5-2.5h3A2.5 2.5 0 0 1 14 7.5v1a1.5 1.5 0 0 1-3 0v-.75h-1.5v.5c0 .52.23.96.67 1.25L12.4 11.2c.98.65 1.6 1.75 1.6 2.92V14a2.5 2.5 0 0 1-2.5 2.5h-3A2.5 2.5 0 0 1 6 14v-1a1.5 1.5 0 0 1 3 0v.75h1.5v-.5c0-.52-.23-.96-.67-1.25L7.6 10.3C6.62 9.65 6 8.55 6 7.38z"
                    fill="#1c1e54"
                  />
                </svg>
              </span>
              <span className={styles.brandName}>Sutherland</span>
            </div>
            <p className={styles.tagline}>
              Careers built around meaningful problems, global teams, and the
              ambition to lead in the digital era.
            </p>
            <div className={styles.social}>
              <a href="#" aria-label="LinkedIn">
                <Linkedin size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Twitter">
                <Twitter size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="Facebook">
                <Facebook size={16} strokeWidth={1.5} />
              </a>
              <a href="#" aria-label="YouTube">
                <Youtube size={16} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          <div className={styles.cols}>
            {footerColumns.map((col) => (
              <div key={col.title}>
                <h4 className={styles.colTitle}>{col.title}</h4>
                <ul className={styles.linkList}>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className={styles.link}>
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className={styles.bottom}>
          <span className={styles.legal}>
            © {new Date().getFullYear()} Sutherland Global Services. Careers
            site — a prototype by Zensciences
          </span>
          <div className={styles.legalLinks}>
            <a href="#">Terms of use</a>
            <a href="#">Privacy policy</a>
            <a href="#">Cookie preferences</a>
            <a href="#">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
