"use client";
import { useState } from "react";
import { Apprentissage } from "@/lib/data";
import LevelBadge from "./LevelBadge";
import TraceCard from "./TraceCard";

export default function ApprentissageCard({
  apprentissage, index,
}: { apprentissage: Apprentissage; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full text-left px-6 py-5 flex items-start gap-4 hover:bg-white/5 transition-colors"
      >
        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700 text-slate-300 text-sm font-bold flex items-center justify-center mt-0.5">
          {index + 1}
        </span>
        <div className="flex-1 min-w-0">
          <h3 className="text-base font-semibold text-slate-100 leading-snug">{apprentissage.titre}</h3>
          <div className="mt-2">
            <LevelBadge level={apprentissage.autoEval} />
          </div>
        </div>
        <svg
          className={`w-5 h-5 text-slate-400 flex-shrink-0 mt-1 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
          fill="none" stroke="currentColor" viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {/* Body */}
      {open && (
        <div className="px-6 pb-6 border-t border-white/10 pt-5 space-y-6">

          {/* Réflexion */}
          <div>
            <h4 className="text-xs font-semibold text-teal-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>💬</span> Ma réflexion
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-teal-900/10 border border-teal-800/30 rounded-xl p-4">
              {apprentissage.reflexion}
            </p>
          </div>

          {/* Défi */}
          <div>
            <h4 className="text-xs font-semibold text-accent-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>⚡</span> Le défi rencontré
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-accent-900/10 border border-accent-800/30 rounded-xl p-4">
              {apprentissage.defi}
            </p>
          </div>

          {/* Acquis */}
          <div>
            <h4 className="text-xs font-semibold text-primary-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <span>✅</span> Ce que j'ai acquis
            </h4>
            <p className="text-sm text-slate-300 leading-relaxed bg-primary-900/10 border border-primary-800/30 rounded-xl p-4">
              {apprentissage.acquis}
            </p>
          </div>

          {/* Traces */}
          <div>
            <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <span>📎</span> Preuves sélectionnées ({apprentissage.traces.length})
            </h4>
            <div className="grid sm:grid-cols-2 gap-3">
              {apprentissage.traces.map((t, i) => (
                <TraceCard key={i} trace={t} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
