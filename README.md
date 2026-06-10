# GTAS Academy

> **Author:** Vijayagopalan R · rvijayagopalan.dev@gmail.com
> **License:** MIT · © 2026 Vijayagopalan R. All rights reserved.

An interactive learning platform for the **General Theory of Adaptive Systems (GTAS)** — built with Next.js 15, TypeScript, Tailwind CSS, and Anthropic Claude AI.

## What is GTAS?

GTAS is a unified theory that explains how any system — biological, technological, organizational, or civilizational — survives and thrives through adaptive intelligence. Its core is the **Universal Adaptive Equation**:

```
V(t) = f(I, L, E, R, G, T)
```

Where **I**nformation, **L**earning, **E**nergy, **R**esilience, **G**overnance, and **T**ime combine to determine a system's adaptive value.

## Features

### Learning Modules (12 total)
Structured course covering all core GTAS theory:
- Welcome & Core Theory
- Adaptive Cycle (UAC: Observe → Orient → Decide → Act → Learn → Evolve)
- Hierarchy of Adaptive Systems (L0–L10)
- Adaptive Capabilities & Failure Modes
- Axioms, Ontology & Body of Knowledge
- Reference Architecture (7 layers)
- G0–G10 Maturity Model
- GTAS vs AGI/ASI
- GenAI & GTAS
- Universal Laws & UEEOS

Each module includes expandable content sections, key takeaways, and a multiple-choice quiz with explanations.

### Deep Dives — GTAS-BOK (10 disciplines)
Ten-section deep dives for each of the ten GTAS Body of Knowledge disciplines:

| # | Discipline | Core Focus |
|---|-----------|------------|
| 1 | Systems Science | Feedback loops, emergence, system dynamics |
| 2 | Cybernetics | Control, regulation, Viable System Model |
| 3 | Complexity Science | CAS, emergence, self-organised criticality |
| 4 | Information Science | Shannon entropy, knowledge management |
| 5 | Intelligence Science | Cognition, collective intelligence, AI alignment |
| 6 | Evolutionary Science | VSR algorithm, memetics, evolutionary economics |
| 7 | Governance Science | Polycentric governance, institutional economics |
| 8 | Economics | Complexity economics, FinOps, creative destruction |
| 9 | Organizational Systems | Learning organisations, double-loop learning |
| 10 | Civilization Systems | Challenge-response, complexity collapse, resilience |

Each deep dive covers: **Context · Concepts · Ontology · Knowledge Graph · Relationships · Interdependencies · Research Papers · Best Practices · Checklist · Books**

### AI Tutor
Collapsible chat panel powered by Claude (claude-opus-4-8) with:
- Adaptive thinking enabled
- Real-time streaming responses
- Module-aware context injection
- Starter questions per module

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (App Router, Turbopack) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v3 + `@tailwindcss/typography` |
| AI | Anthropic SDK v0.104.1 — `claude-opus-4-8`, adaptive thinking, SSE streaming |
| Markdown | `react-markdown` + `remark-gfm` |
| Icons | `lucide-react` |
| Utilities | `clsx` |

## Getting Started

### Prerequisites
- Node.js 18+
- An [Anthropic API key](https://console.anthropic.com/)

### Setup

```bash
git clone <repo-url>
cd gtas-academy
npm install
```

Create `.env.local`:

```env
ANTHROPIC_API_KEY=sk-ant-...
```

Start the dev server:

```bash
npm run dev
# → http://localhost:3001
```

### Build for production

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── api/chat/route.ts        # Anthropic SSE streaming endpoint
│   ├── disciplines/
│   │   ├── page.tsx             # All 10 deep-dive index
│   │   └── [slug]/page.tsx      # Individual discipline deep dive
│   ├── modules/[slug]/page.tsx  # Individual module page
│   ├── layout.tsx               # Root layout with sidebar + chat panel
│   └── page.tsx                 # Dashboard / home
├── components/
│   ├── AIChatPanel.tsx          # Collapsible AI tutor panel
│   ├── DeepDiveContent.tsx      # 10-tab deep dive renderer
│   ├── ModuleContent.tsx        # Module sections, quiz, takeaways
│   └── Sidebar.tsx              # Navigation sidebar
├── data/
│   ├── disciplines.ts           # All 10 GTAS-BOK disciplines (10 sections each)
│   └── modules.ts               # 12 course modules with content and quizzes
└── lib/
    └── gtas-system-prompt.ts    # AI tutor system prompt (full GTAS knowledge base)
```

## AI Chat API

`POST /api/chat`

```json
{
  "messages": [{ "role": "user", "content": "What is the UAC?" }],
  "moduleContext": "Optional current module title for context injection"
}
```

Returns `text/event-stream` with lines: `data: {"text": "..."}` and a terminal `data: [DONE]`.

## Environment Variables

| Variable | Required | Description |
|----------|----------|-------------|
| `ANTHROPIC_API_KEY` | Yes | Anthropic API key from console.anthropic.com |

---

## Author

**Vijayagopalan R**
- Email: [rvijayagopalan.dev@gmail.com](mailto:rvijayagopalan.dev@gmail.com)
- GitHub: [@rvijayagopalan-dev](https://github.com/rvijayagopalan-dev)

## License

Copyright © 2026 Vijayagopalan R. All rights reserved.

This project is licensed under the [MIT License](LICENSE).

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
