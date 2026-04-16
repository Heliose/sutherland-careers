import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { regions } from "@/lib/locations";
import { ContactForm } from "./ContactForm";
import interior from "../interior.module.css";
import styles from "./page.module.css";

export const metadata = {
  title: "Contact us — Sutherland Careers",
};

export default function ContactPage() {
  return (
    <>
      <section className={interior.pageHero}>
        <span className={interior.pageHeroAccent} aria-hidden />
        <div className="container-wide">
          <div className={interior.pageHeroInner}>
            <nav className={interior.crumbs} aria-label="Breadcrumb">
              <Link href="/">Home</Link>
              <span className={interior.crumbSep}>/</span>
              <span>Contact us</span>
            </nav>
            <span className="eyebrow">Contact us</span>
            <h1 className="display-hero">Talk to the Sutherland careers team.</h1>
            <p className={interior.pageLead}>
              Questions about a role, our hiring process, or the referral
              programme — drop us a note and the right person will answer.
            </p>
          </div>
        </div>
      </section>

      <section className="section container-wide">
        <div className={styles.layout}>
          <ContactForm />

          <aside className={styles.aside}>
            <div className={styles.asideCard}>
              <h3 className={styles.asideTitle}>Talk to a recruiter</h3>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Mail size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Email</div>
                  <a href="mailto:careers@sutherlandglobal.com">
                    careers@sutherlandglobal.com
                  </a>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <Phone size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Phone</div>
                  <span className="tnum">+1 585-498-2000</span>
                </div>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.contactIcon}>
                  <MapPin size={16} strokeWidth={1.5} />
                </div>
                <div>
                  <div className={styles.contactLabel}>Global HQ</div>
                  <span>Rochester, New York, USA</span>
                </div>
              </div>
            </div>

            <div className={styles.asideCard}>
              <h3 className={styles.asideTitle}>Regional offices</h3>
              <ul className={styles.regionList}>
                {regions.map((r) => (
                  <li key={r.slug}>
                    <Link href={`/locations/${r.slug}`} className={styles.regionRow}>
                      <span>{r.name}</span>
                      <span className="tnum">{r.openRoles.toLocaleString()} open</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
