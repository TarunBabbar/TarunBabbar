<div align="center">

# Tarun Kumar Babbar

### AI QA Architect · Test Automation Architect

**18+ years in quality engineering** — building AI-powered QA platforms, multi-agent
orchestration frameworks and enterprise Playwright + TypeScript automation.

🏆 **1st place — AI Tester Blueprint 3x Hackathon** (The Testing Academy)

[![Portfolio](https://img.shields.io/badge/Portfolio-tarunkumarbabbar.com-0A66C2?style=flat&logo=googlechrome&logoColor=white)](https://www.tarunkumarbabbar.com)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-tarunbabbar-0A66C2?style=flat&logo=linkedin&logoColor=white)](https://linkedin.com/in/tarunbabbar)
[![GitHub](https://img.shields.io/badge/GitHub-TarunBabbar-181717?style=flat&logo=github&logoColor=white)](https://github.com/TarunBabbar)

📍 Pune, India

</div>

---

## What I do

I take quality from a bottleneck to an accelerator.

Today I'm a **Solutions Architect at Coforge Limited**, working at **Xplor Technologies**,
building a **multi-agent QA platform** that runs as **two pipelines**: one that turns
JIRA stories and Figma designs into reviewed, de-duplicated test cases — and one that
turns selected test cases into working Playwright automation, generated straight into our
existing framework.

Every AI-generated output is evaluated against quality metrics in **DeepEval**, duplicate
and near-identical scenarios are **detected automatically** so they never multiply, and
generated automation is verified by **running it** — failures are healed against the real
DOM before anything is pushed.

The other half is classic architecture: **Playwright + TypeScript** frameworks, Azure
DevOps and YAML CI/CD, and taking teams from **no automation to 100% automation adoption**.

---

## 🧠 The platform I'm building

Two pipelines, one platform. DeepEval scores every AI output, duplicates are caught
before they multiply, and generated code never lands on `main` — it goes to a **new branch
for review**.

### Pipeline 1 — Test Case Generation

> **JIRA + Figma → reviewed, de-duplicated test cases in TFS**

1. JIRA stories and Figma designs are ingested as the requirement source
2. Requirements are generated and refined from the designs
3. Each requirement is converted into test cases by a generation agent
4. Duplicate and near-identical scenarios are auto-detected and merged
5. Every output is evaluated against quality metrics with DeepEval (LLM-as-a-judge)
6. Reviewed cases are published to **TFS over REST APIs** using token auth

### Pipeline 2 — Automation Code Generation

> **selected test cases → running Playwright specs, generated into the existing framework**

**Inputs:** `Figma` · `test cases` · `existing TypeScript + Playwright framework` · `product code`

1. Product-code and live-DOM information is read to capture the elements each test acts on
2. A **`Skills.md`** automation recipe is generated for the selected test cases
3. Automation code is generated — new **specs, page files, helpers** and whatever other
   artifacts the tests need — following the existing framework structure
4. The generated tests are executed
5. Failures are fixed using **live DOM element capture over MCP Playwright** — real
   elements, not guesses
6. Tests are re-run until green, then the code is **pushed to a new branch for review**

---

## 🤖 AI Apps you can run today

Every one is built end-to-end — no mockups. Open the demo, read the source, or both.

| App | What it does | Stack | |
|---|---|---|---|
| **QAE2E — AI QA Pipeline** | Agentic pipeline from requirement to release confidence, every step judged by an AI agent team | Next.js · OpenRouter · Agent Orchestration · Pinecone · MCP · Docker | [Live](https://qae2e.vercel.app) 🏆 |
| **QABuddy — Hybrid RAG QA Assistant** | Ask a QA question, get one answer with sources cited — from Jira stories, test cases, bugs and the real Playwright UI/API code, searched by meaning *and* keyword | FastAPI · Pinecone · OpenRouter · RAG | [Live](https://qa-rag-five.vercel.app) |
| **QA Jobs Portal** | Daily India QA jobs, AI-extracted and curated — resume-matched scoring and saved roles | Next.js · NestJS · Angular · PostgreSQL · Prisma · OpenRouter | [Live v2](https://qajobsv2.vercel.app) |
| **QA AI Dashboard** | One platform: LLM-scored resume⇄job matcher, QA interview RAG chat, PRD test-case generator, AI tutor, document Q&A | Next.js · PostgreSQL · Prisma · Pinecone · OpenRouter | [Live](https://qadashboard-lime.vercel.app) |
| **QA RAG Platform** | Upload documents, ask questions, get grounded citations — smart chunking and configurable embeddings | Next.js · OpenRouter · Pinecone | [Live](https://qaragplatform.vercel.app) |
| **QA Interview Prep Kit** | RAG-powered interview prep over your own PDF/DOCX knowledge base with streaming answers | Next.js · OpenRouter · Pinecone | [Live](https://qa-interview-preparation.vercel.app) |
| **Jira QA Crew** | A crew of AI agents connected to Jira — analysis, test generation and execution workflows | Next.js · CrewAI patterns · TypeScript | [Live](https://jira-qa-crew-next.vercel.app) · [Source](https://github.com/TarunBabbar/jira-qa-crew-next) |
| **Resume → Job RAG** | Upload resume → profile extraction → multi-source job search → eligibility filter → LLM ranking | React · Express · ChromaDB · OpenRouter | [Source](https://github.com/TarunBabbar/resume-job-rag) |
| **Chroma RAG Visualizer** | 3-panel UI that makes RAG visible: ingest, embed, vector search, answer — with live SSE progress | React · Express · ChromaDB | [Source](https://github.com/TarunBabbar/chroma-react-rag-pipeline) |

---

## 🧪 Frameworks & automation

| Project | What it is |
|---|---|
| **[8-Layer Playwright Framework](https://github.com/TarunBabbar/8layer-advance-playwright-framework)** | Enterprise Playwright + POM with a strict 8-layer architecture — API layer, fixtures, reporting, Docker, CI-ready |
| **[Self-Healing Playwright](https://github.com/TarunBabbar/SelfHealingPlaywrightFramework)** | GPT-4 powered locator healing — automatically repairs broken selectors when the UI changes |
| **[qa-multiple-agents-open-ai](https://github.com/TarunBabbar/qa-multiple-agents-open-ai)** | QA automation driven by a multi-agent workflow |
| **[QAMultiAgentAssistant](https://github.com/TarunBabbar/QAMultiAgentAssistant)** | Multi-agent assistant for generating and automating test cases |
| **[AITester3x](https://github.com/TarunBabbar/AITester3x)** | The AI Tester Blueprint 3x hackathon pipeline — [live](https://jiraqapipeline.vercel.app) |

Plus Selenium, Appium and C#/.NET suites, API automation and agent experiments →
[**20+ repos on GitHub**](https://github.com/TarunBabbar).

---

## 🛠 Skills

**AI & Agentic QA** — Multi-agent orchestration · DeepEval · LLM-as-a-judge · RAG pipelines ·
Prompt engineering · LangGraph · CrewAI · MCP protocol · Self-healing tests · Model routing

**Test automation** — Playwright · TypeScript · Selenium · Cypress · Appium · Pytest ·
REST Assured · Postman · BDD (SpecFlow/Cucumber) · NUnit / TestNG / JUnit · k6 · JMeter

**Platforms & CI/CD** — Azure DevOps · TFS · JIRA · YAML pipelines · GitHub Actions · Jenkins ·
Docker · Kubernetes · Git

**Languages** — TypeScript · C# .NET · Python · JavaScript · Java · SQL

**Vector DBs & data** — Pinecone · ChromaDB · pgvector · PostgreSQL · Neon · ETL testing

**Architecture** — Page Object Model · SOLID · 8-layer frameworks · microservices ·
Next.js · FastAPI · Express

---

## 📈 Impact

| | |
|---|---|
| **18+** | years in QA engineering |
| **10+** | AI apps and agents shipped |
| **1st** | place, AI Tester Blueprint 3x hackathon |
| **100%** | automation adoption delivered at scale |
| **~70%** | manual regression removed at Coupa (100+ UI cases in 9 months) |
| **~40%** | production defects cut through API + DB validation suites |

---

## 🧭 Path

**Infosys** (2007–2010) → **TCS** (2010–2016) → **Varian Medical Systems** (2016–2017) →
**Coupa Software** (2018–2025, Lead SDET / Test Automation Architect) →
**AI + Automation R&D** (2025–2026) → **Coforge Limited** (2026–present, Solutions Architect)

🎓 B.E. Computer Science — Modi Institute of Technology, Kota

---

<div align="center">

**Open to Architect / Principal SDET / QA Head roles** — one scalable AI QA platform
that multiple teams onboard to.

[Portfolio](https://www.tarunkumarbabbar.com) · [LinkedIn](https://linkedin.com/in/tarunbabbar) · [Email](mailto:babbar.tarun@gmail.com)

</div>
