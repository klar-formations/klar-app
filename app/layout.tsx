import type { Metadata } from "next";
import { Baloo_2, Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const baloo = Baloo_2({
  variable: "--font-baloo",
  weight: ["500", "600", "700", "800"],
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Klar — Formations pour micro-entrepreneurs et freelances",
  description:
    "Des formations denses et actionnables pour les micro-entrepreneurs et freelances qui veulent reprendre le contrôle de leur administratif et de leur activité commerciale.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${baloo.variable} ${manrope.variable}`}>
      <body>
        <Header />
        {children}
        <footer className="site-footer">
          <div className="wrap">
            Klar — plateforme de formation pour indépendants français. Les formations sont
            payantes ; l&apos;accès est nominatif.
          </div>
        </footer>
      </body>
    </html>
  );
}
