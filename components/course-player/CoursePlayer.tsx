"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import type { CourseModuleData } from "@/lib/course-player/types";
import { IconBadge } from "@/lib/course-player/icons";

type View =
  | { type: "home" }
  | { type: "lesson"; mi: number; li: number }
  | { type: "quiz"; mi: number }
  | { type: "workspace" };

type WsData = { checklist?: boolean[]; [fieldId: string]: unknown };

export default function CoursePlayer({
  slug,
  title,
  modules,
}: {
  slug: string;
  title: string;
  modules: CourseModuleData[];
}) {
  const storageKey = `${slug}_progress`;
  const wsKey = `${slug}_workspace`;

  const [hydrated, setHydrated] = useState(false);
  const [progress, setProgress] = useState<Record<string, boolean>>({});
  const [wsData, setWsData] = useState<WsData>({});
  const [view, setView] = useState<View>({ type: "home" });
  const [openModules, setOpenModules] = useState<Set<number>>(new Set());
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});

  // Reads localStorage once on mount — client-only storage, so this must run in an effect.
  /* eslint-disable react-hooks/set-state-in-effect */
  useEffect(() => {
    let loadedProgress = {};
    let loadedWs = {};
    try {
      loadedProgress = JSON.parse(localStorage.getItem(storageKey) || "{}");
    } catch {}
    try {
      loadedWs = JSON.parse(localStorage.getItem(wsKey) || "{}");
    } catch {}
    setProgress(loadedProgress);
    setWsData(loadedWs);
    setHydrated(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /* eslint-enable react-hooks/set-state-in-effect */

  function persistProgress(next: Record<string, boolean>) {
    setProgress(next);
    try {
      localStorage.setItem(storageKey, JSON.stringify(next));
    } catch {}
  }
  function markDone(id: string) {
    persistProgress({ ...progress, [id]: true });
  }
  function persistWs(next: WsData) {
    setWsData(next);
    try {
      localStorage.setItem(wsKey, JSON.stringify(next));
    } catch {}
  }

  const lessonModules = modules.filter((m) => !m.isWorkspace);
  const totalItems = lessonModules.reduce((n, m) => n + (m.lessons?.length || 0) + 1, 0);
  const doneItems = lessonModules.reduce((n, m) => {
    let c = m.lessons?.filter((l) => progress[l.id]).length || 0;
    if (progress[`${m.id}_quiz`]) c++;
    return n + c;
  }, 0);
  const pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;

  function openModule(mi: number) {
    setOpenModules((prev) => new Set(prev).add(mi));
  }
  function goHome() {
    setView({ type: "home" });
    setSidebarOpen(false);
  }
  function goLesson(mi: number, li: number) {
    setView({ type: "lesson", mi, li });
    openModule(mi);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }
  function goQuiz(mi: number) {
    setView({ type: "quiz", mi });
    openModule(mi);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }
  function goWorkspace() {
    setView({ type: "workspace" });
    openModule(modules.length - 1);
    setSidebarOpen(false);
    window.scrollTo(0, 0);
  }

  function completeAndGo(id: string, fn: () => void) {
    markDone(id);
    fn();
  }

  function finishQuizAndGo(mi: number) {
    markDone(modules[mi].id + "_quiz");
    const next = modules[mi + 1];
    if (next?.isWorkspace) goWorkspace();
    else if (mi < modules.length - 1) goLesson(mi + 1, 0);
    else goHome();
  }

  function answerQuiz(mi: number, qi: number, oi: number) {
    setQuizAnswers((prev) => ({ ...prev, [`${mi}_${qi}`]: oi }));
  }

  function toggleModule(mi: number) {
    setOpenModules((prev) => {
      const next = new Set(prev);
      if (next.has(mi)) next.delete(mi);
      else next.add(mi);
      return next;
    });
  }

  function toggleWsCheck(ci: number) {
    const checklist = [...(wsData.checklist || [])];
    checklist[ci] = !checklist[ci];
    persistWs({ ...wsData, checklist });
  }
  function setWsField(id: string, value: string) {
    persistWs({ ...wsData, [id]: value });
  }

  function resumeOrStart() {
    for (let mi = 0; mi < modules.length; mi++) {
      const m = modules[mi];
      if (m.isWorkspace) continue;
      for (let li = 0; li < (m.lessons?.length || 0); li++) {
        if (!progress[m.lessons![li].id]) {
          goLesson(mi, li);
          return;
        }
      }
      if (!progress[`${m.id}_quiz`]) {
        goQuiz(mi);
        return;
      }
    }
    goLesson(0, 0);
  }

  if (!hydrated) return null;

  return (
    <div className="cp-root">
      <div className="cp-topbar">
        <div className="cp-topbar-inner">
          <button
            className="cp-menu-toggle"
            aria-label="Ouvrir le sommaire"
            onClick={() => setSidebarOpen((o) => !o)}
          >
            ☰
          </button>
          <Link className="cp-platform-link" href="/mes-formations">
            ← Klar
          </Link>
          <div className="cp-brand">
            <span className="cp-brand-dot"></span>
            {title}
          </div>
          <div className="cp-progress-track">
            <div className="cp-progress-fill" style={{ width: `${pct}%` }} />
          </div>
          <div className="cp-progress-label">{pct} %</div>
        </div>
      </div>

      <div className="cp-layout">
        <nav className={`cp-sidebar${sidebarOpen ? " open" : ""}`} aria-label="Sommaire de la formation">
          <button className="cp-nav-home-link" onClick={goHome}>
            🏠 Accueil de la formation
          </button>
          {modules.map((m, mi) => (
            <div className={`cp-nav-module${openModules.has(mi) ? " open" : ""}`} key={m.id}>
              <button className="cp-nav-mod-title" onClick={() => toggleModule(mi)}>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <IconBadge icon={m.icon} moduleIndex={mi} size="s" />
                  {m.title}
                </span>
                <span>{openModules.has(mi) ? "︿" : "﹀"}</span>
              </button>
              <ul className="cp-nav-items">
                {m.isWorkspace ? (
                  <li>
                    <button
                      className={`cp-nav-item${view.type === "workspace" ? " active" : ""}`}
                      onClick={goWorkspace}
                    >
                      <span className="cp-check"></span>
                      <span>{m.workspaceFields ? "Mon espace personnel" : "Boîte à outils"}</span>
                    </button>
                  </li>
                ) : (
                  <>
                    {m.lessons!.map((l, li) => (
                      <li key={l.id}>
                        <button
                          className={`cp-nav-item${
                            view.type === "lesson" && view.mi === mi && view.li === li ? " active" : ""
                          }`}
                          onClick={() => goLesson(mi, li)}
                        >
                          <span className={`cp-check${progress[l.id] ? " done" : ""}`}></span>
                          <span>{l.title}</span>
                        </button>
                      </li>
                    ))}
                    <li>
                      <button
                        className={`cp-nav-item${view.type === "quiz" && view.mi === mi ? " active" : ""}`}
                        onClick={() => goQuiz(mi)}
                      >
                        <span className={`cp-check${progress[`${m.id}_quiz`] ? " done" : ""}`}></span>
                        <span>Quiz — Module {mi + 1}</span>
                      </button>
                    </li>
                  </>
                )}
              </ul>
            </div>
          ))}
        </nav>

        <main className="cp-main">
          {view.type === "home" && (
            <HomeView
              title={title}
              modules={modules}
              progress={progress}
              doneItems={doneItems}
              pct={pct}
              onStart={() => goLesson(0, 0)}
              onResume={resumeOrStart}
              onSelectModule={(mi) => (modules[mi].isWorkspace ? goWorkspace() : goLesson(mi, 0))}
            />
          )}

          {view.type === "lesson" && (
            <LessonView
              module={modules[view.mi]}
              moduleIndex={view.mi}
              lessonIndex={view.li}
              onPrevLesson={() => goLesson(view.mi, view.li - 1)}
              onPrevQuiz={() => goQuiz(view.mi - 1)}
              onHome={goHome}
              onNextLesson={() =>
                completeAndGo(modules[view.mi].lessons![view.li].id, () => goLesson(view.mi, view.li + 1))
              }
              onToQuiz={() =>
                completeAndGo(modules[view.mi].lessons![view.li].id, () => goQuiz(view.mi))
              }
            />
          )}

          {view.type === "quiz" && (
            <QuizView
              module={modules[view.mi]}
              moduleIndex={view.mi}
              isLastModule={
                view.mi === modules.length - 1 ||
                (view.mi === modules.length - 2 && !!modules[modules.length - 1].isWorkspace)
              }
              answers={quizAnswers}
              onAnswer={answerQuiz}
              onBackToLastLesson={() => goLesson(view.mi, modules[view.mi].lessons!.length - 1)}
              onNext={() => finishQuizAndGo(view.mi)}
            />
          )}

          {view.type === "workspace" && (
            <WorkspaceView
              module={modules[modules.length - 1]}
              moduleIndex={modules.length - 1}
              wsData={wsData}
              onFieldChange={setWsField}
              onToggleCheck={toggleWsCheck}
              onPrevQuiz={() => goQuiz(modules.length - 2)}
              onHome={goHome}
            />
          )}
        </main>
      </div>
    </div>
  );
}

function HomeView({
  title,
  modules,
  progress,
  doneItems,
  pct,
  onStart,
  onResume,
  onSelectModule,
}: {
  title: string;
  modules: CourseModuleData[];
  progress: Record<string, boolean>;
  doneItems: number;
  pct: number;
  onStart: () => void;
  onResume: () => void;
  onSelectModule: (mi: number) => void;
}) {
  const lessonCount = modules.reduce((a, m) => a + (m.lessons?.length || 0), 0);
  const quizCount = modules.filter((m) => !m.isWorkspace).length;

  return (
    <>
      <div className="cp-hero">
        <span className="cp-hero-tag">Formation complète</span>
        <h1>{title}</h1>
        <p className="lead">
          Avance module par module, à ton rythme : ta progression est sauvegardée automatiquement sur
          cet appareil.
        </p>
        <div className="cp-hero-actions">
          <button className="btn btn-primary" onClick={onStart}>
            Commencer la formation →
          </button>
          {doneItems > 0 && (
            <button className="btn btn-ghost" onClick={onResume}>
              Reprendre où j&apos;en étais
            </button>
          )}
        </div>
        <div className="cp-stat-row">
          <div className="cp-stat">
            <b>{modules.length}</b>
            <span>modules{modules.some((m) => m.isWorkspace) ? " (dont ton espace perso)" : ""}</span>
          </div>
          <div className="cp-stat">
            <b>{lessonCount}</b>
            <span>leçons détaillées</span>
          </div>
          <div className="cp-stat">
            <b>{quizCount}</b>
            <span>quiz d&apos;évaluation</span>
          </div>
          <div className="cp-stat">
            <b>{pct}%</b>
            <span>de progression actuelle</span>
          </div>
        </div>
      </div>

      <div className="cp-module-grid">
        {modules.map((m, mi) => {
          if (m.isWorkspace) {
            return (
              <button className="cp-mod-card" key={m.id} onClick={() => onSelectModule(mi)}>
                <div className="cp-mod-card-top">
                  <IconBadge icon={m.icon} moduleIndex={mi} size="m" />
                </div>
                <h3>
                  Module {mi + 1} — {m.title}
                </h3>
                <p>{m.desc}</p>
              </button>
            );
          }
          const total = (m.lessons?.length || 0) + 1;
          const doneCount = (m.lessons?.filter((l) => progress[l.id]).length || 0) + (progress[`${m.id}_quiz`] ? 1 : 0);
          const modPct = Math.round((doneCount / total) * 100);
          return (
            <button className="cp-mod-card" key={m.id} onClick={() => onSelectModule(mi)}>
              <div className="cp-mod-card-top">
                <IconBadge icon={m.icon} moduleIndex={mi} size="m" />
              </div>
              <h3>
                Module {mi + 1} — {m.title}
              </h3>
              <p>{m.desc}</p>
              <div className="cp-mini-progress">
                <i style={{ width: `${modPct}%` }} />
              </div>
            </button>
          );
        })}
      </div>
    </>
  );
}

function LessonView({
  module: m,
  moduleIndex: mi,
  lessonIndex: li,
  onPrevLesson,
  onPrevQuiz,
  onHome,
  onNextLesson,
  onToQuiz,
}: {
  module: CourseModuleData;
  moduleIndex: number;
  lessonIndex: number;
  onPrevLesson: () => void;
  onPrevQuiz: () => void;
  onHome: () => void;
  onNextLesson: () => void;
  onToQuiz: () => void;
}) {
  const l = m.lessons![li];
  const isLast = li === m.lessons!.length - 1;

  return (
    <>
      <div className="cp-lesson-header-row">
        <IconBadge icon={m.icon} moduleIndex={mi} size="m" />
        <div>
          <div className="cp-crumb">
            MODULE {mi + 1} · {m.title}
          </div>
        </div>
      </div>
      <h1 className="cp-lesson-title">{l.title}</h1>
      <div className="cp-lesson-meta">
        Leçon {li + 1} sur {m.lessons!.length}
      </div>
      <div className="cp-content-body" dangerouslySetInnerHTML={{ __html: l.html }} />
      <div className="cp-keypoints">
        <h3>Points clés à retenir</h3>
        <ul>
          {l.keypoints.map((k) => (
            <li key={k}>{k}</li>
          ))}
        </ul>
      </div>
      <div className="cp-lesson-nav">
        {li > 0 ? (
          <button className="btn btn-ghost" onClick={onPrevLesson}>
            ← Leçon précédente
          </button>
        ) : mi > 0 ? (
          <button className="btn btn-ghost" onClick={onPrevQuiz}>
            ← Quiz du module précédent
          </button>
        ) : (
          <button className="btn btn-ghost" onClick={onHome}>
            ← Accueil
          </button>
        )}
        <button className="btn btn-primary" onClick={isLast ? onToQuiz : onNextLesson}>
          {isLast ? "Passer au quiz du module →" : "Leçon suivante →"}
        </button>
      </div>
    </>
  );
}

function QuizView({
  module: m,
  moduleIndex: mi,
  isLastModule,
  answers,
  onAnswer,
  onBackToLastLesson,
  onNext,
}: {
  module: CourseModuleData;
  moduleIndex: number;
  isLastModule: boolean;
  answers: Record<string, number>;
  onAnswer: (mi: number, qi: number, oi: number) => void;
  onBackToLastLesson: () => void;
  onNext: () => void;
}) {
  const quiz = m.quiz!;
  const answeredCount = quiz.filter((_, qi) => answers[`${mi}_${qi}`] !== undefined).length;
  const correctCount = quiz.filter((q, qi) => answers[`${mi}_${qi}`] === q.correct).length;
  const allAnswered = answeredCount === quiz.length;

  return (
    <>
      <div className="cp-lesson-header-row">
        <IconBadge icon={m.icon} moduleIndex={mi} size="m" />
        <div>
          <div className="cp-crumb">
            MODULE {mi + 1} · {m.title}
          </div>
        </div>
      </div>
      <h1 className="cp-lesson-title">Quiz — Vérifie tes connaissances</h1>
      <div className="cp-lesson-meta">{quiz.length} questions · une seule bonne réponse à chaque fois</div>

      {quiz.map((q, qi) => {
        const selected = answers[`${mi}_${qi}`];
        return (
          <div className="cp-quiz-q" key={qi}>
            <p className="q-text">
              {qi + 1}. {q.q}
            </p>
            {q.options.map((opt, oi) => {
              let cls = "cp-quiz-opt";
              if (selected !== undefined) {
                if (oi === q.correct) cls += " correct";
                else if (oi === selected) cls += " incorrect";
              }
              return (
                <button key={oi} className={cls} onClick={() => onAnswer(mi, qi, oi)}>
                  {opt}
                </button>
              );
            })}
            {selected !== undefined && <p className="cp-quiz-explain">{q.explain}</p>}
          </div>
        );
      })}

      {allAnswered && (
        <div className="cp-quiz-score">
          <b>
            {correctCount} / {quiz.length}
          </b>
          Bonnes réponses sur ce module
        </div>
      )}

      <div className="cp-lesson-nav">
        <button className="btn btn-ghost" onClick={onBackToLastLesson}>
          ← Revenir à la dernière leçon
        </button>
        <button className="btn btn-primary" onClick={onNext}>
          {isLastModule ? "Terminer la formation →" : "Module suivant →"}
        </button>
      </div>
    </>
  );
}

function WorkspaceView({
  module: m,
  moduleIndex: mi,
  wsData,
  onFieldChange,
  onToggleCheck,
  onPrevQuiz,
  onHome,
}: {
  module: CourseModuleData;
  moduleIndex: number;
  wsData: WsData;
  onFieldChange: (id: string, value: string) => void;
  onToggleCheck: (ci: number) => void;
  onPrevQuiz: () => void;
  onHome: () => void;
}) {
  const checklist = m.workspaceChecklist || [];
  const totalC = checklist.length;
  const doneC = (wsData.checklist || []).filter(Boolean).length;
  const pct = totalC ? Math.round((doneC / totalC) * 100) : 0;
  const introTitle = m.workspaceFields ? "Mon entreprise — ton espace personnel" : "Boîte à outils";
  const checklistTitle = m.workspaceFields ? "Ma checklist de lancement" : "Ma checklist de mise en place";

  return (
    <>
      <div className="cp-lesson-header-row">
        <IconBadge icon={m.icon} moduleIndex={mi} size="m" />
        <div>
          <div className="cp-crumb">MODULE {mi + 1} · {m.title}</div>
        </div>
      </div>
      <h1 className="cp-lesson-title">{introTitle}</h1>
      <div className="cp-lesson-meta">
        Rien ici n&apos;est noté ni partagé : c&apos;est ton espace personnel, enregistré sur cet appareil.
      </div>
      <div className="cp-content-body">
        <p>{m.workspaceIntro}</p>
      </div>

      <div className="cp-ws-progress-ring">
        <IconBadge icon="clipboard" moduleIndex={mi} size="m" />
        <div>
          <strong style={{ fontSize: "1.2rem" }}>{pct}% de la checklist</strong>
          <div className="cp-ws-hint">
            Coche au fur et à mesure — ta progression est sauvegardée automatiquement.
          </div>
        </div>
      </div>

      {m.workspaceFields && (
        <>
          <h3 style={{ marginTop: "0.4em" }}>Mon projet, à l&apos;écrit</h3>
          {m.workspaceFields.map((f) => (
            <div className="cp-ws-field" key={f.id}>
              <label htmlFor={f.id}>{f.label}</label>
              <textarea
                id={f.id}
                placeholder={f.placeholder || ""}
                defaultValue={(wsData[f.id] as string) || ""}
                onBlur={(e) => onFieldChange(f.id, e.target.value)}
              />
              {f.hint && <div className="cp-ws-hint">{f.hint}</div>}
            </div>
          ))}
        </>
      )}

      {m.resourceSections && (
        <>
          <h3 style={{ marginTop: "0.4em" }}>Ressources prêtes à l&apos;emploi</h3>
          {m.resourceSections.map((s) => (
            <div className="cp-ws-field" key={s.title}>
              <label>{s.title}</label>
              <div className="cp-content-body" dangerouslySetInnerHTML={{ __html: s.html }} />
            </div>
          ))}
        </>
      )}

      <h3 style={{ marginTop: "1.4em" }}>{checklistTitle}</h3>
      <ul className="cp-ws-checklist">
        {checklist.map((item, ci) => {
          const checked = !!(wsData.checklist && wsData.checklist[ci]);
          return (
            <li key={ci}>
              <input
                type="checkbox"
                id={`wsc-${ci}`}
                checked={checked}
                onChange={() => onToggleCheck(ci)}
              />
              <label htmlFor={`wsc-${ci}`} className={checked ? "checked" : ""}>
                {item}
              </label>
            </li>
          );
        })}
      </ul>

      <div className="cp-lesson-nav">
        <button className="btn btn-ghost" onClick={onPrevQuiz}>
          ← Quiz du module précédent
        </button>
        <button className="btn btn-sage" onClick={onHome}>
          Retour à l&apos;accueil de la formation
        </button>
      </div>
    </>
  );
}
