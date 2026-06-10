export interface Concept {
  name: string;
  definition: string;
  example: string;
}

export interface OntologyEntity {
  name: string;
  description: string;
  properties: string[];
}

export interface OntologyRelationship {
  from: string;
  to: string;
  type: string;
  description: string;
}

export interface KGNode {
  id: string;
  label: string;
  type: "core" | "concept" | "application" | "theory" | "tool";
}

export interface KGEdge {
  from: string;
  to: string;
  label: string;
}

export interface ResearchPaper {
  title: string;
  authors: string;
  year: number;
  journal: string;
  significance: string;
}

export interface BestPractice {
  title: string;
  description: string;
  steps: string[];
}

export interface ChecklistCategory {
  category: string;
  items: string[];
}

export interface Book {
  title: string;
  author: string;
  year: number;
  description: string;
  difficulty: "Introductory" | "Intermediate" | "Advanced";
}

export interface DisciplineRelationship {
  discipline: string;
  slug: string;
  type: "Builds on" | "Contributes to" | "Complements" | "Is synthesized by" | "Informs";
  description: string;
}

export interface Interdependency {
  pair: [string, string];
  description: string;
  gtasImplication: string;
}

export interface Discipline {
  id: number;
  slug: string;
  name: string;
  shortName: string;
  gtasDomain: string;
  icon: string;
  color: string;
  tagline: string;
  coreQuestion: string;
  context: {
    overview: string;
    history: string;
    relevanceToGTAS: string;
    keyContributors: string[];
  };
  concepts: Concept[];
  ontology: {
    overview: string;
    entities: OntologyEntity[];
    relationships: OntologyRelationship[];
  };
  knowledgeGraph: {
    description: string;
    nodes: KGNode[];
    edges: KGEdge[];
  };
  relationships: DisciplineRelationship[];
  interdependencies: Interdependency[];
  researchPapers: ResearchPaper[];
  bestPractices: BestPractice[];
  checklist: ChecklistCategory[];
  books: Book[];
}

export const disciplines: Discipline[] = [
  // ─── DOMAIN 1: SYSTEMS SCIENCE ─────────────────────────────────────
  {
    id: 1,
    slug: "systems-science",
    name: "Systems Science",
    shortName: "Systems",
    gtasDomain: "GTAS-BOK Domain 1",
    icon: "⚙️",
    color: "from-violet-600 to-indigo-700",
    tagline: "Understanding wholes, not just parts",
    coreQuestion: "How do components interact to produce system-level behavior that transcends the sum of parts?",
    context: {
      overview: "Systems Science is the transdisciplinary study of systems — collections of interacting components organized toward a purpose. It seeks principles that apply across physical, biological, social, and engineered systems, unifying knowledge fragmented across disciplines by identifying common structural and behavioral patterns.",
      history: "Ludwig von Bertalanffy proposed General Systems Theory (GST) in the 1940s-50s as a challenge to reductionism — arguing that emergent system properties cannot be understood by studying parts in isolation. Jay Forrester at MIT developed System Dynamics in the 1950s-60s, creating the mathematical language of stocks, flows, and feedback for modeling complex systems. Peter Checkland's Soft Systems Methodology (1981) extended the approach to ill-defined human activity systems. Donella Meadows synthesized the field accessibly in 'Thinking in Systems' (2008). The Santa Fe Institute's work on Complex Adaptive Systems in the 1980s-90s brought evolutionary and computational perspectives into the systems canon.",
      relevanceToGTAS: "Systems Science is GTAS's structural backbone. The Universal Adaptive Equation V(t) = f(I,L,E,R,G,T) is itself a systems model. GTAS's 7-layer Reference Architecture is a systems architecture. The concept of nested adaptive hierarchies (L0–L10) is pure systems thinking. Without Systems Science, GTAS would lack the formal vocabulary to define what it studies. GTAS is, at its core, a systems science of adaptation.",
      keyContributors: [
        "Ludwig von Bertalanffy — General Systems Theory",
        "Jay Forrester — System Dynamics, Industrial Dynamics",
        "Donella Meadows — Thinking in Systems, Limits to Growth",
        "Peter Checkland — Soft Systems Methodology",
        "Peter Senge — Fifth Discipline, Learning Organizations",
        "Russell Ackoff — Systems Thinking, purposeful systems",
        "Stafford Beer — Management Cybernetics, VSM",
        "Norbert Wiener — Cybernetics (overlapping foundation)",
      ],
    },
    concepts: [
      {
        name: "System",
        definition: "A set of interacting or interdependent components forming an integrated whole, with a defined boundary separating it from its environment, organized toward a purpose.",
        example: "A corporation is a system: employees (components), reporting structures (relationships), market (environment), profit/mission (purpose).",
      },
      {
        name: "Emergence",
        definition: "Properties or behaviors that arise from the interactions among components but are not present in any individual component — the whole is more than the sum of its parts.",
        example: "Consciousness emerges from neurons; none of which are conscious. Market prices emerge from millions of trades; no single buyer sets the price.",
      },
      {
        name: "Feedback Loop",
        definition: "A circular causal chain where a system's output influences its own future input. Balancing (negative) loops seek equilibrium; reinforcing (positive) loops drive growth or collapse.",
        example: "Population growth (reinforcing): more people → more births → more people. Body temperature (balancing): too hot → sweating → cooling → normal.",
      },
      {
        name: "Stocks and Flows",
        definition: "Stocks are accumulations within a system (inventory, population, knowledge, money). Flows are rates that change stocks over time (births, deaths, learning, spending).",
        example: "A reservoir (stock) fills via rainfall inflow (flow) and drains via evaporation and release (flows). Understanding system behavior requires modeling both stocks and flows.",
      },
      {
        name: "System Boundary",
        definition: "The conceptual or physical line separating a system from its environment. Boundary definition is a modeling choice that determines what is inside (endogenous) vs. outside (exogenous).",
        example: "An enterprise boundary includes employees and processes but typically excludes customers. Redrawing this boundary to include customers creates an ecosystem model.",
      },
      {
        name: "System Dynamics",
        definition: "A methodology for understanding the nonlinear behavior of complex systems over time, using feedback loops, stocks, flows, and time delays as core modeling primitives.",
        example: "Forrester's Urban Dynamics (1969) modeled city growth and decline using interlocking feedback loops of housing, employment, and population.",
      },
      {
        name: "Hierarchy",
        definition: "Systems are nested — every system is a subsystem of a larger system and is itself composed of subsystems. Hierarchy organizes complexity into manageable levels.",
        example: "Organelle → Cell → Tissue → Organ → Organism → Population → Ecosystem → Biosphere.",
      },
      {
        name: "Holism vs. Reductionism",
        definition: "Reductionism understands wholes by breaking them into parts. Holism insists on studying the whole, because emergent properties are lost in decomposition.",
        example: "Reductionist medicine treats symptoms in isolated organs. Systems medicine treats the patient as an integrated whole with interconnected physiological feedback loops.",
      },
    ],
    ontology: {
      overview: "The Systems Science ontology defines the fundamental types of entities, relationships, and properties that constitute any system. This ontology provides the vocabulary for GTAS's formal description of adaptive systems.",
      entities: [
        { name: "System", description: "Organized whole with boundary, components, and purpose", properties: ["boundary", "purpose", "state", "behavior"] },
        { name: "Component", description: "Element or subsystem within a system", properties: ["type", "function", "connections"] },
        { name: "Interface", description: "Point of interaction between components or between system and environment", properties: ["protocol", "capacity", "latency"] },
        { name: "Boundary", description: "Demarcation separating system from environment", properties: ["permeability", "selectivity", "openness"] },
        { name: "Environment", description: "Context external to the system boundary", properties: ["variability", "threat-level", "resource-availability"] },
        { name: "Stock", description: "Accumulation of a quantity within the system", properties: ["level", "unit", "min", "max"] },
        { name: "Flow", description: "Rate of change of a stock over time", properties: ["rate", "direction", "control-variable"] },
        { name: "Feedback Loop", description: "Circular causal chain affecting system state", properties: ["type (balancing/reinforcing)", "delay", "strength"] },
        { name: "State", description: "Configuration of all stocks at a point in time", properties: ["variables", "timestamp", "stability"] },
        { name: "Emergent Property", description: "Characteristic arising from component interactions, not present in any single component", properties: ["level", "conditions-for-emergence"] },
      ],
      relationships: [
        { from: "Component", to: "System", type: "part-of", description: "Components compose the system" },
        { from: "System", to: "Environment", type: "embedded-in", description: "Every system exists within an environment" },
        { from: "Component", to: "Component", type: "interacts-with", description: "Components interact through interfaces" },
        { from: "Flow", to: "Stock", type: "changes", description: "Flows increase or decrease stocks" },
        { from: "Stock", to: "Flow", type: "regulates", description: "Stock levels influence flow rates via feedback" },
        { from: "System", to: "EmergentProperty", type: "exhibits", description: "Interaction produces emergent properties" },
        { from: "System", to: "System", type: "is-subsystem-of", description: "Systems nest hierarchically" },
      ],
    },
    knowledgeGraph: {
      description: "The Systems Science knowledge graph shows the lineage from General Systems Theory through System Dynamics to Complex Adaptive Systems, leading into GTAS.",
      nodes: [
        { id: "gst", label: "General Systems Theory", type: "theory" },
        { id: "sd", label: "System Dynamics", type: "tool" },
        { id: "ssm", label: "Soft Systems", type: "tool" },
        { id: "cas", label: "Complex Adaptive Systems", type: "theory" },
        { id: "emergence", label: "Emergence", type: "concept" },
        { id: "feedback", label: "Feedback Loops", type: "concept" },
        { id: "hierarchy", label: "Hierarchy", type: "concept" },
        { id: "stocks", label: "Stocks & Flows", type: "concept" },
        { id: "gtas", label: "GTAS", type: "application" },
        { id: "cybernetics", label: "Cybernetics", type: "theory" },
      ],
      edges: [
        { from: "gst", to: "sd", label: "formalizes" },
        { from: "gst", to: "ssm", label: "extends to social" },
        { from: "gst", to: "hierarchy", label: "introduces" },
        { from: "sd", to: "stocks", label: "uses" },
        { from: "sd", to: "feedback", label: "models" },
        { from: "gst", to: "cas", label: "evolves into" },
        { from: "cas", to: "emergence", label: "explains" },
        { from: "cybernetics", to: "feedback", label: "formalizes" },
        { from: "gst", to: "gtas", label: "provides structure" },
        { from: "sd", to: "gtas", label: "provides dynamics" },
        { from: "cas", to: "gtas", label: "provides complexity" },
      ],
    },
    relationships: [
      { discipline: "Cybernetics", slug: "cybernetics", type: "Complements", description: "Cybernetics provides the control and feedback theory that Systems Science describes structurally. Together they explain both structure and dynamics." },
      { discipline: "Complexity Science", slug: "complexity-science", type: "Is synthesized by", description: "Complexity Science grew from Systems Science but added computation, evolution, and emergence at unprecedented scales." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Informs", description: "Senge's Learning Organization directly applies System Dynamics to organizational behavior." },
      { discipline: "Information Science", slug: "information-science", type: "Complements", description: "Information flows are the signals that drive system feedback — the two are inseparable in practice." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Builds on", description: "Evolutionary Science applies the system perspective to long-term structural change via selection pressure." },
    ],
    interdependencies: [
      { pair: ["Systems Science", "Cybernetics"], description: "Systems Science defines structure; Cybernetics defines control mechanisms. Together they explain adaptive regulation.", gtasImplication: "The GTAS feedback axiom (Axiom 3) requires both the systems structural vocabulary and cybernetic control theory." },
      { pair: ["Systems Science", "Complexity Science"], description: "Complex Adaptive Systems are the most important class of adaptive systems in GTAS — requiring both system structure and emergence theory.", gtasImplication: "GTAS hierarchy levels 4-8 are complex adaptive systems requiring both disciplines." },
      { pair: ["Systems Science", "Information Science"], description: "Information flows within systems are the mechanism by which systems sense and respond. Systems cannot be adaptive without information infrastructure.", gtasImplication: "The 'I' variable in V(t) = f(I,L,E,R,G,T) is fundamentally an information systems concept." },
    ],
    researchPapers: [
      { title: "An Outline of General System Theory", authors: "Ludwig von Bertalanffy", year: 1950, journal: "The British Journal for the Philosophy of Science", significance: "Founding paper of General Systems Theory — argues for universal principles across all sciences" },
      { title: "Industrial Dynamics", authors: "Jay W. Forrester", year: 1961, journal: "MIT Press (book)", significance: "Established System Dynamics methodology for modeling industrial and social systems" },
      { title: "The Limits to Growth", authors: "Meadows, Meadows, Randers, Behrens", year: 1972, journal: "Universe Books", significance: "World's first large-scale system dynamics simulation of global resource constraints — still relevant" },
      { title: "Systems Thinking, Systems Practice", authors: "Peter Checkland", year: 1981, journal: "Wiley", significance: "Introduced Soft Systems Methodology for handling human activity systems with ill-defined problems" },
      { title: "Leverage Points: Places to Intervene in a System", authors: "Donella Meadows", year: 1999, journal: "Whole Earth Magazine", significance: "Defines 12 levels of system leverage — from parameters (weakest) to paradigm shifts (strongest)" },
      { title: "Thinking in Systems", authors: "Donella Meadows", year: 2008, journal: "Chelsea Green (book)", significance: "Most accessible synthesis of systems thinking — essential primer for all GTAS students" },
    ],
    bestPractices: [
      {
        title: "Causal Loop Diagrams (CLDs)",
        description: "Map causal relationships and feedback loops before building quantitative models. Identify reinforcing and balancing loops.",
        steps: ["Identify key variables", "Draw causal arrows (+/-)", "Identify loop types (R/B)", "Identify dominant loops", "Look for delays", "Identify intervention points"],
      },
      {
        title: "Stock-and-Flow Modeling",
        description: "Convert CLDs into quantitative models. Define stocks (what accumulates) and flows (rates of change).",
        steps: ["Identify all stocks", "Define inflows and outflows for each stock", "Write rate equations", "Set initial conditions", "Simulate and validate against known behavior", "Conduct sensitivity analysis"],
      },
      {
        title: "Archetypes Recognition",
        description: "Use Senge's system archetypes to recognize common behavioral patterns before modeling from scratch.",
        steps: ["Learn the 8 archetypes (Fixes that Fail, Shifting the Burden, etc.)", "Pattern-match your situation to known archetypes", "Apply archetype-specific leverage point", "Validate with stakeholders", "Document for organizational learning"],
      },
      {
        title: "Boundary Critique",
        description: "Explicitly define and challenge your system boundary. Boundary choices determine what explanations are possible.",
        steps: ["Draw initial boundary", "List elements excluded and why", "Ask what would change if boundary were expanded", "Include at minimum one boundary iteration", "Document boundary assumptions"],
      },
    ],
    checklist: [
      {
        category: "System Identification",
        items: [
          "Have you defined the system boundary explicitly?",
          "Have you identified all major components and their roles?",
          "Have you mapped the key interfaces between components?",
          "Have you identified the system's purpose or function?",
          "Have you characterized the environment the system operates in?",
        ],
      },
      {
        category: "Feedback Analysis",
        items: [
          "Have you identified all major feedback loops?",
          "Have you classified loops as reinforcing (R) or balancing (B)?",
          "Have you identified significant time delays?",
          "Have you determined which feedback loops dominate system behavior?",
          "Have you identified potential for oscillation or instability?",
        ],
      },
      {
        category: "Stocks and Flows",
        items: [
          "Have you identified all major stocks (accumulations)?",
          "Have you identified all inflows and outflows for each stock?",
          "Have you identified the control variables that regulate flows?",
          "Have you checked for conservation laws (what must balance)?",
          "Have you verified stock levels are within sustainable ranges?",
        ],
      },
      {
        category: "Emergent Properties",
        items: [
          "Have you identified emergent properties that cannot be explained by components alone?",
          "Have you looked for nonlinear behavior (thresholds, tipping points)?",
          "Have you tested the system under perturbation to reveal robustness?",
          "Have you identified potential collapse scenarios?",
          "Have you mapped leverage points for system change?",
        ],
      },
    ],
    books: [
      { title: "Thinking in Systems", author: "Donella H. Meadows", year: 2008, description: "The definitive accessible introduction to systems thinking. Covers feedback loops, stocks and flows, and leverage points with elegant clarity.", difficulty: "Introductory" },
      { title: "The Fifth Discipline", author: "Peter M. Senge", year: 1990, description: "Applies systems thinking to organizations. Introduces the five disciplines of the Learning Organization including system archetypes.", difficulty: "Introductory" },
      { title: "An Introduction to General Systems Thinking", author: "Gerald M. Weinberg", year: 1975, description: "Rigorous but readable introduction to systems thinking principles. Strong on mental model development.", difficulty: "Intermediate" },
      { title: "Industrial Dynamics", author: "Jay W. Forrester", year: 1961, description: "The founding text of System Dynamics. Dense but comprehensive treatment of feedback modeling for industrial systems.", difficulty: "Advanced" },
      { title: "Limits to Growth", author: "Meadows, Meadows, Randers", year: 1972, description: "Landmark study applying system dynamics to global resource limits. Foundational for civilizational systems thinking.", difficulty: "Intermediate" },
      { title: "The Systems View of Life", author: "Fritjof Capra & Pier Luigi Luisi", year: 2014, description: "Comprehensive synthesis of systems thinking across biology, cognition, society, and ecology.", difficulty: "Intermediate" },
    ],
  },

  // ─── DOMAIN 2: CYBERNETICS ──────────────────────────────────────────
  {
    id: 2,
    slug: "cybernetics",
    name: "Cybernetics",
    shortName: "Cybernetics",
    gtasDomain: "GTAS-BOK Domain 2",
    icon: "🎛️",
    color: "from-blue-600 to-cyan-600",
    tagline: "The science of control and communication in systems",
    coreQuestion: "How do systems regulate themselves through information and feedback to maintain purpose under disturbance?",
    context: {
      overview: "Cybernetics is the scientific study of regulatory systems, their structures, constraints, and possibilities. It focuses on feedback loops, control mechanisms, and communication as the means by which systems maintain stability and achieve goals. Originally focused on machines and animals, it has expanded into social systems, organizations, and AI.",
      history: "Norbert Wiener coined the term 'cybernetics' in his 1948 book, drawing from the Greek word for 'steersman.' He and colleagues including John von Neumann and Claude Shannon developed the field during WWII while working on anti-aircraft targeting systems. William Ross Ashby formalized the mathematical foundations, most importantly the Law of Requisite Variety (1956). Stafford Beer applied cybernetics to management through his Viable System Model (VSM, 1972), revolutionizing organizational design. Second-order cybernetics (Heinz von Foerster, 1970s) introduced the observer into the system — recognizing that all observation is itself a cybernetic process.",
      relevanceToGTAS: "Cybernetics is the control-theoretic heart of GTAS. GTAS Axiom 3 (Feedback: Action → Outcome → Feedback → Adaptation) is a cybernetic axiom. The Universal Adaptive Cycle's Learn phase is cybernetic feedback. The G (Governance) variable in V(t) = f(I,L,E,R,G,T) is implemented through cybernetic control mechanisms. Beer's VSM directly inspired the GTAS 7-layer Reference Architecture and the UEEOS nested intelligence layers.",
      keyContributors: [
        "Norbert Wiener — Cybernetics (1948), feedback control theory",
        "William Ross Ashby — Law of Requisite Variety, Introduction to Cybernetics",
        "Stafford Beer — Viable System Model, Brain of the Firm",
        "Heinz von Foerster — Second-order cybernetics, observer in the system",
        "Claude Shannon — Information theory (informational substrate of cybernetics)",
        "John von Neumann — Self-reproducing automata, cellular automata",
        "Gregory Bateson — Cybernetics of mind and ecology",
        "Gordon Pask — Conversation Theory, adaptive teaching systems",
      ],
    },
    concepts: [
      {
        name: "Feedback",
        definition: "The process by which information about a system's output is returned to influence future inputs. Negative (balancing) feedback corrects deviations; positive (reinforcing) feedback amplifies change.",
        example: "A thermostat measures room temperature (output), compares to setpoint (goal), and activates/deactivates heating (input correction) — classic negative feedback.",
      },
      {
        name: "Law of Requisite Variety",
        definition: "Ashby's fundamental law: to control a system, the controller must have at least as many possible states as the system being controlled. Variety must match variety.",
        example: "A chess AI must have at least as many strategic responses as its opponent has moves. A risk management system must model at least as many failure modes as the system can exhibit.",
      },
      {
        name: "Homeostasis",
        definition: "The tendency of a system to maintain internal stability through active regulatory processes that counteract external perturbations.",
        example: "Human body temperature is maintained within ±0.5°C through sweating, shivering, and blood flow regulation — despite external temperature ranging −40°C to +50°C.",
      },
      {
        name: "Viable System Model (VSM)",
        definition: "Beer's recursive organizational model defining the minimum structure necessary for a system to be autonomous and viable. Five systems (Operations, Coordination, Control, Intelligence, Policy) operate recursively at every organizational level.",
        example: "A corporation's R&D division (System 4 Intelligence) scans the external environment; Finance (System 3 Control) manages internal operations; CEO (System 5 Policy) defines identity and purpose.",
      },
      {
        name: "Black Box",
        definition: "A system or component whose internal workings are opaque — only inputs and outputs are observable. Essential for modeling complex systems without full internal knowledge.",
        example: "The human brain is a black box for most purposes: we observe inputs (stimuli) and outputs (behavior) without direct access to neural-level processing.",
      },
      {
        name: "Second-Order Cybernetics",
        definition: "The study of cybernetics applied to itself — recognizing that observers are part of the systems they observe. Leads to constructivism: all knowledge is constructed by an observing system.",
        example: "A management consultant cannot be fully external to the organization they study — their observation changes the system, and their models reflect their own cognitive structures.",
      },
      {
        name: "Variety",
        definition: "The number of distinct states a system can occupy. A system's ability to control its environment is limited by its variety relative to environmental variety.",
        example: "A lock with 4 tumblers has variety = 10^4 = 10,000 states. A key has variety 1 (one specific configuration). The keymaker must match lock variety precisely.",
      },
    ],
    ontology: {
      overview: "The cybernetics ontology defines the entities involved in control and communication processes across all adaptive systems.",
      entities: [
        { name: "Controller", description: "Entity that regulates another entity (the plant) by manipulating its inputs", properties: ["variety", "response-speed", "goal-state"] },
        { name: "Plant", description: "The system being controlled — responds to controller inputs", properties: ["state", "dynamics", "disturbance-susceptibility"] },
        { name: "Sensor", description: "Mechanism for observing system state and feeding information back to controller", properties: ["resolution", "latency", "noise"] },
        { name: "Actuator", description: "Mechanism by which controller interventions are applied to the plant", properties: ["range", "precision", "response-time"] },
        { name: "Goal/Setpoint", description: "The target state the controller attempts to maintain or achieve", properties: ["value", "tolerance", "priority"] },
        { name: "Error Signal", description: "The difference between current state and goal state — drives corrective action", properties: ["magnitude", "sign", "rate-of-change"] },
        { name: "Feedback Channel", description: "The pathway through which output information returns to influence input", properties: ["delay", "bandwidth", "noise"] },
        { name: "Disturbance", description: "External perturbation that pushes the system away from its goal state", properties: ["magnitude", "frequency", "predictability"] },
        { name: "Environment", description: "External context generating disturbances and constraining possible states", properties: ["variety", "volatility", "predictability"] },
      ],
      relationships: [
        { from: "Controller", to: "Actuator", type: "operates", description: "Controller manipulates plant via actuators" },
        { from: "Sensor", to: "Controller", type: "informs", description: "Sensor observations feed error signal to controller" },
        { from: "Plant", to: "Sensor", type: "is-observed-by", description: "Plant state is read by sensors" },
        { from: "Actuator", to: "Plant", type: "modifies", description: "Actuators change plant state" },
        { from: "Environment", to: "Plant", type: "disturbs", description: "Environmental disturbances push plant from goal" },
        { from: "Controller", to: "Goal", type: "pursues", description: "Controller actions are directed toward the goal state" },
        { from: "ErrorSignal", to: "Controller", type: "triggers", description: "Error magnitude drives controller response" },
      ],
    },
    knowledgeGraph: {
      description: "Cybernetics knowledge graph from Wiener's foundations through Ashby's laws to Beer's organizational applications and modern AI control systems.",
      nodes: [
        { id: "wiener", label: "Wiener's Cybernetics", type: "theory" },
        { id: "ashby", label: "Requisite Variety", type: "concept" },
        { id: "vsm", label: "Viable System Model", type: "tool" },
        { id: "feedback", label: "Feedback Control", type: "concept" },
        { id: "homeostasis", label: "Homeostasis", type: "concept" },
        { id: "variety", label: "Variety Theory", type: "concept" },
        { id: "2ndorder", label: "2nd-Order Cybernetics", type: "theory" },
        { id: "control", label: "Control Theory", type: "tool" },
        { id: "gtas_gov", label: "GTAS Governance", type: "application" },
        { id: "rl", label: "Reinforcement Learning", type: "application" },
      ],
      edges: [
        { from: "wiener", to: "feedback", label: "formalizes" },
        { from: "wiener", to: "homeostasis", label: "explains" },
        { from: "ashby", to: "variety", label: "introduces" },
        { from: "variety", to: "vsm", label: "applied in" },
        { from: "vsm", to: "gtas_gov", label: "inspires" },
        { from: "feedback", to: "control", label: "underpins" },
        { from: "feedback", to: "rl", label: "underpins" },
        { from: "wiener", to: "2ndorder", label: "evolves to" },
        { from: "ashby", to: "gtas_gov", label: "law constrains" },
        { from: "control", to: "gtas_gov", label: "implements" },
      ],
    },
    relationships: [
      { discipline: "Systems Science", slug: "systems-science", type: "Builds on", description: "Cybernetics requires the structural vocabulary of systems science — components, boundaries, and feedback loops are systems-theoretic concepts." },
      { discipline: "Information Science", slug: "information-science", type: "Complements", description: "Shannon's information theory and Wiener's cybernetics developed simultaneously and are deeply intertwined — information is the signal in the feedback channel." },
      { discipline: "Intelligence Science", slug: "intelligence-science", type: "Informs", description: "All AI learning algorithms are fundamentally cybernetic — they use feedback (error signals, rewards) to drive parameter updates." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Contributes to", description: "Beer's VSM is the direct cybernetic model of organizational design — hierarchical control with requisite variety at every level." },
      { discipline: "Governance Science", slug: "governance-science", type: "Informs", description: "Governance mechanisms are cybernetic regulators — laws and policies are setpoints; enforcement is the feedback control mechanism." },
    ],
    interdependencies: [
      { pair: ["Cybernetics", "Information Science"], description: "The feedback channel requires information. Shannon's entropy determines the channel's capacity to transmit the error signal reliably.", gtasImplication: "GTAS Axiom 4 (No Information = No Adaptation) is a joint claim of cybernetics and information science." },
      { pair: ["Cybernetics", "Intelligence Science"], description: "AI systems are cybernetic machines — gradient descent is negative feedback on prediction error. Reinforcement learning is cybernetic control under uncertainty.", gtasImplication: "The GTAS Intelligence Layer implements cybernetic feedback at cognitive scale." },
      { pair: ["Cybernetics", "Governance Science"], description: "Governance is cybernetic regulation at the social and institutional scale — policies are setpoints, enforcement is control action, elections are feedback.", gtasImplication: "GTAS's G variable (Governance) in V(t) = f(I,L,E,R,G,T) is operationalized through cybernetic governance mechanisms." },
    ],
    researchPapers: [
      { title: "Cybernetics: Control and Communication in the Animal and the Machine", authors: "Norbert Wiener", year: 1948, journal: "MIT Press", significance: "The founding text of cybernetics — defines feedback, information, and control as universal phenomena" },
      { title: "An Introduction to Cybernetics", authors: "W. Ross Ashby", year: 1956, journal: "Chapman & Hall", significance: "Rigorous mathematical treatment including the Law of Requisite Variety — essential for any serious student" },
      { title: "Brain of the Firm", authors: "Stafford Beer", year: 1972, journal: "Allen Lane", significance: "Applies cybernetics to management using the brain as the organizational model. Introduces VSM." },
      { title: "Diagnosing the System for Organizations", authors: "Stafford Beer", year: 1985, journal: "Wiley", significance: "Practical guide to applying the VSM. Most actionable cybernetics text for organizational practitioners." },
      { title: "Understanding Computers and Cognition", authors: "Winograd & Flores", year: 1986, journal: "Ablex", significance: "Connects cybernetics, phenomenology, and AI — foundational for cognitive cybernetics" },
    ],
    bestPractices: [
      {
        title: "VSM Organizational Diagnosis",
        description: "Apply Beer's Viable System Model to diagnose organizational dysfunction by checking all five systems for structural integrity.",
        steps: ["Map System 1 (Operations) — what produces value?", "Check System 2 (Coordination) — how are conflicts resolved?", "Audit System 3 (Control) — is performance monitored?", "Examine System 4 (Intelligence) — what is the environmental scanning?", "Verify System 5 (Policy) — is identity and direction clear?", "Check recursion — does each subsystem also have all 5 systems?"],
      },
      {
        title: "Variety Engineering",
        description: "Apply the Law of Requisite Variety to design control systems. Either increase controller variety or reduce system variety until they match.",
        steps: ["Map all possible states of the system being controlled", "Map all possible responses of the controller", "Identify variety gap (system variety − controller variety)", "Either add control mechanisms to increase controller variety", "Or simplify/standardize system to reduce its variety", "Validate that variety balance holds under stress conditions"],
      },
      {
        title: "Feedback Loop Design",
        description: "Design explicit negative feedback loops with appropriate delays and gains for each critical control objective.",
        steps: ["Define the goal state (setpoint)", "Define the sensor (how goal state is measured)", "Define the error signal computation", "Design the control law (proportional, integral, derivative)", "Set appropriate loop gain and delay compensation", "Test stability under realistic disturbance scenarios"],
      },
    ],
    checklist: [
      {
        category: "Feedback Integrity",
        items: [
          "Is there a clear goal/setpoint for each critical system variable?",
          "Is there a sensor capable of measuring actual vs. target state?",
          "Is the feedback delay short enough to maintain stability?",
          "Is the control gain calibrated to avoid oscillation?",
          "Are reinforcing feedback loops bounded by balancing loops?",
        ],
      },
      {
        category: "Requisite Variety",
        items: [
          "Does the management/control system have variety matching the system it manages?",
          "Have all significant failure modes been identified and modeled?",
          "Is there a mechanism to add variety when unexpected states occur?",
          "Does the governance layer have sufficient states to respond to environmental variety?",
          "Are variety-reducing mechanisms (standardization, rules) balanced against adaptability needs?",
        ],
      },
      {
        category: "VSM Viability",
        items: [
          "Are all five VSM systems present at the organizational level being assessed?",
          "Does each operational unit also have its own viable system structure?",
          "Is there clear separation between System 3 (Control) and System 4 (Intelligence)?",
          "Is System 5 (Policy) clearly defining organizational identity and purpose?",
          "Are algedonic channels (urgent signals bypassing hierarchy) functioning?",
        ],
      },
    ],
    books: [
      { title: "Cybernetics: Control and Communication in the Animal and the Machine", author: "Norbert Wiener", year: 1948, description: "The original — still essential for understanding the philosophical foundations of control theory and feedback.", difficulty: "Advanced" },
      { title: "An Introduction to Cybernetics", author: "W. Ross Ashby", year: 1956, description: "Rigorous, mathematical, and surprisingly readable. The Law of Requisite Variety is derived here with full rigor.", difficulty: "Intermediate" },
      { title: "Brain of the Firm", author: "Stafford Beer", year: 1972, description: "Beer's masterpiece applying cybernetics to organizations using the brain as the architectural model.", difficulty: "Intermediate" },
      { title: "Diagnosing the System for Organizations", author: "Stafford Beer", year: 1985, description: "The practical VSM guide. More accessible than Brain of the Firm. Essential for practitioners.", difficulty: "Introductory" },
      { title: "Steps to an Ecology of Mind", author: "Gregory Bateson", year: 1972, description: "Extends cybernetics into anthropology, ecology, and mind. Essential for understanding second-order cybernetics.", difficulty: "Advanced" },
    ],
  },

  // ─── DOMAIN 3: COMPLEXITY SCIENCE ──────────────────────────────────
  {
    id: 3,
    slug: "complexity-science",
    name: "Complexity Science",
    shortName: "Complexity",
    gtasDomain: "GTAS-BOK Domain 3",
    icon: "🌀",
    color: "from-emerald-600 to-teal-600",
    tagline: "Where order emerges from chaos",
    coreQuestion: "How does structured order, intelligence, and adaptation emerge from the local interactions of simple agents?",
    context: {
      overview: "Complexity Science studies systems with many interacting parts that exhibit emergent behavior not predictable from individual components. It spans physics, biology, economics, computer science, and social science — unified by the study of how local interactions produce global patterns, how systems self-organize, and how adaptation occurs without central control.",
      history: "Complexity Science coalesced at the Santa Fe Institute (SFI), founded in 1984 by physicists and economists including Murray Gell-Mann and Kenneth Arrow. Ilya Prigogine's Nobel Prize work on dissipative structures (1977) showed how order emerges far from thermodynamic equilibrium. Stuart Kauffman's NK fitness landscapes and Boolean networks (1969-1993) modeled self-organization in biology. John Holland formalized Complex Adaptive Systems (CAS) and invented genetic algorithms (1975). Per Bak introduced Self-Organized Criticality (1987), explaining why natural systems hover at the edge of phase transitions. The field gained public prominence through Mitchell Waldrop's 'Complexity' (1992).",
      relevanceToGTAS: "Complexity Science provides the theoretical foundation for understanding why adaptive systems — especially at levels L4-L8 — exhibit behaviors that cannot be designed top-down. GTAS Axiom 10 (Emergence) is a complexity claim. The GTAS hierarchy of adaptive systems reflects the complexity science concept that higher-level systems exhibit emergent properties beyond lower levels. GTAS's position that intelligence itself is an emergent property of adaptive systems is rooted in complexity science.",
      keyContributors: [
        "Ilya Prigogine — Dissipative structures, order from chaos (Nobel 1977)",
        "Stuart Kauffman — NK fitness landscapes, self-organized complexity",
        "John Holland — Complex Adaptive Systems, genetic algorithms, emergence",
        "Per Bak — Self-Organized Criticality (SOC)",
        "Murray Gell-Mann — Santa Fe Institute co-founder, complex adaptive systems",
        "Mitchell Waldrop — Complexity (1992), science communicator",
        "Stephen Wolfram — Cellular automata, computational complexity",
        "W. Brian Arthur — Increasing returns and complexity economics",
      ],
    },
    concepts: [
      {
        name: "Complex Adaptive System (CAS)",
        definition: "A system consisting of many interacting agents that adapt their behavior based on local interactions and feedback, producing emergent macro-level patterns not designed by any single agent.",
        example: "The global economy is a CAS: billions of individual decisions produce emergent phenomena like business cycles, market crashes, and innovation waves — not controlled by any central planner.",
      },
      {
        name: "Emergence",
        definition: "The arising of novel, coherent structures and behaviors at higher levels of organization that are not predictable from or reducible to the properties of lower-level components.",
        example: "Wetness is an emergent property of H₂O molecules. No single molecule is wet. Wetness only exists at the ensemble level through intermolecular interactions.",
      },
      {
        name: "Self-Organization",
        definition: "The spontaneous formation of ordered structures and patterns through local interactions, without external direction or central control.",
        example: "Termite colonies build complex mound structures through stigmergy — each termite follows simple rules responding to local cues, but no termite has a blueprint of the mound.",
      },
      {
        name: "Fitness Landscape",
        definition: "A mathematical abstraction representing the performance (fitness) of a system as a function of its configuration. Systems 'move' across the landscape through variation and selection.",
        example: "Kauffman's NK model: N genes, each affecting K others. Low K produces smooth landscapes (easy to optimize); high K produces rugged landscapes (many local optima — adaptation gets stuck).",
      },
      {
        name: "Self-Organized Criticality (SOC)",
        definition: "Per Bak's theory that complex systems naturally evolve toward a critical state — the boundary between order and chaos — where small perturbations can cause cascading events of all scales (power law distribution).",
        example: "Sandpiles: adding sand grain by grain, the pile evolves to a critical angle where occasional avalanches of all sizes occur. Earthquakes, forest fires, and stock market crashes follow similar power laws.",
      },
      {
        name: "Agent-Based Modeling",
        definition: "Computational modeling approach where individual agents follow simple rules; system-level behavior is observed as emergent output of many agent interactions.",
        example: "Schelling's segregation model: agents preferring only 30% same-race neighbors produce complete segregation — a more extreme emergent outcome than any agent intended.",
      },
      {
        name: "Edge of Chaos",
        definition: "The transition zone between rigid order and unpredictable chaos where complex adaptive systems exhibit maximum computational power and evolvability.",
        example: "Life exists at the edge of chaos: too much order = rigidity (no adaptation); too much chaos = dissolution. Complex organisms, markets, and ecosystems hover at this boundary.",
      },
      {
        name: "Power Law",
        definition: "A statistical relationship where the frequency of an event scales as a power of its magnitude — producing no characteristic scale and heavy tails of rare but large events.",
        example: "City size distributions follow a power law (Zipf's law): the largest city is ~twice the second largest, ~three times the third, etc. Also applies to earthquake magnitudes, word frequencies, and wealth.",
      },
    ],
    ontology: {
      overview: "Complexity Science ontology defines the fundamental entities and relationships in self-organizing adaptive systems.",
      entities: [
        { name: "Agent", description: "Local actor with internal state, rules, and capacity to interact with environment and other agents", properties: ["state", "rules", "fitness", "strategy"] },
        { name: "Environment", description: "Context in which agents operate — includes other agents and physical space", properties: ["topology", "resource-distribution", "dynamics"] },
        { name: "Interaction", description: "Exchange between agents or between agent and environment that drives state changes", properties: ["type", "strength", "locality"] },
        { name: "Emergent Pattern", description: "System-level structure arising from agent interactions", properties: ["scale", "stability", "predictability"] },
        { name: "Attractor", description: "State or set of states toward which a dynamical system tends to evolve from nearby initial conditions", properties: ["type (fixed/limit-cycle/strange)", "basin-size", "stability"] },
        { name: "Phase Transition", description: "Qualitative change in system behavior as a parameter crosses a critical threshold", properties: ["order-parameter", "critical-point", "universality-class"] },
        { name: "Fitness Landscape", description: "Mapping from system configuration to performance score", properties: ["dimensionality", "ruggedness", "peaks-count"] },
        { name: "Schema", description: "Holland's term for regularities detected by adaptive agents — building blocks of complexity", properties: ["generality", "fitness-contribution", "co-adaptation"] },
      ],
      relationships: [
        { from: "Agent", to: "Agent", type: "interacts-with", description: "Agents modify each other's state through local interactions" },
        { from: "Agent", to: "Environment", type: "modifies", description: "Agent actions change the environment (niche construction)" },
        { from: "Environment", to: "Agent", type: "selects", description: "Environmental pressure selects successful agent strategies" },
        { from: "Agent", to: "EmergentPattern", type: "produces", description: "Agent interactions generate emergent patterns" },
        { from: "EmergentPattern", to: "Agent", type: "constrains", description: "Emergent patterns feed back to constrain agent behavior" },
        { from: "PhaseTransition", to: "EmergentPattern", type: "creates", description: "Phase transitions produce qualitatively new emergent patterns" },
        { from: "FitnessLandscape", to: "Agent", type: "shapes-evolution-of", description: "Fitness landscape topology determines adaptation speed and quality" },
      ],
    },
    knowledgeGraph: {
      description: "Complexity Science knowledge graph from Prigogine's thermodynamic origins through Santa Fe Institute's CAS framework to applications in AI, economics, and GTAS.",
      nodes: [
        { id: "dissipative", label: "Dissipative Structures", type: "theory" },
        { id: "cas", label: "Complex Adaptive Systems", type: "theory" },
        { id: "emergence", label: "Emergence", type: "concept" },
        { id: "soc", label: "Self-Organized Criticality", type: "theory" },
        { id: "fitness", label: "Fitness Landscapes", type: "concept" },
        { id: "abm", label: "Agent-Based Modeling", type: "tool" },
        { id: "eoc", label: "Edge of Chaos", type: "concept" },
        { id: "powerlaw", label: "Power Laws", type: "concept" },
        { id: "evolution", label: "Evolutionary Science", type: "theory" },
        { id: "gtas_hierarchy", label: "GTAS Hierarchy", type: "application" },
      ],
      edges: [
        { from: "dissipative", to: "emergence", label: "explains thermodynamic" },
        { from: "cas", to: "emergence", label: "produces" },
        { from: "cas", to: "abm", label: "studied via" },
        { from: "cas", to: "eoc", label: "operates at" },
        { from: "soc", to: "powerlaw", label: "predicts" },
        { from: "fitness", to: "evolution", label: "models" },
        { from: "eoc", to: "gtas_hierarchy", label: "explains viability of" },
        { from: "cas", to: "gtas_hierarchy", label: "describes levels 4-8" },
        { from: "emergence", to: "gtas_hierarchy", label: "drives level transitions" },
      ],
    },
    relationships: [
      { discipline: "Systems Science", slug: "systems-science", type: "Builds on", description: "CAS extends systems science with evolutionary dynamics, agent heterogeneity, and emergence as active processes rather than static properties." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Complements", description: "Evolutionary dynamics are the primary adaptation mechanism in CAS. Complexity science provides the landscape; evolutionary science provides the traversal algorithm." },
      { discipline: "Intelligence Science", slug: "intelligence-science", type: "Informs", description: "Intelligence is an emergent property in CAS. Machine learning and deep learning are complexity phenomena — emergent generalization from training interactions." },
      { discipline: "Economics", slug: "economics", type: "Contributes to", description: "Complexity economics replaces the equilibrium paradigm with agents adapting to each other — markets as complex adaptive systems." },
      { discipline: "Civilization Systems", slug: "civilization-systems", type: "Informs", description: "Civilizational rise and fall, tipping points, and collapse dynamics are best explained through complexity science frameworks." },
    ],
    interdependencies: [
      { pair: ["Complexity Science", "Evolutionary Science"], description: "Evolution is the adaptation mechanism within complex fitness landscapes. Kauffman showed that NK landscapes determine whether evolution can find good solutions.", gtasImplication: "GTAS Axiom 7 (Evolution through Variation-Selection-Retention) operates within the complexity landscape defined by environmental ruggedness." },
      { pair: ["Complexity Science", "Economics"], description: "W. Brian Arthur's increasing returns and path dependence, and the Santa Fe Institute's economics program, showed markets as CAS rather than equilibrium systems.", gtasImplication: "The GTAS Economics domain requires complexity models to explain market dynamics, not just equilibrium price theory." },
      { pair: ["Complexity Science", "Intelligence Science"], description: "Deep learning's success is a complexity phenomenon: emergent generalization from billions of local parameter interactions. Intelligence itself emerges from neural CAS.", gtasImplication: "GTAS views intelligence as emergent (Axiom 10) — which is a direct complexity science claim." },
    ],
    researchPapers: [
      { title: "Dissipative Structures", authors: "Ilya Prigogine", year: 1977, journal: "Nobel Lecture", significance: "Shows how ordered structures (life, weather) emerge from far-from-equilibrium thermodynamic systems" },
      { title: "Emergence: From Chaos to Order", authors: "John Holland", year: 1998, journal: "Addison-Wesley", significance: "Holland's comprehensive treatment of emergence and CAS, introducing schemas, tags, and building blocks" },
      { title: "Self-Organized Criticality", authors: "Per Bak, Chao Tang, Kurt Wiesenfeld", year: 1987, journal: "Physical Review Letters", significance: "Introduces SOC — explains why natural systems produce power-law distributions of event magnitudes" },
      { title: "The Origins of Order", authors: "Stuart Kauffman", year: 1993, journal: "Oxford University Press", significance: "Comprehensive treatment of self-organization and selection in biological evolution using NK landscapes" },
      { title: "Increasing Returns and Path Dependence in the Economy", authors: "W. Brian Arthur", year: 1994, journal: "University of Michigan Press", significance: "Introduces complexity economics — path dependence, lock-in, and increasing returns replacing equilibrium" },
    ],
    bestPractices: [
      {
        title: "Agent-Based Modeling for Policy Design",
        description: "Use ABM to test policies in silico before real-world implementation — reveal emergent consequences of interventions.",
        steps: ["Define agent types and behavioral rules", "Set up environmental topology and resources", "Calibrate against known historical behavior", "Run policy scenarios", "Analyze emergent macro outcomes", "Identify unintended consequences", "Iterate model and policy"],
      },
      {
        title: "Fitness Landscape Analysis",
        description: "Map the fitness landscape of your problem to choose the right search strategy — smooth landscapes favor gradient descent; rugged landscapes require population-based search.",
        steps: ["Define configuration space (what varies)", "Define fitness metric (what you're optimizing)", "Sample landscape to estimate ruggedness", "Identify local optima that might trap search", "Choose search strategy (genetic algorithm, simulated annealing, or gradient descent)", "Test robustness of solution to perturbations"],
      },
      {
        title: "Edge-of-Chaos Calibration",
        description: "Keep organizational and technological systems tuned to the edge of chaos — neither too rigid (no adaptation) nor too chaotic (no coherence).",
        steps: ["Measure current order parameter (rigidity vs. flexibility)", "Identify signs of excessive rigidity (inability to respond to change)", "Identify signs of excessive chaos (incoherent output, no stable patterns)", "Tune control parameters (hierarchy, rules, autonomy) toward the critical zone", "Monitor system behavior for signs of phase transition", "Build early warning systems for catastrophic tipping points"],
      },
    ],
    checklist: [
      {
        category: "CAS Characteristics",
        items: [
          "Are agents heterogeneous (different strategies, capabilities)?",
          "Are agents interacting locally (not globally)?",
          "Is there a fitness/selection mechanism operating?",
          "Are there emergent phenomena not present in individual agents?",
          "Is the system operating near the edge of chaos (not frozen, not chaotic)?",
        ],
      },
      {
        category: "Emergence Assessment",
        items: [
          "Have emergent properties been identified and distinguished from component properties?",
          "Are there feedback mechanisms from emergent patterns back to agents?",
          "Have phase transitions and tipping points been identified?",
          "Is the system resilient to perturbations without collapsing order?",
          "Are power-law distributions present suggesting SOC dynamics?",
        ],
      },
    ],
    books: [
      { title: "Complexity: The Emerging Science at the Edge of Order and Chaos", author: "Mitchell Waldrop", year: 1992, description: "The best popular science account of the Santa Fe Institute and the birth of complexity science. Essential starting point.", difficulty: "Introductory" },
      { title: "At Home in the Universe", author: "Stuart Kauffman", year: 1995, description: "Kauffman's accessible treatment of self-organization and evolution. Introduces fitness landscapes with minimal math.", difficulty: "Introductory" },
      { title: "Hidden Order: How Adaptation Builds Complexity", author: "John Holland", year: 1995, description: "Holland's accessible introduction to CAS. Introduces the key concepts: tagging, internal models, building blocks.", difficulty: "Intermediate" },
      { title: "The Origins of Order", author: "Stuart Kauffman", year: 1993, description: "The rigorous treatment of self-organization and evolution. Technical but comprehensive.", difficulty: "Advanced" },
      { title: "Sync: How Order Emerges From Chaos", author: "Steven Strogatz", year: 2003, description: "Beautiful treatment of synchronization phenomena as a specific form of emergence.", difficulty: "Introductory" },
      { title: "Scale: The Universal Laws of Growth, Innovation, Sustainability", author: "Geoffrey West", year: 2017, description: "Power laws and scaling in cities, companies, and organisms — complexity at every scale.", difficulty: "Intermediate" },
    ],
  },

  // ─── DOMAIN 4: INFORMATION SCIENCE ─────────────────────────────────
  {
    id: 4,
    slug: "information-science",
    name: "Information Science",
    shortName: "Information",
    gtasDomain: "GTAS-BOK Domain 4",
    icon: "📡",
    color: "from-sky-600 to-blue-600",
    tagline: "The physics of knowledge and meaning",
    coreQuestion: "How is information created, measured, transmitted, stored, and transformed into knowledge and action?",
    context: {
      overview: "Information Science studies the properties, behavior, and flow of information — from its mathematical quantification through Shannon's entropy formula to its semantic interpretation, organizational management, and role in intelligence. It provides the theoretical foundation for understanding how adaptive systems acquire, process, and act on signals from their environment.",
      history: "Claude Shannon's 1948 paper 'A Mathematical Theory of Communication' founded information theory — defining information as reduction of uncertainty, quantified in bits. Simultaneously, Norbert Wiener connected information to cybernetic feedback. Andrey Kolmogorov extended information theory to computational complexity (1960s). Gregory Bateson defined information as 'a difference that makes a difference' (1972), connecting it to adaptive behavior. The knowledge management movement of the 1990s (Nonaka, Davenport) applied information science to organizational learning. The rise of big data, knowledge graphs, and LLMs in the 2000s-2020s transformed information science from a theoretical discipline into an engineering practice.",
      relevanceToGTAS: "Information is the 'I' in GTAS's Universal Adaptive Equation V(t) = f(I,L,E,R,G,T) — the single most fundamental variable. GTAS Axiom 4 states 'No Information = No Adaptation.' Every other adaptive capability depends on information: learning requires information about outcomes; prediction requires information about patterns; governance requires information about system state. Information Science provides the formal tools for understanding the I variable and the Information Layer of the GTAS Reference Architecture.",
      keyContributors: [
        "Claude Shannon — Mathematical Theory of Communication (1948)",
        "Norbert Wiener — Cybernetics and information as feedback",
        "Andrey Kolmogorov — Algorithmic information theory",
        "Gregory Bateson — Information as 'a difference that makes a difference'",
        "Peter Drucker — Knowledge worker and information economy",
        "Ikujiro Nonaka — Knowledge creation in organizations (SECI model)",
        "Thomas Davenport — Information ecology and knowledge management",
        "Tim Berners-Lee — World Wide Web as information infrastructure",
      ],
    },
    concepts: [
      {
        name: "Information Entropy (H)",
        definition: "Shannon's measure of uncertainty in a probability distribution: H = -Σ p(x) log₂ p(x). Higher entropy = more uncertainty = more information in the message that resolves it.",
        example: "A fair coin flip has H = 1 bit (maximum uncertainty). A biased coin (90% heads) has H ≈ 0.47 bits. The biased coin conveys less information because its outcome is more predictable.",
      },
      {
        name: "Signal vs. Noise",
        definition: "Signal is the informative component of a transmission; noise is the random interference that degrades it. The signal-to-noise ratio (SNR) determines reliable communication capacity.",
        example: "In a noisy meeting, the spoken words are signal; background chatter is noise. In financial markets, true price changes are signal; random fluctuations are noise.",
      },
      {
        name: "Channel Capacity",
        definition: "Shannon's theorem: the maximum rate at which information can be transmitted reliably over a noisy channel, equal to W log₂(1 + SNR) bits per second.",
        example: "A human genome encodes ≈750 MB of information. A neuron fires at ≈100 Hz carrying ≈100 bits/second. Understanding the 'channel capacity' of any information system reveals its fundamental limits.",
      },
      {
        name: "Data → Information → Knowledge → Wisdom (DIKW)",
        definition: "The transformation hierarchy: Data (raw facts) → Information (data with context) → Knowledge (information with understanding) → Wisdom (knowledge with judgment).",
        example: "Temperature = 39.5°C (data) → Patient has fever (information) → Fever indicates infection, likely bacterial (knowledge) → Prescribe antibiotics after confirming bacterial culture (wisdom).",
      },
      {
        name: "Semantic Information",
        definition: "Information defined by meaning and interpretation in context, as opposed to Shannon's syntactic information which is context-free. Semantic information is what matters for adaptive action.",
        example: "The sequence '01101000 01101001' has 16 bits of Shannon entropy. Its semantic information is 'hi' — which is only meaningful to a system that understands ASCII encoding.",
      },
      {
        name: "Knowledge Graph",
        definition: "A structured representation of knowledge as a graph of entities (nodes) and relationships (edges), enabling semantic querying, reasoning, and knowledge discovery.",
        example: "Google's Knowledge Graph connects entities: Einstein ←[born in]→ Ulm ←[country]→ Germany ←[language]→ German. Traversing the graph answers complex queries without explicit programming.",
      },
      {
        name: "Redundancy",
        definition: "Repetition of information beyond the minimum needed to convey a message. Redundancy provides error correction (resilience) but reduces bandwidth efficiency.",
        example: "Human DNA has ~97% non-coding 'redundant' sequences. But this 'junk DNA' provides regulatory functions, evolutionary experimentation space, and robustness against mutations.",
      },
    ],
    ontology: {
      overview: "The Information Science ontology formalizes the chain from raw signals through to actionable knowledge in adaptive systems.",
      entities: [
        { name: "Signal", description: "Physical manifestation of information — varies in some medium to carry a message", properties: ["amplitude", "frequency", "SNR", "medium"] },
        { name: "Data", description: "Recorded observations — raw facts without context or interpretation", properties: ["format", "source", "timestamp", "accuracy"] },
        { name: "Information", description: "Data with context — reduces uncertainty about the state of the world", properties: ["entropy", "relevance", "timeliness", "completeness"] },
        { name: "Knowledge", description: "Structured information enabling action — includes understanding of causal relationships", properties: ["domain", "confidence", "scope", "actionability"] },
        { name: "Wisdom", description: "Applied knowledge with judgment — knowing when and how to apply knowledge appropriately", properties: ["context-sensitivity", "ethical-alignment", "long-term-horizon"] },
        { name: "Channel", description: "Medium through which information is transmitted from source to receiver", properties: ["capacity", "noise-level", "bandwidth", "reliability"] },
        { name: "Encoder", description: "Transforms message into a form suitable for transmission through the channel", properties: ["encoding-scheme", "compression-ratio", "error-correction"] },
        { name: "Decoder", description: "Reconstructs the original message from the received (possibly corrupted) transmission", properties: ["algorithm", "error-tolerance", "latency"] },
        { name: "Noise", description: "Unwanted perturbation added to signal during transmission or storage", properties: ["type", "magnitude", "frequency-spectrum"] },
      ],
      relationships: [
        { from: "Signal", to: "Data", type: "is-captured-as", description: "Signals are sampled and stored as data" },
        { from: "Data", to: "Information", type: "is-contextualized-to", description: "Data becomes information when given context" },
        { from: "Information", to: "Knowledge", type: "is-structured-into", description: "Information becomes knowledge when causally structured" },
        { from: "Knowledge", to: "Wisdom", type: "is-refined-into", description: "Knowledge becomes wisdom through judgment and experience" },
        { from: "Encoder", to: "Channel", type: "transmits-via", description: "Encoded messages flow through the channel" },
        { from: "Noise", to: "Channel", type: "degrades", description: "Noise reduces channel reliability" },
        { from: "Channel", to: "Decoder", type: "delivers-to", description: "Channel output is decoded by receiver" },
      ],
    },
    knowledgeGraph: {
      description: "Information Science knowledge graph from Shannon's entropy through knowledge management to modern AI knowledge systems.",
      nodes: [
        { id: "shannon", label: "Shannon Entropy", type: "theory" },
        { id: "channel", label: "Channel Capacity", type: "concept" },
        { id: "dikw", label: "DIKW Hierarchy", type: "concept" },
        { id: "kg", label: "Knowledge Graphs", type: "tool" },
        { id: "rag", label: "RAG Systems", type: "application" },
        { id: "semantic", label: "Semantic Web", type: "tool" },
        { id: "seci", label: "SECI Model", type: "theory" },
        { id: "snr", label: "Signal/Noise", type: "concept" },
        { id: "gtas_i", label: "GTAS 'I' Variable", type: "application" },
        { id: "llm", label: "Large Language Models", type: "application" },
      ],
      edges: [
        { from: "shannon", to: "channel", label: "defines capacity of" },
        { from: "shannon", to: "snr", label: "formalizes" },
        { from: "dikw", to: "seci", label: "organizational form" },
        { from: "dikw", to: "kg", label: "represented in" },
        { from: "kg", to: "rag", label: "enables" },
        { from: "kg", to: "semantic", label: "extends" },
        { from: "rag", to: "llm", label: "augments" },
        { from: "shannon", to: "gtas_i", label: "quantifies" },
        { from: "dikw", to: "gtas_i", label: "structures" },
        { from: "llm", to: "gtas_i", label: "amplifies" },
      ],
    },
    relationships: [
      { discipline: "Cybernetics", slug: "cybernetics", type: "Complements", description: "Cybernetic feedback requires an information channel. Shannon's theory quantifies exactly how much information can flow through that channel reliably." },
      { discipline: "Intelligence Science", slug: "intelligence-science", type: "Informs", description: "Intelligence is the process of transforming information into actionable knowledge. All AI systems are information processing systems at their core." },
      { discipline: "Systems Science", slug: "systems-science", type: "Informs", description: "Systems communicate and self-regulate through information flows. System Dynamics models capture information delays and distortions." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Contributes to", description: "Knowledge management (Nonaka's SECI model, Davenport's information ecology) is the organizational application of information science." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Complements", description: "DNA is an information storage and processing system. Evolution is an information processing algorithm operating on the genetic code." },
    ],
    interdependencies: [
      { pair: ["Information Science", "Intelligence Science"], description: "Intelligence requires information as its raw material. The quality of intelligence is bounded by information quality (garbage in, garbage out). LLMs are fundamentally statistical information compression systems.", gtasImplication: "GTAS's Intelligence Layer (Layer 5) operates on the output of the Information Layer (Layer 3) — information quality sets an upper bound on intelligence quality." },
      { pair: ["Information Science", "Cybernetics"], description: "The feedback channel in cybernetic systems must transmit information. Shannon's theorem sets the fundamental limit on how much information the feedback channel can carry — limiting control precision.", gtasImplication: "GTAS Axiom 4 (No Information = No Adaptation) is the joint statement of information theory and cybernetics." },
    ],
    researchPapers: [
      { title: "A Mathematical Theory of Communication", authors: "Claude Shannon", year: 1948, journal: "Bell System Technical Journal", significance: "The most important paper in the history of information science — defines information entropy, channel capacity, and error correction" },
      { title: "The Knowledge-Creating Company", authors: "Ikujiro Nonaka", year: 1991, journal: "Harvard Business Review", significance: "Introduces the SECI model (Socialization-Externalization-Combination-Internalization) for organizational knowledge creation" },
      { title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, journal: "NeurIPS", significance: "Introduces the Transformer architecture — the information processing architecture underlying all modern LLMs" },
      { title: "Toward a Semantic Web", authors: "Tim Berners-Lee, James Hendler, Ora Lassila", year: 2001, journal: "Scientific American", significance: "Proposes machine-readable semantic information architecture — basis for modern knowledge graphs" },
    ],
    bestPractices: [
      {
        title: "Information Architecture Design",
        description: "Design the information architecture before building systems — define what information is needed, in what form, at what frequency, and with what quality.",
        steps: ["Identify all information consumers and their needs", "Map information sources and their characteristics", "Define transformation pipeline from raw data to actionable knowledge", "Identify latency, quality, and completeness requirements", "Design storage, indexing, and retrieval mechanisms", "Build monitoring for information quality degradation"],
      },
      {
        title: "Knowledge Graph Construction",
        description: "Build organizational knowledge graphs to make implicit knowledge explicit and queryable.",
        steps: ["Define ontology (entity types and relationship types)", "Extract entities from existing documents and systems", "Map relationships between entities", "Validate with domain experts", "Build query interface for knowledge retrieval", "Establish update process for new knowledge"],
      },
    ],
    checklist: [
      {
        category: "Information Quality",
        items: [
          "Is information accurate (reflects reality)?",
          "Is information timely (available when needed)?",
          "Is information complete (no critical gaps)?",
          "Is information relevant (to the decision being made)?",
          "Is the signal-to-noise ratio sufficient for reliable interpretation?",
          "Are information sources diverse (avoiding single-source bias)?",
        ],
      },
      {
        category: "Knowledge Management",
        items: [
          "Is tacit knowledge being captured and made explicit?",
          "Are lessons learned systematically documented?",
          "Is institutional memory preserved against staff turnover?",
          "Are knowledge retrieval mechanisms fast enough for real-time decisions?",
          "Is knowledge continuously updated as new information arrives?",
          "Are knowledge graphs being used for relationship discovery?",
        ],
      },
    ],
    books: [
      { title: "The Information: A History, a Theory, a Flood", author: "James Gleick", year: 2011, description: "Masterful history of information from African drums to Shannon's theorem. Essential context for the information age.", difficulty: "Introductory" },
      { title: "The Mathematical Theory of Communication", author: "Claude Shannon & Warren Weaver", year: 1949, description: "The original Shannon paper with Weaver's accessible introductory essay. Short and foundational.", difficulty: "Intermediate" },
      { title: "The Knowledge-Creating Company", author: "Ikujiro Nonaka & Hirotaka Takeuchi", year: 1995, description: "How Japanese companies create organizational knowledge. Introduces the SECI model — essential for knowledge management.", difficulty: "Intermediate" },
      { title: "Working Knowledge", author: "Thomas Davenport & Laurence Prusak", year: 1998, description: "Practical guide to knowledge management in organizations. Accessible and action-oriented.", difficulty: "Introductory" },
      { title: "Metadata", author: "Jeffrey Pomerantz", year: 2015, description: "Essential treatment of how data about data structures information systems. Increasingly critical in the AI era.", difficulty: "Introductory" },
    ],
  },

  // ─── DOMAIN 5: INTELLIGENCE SCIENCE ────────────────────────────────
  {
    id: 5,
    slug: "intelligence-science",
    name: "Intelligence Science",
    shortName: "Intelligence",
    gtasDomain: "GTAS-BOK Domain 5",
    icon: "🧠",
    color: "from-pink-600 to-rose-600",
    tagline: "Understanding minds, natural and artificial",
    coreQuestion: "What is intelligence, how does it emerge, and how can it be engineered and amplified across individual and collective scales?",
    context: {
      overview: "Intelligence Science is the study of intelligence across its natural and artificial forms — cognitive science, neuroscience, AI, and collective intelligence. It seeks to understand the mechanisms by which systems perceive, reason, plan, learn, and act effectively across diverse domains. In GTAS, intelligence is not an end in itself but a critical subsystem of the broader adaptive apparatus.",
      history: "Alan Turing's 1950 paper 'Computing Machinery and Intelligence' posed the question of machine intelligence and the Turing Test. The Dartmouth Conference (1956) founded AI as a formal field. The AI winters (1970s, 1980s) followed overpromising; the deep learning revolution (2012 AlexNet, 2017 Transformers) delivered breakthroughs exceeding human performance in specific domains. Cognitive science emerged in the 1970s integrating psychology, linguistics, neuroscience, and AI. Collective intelligence research (Malone, Surowiecki) expanded the concept from individual to distributed intelligence. Today's frontier is AGI — systems with human-level general intelligence across domains.",
      relevanceToGTAS: "Intelligence Science provides the Intelligence Layer of GTAS's Reference Architecture and the 'L' (Learning) variable in V(t) = f(I,L,E,R,G,T). GTAS positions AGI and ASI as subsystems within GTAS (AGI ⊂ GTAS, ASI ⊂ GTAS) — intelligence is one of the ten adaptive capabilities, not the whole adaptive system. GenAI's role as an Intelligence Amplifier in GTAS is directly analyzed through the intelligence science lens.",
      keyContributors: [
        "Alan Turing — Computing Machinery and Intelligence (1950), Turing Test",
        "John McCarthy — Coined 'Artificial Intelligence', Lisp, formal reasoning",
        "Marvin Minsky — Society of Mind, frames, perceptrons",
        "Allen Newell & Herbert Simon — General Problem Solver, cognitive architectures",
        "Yann LeCun — Convolutional neural networks, modern deep learning",
        "Geoffrey Hinton — Backpropagation, deep learning revolution",
        "Judea Pearl — Bayesian networks, causality and do-calculus",
        "James Surowiecki — Wisdom of Crowds, collective intelligence",
      ],
    },
    concepts: [
      {
        name: "General Intelligence (g)",
        definition: "The common factor underlying performance across diverse cognitive tasks. Spearman's 'g' is a statistical construct explaining why performance on different tests correlates. AGI targets achieving human-level g across all domains.",
        example: "Someone with high general intelligence tends to learn new subjects faster, solve novel problems better, and adapt more quickly — across domains from mathematics to language to spatial reasoning.",
      },
      {
        name: "Transfer Learning",
        definition: "The ability to apply knowledge learned in one domain to accelerate learning in another. Humans do this effortlessly; it remains a core challenge for artificial systems.",
        example: "A doctor trained in surgery can learn laparoscopic surgery faster than a non-surgeon — transferring spatial manipulation skills, anatomical knowledge, and diagnostic reasoning.",
      },
      {
        name: "Metacognition",
        definition: "Thinking about thinking — the capacity to monitor, evaluate, and regulate one's own cognitive processes. Essential for learning, error correction, and self-improvement.",
        example: "A student who knows they misunderstand calculus (metacognitive awareness) can seek targeted help. One without metacognition continues making errors without recognizing them.",
      },
      {
        name: "Collective Intelligence",
        definition: "The shared or group intelligence that emerges when multiple individuals or agents work together, typically exceeding the performance of any individual. Distinct from average intelligence — requires appropriate aggregation mechanisms.",
        example: "Prediction markets aggregate distributed information more accurately than expert opinion. Wikipedia produces encyclopedia-quality knowledge from millions of contributors.",
      },
      {
        name: "Bounded Rationality",
        definition: "Herbert Simon's concept that human intelligence is rational only within limits — constraints of information availability, cognitive capacity, and time force satisficing (good enough) rather than optimizing.",
        example: "A CEO cannot optimize all decisions perfectly — they satisfice, using heuristics, advisors, and simplified models because true optimization is computationally and informationally impossible.",
      },
      {
        name: "Cognitive Architecture",
        definition: "The underlying structure of an intelligent system — how perceptual, memory, learning, reasoning, and action subsystems are organized and interact.",
        example: "ACT-R (John Anderson's cognitive architecture) models human cognition as procedural and declarative memory interacting through production rules — explaining both human performance and limitations.",
      },
      {
        name: "Multi-Agent Intelligence",
        definition: "Intelligence that emerges from the interaction of multiple agents, each with partial information and local objectives. The design of multi-agent systems is a distinct discipline from single-agent AI.",
        example: "Ant colony optimization: ants individually follow simple pheromone rules but collectively solve complex routing problems (TSP). Modern AI applications: multi-agent LLM systems for complex reasoning tasks.",
      },
    ],
    ontology: {
      overview: "The Intelligence Science ontology defines the components and processes of intelligent systems, both natural and artificial.",
      entities: [
        { name: "Agent", description: "An entity capable of perceiving its environment, making decisions, and taking actions to achieve goals", properties: ["perception-capabilities", "action-space", "learning-algorithm", "goal-structure"] },
        { name: "Perception", description: "The process of acquiring and interpreting sensory information from the environment", properties: ["modality", "resolution", "latency", "noise-tolerance"] },
        { name: "Memory", description: "Storage and retrieval of past experiences, knowledge, and learned patterns", properties: ["type (working/long-term/episodic)", "capacity", "retrieval-speed", "decay-rate"] },
        { name: "Reasoning", description: "The process of drawing inferences, making deductions, and solving problems from available information", properties: ["type (deductive/inductive/abductive)", "depth", "speed"] },
        { name: "Learning", description: "Modification of behavior or internal representations based on experience to improve future performance", properties: ["algorithm", "data-requirements", "generalization-capacity"] },
        { name: "Goal", description: "A desired state the agent is oriented toward achieving", properties: ["priority", "horizon", "measurability", "alignment"] },
        { name: "Action", description: "A behavior the agent executes in the environment to change state toward goal", properties: ["cost", "reversibility", "side-effects"] },
        { name: "World Model", description: "The agent's internal representation of the environment's structure, dynamics, and likely futures", properties: ["accuracy", "completeness", "update-frequency"] },
      ],
      relationships: [
        { from: "Agent", to: "Perception", type: "uses", description: "Agent perceives environment through perception systems" },
        { from: "Perception", to: "Memory", type: "updates", description: "Perceived information updates memory representations" },
        { from: "Memory", to: "Reasoning", type: "provides-input-to", description: "Memory supplies facts and patterns for reasoning" },
        { from: "Reasoning", to: "Action", type: "selects", description: "Reasoning determines which action to take" },
        { from: "Action", to: "Agent", type: "feeds-back-to", description: "Action outcomes modify agent state and future reasoning" },
        { from: "Learning", to: "WorldModel", type: "improves", description: "Learning refines the agent's model of the world" },
        { from: "WorldModel", to: "Reasoning", type: "constrains", description: "World model frames what reasoning considers possible" },
        { from: "Goal", to: "Action", type: "guides", description: "Goals orient action selection" },
      ],
    },
    knowledgeGraph: {
      description: "Intelligence Science knowledge graph from Turing's foundations through cognitive science and deep learning to collective intelligence and GTAS applications.",
      nodes: [
        { id: "turing", label: "Turing Test", type: "theory" },
        { id: "cog", label: "Cognitive Science", type: "theory" },
        { id: "dl", label: "Deep Learning", type: "tool" },
        { id: "rl", label: "Reinforcement Learning", type: "tool" },
        { id: "bayes", label: "Bayesian Inference", type: "tool" },
        { id: "collect", label: "Collective Intelligence", type: "concept" },
        { id: "agi", label: "AGI", type: "concept" },
        { id: "metacog", label: "Metacognition", type: "concept" },
        { id: "gtas_int", label: "GTAS Intelligence Layer", type: "application" },
        { id: "llm", label: "LLMs / GenAI", type: "application" },
      ],
      edges: [
        { from: "turing", to: "agi", label: "defines test for" },
        { from: "cog", to: "metacog", label: "includes" },
        { from: "dl", to: "llm", label: "enables" },
        { from: "rl", to: "gtas_int", label: "implements feedback learning" },
        { from: "bayes", to: "gtas_int", label: "enables inference" },
        { from: "collect", to: "gtas_int", label: "scales intelligence" },
        { from: "llm", to: "gtas_int", label: "amplifies" },
        { from: "agi", to: "gtas_int", label: "is subset of GTAS" },
        { from: "metacog", to: "gtas_int", label: "enables self-monitoring" },
      ],
    },
    relationships: [
      { discipline: "Information Science", slug: "information-science", type: "Builds on", description: "Intelligence processes information — the DIKW hierarchy is the pipeline through which intelligence operates. Information quality sets the upper bound on intelligence quality." },
      { discipline: "Cybernetics", slug: "cybernetics", type: "Builds on", description: "All AI learning algorithms are cybernetic systems — using error signals to iteratively improve performance through feedback-driven parameter adjustment." },
      { discipline: "Complexity Science", slug: "complexity-science", type: "Complements", description: "Intelligence is an emergent property of complex adaptive systems. The brain is a biological CAS. Deep learning networks exhibit emergent generalization — a complexity phenomenon." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Builds on", description: "Evolutionary algorithms (genetic algorithms, evolutionary strategies) are directly inspired by biological evolution and solve optimization problems that gradient descent cannot." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Contributes to", description: "Collective intelligence design is the application of intelligence science to organizations — how to structure teams, information flows, and decision processes to maximize group intelligence." },
    ],
    interdependencies: [
      { pair: ["Intelligence Science", "Information Science"], description: "All intelligent behavior requires information as input. The quality, completeness, and timeliness of information sets the ceiling on what intelligence can achieve. Shannon's limits apply to AI systems too.", gtasImplication: "GTAS places the Information Layer below the Intelligence Layer in the Reference Architecture — intelligence cannot exceed the information that feeds it." },
      { pair: ["Intelligence Science", "Governance Science"], description: "Intelligent systems must be governed — their objectives must align with human values and societal goals. AI alignment is the governance problem for intelligent systems.", gtasImplication: "GTAS's G (Governance) variable governs how intelligence is deployed — AGI without governance is a GTAS failure mode (Corruption: goals diverge from purpose)." },
    ],
    researchPapers: [
      { title: "Computing Machinery and Intelligence", authors: "Alan Turing", year: 1950, journal: "Mind", significance: "Poses the question of machine intelligence and defines the Turing Test — the foundational paper of AI" },
      { title: "A Logical Calculus of Ideas Immanent in Nervous Activity", authors: "McCulloch & Pitts", year: 1943, journal: "Bulletin of Mathematical Biophysics", significance: "First formal model of neural computation — the mathematical neuron that all deep learning builds on" },
      { title: "Causality: Models, Reasoning, and Inference", authors: "Judea Pearl", year: 2000, journal: "Cambridge University Press", significance: "Introduces the do-calculus and causal graphs — moving AI from correlation to causation" },
      { title: "Attention Is All You Need", authors: "Vaswani et al.", year: 2017, journal: "NeurIPS", significance: "Transformer architecture — the foundation of all modern LLMs and multi-modal AI systems" },
      { title: "The Wisdom of Crowds", authors: "James Surowiecki", year: 2004, journal: "Doubleday", significance: "Shows that diverse, independent groups consistently outperform experts — foundational for collective intelligence design" },
    ],
    bestPractices: [
      {
        title: "Collective Intelligence Design",
        description: "Design systems that harness diverse perspectives effectively — structure information aggregation to minimize groupthink and maximize signal diversity.",
        steps: ["Ensure participant diversity (knowledge, perspective, background)", "Keep contributions independent (prevent social influence)", "Use aggregation mechanisms appropriate for the problem type", "Weight contributions by demonstrated expertise where possible", "Build feedback loops so contributors learn from aggregate outcomes", "Monitor for herding behavior and structural biases"],
      },
      {
        title: "AI System Evaluation",
        description: "Evaluate AI systems against GTAS adaptive capabilities, not just benchmark performance.",
        steps: ["Define evaluation dimensions: reasoning, generalization, transfer, causality, metacognition", "Test out-of-distribution performance (true generalization)", "Evaluate calibration (does confidence match accuracy?)", "Assess causal reasoning vs. correlation exploitation", "Test robustness to adversarial inputs", "Measure performance on tasks requiring multi-step planning"],
      },
    ],
    checklist: [
      {
        category: "Intelligence System Assessment",
        items: [
          "Does the system exhibit genuine generalization or pattern matching only?",
          "Does the system show transfer learning across domains?",
          "Does the system have calibrated uncertainty (metacognition)?",
          "Is the system's reasoning interpretable and auditable?",
          "Does the system perform causal reasoning or only correlational?",
          "Is the system's goal structure aligned with intended purpose?",
          "Are failure modes identified and guarded against?",
        ],
      },
      {
        category: "Collective Intelligence",
        items: [
          "Is participant diversity sufficient (knowledge and perspective)?",
          "Are contributions aggregated without social influence bias?",
          "Is the aggregation mechanism appropriate for the problem type?",
          "Is there feedback to participants about aggregate outcomes?",
          "Are expert contributions weighted appropriately?",
          "Is there a mechanism to identify and correct systematic biases?",
        ],
      },
    ],
    books: [
      { title: "Gödel, Escher, Bach: An Eternal Golden Braid", author: "Douglas Hofstadter", year: 1979, description: "Pulitzer Prize winner exploring consciousness, intelligence, and self-reference. Foundational for understanding what intelligence is.", difficulty: "Advanced" },
      { title: "The Society of Mind", author: "Marvin Minsky", year: 1986, description: "Minsky's theory of intelligence as emergent from interactions of many simple agents. Prescient about modern multi-agent AI.", difficulty: "Intermediate" },
      { title: "The Wisdom of Crowds", author: "James Surowiecki", year: 2004, description: "Highly readable account of collective intelligence — when and why crowds outperform experts.", difficulty: "Introductory" },
      { title: "Causality", author: "Judea Pearl", year: 2000, description: "Rigorous treatment of causal reasoning. Essential for understanding the gap between correlation-based AI and genuine intelligence.", difficulty: "Advanced" },
      { title: "Superintelligence", author: "Nick Bostrom", year: 2014, description: "Analyzes the strategic implications of AGI and ASI — essential for GTAS's treatment of intelligence within adaptive systems.", difficulty: "Intermediate" },
      { title: "The Alignment Problem", author: "Brian Christian", year: 2020, description: "Accessible treatment of AI alignment — how to ensure intelligent systems pursue intended goals. Essential governance reading.", difficulty: "Introductory" },
    ],
  },

  // ─── DOMAIN 6: EVOLUTIONARY SCIENCE ────────────────────────────────
  {
    id: 6,
    slug: "evolutionary-science",
    name: "Evolutionary Science",
    shortName: "Evolution",
    gtasDomain: "GTAS-BOK Domain 6",
    icon: "🧬",
    color: "from-green-600 to-emerald-700",
    tagline: "The universal algorithm of improvement",
    coreQuestion: "How do systems improve over generations through variation, selection, and retention — and how does this principle extend beyond biology?",
    context: {
      overview: "Evolutionary Science studies the mechanisms by which systems improve, diversify, and adapt over time through the fundamental algorithm of Variation → Selection → Retention. Originally confined to biology, evolutionary principles have been extended to explain cultural change, technological innovation, economic competition, organizational learning, and artificial intelligence.",
      history: "Darwin's 'On the Origin of Species' (1859) established natural selection as the mechanism of biological evolution. The Modern Synthesis (1930s-40s) unified natural selection with Mendelian genetics. Neodarwinism, Evo-Devo (evolutionary developmental biology, 1990s), and epigenetics extended the framework. Richard Dawkins's 'The Selfish Gene' (1976) introduced memes — cultural replicators subject to Darwinian selection. Stephen Jay Gould's punctuated equilibrium (1972) challenged gradualism. John Holland applied evolutionary algorithms to computation (genetic algorithms, 1975). Memetics, evolutionary economics (Veblen, Schumpeter, Nelson & Winter), and cultural evolution (Richerson & Boyd) extended the paradigm to social systems.",
      relevanceToGTAS: "Evolutionary Science provides the mechanism for GTAS's Fifth First Principle (Evolution Optimizes Survival) and Axiom 7 (Long-term adaptation through Variation-Selection-Retention). The GTAS Maturity Model G0→G10 describes the evolutionary trajectory of adaptive systems. The V(t) equation's 'L' (Learning) variable encompasses both ontogenetic (within-lifetime) and phylogenetic (across-generation) learning. GTAS is itself a theory of universal evolution applied beyond biology.",
      keyContributors: [
        "Charles Darwin — On the Origin of Species (1859), Natural Selection",
        "Gregor Mendel — Genetics, inheritance mechanisms (rediscovered 1900)",
        "Richard Dawkins — The Selfish Gene, memes, gene-centered evolution",
        "Stephen Jay Gould — Punctuated Equilibrium, Wonderful Life",
        "Lynn Margulis — Symbiogenesis, horizontal gene transfer",
        "John Holland — Genetic algorithms, evolutionary computation",
        "Richard Nelson & Sidney Winter — Evolutionary economics (1982)",
        "Joseph Schumpeter — Creative destruction, innovation cycles",
      ],
    },
    concepts: [
      { name: "Natural Selection", definition: "The differential survival and reproduction of individuals bearing heritable variations that improve fitness in the current environment. The primary mechanism of evolution.", example: "Antibiotic resistance: bacteria with random mutations conferring resistance survive treatment; sensitive bacteria die. The resistant variants reproduce, and resistance becomes prevalent in the population." },
      { name: "Fitness Landscape", definition: "A multi-dimensional space where each point represents a possible genotype and its height represents reproductive fitness. Evolution moves populations across this landscape toward peaks.", example: "A startup's business model is a position on the fitness landscape of commercial viability. Pivoting = moving across the landscape. Successful pivots climb toward higher-fitness regions." },
      { name: "Punctuated Equilibrium", definition: "Gould & Eldredge's (1972) observation that evolution proceeds through long periods of stasis (equilibrium) interrupted by rapid bursts of change (punctuation), rather than gradual continuous change.", example: "Cambrian explosion: 540 million years ago, most animal phyla appeared within ~20 million years after >3 billion years of microbial life. In markets: decades of gradual improvement then sudden disruption (e.g., smartphone era)." },
      { name: "Memetics", definition: "Dawkins's extension of Darwinian evolution to cultural units (memes) — ideas, behaviors, and practices that replicate, mutate, and compete for human attention and adoption.", example: "Religious practices, scientific theories, political ideologies, and internet memes all spread through human populations via imitation, modification, and selective adoption — exhibiting Darwinian dynamics." },
      { name: "Co-evolution", definition: "The reciprocal evolutionary change between interacting species (or systems) — each adapts to the other's adaptations, creating a coupled evolutionary dynamic.", example: "Arms race between predator and prey (cheetah speed ↔ gazelle speed); parasite and host (viral mutations ↔ immune response); OS and malware; market competitors copying each other's innovations." },
      { name: "Niche Construction", definition: "The process by which organisms modify their own selective environment, altering the adaptive challenges faced by themselves and their descendants.", example: "Beavers build dams that modify their environment, creating new ecological niches. Humans reshape their environment so radically that cultural evolution now dominates biological evolution." },
      { name: "Creative Destruction", definition: "Schumpeter's economic equivalent of evolution: new innovations destroy old industries while creating new ones — the fundamental engine of capitalist economic evolution.", example: "Streaming destroyed DVD rental (Blockbuster → Netflix). Electric vehicles are destroying the internal combustion engine industry. Each disruption is an evolutionary event in the economic fitness landscape." },
      { name: "Evolutionary Algorithms", definition: "Computational methods inspired by natural evolution — genetic algorithms, evolutionary strategies, and genetic programming — that solve optimization problems by simulating variation-selection-retention.", example: "NASA used genetic algorithms to design antenna shapes for Space Technology 5 satellites — producing unusual but highly effective antenna geometries no human engineer would have designed." },
    ],
    ontology: {
      overview: "The Evolutionary Science ontology defines the entities and processes of evolutionary change across biological, cultural, technological, and organizational systems.",
      entities: [
        { name: "Replicator", description: "Entity capable of self-copying with occasional variation — gene, meme, algorithm", properties: ["copy-fidelity", "variation-rate", "longevity"] },
        { name: "Vehicle/Interactor", description: "Entity housing replicators that interacts with the environment — organism, organization, mind", properties: ["fitness", "phenotype", "environment-sensitivity"] },
        { name: "Population", description: "Collection of vehicles/interactors competing on the same fitness landscape", properties: ["size", "diversity", "generation-time"] },
        { name: "Variation", description: "Differences among replicators that can be inherited — mutations, innovations, ideas", properties: ["magnitude", "heritability", "source"] },
        { name: "Selection Pressure", description: "Environmental force that differentially rewards or penalizes variants", properties: ["strength", "direction", "consistency"] },
        { name: "Fitness", description: "Measure of a variant's ability to survive and reproduce in the current environment", properties: ["relative-value", "environment-dependency", "multi-dimensional"] },
        { name: "Inheritance", description: "Mechanism by which successful variants are retained and transmitted", properties: ["fidelity", "mechanism", "speed"] },
        { name: "Environment", description: "The selective context that determines which variants succeed", properties: ["volatility", "dimensionality", "predictability"] },
      ],
      relationships: [
        { from: "Variation", to: "Population", type: "diversifies", description: "Variation generates diversity within populations" },
        { from: "SelectionPressure", to: "Fitness", type: "defines", description: "Selection pressure determines which variants have higher fitness" },
        { from: "Fitness", to: "Replicator", type: "determines-survival-of", description: "Higher fitness means more replication" },
        { from: "Replicator", to: "Inheritance", type: "transmitted-via", description: "Successful replicators are inherited by next generation" },
        { from: "Environment", to: "SelectionPressure", type: "generates", description: "Environmental conditions create selection pressures" },
        { from: "Vehicle", to: "Environment", type: "modifies (niche construction)", description: "Vehicles can modify their own selective environment" },
        { from: "Population", to: "FitnessLandscape", type: "traverses", description: "Populations move across fitness landscapes through evolution" },
      ],
    },
    knowledgeGraph: {
      description: "Evolutionary Science knowledge graph from Darwin through the Modern Synthesis to evolutionary economics, cultural evolution, and evolutionary computation.",
      nodes: [
        { id: "darwin", label: "Natural Selection", type: "theory" },
        { id: "genetics", label: "Genetics", type: "theory" },
        { id: "ecomp", label: "Evolutionary Computation", type: "tool" },
        { id: "memetics", label: "Memetics", type: "theory" },
        { id: "econ_evol", label: "Evolutionary Economics", type: "application" },
        { id: "coevol", label: "Co-evolution", type: "concept" },
        { id: "niche", label: "Niche Construction", type: "concept" },
        { id: "creative", label: "Creative Destruction", type: "concept" },
        { id: "gtas_evol", label: "GTAS Evolution Axiom", type: "application" },
        { id: "variation", label: "Variation-Selection-Retention", type: "concept" },
      ],
      edges: [
        { from: "darwin", to: "variation", label: "establishes" },
        { from: "genetics", to: "darwin", label: "provides mechanism for" },
        { from: "variation", to: "ecomp", label: "inspires" },
        { from: "darwin", to: "memetics", label: "extended to culture by" },
        { from: "memetics", to: "econ_evol", label: "informs" },
        { from: "darwin", to: "coevol", label: "extended to" },
        { from: "creative", to: "econ_evol", label: "mechanism in" },
        { from: "variation", to: "gtas_evol", label: "is core mechanism of" },
        { from: "niche", to: "gtas_evol", label: "explains system-environment co-adaptation" },
      ],
    },
    relationships: [
      { discipline: "Complexity Science", slug: "complexity-science", type: "Complements", description: "Evolution is the adaptation algorithm operating within complexity science's fitness landscapes. Kauffman's NK model unifies both fields." },
      { discipline: "Systems Science", slug: "systems-science", type: "Builds on", description: "Evolution requires a systems substrate — replicators, vehicles, and environments are systems-science entities." },
      { discipline: "Intelligence Science", slug: "intelligence-science", type: "Informs", description: "Evolutionary algorithms solve optimization problems that gradient descent cannot. Evolution is the meta-algorithm that produced intelligence." },
      { discipline: "Economics", slug: "economics", type: "Contributes to", description: "Evolutionary economics applies evolutionary dynamics to explain market competition, innovation, and institutional change." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Informs", description: "Organizational evolution follows evolutionary dynamics — selection of strategies, practices, and structures through market and competitive pressure." },
    ],
    interdependencies: [
      { pair: ["Evolutionary Science", "Complexity Science"], description: "Kauffman's NK model is the mathematical bridge: it defines the fitness landscape topology (complexity) on which evolution operates.", gtasImplication: "GTAS's G8 (Self-Evolving) maturity level requires understanding both evolutionary mechanisms and the landscape complexity being traversed." },
      { pair: ["Evolutionary Science", "Governance Science"], description: "Institutions themselves evolve through selection. Successful governance arrangements survive and replicate; unsuccessful ones are replaced.", gtasImplication: "GTAS Axiom 9 (Governance enables sustainability) is implemented through governance mechanisms that are themselves subject to evolutionary selection." },
    ],
    researchPapers: [
      { title: "On the Origin of Species", authors: "Charles Darwin", year: 1859, journal: "John Murray", significance: "The most important scientific book ever written — introduces natural selection and descent with modification" },
      { title: "Punctuated Equilibria: An Alternative to Phyletic Gradualism", authors: "Niles Eldredge & Stephen Jay Gould", year: 1972, journal: "Models in Paleobiology", significance: "Introduces punctuated equilibrium — rapid evolution through stasis-punctuation cycles rather than gradual change" },
      { title: "An Evolutionary Theory of Economic Change", authors: "Richard Nelson & Sidney Winter", year: 1982, journal: "Harvard University Press", significance: "Founding text of evolutionary economics — applies VSR mechanism to organizational routines and firm behavior" },
      { title: "The Selfish Gene", authors: "Richard Dawkins", year: 1976, journal: "Oxford University Press", significance: "Gene-centered view of evolution and memes as cultural replicators — changed how evolution is taught and understood" },
      { title: "Adaptation and Natural Selection", authors: "George Williams", year: 1966, journal: "Princeton University Press", significance: "Established the gene as the fundamental unit of selection — foundation for Dawkins's later work" },
    ],
    bestPractices: [
      {
        title: "Evolutionary Strategy Design",
        description: "Design organizational strategies that use portfolio experimentation rather than single-bet optimization — creating variation for selection to act on.",
        steps: ["Generate diverse strategic options (variation)", "Define fitness criteria aligned with organizational goals", "Run controlled experiments (MVP, pilots) to test variants", "Scale up successful experiments (selection)", "Retire failing strategies promptly", "Build organizational memory of what worked and why (retention)", "Maintain diversity even after a winner emerges (resilience)"],
      },
      {
        title: "Organizational Learning Cycles",
        description: "Implement structured variation-selection-retention cycles at the organizational level using retrospectives, experiments, and knowledge management.",
        steps: ["Baseline current performance (current fitness)", "Generate improvement hypotheses (variation)", "Run short experiments (rapid selection)", "Capture lessons learned (retention mechanism)", "Institutionalize winners (inheritance)", "Repeat at regular cadence"],
      },
    ],
    checklist: [
      {
        category: "Evolutionary Health",
        items: [
          "Is sufficient variation being generated (experiments, pilots, innovation)?",
          "Is selection occurring based on genuine fitness criteria (not politics)?",
          "Are successful variants being retained and scaled (not abandoned)?",
          "Is the organization maintaining diversity as insurance against environmental change?",
          "Is the mutation rate appropriate — not too fast (chaos) or too slow (stasis)?",
          "Is there co-evolutionary awareness (how are competitors adapting)?",
          "Is creative destruction accepted (failing strategies retired promptly)?",
        ],
      },
    ],
    books: [
      { title: "The Selfish Gene", author: "Richard Dawkins", year: 1976, description: "Gene-centered evolution and the birth of memetics. Essential and accessible.", difficulty: "Introductory" },
      { title: "The Blind Watchmaker", author: "Richard Dawkins", year: 1986, description: "Explains how cumulative selection produces complex adaptation. Excellent treatment of evolutionary mechanics.", difficulty: "Introductory" },
      { title: "Full House: The Spread of Excellence", author: "Stephen Jay Gould", year: 1996, description: "Gould's analysis of evolutionary trends — how complexity emerges without direction.", difficulty: "Intermediate" },
      { title: "An Evolutionary Theory of Economic Change", author: "Nelson & Winter", year: 1982, description: "Rigorous application of evolutionary dynamics to economics. Dense but foundational for evolutionary economics.", difficulty: "Advanced" },
      { title: "The Origins of Virtue", author: "Matt Ridley", year: 1996, description: "Evolutionary origins of cooperation, social behavior, and institutions.", difficulty: "Introductory" },
    ],
  },

  // ─── DOMAIN 7: GOVERNANCE SCIENCE ──────────────────────────────────
  {
    id: 7,
    slug: "governance-science",
    name: "Governance Science",
    shortName: "Governance",
    gtasDomain: "GTAS-BOK Domain 7",
    icon: "⚖️",
    color: "from-amber-600 to-orange-600",
    tagline: "The architecture of collective decision-making",
    coreQuestion: "How do societies, organizations, and systems coordinate collective behavior, make binding decisions, and sustain themselves through legitimate governance?",
    context: {
      overview: "Governance Science studies the mechanisms by which collectives — from small groups to global civilizations — organize decision-making authority, enforce rules, allocate resources, resolve conflicts, and maintain social order over time.",
      history: "Political philosophy from Plato and Aristotle through Hobbes, Locke, and Rousseau established the theoretical foundations. The Federalist Papers (1787-88) are the first systematic applied governance science. Douglass North's institutional economics (Nobel 1993) quantified how governance institutions shape economic outcomes. Elinor Ostrom (Nobel 2009) demonstrated empirically how communities self-govern common pool resources, disproving the 'tragedy of the commons' as inevitable.",
      relevanceToGTAS: "Governance is the G variable in V(t) = f(I,L,E,R,G,T) — the coordination and constraint mechanism that prevents adaptive systems from fragmenting, drifting, or collapsing. GTAS Axiom 9 states: 'Large adaptive systems require coordination mechanisms.' Without governance, even highly intelligent and resourced systems collapse into the Fragmentation and Corruption failure modes.",
      keyContributors: [
        "Elinor Ostrom — Governing the Commons, polycentric governance (Nobel 2009)",
        "Douglass North — Institutions, Institutional Change and Economic Performance (Nobel 1993)",
        "James Madison — Constitutional design, checks and balances, Federalist Papers",
        "Jürgen Habermas — Communicative action, deliberative democracy",
        "Francis Fukuyama — Origins of Political Order, state-building",
        "Oliver Williamson — Transaction cost economics, governance of firms (Nobel 2009)",
        "Margaret Levi — Of Rule and Revenue, theory of predatory rule",
        "David Easton — Systems analysis of political life",
      ],
    },
    concepts: [
      { name: "Polycentric Governance", definition: "Ostrom's concept of governance through multiple overlapping centers of authority at different scales, rather than a single centralized authority or pure market.", example: "Internet governance: IETF handles protocols, ICANN handles naming, national governments handle law, ISPs handle routing — no single authority controls everything, yet the system functions." },
      { name: "Institutional Economics", definition: "North's framework: institutions are the formal rules (laws, constitutions) and informal constraints (norms, conventions) that structure human interaction — the 'rules of the game'.", example: "Countries with secure, well-defined property rights attract investment and grow faster than countries with weak property rights, regardless of natural resources." },
      { name: "Principal-Agent Problem", definition: "The governance challenge arising when one party (principal) delegates decision-making to another (agent) whose interests may not align with the principal's, and whose actions the principal cannot fully observe.", example: "CEO (agent) has different incentives than shareholders (principals). Without proper governance (compensation design, board oversight, disclosure), CEO may prioritize personal gain over shareholder value." },
      { name: "Commons and the Tragedy", definition: "Hardin's 1968 claim that shared resources will be overexploited absent private property or central control. Ostrom empirically disproved this by documenting self-governing commons institutions worldwide.", example: "Swiss alpine meadows, Japanese fishing communities, and Spanish irrigation systems have been sustainably self-governed for centuries through clear membership rules, monitoring, and graduated sanctions." },
      { name: "Checks and Balances", definition: "Constitutional mechanisms that distribute power across multiple institutions to prevent any single actor from dominating. Each branch/body can limit others' excesses.", example: "US constitutional design: legislative (makes laws), executive (implements), judiciary (interprets) — each constrains the others. This structural design has governed 250+ years despite political conflict." },
      { name: "Legitimacy", definition: "The widely-shared belief that a governance system's authority is rightfully held and its decisions are binding. Legitimacy is the non-coercive foundation of social order.", example: "A tax law is followed not just because of enforcement but because citizens accept the government's right to tax. Loss of legitimacy triggers non-compliance, civil resistance, or revolution." },
      { name: "Regulatory Feedback", definition: "The governance mechanism of monitoring compliance, detecting violations, and applying corrective responses — a cybernetic control loop applied to collective behavior.", example: "Financial market regulation: SEC monitors for fraud (sensing), investigates suspicious activity (orient), brings enforcement actions (decide/act), adjusts regulations based on market evolution (learn/evolve)." },
    ],
    ontology: {
      overview: "The Governance Science ontology defines the entities and relationships in governance systems across scales.",
      entities: [
        { name: "Governance System", description: "The set of formal and informal rules, actors, and processes that collectively determine how authority is exercised and decisions are made", properties: ["type", "scope", "legitimacy", "effectiveness"] },
        { name: "Institution", description: "Stable patterns of behavior, rules, and expectations that structure interactions — formal (law) or informal (norm)", properties: ["formality", "enforcement-mechanism", "adaptability", "age"] },
        { name: "Actor", description: "Entity participating in the governance system — individual, organization, state", properties: ["interests", "resources", "power", "accountability"] },
        { name: "Rule", description: "Explicit prescription of permitted, required, or forbidden actions", properties: ["scope", "penalty", "legitimacy", "enforceability"] },
        { name: "Authority", description: "The recognized right to make binding decisions within a defined domain", properties: ["scope", "source (legal/traditional/charismatic)", "limits"] },
        { name: "Enforcement Mechanism", description: "System for monitoring compliance and applying sanctions for violations", properties: ["scope", "credibility", "cost", "proportionality"] },
        { name: "Accountability Mechanism", description: "System for holding actors responsible for their decisions and actions", properties: ["type (electoral/judicial/market)", "frequency", "effectiveness"] },
        { name: "Coordination Mechanism", description: "Process by which actors with different interests reach collective decisions", properties: ["type (voting/negotiation/market/hierarchy)", "efficiency", "equity"] },
      ],
      relationships: [
        { from: "Actor", to: "Institution", type: "is-constrained-by", description: "Actors operate within institutional rules" },
        { from: "Actor", to: "Institution", type: "shapes", description: "Powerful actors can modify institutional rules" },
        { from: "Authority", to: "Rule", type: "creates", description: "Authorities create and enforce rules" },
        { from: "EnforcementMechanism", to: "Rule", type: "implements", description: "Enforcement makes rules effective" },
        { from: "Institution", to: "GovernanceSystem", type: "constitutes", description: "Institutions form governance systems" },
        { from: "AccountabilityMechanism", to: "Actor", type: "constrains", description: "Accountability limits actor behavior" },
        { from: "CoordinationMechanism", to: "Actor", type: "aligns", description: "Coordination mechanisms align diverse actor interests" },
      ],
    },
    knowledgeGraph: {
      description: "Governance Science knowledge graph from classical political philosophy through institutional economics to digital governance and GTAS applications.",
      nodes: [
        { id: "ostrom", label: "Polycentric Governance", type: "theory" },
        { id: "north", label: "Institutional Economics", type: "theory" },
        { id: "pa", label: "Principal-Agent Theory", type: "concept" },
        { id: "checks", label: "Checks & Balances", type: "concept" },
        { id: "legitimacy", label: "Legitimacy", type: "concept" },
        { id: "commons", label: "Commons Governance", type: "application" },
        { id: "digital_gov", label: "Digital Governance", type: "application" },
        { id: "ai_gov", label: "AI Governance", type: "application" },
        { id: "gtas_g", label: "GTAS Governance Variable", type: "application" },
        { id: "ueeos_gov", label: "UEEOS Gov Engine", type: "application" },
      ],
      edges: [
        { from: "ostrom", to: "commons", label: "solves" },
        { from: "north", to: "ostrom", label: "complements" },
        { from: "checks", to: "legitimacy", label: "supports" },
        { from: "pa", to: "ai_gov", label: "applies to" },
        { from: "ostrom", to: "digital_gov", label: "inspires" },
        { from: "north", to: "gtas_g", label: "formalizes" },
        { from: "gtas_g", to: "ueeos_gov", label: "implemented in" },
        { from: "ai_gov", to: "ueeos_gov", label: "governs agents in" },
        { from: "legitimacy", to: "gtas_g", label: "required for" },
      ],
    },
    relationships: [
      { discipline: "Cybernetics", slug: "cybernetics", type: "Builds on", description: "Governance is cybernetic regulation at social scale. Policies are setpoints; enforcement is control action; elections are feedback mechanisms." },
      { discipline: "Complexity Science", slug: "complexity-science", type: "Complements", description: "Effective governance of complex adaptive systems requires polycentric, nested structures — matching the complexity of the governed system." },
      { discipline: "Economics", slug: "economics", type: "Complements", description: "Institutional economics directly integrates governance and economic analysis. Governance creates the rules of the economic game." },
      { discipline: "Civilization Systems", slug: "civilization-systems", type: "Contributes to", description: "Long-run civilizational success depends fundamentally on governance quality. Institutional evolution is the core mechanism of civilizational adaptation." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Complements", description: "Governance institutions themselves evolve through selection — successful institutional designs spread; failed ones collapse." },
    ],
    interdependencies: [
      { pair: ["Governance Science", "Complexity Science"], description: "Governing complex adaptive systems requires governance structures that match the system's complexity — Ashby's Requisite Variety applied to governance. Ostrom's polycentric governance is the complexity-appropriate solution.", gtasImplication: "GTAS's G variable cannot be implemented as simple top-down control for L6-L10 systems — it requires polycentric, adaptive governance architectures." },
      { pair: ["Governance Science", "Economics"], description: "Economic institutions are governance structures — property rights, contract law, and regulatory frameworks determine what economic behaviors are possible. North showed that institutional quality explains more of economic performance than any other variable.", gtasImplication: "GTAS's G (Governance) and the Economics domain are deeply coupled — governance creates the conditions for sustainable economic adaptation." },
    ],
    researchPapers: [
      { title: "Governing the Commons", authors: "Elinor Ostrom", year: 1990, journal: "Cambridge University Press", significance: "Nobel-winning empirical demolition of the 'tragedy of the commons' — demonstrates self-governance of shared resources" },
      { title: "Institutions, Institutional Change and Economic Performance", authors: "Douglass North", year: 1990, journal: "Cambridge University Press", significance: "Nobel-winning framework connecting institutional quality to economic performance across history" },
      { title: "The Tragedy of the Commons", authors: "Garrett Hardin", year: 1968, journal: "Science", significance: "The famous paper Ostrom later refuted — but important for understanding the governance problem it posed" },
      { title: "The Origins of Political Order", authors: "Francis Fukuyama", year: 2011, journal: "Farrar, Straus and Giroux", significance: "Comprehensive theory of how states, rule of law, and accountability evolved historically" },
      { title: "Design Principles for Common Pool Resource Management", authors: "Elinor Ostrom", year: 1990, journal: "Cambridge University Press (excerpt)", significance: "Ostrom's 8 design principles for sustainable common pool resource governance — widely applied across domains" },
    ],
    bestPractices: [
      {
        title: "Ostrom's 8 Design Principles for Governance",
        description: "Apply Ostrom's evidence-based governance design principles to any shared resource or collective action challenge.",
        steps: ["1. Clearly define who has rights to use the resource", "2. Match governance rules to local conditions", "3. Ensure those affected by rules can participate in modifying them", "4. Effective monitoring of resource use and user behavior", "5. Graduated sanctions for rule violators", "6. Accessible, low-cost conflict resolution mechanisms", "7. Minimal recognition of rights to organize by external authorities", "8. Nest governance in multiple layers of enterprise"],
      },
      {
        title: "AI Governance Framework Design",
        description: "Design governance for AI systems using principal-agent theory and cybernetic control loops.",
        steps: ["Define the principal's objectives and values (alignment target)", "Specify permitted and prohibited agent behaviors (rules)", "Design monitoring systems for agent behavior", "Implement graduated response mechanisms for violations", "Create accountability channels for harm reporting", "Establish update procedures as AI capabilities change", "Build external oversight mechanisms (independent audit, regulatory oversight)"],
      },
    ],
    checklist: [
      {
        category: "Governance Structure",
        items: [
          "Are governance rules clearly defined and widely known?",
          "Do those affected by rules have voice in changing them?",
          "Are governance structures appropriately nested (polycentric)?",
          "Is there genuine accountability for governance failures?",
          "Are conflict resolution mechanisms accessible and trusted?",
          "Does the governance system have legitimacy (voluntary compliance)?",
          "Are governance rules adaptive (can they evolve as context changes)?",
        ],
      },
      {
        category: "AI/Agent Governance",
        items: [
          "Are AI system objectives formally specified and aligned with human values?",
          "Is agent behavior monitored at appropriate granularity?",
          "Are there mechanisms to intervene when agents deviate from objectives?",
          "Is there human oversight of high-stakes AI decisions?",
          "Are AI governance rules publicly disclosed?",
          "Is there accountability for AI-caused harm?",
          "Are governance mechanisms keeping pace with capability improvements?",
        ],
      },
    ],
    books: [
      { title: "Governing the Commons", author: "Elinor Ostrom", year: 1990, description: "Nobel Prize winner. The most important empirical study of self-governance. Essential for any governance practitioner.", difficulty: "Intermediate" },
      { title: "The Origins of Political Order", author: "Francis Fukuyama", year: 2011, description: "Comprehensive historical theory of state formation, rule of law, and accountability.", difficulty: "Intermediate" },
      { title: "Why Nations Fail", author: "Daron Acemoglu & James Robinson", year: 2012, description: "Accessible and compelling account of how inclusive vs. extractive institutions determine national prosperity.", difficulty: "Introductory" },
      { title: "The Federalist Papers", author: "Madison, Hamilton, Jay", year: 1788, description: "The greatest practical work of governance science — still unmatched as a theory of constitutional design.", difficulty: "Advanced" },
      { title: "Institutions, Institutional Change and Economic Performance", author: "Douglass North", year: 1990, description: "Nobel-winning treatment of how institutions shape economic outcomes. Dense but essential.", difficulty: "Advanced" },
    ],
  },

  // ─── DOMAIN 8: ECONOMICS ────────────────────────────────────────────
  {
    id: 8,
    slug: "economics",
    name: "Economics",
    shortName: "Economics",
    gtasDomain: "GTAS-BOK Domain 8",
    icon: "📈",
    color: "from-lime-600 to-green-600",
    tagline: "The adaptive science of resource allocation",
    coreQuestion: "How do agents allocate scarce resources, how do markets coordinate distributed decisions, and how does economic evolution drive civilizational adaptation?",
    context: {
      overview: "Economics studies how individuals, organizations, and societies allocate scarce resources under constraints. In the GTAS framework, economics provides the E (Energy/Resources) dimension of the Universal Adaptive Equation and models the resource flows that sustain adaptive systems. Complexity Economics (Arthur, Beinhocker) extends traditional equilibrium economics into an evolutionary, adaptive framework fully aligned with GTAS.",
      history: "Adam Smith's 'Wealth of Nations' (1776) founded modern economics. The marginalist revolution (1870s) introduced calculus-based optimization. Keynes (1936) focused on aggregate demand and macroeconomic stabilization. Von Hayek (1945) championed distributed market knowledge vs. central planning. Arrow-Debreu (1954) formalized general equilibrium theory. Behavioral economics (Kahneman, Thaler) revealed cognitive limits. W. Brian Arthur's increasing returns and path dependence (1994) launched complexity economics. Eric Beinhocker's 'The Origin of Wealth' (2006) is the most complete synthesis of evolutionary and complexity approaches — directly aligned with GTAS.",
      relevanceToGTAS: "Economics provides the E (Energy and Resources) variable in V(t) = f(I,L,E,R,G,T) — the resource substrate that all adaptive processes require. The GTAS Resource Layer maps directly to economics. FinOps (financial operations optimization) is a GTAS application of economic resource management to cloud and enterprise infrastructure.",
      keyContributors: [
        "Adam Smith — Wealth of Nations (1776), invisible hand, comparative advantage",
        "John Maynard Keynes — General Theory (1936), macroeconomic stabilization",
        "Friedrich von Hayek — Price signals, distributed knowledge, market order",
        "Joseph Schumpeter — Creative destruction, innovation cycles, entrepreneurship",
        "Kenneth Arrow — Arrow-Debreu general equilibrium (Nobel 1972)",
        "Daniel Kahneman — Behavioral economics, prospect theory (Nobel 2002)",
        "W. Brian Arthur — Increasing returns, complexity economics, path dependence",
        "Eric Beinhocker — The Origin of Wealth, evolutionary economics synthesis",
      ],
    },
    concepts: [
      { name: "Market as Distributed Adaptive System", definition: "Hayek's insight that markets process distributed information through price signals — aggregating the knowledge of millions of actors into a single, coordinating signal that no central planner could replicate.", example: "The global oil price aggregates information from oil fields, tankers, refineries, geopolitical events, and futures markets into a single number that guides resource allocation worldwide." },
      { name: "Increasing Returns", definition: "Arthur's finding that many technologies and industries exhibit positive feedback loops — the more users, the more valuable, the more users (network effects) — creating path dependence and market concentration.", example: "Windows OS: more users → more software developers → more applications → more users. This self-reinforcing dynamic created near-monopoly from initial arbitrary advantages." },
      { name: "Creative Destruction", definition: "Schumpeter's description of capitalism's evolutionary dynamic: innovative firms and technologies continuously destroy the old order while creating new industries, products, and employment patterns.", example: "Amazon destroyed brick-and-mortar retail while creating cloud computing (AWS), logistics networks, and digital marketplace ecosystems — net creative plus destructive simultaneously." },
      { name: "Transaction Costs", definition: "Coase-Williamson framework: costs of making economic exchanges (search, negotiation, enforcement). These costs determine whether transactions occur in markets or within organizations.", example: "High transaction costs for skilled knowledge work led to long-term employment contracts (internalize in firm). Low transaction costs for commodity tasks led to outsourcing (transact in market)." },
      { name: "Behavioral Economics", definition: "Kahneman-Thaler school: humans systematically deviate from rational choice due to cognitive biases, heuristics, and loss aversion. Economic models must account for actual human decision-making.", example: "Loss aversion (Prospect Theory): losing $100 feels twice as bad as gaining $100 feels good. This creates predictable patterns: holding losing investments too long, avoiding insurance despite high expected value." },
      { name: "Externalities", definition: "Costs or benefits imposed on parties not party to a transaction. Negative externalities (pollution, congestion) create market failures requiring governance intervention.", example: "Carbon emissions: the emitter pays no cost for climate damage imposed on future generations. This market failure is the core economic case for carbon pricing." },
      { name: "Evolutionary Economics", definition: "Schumpeter/Nelson-Winter framework applying evolutionary dynamics — variation, selection, retention — to explain industry dynamics, innovation, and economic growth through competitive selection of firm routines.", example: "Software industry evolution: new programming paradigms emerge (variation), firms adopting better paradigms grow (selection), successful practices spread through industry (retention/learning)." },
    ],
    ontology: {
      overview: "The Economics ontology defines the entities and processes of resource allocation, exchange, and market dynamics in adaptive systems.",
      entities: [
        { name: "Economic Agent", description: "Entity making decisions about resource allocation — individual, firm, government", properties: ["preferences", "resources", "information", "decision-strategy"] },
        { name: "Resource", description: "Scarce input with alternative uses — time, money, energy, materials, attention", properties: ["quantity", "quality", "substitutability", "renewability"] },
        { name: "Market", description: "Mechanism coordinating resource allocation through price signals and voluntary exchange", properties: ["competitiveness", "transparency", "transaction-costs", "externalities"] },
        { name: "Price", description: "Signal aggregating distributed information about relative scarcity and value", properties: ["equilibrium-level", "volatility", "information-content"] },
        { name: "Institution (Economic)", description: "Rules governing economic transactions — property rights, contracts, regulations", properties: ["enforcement", "completeness", "adaptability"] },
        { name: "Firm", description: "Organization that coordinates production activities — exists where transaction costs of market exceed bureaucratic costs of hierarchy", properties: ["size", "capabilities", "routines", "fitness"] },
        { name: "Innovation", description: "New combination of resources producing higher value — Schumpeter's engine of creative destruction", properties: ["type", "novelty", "adoptability", "diffusion-speed"] },
        { name: "Externality", description: "Uncompensated impact of one agent's activity on another", properties: ["sign (positive/negative)", "magnitude", "scope"] },
      ],
      relationships: [
        { from: "EconomicAgent", to: "Resource", type: "allocates", description: "Agents decide how to use scarce resources" },
        { from: "EconomicAgent", to: "Market", type: "participates-in", description: "Agents trade in markets" },
        { from: "Market", to: "Price", type: "generates", description: "Market interactions produce price signals" },
        { from: "Price", to: "EconomicAgent", type: "informs", description: "Prices guide agent resource allocation decisions" },
        { from: "Institution", to: "Market", type: "enables/constrains", description: "Institutions define market rules and possibilities" },
        { from: "Innovation", to: "Firm", type: "created-by", description: "Firms generate innovations through R&D" },
        { from: "Innovation", to: "Market", type: "disrupts", description: "Innovations alter the competitive landscape" },
        { from: "Externality", to: "EconomicAgent", type: "affects (uncompensated)", description: "Externalities impose costs/benefits without market transaction" },
      ],
    },
    knowledgeGraph: {
      description: "Economics knowledge graph from classical political economy through equilibrium theory to complexity economics and GTAS resource management.",
      nodes: [
        { id: "smith", label: "Classical Economics", type: "theory" },
        { id: "keynes", label: "Keynesian Economics", type: "theory" },
        { id: "hayek", label: "Price Signals/Knowledge", type: "concept" },
        { id: "schumpeter", label: "Creative Destruction", type: "concept" },
        { id: "behavioral", label: "Behavioral Economics", type: "theory" },
        { id: "complexity_econ", label: "Complexity Economics", type: "theory" },
        { id: "evol_econ", label: "Evolutionary Economics", type: "theory" },
        { id: "finops", label: "FinOps", type: "application" },
        { id: "gtas_e", label: "GTAS 'E' Variable", type: "application" },
        { id: "increasing", label: "Increasing Returns", type: "concept" },
      ],
      edges: [
        { from: "smith", to: "hayek", label: "inspires" },
        { from: "schumpeter", to: "evol_econ", label: "founds" },
        { from: "evol_econ", to: "complexity_econ", label: "merges into" },
        { from: "hayek", to: "complexity_econ", label: "informs" },
        { from: "behavioral", to: "complexity_econ", label: "contributes to" },
        { from: "increasing", to: "complexity_econ", label: "key mechanism in" },
        { from: "complexity_econ", to: "gtas_e", label: "models" },
        { from: "gtas_e", to: "finops", label: "applied in" },
        { from: "schumpeter", to: "gtas_e", label: "creative destruction = GTAS evolution" },
      ],
    },
    relationships: [
      { discipline: "Governance Science", slug: "governance-science", type: "Complements", description: "Markets require governance to function. Property rights, contract law, and regulation are governance structures that make markets possible." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Complements", description: "Creative destruction is economic natural selection. Evolutionary economics directly applies biological evolutionary dynamics to market competition." },
      { discipline: "Complexity Science", slug: "complexity-science", type: "Is synthesized by", description: "Complexity economics subsumes traditional equilibrium economics — markets are complex adaptive systems, not equilibrium optimizers." },
      { discipline: "Organizational Systems", slug: "organizational-systems", type: "Informs", description: "Firm boundaries (Coase), organizational routines (Nelson-Winter), and strategic positioning are applications of economics to organizational design." },
      { discipline: "Civilization Systems", slug: "civilization-systems", type: "Informs", description: "Economic growth, resource allocation, and institutional quality are primary determinants of civilizational adaptive capacity." },
    ],
    interdependencies: [
      { pair: ["Economics", "Governance Science"], description: "Every market requires institutional infrastructure (property rights, contracts, dispute resolution). The quality of these governance institutions is the primary determinant of economic performance (North).", gtasImplication: "GTAS's G and E variables are deeply coupled — governance creates the conditions for economic resource flows to support adaptation." },
      { pair: ["Economics", "Complexity Science"], description: "Markets are complex adaptive systems, not equilibrium optimizers. Increasing returns, path dependence, and agent heterogeneity produce emergent phenomena (business cycles, bubbles) that equilibrium theory cannot predict.", gtasImplication: "GTAS's treatment of economic systems at L5 (Economic Systems) in the hierarchy requires complexity economics, not equilibrium theory." },
    ],
    researchPapers: [
      { title: "The Use of Knowledge in Society", authors: "F.A. Hayek", year: 1945, journal: "American Economic Review", significance: "Definitive statement of the distributed knowledge argument for markets over central planning" },
      { title: "Increasing Returns and Path Dependence in the Economy", authors: "W. Brian Arthur", year: 1994, journal: "University of Michigan Press", significance: "Introduces complexity economics — path dependence, lock-in, and increasing returns as alternatives to equilibrium" },
      { title: "Prospect Theory: An Analysis of Decision under Risk", authors: "Kahneman & Tversky", year: 1979, journal: "Econometrica", significance: "Nobel-winning behavioral economics foundation — prospect theory shows systematic deviations from rational choice" },
      { title: "The Nature of the Firm", authors: "Ronald Coase", year: 1937, journal: "Economica", significance: "Nobel-winning paper explaining why firms exist (transaction costs) — foundation of organizational economics" },
      { title: "The Origin of Wealth", authors: "Eric Beinhocker", year: 2006, journal: "Harvard Business School Press (book)", significance: "Best synthesis of evolutionary and complexity approaches to economics — most GTAS-aligned economics text" },
    ],
    bestPractices: [
      {
        title: "FinOps: Evolutionary Resource Optimization",
        description: "Apply evolutionary optimization principles to cloud and enterprise resource management.",
        steps: ["Instrument all resource usage for real-time visibility", "Define fitness criteria (cost per unit value delivered)", "Identify waste (resources with zero or negative return)", "Run allocation experiments (vary resource mix)", "Scale up efficient allocations, cut inefficient ones", "Build feedback loops: infrastructure cost → business outcome → allocation decision"],
      },
      {
        title: "Innovation Portfolio Management",
        description: "Apply evolutionary portfolio logic — maintain variation across risk levels, select based on evidence, and retain successful innovations at scale.",
        steps: ["Maintain innovation portfolio across three horizons (exploit, expand, explore)", "Fund experiments proportional to uncertainty (more options early, fewer bets late)", "Evaluate portfolio items with consistent fitness metrics", "Kill underperformers promptly (selection)", "Transfer winners into core business (retention)", "Replenish portfolio continuously (variation)"],
      },
    ],
    checklist: [
      {
        category: "Resource Adaptive Capacity",
        items: [
          "Are resource flows instrumented for real-time visibility?",
          "Is there a clear ROI measurement for all major resource allocations?",
          "Is there slack (resource reserves) for responding to unexpected demands?",
          "Are resource allocation decisions made at the right organizational level?",
          "Is there a mechanism to rapidly reallocate resources when priorities change?",
          "Are externalities identified and accounted for in resource decisions?",
        ],
      },
      {
        category: "Market Intelligence",
        items: [
          "Are price signals being monitored as information (not just costs)?",
          "Is competitive landscape being tracked as an evolutionary dynamic?",
          "Are increasing returns and network effects identified in the business model?",
          "Is path dependence identified in technology and process choices?",
          "Are behavioral biases accounted for in pricing and product design?",
        ],
      },
    ],
    books: [
      { title: "The Origin of Wealth", author: "Eric Beinhocker", year: 2006, description: "Best synthesis of complexity and evolutionary economics. Shows the economy as a complex adaptive system. Directly GTAS-aligned.", difficulty: "Intermediate" },
      { title: "Thinking, Fast and Slow", author: "Daniel Kahneman", year: 2011, description: "Nobel laureate's comprehensive treatment of cognitive biases and behavioral economics. Essential for understanding human decision-making.", difficulty: "Introductory" },
      { title: "The Wealth of Nations", author: "Adam Smith", year: 1776, description: "The founding text of economics. Surprisingly readable — price signals and comparative advantage still relevant.", difficulty: "Intermediate" },
      { title: "The Road to Serfdom", author: "Friedrich Hayek", year: 1944, description: "Hayek's case for market order over central planning — the distributed knowledge argument essential for governance-economics interface.", difficulty: "Intermediate" },
      { title: "The General Theory of Employment, Interest and Money", author: "John Maynard Keynes", year: 1936, description: "The macroeconomics revolution. Dense but important for understanding aggregate resource management.", difficulty: "Advanced" },
    ],
  },

  // ─── DOMAIN 9: ORGANIZATIONAL SYSTEMS ──────────────────────────────
  {
    id: 9,
    slug: "organizational-systems",
    name: "Organizational Systems",
    shortName: "Organizations",
    gtasDomain: "GTAS-BOK Domain 9",
    icon: "🏢",
    color: "from-indigo-600 to-violet-700",
    tagline: "Designing human systems that learn and adapt",
    coreQuestion: "How do organizations learn, adapt, self-organize, and sustain themselves — and what makes some organizations far more adaptive than others?",
    context: {
      overview: "Organizational Systems studies organizations as adaptive systems — how they sense environments, make decisions, coordinate action, learn, and evolve. It synthesizes organizational theory, management science, complexity theory, and institutional economics into a comprehensive understanding of how human collective systems work and can be improved.",
      history: "Scientific management (Taylor, 1911) treated organizations as machines. The Hawthorne Studies (Mayo, 1930s) revealed the social dimensions of organizational behavior. Systems thinking entered management through Ackoff, Beer, and Senge. Peter Senge's 'The Fifth Discipline' (1990) popularized the Learning Organization concept. Argyris and Schön's double-loop learning (1978) provided the mechanism. Mintzberg's organizational configurations (1979) mapped structural options. Recent evolution includes Laloux's Teal Organizations (2014), AI-augmented organizations, and platform-based organizational forms.",
      relevanceToGTAS: "Organizational Systems is the direct application layer where GTAS theory meets enterprise practice. GTAS's enterprise interpretation maps perfectly: Sense (data platforms), Orient (knowledge graphs), Decide (agentic AI), Act (enterprise systems), Learn (analytics), Evolve (architecture governance). The Organizational Systems domain provides the change management, learning design, and structural approaches needed to actually implement GTAS in enterprises.",
      keyContributors: [
        "Peter Senge — Fifth Discipline, Learning Organization (1990)",
        "Chris Argyris & Donald Schön — Organizational Learning, double-loop learning",
        "Henry Mintzberg — Organizational configurations, strategy as practice",
        "Karl Weick — Sensemaking, enactment, organizing",
        "Russell Ackoff — Systems thinking for management, interactive planning",
        "Frederic Laloux — Reinventing Organizations, Teal Organizations (2014)",
        "Edgar Schein — Organizational culture, process consultation",
        "David Garvin — Learning Organizations: a Harvard framework",
      ],
    },
    concepts: [
      { name: "Learning Organization", definition: "Senge's concept of an organization that continuously expands its capacity to create its future — characterized by five disciplines: systems thinking, personal mastery, mental models, shared vision, and team learning.", example: "Toyota Production System: any worker can halt the production line (andon cord) when they spot a problem. Problems trigger root cause analysis and process improvement. This creates continuous organizational learning from every defect." },
      { name: "Double-Loop Learning", definition: "Argyris-Schön framework: single-loop learning fixes errors within existing norms; double-loop learning questions the norms themselves and changes the governing values behind action.", example: "Single-loop: sales team misses target → hire more salespeople. Double-loop: sales team misses target → question whether the target market is right and whether the product should change." },
      { name: "Sensemaking", definition: "Weick's concept: organizations don't discover pre-existing environments — they enact them through interpretation. Sensemaking is retrospective (understanding what happened) and prospective (anticipating what will happen).", example: "After a near-miss safety incident, different organizational units construct different narratives about 'what happened' — influencing which corrective actions are taken." },
      { name: "Organizational Ambidexterity", definition: "The organizational capacity to simultaneously exploit existing capabilities (efficiency) and explore new possibilities (innovation) — balancing present performance with future adaptation.", example: "Amazon simultaneously runs extremely efficient e-commerce logistics (exploitation) while funding wildly experimental ventures like AWS, Alexa, and drone delivery (exploration)." },
      { name: "Psychological Safety", definition: "Edmondson's concept: the shared belief that the team is safe for interpersonal risk-taking. Essential for learning organizations — without it, errors are hidden and double-loop learning cannot occur.", example: "Google's Project Aristotle found psychological safety the most important factor in high-performing teams — teams where members felt safe speaking up, admitting mistakes, and taking risks vastly outperformed others." },
      { name: "Organizational Culture", definition: "Schein's framework: the shared assumptions, values, and artifacts that members use to perceive, think, and react to organizational challenges. Culture is the deepest level of organizational learning.", example: "Safety culture in nuclear power: organizations with strong safety cultures report more incidents (encouraging reporting) and have fewer serious accidents. The culture determines whether problems surface or stay hidden." },
      { name: "Teal Organizations", definition: "Laloux's framework: organizations structured around self-management, wholeness, and evolutionary purpose — replacing hierarchical control with distributed authority, replacing predict-and-control with sense-and-respond.", example: "Buurtzorg (Dutch nursing): 10,000 nurses in self-managing teams with no managers. Teams handle their own hiring, scheduling, and care decisions. 40% better outcomes at 40% lower cost vs. traditionally managed nursing organizations." },
    ],
    ontology: {
      overview: "The Organizational Systems ontology defines the entities and processes of adaptive organizations, from individuals to enterprise-scale adaptive systems.",
      entities: [
        { name: "Organization", description: "Collective system of humans coordinating to achieve shared purposes", properties: ["size", "structure", "culture", "adaptive-maturity"] },
        { name: "Team", description: "Small group with shared purpose, mutual accountability, and complementary skills", properties: ["size", "diversity", "cohesion", "autonomy"] },
        { name: "Role", description: "Set of responsibilities and authorities held by an organizational member", properties: ["scope", "accountability", "decision-rights"] },
        { name: "Process", description: "Repeatable sequence of activities producing a defined output — organizational routines", properties: ["type", "cycle-time", "quality", "adaptability"] },
        { name: "Culture", description: "Shared assumptions, values, and norms shaping organizational behavior", properties: ["type (collaborative/competitive/hierarchical)", "strength", "adaptability"] },
        { name: "Mental Model", description: "Shared assumptions and representations that organizational members use to interpret and act in the world", properties: ["accuracy", "shared-ness", "update-frequency"] },
        { name: "Knowledge", description: "Organizational knowledge — explicit (documented) and tacit (embodied in people and practices)", properties: ["type", "codifiability", "distribution", "freshness"] },
        { name: "Adaptive Capacity", description: "The organization's ability to sense, learn, and change in response to environmental demands", properties: ["level", "speed", "range", "cost"] },
      ],
      relationships: [
        { from: "Team", to: "Organization", type: "constitutes", description: "Teams are the building blocks of organizations" },
        { from: "Role", to: "Team", type: "is-part-of", description: "Roles define team member responsibilities" },
        { from: "Process", to: "Organization", type: "enables-operations-of", description: "Processes coordinate organizational activity" },
        { from: "Culture", to: "Organization", type: "shapes-behavior-of", description: "Culture influences how all organizational actors behave" },
        { from: "MentalModel", to: "Team", type: "shared-by", description: "Teams share mental models for coordination" },
        { from: "Knowledge", to: "AdaptiveCapacity", type: "enables", description: "Knowledge is the foundation of adaptive response" },
        { from: "Culture", to: "Knowledge", type: "determines-sharing-of", description: "Culture determines whether knowledge is shared or hoarded" },
      ],
    },
    knowledgeGraph: {
      description: "Organizational Systems knowledge graph from scientific management through learning organization theory to AI-native enterprise and GTAS enterprise application.",
      nodes: [
        { id: "learning_org", label: "Learning Organization", type: "theory" },
        { id: "double_loop", label: "Double-Loop Learning", type: "concept" },
        { id: "sensemaking", label: "Sensemaking", type: "concept" },
        { id: "ambidex", label: "Ambidexterity", type: "concept" },
        { id: "teal", label: "Teal Organizations", type: "theory" },
        { id: "psych_safety", label: "Psychological Safety", type: "concept" },
        { id: "culture", label: "Organizational Culture", type: "concept" },
        { id: "ai_native", label: "AI-Native Enterprise", type: "application" },
        { id: "gtas_enterprise", label: "GTAS Enterprise", type: "application" },
        { id: "vsm_org", label: "VSM for Orgs", type: "tool" },
      ],
      edges: [
        { from: "learning_org", to: "double_loop", label: "requires" },
        { from: "learning_org", to: "psych_safety", label: "requires" },
        { from: "sensemaking", to: "learning_org", label: "enables" },
        { from: "ambidex", to: "learning_org", label: "extends" },
        { from: "teal", to: "ambidex", label: "achieves through self-management" },
        { from: "culture", to: "learning_org", label: "enables or blocks" },
        { from: "ai_native", to: "gtas_enterprise", label: "implements" },
        { from: "learning_org", to: "gtas_enterprise", label: "precondition for" },
        { from: "vsm_org", to: "gtas_enterprise", label: "governance structure for" },
        { from: "double_loop", to: "gtas_enterprise", label: "implements UAC Learn phase" },
      ],
    },
    relationships: [
      { discipline: "Cybernetics", slug: "cybernetics", type: "Builds on", description: "Beer's VSM is a cybernetic organizational design. Organizational feedback loops, control systems, and regulation are cybernetic concepts." },
      { discipline: "Systems Science", slug: "systems-science", type: "Builds on", description: "Organizations are social systems. Senge explicitly builds on Forrester's system dynamics — systems archetypes were designed for organizational application." },
      { discipline: "Intelligence Science", slug: "intelligence-science", type: "Complements", description: "Collective intelligence design is organizational intelligence science. AI-native enterprises apply intelligence science to augment organizational cognition." },
      { discipline: "Governance Science", slug: "governance-science", type: "Complements", description: "Organizational governance (board structure, accountability mechanisms, incentive systems) directly applies governance science principles." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Builds on", description: "Organizational learning and selection processes follow evolutionary dynamics. Nelson-Winter's organizational routines are evolutionary units." },
    ],
    interdependencies: [
      { pair: ["Organizational Systems", "Intelligence Science"], description: "AI-native organizations require organizational systems that can effectively integrate AI capabilities — human+AI collaboration, AI governance, and organizational redesign around AI augmentation.", gtasImplication: "GTAS's move from G3 to G5 (AI-native threshold) requires both intelligence science (the AI systems) and organizational systems (the human structures to deploy them effectively)." },
      { pair: ["Organizational Systems", "Governance Science"], description: "Organizational governance determines how authority is distributed, how decisions are made, and how accountability is maintained — these are both organizational system design and governance science problems.", gtasImplication: "GTAS's G variable implementation at the enterprise level requires both organizational design and governance science." },
    ],
    researchPapers: [
      { title: "The Fifth Discipline", authors: "Peter Senge", year: 1990, journal: "Doubleday", significance: "Foundational text of the Learning Organization — integrates systems thinking with organizational development" },
      { title: "Organizational Learning II", authors: "Chris Argyris & Donald Schön", year: 1996, journal: "Addison-Wesley", significance: "Develops double-loop learning theory and the concept of organizational defensive routines that block learning" },
      { title: "The Sensemaking in Organizations", authors: "Karl Weick", year: 1995, journal: "Sage", significance: "Sensemaking as the fundamental organizational process — how organizations construct meaning to guide action" },
      { title: "Psychological Safety and Learning Behavior in Work Teams", authors: "Amy Edmondson", year: 1999, journal: "Administrative Science Quarterly", significance: "Empirical study establishing psychological safety as the foundation of team learning performance" },
      { title: "Reinventing Organizations", authors: "Frederic Laloux", year: 2014, journal: "Nelson Parker", significance: "Comprehensive treatment of Teal Organizations — the most evolved organizational form aligned with GTAS self-organizing maturity" },
    ],
    bestPractices: [
      {
        title: "Learning Organization Design",
        description: "Embed Senge's five disciplines into organizational structures and processes.",
        steps: ["Build systems thinking literacy across leadership", "Create safe spaces for surfacing and testing mental models", "Develop shared vision processes that engage the whole organization", "Design team learning practices (after action reviews, retrospectives)", "Implement personal mastery development programs", "Measure organizational learning capability and improvement over time"],
      },
      {
        title: "AI-Native Organization Transition",
        description: "Redesign organizational structures and processes to effectively integrate AI as a collaborative partner, not just a tool.",
        steps: ["Map current value creation processes and identify AI augmentation opportunities", "Redesign roles around human+AI collaboration (not replacement)", "Build AI literacy at all levels", "Implement AI governance (alignment, monitoring, accountability)", "Redesign decision rights to account for AI recommendations", "Create feedback mechanisms for continuous AI-human performance improvement"],
      },
    ],
    checklist: [
      {
        category: "Learning Capacity",
        items: [
          "Is there psychological safety for admitting errors and challenging assumptions?",
          "Are after-action reviews and retrospectives standard practice?",
          "Is there a mechanism for lessons to flow across the whole organization?",
          "Does the organization practice double-loop learning (questioning norms, not just fixing errors)?",
          "Is organizational learning measured and improvement tracked?",
          "Does culture reward experimentation and learning from failure?",
        ],
      },
      {
        category: "Adaptive Structure",
        items: [
          "Does organizational structure support fast information flow to decision-makers?",
          "Are decision rights distributed appropriately (not over-centralized)?",
          "Is there ambidexterity (simultaneous exploitation and exploration)?",
          "Can the organizational structure adapt rapidly to new challenges?",
          "Are teams empowered to experiment and self-organize within clear boundaries?",
          "Is there a healthy tension between order (governance) and agility (self-organization)?",
        ],
      },
    ],
    books: [
      { title: "The Fifth Discipline", author: "Peter M. Senge", year: 1990, description: "The Learning Organization bible. Five disciplines for building organizations that continuously learn and improve.", difficulty: "Introductory" },
      { title: "Reinventing Organizations", author: "Frederic Laloux", year: 2014, description: "Comprehensive treatment of self-managing organizations. Teal Organizations represent the GTAS G6-G7 organizational level.", difficulty: "Introductory" },
      { title: "Organizational Learning II", author: "Chris Argyris & Donald Schön", year: 1996, description: "Rigorous treatment of single- and double-loop learning and organizational defensive routines.", difficulty: "Advanced" },
      { title: "The Fearless Organization", author: "Amy Edmondson", year: 2018, description: "Practical guide to building psychological safety. Essential foundation for learning organizations.", difficulty: "Introductory" },
      { title: "Competing Against Time", author: "George Stalk & Thomas Hout", year: 1990, description: "How speed of organizational adaptive cycle becomes competitive advantage. Time = the adaptive variable.", difficulty: "Intermediate" },
    ],
  },

  // ─── DOMAIN 10: CIVILIZATION SYSTEMS ───────────────────────────────
  {
    id: 10,
    slug: "civilization-systems",
    name: "Civilization Systems",
    shortName: "Civilization",
    gtasDomain: "GTAS-BOK Domain 10",
    icon: "🏛️",
    color: "from-rose-700 to-orange-700",
    tagline: "The science of civilizational survival and flourishing",
    coreQuestion: "How do civilizations rise, adapt, and survive — or collapse — across centuries and millennia?",
    context: {
      overview: "Civilization Systems is the highest-level application domain in GTAS — studying the adaptive dynamics of entire civilizations: their rise, development, crisis, resilience, and potential collapse. It synthesizes history, sociology, political science, economics, ecology, and complexity theory into a science of long-run civilizational adaptation.",
      history: "Oswald Spengler's 'Decline of the West' (1918) proposed civilizations have organic life cycles. Arnold Toynbee's 'A Study of History' (1934-1961) analyzed 26 civilizations' challenge-response dynamics. Joseph Tainter's 'The Collapse of Complex Societies' (1988) explained collapse through diminishing returns on complexity. Jared Diamond's 'Collapse' (2005) identified environmental, economic, and governance failure modes. Peter Turchin's 'Ages of Discord' (2023) applies mathematical models to civilizational cycles. The GTAS framework synthesizes these into a unified adaptive systems theory of civilization.",
      relevanceToGTAS: "Civilization Systems is the ultimate application of GTAS — the Grand Challenge of designing adaptive systems to sustain humanity for 1,000+ years is inherently a civilizational design challenge. The GTAS hierarchy's highest levels (L7-L10) are civilizational. GTAS's maturity levels G9 (Ecosystem-Adaptive) and G10 (Civilization-Adaptive) represent civilizational adaptive maturity.",
      keyContributors: [
        "Arnold Toynbee — Study of History: challenge-response theory of civilization",
        "Joseph Tainter — Collapse of Complex Societies: diminishing returns on complexity",
        "Jared Diamond — Guns, Germs, and Steel; Collapse: environmental factors",
        "Peter Turchin — Cliodynamics, Ages of Discord, mathematical civilization modeling",
        "Daron Acemoglu & James Robinson — Inclusive vs. extractive institutions",
        "Francis Fukuyama — Origins of Political Order: state, law, accountability",
        "David Christian — Big History: 13.8 billion years of adaptive evolution",
        "Yuval Noah Harari — Sapiens, Homo Deus: cognitive revolution to future civilization",
      ],
    },
    concepts: [
      { name: "Challenge-Response Dynamics", definition: "Toynbee's theory: civilizations are created by successfully responding to environmental, social, and existential challenges. Growth continues as long as challenges are met; stagnation occurs when the creative minority fails to generate adequate responses.", example: "Ancient Rome's challenge: managing vast territories without modern communication. Response: Roman law, bureaucracy, road networks, provincial governance. The challenge of Germanic migrations was eventually met with inadequate responses, contributing to Western Rome's fall." },
      { name: "Complexity Collapse", definition: "Tainter's thesis: as civilizations grow they add complexity to solve problems. But complexity has diminishing returns — each additional layer produces less benefit at higher cost. Eventually complexity collapses to a simpler, lower-cost state.", example: "Late Western Roman Empire: maintaining the military, bureaucracy, and infrastructure required ever-higher taxation on a shrinking productive population. The cost of complexity exceeded its benefits — collapse was the simplification solution." },
      { name: "Extractive vs. Inclusive Institutions", definition: "Acemoglu-Robinson framework: extractive institutions concentrate power and resources in a narrow elite, suppressing innovation. Inclusive institutions distribute participation broadly, generating innovation and sustained growth.", example: "Spain vs. England after 1500: Spain used colonialism to enrich a narrow elite (extractive). England's property rights and parliamentary constraints on monarchy (inclusive) enabled the Industrial Revolution — despite similar starting conditions." },
      { name: "Societal Immune Response", definition: "The civilizational equivalent of biological immunity — mechanisms that detect and respond to internal and external threats to social order: legal systems, military forces, social norms, cultural memory.", example: "Democracy's immune response to corruption: freedom of the press, judicial independence, electoral accountability, civil society. These mechanisms detect and respond to threats to institutional integrity." },
      { name: "Cliodynamics", definition: "Turchin's mathematical approach to history — modeling civilizational dynamics (population, inequality, state capacity, elite overproduction) as interacting variables producing predictable oscillating cycles.", example: "Turchin's Secular Cycles model predicts political instability when elite overproduction exceeds available positions, inequality peaks, and state fiscal capacity declines simultaneously — patterns visible in multiple civilizational collapses." },
      { name: "Civilizational Resilience", definition: "A civilization's ability to absorb shocks, maintain core functions, adapt, and transform without losing continuity of identity and purpose across multiple generations.", example: "Jewish civilization: expelled from Judea in 70 CE, dispersed for 2,000 years across hostile environments, maintained cultural and legal continuity through textual tradition, reconstituting a state in 1948 — extraordinary civilizational resilience." },
      { name: "Planetary Boundaries", definition: "Rockström et al.'s (2009) nine Earth system processes with thresholds that, if crossed, risk triggering abrupt, irreversible environmental change at planetary scale — the biophysical limits of civilizational adaptation.", example: "Climate change, biodiversity loss, nitrogen cycle, freshwater use, ocean acidification — each represents a boundary condition for civilizational viability. Crossing multiple boundaries simultaneously may trigger civilizational collapse." },
    ],
    ontology: {
      overview: "The Civilization Systems ontology defines the entities and processes of civilizational adaptive dynamics across long time horizons.",
      entities: [
        { name: "Civilization", description: "Large-scale, long-enduring cultural-political complex with characteristic institutions, values, and adaptive strategies", properties: ["geographic-scope", "temporal-span", "adaptive-capacity", "resilience"] },
        { name: "Institution (Civilizational)", description: "Long-lived social structure organizing collective behavior at civilizational scale — legal systems, religions, markets, governance forms", properties: ["age", "geographic-scope", "adaptability", "legitimacy"] },
        { name: "Resource Base", description: "The physical, energetic, and ecological foundation supporting civilizational activity", properties: ["abundance", "renewability", "distribution", "current-depletion-rate"] },
        { name: "Challenge", description: "External or internal pressure demanding civilizational adaptation — environmental, technological, military, social", properties: ["magnitude", "velocity", "predictability", "type"] },
        { name: "Creative Response", description: "Novel adaptive solution to civilizational challenge — institutional innovation, technological development, cultural evolution", properties: ["effectiveness", "speed", "scalability", "sustainability"] },
        { name: "Adaptive Failure Mode", description: "Mechanism by which civilizational adaptation fails — collapse, rigidity, corruption, exhaustion at civilizational scale", properties: ["type", "onset-speed", "reversibility"] },
        { name: "Collective Memory", description: "The civilizational record of past adaptations — history, culture, science, religion, law", properties: ["completeness", "accuracy", "accessibility", "update-frequency"] },
        { name: "Planetary Boundary", description: "Biophysical threshold in Earth systems beyond which civilizational viability is threatened", properties: ["current-status", "critical-threshold", "rate-of-approach"] },
      ],
      relationships: [
        { from: "Civilization", to: "Challenge", type: "faces", description: "Civilizations continuously encounter adaptive challenges" },
        { from: "Civilization", to: "CreativeResponse", type: "generates", description: "Civilizations develop creative responses to challenges" },
        { from: "CreativeResponse", to: "Institution", type: "creates", description: "Successful responses become institutionalized" },
        { from: "Institution", to: "Civilization", type: "sustains", description: "Institutions maintain civilizational continuity" },
        { from: "ResourceBase", to: "Civilization", type: "supports", description: "Material resources support civilizational activity" },
        { from: "Civilization", to: "ResourceBase", type: "depletes/regenerates", description: "Civilizations consume and (ideally) regenerate resource bases" },
        { from: "CollectiveMemory", to: "Civilization", type: "guides-adaptation-of", description: "Collective memory provides historical lessons for current adaptation" },
        { from: "PlanetaryBoundary", to: "Civilization", type: "constrains", description: "Planetary boundaries set hard limits on civilizational activity" },
      ],
    },
    knowledgeGraph: {
      description: "Civilization Systems knowledge graph from historical analysis through complexity modeling to planetary boundary science and GTAS civilization-scale design.",
      nodes: [
        { id: "toynbee", label: "Challenge-Response", type: "theory" },
        { id: "tainter", label: "Complexity Collapse", type: "theory" },
        { id: "diamond", label: "Environmental Factors", type: "theory" },
        { id: "turchin", label: "Cliodynamics", type: "tool" },
        { id: "inclusive", label: "Inclusive Institutions", type: "concept" },
        { id: "planetary", label: "Planetary Boundaries", type: "concept" },
        { id: "resilience", label: "Civilizational Resilience", type: "concept" },
        { id: "ueeos_civ", label: "UEEOS Civilization Layer", type: "application" },
        { id: "gtas_g10", label: "GTAS G10 Maturity", type: "application" },
        { id: "big_history", label: "Big History", type: "theory" },
      ],
      edges: [
        { from: "toynbee", to: "resilience", label: "defines via challenge-response" },
        { from: "tainter", to: "resilience", label: "explains failure of" },
        { from: "diamond", to: "planetary", label: "empirically supports" },
        { from: "turchin", to: "resilience", label: "quantifies cycles of" },
        { from: "inclusive", to: "resilience", label: "enables long-run" },
        { from: "big_history", to: "gtas_g10", label: "provides context for" },
        { from: "resilience", to: "gtas_g10", label: "is the goal of" },
        { from: "ueeos_civ", to: "gtas_g10", label: "implements" },
        { from: "planetary", to: "ueeos_civ", label: "constraints for" },
        { from: "tainter", to: "ueeos_civ", label: "warns against over-complexity in" },
      ],
    },
    relationships: [
      { discipline: "Governance Science", slug: "governance-science", type: "Builds on", description: "Civilizational resilience depends fundamentally on governance quality — inclusive institutions are the single most important predictor of long-run civilizational success." },
      { discipline: "Complexity Science", slug: "complexity-science", type: "Builds on", description: "Civilizations are complex adaptive systems. Their collapse dynamics follow complexity science (tipping points, cascades, SOC) rather than linear decline." },
      { discipline: "Economics", slug: "economics", type: "Complements", description: "Economic vitality — resource flows, innovation, and resource allocation efficiency — is a primary determinant of civilizational adaptive capacity." },
      { discipline: "Evolutionary Science", slug: "evolutionary-science", type: "Informs", description: "Cultural and institutional evolution follow evolutionary dynamics over long timescales — successful adaptations spread, failed ones are selected against." },
      { discipline: "Systems Science", slug: "systems-science", type: "Builds on", description: "System dynamics modeling (Limits to Growth) and system archetypes (Shifting the Burden) directly apply to civilizational dynamics." },
    ],
    interdependencies: [
      { pair: ["Civilization Systems", "Governance Science"], description: "Acemoglu and Robinson's central thesis: inclusive governance institutions are the primary determinant of long-run civilizational prosperity and survival. No other variable explains civilizational divergence as well.", gtasImplication: "GTAS's G10 (Civilization-Adaptive) maturity requires inclusive governance at civilizational scale — the governance science problem writ large." },
      { pair: ["Civilization Systems", "Complexity Science"], description: "Tainter's complexity collapse is a complexity science prediction: civilizations that solve problems by adding administrative complexity hit diminishing returns and collapse to simpler forms. SOC dynamics apply.", gtasImplication: "GTAS's UEEOS must be designed to avoid complexity collapse — architecture simplicity and modularity are survival requirements, not just design preferences." },
      { pair: ["Civilization Systems", "Evolutionary Science"], description: "Cultural evolution operates at civilizational timescales — successful institutional forms and cultural practices spread; unsuccessful ones collapse. Toynbee's challenge-response is cultural natural selection.", gtasImplication: "GTAS's civilizational adaptation strategy must work through evolutionary institutional change, not just top-down design." },
    ],
    researchPapers: [
      { title: "The Collapse of Complex Societies", authors: "Joseph Tainter", year: 1988, journal: "Cambridge University Press", significance: "Definitive analysis of civilizational collapse through diminishing marginal returns on complexity — essential warning for UEEOS design" },
      { title: "Planetary Boundaries: Exploring the Safe Operating Space for Humanity", authors: "Johan Rockström et al.", year: 2009, journal: "Ecology and Society", significance: "Defines nine planetary boundaries — the biophysical constraints on civilizational sustainability" },
      { title: "A Study of History", authors: "Arnold Toynbee", year: 1934, journal: "Oxford University Press", significance: "26-civilization comparative analysis of challenge-response dynamics — most comprehensive empirical study of civilizational adaptation" },
      { title: "Ages of Discord", authors: "Peter Turchin", year: 2023, journal: "Beresta Books", significance: "Mathematical cliodynamics predicts political instability through secular cycles — validated against multiple civilizational trajectories" },
      { title: "Why Nations Fail", authors: "Daron Acemoglu & James Robinson", year: 2012, journal: "Crown", significance: "Empirical demonstration that inclusive vs. extractive institutions determine long-run civilizational prosperity" },
    ],
    bestPractices: [
      {
        title: "Civilizational Resilience Assessment",
        description: "Evaluate civilizational adaptive capacity across the Tainter-Diamond dimensions of collapse risk.",
        steps: ["Environmental sustainability: assess planetary boundary status", "Economic foundations: evaluate resource depletion vs. regeneration", "Political fragility: measure elite overproduction, inequality, state capacity (Turchin)", "Social cohesion: assess trust, civic participation, intergroup cooperation", "Institutional quality: inclusive vs. extractive institution assessment", "Technological adaptive capacity: rate of innovation vs. challenge emergence", "Develop integrated resilience index and track over time"],
      },
      {
        title: "Long-Horizon Institutional Design",
        description: "Design institutions explicitly for multi-century adaptability, not just current efficiency — applying evolutionary and complexity principles.",
        steps: ["Design for adaptability over optimization (flexible rules over rigid ones)", "Build in review and update mechanisms (avoid institutional lock-in)", "Distribute authority polycentrally (resilience through redundancy)", "Encode checks and balances (prevent extractive capture)", "Build collective memory (institutional history and lessons)", "Stress-test against civilizational-scale scenarios", "Design for graceful degradation if stressed"],
      },
    ],
    checklist: [
      {
        category: "Civilizational Adaptive Health",
        items: [
          "Is environmental sustainability being actively maintained (planetary boundaries)?",
          "Is there sufficient institutional diversity (not monoculture)?",
          "Are governance institutions inclusive (not extractive)?",
          "Is the rate of innovation exceeding the rate of challenge emergence?",
          "Is collective memory (history, science, culture) preserved and accessible?",
          "Is inequality within tolerable bounds (not triggering Turchin instability)?",
          "Are long-horizon planning institutions functional?",
        ],
      },
      {
        category: "Collapse Risk Assessment",
        items: [
          "Is complexity adding diminishing returns? (Tainter warning)",
          "Are multiple stressors converging simultaneously? (Diamond's pattern)",
          "Is elite overproduction occurring? (Turchin indicator)",
          "Are environmental resource bases depleting faster than they can be replaced?",
          "Is social cohesion declining (rising polarization, loss of shared identity)?",
          "Are governance institutions maintaining adaptability?",
          "Is there a viable response strategy to the dominant current challenge?",
        ],
      },
    ],
    books: [
      { title: "Collapse: How Societies Choose to Fail or Succeed", author: "Jared Diamond", year: 2005, description: "Case studies of civilizational collapse and survival. Accessible synthesis of environmental, economic, and governance factors.", difficulty: "Introductory" },
      { title: "The Collapse of Complex Societies", author: "Joseph Tainter", year: 1988, description: "Rigorous, original theory of civilizational collapse through diminishing returns on complexity. Dense but essential.", difficulty: "Advanced" },
      { title: "Sapiens: A Brief History of Humankind", author: "Yuval Noah Harari", year: 2011, description: "Sweeping cognitive-revolution-to-present account of human civilizational development. Excellent GTAS context.", difficulty: "Introductory" },
      { title: "Why Nations Fail", author: "Acemoglu & Robinson", year: 2012, description: "Empirical demonstration that institutions determine long-run prosperity. Excellent accessible governance-economics synthesis.", difficulty: "Introductory" },
      { title: "Ages of Discord", author: "Peter Turchin", year: 2023, description: "Mathematical cliodynamics — quantitative models of civilizational instability cycles. Unique scientific approach.", difficulty: "Advanced" },
      { title: "The Dawn of Everything", author: "David Graeber & David Wengrow", year: 2021, description: "Challenges standard narratives of social evolution — more diverse, adaptive civilizational forms than typically recognized.", difficulty: "Intermediate" },
    ],
  },
];
