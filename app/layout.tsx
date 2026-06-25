import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Portfolio — Solange ILINGA | InnoFaso",
  description: "Portfolio académique de fin de licence — Projet InnoFaso",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen bg-slate-950">{children}</body>
    </html>
  );
}
