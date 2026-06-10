"use client";

import { useState } from "react";
import type { Discipline } from "@/data/disciplines";
import clsx from "clsx";

const TABS = [
  { id: "context", label: "Context" },
  { id: "concepts", label: "Concepts" },
  { id: "ontology", label: "Ontology" },
  { id: "knowledge-graph", label: "Knowledge Graph" },
  { id: "relationships", label: "Relationships" },
  { id: "interdependencies", label: "Interdependencies" },
  { id: "papers", label: "Research Papers" },
  { id: "practices", label: "Best Practices" },
  { id: "checklist", label: "Checklist" },
  { id: "books", label: "Books" },
] as const;

type TabId = (typeof TABS)[number]["id"];

interface Props {
  discipline: Discipline;
}

export default function DeepDiveContent({ discipline }: Props) {
  const [activeTab, setActiveTab] = useState<TabId>("context");
  const [expandedConcept, setExpandedConcept] = useState<number | null>(null);
  const [expandedPractice, setExpandedPractice] = useState<number | null>(null);
  const [expandedChecklist, setExpandedChecklist] = useState<number | null>(0);

  return (
    <div className="space-y-6">
      {/* Hero */}
      <div className={clsx("rounded-2xl bg-gradient-to-br p-8 text-white", discipline.color)}>
        <div className="flex items-start gap-4">
          <span className="text-5xl">{discipline.icon}</span>
          <div>
            <p className="text-sm font-medium opacity-80 mb-1">{discipline.gtasDomain}</p>
            <h1 className="text-3xl font-bold mb-2">{discipline.name}</h1>
            <p className="text-lg opacity-90 italic mb-3">{discipline.tagline}</p>
            <p className="text-sm opacity-80 leading-relaxed max-w-2xl">
              <span className="font-semibold">Core Question: </span>{discipline.coreQuestion}
            </p>
          </div>
        </div>
      </div>

      {/* Tab Bar */}
      <div className="overflow-x-auto">
        <div className="flex gap-1 bg-card rounded-xl p-1 border border-border w-max min-w-full">
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={clsx(
                "px-3 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all",
                activeTab === tab.id
                  ? "bg-violet-600 text-white shadow"
                  : "text-gray-400 hover:text-white hover:bg-white/5"
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {activeTab === "context" && <ContextTab discipline={discipline} />}
        {activeTab === "concepts" && (
          <ConceptsTab
            discipline={discipline}
            expanded={expandedConcept}
            setExpanded={setExpandedConcept}
          />
        )}
        {activeTab === "ontology" && <OntologyTab discipline={discipline} />}
        {activeTab === "knowledge-graph" && <KnowledgeGraphTab discipline={discipline} />}
        {activeTab === "relationships" && <RelationshipsTab discipline={discipline} />}
        {activeTab === "interdependencies" && <InterdependenciesTab discipline={discipline} />}
        {activeTab === "papers" && <PapersTab discipline={discipline} />}
        {activeTab === "practices" && (
          <PracticesTab
            discipline={discipline}
            expanded={expandedPractice}
            setExpanded={setExpandedPractice}
          />
        )}
        {activeTab === "checklist" && (
          <ChecklistTab
            discipline={discipline}
            expanded={expandedChecklist}
            setExpanded={setExpandedChecklist}
          />
        )}
        {activeTab === "books" && <BooksTab discipline={discipline} />}
      </div>
    </div>
  );
}

// ── Context ──────────────────────────────────────────────────────────────────

function ContextTab({ discipline }: { discipline: Discipline }) {
  const { context } = discipline;
  return (
    <div className="grid gap-6">
      <Card title="Overview">
        <p className="text-gray-300 leading-relaxed">{context.overview}</p>
      </Card>
      <Card title="Historical Development">
        <p className="text-gray-300 leading-relaxed">{context.history}</p>
      </Card>
      <Card title="Relevance to GTAS">
        <p className="text-gray-300 leading-relaxed">{context.relevanceToGTAS}</p>
      </Card>
      <Card title="Key Contributors">
        <ul className="space-y-2">
          {context.keyContributors.map((c, i) => (
            <li key={i} className="flex items-start gap-3 text-gray-300 text-sm">
              <span className="text-violet-400 mt-0.5 shrink-0">▸</span>
              <span>{c}</span>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}

// ── Concepts ─────────────────────────────────────────────────────────────────

function ConceptsTab({
  discipline,
  expanded,
  setExpanded,
}: {
  discipline: Discipline;
  expanded: number | null;
  setExpanded: (n: number | null) => void;
}) {
  return (
    <div className="space-y-3">
      {discipline.concepts.map((concept, i) => (
        <div
          key={i}
          className="border border-border rounded-xl overflow-hidden bg-card"
        >
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-semibold text-white">{concept.name}</span>
            <span className="text-gray-500 text-lg">{expanded === i ? "−" : "+"}</span>
          </button>
          {expanded === i && (
            <div className="px-5 pb-5 space-y-4 border-t border-border">
              <div className="pt-4">
                <p className="text-sm font-medium text-violet-400 mb-1">Definition</p>
                <p className="text-gray-300 text-sm leading-relaxed">{concept.definition}</p>
              </div>
              <div>
                <p className="text-sm font-medium text-emerald-400 mb-1">Example</p>
                <p className="text-gray-300 text-sm leading-relaxed">{concept.example}</p>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Ontology ─────────────────────────────────────────────────────────────────

function OntologyTab({ discipline }: { discipline: Discipline }) {
  const { ontology } = discipline;
  return (
    <div className="space-y-6">
      <Card title="Ontology Overview">
        <p className="text-gray-300 leading-relaxed">{ontology.overview}</p>
      </Card>
      <Card title="Core Entities">
        <div className="space-y-4">
          {ontology.entities.map((entity, i) => (
            <div key={i} className="border border-border/60 rounded-lg p-4 bg-surface/50">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white mb-1">{entity.name}</p>
                  <p className="text-gray-400 text-sm">{entity.description}</p>
                </div>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {entity.properties.map((prop, j) => (
                  <span
                    key={j}
                    className="text-xs px-2 py-0.5 rounded-full bg-violet-950 text-violet-300 border border-violet-800"
                  >
                    {prop}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Card>
      <Card title="Relationships">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-gray-400">
                <th className="text-left py-2 pr-4">From</th>
                <th className="text-left py-2 pr-4">Type</th>
                <th className="text-left py-2 pr-4">To</th>
                <th className="text-left py-2">Description</th>
              </tr>
            </thead>
            <tbody>
              {ontology.relationships.map((rel, i) => (
                <tr key={i} className="border-b border-border/40 hover:bg-white/3">
                  <td className="py-2.5 pr-4 text-violet-300 font-mono text-xs">{rel.from}</td>
                  <td className="py-2.5 pr-4 text-amber-400 text-xs italic">{rel.type}</td>
                  <td className="py-2.5 pr-4 text-violet-300 font-mono text-xs">{rel.to}</td>
                  <td className="py-2.5 text-gray-400">{rel.description}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
}

// ── Knowledge Graph ───────────────────────────────────────────────────────────

const NODE_TYPE_COLORS: Record<string, string> = {
  core: "#7c3aed",
  concept: "#0891b2",
  application: "#059669",
  theory: "#d97706",
  tool: "#db2777",
};

function KnowledgeGraphTab({ discipline }: { discipline: Discipline }) {
  const { knowledgeGraph } = discipline;
  const nodes = knowledgeGraph.nodes;
  const edges = knowledgeGraph.edges;

  const N = nodes.length;
  const cx = 260;
  const cy = 240;
  const rx = 200;
  const ry = 180;

  const positions: Record<string, { x: number; y: number }> = {};
  nodes.forEach((node, i) => {
    const angle = (2 * Math.PI * i) / N - Math.PI / 2;
    positions[node.id] = {
      x: cx + rx * Math.cos(angle),
      y: cy + ry * Math.sin(angle),
    };
  });

  return (
    <div className="space-y-6">
      <Card title="Knowledge Graph">
        <p className="text-gray-400 text-sm mb-6">{knowledgeGraph.description}</p>
        <div className="overflow-x-auto">
          <svg viewBox="0 0 520 480" className="w-full max-w-2xl mx-auto" style={{ minWidth: 320 }}>
            {/* Edges */}
            {edges.map((edge, i) => {
              const from = positions[edge.from];
              const to = positions[edge.to];
              if (!from || !to) return null;
              const mx = (from.x + to.x) / 2;
              const my = (from.y + to.y) / 2;
              return (
                <g key={i}>
                  <line
                    x1={from.x}
                    y1={from.y}
                    x2={to.x}
                    y2={to.y}
                    stroke="#4c1d95"
                    strokeWidth={1.5}
                    strokeOpacity={0.6}
                  />
                  <text
                    x={mx}
                    y={my}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="#9ca3af"
                    fontSize={8}
                    className="select-none"
                  >
                    {edge.label}
                  </text>
                </g>
              );
            })}
            {/* Nodes */}
            {nodes.map((node) => {
              const pos = positions[node.id];
              if (!pos) return null;
              const color = NODE_TYPE_COLORS[node.type] ?? "#6b7280";
              const lines = node.label.split(" ");
              return (
                <g key={node.id}>
                  <circle cx={pos.x} cy={pos.y} r={28} fill={color} fillOpacity={0.2} stroke={color} strokeWidth={1.5} />
                  {lines.map((line, li) => (
                    <text
                      key={li}
                      x={pos.x}
                      y={pos.y + (li - (lines.length - 1) / 2) * 11}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      fill="white"
                      fontSize={9}
                      fontWeight={500}
                      className="select-none"
                    >
                      {line}
                    </text>
                  ))}
                </g>
              );
            })}
          </svg>
        </div>
        {/* Legend */}
        <div className="flex flex-wrap gap-3 mt-4 justify-center">
          {Object.entries(NODE_TYPE_COLORS).map(([type, color]) => (
            <div key={type} className="flex items-center gap-1.5 text-xs text-gray-400">
              <span className="w-3 h-3 rounded-full inline-block" style={{ backgroundColor: color }} />
              {type}
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}

// ── Relationships ─────────────────────────────────────────────────────────────

const REL_TYPE_COLORS: Record<string, string> = {
  "Builds on": "text-blue-400",
  "Complements": "text-emerald-400",
  "Informs": "text-amber-400",
  "Contributes to": "text-violet-400",
  "Is synthesized by": "text-rose-400",
};

function RelationshipsTab({ discipline }: { discipline: Discipline }) {
  return (
    <div className="space-y-4">
      <p className="text-gray-400 text-sm">
        How <span className="text-white font-medium">{discipline.name}</span> relates to the other
        nine GTAS-BOK disciplines.
      </p>
      {discipline.relationships.map((rel, i) => (
        <div key={i} className="border border-border rounded-xl p-5 bg-card">
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="font-semibold text-white">{rel.discipline}</h3>
            <span
              className={clsx(
                "text-xs font-medium px-2.5 py-1 rounded-full border shrink-0",
                REL_TYPE_COLORS[rel.type] ?? "text-gray-400",
                "border-current bg-current/10"
              )}
            >
              {rel.type}
            </span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed">{rel.description}</p>
        </div>
      ))}
    </div>
  );
}

// ── Interdependencies ─────────────────────────────────────────────────────────

function InterdependenciesTab({ discipline }: { discipline: Discipline }) {
  return (
    <div className="space-y-5">
      <p className="text-gray-400 text-sm">
        Deep coupled dependencies between {discipline.name} and other GTAS-BOK disciplines — where
        insights from one domain are structurally required by another.
      </p>
      {discipline.interdependencies.map((dep, i) => (
        <div key={i} className="border border-violet-800/40 rounded-xl p-5 bg-violet-950/20">
          <div className="flex items-center gap-2 mb-3">
            <span className="font-semibold text-violet-300">{dep.pair[0]}</span>
            <span className="text-gray-500">⟺</span>
            <span className="font-semibold text-violet-300">{dep.pair[1]}</span>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed mb-3">{dep.description}</p>
          <div className="bg-violet-900/20 border border-violet-800/30 rounded-lg p-3">
            <p className="text-xs font-medium text-violet-400 mb-1">GTAS Implication</p>
            <p className="text-gray-400 text-sm leading-relaxed">{dep.gtasImplication}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// ── Research Papers ───────────────────────────────────────────────────────────

function PapersTab({ discipline }: { discipline: Discipline }) {
  return (
    <div className="space-y-4">
      {discipline.researchPapers.map((paper, i) => (
        <div key={i} className="border border-border rounded-xl p-5 bg-card">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="font-semibold text-white leading-snug">{paper.title}</h3>
            <span className="text-amber-400 font-bold text-sm shrink-0">{paper.year}</span>
          </div>
          <p className="text-violet-400 text-sm mb-1">{paper.authors}</p>
          <p className="text-gray-500 text-xs mb-3 italic">{paper.journal}</p>
          <p className="text-gray-300 text-sm leading-relaxed">{paper.significance}</p>
        </div>
      ))}
    </div>
  );
}

// ── Best Practices ────────────────────────────────────────────────────────────

function PracticesTab({
  discipline,
  expanded,
  setExpanded,
}: {
  discipline: Discipline;
  expanded: number | null;
  setExpanded: (n: number | null) => void;
}) {
  return (
    <div className="space-y-4">
      {discipline.bestPractices.map((practice, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-start justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <div>
              <p className="font-semibold text-white mb-1">{practice.title}</p>
              <p className="text-gray-400 text-sm">{practice.description}</p>
            </div>
            <span className="text-gray-500 text-lg ml-4 shrink-0">{expanded === i ? "−" : "+"}</span>
          </button>
          {expanded === i && (
            <div className="px-5 pb-5 border-t border-border">
              <ol className="space-y-2 mt-4">
                {practice.steps.map((step, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-6 h-6 rounded-full bg-violet-600 text-white text-xs flex items-center justify-center shrink-0 font-bold mt-0.5">
                      {j + 1}
                    </span>
                    <span className="leading-relaxed">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Checklist ─────────────────────────────────────────────────────────────────

function ChecklistTab({
  discipline,
  expanded,
  setExpanded,
}: {
  discipline: Discipline;
  expanded: number | null;
  setExpanded: (n: number | null) => void;
}) {
  return (
    <div className="space-y-4">
      {discipline.checklist.map((cat, i) => (
        <div key={i} className="border border-border rounded-xl overflow-hidden bg-card">
          <button
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full flex items-center justify-between px-5 py-4 text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-semibold text-white">{cat.category}</span>
            <div className="flex items-center gap-3">
              <span className="text-xs text-gray-500">{cat.items.length} items</span>
              <span className="text-gray-500 text-lg">{expanded === i ? "−" : "+"}</span>
            </div>
          </button>
          {expanded === i && (
            <div className="px-5 pb-5 border-t border-border">
              <ul className="space-y-2 mt-4">
                {cat.items.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 rounded border border-violet-600 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ── Books ─────────────────────────────────────────────────────────────────────

const DIFFICULTY_COLORS = {
  Introductory: "text-emerald-400 bg-emerald-950 border-emerald-800",
  Intermediate: "text-amber-400 bg-amber-950 border-amber-800",
  Advanced: "text-rose-400 bg-rose-950 border-rose-800",
};

function BooksTab({ discipline }: { discipline: Discipline }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {discipline.books.map((book, i) => (
        <div key={i} className="border border-border rounded-xl p-5 bg-card flex flex-col">
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-semibold text-white leading-snug">{book.title}</h3>
            <span
              className={clsx(
                "text-xs font-medium px-2 py-0.5 rounded border shrink-0",
                DIFFICULTY_COLORS[book.difficulty]
              )}
            >
              {book.difficulty}
            </span>
          </div>
          <p className="text-violet-400 text-sm mb-0.5">{book.author}</p>
          <p className="text-gray-500 text-xs mb-3">{book.year}</p>
          <p className="text-gray-400 text-sm leading-relaxed flex-1">{book.description}</p>
        </div>
      ))}
    </div>
  );
}

// ── Shared ────────────────────────────────────────────────────────────────────

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border border-border rounded-xl p-5 bg-card">
      <h2 className="text-lg font-semibold text-white mb-4">{title}</h2>
      {children}
    </div>
  );
}
