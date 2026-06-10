import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GTAS Manifesto | GTAS Academy",
  description:
    "Toward a Science of Adaptation and a Civilization Capable of Enduring — the foundational declaration of the General Theory of Adaptive Systems.",
};

const PRINCIPLES = [
  {
    number: 1,
    title: "Everything Exists Within Systems",
    body: "No entity exists in isolation. Every organism, organization, technology, institution, and civilization exists within larger interconnected systems. Understanding requires context.",
  },
  {
    number: 2,
    title: "Adaptation Is Fundamental",
    body: "Change is inevitable. Adaptation is optional. Systems that fail to adapt eventually disappear.",
  },
  {
    number: 3,
    title: "Information Precedes Intelligence",
    body: "No system can respond to what it cannot perceive. Information is the foundation of learning. Learning is the foundation of intelligence. Intelligence is the foundation of adaptation.",
  },
  {
    number: 4,
    title: "Feedback Drives Evolution",
    body: "Every adaptive system learns through feedback. Feedback transforms experience into knowledge. Knowledge transforms action. Action transforms the future.",
  },
  {
    number: 5,
    title: "Memory Preserves Adaptation",
    body: "Without memory there can be no learning. Without learning there can be no improvement. Without improvement there can be no long-term survival.",
  },
  {
    number: 6,
    title: "Diversity Creates Resilience",
    body: "Monocultures fail. Resilient systems maintain multiple pathways, perspectives, capabilities, and strategies. Diversity is not inefficiency. Diversity is adaptive capacity.",
  },
  {
    number: 7,
    title: "Coordination Creates Scale",
    body: "Intelligence alone does not build civilizations. Coordination does. The greatest adaptive achievements emerge from collective action.",
  },
  {
    number: 8,
    title: "Governance Sustains Complexity",
    body: "As systems grow, governance becomes essential. Governance aligns incentives, manages resources, resolves conflicts, and protects long-term viability.",
  },
  {
    number: 9,
    title: "Evolution Never Ends",
    body: "There is no final state. No perfect architecture. No permanent solution. Adaptation is continuous. Evolution is perpetual.",
  },
  {
    number: 10,
    title: "Purpose Guides Adaptation",
    body: "Adaptive capacity without direction creates instability. Purpose provides orientation. The highest adaptive systems align actions with long-term objectives.",
  },
];

const UAC_STEPS = ["Observe", "Understand", "Decide", "Act", "Learn", "Adapt", "Evolve"];

const UNIFICATION_TABLE = [
  { domain: "Systems Theory", contribution: "Structure" },
  { domain: "Cybernetics", contribution: "Feedback" },
  { domain: "Complexity Science", contribution: "Emergence" },
  { domain: "Information Theory", contribution: "Information" },
  { domain: "Evolutionary Theory", contribution: "Adaptation" },
  { domain: "Economics", contribution: "Resource Allocation" },
  { domain: "Governance", contribution: "Coordination" },
  { domain: "Artificial Intelligence", contribution: "Intelligence" },
  { domain: "Civilization Studies", contribution: "Long-Term Survival" },
];

const HIERARCHY = [
  "Matter", "Chemistry", "Life", "Cognition",
  "Organizations", "Economies", "Nations", "Civilizations", "Planetary Systems",
];

export default function ManifestoPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12 space-y-20">

      {/* Hero */}
      <section className="text-center space-y-5">
        <p className="text-violet-400 text-sm font-semibold tracking-widest uppercase">
          General Theory of Adaptive Systems
        </p>
        <h1 className="text-5xl sm:text-6xl font-bold text-white leading-tight tracking-tight">
          Manifesto
          <span className="text-violet-400"> v1.0</span>
        </h1>
        <p className="text-xl text-gray-400 italic max-w-xl mx-auto leading-relaxed">
          Toward a Science of Adaptation and a Civilization Capable of Enduring
        </p>
        <div className="w-16 h-px bg-violet-600 mx-auto" />
      </section>

      {/* Preamble */}
      <section className="space-y-6">
        <SectionLabel>Preamble</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          Humanity has mastered many sciences. We have developed theories of matter, energy, motion,
          computation, information, evolution, and intelligence.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          Yet we lack a unified science explaining how systems survive, adapt, learn, evolve, and
          sustain themselves across time.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          We can build machines that learn. We can model economies. We can map genomes. We can
          design enterprises. We can connect billions of people through global networks.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          But we still struggle to answer a fundamental question:
        </p>
        <blockquote className="border-l-4 border-violet-500 pl-6 my-6">
          <p className="text-violet-200 text-xl italic font-medium leading-relaxed">
            What universal principles enable systems to remain viable in an ever-changing world?
          </p>
        </blockquote>
        <p className="text-gray-300 text-lg leading-relaxed">
          The General Theory of Adaptive Systems (GTAS) is an effort to answer that question. It is
          not intended to replace existing disciplines. It seeks to unify them.
        </p>
      </section>

      <Divider />

      {/* Central Thesis */}
      <section className="space-y-6">
        <SectionLabel>The Central Thesis</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          Reality is not fundamentally static. Reality is adaptive.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          From cells to ecosystems, from enterprises to economies, from nations to civilizations —
          all enduring systems exist because they continuously adapt to changing environments.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          The ultimate measure of a system is not its size, power, efficiency, or intelligence.
        </p>
        <blockquote className="border-l-4 border-violet-500 pl-6 my-6">
          <p className="text-violet-200 text-xl italic font-medium leading-relaxed">
            Adaptation is the universal mechanism of persistence.
          </p>
        </blockquote>
      </section>

      <Divider />

      {/* First Principles */}
      <section className="space-y-8">
        <SectionLabel>First Principles</SectionLabel>
        <p className="text-gray-400 leading-relaxed">
          We hold the following ten principles to be foundational.
        </p>
        <div className="space-y-5">
          {PRINCIPLES.map((p) => (
            <div
              key={p.number}
              className="flex gap-5 p-5 rounded-xl border border-border bg-card hover:border-violet-700/50 transition-colors"
            >
              <div className="shrink-0 w-10 h-10 rounded-full bg-violet-600/20 border border-violet-600/40 flex items-center justify-center text-violet-300 font-bold text-sm">
                {p.number}
              </div>
              <div>
                <p className="font-semibold text-white mb-1">{p.title}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* UAC */}
      <section className="space-y-6">
        <SectionLabel>The Universal Adaptive Cycle</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          All adaptive systems participate in a common cycle. The forms differ. The pattern remains.
        </p>
        <div className="flex flex-col items-center gap-0 my-6">
          {UAC_STEPS.map((step, i) => (
            <div key={step} className="flex flex-col items-center">
              <div className="px-8 py-3 rounded-xl bg-violet-600/15 border border-violet-600/30 text-violet-200 font-semibold text-sm w-44 text-center">
                {step}
              </div>
              {i < UAC_STEPS.length - 1 && (
                <div className="text-violet-700 text-lg leading-none py-1">↓</div>
              )}
            </div>
          ))}
        </div>
        <p className="text-gray-400 text-sm text-center">
          Biological evolution · Human cognition · Organizations · Markets · Scientific discovery ·
          Artificial intelligence · Civilizations
        </p>
      </section>

      <Divider />

      {/* Grand Unification */}
      <section className="space-y-6">
        <SectionLabel>The Grand Unification</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          GTAS seeks to unify insights from multiple domains into a coherent science. Together they
          form a unified framework for understanding adaptive systems.
        </p>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-card">
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Domain</th>
                <th className="text-left px-5 py-3 text-gray-400 font-medium">Contribution</th>
              </tr>
            </thead>
            <tbody>
              {UNIFICATION_TABLE.map((row, i) => (
                <tr
                  key={row.domain}
                  className={i % 2 === 0 ? "bg-surface/40" : "bg-transparent"}
                >
                  <td className="px-5 py-3 text-white font-medium">{row.domain}</td>
                  <td className="px-5 py-3 text-violet-300">{row.contribution}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <Divider />

      {/* Adaptive Hierarchy */}
      <section className="space-y-6">
        <SectionLabel>The Adaptive Hierarchy</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          Adaptive systems exist across nested scales. Each level introduces new forms of adaptation
          while remaining dependent on lower levels. GTAS studies the principles common to all levels.
        </p>
        <div className="flex flex-wrap gap-2 items-center justify-center py-4">
          {HIERARCHY.map((level, i) => (
            <div key={level} className="flex items-center gap-2">
              <span className="px-4 py-2 rounded-lg bg-card border border-border text-gray-300 text-sm font-medium">
                {level}
              </span>
              {i < HIERARCHY.length - 1 && (
                <span className="text-violet-700 font-bold">→</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <Divider />

      {/* Missions */}
      <section className="space-y-8">
        <SectionLabel>The Missions</SectionLabel>
        <div className="grid sm:grid-cols-3 gap-5">
          <MissionCard
            icon="🔬"
            title="Scientific Mission"
            items={[
              "Universal laws of adaptation",
              "Mathematical models of viability",
              "Metrics of resilience and intelligence",
              "Principles of emergence",
              "Dynamics of evolution",
              "Mechanisms of collective intelligence",
              "Conditions for long-term sustainability",
            ]}
          />
          <MissionCard
            icon="⚙️"
            title="Engineering Mission"
            items={[
              "Learn continuously",
              "Adapt safely",
              "Coordinate effectively",
              "Recover from disruption",
              "Evolve capabilities",
              "Sustain long-term purpose",
            ]}
          />
          <MissionCard
            icon="🏛️"
            title="Civilization Mission"
            items={[
              "Planetary systems interconnected",
              "AI augments collective reasoning",
              "Scientific knowledge globally accessible",
              "Civilization-scale coordination",
              "Adaptive institutions across generations",
            ]}
          />
        </div>
      </section>

      <Divider />

      {/* UEEOS Vision */}
      <section className="space-y-6">
        <SectionLabel>The UEEOS Vision</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          The Universal Evolution Engine Operating System (UEEOS) is the practical realization of
          GTAS.
        </p>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-5 rounded-xl border border-violet-700/40 bg-violet-950/20 text-center">
            <p className="text-violet-400 text-xs font-semibold uppercase tracking-widest mb-2">GTAS</p>
            <p className="text-2xl font-bold text-white">Why</p>
            <p className="text-gray-500 text-sm mt-1">The Science</p>
          </div>
          <div className="p-5 rounded-xl border border-indigo-700/40 bg-indigo-950/20 text-center">
            <p className="text-indigo-400 text-xs font-semibold uppercase tracking-widest mb-2">UEEOS</p>
            <p className="text-2xl font-bold text-white">How</p>
            <p className="text-gray-500 text-sm mt-1">The Engineering</p>
          </div>
        </div>
        <p className="text-gray-400 leading-relaxed">
          Together they form a framework for building adaptive enterprises, adaptive nations,
          adaptive research ecosystems, and ultimately adaptive civilizations.
        </p>
      </section>

      <Divider />

      {/* Call to Action */}
      <section className="space-y-5">
        <SectionLabel>Call to Action</SectionLabel>
        <p className="text-gray-300 text-lg leading-relaxed">
          We invite researchers, engineers, architects, economists, policymakers, scientists,
          educators, and innovators to participate in the creation of a new discipline.
        </p>
        <p className="text-gray-300 text-lg leading-relaxed">
          A discipline that studies not merely intelligence, but adaptation. Not merely
          optimization, but resilience. Not merely growth, but sustainability. Not merely systems,
          but living systems capable of learning and evolving.
        </p>
        <div className="grid sm:grid-cols-3 gap-4 py-2">
          {["The challenge is ambitious.", "The need is urgent.", "The opportunity is unprecedented."].map(
            (s) => (
              <div
                key={s}
                className="p-4 rounded-xl border border-border bg-card text-center text-gray-300 font-medium text-sm"
              >
                {s}
              </div>
            )
          )}
        </div>
      </section>

      <Divider />

      {/* Foundational Declaration */}
      <section className="space-y-6">
        <SectionLabel>The Foundational Declaration</SectionLabel>
        <div className="border border-violet-600/40 bg-violet-950/20 rounded-2xl p-8 space-y-4">
          <p className="text-gray-200 text-base leading-relaxed">
            We affirm that adaptation is the fundamental mechanism through which systems persist,
            intelligence emerges, civilizations endure, and futures are created.
          </p>
          <p className="text-gray-200 text-base leading-relaxed">
            We commit to advancing a universal science of adaptive systems, developing the
            knowledge, methods, technologies, and institutions required to enable humanity to thrive
            across centuries of change.
          </p>
          <p className="text-gray-200 text-base leading-relaxed">
            We recognize that the future belongs not to the strongest, the largest, or even the most
            intelligent systems, but to those most capable of learning, adapting, coordinating, and
            evolving in harmony with reality.
          </p>
        </div>
        <div className="text-center pt-4 space-y-2">
          <p className="text-white font-bold text-lg">
            General Theory of Adaptive Systems (GTAS)
          </p>
          <p className="text-violet-400 italic text-sm">
            A Science of Adaptation. An Engineering of Evolution. A Foundation for Enduring
            Civilization.
          </p>
        </div>
      </section>

    </div>
  );
}

// ── Sub-components ────────────────────────────────────────────────────────────

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-1 h-6 rounded-full bg-violet-500" />
      <h2 className="text-2xl font-bold text-white">{children}</h2>
    </div>
  );
}

function Divider() {
  return <div className="border-t border-border" />;
}

function MissionCard({ icon, title, items }: { icon: string; title: string; items: string[] }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-card space-y-3">
      <div className="flex items-center gap-2">
        <span className="text-xl">{icon}</span>
        <h3 className="font-semibold text-white text-sm">{title}</h3>
      </div>
      <ul className="space-y-1.5">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2 text-xs text-gray-400 leading-relaxed">
            <span className="text-violet-500 mt-0.5 shrink-0">▸</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
