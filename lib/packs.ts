import { getCourse } from "./courses";

export type Pack = {
  slug: string;
  title: string;
  description: string;
  courseSlugs: string[];
  discountPercent: number;
};

export const packs: Pack[] = [
  {
    slug: "bases",
    title: "Poser les bases",
    description:
      "Savoir à qui tu t'adresses, ce que tu vends, comment on te trouve, et le cadre administratif minimum pour démarrer sereinement.",
    courseSlugs: ["niche", "communication", "microentreprise"],
    discountPercent: 10,
  },
  {
    slug: "vendre",
    title: "Vendre, être payé, et faire revenir tes clients",
    description: "De la première demande jusqu'au client qui revient et qui te recommande.",
    courseSlugs: ["tarifs", "clients", "facturation", "fidelisation"],
    discountPercent: 10,
  },
  {
    slug: "proteger",
    title: "Se protéger et tenir sur la durée",
    description:
      "Ce qui sécurise ton activité et ta tête sur le long terme, une fois les bases posées.",
    courseSlugs: ["protection-juridique", "protection-sociale", "tresorerie", "organisation"],
    discountPercent: 10,
  },
];

export function getPack(slug: string): Pack | undefined {
  return packs.find((p) => p.slug === slug);
}

export function getPackCourses(pack: Pack) {
  return pack.courseSlugs
    .map((slug) => getCourse(slug))
    .filter((c): c is NonNullable<typeof c> => !!c);
}

export function getPackPricing(pack: Pack) {
  const total = getPackCourses(pack).reduce((sum, c) => sum + c.priceEuros, 0);
  const discounted = Math.round(total * (1 - pack.discountPercent / 100));
  return { total, discounted, savings: total - discounted };
}

const PARTIAL_DISCOUNT_PERCENT = 5;

export type PackPricingFor = {
  fullyOwned: boolean;
  remainingSlugs: string[];
  discountPercent: number;
  total: number;
  discounted: number;
  savings: number;
};

/**
 * Pricing for a pack given the courses a specific user already owns.
 * None owned -> standard pack discount on the full price.
 * Some owned  -> a smaller discount on the sum of the remaining courses only.
 * All owned   -> fullyOwned: true, nothing left to buy.
 */
export function getPackPricingFor(pack: Pack, ownedSlugs: string[]): PackPricingFor {
  const remainingSlugs = pack.courseSlugs.filter((slug) => !ownedSlugs.includes(slug));

  if (remainingSlugs.length === 0) {
    return { fullyOwned: true, remainingSlugs, discountPercent: 0, total: 0, discounted: 0, savings: 0 };
  }

  const isPartial = remainingSlugs.length < pack.courseSlugs.length;
  const discountPercent = isPartial ? PARTIAL_DISCOUNT_PERCENT : pack.discountPercent;

  const total = remainingSlugs
    .map((slug) => getCourse(slug))
    .filter((c): c is NonNullable<typeof c> => !!c)
    .reduce((sum, c) => sum + c.priceEuros, 0);
  const discounted = Math.round(total * (1 - discountPercent / 100));

  return { fullyOwned: false, remainingSlugs, discountPercent, total, discounted, savings: total - discounted };
}
