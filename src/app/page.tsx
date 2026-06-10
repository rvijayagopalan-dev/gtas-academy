import Link from "next/link";
import { modules } from "@/data/modules";
import { ArrowRight, BookOpen, Clock, Zap } from "lucide-react";

export default function HomePage() {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Hero */}
      <div className="mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-violet-600/15 border border-violet-600/25 rounded-full text-violet-300 text-xs font-medium mb-6">
          <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-pulse" />
          General Theory of Adaptive Systems
        </div>

        <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
          Welcome to{" "}
          <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
            GTAS Academy
          </span>
        </h1>

        <p className="text-lg text-gray-400 max-w-2xl leading-relaxed mb-6">
          A transdisciplinary meta-theory that explains how systems across all
          scales of reality perceive change, learn, evolve, and maintain
          viability. From physics to civilizations.
        </p>

        {/* Core equation */}
        <div className="bg-card border border-violet-600/20 rounded-2xl p-6 inline-block">
          <div className="text-xs text-gray-500 font-medium mb-2 uppercase tracking-widest">
            Universal Adaptive Equation
          </div>
          <div className="text-2xl font-mono font-bold text-violet-300 mb-2">
            V(t) = f(I, L, E, R, G, T)
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-gray-500">
            <span>
              <span className="text-violet-400 font-mono">I</span> Information
            </span>
            <span>
              <span className="text-violet-400 font-mono">L</span> Learning
            </span>
            <span>
              <span className="text-violet-400 font-mono">E</span> Energy
            </span>
            <span>
              <span className="text-violet-400 font-mono">R</span> Resilience
            </span>
            <span>
              <span className="text-violet-400 font-mono">G</span> Governance
            </span>
            <span>
              <span className="text-violet-400 font-mono">T</span> Time
            </span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
        {[
          { label: "Modules", value: "12", icon: BookOpen, color: "text-violet-400" },
          { label: "Universal Laws", value: "7", icon: Zap, color: "text-blue-400" },
          { label: "Maturity Levels", value: "11", icon: ArrowRight, color: "text-emerald-400" },
          { label: "Adaptive Capabilities", value: "10", icon: Clock, color: "text-amber-400" },
        ].map((stat) => (
          <div
            key={stat.label}
            className="bg-card border border-border rounded-xl p-4 text-center"
          >
            <div className={`text-3xl font-bold ${stat.color} mb-1`}>
              {stat.value}
            </div>
            <div className="text-xs text-gray-500">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Central Premise */}
      <div className="bg-gradient-to-r from-violet-600/10 to-indigo-600/10 border border-violet-600/20 rounded-2xl p-6 mb-12">
        <div className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-3">
          Central Premise
        </div>
        <blockquote className="text-xl font-medium text-gray-200 italic leading-relaxed">
          &ldquo;Adaptation is the fundamental mechanism by which complexity
          survives.&rdquo;
        </blockquote>
        <p className="text-sm text-gray-500 mt-3">
          GTAS attempts to do for adaptation what the Theory of Relativity did
          for space and time, and what Evolution by Natural Selection did for
          biology.
        </p>
      </div>

      {/* Modules grid */}
      <div>
        <h2 className="text-lg font-bold text-white mb-6">
          Course Modules
          <span className="ml-2 text-sm font-normal text-gray-500">
            {modules.length} modules · AI Tutor available
          </span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {modules.map((module) => (
            <Link
              key={module.slug}
              href={`/modules/${module.slug}`}
              className="group bg-card border border-border hover:border-violet-600/40 rounded-xl p-5 transition-all hover:shadow-lg hover:shadow-violet-900/10 hover:-translate-y-0.5"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${module.color} flex items-center justify-center text-xl flex-shrink-0`}
                >
                  {module.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-600 font-mono">
                      M{String(module.id).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-gray-200 group-hover:text-white transition-colors text-sm leading-tight">
                    {module.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">
                {module.description}
              </p>

              <div className="flex items-center justify-between text-xs text-gray-600">
                <span>⏱ {module.estimatedTime}</span>
                <div className="flex items-center gap-1 text-violet-400 group-hover:text-violet-300 transition-colors font-medium">
                  <span>Start</span>
                  <ArrowRight
                    size={12}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Grand Challenge */}
      <div className="mt-12 bg-card border border-border rounded-2xl p-8 text-center">
        <div className="text-xs text-gray-500 uppercase tracking-widest mb-3">
          The Grand Challenge
        </div>
        <p className="text-lg font-medium text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Design adaptive systems capable of sustaining humanity for{" "}
          <span className="text-violet-400 font-bold">1,000+ years</span> while
          continuously responding to technological, ecological, economic, and
          societal change.
        </p>
      </div>
    </div>
  );
}
