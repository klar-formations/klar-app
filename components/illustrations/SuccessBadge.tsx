import Grain from "./Grain";

const S = 120;

export default function SuccessBadge() {
  return (
    <svg viewBox={`0 0 ${S} ${S}`} width="96" height="96" xmlns="http://www.w3.org/2000/svg">
      <circle cx="60" cy="60" r="52" fill="none" stroke="var(--sage-pale)" strokeWidth="2" />
      <circle cx="60" cy="60" r="42" fill="url(#gradSage)" />
      <path
        d="M42 61 L54 73 L80 47"
        stroke="white"
        strokeWidth="7"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="100" cy="26" r="7" fill="var(--terracotta)" />
      <Grain width={S} height={S} opacity={0.05} />
    </svg>
  );
}
