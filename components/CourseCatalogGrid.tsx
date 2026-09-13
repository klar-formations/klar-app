import Link from "next/link";
import type { Course } from "@/lib/courses";
import PhotoCover from "@/components/illustrations/PhotoCover";

export default function CourseCatalogGrid({ courses }: { courses: Course[] }) {
  return (
    <div className="catalog-grid">
      {courses.map((course) => (
        <div className={`course-card accent-${course.accent}`} key={course.slug}>
          <div className="illustration-frame" style={{ aspectRatio: "16/9", borderRadius: 0 }}>
            <PhotoCover src={`/images/${course.slug}-catalog.jpg`} alt={course.shortTitle} />
          </div>
          <div className={`course-band ${course.accent}`}></div>
          <div className="course-body">
            <div
              className="course-eyebrow"
              style={{ color: `var(--${course.accent === "indigo" ? "indigo" : course.accent})` }}
            >
              {course.category}
            </div>
            <h3>{course.shortTitle}</h3>
            <p className="desc">{course.heroSubtitle}</p>
            <div className="course-meta">
              <span>{course.meta.modules} modules</span>
              <span>{course.meta.lessons} leçons</span>
              <span>{course.meta.quizzes} quiz</span>
            </div>
            <div className="course-price">
              {course.priceEuros} € <span>accès à vie</span>
            </div>
            <Link
              href={`/formations/${course.slug}`}
              className="btn btn-primary"
              style={{ justifyContent: "center" }}
            >
              Voir la formation
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
