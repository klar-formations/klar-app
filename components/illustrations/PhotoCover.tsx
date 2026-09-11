export default function PhotoCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
      />
      <svg
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }}
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <rect
          x="0"
          y="0"
          width="100%"
          height="100%"
          filter="url(#grain)"
          opacity={0.05}
          style={{ mixBlendMode: "multiply" }}
        />
      </svg>
    </div>
  );
}
