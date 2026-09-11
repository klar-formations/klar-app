import type { CourseModuleData } from "../course-player/types";
import { modules as microentreprise } from "./microentreprise";
import { modules as clients } from "./clients";
import { modules as tresorerie } from "./tresorerie";
import { modules as tarifs } from "./tarifs";
import { modules as facturation } from "./facturation";
import { modules as organisation } from "./organisation";

export const courseContent: Record<string, CourseModuleData[]> = {
  microentreprise,
  clients,
  tresorerie,
  tarifs,
  facturation,
  organisation,
};

export function getCourseContent(slug: string): CourseModuleData[] | undefined {
  return courseContent[slug];
}
