import Grain from "./Grain";

type Slug =
  | "microentreprise"
  | "clients"
  | "tresorerie"
  | "tarifs"
  | "facturation"
  | "organisation";

const W = 400;
const H = 225;

function Documents() {
  return (
    <>
      <rect x="118" y="72" width="110" height="82" rx="10" fill="var(--cream)" opacity="0.9" transform="rotate(-7 173 113)" />
      <rect x="138" y="60" width="110" height="82" rx="10" fill="url(#gradSage)" transform="rotate(5 193 101)" />
      <rect x="148" y="76" width="110" height="82" rx="10" fill="var(--white)" transform="rotate(-2 203 117)" />
      <line x1="168" y1="104" x2="230" y2="104" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" transform="rotate(-2 203 117)" />
      <line x1="168" y1="119" x2="222" y2="119" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" opacity="0.5" transform="rotate(-2 203 117)" />
      <line x1="168" y1="134" x2="226" y2="134" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" opacity="0.5" transform="rotate(-2 203 117)" />
      <circle cx="288" cy="68" r="28" fill="var(--sage)" />
      <path d="M276 68 l8 8 15-15" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="112" cy="172" r="7" fill="var(--terracotta)" />
    </>
  );
}

function Ticket() {
  return (
    <>
      <path
        d="M128 48 H272 V148 L262 158 L252 148 L242 158 L232 148 L222 158 L212 148 L202 158 L192 148 L182 158 L172 148 L162 158 L152 148 L142 158 L132 148 Z"
        fill="var(--white)"
      />
      <rect x="128" y="48" width="144" height="28" rx="6" fill="url(#gradSage)" />
      <line x1="150" y1="98" x2="252" y2="98" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      <line x1="150" y1="114" x2="230" y2="114" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <line x1="150" y1="130" x2="240" y2="130" stroke="var(--sage)" strokeWidth="4" strokeLinecap="round" opacity="0.4" />
      <circle cx="292" cy="150" r="24" fill="var(--sage)" />
      <path d="M281 150 l7 7 14-14" stroke="white" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="118" cy="70" r="7" fill="var(--terracotta)" />
    </>
  );
}

function Connection() {
  return (
    <>
      <circle cx="168" cy="112" r="64" fill="url(#gradTerracotta)" />
      <circle cx="248" cy="112" r="64" fill="var(--white)" />
      <circle cx="208" cy="112" r="11" fill="var(--white)" />
      <circle cx="208" cy="112" r="4" fill="var(--terracotta)" />
      <circle cx="330" cy="60" r="7" fill="var(--indigo)" opacity="0.5" />
    </>
  );
}

function PriceTag() {
  return (
    <>
      <rect x="148" y="50" width="120" height="120" rx="20" fill="url(#gradTerracotta)" transform="rotate(-16 208 110)" />
      <circle cx="242" cy="80" r="9" fill="var(--cream)" transform="rotate(-16 208 110)" />
      <circle cx="118" cy="152" r="28" fill="var(--white)" />
      <circle cx="300" cy="168" r="7" fill="var(--indigo)" opacity="0.5" />
    </>
  );
}

function GrowthBars() {
  return (
    <>
      <rect x="118" y="138" width="30" height="46" rx="8" fill="var(--white)" />
      <rect x="163" y="112" width="30" height="72" rx="8" fill="var(--indigo)" opacity="0.55" />
      <rect x="208" y="88" width="30" height="96" rx="8" fill="url(#gradIndigo)" />
      <rect x="253" y="58" width="30" height="126" rx="8" fill="var(--indigo)" />
      <path d="M118 128 Q200 36 283 52" stroke="var(--terracotta)" strokeWidth="4" fill="none" strokeLinecap="round" />
      <circle cx="283" cy="52" r="7" fill="var(--terracotta)" />
    </>
  );
}

function Grid() {
  return (
    <>
      <rect x="128" y="58" width="42" height="42" rx="10" fill="var(--white)" />
      <rect x="179" y="58" width="42" height="42" rx="10" fill="var(--white)" />
      <rect x="230" y="58" width="42" height="42" rx="10" fill="url(#gradIndigo)" />
      <rect x="128" y="109" width="42" height="42" rx="10" fill="var(--indigo)" />
      <rect x="179" y="109" width="42" height="42" rx="10" fill="var(--white)" />
      <rect x="230" y="109" width="42" height="42" rx="10" fill="var(--white)" />
      <circle cx="148" cy="184" r="8" fill="var(--terracotta)" />
    </>
  );
}

const compositions: Record<Slug, () => React.ReactElement> = {
  microentreprise: Documents,
  facturation: Ticket,
  clients: Connection,
  tarifs: PriceTag,
  tresorerie: GrowthBars,
  organisation: Grid,
};

export default function CourseIllustration({ slug }: { slug: string }) {
  const Composition = compositions[slug as Slug] ?? Documents;
  return (
    <svg viewBox={`0 0 ${W} ${H}`} width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
      <Composition />
      <Grain width={W} height={H} />
    </svg>
  );
}
