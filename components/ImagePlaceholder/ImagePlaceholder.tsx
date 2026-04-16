import styles from "./ImagePlaceholder.module.css";

type Variant = "photo" | "portrait" | "landscape" | "cover" | "tile" | "polaroid" | "poster";
type Tone = "purple" | "magenta" | "ruby" | "indigo" | "sunset" | "ocean" | "mono";

type Props = {
  variant?: Variant;
  tone?: Tone;
  label?: string;
  caption?: string;
  aspect?: string;
  badge?: string;
  className?: string;
  shimmer?: boolean;
};

const toneMap: Record<Tone, string> = {
  purple: "linear-gradient(135deg, #7c63ff 0%, #533afd 40%, #2e2b8c 100%)",
  magenta: "linear-gradient(135deg, #ff9de8 0%, #f96bee 45%, #7a1e70 100%)",
  ruby: "linear-gradient(135deg, #ff8aa4 0%, #ea2261 45%, #6b0f2d 100%)",
  indigo: "linear-gradient(135deg, #4c51ff 0%, #1c1e54 55%, #0d1338 100%)",
  sunset:
    "linear-gradient(135deg, #ffc98a 0%, #ea7b3e 40%, #7a2b0a 100%), linear-gradient(135deg, #f96bee 0%, #533afd 100%)",
  ocean: "linear-gradient(135deg, #8bd7ff 0%, #3a9ffd 40%, #0f2e6b 100%)",
  mono: "linear-gradient(135deg, #eef1f7 0%, #d6dde8 40%, #9ba7be 100%)",
};

export function ImagePlaceholder({
  variant = "photo",
  tone = "purple",
  label,
  caption,
  aspect,
  badge,
  className = "",
  shimmer = true,
}: Props) {
  const style: React.CSSProperties = {
    background: toneMap[tone],
    aspectRatio: aspect,
  };
  return (
    <figure
      className={`${styles.frame} ${styles[variant]} ${className}`}
      aria-label={label || "image placeholder"}
    >
      <div className={styles.inner} style={style}>
        {shimmer && <span className={styles.shimmer} aria-hidden />}
        <span className={styles.grain} aria-hidden />
        <span className={styles.bloomA} aria-hidden />
        <span className={styles.bloomB} aria-hidden />
        {badge && <span className={styles.badge}>{badge}</span>}
        {label && <span className={styles.label}>{label}</span>}
      </div>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
