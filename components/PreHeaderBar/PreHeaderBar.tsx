import Link from "next/link";
import { Phone, UserCircle, Globe2, ChevronDown } from "lucide-react";
import styles from "./PreHeaderBar.module.css";

export function PreHeaderBar() {
  return (
    <div className={styles.bar} role="complementary" aria-label="Utility navigation">
      <div className={`container-wide ${styles.inner}`}>
        <div className={styles.group}>
          <Link href="/register" className={styles.link}>
            <UserCircle size={13} strokeWidth={1.5} />
            Returning applicant? <span className={styles.linkEm}>Sign in</span>
          </Link>
          <span className={styles.divider} aria-hidden />
          <span className={styles.item}>
            <Phone size={13} strokeWidth={1.5} />
            <span className="tnum">+1 585-498-2000</span>
          </span>
        </div>
        <div className={styles.group}>
          <button className={styles.lang} aria-haspopup="listbox" aria-label="Change language">
            <Globe2 size={13} strokeWidth={1.5} />
            English
            <ChevronDown size={10} strokeWidth={1.5} />
          </button>
        </div>
      </div>
    </div>
  );
}
