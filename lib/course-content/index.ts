import type { CourseModuleData } from "../course-player/types";
import { modules as microentreprise } from "./microentreprise";
import { modules as niche } from "./niche";
import { modules as clients } from "./clients";
import { modules as tresorerie } from "./tresorerie";
import { modules as tarifs } from "./tarifs";
import { modules as facturation } from "./facturation";
import { modules as organisation } from "./organisation";
import { modules as communication } from "./communication";

export const courseContent: Record<string, CourseModuleData[]> = {
  microentreprise,
  niche,
  clients,
  tresorerie,
  tarifs,
  facturation,
  organisation,
  communication,
};

export function getCourseContent(slug: string): CourseModuleData[] | undefined {
  return courseContent[slug];
}
