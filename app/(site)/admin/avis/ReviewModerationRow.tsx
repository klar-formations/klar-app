"use client";

import { useState } from "react";

type Status = "pending" | "approved" | "rejected";

export default function ReviewModerationRow({
  id,
  name,
  courseTitle,
  rating,
  comment,
  status,
  date,
}: {
  id: string;
  name: string;
  courseTitle: string | null;
  rating: number;
  comment: string;
  status: Status;
  date: string;
}) {
  const [currentStatus, setCurrentStatus] = useState<Status>(status);
  const [loading, setLoading] = useState(false);

  async function setReviewStatus(newStatus: Status) {
    setLoading(true);
    const res = await fetch("/api/admin/reviews", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status: newStatus }),
    });
    setLoading(false);
    if (res.ok) setCurrentStatus(newStatus);
  }

  const statusLabel = { pending: "En attente", approved: "Approuvé ✓", rejected: "Rejeté" }[
    currentStatus
  ];
  const statusColor = { pending: "#8b8ea3", approved: "var(--sage)", rejected: "var(--terracotta)" }[
    currentStatus
  ];

  return (
    <div className="account-panel" style={{ maxWidth: "none" }}>
      <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
        <div>
          <strong>{name}</strong>
          {courseTitle && <span style={{ color: "#5c5f7a" }}> · {courseTitle}</span>}
          <span style={{ marginLeft: 10, color: "var(--terracotta)" }}>{"★".repeat(rating)}</span>
        </div>
        <span style={{ fontWeight: 700, color: statusColor, fontSize: "0.85rem" }}>{statusLabel}</span>
      </div>
      <p style={{ margin: "12px 0", color: "#3a3d55" }}>{comment}</p>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
        <span style={{ fontSize: "0.8rem", color: "#8b8ea3" }}>
          {new Date(date).toLocaleDateString("fr-FR")}
        </span>
        <div style={{ display: "flex", gap: 8 }}>
          <button
            className="btn btn-ghost"
            disabled={loading || currentStatus === "approved"}
            onClick={() => setReviewStatus("approved")}
          >
            Approuver
          </button>
          <button
            className="btn btn-ghost"
            disabled={loading || currentStatus === "rejected"}
            onClick={() => setReviewStatus("rejected")}
          >
            Rejeter
          </button>
        </div>
      </div>
    </div>
  );
}
