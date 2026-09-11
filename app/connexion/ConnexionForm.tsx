"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function ConnexionForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setStatus(error ? "error" : "sent");
  }

  if (status === "sent") {
    return (
      <p className="success-msg">
        E-mail envoyé ! Clique sur le lien reçu à {email} pour accéder à ton espace (pense à
        vérifier tes spams).
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">E-mail</label>
      <input
        type="email"
        id="email"
        required
        placeholder="toi@exemple.fr"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      {status === "error" && (
        <p className="error-msg">Une erreur est survenue, réessaie dans un instant.</p>
      )}
      <button type="submit" className="btn btn-primary auth-submit" disabled={status === "sending"}>
        {status === "sending" ? "Envoi..." : "Recevoir mon lien de connexion →"}
      </button>
    </form>
  );
}
