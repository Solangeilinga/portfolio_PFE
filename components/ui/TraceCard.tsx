import { TraceItem } from "@/lib/data";

const icons: Record<string, string> = {
  file: "📄", image: "🖼️", video: "🎬", link: "🔗", code: "💻", text: "✏️",
};
const colors: Record<string, string> = {
  file: "border-slate-600 bg-slate-800/50",
  image: "border-teal-700/50 bg-teal-900/20",
  video: "border-accent-700/50 bg-accent-900/20",
  link: "border-primary-700/50 bg-primary-900/20",
  code: "border-green-700/50 bg-green-900/20",
  text: "border-yellow-700/50 bg-yellow-900/20",
};

export default function TraceCard({ trace }: { trace: TraceItem }) {
  const content = (
    <div className={`rounded-xl border p-4 transition-all duration-200 hover:scale-[1.02] ${colors[trace.type]}`}>
      <div className="flex items-start gap-3">
        <span className="text-xl">{icons[trace.type]}</span>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-slate-200 leading-tight">{trace.label}</p>
          {trace.description && (
            <p className="text-xs text-slate-400 mt-1 leading-relaxed">{trace.description}</p>
          )}
          <span className={`mt-2 inline-block text-xs px-2 py-0.5 rounded-full font-medium
            ${trace.type === "image" ? "text-teal-400 bg-teal-900/40" :
              trace.type === "video" ? "text-accent-400 bg-accent-900/40" :
              trace.type === "link" ? "text-primary-400 bg-primary-900/40" :
              "text-slate-400 bg-slate-700/50"}`}>
            {trace.type === "file" ? "Document" :
             trace.type === "image" ? "Image / Capture" :
             trace.type === "video" ? "Vidéo" :
             trace.type === "link" ? "Lien GitHub" :
             trace.type === "code" ? "Code" : "Texte"}
          </span>
        </div>
        {trace.url && (
          <svg className="w-4 h-4 text-slate-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </div>
    </div>
  );

  if (trace.url) {
    return <a href={trace.url} target="_blank" rel="noopener noreferrer">{content}</a>;
  }
  return content;
}
