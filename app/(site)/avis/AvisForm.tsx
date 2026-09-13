"use client";

import { useState } from "react";

export default function AvisForm({ courses }: { courses: { slug: string; title: string }[] }) {
  const [name, setName] = useState("");
  const [courseSlug, setCourseSlug] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name.trim() || !comment.trim() || rating === 0) {
      setError("Merci de remplir ton nom, une note, et un commentaire.");
      return;
    }
    setError("");
    setSending(true);
    const res = await fetch("/api/avis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, courseSlug: courseSlug || null, rating, comment }),
    });
    setSending(false);
    if (res.ok) {
      setSent(true);
    } else {
      setError("Une erreur est survenue, réessaie dans un instant.");
    }
  }

  if (sent) {
    return (
      <div className="account-panel">
        <h3>Merci pour ton retour ! 🙏</h3>
        <p>Ton avis a bien été envoyé.</p>
      </div>
    );
  }

  return (
    <form className="account-panel" onSubmit={handleSubmit}>
      <div className="account-field">
        <label>Nom *</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Ton prénom, ou prénom + initiale" />
      </div>
      <div className="account-field">
        <label>Formation suivie</label>
        <select value={courseSlug} onChange={(e) => setCourseSlug(e.target.value)}>
          <option value="">— (optionnel) —</option>
          {courses.map((c) => (
            <option key={c.slug} value={c.slug}>
              {c.title}
            </option>
          ))}
        </select>
      </div>
      <div className="account-field">
        <label>Note *</label>
        <div className="star-picker">
          {[1, 2, 3, 4, 5].map((n) => (
            <button
              type="button"
              key={n}
              className={n <= rating ? "star filled" : "star"}
              onClick={() => setRating(n)}
              aria-label={`${n} étoiles`}
            >
              ★
            </button>
          ))}
        </div>
      </div>
      <div className="account-field">
        <label>Commentaire *</label>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          rows={5}
          placeholder="Qu'est-ce que tu as pensé de la formation ?"
        />
      </div>
      {error && <p style={{ color: "var(--terracotta)", fontSize: "0.9rem" }}>{error}</p>}
      <button className="btn btn-primary" disabled={sending}>
        {sending ? "Envoi..." : "Envoyer mon avis"}
      </button>
    </form>
  );
}
