import Link from "next/link";
import { disciplines } from "@/data/disciplines";
import clsx from "clsx";

export const metadata = {
  title: "GTAS-BOK Deep Dives | GTAS Academy",
  description: "Deep-dive explorations of all 10 GTAS Body of Knowledge disciplines.",
};

export default function DisciplinesPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-violet-400 text-sm font-medium mb-2">GTAS Body of Knowledge</p>
        <h1 className="text-4xl font-bold text-white mb-4">Discipline Deep Dives</h1>
        <p className="text-gray-400 max-w-2xl leading-relaxed">
          Each of the ten GTAS-BOK disciplines explored through ten lenses: Context, Concepts,
          Ontology, Knowledge Graph, Relationships, Interdependencies, Research Papers, Best
          Practices, Checklist, and Books.
        </p>
      </div>

      {/* Grid */}
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {disciplines.map((discipline) => (
          <Link
            key={discipline.slug}
            href={`/disciplines/${discipline.slug}`}
            className="group border border-border rounded-2xl overflow-hidden bg-card hover:border-violet-600/60 transition-all hover:shadow-lg hover:shadow-violet-900/20"
          >
            <div className={clsx("h-2 bg-gradient-to-r", discipline.color)} />
            <div className="p-5">
              <div className="flex items-start gap-3 mb-3">
                <span className="text-3xl">{discipline.icon}</span>
                <div>
                  <p className="text-xs text-gray-500 mb-0.5">{discipline.gtasDomain}</p>
                  <h2 className="font-semibold text-white group-hover:text-violet-300 transition-colors">
                    {discipline.name}
                  </h2>
                </div>
              </div>
              <p className="text-gray-400 text-sm italic mb-3 leading-snug">
                "{discipline.tagline}"
              </p>
              <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">
                {discipline.coreQuestion}
              </p>
              <div className="mt-4 flex items-center gap-1.5 text-xs text-violet-400 group-hover:text-violet-300">
                <span>10 sections</span>
                <span>·</span>
                <span>{discipline.concepts.length} concepts</span>
                <span>·</span>
                <span>{discipline.books.length} books</span>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Footer note */}
      <div className="mt-12 border border-violet-800/30 rounded-xl p-6 bg-violet-950/20">
        <p className="text-sm text-gray-400 leading-relaxed">
          <span className="text-violet-300 font-medium">About GTAS-BOK: </span>
          The General Theory of Adaptive Systems Body of Knowledge draws from ten foundational
          scientific disciplines. Each discipline contributes unique insights to the Universal
          Adaptive Equation V(t) = f(I, L, E, R, G, T) and the Universal Adaptive Cycle (UAC).
          Together they form the interdisciplinary foundation for understanding how any adaptive
          system — from organisms to organizations to civilizations — survives and thrives.
        </p>
      </div>
    </div>
  );
}
