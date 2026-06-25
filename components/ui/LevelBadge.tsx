type Level = "Débutant" | "En développement" | "Compétent" | "Expert";

const styles: Record<Level, string> = {
  "Débutant": "bg-slate-700 text-slate-300 border-slate-600",
  "En développement": "bg-blue-900/40 text-blue-300 border-blue-700",
  "Compétent": "bg-teal-900/40 text-teal-300 border-teal-700",
  "Expert": "bg-primary-900/40 text-primary-300 border-primary-700",
};

const dots: Record<Level, number> = {
  "Débutant": 1, "En développement": 2, "Compétent": 3, "Expert": 4,
};

export default function LevelBadge({ level }: { level: Level }) {
  return (
    <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold border ${styles[level]}`}>
      <span className="flex gap-0.5">
        {[1, 2, 3, 4].map((i) => (
          <span
            key={i}
            className={`w-1.5 h-1.5 rounded-full ${
              i <= dots[level] ? "bg-current" : "bg-current opacity-20"
            }`}
          />
        ))}
      </span>
      {level}
    </span>
  );
}
