"use client";

import { useState } from "react";
import Link from "next/link";
import LogoutButton from "./LogoutButton";

export default function MobileNav({ hasUser }: { hasUser: boolean }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="mobile-nav">
      <button
        className="burger-btn"
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span />
        <span />
        <span />
      </button>

      {open && (
        <div className="mobile-nav-panel">
          <Link href="/catalogue" onClick={() => setOpen(false)}>
            Catalogue
          </Link>
          <Link href="/parcours" onClick={() => setOpen(false)}>
            Par où commencer
          </Link>
          <Link href="/#pourquoi" onClick={() => setOpen(false)}>
            Pourquoi Klar
          </Link>
          <Link href="/mes-formations" onClick={() => setOpen(false)}>
            Mon espace
          </Link>
          {hasUser && (
            <Link href="/compte" onClick={() => setOpen(false)}>
              Mon compte
            </Link>
          )}
          <div className="mobile-nav-account">
            {hasUser ? (
              <LogoutButton />
            ) : (
              <Link href="/connexion" className="btn btn-primary" onClick={() => setOpen(false)}>
                Se connecter
              </Link>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
