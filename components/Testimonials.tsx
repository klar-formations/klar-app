"use client";

import { useState } from "react";
import Link from "next/link";

export type Testimonial = {
  id: string;
  name: string;
  courseTitle: string | null;
  rating: number;
  comment: string;
};

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  const [index, setIndex] = useState(0);

  if (testimonials.length === 0) return null;

  const t = testimonials[index];

  function prev() {
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  }
  function next() {
    setIndex((i) => (i + 1) % testimonials.length);
  }

  return (
    <div className="testimonials">
      <div className="testimonial-card">
        <div className="testimonial-stars">{"★".repeat(t.rating)}{"☆".repeat(5 - t.rating)}</div>
        <p className="testimonial-comment">&laquo; {t.comment} &raquo;</p>
        <div className="testimonial-author">
          {t.name}
          {t.courseTitle && <span> — {t.courseTitle}</span>}
        </div>
      </div>

      {testimonials.length > 1 && (
        <div className="testimonial-nav">
          <button aria-label="Avis précédent" onClick={prev}>
            ←
          </button>
          <div className="testimonial-dots">
            {testimonials.map((tt, i) => (
              <span key={tt.id} className={i === index ? "dot active" : "dot"} onClick={() => setIndex(i)} />
            ))}
          </div>
          <button aria-label="Avis suivant" onClick={next}>
            →
          </button>
        </div>
      )}

      <div style={{ textAlign: "center", marginTop: 26 }}>
        <Link href="/avis" className="btn btn-ghost">
          Je donne mon avis
        </Link>
      </div>
    </div>
  );
}
