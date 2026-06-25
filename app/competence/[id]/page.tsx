import { notFound } from "next/navigation";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import ApprentissageCard from "@/components/ui/ApprentissageCard";
import { competences } from "@/lib/data";

export function generateStaticParams() {
  return competences.map((c) => ({ id: String(c.id) }));
}

export default async function CompetencePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const comp = competences.find((c) => c.id === Number(id));
  if (!comp) notFound();

  const prev = competences.find((c) => c.id === comp.id - 1);
  const next = competences.find((c) => c.id === comp.id + 1);

  const colorMap: Record<number, { accent: string; bg: string; border: string }> = {
    1: { accent: "text-primary-400", bg: "bg-primary-900/20", border: "border-primary-700/40" },
    2: { accent: "text-teal-400", bg: "bg-teal-900/20", border: "border-teal-700/40" },
    3: { accent: "text-accent-400", bg: "bg-accent-900/20", border: "border-accent-700/40" },
  };
  const col = colorMap[comp.id];

  // Count expert
  const expertCount = comp.apprentissages.filter((a) => a.autoEval === "Expert").length;

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Hero banner */}
        <section className={`relative overflow-hidden py-16 border-b border-white/10 ${col.bg}`}>
          <div className="absolute inset-0 pointer-events-none">
            <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 ${
              comp.id === 1 ? "bg-primary-600" : comp.id === 2 ? "bg-teal-600" : "bg-accent-600"
            }`} />
          </div>
          <div className="relative section-padding max-w-7xl mx-auto">
            <div className="flex items-start gap-6">
              <div className={`w-16 h-16 rounded-2xl ${col.bg} ${col.border} border flex items-center justify-center text-3xl flex-shrink-0`}>
                {comp.icon}
              </div>
              <div className="flex-1">
                <span className={`text-xs font-bold uppercase tracking-widest ${col.accent} mb-2 block`}>
                  Compétence {comp.code}
                </span>
                <h1 className="text-2xl md:text-3xl font-bold text-white leading-snug mb-3">
                  {comp.titre}
                </h1>
                <p className="text-slate-400 max-w-2xl">{comp.description}</p>

                {/* Stats */}
                <div className="flex flex-wrap gap-4 mt-6">
                  <div className={`px-4 py-2 rounded-xl ${col.bg} border ${col.border} text-center`}>
                    <div className={`text-2xl font-bold ${col.accent}`}>{comp.apprentissages.length}</div>
                    <div className="text-xs text-slate-400">Apprentissages</div>
                  </div>
                  <div className={`px-4 py-2 rounded-xl ${col.bg} border ${col.border} text-center`}>
                    <div className={`text-2xl font-bold ${col.accent}`}>{expertCount}</div>
                    <div className="text-xs text-slate-400">Niveau Expert</div>
                  </div>
                  <div className={`px-4 py-2 rounded-xl ${col.bg} border ${col.border} text-center`}>
                    <div className={`text-2xl font-bold ${col.accent}`}>
                      {comp.apprentissages.reduce((s, a) => s + a.traces.length, 0)}
                    </div>
                    <div className="text-xs text-slate-400">Traces</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Apprentissages */}
        <section className="section-padding max-w-4xl mx-auto">
          <h2 className="text-xl font-bold text-white mb-6">Apprentissages essentiels</h2>
          <div className="space-y-4">
            {comp.apprentissages.map((a, i) => (
              <ApprentissageCard key={a.id} apprentissage={a} index={i} />
            ))}
          </div>
        </section>

        {/* Navigation prev / next */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 lg:px-24 pb-20 flex justify-between items-center">
          {prev ? (
            <Link
              href={`/competence/${prev.id}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              ← {prev.code} — {prev.titre.slice(0, 30)}…
            </Link>
          ) : (
            <Link href="/" className="text-slate-400 hover:text-white text-sm">← Accueil</Link>
          )}
          {next ? (
            <Link
              href={`/competence/${next.id}`}
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
            >
              {next.code} — {next.titre.slice(0, 30)}… →
            </Link>
          ) : (
            <Link href="/bilan" className="text-slate-400 hover:text-white text-sm">Bilan réflexif →</Link>
          )}
        </div>
      </main>
    </>
  );
}
