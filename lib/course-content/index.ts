import type { CourseModuleData } from "../course-player/types";
import { modules as microentreprise } from "./microentreprise";
import { modules as niche } from "./niche";
import { modules as clients } from "./clients";
import { modules as tresorerie } from "./tresorerie";
import { modules as tarifs } from "./tarifs";
import { modules as facturation } from "./facturation";
import { modules as organisation } from "./organisation";
import { modules as communication } from "./communication";
import { modules as protectionSociale } from "./protection-sociale";
import { modules as protectionJuridique } from "./protection-juridique";
import { modules as fidelisation } from "./fidelisation";

export const courseContent: Record<string, CourseModuleData[]> = {
  microentreprise,
  niche,
  clients,
  tresorerie,
  tarifs,
  facturation,
  organisation,
  communication,
  "protection-sociale": protectionSociale,
  "protection-juridique": protectionJuridique,
  fidelisation,
};

export function getCourseContent(slug: string): CourseModuleData[] | undefined {
  return courseContent[slug];
}
