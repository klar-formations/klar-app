// Shared <defs> (grain texture filter + accent gradients) used by every inline
// illustration on the site. Rendered once, globally, in the root layout.
export default function SvgDefs() {
  return (
    <svg width="0" height="0" style={{ position: "absolute" }} aria-hidden="true" focusable="false">
      <defs>
        {/* Subtle "grain de Canson" paper texture, overlaid with mix-blend-mode: multiply */}
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.85"
            numOctaves="2"
            stitchTiles="stitch"
            result="noise"
          />
          <feColorMatrix
            in="noise"
            type="matrix"
            values="0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 0 0
                    0 0 0 1 0"
          />
        </filter>

        <linearGradient id="gradSage" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a8d4bc" />
          <stop offset="100%" stopColor="#699c85" />
        </linearGradient>
        <linearGradient id="gradTerracotta" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ec9d84" />
          <stop offset="100%" stopColor="#c65f41" />
        </linearGradient>
        <linearGradient id="gradIndigo" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#575b82" />
          <stop offset="100%" stopColor="#2a2c40" />
        </linearGradient>
      </defs>
    </svg>
  );
}
