export type LinkCategory =
  | "AI Agents & Automation"
  | "Developer Tools"
  | "Security & Privacy"
  | "Data & Analytics"
  | "CRM & Business"
  | "Creative & Media"
  | "Finance & Trading"
  | "Productivity"
  | "My Projects"
  | "Claude Skills & Plugins";

export type LinkScope = "work" | "personal";

export interface LinkEntry {
  id: string;
  type: "tweet" | "github";
  url: string;
  title: string;
  summary: string;
  category: LinkCategory;
  scope: LinkScope;
  useCase: string;
  appIdea: string;
  hasGithub?: boolean;
  githubUrl?: string;
  stars?: string;
}

export const links: LinkEntry[] = [
  // ═══════════════════════════════════════
  // TWEETS
  // ═══════════════════════════════════════
  {
    id: "tw-1",
    type: "tweet",
    url: "https://x.com/AniStudio_ai/status/2019115609464991914",
    title: "AniStudio AI — Video Generation",
    summary:
      "AniStudio showcasing their AI-powered animation and video generation tool that creates studio-quality animated content from text prompts.",
    category: "Creative & Media",
    scope: "work",
    useCase:
      "Automate product demo videos, social media content, and explainer animations without a design team.",
    appIdea:
      "Video Ad Factory — paste a product URL, auto-generate 5 animated ad creatives optimized for different platforms (TikTok, Instagram Reels, YouTube Shorts).",
  },
  {
    id: "tw-2",
    type: "tweet",
    url: "https://x.com/Behi_Sec",
    title: "Behi_Sec — Security Researcher Profile",
    summary:
      "Security researcher who curates awesome-claude-skills and shares offensive/defensive security tooling for AI agents.",
    category: "Security & Privacy",
    scope: "work",
    useCase:
      "Stay updated on Claude Code security skills, vulnerability patterns, and AI-assisted pentesting techniques.",
    appIdea:
      "SecSkill Radar — a dashboard that monitors security skill repos, diffs new commits, and alerts when new attack/defense patterns are published.",
    hasGithub: true,
    githubUrl: "https://github.com/BehiSecc/awesome-claude-skills",
  },
  {
    id: "tw-3",
    type: "tweet",
    url: "https://x.com/Voxyz_ai/status/2020272022417289587",
    title: "Voxyz AI — Voice Cloning / TTS",
    summary:
      "Voxyz demonstrating realistic AI voice synthesis technology for content creation and accessibility.",
    category: "Creative & Media",
    scope: "work",
    useCase:
      "Generate voiceovers for videos, podcasts, and apps without recording sessions. Localize content into multiple languages instantly.",
    appIdea:
      "PodcastClone — upload one episode of your voice, then paste any blog post and get a full podcast episode in your voice with natural delivery.",
  },
  {
    id: "tw-4",
    type: "tweet",
    url: "https://x.com/emilylambert/status/2019947921823944778",
    title: "Emily Lambert — AI/Tech Commentary",
    summary:
      "Tech commentary on the state of AI tools, workflows, and how builders are shipping faster with AI-native development.",
    category: "Productivity",
    scope: "work",
    useCase:
      "Identify emerging AI workflow patterns that solo developers are using to compete with larger teams.",
    appIdea:
      "ShipLog — a public build journal app where indie hackers log daily progress, tools used, and AI prompts that worked. Community votes on best workflows.",
  },
  {
    id: "tw-5",
    type: "tweet",
    url: "https://x.com/i/article/2020554113080340480",
    title: "X Article — Long-form AI Analysis",
    summary:
      "Long-form article on X discussing AI agent architectures, multi-agent systems, or emerging AI development patterns.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Deep-dive research on how multi-agent systems are being deployed in production by real companies.",
    appIdea:
      "AgentBench — a benchmarking tool that lets you pit different AI agent architectures against each other on standardized tasks and compare cost/speed/quality.",
  },
  {
    id: "tw-6",
    type: "tweet",
    url: "https://x.com/scobleizer/lists",
    title: "Scobleizer — Tech Influencer Lists",
    summary:
      "Robert Scoble's curated Twitter lists covering AR/VR, AI, autonomous vehicles, and frontier tech leaders.",
    category: "Productivity",
    scope: "work",
    useCase:
      "Curate signal from noise — follow specific tech verticals through expert-curated lists instead of the algorithmic feed.",
    appIdea:
      "ListSync — import anyone's X lists, merge/dedupe across lists, get a daily digest email of top posts from your combined follow list ranked by engagement.",
  },
  {
    id: "tw-7",
    type: "tweet",
    url: "https://x.com/yourclouddude/status/2019260395035234437",
    title: "YourCloudDude — Cloud/DevOps Tips",
    summary:
      "Cloud architecture tips, AWS/GCP patterns, and infrastructure automation insights for developers.",
    category: "Developer Tools",
    scope: "work",
    useCase:
      "Learn production-grade cloud patterns — serverless, edge functions, cost optimization, and IaC best practices.",
    appIdea:
      "CloudCost Copilot — connect your AWS/GCP account, get a weekly AI-generated report showing exactly where you're overspending with one-click fix suggestions.",
  },

  // ═══════════════════════════════════════
  // GITHUB — THIRD-PARTY REPOS
  // ═══════════════════════════════════════
  {
    id: "gh-1",
    type: "github",
    url: "https://github.com/met4citizen/TalkingHead",
    title: "TalkingHead — 3D Avatar with Lip Sync",
    summary:
      "JavaScript class for a 3D avatar that speaks with real-time lip sync in the browser. Supports full-body animations and multiple languages.",
    category: "Creative & Media",
    scope: "work",
    useCase:
      "Add a talking AI assistant to any website — customer support, onboarding guides, or interactive tutorials with a human-like presence.",
    appIdea:
      "HireMe Avatar — a portfolio website where a 3D avatar of you presents your resume, answers recruiter questions via AI, and walks through your projects.",
  },
  {
    id: "gh-2",
    type: "github",
    url: "https://github.com/business-science/ai-data-science-team",
    title: "AI Data Science Team — Agent-Powered Analytics",
    summary:
      "AI-powered data science platform with specialized agents and a visual 'AI Pipeline Studio' for data loading, cleaning, visualization, and modeling.",
    category: "Data & Analytics",
    scope: "work",
    useCase:
      "Let non-technical team members run data analysis by chatting with AI agents instead of writing Python/SQL.",
    appIdea:
      "MetricBot — connect your Stripe + GA4 + database, ask plain English questions like 'why did revenue drop last Tuesday?' and get auto-generated charts with root cause analysis.",
  },
  {
    id: "gh-3",
    type: "github",
    url: "https://github.com/The-Vibe-Company/companion",
    title: "Vibe Companion — Browser-Based Claude Code",
    summary:
      "Web interface that runs Claude Code sessions in your browser by connecting to the CLI via WebSocket.",
    category: "Developer Tools",
    scope: "work",
    useCase:
      "Run Claude Code from any device with a browser — iPad, phone, Chromebook — without a local terminal.",
    appIdea:
      "CodePad — a mobile-first IDE that connects to your dev machine's Claude Code instance, letting you review, approve, and steer AI coding sessions from your phone.",
  },
  {
    id: "gh-4",
    type: "github",
    url: "https://github.com/backnotprop/plannotator",
    title: "Plannotator — Visual AI Plan Review",
    summary:
      "Tool for visually annotating and reviewing AI coding agent plans, with approve/reject and structured feedback flows.",
    category: "Developer Tools",
    scope: "work",
    useCase:
      "Add human oversight to AI coding workflows — review what the agent plans to do before it touches your codebase.",
    appIdea:
      "PlanBoard — a Kanban-style board where each AI agent's proposed changes appear as cards. Drag to approve, reject, or re-prioritize. Tracks approval history.",
  },
  {
    id: "gh-5",
    type: "github",
    url: "https://github.com/davila7/claude-code-templates",
    title: "Claude Code Templates — Starter Configs",
    summary:
      "CLI tool that installs ready-made components — AI agents, custom commands, integrations — to enhance Claude Code workflows.",
    category: "Developer Tools",
    scope: "work",
    useCase:
      "Jumpstart Claude Code setups with pre-built agent configs, CLAUDE.md templates, and skill packages.",
    appIdea:
      "SkillStore — a marketplace where developers publish, discover, and one-click install Claude Code skills/agents. Rating system, version control, dependency resolution.",
  },
  {
    id: "gh-6",
    type: "github",
    url: "https://github.com/HKUDS/nanobot",
    title: "Nanobot — Ultra-Lightweight AI Assistant",
    summary:
      "Personal AI assistant delivering core agent functionality in ~4,000 lines of code — 99% smaller than comparable systems.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Deploy a capable AI agent on resource-constrained devices — Raspberry Pi, old laptops, edge servers.",
    appIdea:
      "EdgeAssistant — a self-hosted AI assistant that runs on a $35 Raspberry Pi in your home, handles smart home automation, calendar management, and local file search without cloud dependencies.",
  },
  {
    id: "gh-7",
    type: "github",
    url: "https://github.com/danielmiessler/fabric",
    title: "Fabric — AI Prompt Pattern Framework",
    summary:
      "Open-source framework for organizing reusable AI prompts ('Patterns') into everyday workflows. Crowdsourced prompt library.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Build a personal library of battle-tested AI prompts that plug into any tool — CLI, scripts, or agents.",
    appIdea:
      "PromptOS — a system tray app that gives you instant access to 500+ categorized prompts. Highlight any text, hit a hotkey, select a pattern, get results inline.",
  },
  {
    id: "gh-8",
    type: "github",
    url: "https://github.com/ente-io/ente",
    title: "Ente — E2E Encrypted Photo Storage",
    summary:
      "Fully open-source, end-to-end encrypted platform for cloud storage. Google Photos alternative + 2FA authenticator app.",
    category: "Security & Privacy",
    scope: "work",
    useCase:
      "Replace Google Photos with a privacy-first alternative. Self-host or use their cloud. Your photos, your encryption keys.",
    appIdea:
      "FamilyVault — a private family photo/video sharing app with E2E encryption, AI-powered face grouping, and automatic highlight reels — no Big Tech snooping.",
  },
  {
    id: "gh-9",
    type: "github",
    url: "https://github.com/twentyhq/twenty",
    title: "Twenty — Open-Source CRM",
    summary:
      "Modern open-source alternative to Salesforce. Community-powered CRM built with TypeScript, React, and NestJS.",
    category: "CRM & Business",
    scope: "work",
    useCase:
      "Self-host a full CRM without Salesforce pricing. Customize pipelines, integrations, and automations to your exact workflow.",
    appIdea:
      "DealPilot — fork Twenty, add AI deal scoring that analyzes email sentiment + meeting notes + CRM activity to predict which deals will close and which need attention.",
  },
  {
    id: "gh-10",
    type: "github",
    url: "https://github.com/reacherhq/check-if-email-exists",
    title: "Reacher — Email Verification Without Sending",
    summary:
      "Rust-based tool that verifies if an email address exists without actually sending an email. HTTP backend included.",
    category: "CRM & Business",
    scope: "work",
    useCase:
      "Clean your email lists before campaigns — reduce bounce rates, protect sender reputation, save on email platform costs.",
    appIdea:
      "ListClean Pro — upload a CSV of leads, bulk-verify all emails in seconds, get a confidence score for each, auto-segment into 'safe to send' vs 'risky' buckets.",
  },
  {
    id: "gh-11",
    type: "github",
    url: "https://github.com/google/langextract",
    title: "LangExtract — Structured Data from Unstructured Text",
    summary:
      "Python library that extracts structured information from unstructured text using LLMs with source grounding and interactive visualization.",
    category: "Data & Analytics",
    scope: "work",
    useCase:
      "Parse contracts, clinical notes, legal documents, or support tickets into structured, queryable data automatically.",
    appIdea:
      "ContractIQ — drop in a PDF contract, get a structured breakdown: parties, obligations, deadlines, penalties, renewal terms. Compare two contracts side-by-side.",
  },
  {
    id: "gh-12",
    type: "github",
    url: "https://github.com/RedPlanetHQ/core",
    title: "CORE — Persistent Memory Agent",
    summary:
      "Memory agent that provides persistent context across AI coding tools. Classifies user preferences, decisions, and goals. Integrates with GitHub, Linear, Slack.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Give your AI assistant long-term memory — it remembers your coding style, project decisions, and preferences across sessions.",
    appIdea:
      "DevBrain — a personal knowledge graph that learns from every PR you merge, every Slack message, every doc you write. Ask it 'why did we choose Postgres over Mongo?' and get the answer with sources.",
  },
  {
    id: "gh-13",
    type: "github",
    url: "https://github.com/Ark0N/Claudeman",
    title: "Claudeman — Claude Code Session Manager",
    summary:
      "Web UI for managing Claude Code sessions in GNU Screen. Persistent sessions, auto-respawn, real-time monitoring, multi-session dashboards.",
    category: "Developer Tools",
    scope: "work",
    useCase:
      "Run multiple Claude Code agents in parallel on long tasks — monitor all sessions from one dashboard, auto-restart on failures.",
    appIdea:
      "AgentOps Dashboard — a mission control for all your AI agents across projects. See token usage, task progress, error rates, and cost per agent in real time.",
  },
  {
    id: "gh-14",
    type: "github",
    url: "https://github.com/jshchnz/claude-code-scheduler",
    title: "Claude Code Scheduler — Automated Tasks",
    summary:
      "Plugin that schedules automated Claude Code tasks — code reviews, security audits, and more — running autonomously on a schedule.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Set up nightly code reviews, weekly security scans, and daily dependency checks — all running while you sleep.",
    appIdea:
      "NightShift — a cron-like service for AI tasks. Schedule 'review all PRs at 6am', 'scan for vulnerabilities every Sunday', 'generate weekly changelog every Friday'. Get morning reports.",
  },
  {
    id: "gh-15",
    type: "github",
    url: "https://github.com/wshobson/agents",
    title: "WS Hobson Agents — 73 Claude Code Plugins",
    summary:
      "Marketplace of 73 plugins bundling 112 AI agents, 146 skills, and 79 tools for Claude Code. Modular, single-purpose, token-efficient.",
    category: "Claude Skills & Plugins",
    scope: "work",
    useCase:
      "Cherry-pick exactly the skills you need instead of loading bloated plugin packs. Each plugin is focused and lightweight.",
    appIdea:
      "PluginComposer — visual drag-and-drop builder where you assemble custom Claude Code configurations from a library of plugins. Export as a ready-to-use CLAUDE.md + skills bundle.",
  },
  {
    id: "gh-16",
    type: "github",
    url: "https://github.com/dappboris-dev/polymarket-trading-bot",
    title: "Polymarket Trading Bot — Prediction Markets",
    summary:
      "TypeScript bot that executes arbitrage trades on Polymarket prediction markets. Monitors price discrepancies, auto-executes with risk management.",
    category: "Finance & Trading",
    scope: "work",
    useCase:
      "Automated prediction market trading — exploit price inefficiencies between oracle feeds and the order book.",
    appIdea:
      "OddsEdge — a prediction market analytics dashboard that surfaces mispriced contracts across Polymarket, Kalshi, and Metaculus. Shows expected value, historical accuracy, and one-click trade execution.",
  },
  {
    id: "gh-17",
    type: "github",
    url: "https://github.com/OpenBMB/ChatDev",
    title: "ChatDev 2.0 — Multi-Agent Software Company",
    summary:
      "Zero-code multi-agent platform where AI agents role-play as CEO, CTO, programmer, and tester to build software through conversation.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Simulate an entire dev team — describe what you want built and watch agents collaborate to produce working code.",
    appIdea:
      "StartupSim — describe a business idea, watch AI agents (product manager, designer, engineer, marketer) collaborate to produce a landing page, MVP code, pitch deck, and go-to-market plan.",
  },
  {
    id: "gh-18",
    type: "github",
    url: "https://github.com/ComposioHQ/awesome-claude-skills",
    title: "Composio — Awesome Claude Skills Collection",
    summary:
      "Curated collection of Claude Code skills including invoice organizer, meeting insights, content research, file organizer, image enhancer, and video downloader.",
    category: "Claude Skills & Plugins",
    scope: "work",
    useCase:
      "Browse and install community-built skills that extend Claude Code with document processing, media handling, and workflow automation.",
    appIdea:
      "SkillForge — a GitHub Actions pipeline that auto-tests community Claude skills against sample inputs, generates quality scores, and publishes a verified skill registry.",
  },
  {
    id: "gh-19",
    type: "github",
    url: "https://github.com/anthropics/skills",
    title: "Anthropic Official Skills — Documents & Design",
    summary:
      "Official Anthropic skills for Word, Excel, PowerPoint, PDF processing, frontend design, web app testing, and internal communications.",
    category: "Claude Skills & Plugins",
    scope: "work",
    useCase:
      "Generate and edit business documents (DOCX, XLSX, PPTX, PDF) directly from Claude Code. Build and test web frontends.",
    appIdea:
      "DocBot — a Slack bot powered by Anthropic skills that generates formatted reports, presentations, and spreadsheets from natural language requests. 'Make me a Q4 sales deck from this data.'",
  },
  {
    id: "gh-20",
    type: "github",
    url: "https://github.com/obra/superpowers",
    title: "Superpowers — Core Claude Code Skills",
    summary:
      "Essential skills library: TDD, systematic debugging, brainstorming, code review, parallel agents, git worktrees, defense-in-depth.",
    category: "Claude Skills & Plugins",
    scope: "work",
    useCase:
      "Level up Claude Code with battle-tested development patterns — debug systematically, write tests first, review code thoroughly.",
    appIdea:
      "DevCoach — an AI pair programming coach that watches your Claude Code sessions and suggests when to use TDD, when to branch, when to refactor. Tracks your 'developer skill tree' over time.",
  },
  {
    id: "gh-21",
    type: "github",
    url: "https://github.com/rohunvora/x-research-skill",
    title: "X Research Skill — Twitter Search Agent",
    summary:
      "Claude Code skill for searching X/Twitter in real-time. Find dev discussions, product feedback, breaking news, expert opinions.",
    category: "Claude Skills & Plugins",
    scope: "work",
    useCase:
      "Research what developers and users are saying about any topic on X — competitive intel, sentiment analysis, trend spotting.",
    appIdea:
      "PulseCheck — before launching a feature, auto-search X for sentiment around similar features from competitors. Get a 'launch risk report' with community reactions.",
  },
  {
    id: "gh-22",
    type: "github",
    url: "https://github.com/anthropics/courses",
    title: "Anthropic Courses — Prompt Engineering",
    summary:
      "Official Anthropic educational courses covering real-world prompting, prompt engineering techniques, and best practices.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Learn structured prompt engineering from the source — Anthropic's own training materials for getting the most out of Claude.",
    appIdea:
      "PromptGym — an interactive learning platform where you practice prompt engineering with live feedback. Each lesson has a challenge, you write a prompt, AI grades your output and suggests improvements.",
  },
  {
    id: "gh-23",
    type: "github",
    url: "https://github.com/trailofbits/skills",
    title: "Trail of Bits Security Skills",
    summary:
      "Security-focused Claude Code skills from Trail of Bits: CodeQL, Semgrep, variant analysis, smart contract auditing, property-based testing.",
    category: "Security & Privacy",
    scope: "work",
    useCase:
      "Automate security reviews with industry-standard static analysis tools. Find vulnerabilities before they ship.",
    appIdea:
      "GuardRail CI — a GitHub Action that runs Trail of Bits security skills on every PR. Blocks merge if critical vulnerabilities found. Generates a security report card for each release.",
  },
  {
    id: "gh-24",
    type: "github",
    url: "https://github.com/dwzhu-pku/PaperBanana",
    title: "PaperBanana — Academic Diagram Generator",
    summary:
      "Generates publication-quality methodology diagrams and statistical plots from text descriptions for research papers.",
    category: "Data & Analytics",
    scope: "work",
    useCase:
      "Auto-generate figures for research papers — methodology flowcharts, statistical plots, architecture diagrams — from plain text descriptions.",
    appIdea:
      "FigureForge — paste your paper's methodology section, get 5 different professional diagram styles to choose from. Export as SVG/PDF ready for journal submission.",
  },
  {
    id: "gh-25",
    type: "github",
    url: "https://github.com/rohitg00/awesome-openclaw",
    title: "Awesome OpenClaw — Multi-Machine AI",
    summary:
      "Curated resources for OpenClaw — orchestrating AI agents across multiple machines for distributed computing.",
    category: "AI Agents & Automation",
    scope: "work",
    useCase:
      "Distribute AI workloads across multiple Macs or servers — run parallel agents on separate machines for massive speedups.",
    appIdea:
      "ClusterBrain — connect your old laptops into an AI compute cluster. Drag tasks to machines, auto-balance load, see a unified dashboard of all agents working across your fleet.",
  },

  // ═══════════════════════════════════════
  // GITHUB — YOUR PERSONAL PROJECTS
  // ═══════════════════════════════════════
  {
    id: "my-1",
    type: "github",
    url: "https://github.com/MithunXcpu/mithunsnottechnical",
    title: "Portfolio + Blog",
    summary:
      "Personal portfolio and blog with automated content pipeline. GitHub Actions pulls podcast transcripts, generates derivative blog posts, auto-tweets.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Automated content marketing — zero-touch blog generation from podcast transcripts with social media distribution.",
    appIdea:
      "ContentEngine — a SaaS version of your blog pipeline. Users connect a podcast RSS feed, pick a voice/angle, and get weekly derivative blog posts auto-published.",
  },
  {
    id: "my-2",
    type: "github",
    url: "https://github.com/MithunXcpu/printing-in-2d",
    title: "Printing in 2D — AI Micro-Tool Builder",
    summary:
      "Platform for building and deploying small AI-powered tools quickly. Describe what you need, get a working micro-tool.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Rapid prototyping of single-purpose AI tools — calculators, converters, analyzers — without setting up full projects.",
    appIdea:
      "ToolMint — a marketplace where anyone can describe a micro-tool in plain English, AI builds it, and it gets a shareable URL. Monetize popular tools with ads or subscriptions.",
  },
  {
    id: "my-3",
    type: "github",
    url: "https://github.com/MithunXcpu/spoke",
    title: "Spoke — Screenshot to Tool",
    summary:
      "Upload a screenshot of any UI or tool, and AI reverse-engineers it into a working web application.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Clone any tool's UI from a screenshot — rapid competitive analysis, prototyping, or rebuilding legacy interfaces.",
    appIdea:
      "UIClone Pro — enterprise version that ingests competitor screenshots, generates working React components, and tracks UI changes over time with diff reports.",
  },
  {
    id: "my-4",
    type: "github",
    url: "https://github.com/MithunXcpu/captain-brunch",
    title: "Caption Brunch — Bill Splitting App",
    summary:
      "Retro diner-themed bill splitting app. Split bills instantly at brunch, lunch, or dinner with friends.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Solve the awkward 'who owes what' problem at group meals with a fun, themed interface.",
    appIdea:
      "TabSettle — add receipt scanning (OCR), automatic item-to-person assignment via photo of the table, and Venmo/Zelle integration for instant settlement.",
  },
  {
    id: "my-5",
    type: "github",
    url: "https://github.com/MithunXcpu/interview-manager",
    title: "Interview Manager v1 — Hiring Pipeline",
    summary:
      "Hiring pipeline management tool for tracking candidates through interview stages with structured feedback.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Organize hiring workflows — track candidates, schedule interviews, collect feedback, make data-driven hiring decisions.",
    appIdea:
      "HireSignal — add AI scoring that analyzes interview transcripts, detects red/green flags, and generates a 'hire confidence score' with reasoning for each candidate.",
  },
  {
    id: "my-6",
    type: "github",
    url: "https://github.com/MithunXcpu/signalroom",
    title: "SignalRoom — AI Call Intelligence",
    summary:
      "AI-powered call intelligence platform that analyzes sales/support calls for insights, action items, and coaching opportunities.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Transform every call into structured data — auto-extract action items, sentiment, objections, and next steps.",
    appIdea:
      "CallCoach — real-time overlay during sales calls showing talk/listen ratio, suggested responses, competitor mentions, and buying signals. Post-call generates a coaching report.",
  },
  {
    id: "my-7",
    type: "github",
    url: "https://github.com/MithunXcpu/esg-mesh",
    title: "ESG Mesh — ESG Scoring Platform",
    summary:
      "Environmental, Social, and Governance scoring platform that evaluates companies on sustainability metrics.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Help investors and companies track ESG compliance, identify risks, and benchmark against industry standards.",
    appIdea:
      "GreenLens — browser extension that shows an ESG score overlay when you visit any public company's website. Pull data from SEC filings, news, and social media in real-time.",
  },
  {
    id: "my-8",
    type: "github",
    url: "https://github.com/MithunXcpu/value-calculator",
    title: "Value Calculator — ROI Modeling",
    summary:
      "ROI modeling tool that helps businesses calculate the value and return on investment of products or services.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Sales enablement — give prospects a customized ROI calculation to justify purchase decisions.",
    appIdea:
      "DealMath — embeddable ROI calculator widget that any SaaS company can add to their pricing page. Prospects input their numbers, get a personalized business case PDF.",
  },
  {
    id: "my-9",
    type: "github",
    url: "https://github.com/MithunXcpu/sovos-tax-mvp",
    title: "Sovos Tax MVP — Tax Compliance Dashboard",
    summary:
      "Tax compliance dashboard for managing tax obligations, filings, and regulatory requirements.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Centralize tax compliance tracking — deadlines, filings, jurisdictions, and audit readiness in one view.",
    appIdea:
      "TaxRadar — AI monitors regulatory changes across all 50 states + federal, alerts you when new rules affect your business, auto-generates compliance checklists.",
  },
  {
    id: "my-10",
    type: "github",
    url: "https://github.com/MithunXcpu/buyerintent",
    title: "BuyerIntent — Purchase Signal Detection",
    summary:
      "Tool for detecting and analyzing buyer intent signals from web behavior, content engagement, and digital footprints.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Identify which website visitors are ready to buy based on their behavior patterns — prioritize sales outreach accordingly.",
    appIdea:
      "IntentIQ — a Clearbit-style enrichment API that scores any email/domain for purchase intent. Integrates with CRMs to auto-prioritize hot leads.",
  },
  {
    id: "my-11",
    type: "github",
    url: "https://github.com/MithunXcpu/tiny-crm",
    title: "Tiny CRM — Minimal CRM",
    summary:
      "Lightweight, no-bloat CRM for freelancers and small teams who don't need Salesforce complexity.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Simple contact and deal tracking for solopreneurs — no training required, no feature bloat.",
    appIdea:
      "InboxCRM — a CRM that lives in your email sidebar. Auto-creates contacts from emails, tracks conversations, and surfaces 'follow up' reminders without ever leaving Gmail.",
  },
  {
    id: "my-12",
    type: "github",
    url: "https://github.com/MithunXcpu/antfarm",
    title: "AntFarm — Multi-Agent System",
    summary:
      "Multi-agent orchestration system where specialized AI agents collaborate on complex tasks.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Decompose complex projects into parallel agent workflows — each agent specializes in one domain, a supervisor coordinates.",
    appIdea:
      "AgentFarm — a visual agent builder where you design agent teams with drag-and-drop. Define roles, communication flows, and handoff rules. Deploy as an API endpoint.",
  },
  {
    id: "my-13",
    type: "github",
    url: "https://github.com/MithunXcpu/ralph",
    title: "Ralph — Autonomous Agent from PRDs",
    summary:
      "Autonomous AI agent that takes Product Requirements Documents and executes them as working software.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Write a PRD, hand it to Ralph, get working code. Bridges the gap between product thinking and engineering execution.",
    appIdea:
      "PRD2App — a SaaS where PMs write requirements in a guided template, AI generates the app, deploys it to a staging URL, and PM can iterate with natural language feedback.",
  },
  {
    id: "my-14",
    type: "github",
    url: "https://github.com/MithunXcpu/mlb-news",
    title: "MLB News — Baseball News Aggregator",
    summary:
      "Aggregates and displays MLB baseball news, scores, and updates in a clean interface.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Niche content aggregation — pull from multiple sources, deduplicate, and present a unified sports news feed.",
    appIdea:
      "FanFeed — a white-label sports news app template. Pick any sport/league, auto-aggregate from 20+ sources, add AI-generated hot takes and game predictions.",
  },
  {
    id: "my-15",
    type: "github",
    url: "https://github.com/MithunXcpu/job-tracker",
    title: "Job Tracker — Application Pipeline",
    summary:
      "Track job applications through stages — applied, phone screen, interview, offer — with notes and follow-up reminders.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Organize your job search — never lose track of where you applied, what stage you're at, or when to follow up.",
    appIdea:
      "ApplyPilot — auto-fill job applications using your stored profile, track everything, and use AI to tailor your resume/cover letter for each specific role.",
  },
  {
    id: "my-16",
    type: "github",
    url: "https://github.com/MithunXcpu/tvcode",
    title: "TVCode — Code on Your TV",
    summary:
      "Display and interact with code on a TV screen — optimized for large displays and living room coding sessions.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Code reviews and pair programming on a big screen — great for team sessions, presentations, or just vibing while coding on the couch.",
    appIdea:
      "ScreenCast IDE — a TV-optimized coding environment controlled by voice or phone. 'Hey ScreenCast, open the auth module and run the tests.' Perfect for accessibility.",
  },
  {
    id: "my-17",
    type: "github",
    url: "https://github.com/MithunXcpu/valentine",
    title: "Valentine — Valentine's Day App",
    summary:
      "A themed Valentine's Day web experience — likely an interactive card, quiz, or romantic gesture generator.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Seasonal/event-driven micro-apps — quick, themed experiences that go viral during holidays.",
    appIdea:
      "SeasonalKit — a template library of holiday micro-apps (Valentine's, Halloween, Christmas). Each one is a shareable, customizable web experience. Monetize through custom branding.",
  },
  {
    id: "my-18",
    type: "github",
    url: "https://github.com/MithunXcpu/psych-references",
    title: "Psych References — Psychology Resources",
    summary:
      "Curated collection of psychology references, research papers, and mental models for decision-making.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Quick access to psychological frameworks — cognitive biases, persuasion principles, behavioral economics — for product design and marketing.",
    appIdea:
      "MindMap Cards — flashcard app of 200+ cognitive biases and psychological principles. Each card shows the bias, a real-world example, and how to use it (or defend against it) in business.",
  },
  {
    id: "my-19",
    type: "github",
    url: "https://github.com/MithunXcpu/cleargov-demo",
    title: "ClearGov Demo — Government Transparency",
    summary:
      "Demo of a government transparency and civic data platform showing budget data, spending, and community metrics.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Make government spending data accessible and understandable for citizens through visualizations and plain-English summaries.",
    appIdea:
      "CivicPulse — a neighborhood-level dashboard showing where your tax dollars go, upcoming city council votes that affect you, and one-click email to your representatives.",
  },
  {
    id: "my-20",
    type: "github",
    url: "https://github.com/MithunXcpu/personal-software-builder",
    title: "Personal Software Builder",
    summary:
      "Tool for building personal software tools — custom utilities tailored to your specific workflow needs.",
    category: "My Projects",
    scope: "personal",
    useCase:
      "Empower non-developers to describe and generate custom tools that solve their unique workflow problems.",
    appIdea:
      "MyToolKit — describe a tool in plain English ('I need something that checks my email every hour and texts me if any email contains the word urgent'), AI builds and deploys it.",
  },
];
