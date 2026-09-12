"use client";

import { useEffect, useState } from "react";
import { getCourseContent } from "@/lib/course-content";

export default function CourseProgressBar({ slug }: { slug: string }) {
  const [pct, setPct] = useState<number | null>(null);

  useEffect(() => {
    const modules = getCourseContent(slug);
    if (!modules) return;

    let progress: Record<string, boolean> = {};
    try {
      progress = JSON.parse(localStorage.getItem(`${slug}_progress`) || "{}");
    } catch {}

    const lessonModules = modules.filter((m) => !m.isWorkspace);
    const total = lessonModules.reduce((n, m) => n + (m.lessons?.length || 0) + 1, 0);
    const done = lessonModules.reduce((n, m) => {
      let c = m.lessons?.filter((l) => progress[l.id]).length || 0;
      if (progress[`${m.id}_quiz`]) c++;
      return n + c;
    }, 0);

    setPct(total ? Math.round((done / total) * 100) : 0);
  }, [slug]);

  if (pct === null) return null;

  return (
    <div style={{ margin: "2px 0 16px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontSize: "0.78rem",
          color: "#7a7d95",
          marginBottom: 4,
        }}
      >
        <span>Progression</span>
        <span>{pct}%</span>
      </div>
      <div className="pm-bar">
        <i style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}
