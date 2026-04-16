import Link from "next/link";
import { ArrowUpRight, Clock } from "lucide-react";
import { stories, formatStoryDate } from "@/lib/stories";
import { ImagePlaceholder } from "@/components/ImagePlaceholder/ImagePlaceholder";
import { Icon3D } from "@/components/Icon3D/Icon3D";
import { Reveal } from "@/components/Reveal/Reveal";
import styles from "./StoriesFeed.module.css";

export function StoriesFeed() {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>
        <div>
          <span className="meta-label">Life at Sutherland</span>
          <h2 className={styles.title}>
            Stories from the people, programmes, and places we&rsquo;re building.
          </h2>
        </div>
        <Link href="#" className={styles.viewAll}>
          All stories
          <ArrowUpRight size={14} strokeWidth={1.5} />
        </Link>
      </div>

      <ul className={styles.grid}>
        {stories.map((s, i) => (
          <Reveal
            key={s.slug}
            as="li"
            variant="fade-up"
            delay={i * 100}
            className={styles.itemWrap}
          >
            <article className={styles.card}>
              <Link href="#" className={styles.imageLink}>
                <ImagePlaceholder
                  variant="landscape"
                  tone={s.tone}
                  badge={s.category}
                />
                <span className={styles.imageIcon}>
                  <Icon3D
                    shape="orb"
                    palette={s.iconPalette}
                    size={48}
                    floating
                  />
                </span>
              </Link>

              <div className={styles.body}>
                <div className={styles.metaRow}>
                  <time className={styles.metaDate}>
                    {formatStoryDate(s.date)}
                  </time>
                  <span className={styles.metaDot} aria-hidden>
                    ·
                  </span>
                  <span className={styles.metaRead}>
                    <Clock size={11} strokeWidth={1.5} />
                    <span className="tnum">{s.readMinutes}</span> min read
                  </span>
                </div>
                <h3 className={styles.cardTitle}>
                  <Link href="#">
                    <span dangerouslySetInnerHTML={{ __html: s.title }} />
                  </Link>
                </h3>
                <p
                  className={styles.excerpt}
                  dangerouslySetInnerHTML={{ __html: s.excerpt }}
                />
                <footer className={styles.footer}>
                  <div className={styles.avatar} aria-hidden>
                    {s.author.name
                      .split(" ")
                      .map((w) => w[0])
                      .slice(0, 2)
                      .join("")}
                  </div>
                  <div className={styles.byline}>
                    <span className={styles.bylineName}>{s.author.name}</span>
                    <span className={styles.bylineRole}>{s.author.role}</span>
                  </div>
                  <Link href="#" className={styles.arrow} aria-label="Read story">
                    <ArrowUpRight size={14} strokeWidth={1.5} />
                  </Link>
                </footer>
              </div>
            </article>
          </Reveal>
        ))}
      </ul>
    </div>
  );
}
