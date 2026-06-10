export interface ModuleSection {
  title: string;
  content: string;
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface Module {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  color: string;
  gradientFrom: string;
  gradientTo: string;
  estimatedTime: string;
  keyTakeaways: string[];
  sections: ModuleSection[];
  quiz: QuizQuestion[];
}

export const modules: Module[] = [
  {
    id: 1,
    slug: "welcome",
    title: "Welcome to GTAS",
    subtitle: "The Science of Adaptation",
    description:
      "Discover the General Theory of Adaptive Systems — a transdisciplinary meta-theory that explains how all systems survive, learn, and evolve across every scale of reality.",
    icon: "🌌",
    color: "from-violet-600 to-purple-700",
    gradientFrom: "#7c3aed",
    gradientTo: "#6d28d9",
    estimatedTime: "15 min",
    keyTakeaways: [
      "GTAS is a universal framework for understanding adaptation across all systems",
      "The central premise: Adaptation is the fundamental mechanism by which complexity survives",
      "GTAS spans physics, biology, economics, AI, and civilizations",
      "10 Core Principles provide the foundational axioms of the theory",
    ],
    sections: [
      {
        title: "What is GTAS?",
        content: `**General Theory of Adaptive Systems (GTAS)** is a transdisciplinary meta-theory that seeks to explain:

> How systems across all scales of reality perceive change, process information, make decisions, learn from experience, evolve over time, and maintain viability within dynamic environments.

GTAS attempts to do for **adaptation** what the Theory of Relativity did for space and time, and what Evolution by Natural Selection did for biology: provide a **universal explanatory framework**.

It spans:
- Physics, Chemistry, Biology
- Neuroscience, Economics, Organizations
- Artificial Intelligence, Civilizations, Planetary Systems

The central premise is:

> **Adaptation is the fundamental mechanism by which complexity survives.**`,
      },
      {
        title: "The Grand Problem GTAS Solves",
        content: `Traditional sciences study specific domains in isolation:

| Discipline | Studies |
|---|---|
| Physics | Matter and Energy |
| Biology | Life |
| Economics | Markets |
| AI | Intelligence |
| Sociology | Societies |
| Political Science | Governance |

GTAS asks: **What principles are common across ALL adaptive systems?**

Consider these examples:
- A **cell** adapting to toxins
- An **animal** adapting to predators
- A **company** adapting to disruption
- A **nation** adapting to geopolitical shifts
- An **AI** adapting to new data
- A **civilization** adapting to climate change

All exhibit identical underlying patterns of adaptation. GTAS finds and formalizes those patterns.`,
      },
      {
        title: "The Grand Challenge",
        content: `The mission of GTAS is captured in a single statement:

> **Design adaptive systems capable of sustaining humanity for 1,000+ years while continuously responding to technological, ecological, economic, and societal change.**

This is not merely an academic exercise. It is a civilization-level engineering challenge that requires a new science of adaptation.`,
      },
      {
        title: "10 Core Principles of GTAS",
        content: `These principles form the philosophical foundation of GTAS:

1. **Reality is dynamic** — Nothing remains static; environments always change
2. **Adaptation is fundamental** — Survival requires continuous adaptation
3. **Information precedes intelligence** — You cannot adapt to what you cannot perceive
4. **Feedback drives learning** — Learning requires feedback loops
5. **Learning drives evolution** — Accumulated learning enables structural evolution
6. **Diversity drives resilience** — Monocultures are fragile; diversity creates robustness
7. **Coordination enables scale** — Complex systems require coordination mechanisms
8. **Governance enables sustainability** — Without governance, systems drift from purpose
9. **Intelligence emerges from adaptation** — Intelligence is a product of adaptive pressure
10. **Survival requires continuous evolution** — Stasis is a path to extinction`,
      },
      {
        title: "How GTAS Relates to Other Sciences",
        content: `GTAS is a **Grand Unification** of multiple disciplines:

| Discipline | GTAS Contribution |
|---|---|
| Systems Theory | Structure and system dynamics |
| Cybernetics | Feedback regulation |
| Complexity Science | Emergence and self-organization |
| Information Theory | Information flow and entropy |
| Evolution Theory | Variation, selection, retention |
| Economics | Resource allocation and markets |
| AI | Computational intelligence |
| Network Science | Connectivity and resilience |
| Civilization Studies | Long-term societal evolution |

GTAS does not replace these disciplines — it **synthesizes** them into a unified framework for understanding all adaptive phenomena.`,
      },
    ],
    quiz: [
      {
        question: "What is the central premise of GTAS?",
        options: [
          "Intelligence is the fundamental mechanism by which complexity survives",
          "Adaptation is the fundamental mechanism by which complexity survives",
          "Evolution is the fundamental mechanism by which complexity survives",
          "Information is the fundamental mechanism by which complexity survives",
        ],
        answer: 1,
        explanation:
          "GTAS holds that Adaptation — not merely intelligence or evolution — is the universal mechanism. Intelligence and evolution are both components within the broader framework of adaptation.",
      },
      {
        question:
          "What is the time horizon of the Grand Challenge that GTAS aims to address?",
        options: ["100 years", "500 years", "1,000+ years", "10,000 years"],
        answer: 2,
        explanation:
          "The GTAS Grand Challenge explicitly targets designing adaptive systems capable of sustaining humanity for 1,000+ years — a civilization-scale engineering mission.",
      },
      {
        question: "Which statement best describes GTAS's relationship to other sciences?",
        options: [
          "GTAS replaces systems theory and cybernetics",
          "GTAS is a subset of complexity science",
          "GTAS synthesizes multiple disciplines into a unified framework",
          "GTAS is an AI-specific theory",
        ],
        answer: 2,
        explanation:
          "GTAS is a transdisciplinary meta-theory that synthesizes Systems Theory, Cybernetics, Complexity Science, Information Theory, Evolution Theory, Economics, AI, and more.",
      },
    ],
  },
  {
    id: 2,
    slug: "core-theory",
    title: "Universal Adaptive Equation",
    subtitle: "The Mathematics of Survival",
    description:
      "Explore the Universal Adaptive Equation V(t) = f(I, L, E, R, G, T) — the mathematical heart of GTAS that defines the viability of any system.",
    icon: "∑",
    color: "from-blue-600 to-cyan-600",
    gradientFrom: "#2563eb",
    gradientTo: "#0891b2",
    estimatedTime: "20 min",
    keyTakeaways: [
      "V(t) = f(I, L, E, R, G, T) defines system viability mathematically",
      "Viability increases when adaptive capacity exceeds environmental change",
      "5 First Principles underpin all of GTAS theory",
      "Mathematical foundations draw from 7 established disciplines",
    ],
    sections: [
      {
        title: "The Universal Adaptive Equation",
        content: `The viability of any adaptive system can be represented as:

$$V(t) = f(I, L, E, R, G, T)$$

Where:

| Variable | Meaning | Description |
|---|---|---|
| **V(t)** | Viability | The system's ability to persist over time |
| **I** | Information | Ability to sense and process reality |
| **L** | Learning | Ability to improve from experience |
| **E** | Energy | Ability to sustain operations |
| **R** | Resilience | Ability to survive shocks and disturbances |
| **G** | Governance | Coordination and constraint mechanisms |
| **T** | Time | Evolutionary duration |

**Key insight:** Viability increases when adaptive capacity exceeds the rate of environmental change.

\`\`\`
Viability ↑  when  dA/dt  >  dE_env/dt
                (Adaptation rate)  (Environment change rate)
\`\`\``,
      },
      {
        title: "First Principle 1: Reality is Dynamic",
        content: `Nothing remains static. Every environment changes:

- **Markets** shift with technology and demographics
- **Climate** responds to energy and carbon flows
- **Technology** evolves through innovation cycles
- **Ecosystems** adapt to disturbances
- **Cultures** evolve through generational change

The implication is absolute:

> **No adaptation = extinction**

Every system that exists today — from bacteria to civilizations — exists because its ancestors adapted. Every system that no longer exists failed to adapt fast enough.`,
      },
      {
        title: "First Principle 2: Information Precedes Adaptation",
        content: `A system cannot adapt to what it cannot perceive.

The adaptive chain is:

\`\`\`
Environment
→ Signal
→ Information
→ Knowledge
→ Action
\`\`\`

This principle unifies apparently different systems:
- **Biological**: Sensory organs detect environmental signals
- **Enterprise**: Market intelligence platforms track competitive changes
- **AI**: Data pipelines feed models with training signals
- **National**: Intelligence agencies monitor geopolitical threats

The quality of adaptation is bounded by the quality of information. A blind system cannot adapt regardless of how capable its other functions are.`,
      },
      {
        title: "First Principle 3: Feedback Creates Intelligence",
        content: `All adaptive systems operate through feedback loops.

### Negative Feedback — Maintains Stability
Examples:
- Body temperature (homeostasis)
- Monetary policy (inflation control)
- Cloud auto-scaling (cost regulation)

### Positive Feedback — Drives Transformation
Examples:
- Innovation adoption (exponential growth)
- Viral spread (network effects)
- Ecosystem collapse (tipping points)

GTAS defines intelligence as:

> **The ability to utilize feedback for improved future performance.**

Intelligence is not a fixed property — it is an emergent capability that arises from well-structured feedback loops.`,
      },
      {
        title: "First Principle 4: Memory Enables Learning",
        content: `Without memory there is no adaptation — you cannot learn without retaining past experiences.

Every adaptive system has its own memory substrate:

| System | Memory Form |
|---|---|
| DNA | Genetic Memory (4 billion years of adaptation) |
| Brain | Cognitive Memory (neural synaptic weights) |
| Enterprise | Organizational Memory (culture, processes, documentation) |
| Civilization | Cultural Memory (language, institutions, science) |
| AI System | Model Parameters (trained weights) |

Memory stores successful adaptations. The longer the memory, the richer the learning that becomes possible.`,
      },
      {
        title: "First Principle 5: Evolution Optimizes Survival",
        content: `Adaptive systems evolve through the universal mechanism:

\`\`\`
Variation  →  Selection  →  Retention
\`\`\`

This applies far beyond biology:

| Domain | Variation | Selection | Retention |
|---|---|---|---|
| Biology | Genetic mutation | Natural selection | DNA |
| Technology | Innovation | Market adoption | IP/Standards |
| Markets | New businesses | Consumer choice | Successful companies |
| Ideas | New hypotheses | Evidence testing | Scientific knowledge |
| Institutions | Policy experiments | Effectiveness | Constitutional law |

Evolution is not merely biological — it is the universal optimization algorithm for adaptive systems.`,
      },
      {
        title: "Mathematical Foundations of GTAS",
        content: `GTAS integrates mathematical frameworks from seven disciplines:

| Foundation | Contribution |
|---|---|
| **Systems Theory** | State transitions: S(t+1) = f(S(t), I(t)) |
| **Cybernetics** | Feedback control: ΔS = k·(target - current) |
| **Information Theory** | Entropy: H = -Σ p(x) log p(x) |
| **Network Theory** | Connectivity and resilience graphs |
| **Evolutionary Theory** | Fitness landscapes and selection pressure |
| **Complexity Science** | Emergence and phase transitions |
| **AI Theory** | Learning functions and optimization |

Together:

\`\`\`
Adaptation = Information Processing
           + Feedback
           + Learning
           + Evolution
\`\`\``,
      },
    ],
    quiz: [
      {
        question: "In V(t) = f(I, L, E, R, G, T), what does 'R' represent?",
        options: ["Resources", "Reasoning", "Resilience", "Replication"],
        answer: 2,
        explanation:
          "R represents Resilience — the ability to survive shocks and disturbances. Resilience is distinct from energy (E) and governance (G).",
      },
      {
        question:
          "According to First Principle 2, what happens before a system can adapt?",
        options: [
          "It must have sufficient energy",
          "It must receive information about the environment",
          "It must have governance mechanisms",
          "It must have completed at least one learning cycle",
        ],
        answer: 1,
        explanation:
          "Information Precedes Adaptation — a system cannot adapt to what it cannot perceive. The chain is: Environment → Signal → Information → Knowledge → Action.",
      },
      {
        question:
          "Which feedback type drives transformation vs. which maintains stability?",
        options: [
          "Positive drives stability; Negative drives transformation",
          "Negative drives stability; Positive drives transformation",
          "Both types drive stability",
          "Both types drive transformation",
        ],
        answer: 1,
        explanation:
          "Negative feedback (corrective) maintains stability through homeostasis. Positive feedback amplifies change and drives transformation — enabling both growth and collapse.",
      },
    ],
  },
  {
    id: 3,
    slug: "adaptive-cycle",
    title: "Universal Adaptive Cycle",
    subtitle: "Observe → Orient → Decide → Act → Learn → Evolve",
    description:
      "Master the Universal Adaptive Cycle (UAC) — the six-phase loop that every adaptive system executes, extending the military OODA loop into a universal framework.",
    icon: "🔄",
    color: "from-emerald-600 to-teal-600",
    gradientFrom: "#059669",
    gradientTo: "#0d9488",
    estimatedTime: "18 min",
    keyTakeaways: [
      "Every adaptive system executes: Observe → Orient → Decide → Act → Learn → Evolve",
      "UAC extends the military OODA loop with Learning and Evolution phases",
      "The enterprise interpretation maps each phase to specific systems",
      "Speed through the cycle determines competitive advantage",
    ],
    sections: [
      {
        title: "The Universal Adaptive Cycle Overview",
        content: `Every adaptive system — from a single cell to a nation — continuously executes:

\`\`\`
Observe
  → Orient
    → Decide
      → Act
        → Learn
          → Evolve
            ↺ (repeat)
\`\`\`

This extends the military OODA (Observe-Orient-Decide-Act) concept developed by Colonel John Boyd into a **universal adaptive cycle** that includes Learning and Evolution — the phases that make systems grow smarter over time.

The key insight: **adaptation is not a one-time event — it is a continuous cycle.** The faster a system executes this cycle, the more adaptive it is.`,
      },
      {
        title: "Phase 1: Observe",
        content: `**Goal:** Collect signals from the environment.

**Inputs:**
- Sensors (biological, mechanical, digital)
- Markets and economic data
- Scientific measurements
- Human experience and reports

**Output:** Raw information about the state of the environment

**Examples across scales:**
| System | Observe Mechanism |
|---|---|
| Cell | Membrane receptor proteins |
| Animal | Sensory organs |
| Enterprise | Market research, analytics, sensors |
| Nation | Intelligence agencies, economic indicators |
| AI | Training data, real-time feeds |

**Failure mode:** **Blindness** — when the Observe phase is impaired, the system cannot adapt to threats or opportunities it cannot see.`,
      },
      {
        title: "Phase 2: Orient",
        content: `**Goal:** Build understanding from raw information.

**Outputs:**
- Context and situational awareness
- Mental models of the environment
- Predictions about future states

**Orientation transforms information into knowledge:**

\`\`\`
Raw Data
  → Pattern Recognition
    → Context Building
      → Model Formation
        → Situational Awareness
\`\`\`

This is the most cognitively intensive phase. The quality of orientation determines the quality of all subsequent decisions. Boyd considered this the most important OODA phase — it is where worldviews, biases, and prior experience shape interpretation.

**Failure mode:** **Ignorance** — an oriented system sees the data but cannot understand what it means.`,
      },
      {
        title: "Phase 3: Decide",
        content: `**Goal:** Select the best action from available alternatives.

**Methods for decision-making:**
- **Rules-based:** If-then logic (fast, limited)
- **Optimization:** Mathematical objective functions
- **Reasoning:** Causal analysis and logic chains
- **AI Planning:** Multi-step goal planning
- **Human Judgment:** Experience-based intuition

**The decision space:**
\`\`\`
Options Generated
  → Evaluated Against Objectives
    → Constrained by Resources and Governance
      → Optimal Action Selected
\`\`\`

**Failure mode:** **Rigidity** — when a system's decision process cannot generate new options and is locked into previous patterns.`,
      },
      {
        title: "Phase 4: Act",
        content: `**Goal:** Execute the selected action in the environment.

This phase transforms intention into reality. The key challenges are:
- **Speed** — How fast can the system execute?
- **Precision** — How accurately does execution match intention?
- **Coordination** — How well do components work together?
- **Resource efficiency** — How much energy/resources does execution consume?

**Failure mode:** **Fragmentation** — when different parts of the system act incoherently, degrading the effectiveness of the chosen action.`,
      },
      {
        title: "Phase 5: Learn",
        content: `**Goal:** Measure outcomes and extract lessons from the action.

This is the phase that separates adaptive systems from merely reactive ones. Learning closes the feedback loop:

\`\`\`
Action Taken
  → Outcome Measured
    → Outcome vs. Expected Compared
      → Lessons Extracted
        → Knowledge Updated
\`\`\`

**Forms of learning:**
| Type | Description | Example |
|---|---|---|
| Single-loop | Corrects actions within existing rules | Error correction |
| Double-loop | Questions the rules themselves | Strategy revision |
| Triple-loop | Questions the purpose and identity | Mission redefinition |

**Failure mode:** **Forgetfulness** — when outcomes are measured but lessons are not retained or distributed.`,
      },
      {
        title: "Phase 6: Evolve",
        content: `**Goal:** Modify structure, behavior, or objectives based on accumulated learning.

Evolution is the deepest form of adaptation — it changes not just what the system does, but **what the system is.**

\`\`\`
Accumulated Learning
  → Structural Modification
    → Behavioral Repertoire Expansion
      → New Capabilities Emergent
        → Higher Adaptive Potential
\`\`\`

**What can evolve:**
- **Structure** — Organizational form, architecture, components
- **Behavior** — Processes, strategies, policies
- **Objectives** — Purpose, mission, identity

**Failure mode:** **Collapse** — when the rate of environmental change exceeds the system's ability to evolve, leading to existential failure.`,
      },
      {
        title: "Enterprise Interpretation of the UAC",
        content: `For enterprises, each UAC phase maps to specific systems:

\`\`\`
Observe   →  Data Platform & IoT Sensors
Orient    →  Knowledge Graph & Analytics
Decide    →  Agentic AI & Decision Support
Act       →  Enterprise Systems & Execution
Learn     →  Analytics & Retrospectives
Evolve    →  Architecture Governance & Innovation
\`\`\`

The speed of the organizational UAC cycle is a key competitive differentiator. Companies that can **observe, orient, decide, act, learn, and evolve faster** than competitors have a structural advantage.

This maps directly to AI-Native Enterprise Architecture, where:
- **GenAI accelerates** the Observe, Orient, and Decide phases
- **Agentic AI extends** into Act and Coordinate
- **Multi-Agent Systems** enable parallel cycle execution across domains`,
      },
    ],
    quiz: [
      {
        question:
          "Which two phases does the Universal Adaptive Cycle add beyond the military OODA loop?",
        options: [
          "Orient and Act",
          "Learn and Evolve",
          "Observe and Decide",
          "Act and Orient",
        ],
        answer: 1,
        explanation:
          "OODA = Observe, Orient, Decide, Act. UAC extends this with Learn and Evolve — the phases that make systems grow smarter and structurally change over time.",
      },
      {
        question:
          "What is the failure mode when a system cannot generate new options in the Decide phase?",
        options: ["Blindness", "Fragmentation", "Rigidity", "Forgetfulness"],
        answer: 2,
        explanation:
          "Rigidity is the failure mode of the Decide phase — when decision processes are locked into previous patterns and cannot generate new options in response to novel situations.",
      },
      {
        question:
          "What type of learning questions the rules themselves, rather than just correcting actions within existing rules?",
        options: [
          "Single-loop learning",
          "Double-loop learning",
          "Triple-loop learning",
          "Feedback learning",
        ],
        answer: 1,
        explanation:
          "Double-loop learning questions the rules themselves. Single-loop corrects within existing rules. Triple-loop questions purpose and identity. Double-loop is essential for strategic adaptation.",
      },
    ],
  },
  {
    id: 4,
    slug: "hierarchy",
    title: "Hierarchy of Adaptive Systems",
    subtitle: "From Physics to Planetary Intelligence",
    description:
      "Explore the 11-level hierarchy of adaptive systems from physical particles (L0) to planetary intelligence (L10), and understand how each level builds on the capabilities of the one below.",
    icon: "🔺",
    color: "from-orange-500 to-amber-600",
    gradientFrom: "#f97316",
    gradientTo: "#d97706",
    estimatedTime: "22 min",
    keyTakeaways: [
      "Adaptive systems are organized in a nested hierarchy from L0 (Physics) to L10 (Cosmic Intelligence)",
      "Each level inherits lower-level rules and develops new adaptive capabilities",
      "Emergence at each level creates properties that cannot be predicted from the level below",
      "Humans and current AI exist at Level 3-4; civilization at Level 7-8",
    ],
    sections: [
      {
        title: "Overview: A Nested Hierarchy",
        content: `GTAS views reality as **nested adaptive systems** — each level containing the ones below and adding new emergent capabilities.

\`\`\`
L10  Cosmic Intelligence
L9   Planetary Systems
L8   Civilizational Systems
L7   National Systems
L6   Economic Systems
L5   Social Systems
L4   Cognitive Systems
L3   Biological Systems
L2   Chemical Systems
L1   Physical Systems
L0   Subatomic/Quantum
\`\`\`

Three key rules govern this hierarchy:
1. Each level **inherits** the rules of all lower levels
2. Each level **develops new** adaptive capabilities not present below
3. Each level creates **emergent properties** — system-level behaviors that cannot be predicted from components alone`,
      },
      {
        title: "L0-L2: Foundation Levels (Physical and Chemical)",
        content: `### Level 0: Physical Systems
**Examples:** Stars, rivers, weather systems, tectonic plates

**Adaptive capability:** Minimal — physical response to forces only

Physical systems follow deterministic laws. They respond to energy and matter, but do not "learn" or "choose." The universe at this level runs on physics.

---

### Level 1: Chemical Systems
**Examples:** Catalytic reactions, autocatalytic molecular networks, probiotic chemistry

**Adaptive capability:** Chemical feedback loops — reactions that accelerate their own formation

This level introduces primitive feedback: molecules that catalyze their own production create the first rudimentary adaptive loops.

---

### Level 2: Biological Systems
**Examples:** Cells, bacteria, viruses, organelles

**Adaptive capabilities:** Replication, evolution, metabolism

The emergence of life introduces:
- **DNA** — persistent memory of successful adaptations
- **Metabolism** — energy management
- **Replication** — copying and variation
- **Evolution** — selection pressure over generations

This is the first level where Variation → Selection → Retention creates cumulative adaptation.`,
      },
      {
        title: "L3-L4: Cognitive and Social Systems",
        content: `### Level 3: Cognitive Systems (Organisms)
**Examples:** Animals, humans, other complex organisms

**Adaptive capabilities:** Memory, learning, planning, tool use

Level 3 introduces:
- **Neural memory** — beyond genetic memory
- **Behavioral learning** — changing behavior within a lifetime
- **Planning** — simulating futures before acting
- **Tool use** — extending physical capabilities

Humans represent the apex of Level 3, with language and abstract reasoning.

---

### Level 4: Social Systems
**Examples:** Families, teams, tribes, organizations, corporations

**Adaptive capabilities:** Coordination, collective learning, division of labor

Level 4 creates capabilities no individual possesses:
- **Distributed cognition** — group intelligence exceeding individual
- **Collective memory** — culture, tradition, documentation
- **Specialization** — role differentiation for efficiency
- **Coordination** — aligned action toward shared goals

Organizations are level-4 entities. Their adaptive capability depends critically on how well they coordinate internal components.`,
      },
      {
        title: "L5-L7: Economic, National, and Civilizational Systems",
        content: `### Level 5: Economic Systems
**Examples:** Markets, industries, supply chains, financial systems

**Adaptive capability:** Distributed adaptation through price signals

Markets are decentralized adaptive systems. Prices aggregate distributed information and coordinate resource allocation without central control — this is the emergent intelligence of economic systems.

---

### Level 6: National Systems
**Examples:** Nation-states, governments, political systems

**Adaptive capabilities:** Governance, strategic planning, law, collective defense

Level 6 systems introduce:
- **Formal governance** — laws, institutions, constitutions
- **Strategic planning** — long-term vision and policy
- **Collective defense** — protecting the whole system
- **Democratic feedback** — elections as adaptive mechanisms

---

### Level 7: Civilizational Systems
**Examples:** Human civilization, historical empires, cultural civilizations

**Adaptive capabilities:** Science, institutional memory, long-term adaptation

Level 7 creates:
- **Scientific method** — systematic knowledge creation
- **Institutional memory** spanning centuries
- **Cross-cultural learning** — civilizations learning from each other
- **Long-horizon adaptation** — planning over decades and centuries

The rise and fall of civilizations is the ultimate test of Level 7 adaptive capacity.`,
      },
      {
        title: "L8-L10: Planetary and Cosmic Systems",
        content: `### Level 8: Planetary Systems
**Examples:** Global climate, planetary governance, Earth-scale intelligence

**Adaptive capability:** Planet-scale coordination and Earth systems management

Level 8 is where humanity is now beginning to operate — grappling with climate change, global governance, planetary resource management.

A civilization reaches Level 8 when it can:
- **Coordinate across all nations** toward shared planetary goals
- **Manage planetary systems** (climate, biodiversity, oceans)
- **Distribute technology** to optimize planetary welfare

---

### Level 9: Multi-Planetary Systems
**Examples:** Multi-planetary civilizations, solar system governance

---

### Level 10: Cosmic Intelligence
**Examples:** Intelligence operating at galactic or universal scale

Level 10 represents the ultimate horizon of adaptive intelligence — a theoretical ceiling that current physics suggests may approach Kardashev Type III civilization status.

---

**Where are we now?**
- Most humans operate primarily at L3-L4
- Corporations are L4 entities
- Nations are L6 entities
- Global civilization is L7 with emerging L8 capabilities
- Current AI systems are approaching L3-L4 capabilities`,
      },
    ],
    quiz: [
      {
        question:
          "At which hierarchy level does 'distributed adaptation through price signals' emerge?",
        options: [
          "Level 3 (Cognitive Systems)",
          "Level 4 (Social Systems)",
          "Level 5 (Economic Systems)",
          "Level 6 (National Systems)",
        ],
        answer: 2,
        explanation:
          "Level 5 (Economic Systems) introduces distributed adaptation through price signals. Markets aggregate information from millions of actors and coordinate resource allocation without central control.",
      },
      {
        question:
          "What adaptive capability emerges at Level 2 that does NOT exist at Level 1?",
        options: [
          "Chemical feedback",
          "Metabolism and DNA-based evolution",
          "Neural memory",
          "Social coordination",
        ],
        answer: 1,
        explanation:
          "Level 2 (Biological Systems) introduces metabolism, replication, DNA as persistent memory, and Variation→Selection→Retention evolution — none of which exist in purely chemical systems.",
      },
      {
        question: "Which level does a typical modern nation-state operate at?",
        options: ["Level 4", "Level 5", "Level 6", "Level 7"],
        answer: 2,
        explanation:
          "Nation-states are Level 6 entities with formal governance, strategic planning, law, and collective defense. Level 7 represents civilizations (aggregates of nations with scientific institutions spanning centuries).",
      },
    ],
  },
  {
    id: 5,
    slug: "capabilities-failures",
    title: "Adaptive Capabilities & Failure Modes",
    subtitle: "10 Capabilities, 8 Ways Systems Fail",
    description:
      "Understand the 10 universal adaptive capabilities every system needs, and the 8 failure modes that cause adaptive systems to collapse.",
    icon: "⚡",
    color: "from-rose-600 to-pink-600",
    gradientFrom: "#e11d48",
    gradientTo: "#db2777",
    estimatedTime: "20 min",
    keyTakeaways: [
      "10 universal capabilities define adaptive fitness across all system types",
      "8 failure modes can impair or destroy any adaptive system",
      "Self-Transformation (capability 10) is the rarest and most powerful capability",
      "Blindness and Collapse are the most existential failure modes",
    ],
    sections: [
      {
        title: "The 10 Adaptive Capabilities Framework",
        content: `GTAS identifies ten universal capabilities that determine adaptive fitness. These capabilities exist at every level of the hierarchy — from cells to civilizations.

\`\`\`
                    Adaptive Fitness
                         ↑
    ┌────────────────────┴──────────────────┐
    │  1. Sensing         6. Decision-Making │
    │  2. Awareness       7. Coordination    │
    │  3. Memory          8. Resilience      │
    │  4. Learning        9. Evolution       │
    │  5. Prediction     10. Self-Transform  │
    └───────────────────────────────────────┘
\`\`\`

Systems with higher capability scores at more levels are more adaptive and therefore more viable over long time horizons.`,
      },
      {
        title: "Capabilities 1-5: Sensing Through Prediction",
        content: `### 1. Sensing — Detect Change
The ability to perceive signals from the environment. Without sensing, a system is functionally blind.

*Examples:* Sensory organs, market monitoring systems, IoT sensors, satellite imagery

---

### 2. Awareness — Interpret Change
The ability to build an accurate model of reality from raw sensor data. Awareness transforms signals into **situational understanding**.

*Examples:* Situational awareness systems, intelligence analysis, anomaly detection

---

### 3. Memory — Retain Knowledge
The ability to persist information across time. Memory allows systems to learn cumulatively rather than starting fresh after each event.

*Examples:* DNA, neural memory, organizational knowledge bases, AI model weights

---

### 4. Learning — Improve Performance
The ability to systematically improve behavior based on past experience. Learning is memory made actionable.

*Examples:* Machine learning, organizational retrospectives, cultural transmission, training programs

---

### 5. Prediction — Anticipate Futures
The ability to model future states and anticipate changes before they occur. Prediction is learning extended into the future.

*Examples:* Weather forecasting, financial modeling, strategic planning, simulation`,
      },
      {
        title: "Capabilities 6-10: Decision Through Self-Transformation",
        content: `### 6. Decision-Making — Select Actions
The ability to evaluate options and select effective actions. Quality decision-making requires good information, good models, and aligned objectives.

*Examples:* Executive decision-making, AI planning, policy formation, optimization algorithms

---

### 7. Coordination — Align Components
The ability to synchronize the behavior of multiple components toward a shared objective. At scale, coordination is the bottleneck.

*Examples:* Organizational management, economic markets, military coordination, multi-agent AI systems

---

### 8. Resilience — Recover from Shocks
The ability to absorb disturbances, recover from failures, and maintain viability under stress. Resilience is not the same as resistance — resilient systems bend rather than break.

*Examples:* Immune systems, cloud fault tolerance, business continuity planning, diplomatic crisis management

---

### 9. Evolution — Create New Capabilities
The ability to develop entirely new capabilities not previously in the system's repertoire. Evolution is the deepest form of learning — it changes what the system *is*, not just what it *does*.

*Examples:* R&D programs, platform evolution, biological speciation, paradigm shifts

---

### 10. Self-Transformation — Redefine Identity and Purpose
The rarest and most powerful capability: the ability to fundamentally redefine the system's own identity, mission, and purpose. This is transformation beyond optimization.

*Examples:* Corporate reinvention (IBM: hardware → services → AI), national pivots, personal identity transformation, AI achieving general capabilities`,
      },
      {
        title: "The 8 Adaptive Failure Modes",
        content: `Every adaptive system can fail through one or more of these eight failure modes:

| Failure Mode | Description | Phase Impaired |
|---|---|---|
| **1. Blindness** | Cannot sense reality — cannot perceive threats or opportunities | Observe |
| **2. Ignorance** | Cannot understand reality — perceives data but cannot interpret it correctly | Orient |
| **3. Rigidity** | Cannot change — locked into fixed patterns despite feedback | Decide |
| **4. Fragmentation** | Cannot coordinate — components act incoherently | Act |
| **5. Exhaustion** | Runs out of resources — energy depletion prevents action | Resource |
| **6. Forgetfulness** | Loses knowledge — fails to retain or distribute lessons | Learn |
| **7. Corruption** | Goals diverge from purpose — misalignment between actions and mission | Evolve |
| **8. Collapse** | Adaptation slower than environmental change — system falls behind | All phases |

**The most dangerous failure modes:**
- **Blindness** is existential because the system cannot respond to threats it cannot see
- **Corruption** is insidious because the system continues to act, but in misaligned directions
- **Collapse** is terminal — by definition, the system has lost the adaptive race`,
      },
      {
        title: "Failure Mode Analysis: Enterprise Examples",
        content: `Understanding failure modes through enterprise examples:

**Blindness:** Kodak failed to sense the digital photography signal despite having invented the technology internally. Organizational filters prevented the signal from reaching decision-makers.

**Ignorance:** Nokia sensed the smartphone revolution but misinterpreted it as a software problem rather than an ecosystem problem — and chose the wrong response.

**Rigidity:** Blockbuster's decision-making was locked into the "physical rental" model. Even with knowledge of streaming, they could not act differently.

**Fragmentation:** Siloed enterprises where digital, IT, and business teams cannot coordinate — each executing contradictory strategies.

**Exhaustion:** Companies that burn through capital on transformation initiatives without achieving returns — resource exhaustion before adaptation completes.

**Forgetfulness:** Organizations that repeatedly make the same post-merger mistakes because lessons from previous mergers are not retained in institutional memory.

**Corruption:** Companies where incentive structures misalign employee behavior from customer value — optimizing for metrics that diverge from mission.

**Collapse:** Organizations where the rate of market disruption exceeded the organizational adaptive capacity — circuit board companies facing software competition.`,
      },
    ],
    quiz: [
      {
        question:
          "Which adaptive capability involves fundamentally redefining the system's own identity and purpose?",
        options: ["Evolution", "Learning", "Self-Transformation", "Adaptation"],
        answer: 2,
        explanation:
          "Self-Transformation (Capability 10) is the ability to redefine identity and purpose — the rarest and most powerful capability. Evolution creates new capabilities; Self-Transformation changes what the system fundamentally *is*.",
      },
      {
        question: "Which failure mode is characterized by 'goals diverging from purpose'?",
        options: ["Rigidity", "Corruption", "Collapse", "Fragmentation"],
        answer: 1,
        explanation:
          "Corruption occurs when a system's goals diverge from its original purpose — it continues to act, but in misaligned directions. This is insidious because the system appears functional while drifting from its mission.",
      },
      {
        question:
          "What distinguishes Resilience (capability 8) from Resistance?",
        options: [
          "Resilience is stronger; Resistance is weaker",
          "Resilient systems bend and recover; Resistant systems try not to break",
          "Resilience is for organizations; Resistance is for physical systems",
          "They are synonymous in GTAS",
        ],
        answer: 1,
        explanation:
          "Resilient systems absorb disturbances and recover — they bend rather than break. Resistance tries to prevent disturbance. Resilience is generally more adaptive because it accepts and incorporates shocks.",
      },
    ],
  },
  {
    id: 6,
    slug: "axioms-ontology",
    title: "Core Axioms & Ontology",
    subtitle: "The Logical Foundation of GTAS",
    description:
      "Study the 10 Core Axioms that form the logical foundation of GTAS, and explore the formal ontology of adaptive systems with its 15 entity types and relationship model.",
    icon: "⚙️",
    color: "from-slate-600 to-gray-700",
    gradientFrom: "#475569",
    gradientTo: "#374151",
    estimatedTime: "16 min",
    keyTakeaways: [
      "10 Core Axioms are the logical starting points for all GTAS theory",
      "The GTAS Ontology defines 15 entity types and their relationships",
      "The ontology relationship model flows from Environment → Information → Knowledge → Decision → Action → Feedback → Learning → Adaptation → Evolution",
      "These axioms are designed to be universal — applicable at every level of the hierarchy",
    ],
    sections: [
      {
        title: "What are GTAS Axioms?",
        content: `Axioms are foundational statements accepted as true without proof — the logical starting points from which all other GTAS theory is derived.

GTAS has 10 Core Axioms, each addressing a different fundamental property of adaptive systems. Together they form a **complete logical foundation** for the theory.

These axioms are designed to be:
- **Universal** — true for all adaptive systems at all levels
- **Minimal** — no redundancy between axioms
- **Non-contradictory** — mutually consistent
- **Sufficient** — together they can explain all adaptive phenomena`,
      },
      {
        title: "Axioms 1-5: Structural Axioms",
        content: `### Axiom 1: System Existence
Every system exists within an environment.
\`\`\`
System ⊂ Environment
\`\`\`
No system exists in isolation. The environment is the context that defines the adaptive challenge.

---

### Axiom 2: Exchange
Every adaptive system exchanges **Matter, Energy, and Information** with its environment.
\`\`\`
System ↔ {Matter, Energy, Information} ↔ Environment
\`\`\`
A closed system that does not exchange cannot adapt. Exchange is the prerequisite for awareness.

---

### Axiom 3: Feedback
Every adaptive system contains feedback loops.
\`\`\`
Action → Outcome → Feedback → Adaptation
\`\`\`
Feedback is the mechanism by which systems learn from their own actions.

---

### Axiom 4: Information
Adaptation requires information.
\`\`\`
No Information = No Adaptation
\`\`\`
This axiom underpins the entire Information (I) variable in the Universal Adaptive Equation.

---

### Axiom 5: Memory
Learning requires memory.
\`\`\`
Learning = Information + Memory
\`\`\`
Without memory, each observation is independent — no cumulative improvement is possible.`,
      },
      {
        title: "Axioms 6-10: Dynamic Axioms",
        content: `### Axiom 6: Adaptation
Adaptive systems modify behavior in response to feedback.

This defines the core action — adaptive systems do not merely observe; they change. Behavioral modification in response to feedback is what makes a system *adaptive* rather than merely *reactive*.

---

### Axiom 7: Evolution
Long-term adaptation occurs through:
\`\`\`
Variation → Selection → Retention
\`\`\`
Evolution is the mechanism of structural adaptation across generations or cycles — it produces cumulative, compounding adaptation.

---

### Axiom 8: Resilience
Sustainable systems maintain viability under disturbance.

Resilience is the capacity to absorb shocks without losing core function. Systems without resilience are fragile to environmental disturbances.

---

### Axiom 9: Governance
Large adaptive systems require coordination mechanisms.

As systems grow in complexity and scale, spontaneous coordination fails. Governance creates the structures, rules, and incentives that align component behavior.

---

### Axiom 10: Emergence
System-level behaviors emerge from interactions among components.

Emergence is the most profound axiom — the whole is more than the sum of its parts. Properties like consciousness, markets, and ecosystems cannot be predicted from individual components.`,
      },
      {
        title: "The GTAS Ontology: 15 Entity Types",
        content: `The GTAS Ontology formally defines the entities and relationships in any adaptive system.

**Core Entity Types:**

| Entity | Definition |
|---|---|
| **System** | Collection of interacting components |
| **Agent** | Entity capable of sensing, deciding, and acting |
| **Environment** | External context influencing the system |
| **Information** | Representation of state and change |
| **Knowledge** | Structured information enabling action |
| **Memory** | Persistent storage of adaptations |
| **Decision** | Selection among alternatives |
| **Action** | Execution of behavior |
| **Feedback** | Outcome information returned to the system |
| **Adaptation** | Behavioral modification |
| **Learning** | Accumulation of improved responses |
| **Evolution** | Long-term structural adaptation |
| **Governance** | Coordination and constraint mechanisms |
| **Resilience** | Capacity to recover and persist |
| **Purpose** | Desired future state |

**Agents** are the most important entity — they are the subjects of adaptation. An agent can be: a human, an AI system, an organization, or a nation.`,
      },
      {
        title: "Ontology Relationship Model",
        content: `The relationships between entities form the **causal chain of adaptation**:

\`\`\`
Environment
     ↓  (generates signals)
Information
     ↓  (processed into)
Knowledge
     ↓  (informs)
Decision
     ↓  (triggers)
Action
     ↓  (produces)
Feedback
     ↓  (enables)
Learning
     ↓  (drives)
Adaptation
     ↓  (leads to)
Evolution
\`\`\`

This relationship model is the **ontological backbone** of GTAS. It specifies the necessary causal sequence for adaptation — any break in this chain impairs the system's adaptive capacity.

Notice that:
- **Governance** operates as a constraint and coordination layer across all relationships
- **Memory** is required at multiple stages (Information→Knowledge, Learning→Adaptation)
- **Purpose** provides the directional orientation for all Decisions`,
      },
    ],
    quiz: [
      {
        question: "What does Axiom 10 (Emergence) state?",
        options: [
          "Large systems require coordination mechanisms",
          "System-level behaviors emerge from interactions among components",
          "Long-term adaptation occurs through Variation, Selection, Retention",
          "Sustainable systems maintain viability under disturbance",
        ],
        answer: 1,
        explanation:
          "Axiom 10 states that system-level behaviors emerge from interactions among components — the whole is more than the sum of its parts. This explains phenomena like consciousness, markets, and ecosystems.",
      },
      {
        question:
          "According to GTAS, what is the formula for Learning?",
        options: [
          "Learning = Feedback + Action",
          "Learning = Memory + Experience",
          "Learning = Information + Memory",
          "Learning = Observation + Response",
        ],
        answer: 2,
        explanation:
          "Axiom 5 states: Learning = Information + Memory. Without information there is nothing to learn from; without memory there is no accumulation of lessons.",
      },
      {
        question:
          "In the GTAS Ontology, which entity type is defined as 'capable of sensing, deciding, and acting'?",
        options: ["System", "Agent", "Knowledge", "Feedback"],
        answer: 1,
        explanation:
          "An Agent is defined as an entity capable of sensing, deciding, and acting. Agents can be humans, AI systems, organizations, or nations — the subjects of adaptation in GTAS.",
      },
    ],
  },
  {
    id: 7,
    slug: "body-of-knowledge",
    title: "GTAS Body of Knowledge",
    subtitle: "10 Domains of Adaptive Science",
    description:
      "Survey the 10 domains of the GTAS Body of Knowledge — the interdisciplinary knowledge map that spans Systems Science to Civilization Systems.",
    icon: "📚",
    color: "from-yellow-500 to-orange-500",
    gradientFrom: "#eab308",
    gradientTo: "#f97316",
    estimatedTime: "25 min",
    keyTakeaways: [
      "GTAS-BOK spans 10 domains from Systems Science to Civilization Systems",
      "Each domain contributes distinct knowledge to the unified adaptive framework",
      "Mastering GTAS requires familiarity across all 10 domains",
      "The domains complement each other — no single domain is sufficient alone",
    ],
    sections: [
      {
        title: "Overview of GTAS-BOK",
        content: `The **GTAS Body of Knowledge (GTAS-BOK)** is the complete knowledge map for the field. It organizes the source disciplines that GTAS synthesizes into 10 distinct domains.

Unlike traditional academic disciplines with hard boundaries, GTAS-BOK is explicitly **integrative** — each domain contributes unique knowledge that combines with others to produce a holistic understanding of adaptive systems.

A GTAS practitioner needs working knowledge across all 10 domains — deep expertise in all is not required, but sufficient understanding to apply cross-domain thinking is essential.`,
      },
      {
        title: "Domain 1: Systems Science",
        content: `**Core Question:** How do components interact to produce system-level behavior?

**Key Topics:**
- **Systems Theory** (Bertalanffy) — formal study of systems and their properties
- **System Dynamics** (Forrester) — stocks, flows, and feedback structures
- **System-of-Systems** — collections of independent systems with emergent properties

**Why it matters for GTAS:**
Systems Science provides the structural vocabulary for GTAS — the concepts of boundaries, components, relationships, and emergent behavior are all systems-theoretic in origin.

**Key Concepts:**
- Stocks and flows
- Feedback loops (reinforcing and balancing)
- Delays and oscillations
- Leverage points for system change`,
      },
      {
        title: "Domain 2: Cybernetics",
        content: `**Core Question:** How do systems regulate themselves through information and feedback?

**Key Topics:**
- **Feedback Loops** — negative (stabilizing) and positive (amplifying)
- **Regulation** — homeostatic control mechanisms
- **Viable Systems** (Beer's VSM) — conditions for system viability

**Why it matters for GTAS:**
Cybernetics is the science of control in adaptive systems. It explains how systems maintain themselves and respond to disturbances — directly supporting the R (Resilience) and G (Governance) variables in the Universal Adaptive Equation.

**Key Concepts:**
- The Law of Requisite Variety (Ashby) — a controller must have as many states as the system it controls
- Homeostasis — maintaining stable internal state despite external variation
- Viable System Model — recursive organizational architecture`,
      },
      {
        title: "Domain 3: Complexity Science",
        content: `**Core Question:** How does order emerge from the interactions of simple agents?

**Key Topics:**
- **Emergence** — properties that arise at the system level not predictable from components
- **Self-Organization** — order without central control
- **Adaptive Networks** — networks that evolve in response to environmental pressure

**Why it matters for GTAS:**
Complexity Science explains how large-scale adaptive behaviors (markets, ecosystems, cities) emerge from local interactions — underpinning GTAS's understanding of L5-L8 systems.

**Key Concepts:**
- Complex Adaptive Systems (CAS) — Holland, Santa Fe Institute
- Phase transitions — sudden changes in system behavior
- Power laws and scale-free networks
- Agent-based modeling`,
      },
      {
        title: "Domain 4: Information Science",
        content: `**Core Question:** How is information created, stored, transmitted, and transformed?

**Key Topics:**
- **Information Theory** (Shannon) — quantification of information
- **Knowledge Theory** — how raw data becomes actionable knowledge
- **Semantic Systems** — meaning and interpretation of information

**Why it matters for GTAS:**
Information is the 'I' in V(t) = f(I, L, E, R, G, T) — the fundamental input to all adaptation. Information Science provides the formal tools for understanding information flow in adaptive systems.

**Key Concepts:**
- Entropy as a measure of uncertainty
- Signal vs. noise discrimination
- Knowledge graphs and semantic networks
- Information as a competitive resource`,
      },
      {
        title: "Domain 5-6: Intelligence and Evolutionary Science",
        content: `### Domain 5: Intelligence Science
**Core Question:** What is intelligence and how does it emerge?

**Key Topics:**
- **Human Intelligence** — cognitive architectures and limits
- **Collective Intelligence** — wisdom of crowds and group cognition
- **Artificial Intelligence** — computational approaches to intelligence

**Key Concepts:**
- General vs. narrow intelligence
- Swarm intelligence and distributed cognition
- AI as adaptive capability amplifier

---

### Domain 6: Evolutionary Science
**Core Question:** How do systems improve over generations through selection?

**Key Topics:**
- **Evolution** — mechanisms of biological evolution
- **Adaptation** — short-term behavioral modification
- **Innovation** — punctuated equilibrium and radical novelty

**Key Concepts:**
- Fitness landscapes — visualizing evolutionary pressure
- Niche construction — organisms modifying their own environment
- Cultural evolution — Darwinian processes applied to ideas and institutions
- Innovation S-curves — technology lifecycle patterns`,
      },
      {
        title: "Domain 7-8: Governance and Economics",
        content: `### Domain 7: Governance Science
**Core Question:** How do societies coordinate behavior and make collective decisions?

**Key Topics:**
- **Policy** — design and implementation of rules
- **Institutions** — stable patterns of behavior and expectation
- **Regulation** — constraints and incentive structures

**Why GTAS needs Governance:**
Without governance, complex adaptive systems fragment. Governance provides the coordination mechanisms that enable large-scale coherent behavior.

**Key Concepts:**
- Institutional design
- Mechanism design (how to create systems with desired emergent properties)
- Regulatory feedback loops

---

### Domain 8: Economics
**Core Question:** How do agents allocate scarce resources under constraints?

**Key Topics:**
- **Resource Allocation** — efficiency and distribution
- **Markets** — distributed adaptive coordination mechanisms
- **Evolutionary Economics** — economies as evolving systems

**Key Concepts:**
- Market dynamics as adaptive systems
- FinOps and resource optimization
- Evolutionary game theory
- Economic resilience and systemic risk`,
      },
      {
        title: "Domain 9-10: Organizational and Civilization Systems",
        content: `### Domain 9: Organizational Systems
**Core Question:** How do human organizations adapt and survive?

**Key Topics:**
- **Enterprises** — adaptive architectures for business
- **Teams** — small-scale coordination and performance
- **Learning Organizations** (Senge) — organizations that continuously improve

**Key Concepts:**
- The Learning Organization — systems thinking, mental models, shared vision
- Organizational adaptive cycles
- Enterprise Architecture as adaptive governance
- Digital transformation as adaptive evolution

---

### Domain 10: Civilization Systems
**Core Question:** How do civilizations rise, adapt, and survive?

**Key Topics:**
- **Long-term Societal Evolution** — patterns across civilizational timescales
- **Civilizational Resilience** — factors that determine civilizational longevity
- **Planetary Stewardship** — managing Earth-scale systems

**Key Concepts:**
- Turchin's structural-demographic theory of societal cycles
- Diamond's civilizational collapse factors
- Planetary boundaries and tipping points
- Long-term institutional design for civilizational resilience

This domain is the ultimate application of GTAS — designing adaptive systems that can sustain humanity for 1,000+ years.`,
      },
    ],
    quiz: [
      {
        question:
          "Which domain provides the formal vocabulary of 'stocks, flows, and feedback structures' for GTAS?",
        options: [
          "Cybernetics",
          "Information Science",
          "Systems Science",
          "Complexity Science",
        ],
        answer: 2,
        explanation:
          "Domain 1 (Systems Science), specifically System Dynamics (Forrester), introduces stocks, flows, feedback loops, and delays as formal modeling tools for system behavior.",
      },
      {
        question: "Ashby's 'Law of Requisite Variety' belongs to which domain?",
        options: [
          "Complexity Science",
          "Cybernetics",
          "Intelligence Science",
          "Governance Science",
        ],
        answer: 1,
        explanation:
          "The Law of Requisite Variety is a foundational cybernetic principle: a controller must have at least as many states as the system it controls. It belongs to Domain 2 (Cybernetics).",
      },
      {
        question:
          "Which domain specifically addresses 'how societies coordinate behavior and make collective decisions'?",
        options: [
          "Economics",
          "Organizational Systems",
          "Governance Science",
          "Civilization Systems",
        ],
        answer: 2,
        explanation:
          "Domain 7 (Governance Science) addresses policy, institutions, and regulation — the mechanisms by which societies coordinate behavior and make collective decisions.",
      },
    ],
  },
  {
    id: 8,
    slug: "reference-architecture",
    title: "GTAS Reference Architecture",
    subtitle: "7-Layer Stack + UEEOS",
    description:
      "Understand the GTAS 7-layer Reference Architecture and the UEEOS (Universal Evolution Engine Operating System) — the implementation framework for deploying GTAS at enterprise, national, and civilizational scale.",
    icon: "🏗️",
    color: "from-cyan-600 to-blue-700",
    gradientFrom: "#0891b2",
    gradientTo: "#1d4ed8",
    estimatedTime: "28 min",
    keyTakeaways: [
      "GTAS defines a 7-layer adaptive system stack from Resource to Purpose",
      "UEEOS is the 9-layer implementation framework for GTAS in enterprises and beyond",
      "Each UEEOS layer has specific components (Executive Copilot, Knowledge Graph, Digital Twin, etc.)",
      "UEEOS scales from individual enterprise to nation to civilization",
    ],
    sections: [
      {
        title: "The GTAS 7-Layer Reference Architecture",
        content: `The GTAS Reference Architecture defines the **canonical structure of any adaptive system** — from a single organism to a civilization.

\`\`\`
┌─────────────────────────────────┐
│         Purpose Layer           │  ← Why the system exists
├─────────────────────────────────┤
│        Governance Layer         │  ← How it is controlled
├─────────────────────────────────┤
│       Intelligence Layer        │  ← How it reasons
├─────────────────────────────────┤
│        Knowledge Layer          │  ← What it knows
├─────────────────────────────────┤
│       Information Layer         │  ← What it perceives
├─────────────────────────────────┤
│        Execution Layer          │  ← What it does
├─────────────────────────────────┤
│         Resource Layer          │  ← What it consumes
└─────────────────────────────────┘
\`\`\`

Reading from bottom to top, this architecture shows how **physical resources** support **information flows** that build **knowledge** enabling **intelligent** decisions aligned with **governance** in service of **purpose**.`,
      },
      {
        title: "Layer Definitions: Resource Through Information",
        content: `### Layer 1: Resource Layer
**Provides:** Energy, Infrastructure, Capital, Materials

The Resource Layer is the physical and financial foundation. Without resources, no other layer can function. In biological systems, this is metabolism. In enterprises, this is FinOps and infrastructure.

**Key questions:**
- Do we have sufficient energy and capital?
- Is our infrastructure resilient?
- Are resources allocated efficiently?

---

### Layer 2: Execution Layer
**Performs:** Operations, Actions, Workflows

The Execution Layer is where decisions become real-world actions. In enterprises: production systems, service delivery, logistics. In biology: muscular and motor systems.

**Key questions:**
- How efficiently are actions executed?
- What is the execution latency?
- How reliable are execution mechanisms?

---

### Layer 3: Information Layer
**Manages:** Data, Events, Communications

The Information Layer collects, filters, and distributes signals from the environment and from within the system. It is the sensory and nervous system of the adaptive entity.

**Key questions:**
- What data is collected and how?
- How is information distributed?
- What signals are being missed?`,
      },
      {
        title: "Layer Definitions: Knowledge Through Purpose",
        content: `### Layer 4: Knowledge Layer
**Stores:** Models, Memory, Ontologies

The Knowledge Layer transforms raw information into structured, actionable knowledge. This is where organizational memory lives and institutional learning is codified.

**Enterprise examples:** Knowledge graphs, documentation systems, architectural patterns, lessons-learned databases

---

### Layer 5: Intelligence Layer
**Provides:** Reasoning, Planning, Optimization

The Intelligence Layer applies knowledge to generate insights, plans, and recommendations. This is where AI most powerfully contributes — as an intelligence amplifier.

**Enterprise examples:** AI copilots, decision support systems, scenario planning tools, optimization engines

---

### Layer 6: Governance Layer
**Defines:** Policies, Constraints, Compliance

The Governance Layer maintains alignment between all lower layers and the organization's objectives. Without governance, intelligent systems can optimize for the wrong objectives.

**Enterprise examples:** Enterprise Architecture governance, risk management, compliance frameworks, audit systems

---

### Layer 7: Purpose Layer
**Defines:** Mission, Objectives, Success Criteria

The Purpose Layer is the ultimate "why" — the system's reason for existing. All other layers serve the Purpose Layer.

**Enterprise examples:** Corporate mission statements, strategic objectives, OKR frameworks, long-term vision`,
      },
      {
        title: "UEEOS: Universal Evolution Engine Operating System",
        content: `**UEEOS** is the **implementation framework** for GTAS — it takes the theoretical GTAS architecture and operationalizes it into a deployable operating system for enterprises, nations, and civilizations.

Where GTAS is the **science**, UEEOS is the **engineering**.

### UEEOS 9-Layer Architecture

\`\`\`
┌──────────────────────────────────────────┐
│       Civilization Management Layer      │  ← L9: Planetary coordination
├──────────────────────────────────────────┤
│       National Intelligence Layer        │  ← L6: Government & policy AI
├──────────────────────────────────────────┤
│      Enterprise Intelligence Layer       │  ← L4: Organizational AI
├──────────────────────────────────────────┤
│       Agentic Reasoning Layer            │  ← L5: Multi-model reasoning
├──────────────────────────────────────────┤
│     Multi-Agent Coordination Layer       │  ← L4: Agent orchestration
├──────────────────────────────────────────┤
│         Knowledge Graph Layer            │  ← L3: Organizational memory
├──────────────────────────────────────────┤
│          Digital Twin Layer              │  ← L3: Simulation & foresight
├──────────────────────────────────────────┤
│       Event & Data Fabric Layer          │  ← L2: Real-time data flows
├──────────────────────────────────────────┤
│         Physical Systems Layer           │  ← L1: Infrastructure
└──────────────────────────────────────────┘
\`\`\``,
      },
      {
        title: "UEEOS Core Components",
        content: `Each UEEOS layer has specific functional components:

### Executive Copilot
Strategic planning and decision support for C-suite and leadership.
- Synthesizes enterprise-wide intelligence
- Generates strategic options and impact analysis
- Provides real-time situational awareness

### Agentic Reasoning Layer
Multi-model reasoning and orchestration.
- Coordinates multiple AI models for complex reasoning
- Manages long-horizon tasks and planning
- Handles tool use and external system integration

### Enterprise Knowledge Graph
The organizational memory and intelligence backbone.
- Stores relationships between all enterprise concepts
- Enables semantic search and traceability
- Powers RAG for AI systems

### Digital Twin Platform
Simulation and foresight for enterprises and beyond.
- Creates virtual replicas of real-world systems
- Enables "what-if" scenario analysis
- Supports predictive decision-making

### Governance Engine
Adaptive policies and controls.
- Enforces alignment between agent behavior and enterprise policy
- Monitors for goal drift and misalignment
- Provides audit trails and explainability

### Evolution Engine
Continuous optimization and capability innovation.
- Monitors performance metrics across all layers
- Identifies opportunities for structural improvement
- Manages the enterprise adaptive cycle

### Civilization Intelligence Platform
The highest-level component — coordinates:
Food, Water, Energy, Health, Education, Economy, Environment, Science

This represents UEEOS deployed at civilizational scale — the long-term vision.`,
      },
    ],
    quiz: [
      {
        question:
          "What is the relationship between GTAS Reference Architecture and UEEOS?",
        options: [
          "They are the same thing with different names",
          "GTAS is the science/theory; UEEOS is the engineering/implementation",
          "UEEOS is a subset of the GTAS architecture",
          "GTAS is built on top of UEEOS",
        ],
        answer: 1,
        explanation:
          "GTAS Reference Architecture is the theoretical framework defining how adaptive systems should be structured. UEEOS is the engineering implementation — the practical operating system that operationalizes GTAS from enterprises to civilizations.",
      },
      {
        question: "Which UEEOS component stores 'relationships between all enterprise concepts' and enables semantic search?",
        options: [
          "Digital Twin Platform",
          "Governance Engine",
          "Enterprise Knowledge Graph",
          "Agentic Reasoning Layer",
        ],
        answer: 2,
        explanation:
          "The Enterprise Knowledge Graph is the organizational memory backbone that stores relationships between enterprise concepts, enables semantic search, provides traceability, and powers RAG for AI systems.",
      },
      {
        question:
          "In the GTAS 7-layer architecture, which layer contains 'Policies, Constraints, and Compliance'?",
        options: [
          "Purpose Layer",
          "Governance Layer",
          "Intelligence Layer",
          "Knowledge Layer",
        ],
        answer: 1,
        explanation:
          "The Governance Layer (Layer 6) defines Policies, Constraints, and Compliance — the mechanisms that maintain alignment between all lower layers and the organization's objectives.",
      },
    ],
  },
  {
    id: 9,
    slug: "maturity-model",
    title: "GTAS Maturity Model",
    subtitle: "G0 to G10: The Adaptive Maturity Ladder",
    description:
      "Master the 11-level GTAS Maturity Model from G0 (Static) to G10 (Civilization-Adaptive), and learn how to assess and advance any system's adaptive maturity.",
    icon: "📊",
    color: "from-purple-600 to-violet-700",
    gradientFrom: "#9333ea",
    gradientTo: "#7c3aed",
    estimatedTime: "24 min",
    keyTakeaways: [
      "G0-G10 represents 11 levels of adaptive maturity from static to civilization-adaptive",
      "Most enterprises today operate at G1-G4",
      "G5-G7 is the AI-native enterprise zone enabled by GenAI and Agentic AI",
      "G8-G10 requires UEEOS-level coordination across multiple systems",
    ],
    sections: [
      {
        title: "Overview: The Maturity Ladder",
        content: `The GTAS Maturity Model provides a **structured progression framework** for assessing and improving adaptive capability.

\`\`\`
G10  Civilization-Adaptive   ← Design sustainable civilizations
G9   Ecosystem-Adaptive      ← Coordinate across ecosystems
G8   Self-Evolving           ← Create new capabilities
G7   Self-Healing            ← Autonomous failure recovery
G6   Self-Organizing         ← Dynamic structural reconfiguration
G5   Self-Optimizing         ← Automatic performance improvement
─────────────────────────────── AI-Native Threshold
G4   Predictive              ← Anticipate future conditions
G3   Learning                ← Improve through experience
G2   Feedback-Controlled     ← Use feedback mechanisms
G1   Reactive                ← Respond after events
G0   Static                  ← No adaptation
\`\`\`

**The AI-Native Threshold** at G5 represents the inflection point enabled by advanced AI — where systems begin to improve and coordinate themselves rather than relying on constant human intervention.`,
      },
      {
        title: "G0-G2: Foundation Levels",
        content: `### G0: Static System
**Definition:** No adaptation whatsoever. Completely fixed structure and behavior.

**Characteristics:**
- Predefined rules only — no response to feedback
- Cannot detect or respond to environmental change
- Will fail when environmental conditions deviate from design assumptions

**Examples:** Simple machines, legacy batch systems, rigid bureaucracies

---

### G1: Reactive System
**Definition:** Responds to events *after* they occur.

**Characteristics:**
- Event-triggered responses
- No anticipation of future states
- Rules-based but reactive rather than proactive

**Examples:** Manual customer support, break-fix IT operations, reactive healthcare

---

### G2: Feedback-Controlled System
**Definition:** Uses feedback mechanisms to maintain performance.

**Characteristics:**
- Measures performance against target
- Corrects deviations through feedback loops
- Self-regulating within designed parameters

**Examples:** Thermostats, PID controllers, SLA monitoring with automated alerts, basic process control`,
      },
      {
        title: "G3-G5: Learning to Self-Optimizing",
        content: `### G3: Learning System
**Definition:** Improves behavior through accumulated experience.

**Characteristics:**
- Retains lessons from past events
- Updates rules and responses based on outcomes
- Performance improves over time

**Examples:** Organizations with retrospectives, ML models updated with new data, adaptive supply chains

---

### G4: Predictive System
**Definition:** Anticipates future conditions and acts proactively.

**Characteristics:**
- Uses historical patterns to forecast future states
- Takes action before problems occur
- Maintains scenario models

**Examples:** Predictive maintenance, financial forecasting, predictive risk management, demand forecasting in retail

---

### G5: Self-Optimizing System
**Definition:** Automatically improves its own performance without human intervention.

**Characteristics:**
- Continuously adjusts parameters to maximize objective functions
- Identifies and eliminates performance inefficiencies autonomously
- Humans set objectives; system finds optimal path

**Examples:** Auto-scaling cloud infrastructure, algorithmic trading, AI-powered FinOps, recommendation engines

**This is the AI-Native threshold.** Achieving G5 requires mature AI capabilities deployed at an organizational level.`,
      },
      {
        title: "G6-G8: Self-Organizing to Self-Evolving",
        content: `### G6: Self-Organizing System
**Definition:** Dynamically reconfigures its own structure in response to environmental change.

**Characteristics:**
- Structure changes without external direction
- New coordination patterns emerge as needed
- Components self-assign to needed roles

**Examples:** Kubernetes workload scheduling, stigmergic robotic systems, swarm intelligence, adaptive organizational design

---

### G7: Self-Healing System
**Definition:** Automatically detects and recovers from failures without human intervention.

**Characteristics:**
- Continuous self-monitoring
- Autonomous diagnosis and repair
- Graceful degradation under partial failure

**Examples:** Chaos engineering platforms, self-healing microservices, immune systems, regenerative biological processes

---

### G8: Self-Evolving System
**Definition:** Creates fundamentally new capabilities not present in the original design.

**Characteristics:**
- Generates structural innovations
- Novel solutions emerge from internal processes
- Capabilities compound over time

**Examples:** Deep research AI systems, self-modifying code (experimental), biological evolution, innovative corporate cultures

**This level requires what GTAS calls Self-Transformation** — the tenth adaptive capability. Few human organizations operate at G8.`,
      },
      {
        title: "G9-G10: Ecosystem and Civilization Adaptive",
        content: `### G9: Ecosystem-Adaptive System
**Definition:** Optimizes not just itself but across the entire ecosystem of interconnected systems.

**Characteristics:**
- Understands its role in a larger ecosystem
- Actions consider cross-system effects
- Co-evolution with partner systems

**Examples:** Adaptive supply networks, smart cities, resilient national economies, multi-nation climate coordination

---

### G10: Civilization-Adaptive System (Planetary-Adaptive)
**Definition:** Supports long-term societal sustainability at civilizational or planetary scale.

**Characteristics:**
- Coordinates across all human systems
- Optimizes for multi-century time horizons
- Integrates planetary boundaries into all decisions

**Examples:** A functioning UEEOS, planetary governance systems, Kardashev Type I civilization management

---

### Where Are We Now?
| Context | Current Level |
|---|---|
| Most enterprises | G1-G3 |
| Advanced digital companies | G3-G4 |
| AI-native companies (2025) | G4-G5 |
| Leading AI labs | G5-G6 |
| Current human civilization | G4-G5 (fragmented) |
| GTAS Grand Challenge target | G8-G10 |`,
      },
    ],
    quiz: [
      {
        question:
          "What is the 'AI-Native Threshold' in the GTAS Maturity Model?",
        options: [
          "G3 — when a system starts learning",
          "G4 — when a system becomes predictive",
          "G5 — when a system becomes self-optimizing",
          "G6 — when a system becomes self-organizing",
        ],
        answer: 2,
        explanation:
          "G5 (Self-Optimizing) is the AI-Native Threshold — the point where AI capabilities are mature enough that systems improve and coordinate themselves without constant human intervention.",
      },
      {
        question:
          "What distinguishes G7 (Self-Healing) from G6 (Self-Organizing)?",
        options: [
          "G7 involves performance optimization; G6 involves structural changes",
          "G7 involves autonomous recovery from failures; G6 involves dynamic structural reconfiguration",
          "G7 is for enterprises; G6 is for nations",
          "They are equivalent — different names for the same capability",
        ],
        answer: 1,
        explanation:
          "G6 (Self-Organizing) is about dynamic structural reconfiguration — new coordination patterns emerging. G7 (Self-Healing) is about autonomous detection and recovery from failures — the system diagnosing and repairing itself.",
      },
      {
        question: "What level do most enterprises operate at today?",
        options: ["G0-G1", "G1-G3", "G4-G5", "G6-G7"],
        answer: 1,
        explanation:
          "Most enterprises today operate at G1-G3 (Reactive to Learning). Advanced digital companies reach G3-G4 (Learning to Predictive). AI-native companies are pushing toward G5 (Self-Optimizing).",
      },
    ],
  },
  {
    id: 10,
    slug: "gtas-vs-agi-asi",
    title: "GTAS vs AGI vs ASI",
    subtitle: "Intelligence vs. Adaptation",
    description:
      "Understand the critical distinction between GTAS (General Adaptation), AGI (General Intelligence), and ASI (Super Intelligence) — and why adaptation is a broader framework than intelligence.",
    icon: "🤖",
    color: "from-indigo-600 to-blue-600",
    gradientFrom: "#4f46e5",
    gradientTo: "#2563eb",
    estimatedTime: "20 min",
    keyTakeaways: [
      "The most important distinction: AGI/ASI focus on intelligence; GTAS focuses on adaptation",
      "Intelligence is only ONE component of adaptation",
      "AGI ⊂ GTAS and ASI ⊂ GTAS — they are capabilities within GTAS",
      "A highly intelligent system can still fail without governance, resilience, and coordination",
    ],
    sections: [
      {
        title: "The Fundamental Distinction",
        content: `**The most important distinction:**

> **AGI and ASI focus on intelligence. GTAS focuses on adaptation.**

Intelligence is only one component of adaptation.

A highly intelligent system can still fail if it cannot:
- Govern itself
- Coordinate resources
- Learn collectively
- Remain resilient
- Evolve within changing environments

The hierarchy of scope:

\`\`\`
Intelligence
      ⊂
Adaptive Intelligence
      ⊂
Adaptive Systems
      ⊂
Adaptive Ecosystems
      ⊂
Adaptive Civilizations
\`\`\`

or equivalently:
\`\`\`
AGI → ASI → (capabilities within) GTAS
\`\`\`

Not because GTAS is "more intelligent," but because it is a **broader explanatory framework**.`,
      },
      {
        title: "What is AGI?",
        content: `**Artificial General Intelligence (AGI)** is defined as:

> An artificial system capable of performing most cognitive tasks at or above human level.

**AGI capabilities include:**
- Reasoning and planning
- Learning and transfer learning
- Language understanding and generation
- Problem solving across domains
- Tool use and multi-step execution

**AGI focuses on:** \`Mind\` rather than \`System\`

**AGI Architecture:**
\`\`\`
Environment
    ↓
Perception
    ↓
Reasoning
    ↓
Planning
    ↓
Action
\`\`\`

**Key question AGI asks:**
> How can we build a machine that thinks like a human?

**AGI analogy:**
\`\`\`
A Genius Human
\`\`\`

AGI is brilliant, but brilliance alone does not guarantee survival.`,
      },
      {
        title: "What is ASI?",
        content: `**Artificial Super Intelligence (ASI)** is defined as:

> Intelligence that significantly exceeds the best human minds across virtually all domains.

**ASI capabilities might include:**
- Scientific discovery far beyond human pace
- Engineering solutions to unsolved problems
- Strategic and governance capabilities
- Creative problem-solving across all domains

**ASI focuses on:** \`Maximum Intelligence\` rather than \`Maximum Adaptability\`

An ASI may be extraordinarily intelligent yet still operate inside a poorly designed civilization — intelligence alone does not solve governance, economics, or civilizational resilience.

**ASI analogy:**
\`\`\`
A Civilization of Geniuses
compressed into one intelligence.
\`\`\``,
      },
      {
        title: "What GTAS Asks Instead",
        content: `**GTAS asks a fundamentally different question:**

> What makes **any system** survive, adapt, evolve, and remain viable?

This includes:
- Humans and AI systems
- Organizations and institutions
- Economies and markets
- Nations and governments
- Civilizations and ecosystems

**GTAS studies:** \`Adaptation\` not merely \`Intelligence\`

**GTAS analogy:**
\`\`\`
The Science Explaining
Why Civilizations Rise,
Adapt,
and Survive
— regardless of who or what is intelligent.
\`\`\`

**The decisive comparison:**

| | Intelligence | Adaptation |
|---|---|---|
| Short-term | High intelligence wins | Adequate adaptation wins |
| Long-term | Insufficient alone | Determinative |
| Under stress | May fail catastrophically | Core capability |
| At civilization scale | Necessary but not sufficient | Necessary and sufficient |`,
      },
      {
        title: "The Summary Comparison Table",
        content: `| Dimension | GTAS | AGI | ASI |
|---|---|---|---|
| **Primary Goal** | Universal Adaptation | Human-Level Intelligence | Beyond-Human Intelligence |
| **Scope** | Systems, Organizations, Economies, Civilizations | Individual Intelligence | Individual/Collective Intelligence |
| **Focus** | Survival, Evolution, Sustainability | Cognition | Hyper-Cognition |
| **Unit of Analysis** | Adaptive Systems | Intelligent Agents | Superintelligent Agents |
| **Time Horizon** | Decades to Millennia | Near-Term to Long-Term | Long-Term |
| **Success Metric** | Viability | Human-Level Performance | Beyond-Human Performance |
| **Includes Governance** | Yes (Core) | Limited | Unknown |
| **Includes Economics** | Yes (Core) | Usually No | Possible |
| **Includes Civilization Design** | Yes (Core) | No | No |
| **Includes Planetary Systems** | Yes | No | No |
| **Includes Intelligence** | Yes | Core | Core |

**Winner by dimension:**
- Intelligence → ASI wins
- Adaptation → GTAS wins
- Governance → GTAS wins
- Resilience → GTAS wins
- Scope → GTAS wins`,
      },
      {
        title: "AGI and ASI Inside GTAS",
        content: `GTAS positions AGI and ASI as **subsystems** within the broader adaptive framework:

**AGI inside GTAS:**
\`\`\`
Adaptive System
│
├── Intelligence (AGI)
├── Governance
├── Learning
├── Economics
├── Resilience
├── Coordination
└── Evolution
\`\`\`

Therefore: **AGI ⊂ GTAS**

**ASI inside GTAS:**
\`\`\`
Adaptive Civilization
│
├── Humans
├── Institutions
├── Economies
├── Ecosystems
├── ASI
└── Governance
\`\`\`

Therefore: **ASI ⊂ GTAS**

GTAS treats ASI as a powerful adaptive capability — not the whole system.

### The Long-Term Evolution (2030-2100)
\`\`\`
Machine Learning → Generative AI → Agentic AI
    → AGI → ASI → Collective Intelligence
        → Adaptive Civilizations → Planetary Intelligence
            → GTAS-Based Civilization Systems
\`\`\`

This suggests AGI and ASI are not endpoints — **they are stages** in the evolution of adaptive intelligence.`,
      },
    ],
    quiz: [
      {
        question: "Why does GTAS have broader scope than AGI?",
        options: [
          "GTAS is more intelligent than AGI",
          "GTAS focuses on adaptation, of which intelligence is only one component",
          "GTAS was developed after AGI",
          "GTAS only applies to organizations while AGI applies to individuals",
        ],
        answer: 1,
        explanation:
          "GTAS focuses on adaptation — which requires governance, resilience, coordination, economics, and evolution in addition to intelligence. AGI focuses only on the intelligence component. Intelligence ⊂ Adaptation.",
      },
      {
        question: "What is the GTAS analogy for ASI?",
        options: [
          "A genius human",
          "A scientific civilization",
          "A civilization of geniuses compressed into one intelligence",
          "A planetary governance system",
        ],
        answer: 2,
        explanation:
          "GTAS uses the analogy: AGI = A Genius Human; ASI = A Civilization of Geniuses compressed into one intelligence; GTAS = The Science Explaining Why Civilizations Rise, Adapt, and Survive.",
      },
      {
        question:
          "According to GTAS, what is the relationship between AGI and GTAS?",
        options: [
          "AGI ⊃ GTAS (GTAS is a subset of AGI)",
          "AGI = GTAS (they are equivalent)",
          "AGI ⊂ GTAS (AGI is a subset of GTAS)",
          "AGI and GTAS are unrelated frameworks",
        ],
        answer: 2,
        explanation:
          "AGI ⊂ GTAS — AGI is a subsystem (the intelligence component) within the broader adaptive system. GTAS includes governance, economics, resilience, coordination, and evolution in addition to intelligence.",
      },
    ],
  },
  {
    id: 11,
    slug: "genai-gtas",
    title: "GenAI & GTAS",
    subtitle: "The Intelligence Amplifier",
    description:
      "Understand how current Generative AI systems augment GTAS — as an Intelligence Amplifier across the 10 augmentation areas — and what the AI roadmap to 2040 looks like through the GTAS lens.",
    icon: "🧠",
    color: "from-pink-600 to-rose-500",
    gradientFrom: "#db2777",
    gradientTo: "#f43f5e",
    estimatedTime: "22 min",
    keyTakeaways: [
      "GenAI is an Intelligence Amplifier within GTAS — not a complete adaptive system",
      "GenAI excels at Information, Knowledge, and Intelligence layers; weak at Governance and Civilization layers",
      "10 augmentation areas span from Information Acquisition to Evolutionary Design",
      "The next frontier (2026-2040) converges toward Collective Adaptive Intelligence",
    ],
    sections: [
      {
        title: "GenAI's Position in GTAS",
        content: `Current Generative AI systems are **not yet fully adaptive systems** in the GTAS sense. They are best understood as **Adaptive Intelligence Components** that amplify sensing, reasoning, learning, coordination, and decision-making within larger adaptive systems.

\`\`\`
GTAS = Complete Adaptive System
GenAI = Intelligence Amplifier
\`\`\`

The relationship is analogous to:
\`\`\`
Human Civilization : Human Brain
Enterprise          : Executive Team
Adaptive System     : GenAI
\`\`\`

GenAI provides **cognition** but not **complete adaptation**.

**What GenAI currently enhances:**
\`\`\`
Sense → Understand → Decide → Learn ✓ (strong)
Act → Coordinate → Optimize         ✓ (emerging, Agentic AI)
Self-Evolution                       ✗ (future)
\`\`\``,
      },
      {
        title: "GenAI Layer vs GTAS Capability Mapping",
        content: `| GTAS Layer | Current GenAI Contribution | Maturity |
|---|---|---|
| Physical Layer | Minimal | Very Low |
| Information Layer | Very High — universal data ingestion | Very High |
| Knowledge Layer | Very High — synthesis and generation | Very High |
| Intelligence Layer | Very High — reasoning and planning | High |
| Governance Layer | Emerging — policy drafting, compliance | Medium |
| Adaptation Layer | Emerging — continuous learning, agents | Medium |
| Civilization Layer | Experimental — policy simulation | Low |

**GenAI Capability Maturity:**

| GTAS Capability | GenAI Maturity |
|---|---|
| Information Processing | Very High |
| Knowledge Synthesis | Very High |
| Reasoning | High |
| Planning | High |
| Coordination | Medium |
| Autonomous Action | Medium |
| Learning | Medium |
| Self-Optimization | Low |
| Self-Evolution | Very Low |
| Civilization Governance | Experimental |`,
      },
      {
        title: "10 GenAI Augmentation Areas in GTAS",
        content: `### 1. Information Acquisition (Sense)
GenAI acts as a **universal information translator**, ingesting: documents, databases, images, audio, video, sensor feeds, enterprise telemetry.

*Before:* Data → Human Analysis
*After:* Data → AI Understanding

### 2. Knowledge Creation (Understand)
GenAI's strongest capability: summarize, categorize, explain, correlate, and synthesize across millions of information sources.

### 3. Enterprise Memory
Through RAG, Vector Databases, and Knowledge Graphs, GenAI becomes the **enterprise long-term memory** — preserving policies, decisions, standards, architecture patterns, and lessons learned.

### 4. Decision Support
AI evaluates thousands of scenarios faster than humans for: strategic planning, architecture reviews, risk analysis, investment decisions, FinOps, portfolio management.

### 5. Adaptive Learning
Personalized tutoring for humans, organizational retrospective analysis, and continuous model improvement.`,
      },
      {
        title: "10 GenAI Augmentation Areas (Continued)",
        content: `### 6. Collective Intelligence
GenAI enables: Human + AI + Knowledge Graph + Agents forming a **collective intelligence network**.

Enterprise = Employees + Enterprise Data + Agentic AI + Knowledge Graph → **Enterprise Collective Intelligence**

### 7. Multi-Agent Systems
Single LLM = One Brain
Multi-Agent System = Many Specialized Brains working together

Example: Enterprise Architect Agent + FinOps Agent + Security Agent + Product Agent + Compliance Agent + Governance Agent → **Adaptive Enterprise**

### 8. Simulation and Foresight
AI enables: scenario generation, strategic planning, digital twins, policy simulation, risk forecasting.

Nation-State Simulation: Economy + Climate + Energy + Population + Technology → Future Scenarios → **Adaptive Governance**

### 9. Autonomous Coordination
Emerging: AI coordinating workflows, teams, systems, cloud infrastructure autonomously.

### 10. Evolutionary Design
AI assisting with architecture generation, product design, software design, scientific hypothesis generation, innovation discovery.

Future: Architect + Architecture Agent + Simulation Agent + Governance Agent → generating thousands of alternatives automatically.`,
      },
      {
        title: "What Current GenAI Cannot Yet Do",
        content: `Several critical GTAS capabilities remain beyond current GenAI:

| Limitation | GTAS Implication |
|---|---|
| **No True Self-Awareness** | Cannot build robust self-models for metacognition |
| **No Long-Term Autonomous Goals** | Cannot independently sustain goals over years |
| **No Open-Ended Evolution** | Cannot continuously redesign itself |
| **No Genuine Agency** | Executes delegated objectives, doesn't create civilization-scale objectives |
| **Limited Embodied Adaptation** | Robotics lags biological systems significantly |

These limitations map directly to the gap between G4 (current AI capability) and G8-G10 (GTAS Grand Challenge target).`,
      },
      {
        title: "The Adaptive Intelligence Stack & Next Frontier",
        content: `For GTAS-based enterprises and civilizations, GenAI becomes one layer in the **Adaptive Intelligence Stack**:

\`\`\`
┌──────────────────────────────────────┐
│         Purpose & Mission            │
├──────────────────────────────────────┤
│         Governance Agents            │
├──────────────────────────────────────┤
│         Executive Copilot            │
├──────────────────────────────────────┤
│       Agentic Reasoning Layer        │
├──────────────────────────────────────┤
│         Multi-Agent System           │
├──────────────────────────────────────┤
│      Enterprise Knowledge Graph      │
├──────────────────────────────────────┤
│        Digital Twin Platform         │
├──────────────────────────────────────┤
│        Data & Event Fabric           │
├──────────────────────────────────────┤
│          Enterprise Systems          │
└──────────────────────────────────────┘
\`\`\`

### The Next Frontier (2026-2040)

Research converges toward:
1. AI-Native Enterprises
2. Autonomous Organizations
3. Self-Optimizing Software Factories
4. Cognitive Digital Twins
5. Multi-Agent Governance Systems
6. Planetary Intelligence Platforms
7. Scientific Discovery Engines
8. Civilization Operating Systems
9. Adaptive Economic Networks
10. **Universal Evolution Engine Operating Systems (UEEOS)**

Today's GenAI is the **cognitive substrate** — what allows adaptive systems to perceive, reason, coordinate, and evolve at unprecedented speed and scale. The long-term trajectory is toward **Collective Adaptive Intelligence** where humans, AI agents, institutions, knowledge graphs, digital twins, and governance function as a unified adaptive system.`,
      },
    ],
    quiz: [
      {
        question:
          "Which GTAS layer does current GenAI contribute to most strongly?",
        options: [
          "Governance Layer",
          "Information and Knowledge Layers",
          "Civilization Layer",
          "Adaptation Layer",
        ],
        answer: 1,
        explanation:
          "GenAI's contribution is 'Very High' at both the Information Layer (universal data ingestion) and Knowledge Layer (synthesis and generation). Its contribution to Governance is 'Emerging' and Civilization is 'Experimental'.",
      },
      {
        question:
          "What is the key limitation that prevents current GenAI from being classified as a full GTAS adaptive system?",
        options: [
          "It lacks intelligence",
          "It cannot process images",
          "It lacks governance, resilience, coordination, and self-evolution capabilities",
          "It cannot learn from feedback",
        ],
        answer: 2,
        explanation:
          "GenAI is an Intelligence Amplifier, not a complete adaptive system. A GTAS-complete system requires governance, resilience, coordination, economics, and self-evolution — capabilities GenAI currently lacks at meaningful maturity levels.",
      },
      {
        question:
          "In GTAS terms, what is the long-term trajectory that GenAI and human systems are converging toward?",
        options: [
          "Artificial General Intelligence (AGI)",
          "Artificial Super Intelligence (ASI)",
          "Collective Adaptive Intelligence via UEEOS",
          "Robotic physical systems",
        ],
        answer: 2,
        explanation:
          "The GTAS long-term trajectory is toward Collective Adaptive Intelligence — where humans, AI agents, institutions, knowledge graphs, digital twins, and governance function as a unified adaptive system, ultimately realized as UEEOS.",
      },
    ],
  },
  {
    id: 12,
    slug: "universal-laws",
    title: "7 Universal Laws",
    subtitle: "UAST — Universal Adaptive Systems Theory",
    description:
      "Explore the 7 Universal Laws of UAST/UASRF — the formal laws governing all adaptive systems from atoms to civilizations, and the Universal Adaptive Hierarchy from Physics (L0) to Cosmic Intelligence (L10).",
    icon: "⚖️",
    color: "from-teal-600 to-green-600",
    gradientFrom: "#0d9488",
    gradientTo: "#16a34a",
    estimatedTime: "20 min",
    keyTakeaways: [
      "7 Universal Laws govern all adaptive systems across all scales",
      "The Core Axiom: every sustainable system adapts faster than it degrades",
      "Co-Evolution (Law 7) means no system adapts in isolation",
      "The Universal Hierarchy extends from L0 (Physics) to L10 (Cosmic Intelligence)",
    ],
    sections: [
      {
        title: "UASRF Core Axiom",
        content: `**Universal Adaptive Systems Theory (UAST/UASRF)** is a meta-theory of adaptation that unifies principles from Systems Theory, Cybernetics, Complexity Science, Information Theory, Evolutionary Biology, AI, Economics, and Network Science.

**Core Axiom:**

> Every sustainable system exists because it can continuously adapt to environmental change **faster than it degrades**.

**Universal System Equation:**

\`\`\`
System Viability = f(Information, Adaptation, Learning, Energy, Resilience, Time)
\`\`\`

Where:
| Variable | Meaning |
|---|---|
| Information | Ability to sense reality |
| Adaptation | Ability to respond |
| Learning | Ability to improve |
| Energy | Ability to sustain operations |
| Resilience | Ability to survive shocks |
| Time | Evolutionary duration |

Note the alignment with GTAS's Universal Adaptive Equation V(t) = f(I, L, E, R, G, T).`,
      },
      {
        title: "Law 1: Information Acquisition",
        content: `**Systems survive only if they can observe reality.**

Information is the raw material of adaptation. Without the ability to sense the environment, no response is possible.

**Examples across scales:**
- **Cells:** Sense chemical gradients and molecular signals
- **Animals:** Sense predators, food, and environmental conditions
- **Companies:** Sense market dynamics, competitor moves, customer needs
- **Nations:** Sense geopolitical threats, economic trends, population dynamics
- **AI Systems:** Sense data streams, training signals, real-world feedback

**Implication:** Any investment in sensing capability — sensors, market intelligence, satellite data, social listening — is a direct investment in adaptive capacity.`,
      },
      {
        title: "Law 2: Feedback Regulation",
        content: `**All adaptive systems operate through feedback loops.**

This law derives directly from cybernetic principles (Wiener, Ashby). Feedback is the mechanism by which systems regulate themselves.

**Examples:**
- Thermostat (negative feedback → temperature control)
- Human nervous system (pain signals → behavioral correction)
- Markets (price signals → supply/demand correction)
- Ecosystems (predator/prey dynamics → population balance)
- AI reinforcement learning (reward signals → policy improvement)

**Two types:**
- **Negative feedback** — corrective, stabilizing (maintains homeostasis)
- **Positive feedback** — amplifying, destabilizing (drives growth and collapse)

**Implication:** Systems without feedback loops cannot self-regulate and will eventually drift to failure.`,
      },
      {
        title: "Law 3 & 4: Learning/Memory and Self-Organization",
        content: `### Law 3: Learning and Memory
**Adaptive systems must preserve successful adaptations.**

Memory is what transforms experience into improved future performance. Without memory, each challenge is encountered fresh — no cumulative learning is possible.

| System | Memory Type |
|---|---|
| Cell | DNA |
| Organism | Brain/Neural networks |
| Enterprise | Knowledge base, culture |
| Civilization | Culture, science, institutions |
| AI | Model weights |

---

### Law 4: Self-Organization
**Order emerges without central control.**

Examples:
- Ant colonies (complex foraging patterns from simple rules)
- Immune systems (adaptive immune response without central direction)
- Open source communities (coordinated development without hierarchical control)
- Cities (complex social and economic patterns from millions of individual decisions)
- Internet (global information network from local routing decisions)

**Implication:** The most resilient adaptive systems do not rely on central control — they self-organize through local interactions.`,
      },
      {
        title: "Law 5, 6 & 7: Evolution, Resilience, Co-Evolution",
        content: `### Law 5: Evolution Through Variation and Selection
**Adaptive systems continuously:**
1. Generate alternatives (variation)
2. Test alternatives (selection)
3. Retain successful patterns (retention)

This is the universal optimization algorithm behind biological evolution, scientific progress, innovation ecosystems, and machine learning.

---

### Law 6: Resilience Through Diversity
**Monocultures fail.**

Systems become resilient through:
- **Redundancy** — multiple paths to the same outcome
- **Diversity** — different components, strategies, and approaches
- **Decentralization** — distributed rather than centralized structure
- **Modularity** — loosely coupled components that can fail independently

Examples: Biodiversity in ecosystems, diversified investment portfolios, distributed cloud architectures, multi-vendor supply chains.

---

### Law 7: Co-Evolution
**No system evolves independently.**

Every adaptive system exists within an ecosystem of interacting systems:
\`\`\`
Predator ↔ Prey
Enterprise ↔ Market
Nation ↔ World Order
AI ↔ Human Society
\`\`\`

Co-evolution means: when you adapt, you change the environment that others are adapting to. Your adaptation triggers their adaptation, which triggers yours again.

**Implication:** Adaptive strategy must account for the responses of other adaptive agents — you are never adapting in a static environment.`,
      },
      {
        title: "Five Adaptive Functions & Universal Hierarchy",
        content: `### Five Adaptive Functions
Every adaptive system performs:

\`\`\`
Environment
     ↓
   Sense      ← Detect changes in environment
     ↓
 Understand   ← Build models of reality
     ↓
  Decide      ← Select effective responses
     ↓
    Act        ← Execute in the environment
     ↓
  Feedback
     ↓
  Learn       ← Update models and responses
     ↺ (repeat)
\`\`\`

---

### Universal Adaptive Hierarchy (L0-L10)

\`\`\`
L0   Physics           ← Matter and energy
L1   Chemistry         ← Molecular networks
L2   Biology           ← Cells and organisms
L3   Organisms         ← Complex multicellular life
L4   Human Cognition   ← Mind, culture, language
L5   Organizations     ← Enterprises, institutions
L6   Economies         ← Markets, industries
L7   Nations           ← Governments, states
L8   Civilizations     ← Human civilization
L9   Planetary Systems ← Earth-scale coordination
L10  Cosmic Intelligence ← Universal scale
\`\`\`

Each level:
- **Inherits** lower-level rules
- **Develops** new adaptive capabilities
- **Creates** new emergent properties

**Ultimate Vision:** UASRF aims to explain how systems from atoms → molecules → cells → organisms → societies → economies → nations → civilizations → planetary intelligence emerge, evolve, and sustain themselves.`,
      },
    ],
    quiz: [
      {
        question: "What does the UASRF Core Axiom state?",
        options: [
          "Every system has a purpose",
          "Every sustainable system exists because it adapts faster than it degrades",
          "Information precedes intelligence",
          "All systems exhibit emergent behavior",
        ],
        answer: 1,
        explanation:
          "The UASRF Core Axiom: 'Every sustainable system exists because it can continuously adapt to environmental change faster than it degrades.' This is the speed-based framing of adaptive viability.",
      },
      {
        question: "Law 6 states that resilience comes through diversity. Which of the following is NOT listed as a resilience mechanism?",
        options: ["Redundancy", "Centralization", "Modularity", "Decentralization"],
        answer: 1,
        explanation:
          "Centralization is the opposite of a resilience mechanism — it creates single points of failure. Resilience comes through Redundancy, Diversity, Decentralization, and Modularity.",
      },
      {
        question:
          "What makes Law 7 (Co-Evolution) strategically significant?",
        options: [
          "It shows that systems can evolve without external influence",
          "It means your adaptation changes the environment that others adapt to — triggering their adaptation",
          "It proves that evolution is always random",
          "It implies that all systems reach the same end state",
        ],
        answer: 1,
        explanation:
          "Co-Evolution means no system adapts in a static environment — your adaptation changes the context for other adaptive agents, who then adapt, which changes your context again. Strategy must account for these mutual adaptation loops.",
      },
    ],
  },
];

export const getModuleBySlug = (slug: string): Module | undefined => {
  return modules.find((m) => m.slug === slug);
};

export const getModuleById = (id: number): Module | undefined => {
  return modules.find((m) => m.id === id);
};
