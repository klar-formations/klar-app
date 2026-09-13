import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import LogoutButton from "./LogoutButton";
import MobileNav from "./MobileNav";

export default async function Header() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="topbar">
      <div className="topbar-inner">
        <Link href="/" className="brand">
          <span className="brand-dot"></span>Klar
        </Link>
        <nav className="mainnav">
          <Link href="/catalogue">Catalogue</Link>
          <Link href="/#pourquoi">Pourquoi Klar</Link>
          <Link href="/mes-formations">Mon espace</Link>
          {user && <Link href="/compte">Mon compte</Link>}
        </nav>
        <div id="accountArea">
          {user ? (
            <>
              <span style={{ fontWeight: 600, fontSize: "0.9rem" }}>Bonjour 👋</span>
              <LogoutButton />
            </>
          ) : (
            <Link href="/connexion" className="btn btn-primary">
              Se connecter
            </Link>
          )}
        </div>
        <MobileNav hasUser={!!user} />
      </div>
    </header>
  );
}
