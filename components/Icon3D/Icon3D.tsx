import styles from "./Icon3D.module.css";

export type Icon3DShape =
  | "orb"
  | "capsule"
  | "cone"
  | "cube"
  | "donut"
  | "prism"
  | "wave"
  | "knot";

export type Icon3DPalette =
  | "purple"
  | "magenta"
  | "ruby"
  | "sunset"
  | "ocean"
  | "lime"
  | "sand"
  | "iris";

type Props = {
  shape?: Icon3DShape;
  palette?: Icon3DPalette;
  size?: number;
  floating?: boolean;
  className?: string;
};

const paletteStops: Record<Icon3DPalette, [string, string, string]> = {
  purple: ["#c9bcff", "#533afd", "#1c1e54"],
  magenta: ["#ffd7ef", "#f96bee", "#7a1e70"],
  ruby: ["#ffb2c8", "#ea2261", "#6b0f2d"],
  sunset: ["#ffd2a8", "#ea7b3e", "#7a2b0a"],
  ocean: ["#bde4ff", "#3a9ffd", "#0f2e6b"],
  lime: ["#d9f5c8", "#5fbf3a", "#16481f"],
  sand: ["#f6e6c4", "#c79a4a", "#5a3a14"],
  iris: ["#c8e0ff", "#665efd", "#1c1e54"],
};

const highlightFor = (palette: Icon3DPalette) => {
  const map: Record<Icon3DPalette, string> = {
    purple: "rgba(255, 235, 255, 0.9)",
    magenta: "rgba(255, 240, 250, 0.95)",
    ruby: "rgba(255, 230, 235, 0.95)",
    sunset: "rgba(255, 240, 220, 0.95)",
    ocean: "rgba(235, 245, 255, 0.95)",
    lime: "rgba(240, 255, 230, 0.95)",
    sand: "rgba(255, 245, 220, 0.95)",
    iris: "rgba(240, 235, 255, 0.95)",
  };
  return map[palette];
};

export function Icon3D({
  shape = "orb",
  palette = "purple",
  size = 64,
  floating = false,
  className = "",
}: Props) {
  const [light, mid, dark] = paletteStops[palette];
  const hi = highlightFor(palette);
  const gid = `${palette}-${shape}`;
  return (
    <span
      className={`${styles.wrap} ${floating ? styles.floating : ""} ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg viewBox="0 0 64 64" width={size} height={size}>
        <defs>
          <radialGradient id={`g-${gid}`} cx="32%" cy="28%" r="75%">
            <stop offset="0%" stopColor={light} />
            <stop offset="55%" stopColor={mid} />
            <stop offset="100%" stopColor={dark} />
          </radialGradient>
          <radialGradient id={`hi-${gid}`} cx="35%" cy="28%" r="30%">
            <stop offset="0%" stopColor={hi} stopOpacity="0.95" />
            <stop offset="70%" stopColor={hi} stopOpacity="0" />
          </radialGradient>
          <linearGradient id={`rim-${gid}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="rgba(255,255,255,0.5)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id={`blur-${gid}`}>
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>

        {/* Ground shadow */}
        <ellipse cx="32" cy="56" rx="20" ry="3" fill="rgba(6,27,49,0.24)" filter={`url(#blur-${gid})`} />

        {renderShape(shape, gid)}

        {/* Rim light & specular highlight */}
        {renderHighlight(shape, gid)}
      </svg>
    </span>
  );
}

function renderShape(shape: Icon3DShape, gid: string) {
  const fill = `url(#g-${gid})`;
  const rim = `url(#rim-${gid})`;
  switch (shape) {
    case "orb":
      return <circle cx="32" cy="30" r="22" fill={fill} stroke={rim} strokeWidth="0.5" />;
    case "capsule":
      return (
        <rect x="12" y="18" width="40" height="24" rx="12" fill={fill} stroke={rim} strokeWidth="0.5" />
      );
    case "cone":
      return (
        <path
          d="M32 8 C 44 8, 52 38, 52 44 C 52 48, 44 52, 32 52 C 20 52, 12 48, 12 44 C 12 38, 20 8, 32 8 Z"
          fill={fill}
          stroke={rim}
          strokeWidth="0.5"
        />
      );
    case "cube":
      return (
        <>
          {/* top face */}
          <path d="M32 8 L52 18 L32 28 L12 18 Z" fill={fill} opacity="0.95" />
          {/* left face */}
          <path d="M12 18 L12 42 L32 52 L32 28 Z" fill={fill} opacity="0.7" />
          {/* right face */}
          <path d="M52 18 L52 42 L32 52 L32 28 Z" fill={fill} opacity="0.82" />
        </>
      );
    case "donut":
      return (
        <>
          <circle cx="32" cy="30" r="22" fill={fill} />
          <circle cx="32" cy="30" r="9" fill="rgba(6,27,49,0.35)" />
        </>
      );
    case "prism":
      return (
        <path
          d="M32 8 L54 48 L10 48 Z"
          fill={fill}
          stroke={rim}
          strokeWidth="0.5"
        />
      );
    case "wave":
      return (
        <>
          <path
            d="M8 32 C 16 18, 24 46, 32 32 C 40 18, 48 46, 56 32 L 56 52 L 8 52 Z"
            fill={fill}
          />
          <path
            d="M8 32 C 16 18, 24 46, 32 32 C 40 18, 48 46, 56 32"
            fill="none"
            stroke="rgba(255,255,255,0.5)"
            strokeWidth="1.2"
          />
        </>
      );
    case "knot":
      return (
        <>
          <circle cx="24" cy="30" r="14" fill={fill} opacity="0.9" />
          <circle cx="40" cy="30" r="14" fill={fill} />
        </>
      );
    default:
      return <circle cx="32" cy="30" r="22" fill={fill} />;
  }
}

function renderHighlight(shape: Icon3DShape, gid: string) {
  const hi = `url(#hi-${gid})`;
  if (shape === "cube") {
    return (
      <>
        <path d="M32 8 L52 18 L32 28 L12 18 Z" fill={hi} opacity="0.6" />
        <ellipse cx="22" cy="16" rx="4" ry="1.6" fill="rgba(255,255,255,0.8)" />
      </>
    );
  }
  return (
    <>
      <ellipse cx="26" cy="20" rx="10" ry="6" fill={hi} />
      <ellipse cx="22" cy="17" rx="4" ry="2" fill="rgba(255,255,255,0.85)" />
    </>
  );
}
