export default function Grain({
  width,
  height,
  opacity = 0.05,
}: {
  width: number;
  height: number;
  opacity?: number;
}) {
  return (
    <rect
      x={0}
      y={0}
      width={width}
      height={height}
      filter="url(#grain)"
      opacity={opacity}
      style={{ mixBlendMode: "multiply" }}
    />
  );
}
