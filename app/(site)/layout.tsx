import Link from "next/link";
import Header from "@/components/Header";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <footer className="site-footer">
        <div className="wrap">
          Klar — plateforme de formation pour indépendants français. Les formations sont
          payantes ; l&apos;accès est nominatif.
          <br />
          <span style={{ fontSize: "0.78rem", opacity: 0.8 }}>
            « Klar » signifie « clair, net » en scandinave — la promesse de la marque : de la
            clarté dans l&apos;administratif et le commercial.
          </span>
          <div style={{ marginTop: 14, display: "flex", gap: 18, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/mentions-legales" style={{ color: "inherit", textDecoration: "underline" }}>
              Mentions légales
            </Link>
            <Link href="/cgv" style={{ color: "inherit", textDecoration: "underline" }}>
              CGV
            </Link>
            <Link href="/confidentialite" style={{ color: "inherit", textDecoration: "underline" }}>
              Confidentialité
            </Link>
          </div>
        </div>
      </footer>
    </>
  );
}
