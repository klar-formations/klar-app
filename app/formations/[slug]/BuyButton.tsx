"use client";

import { useState } from "react";

export default function BuyButton({ slug }: { slug: string }) {
  const [loading, setLoading] = useState(false);

  async function handleClick() {
    setLoading(true);
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ slug }),
    });
    const data = await res.json();
    if (data.url) {
      window.location.href = data.url;
    } else {
      setLoading(false);
      alert("Une erreur est survenue, réessaie dans un instant.");
    }
  }

  return (
    <button
      className="btn btn-primary"
      style={{ width: "100%", justifyContent: "center" }}
      onClick={handleClick}
      disabled={loading}
    >
      {loading ? "Redirection vers le paiement..." : "Acheter cette formation →"}
    </button>
  );
}
