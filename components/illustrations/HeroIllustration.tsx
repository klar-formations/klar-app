import Grain from "./Grain";

const S = 360;

export default function HeroIllustration() {
  return (
    <svg viewBox={`0 0 ${S} ${S}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <circle cx="180" cy="180" r="150" fill="none" stroke="var(--sage)" strokeWidth="2" />
      <rect x="70" y="70" width="130" height="130" rx="26" fill="var(--indigo-pale)" transform="rotate(18 135 135)" />
      <circle cx="245" cy="235" r="70" fill="url(#gradSage)" opacity="0.55" />
      <circle cx="122" cy="248" r="16" fill="none" stroke="var(--indigo)" strokeWidth="2" />
      <circle cx="252" cy="118" r="30" fill="url(#gradTerracotta)" />
      <Grain width={S} height={S} opacity={0.045} />
    </svg>
  );
}
