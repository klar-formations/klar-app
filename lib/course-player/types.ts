export type IconKey =
  | "doc"
  | "calendar"
  | "coin"
  | "toolbox"
  | "compass"
  | "heart"
  | "chat"
  | "shield"
  | "megaphone"
  | "handshake"
  | "clipboard"
  | "play";

export type CourseLesson = {
  id: string;
  title: string;
  html: string;
  keypoints: string[];
};

export type CourseQuizQuestion = {
  q: string;
  options: string[];
  correct: number;
  explain: string;
};

export type WorkspaceField = {
  id: string;
  label: string;
  hint?: string;
  placeholder?: string;
};

export type ResourceSection = {
  title: string;
  html: string;
};

export type CourseModuleData = {
  id: string;
  title: string;
  icon: IconKey;
  desc: string;
  isWorkspace?: boolean;
  lessons?: CourseLesson[];
  quiz?: CourseQuizQuestion[];
  workspaceIntro?: string;
  workspaceFields?: WorkspaceField[];
  workspaceChecklist?: string[];
  resourceSections?: ResourceSection[];
};
