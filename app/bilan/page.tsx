import Navbar from "@/components/layout/Navbar";
import { student, competences } from "@/lib/data";
import Link from "next/link";

const bilanSections = [
  {
    icon: "🌱",
    color: "teal",
    titre: "Ce que ce projet a changé en moi",
    texte: `InnoFaso a été mon premier projet mené de bout en bout dans un contexte professionnel réel. Avant ce projet, je développais des applications dans un cadre académique relativement protégé, où les erreurs n'avaient pas de conséquences directes. Ici, nous avions un vrai client, de vrais utilisateurs, et de vraies contraintes de délai.

Ce qui a le plus changé, c'est ma façon de penser un problème. J'ai appris à ne pas foncer vers la solution technique avant d'avoir bien compris le problème. La visite chez InnoFaso a été révélatrice : ce que l'entreprise croyait vouloir (un simple outil de saisie) et ce dont elle avait réellement besoin (un système centralisé, traçable, accessible hors ligne) étaient deux choses différentes.

J'ai aussi développé une vraie discipline de travail en équipe : tenir mes engagements, communiquer quand je rencontre un blocage, et accepter que mon code sera lu et modifié par d'autres.`,
  },
  {
    icon: "💡",
    color: "primary",
    titre: "Ma plus grande fierté technique",
    texte: `Le moteur de formulaires dynamiques est la réalisation dont je suis la plus fière. L'idée de base était simple — plutôt que de coder chaque formulaire séparément, les générer depuis une description en base de données — mais l'implémentation a été complexe.

J'ai dû gérer neuf types de champs différents (texte, nombre, date, liste, signature numérique, photo, calcul automatique...), la logique d'affichage conditionnel, la validation en temps réel, et tout ça dans un composant React réutilisable. C'est le type de problème où j'ai vraiment senti que je progressais en tant que développeuse : pas juste coder une fonctionnalité, mais concevoir un système.

Ce moteur existe dans le code source du dépôt GitHub, et il fonctionne pour les 43 formulaires de la plateforme sans aucune modification.`,
  },
  {
    icon: "😤",
    color: "accent",
    titre: "Ce qui a été vraiment difficile",
    texte: `La gestion du temps a été mon plus grand défi personnel. Entre les cours, les autres projets académiques, et InnoFaso, j'ai dû apprendre à prioriser sans procrastiner. Il y a eu des semaines où j'ai sous-estimé la complexité d'une fonctionnalité, et où j'ai dû faire des choix sur ce qu'on pouvait vraiment livrer.

Techniquement, l'intégration du module IA a été le point le plus difficile. Connecter le microservice Flask à l'API Node.js, gérer les erreurs de réseau, formater les prédictions pour l'affichage — chaque étape semblait simple individuellement, mais l'ensemble nécessitait une coordination précise entre les parties du système.

Sur le plan humain, apprendre à dire "je ne peux pas livrer ça cette semaine" au client sans perdre sa confiance a été un exercice difficile mais précieux.`,
  },
  {
    icon: "🔄",
    color: "teal",
    titre: "Ce que je ferais différemment",
    texte: `Si je recommençais InnoFaso, je mettrais en place les conventions de code et les pratiques de revue de code dès le premier sprint. Nous avons perdu du temps à mi-projet à harmoniser des approches différentes entre les membres de l'équipe.

Je consacrerais aussi plus de temps aux tests. Nous avons testé manuellement la majorité des fonctionnalités, ce qui était suffisant pour la livraison, mais fragile pour la maintenance à long terme. Mettre en place quelques tests automatisés sur les fonctionnalités critiques (authentification, soumission de formulaires) aurait été un investissement rentable.

Enfin, j'aurais voulu organiser des sessions de test avec de vrais opérateurs terrain plus tôt dans le projet. Nos décisions d'interface ont été prises sans feedback direct des futurs utilisateurs finaux, et certains ajustements auraient pu être anticipés.`,
  },
  {
    icon: "🚀",
    color: "primary",
    titre: "Ce projet dans ma trajectoire",
    texte: `InnoFaso m'a confirmé que je veux travailler sur des projets à impact social concret. La combinaison data science + développement web dans un contexte africain — c'est exactement là où je veux être.

Ce projet m'a aussi donné confiance pour aborder des projets plus ambitieux. Je travaille déjà sur d'autres applications (une plateforme de gestion de tontines, une application d'apprentissage de langues locales) qui utilisent des stacks similaires et des défis comparables.

Pour la suite, je vise un Master en Data Engineering, où je pourrai approfondir les aspects infrastructure et pipeline de données qui sous-tendent les plateformes comme InnoFaso. Ce projet a clairement orienté mes ambitions académiques et professionnelles.`,
  },
];

const colorClasses: Record<string, { bg: string; border: string; icon: string; dot: string }> = {
  teal: { bg: "bg-teal-900/20", border: "border-teal-700/40", icon: "text-teal-400", dot: "bg-teal-500" },
  primary: { bg: "bg-primary-900/20", border: "border-primary-700/40", icon: "text-primary-400", dot: "bg-primary-500" },
  accent: { bg: "bg-accent-900/20", border: "border-accent-700/40", icon: "text-accent-400", dot: "bg-accent-500" },
};

export default function BilanPage() {
  const totalTraces = competences.reduce(
    (s, c) => s + c.apprentissages.reduce((ss, a) => ss + a.traces.length, 0), 0
  );
  const totalAppr = competences.reduce((s, c) => s + c.apprentissages.length, 0);
  const expertCount = competences.reduce(
    (s, c) => s + c.apprentissages.filter((a) => a.autoEval === "Expert").length, 0
  );

  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* Header */}
        <section className="relative overflow-hidden py-16 border-b border-white/10 bg-gradient-to-br from-slate-900 to-slate-950">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-40 bg-primary-600/10 rounded-full blur-3xl" />
          </div>
          <div className="relative section-padding max-w-7xl mx-auto text-center">
            <span className="text-4xl mb-4 block">🪞</span>
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Bilan réflexif global</h1>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Regard personnel sur mon développement de compétences tout au long du projet InnoFaso.
            </p>

            {/* Stats globales */}
            <div className="flex justify-center flex-wrap gap-6 mt-10">
              {[
                { val: competences.length, label: "Compétences" },
                { val: totalAppr, label: "Apprentissages" },
                { val: expertCount, label: "Niveau Expert" },
                { val: totalTraces, label: "Traces sélectionnées" },
              ].map((s) => (
                <div key={s.label} className="glass rounded-2xl px-6 py-4 text-center min-w-[100px]">
                  <div className="text-3xl font-extrabold gradient-text">{s.val}</div>
                  <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Sections réflexives */}
        <section className="section-padding max-w-4xl mx-auto space-y-8">
          {bilanSections.map((section) => {
            const col = colorClasses[section.color];
            return (
              <div key={section.titre} className={`rounded-2xl border p-8 ${col.bg} ${col.border}`}>
                <div className="flex items-center gap-3 mb-5">
                  <span className="text-3xl">{section.icon}</span>
                  <h2 className={`text-xl font-bold ${col.icon}`}>{section.titre}</h2>
                </div>
                <div className="space-y-4">
                  {section.texte.split("\n\n").map((para, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed text-sm">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        {/* Synthèse compétences */}
        <section className="section-padding max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Synthèse par compétence</h2>
          <div className="space-y-4">
            {competences.map((c) => {
              const expertN = c.apprentissages.filter((a) => a.autoEval === "Expert").length;
              const pct = Math.round((expertN / c.apprentissages.length) * 100);
              const col = c.id === 1 ? "bg-primary-500" : c.id === 2 ? "bg-teal-500" : "bg-accent-500";
              return (
                <Link key={c.id} href={`/competence/${c.id}`} className="card flex items-center gap-4 group">
                  <span className="text-2xl">{c.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm font-semibold text-white">{c.code} — {c.titre.slice(0, 45)}…</span>
                      <span className="text-xs text-slate-400 ml-2 flex-shrink-0">{expertN}/{c.apprentissages.length} Expert</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <div className={`h-full ${col} rounded-full transition-all duration-700`} style={{ width: `${pct}%` }} />
                    </div>
                  </div>
                  <svg className="w-4 h-4 text-slate-500 group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 py-10 text-center text-slate-500 text-sm">
          <p>Portfolio de {student.name} · {student.school} · {student.year}</p>
          <p className="mt-1 italic text-xs">"{student.quote}"</p>
        </footer>
      </main>
    </>
  );
}
