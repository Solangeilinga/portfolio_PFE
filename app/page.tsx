import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import { student, competences } from "@/lib/data";

export default function Home() {
  const colorMap: Record<number, { ring: string; badge: string; btn: string }> = {
    1: { ring: "ring-primary-500/40 hover:ring-primary-400/60", badge: "bg-primary-900/40 text-primary-300 border-primary-700/50", btn: "bg-primary-600 hover:bg-primary-500" },
    2: { ring: "ring-teal-500/40 hover:ring-teal-400/60", badge: "bg-teal-900/40 text-teal-300 border-teal-700/50", btn: "bg-teal-600 hover:bg-teal-500" },
    3: { ring: "ring-accent-500/40 hover:ring-accent-400/60", badge: "bg-accent-900/40 text-accent-300 border-accent-700/50", btn: "bg-accent-600 hover:bg-accent-500" },
  };

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-600/20 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal-500/15 rounded-full blur-3xl" />
            <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl" />
          </div>

          <div className="relative section-padding max-w-7xl mx-auto w-full">
            <div className="max-w-3xl">
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold bg-primary-900/40 text-primary-300 border border-primary-700/50 mb-6">
                Portfolio académique · Licence 3 · {student.year}
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold leading-none tracking-tight mb-6">
                <span className="text-white">{student.name.split(" ")[0]}</span>
                <br />
                <span className="gradient-text">{student.name.split(" ")[1]}</span>
              </h1>
              <p className="text-xl text-slate-400 mb-4 font-medium">{student.program}</p>
              <p className="text-lg text-slate-500 mb-8 leading-relaxed max-w-2xl">
                Ce portfolio documente mon développement de compétences à travers le projet{" "}
                <span className="text-teal-400 font-semibold">{student.project}</span> —{" "}
                {student.projectDesc}.
              </p>
              <blockquote className="border-l-4 border-teal-500 pl-5 mb-10">
                <p className="text-slate-300 italic text-lg">"{student.quote}"</p>
              </blockquote>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/competence/1"
                  className="px-6 py-3 rounded-xl bg-primary-600 hover:bg-primary-500 text-white font-semibold transition-colors"
                >
                  Explorer les compétences →
                </Link>
                <Link
                  href="/bilan"
                  className="px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-semibold"
                >
                  Bilan réflexif
                </Link>
                <a
                  href={student.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 rounded-xl glass glass-hover text-slate-300 font-semibold flex items-center gap-2"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Projet InnoFaso ──────────────────────────────── */}
        <section className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Le projet InnoFaso</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Un projet de groupe mené sur un semestre complet, en collaboration directe avec une entreprise agroalimentaire au Burkina Faso.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              { icon: "🏭", title: "Contexte", text: "Digitalisation des formulaires de maintenance et de production d'InnoFaso, une entreprise agroalimentaire à Ouagadougou." },
              { icon: "👥", title: "Équipe", text: "4 étudiants en Data Science & IA, avec une répartition des rôles : frontend, backend, base de données, authentification." },
              { icon: "🎯", title: "Ma contribution", text: "Développement du frontend React — moteur de formulaires dynamiques, tableau de bord, historique, et intégration du module IA." },
            ].map((item) => (
              <div key={item.title} className="card">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          {/* Stack technique */}
          <div className="card">
            <h3 className="text-lg font-semibold text-white mb-4 text-center">Stack technique</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {["React + Vite", "Tailwind CSS", "Node.js / Express", "PostgreSQL", "Flask (IA)", "scikit-learn", "JWT", "GitHub"].map((tech) => (
                <span key={tech} className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 text-sm font-medium border border-slate-700">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Compétences ──────────────────────────────────── */}
        <section className="section-padding max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Les trois compétences</h2>
            <p className="text-slate-400 max-w-xl mx-auto">
              Chaque compétence regroupe plusieurs apprentissages essentiels, documentés par des traces concrètes et une analyse réflexive.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {competences.map((c) => {
              const col = colorMap[c.id];
              return (
                <Link
                  key={c.id}
                  href={`/competence/${c.id}`}
                  className={`card ring-1 ${col.ring} group flex flex-col`}
                >
                  <div className="text-4xl mb-4">{c.icon}</div>
                  <span className={`text-xs font-bold px-2 py-1 rounded-md border inline-block mb-3 ${col.badge}`}>
                    {c.code}
                  </span>
                  <h3 className="text-base font-semibold text-white mb-3 leading-snug">{c.titre}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed flex-1">{c.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xs text-slate-500">{c.apprentissages.length} apprentissages</span>
                    <span className={`text-xs px-3 py-1.5 rounded-lg text-white font-medium transition-colors ${col.btn}`}>
                      Voir →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>

        {/* ── Footer ───────────────────────────────────────── */}
        <footer className="border-t border-white/10 py-10 text-center text-slate-500 text-sm">
          <p>Portfolio de {student.name} · {student.school} · {student.year}</p>
          <p className="mt-1 italic text-xs">"{student.quote}"</p>
        </footer>
      </main>
    </>
  );
}
