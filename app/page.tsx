"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import {
  links,
  type LinkEntry,
  type LinkCategory,
  type LinkScope,
  type LinkType,
} from "./data";

const categories: LinkCategory[] = [
  "AI Agents & Automation",
  "Developer Tools",
  "Security & Privacy",
  "Data & Analytics",
  "CRM & Business",
  "Creative & Media",
  "Finance & Trading",
  "Productivity",
  "Claude Skills & Plugins",
  "My Projects",
];

const categoryColors: Record<LinkCategory, string> = {
  "AI Agents & Automation": "bg-violet-50 text-violet-700 border-violet-200",
  "Developer Tools": "bg-blue-50 text-blue-700 border-blue-200",
  "Security & Privacy": "bg-red-50 text-red-700 border-red-200",
  "Data & Analytics": "bg-amber-50 text-amber-700 border-amber-200",
  "CRM & Business": "bg-emerald-50 text-emerald-700 border-emerald-200",
  "Creative & Media": "bg-pink-50 text-pink-700 border-pink-200",
  "Finance & Trading": "bg-orange-50 text-orange-700 border-orange-200",
  Productivity: "bg-cyan-50 text-cyan-700 border-cyan-200",
  "Claude Skills & Plugins": "bg-indigo-50 text-indigo-700 border-indigo-200",
  "My Projects": "bg-green-50 text-green-700 border-green-200",
};

const typeFilters: LinkType[] = ["tweet", "github", "article", "agent", "skill"];

const typeLabels: Record<LinkType, string> = {
  tweet: "Tweets",
  github: "GitHub",
  article: "Articles",
  agent: "Agents",
  skill: "Skills",
};

function TypeIcon({ type }: { type: LinkType }) {
  if (type === "tweet") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (type === "article") {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
      </svg>
    );
  }
  if (type === "agent") {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    );
  }
  if (type === "skill") {
    return (
      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function typeColor(type: LinkType, category?: LinkCategory) {
  if (type === "tweet") return "bg-tweet-light text-tweet";
  if (type === "article") return "bg-article-light text-article";
  if (type === "agent") return "bg-agent-light text-agent";
  if (type === "skill") return "bg-skill-light text-skill";
  if (category === "My Projects") return "bg-myproject-light text-myproject";
  return "bg-github-light text-github";
}

function LinkCard({ entry }: { entry: LinkEntry }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="group border border-border rounded-xl p-5 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer"
      onClick={() => setExpanded(!expanded)}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-3">
        <div className="flex items-center gap-2.5 min-w-0">
          <span className={`shrink-0 p-1.5 rounded-lg ${typeColor(entry.type, entry.category)}`}>
            <TypeIcon type={entry.type} />
          </span>
          <h3 className="font-semibold text-sm leading-tight truncate">
            {entry.title}
          </h3>
        </div>
        <div className="flex items-center gap-1.5 shrink-0">
          {entry.model && (
            <span className="text-[10px] font-mono font-medium px-1.5 py-0.5 rounded-full bg-violet-50 text-violet-600 border border-violet-200">
              {entry.model}
            </span>
          )}
          <span
            className={`text-[10px] font-medium px-1.5 py-0.5 rounded-full border ${
              entry.scope === "work"
                ? "bg-blue-50 text-blue-600 border-blue-200"
                : "bg-emerald-50 text-emerald-600 border-emerald-200"
            }`}
          >
            {entry.scope === "work" ? "work" : "personal"}
          </span>
          <span
            className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[entry.category]}`}
          >
            {entry.category}
          </span>
        </div>
      </div>

      {/* Summary */}
      <p className="text-muted text-[13px] leading-relaxed mb-3">
        {entry.summary}
      </p>

      {/* Tags */}
      {entry.tags && entry.tags.length > 0 && (
        <div className="flex flex-wrap gap-1 mb-3">
          {entry.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-surface text-muted border border-border"
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* Expanded content */}
      {expanded && (
        <div className="space-y-3 pt-3 border-t border-border animate-in fade-in duration-200">
          {/* Use Case */}
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-accent">
                Use Case
              </span>
            </div>
            <p className="text-[13px] text-foreground/80 leading-relaxed">
              {entry.useCase}
            </p>
          </div>

          {/* App Idea */}
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <svg className="w-3.5 h-3.5 text-myproject" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-myproject">
                {entry.type === "agent" || entry.type === "skill" ? "How to Use" : "App Idea"}
              </span>
            </div>
            <p className="text-[13px] text-foreground/80 leading-relaxed">
              {entry.appIdea}
            </p>
          </div>

          {/* Location for agents/skills */}
          {entry.location && (
            <div className="flex items-center gap-1.5 text-[11px] text-muted font-mono bg-surface rounded-lg px-3 py-1.5">
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
              {entry.location}
            </div>
          )}

          {/* Links */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Link
            </a>
            {entry.hasGithub && entry.githubUrl && (
              <a
                href={entry.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-github hover:text-github/70 transition-colors"
              >
                <TypeIcon type="github" />
                Repo
              </a>
            )}
          </div>
        </div>
      )}

      {/* Expand hint */}
      {!expanded && (
        <div className="flex items-center gap-1 text-[11px] text-muted/60 mt-1">
          <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
          Click for details
        </div>
      )}
    </div>
  );
}

function StatCard({
  label,
  value,
  icon,
}: {
  label: string;
  value: number;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 bg-surface rounded-xl px-4 py-3 border border-border">
      <div className="text-accent">{icon}</div>
      <div>
        <div className="text-2xl font-bold tracking-tight">{value}</div>
        <div className="text-xs text-muted">{label}</div>
      </div>
    </div>
  );
}

interface StagedEntry {
  id: string;
  title: string;
  url: string;
  type: LinkType;
  category: LinkCategory;
  scope: LinkScope;
  summary: string;
  useCase: string;
  appIdea: string;
  tags: string;
  createdAt: number;
}

function QuickAddModal({
  onClose,
  onAdd,
}: {
  onClose: () => void;
  onAdd: (entry: StagedEntry) => void;
}) {
  const [form, setForm] = useState<Omit<StagedEntry, "id" | "createdAt">>({
    title: "",
    url: "",
    type: "github",
    category: "Developer Tools",
    scope: "work",
    summary: "",
    useCase: "",
    appIdea: "",
    tags: "",
  });
  const [copied, setCopied] = useState(false);

  const tsOutput = useMemo(() => {
    const tagsArr = form.tags
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
    const tagStr = tagsArr.length > 0 ? `\n    tags: [${tagsArr.map((t) => `"${t}"`).join(", ")}],` : "";
    return `{
    id: "new-${Date.now()}",
    type: "${form.type}",
    url: "${form.url}",
    title: "${form.title}",
    summary: "${form.summary}",
    category: "${form.category}",
    scope: "${form.scope}",
    useCase: "${form.useCase}",
    appIdea: "${form.appIdea}",${tagStr}
  },`;
  }, [form]);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(tsOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [tsOutput]);

  const handleSubmit = () => {
    if (!form.title || !form.url) return;
    onAdd({
      ...form,
      id: `staged-${Date.now()}`,
      createdAt: Date.now(),
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-5 border-b border-border">
          <h2 className="text-lg font-bold">Quick Add Link</h2>
          <button onClick={onClose} className="text-muted hover:text-foreground transition-colors">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="p-5 space-y-4">
          {/* Title + URL */}
          <div className="grid grid-cols-1 gap-3">
            <input
              type="text"
              placeholder="Title"
              value={form.title}
              onChange={(e) => setForm({ ...form, title: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
            <input
              type="url"
              placeholder="URL"
              value={form.url}
              onChange={(e) => setForm({ ...form, url: e.target.value })}
              className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
            />
          </div>

          {/* Type + Category + Scope */}
          <div className="grid grid-cols-3 gap-3">
            <select
              value={form.type}
              onChange={(e) => setForm({ ...form, type: e.target.value as LinkType })}
              className="px-3 py-2 border border-border rounded-lg bg-surface text-sm"
            >
              {typeFilters.map((t) => (
                <option key={t} value={t}>{typeLabels[t]}</option>
              ))}
            </select>
            <select
              value={form.category}
              onChange={(e) => setForm({ ...form, category: e.target.value as LinkCategory })}
              className="px-3 py-2 border border-border rounded-lg bg-surface text-sm"
            >
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
            <select
              value={form.scope}
              onChange={(e) => setForm({ ...form, scope: e.target.value as LinkScope })}
              className="px-3 py-2 border border-border rounded-lg bg-surface text-sm"
            >
              <option value="work">Work</option>
              <option value="personal">Personal</option>
            </select>
          </div>

          {/* Summary */}
          <textarea
            placeholder="Summary"
            value={form.summary}
            onChange={(e) => setForm({ ...form, summary: e.target.value })}
            rows={2}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />

          {/* Use Case + App Idea */}
          <textarea
            placeholder="Use case"
            value={form.useCase}
            onChange={(e) => setForm({ ...form, useCase: e.target.value })}
            rows={2}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />
          <textarea
            placeholder="App idea"
            value={form.appIdea}
            onChange={(e) => setForm({ ...form, appIdea: e.target.value })}
            rows={2}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm resize-none focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />

          {/* Tags */}
          <input
            type="text"
            placeholder="Tags (comma-separated)"
            value={form.tags}
            onChange={(e) => setForm({ ...form, tags: e.target.value })}
            className="w-full px-3 py-2 border border-border rounded-lg bg-surface text-sm focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
          />

          {/* Generated TypeScript */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-muted">
                Generated TypeScript
              </span>
              <button
                onClick={handleCopy}
                className="text-[11px] font-medium text-accent hover:text-accent/80 transition-colors"
              >
                {copied ? "Copied!" : "Copy"}
              </button>
            </div>
            <pre className="text-[11px] bg-surface border border-border rounded-lg p-3 overflow-x-auto font-mono text-foreground/70 leading-relaxed">
              {tsOutput}
            </pre>
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <button
              onClick={handleSubmit}
              disabled={!form.title || !form.url}
              className="flex-1 py-2.5 bg-accent text-white text-sm font-medium rounded-lg hover:bg-accent/90 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            >
              Stage Entry
            </button>
            <button
              onClick={handleCopy}
              className="px-4 py-2.5 border border-border text-sm font-medium rounded-lg hover:bg-surface transition-colors"
            >
              Copy Only
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<LinkCategory | "all">("all");
  const [activeType, setActiveType] = useState<LinkType | "all">("all");
  const [activeScope, setActiveScope] = useState<LinkScope | "all">("all");
  const [showQuickAdd, setShowQuickAdd] = useState(false);
  const [stagedEntries, setStagedEntries] = useState<StagedEntry[]>([]);
  const [showStaged, setShowStaged] = useState(false);

  // Load staged entries from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("link-vault-staged");
    if (saved) {
      try {
        setStagedEntries(JSON.parse(saved));
      } catch {
        // ignore parse errors
      }
    }
  }, []);

  // Save staged entries to localStorage
  useEffect(() => {
    localStorage.setItem("link-vault-staged", JSON.stringify(stagedEntries));
  }, [stagedEntries]);

  const handleAddStaged = useCallback((entry: StagedEntry) => {
    setStagedEntries((prev) => [entry, ...prev]);
  }, []);

  const handleRemoveStaged = useCallback((id: string) => {
    setStagedEntries((prev) => prev.filter((e) => e.id !== id));
  }, []);

  const filtered = useMemo(() => {
    return links.filter((link) => {
      const searchLower = search.toLowerCase();
      const matchesSearch =
        search === "" ||
        link.title.toLowerCase().includes(searchLower) ||
        link.summary.toLowerCase().includes(searchLower) ||
        link.appIdea.toLowerCase().includes(searchLower) ||
        link.useCase.toLowerCase().includes(searchLower) ||
        (link.tags && link.tags.some((t) => t.toLowerCase().includes(searchLower)));

      const matchesCategory =
        activeCategory === "all" || link.category === activeCategory;

      const matchesType = activeType === "all" || link.type === activeType;

      const matchesScope = activeScope === "all" || link.scope === activeScope;

      return matchesSearch && matchesCategory && matchesType && matchesScope;
    });
  }, [search, activeCategory, activeType, activeScope]);

  const stats = useMemo(
    () => ({
      total: links.length,
      tweets: links.filter((l) => l.type === "tweet").length,
      repos: links.filter((l) => l.type === "github").length,
      agents: links.filter((l) => l.type === "agent").length,
      skills: links.filter((l) => l.type === "skill").length,
      categories: new Set(links.map((l) => l.category)).size,
    }),
    []
  );

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            </div>
            <h1 className="text-lg font-bold tracking-tight">Link Vault</h1>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowQuickAdd(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium bg-accent text-white rounded-lg hover:bg-accent/90 transition-colors"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
              Quick Add
            </button>
            <div className="text-xs text-muted font-mono">
              {stats.total} links cataloged
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 sm:px-6 py-8">
        {/* Hero */}
        <section className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-2">
            Every link, one place.
          </h2>
          <p className="text-muted text-base max-w-xl">
            Tweets, repos, articles, agents, and skills — categorized,
            summarized, with a unique use case for each.
          </p>
        </section>

        {/* Staged Entries */}
        {stagedEntries.length > 0 && (
          <section className="mb-6">
            <button
              onClick={() => setShowStaged(!showStaged)}
              className="flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors mb-2"
            >
              <svg className={`w-4 h-4 transition-transform ${showStaged ? "rotate-90" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
              {stagedEntries.length} staged {stagedEntries.length === 1 ? "entry" : "entries"} (pending commit)
            </button>
            {showStaged && (
              <div className="space-y-2 pl-6">
                {stagedEntries.map((entry) => (
                  <div key={entry.id} className="flex items-center justify-between bg-amber-50 border border-amber-200 rounded-lg px-4 py-2">
                    <div>
                      <span className="text-sm font-medium">{entry.title}</span>
                      <span className="text-[11px] text-muted ml-2">{entry.type} / {entry.category}</span>
                    </div>
                    <button
                      onClick={() => handleRemoveStaged(entry.id)}
                      className="text-red-400 hover:text-red-600 transition-colors"
                    >
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-8">
          <StatCard
            label="Total Links"
            value={stats.total}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
              </svg>
            }
          />
          <StatCard
            label="Tweets"
            value={stats.tweets}
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            }
          />
          <StatCard
            label="GitHub Repos"
            value={stats.repos}
            icon={
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
            }
          />
          <StatCard
            label="Agents"
            value={stats.agents}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            }
          />
          <StatCard
            label="Skills"
            value={stats.skills}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            }
          />
          <StatCard
            label="Categories"
            value={stats.categories}
            icon={
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            }
          />
        </section>

        {/* Search + Filters */}
        <section className="mb-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              type="text"
              placeholder="Search links, summaries, tags, app ideas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl bg-surface text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>

          {/* Scope toggle */}
          <div className="flex items-center gap-2">
            <span className="text-xs text-muted mr-1">Scope:</span>
            {(["all", "work", "personal"] as const).map((scope) => {
              const scopeCount =
                scope === "all"
                  ? links.length
                  : links.filter((l) => l.scope === scope).length;
              return (
                <button
                  key={scope}
                  onClick={() => setActiveScope(scope)}
                  className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    activeScope === scope
                      ? scope === "work"
                        ? "bg-blue-600 text-white border-blue-600"
                        : scope === "personal"
                          ? "bg-emerald-600 text-white border-emerald-600"
                          : "bg-foreground text-background border-foreground"
                      : "bg-white text-muted border-border hover:border-foreground/20"
                  }`}
                >
                  {scope === "all" ? "All" : scope === "work" ? "Work" : "Personal"}
                  <span className="opacity-60 ml-1">{scopeCount}</span>
                </button>
              );
            })}
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setActiveType("all")}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                activeType === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-white text-muted border-border hover:border-foreground/20"
              }`}
            >
              All
            </button>
            {typeFilters.map((type) => {
              const count = links.filter((l) => l.type === type).length;
              if (count === 0) return null;
              return (
                <button
                  key={type}
                  onClick={() => setActiveType(type)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                    activeType === type
                      ? "bg-foreground text-background border-foreground"
                      : "bg-white text-muted border-border hover:border-foreground/20"
                  }`}
                >
                  <TypeIcon type={type} />
                  {typeLabels[type]}
                  <span className="opacity-50">{count}</span>
                </button>
              );
            })}
          </div>

          {/* Category filter */}
          <div className="flex flex-wrap gap-1.5">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-2.5 py-1 text-[11px] font-medium rounded-full border transition-all ${
                activeCategory === "all"
                  ? "bg-foreground text-background border-foreground"
                  : "bg-white text-muted border-border hover:border-foreground/20"
              }`}
            >
              All Categories
            </button>
            {categories.map((cat) => {
              const count = links.filter((l) => l.category === cat).length;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-2.5 py-1 text-[11px] font-medium rounded-full border transition-all ${
                    activeCategory === cat
                      ? `${categoryColors[cat]} border-current`
                      : "bg-white text-muted border-border hover:border-foreground/20"
                  }`}
                >
                  {cat}{" "}
                  <span className="opacity-50 ml-0.5">{count}</span>
                </button>
              );
            })}
          </div>
        </section>

        {/* Results count */}
        <div className="text-xs text-muted mb-4 font-mono">
          {filtered.length} of {links.length} links
        </div>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {filtered.map((entry) => (
            <LinkCard key={entry.id} entry={entry} />
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full text-center py-16">
              <div className="text-4xl mb-3">0</div>
              <p className="text-muted text-sm">
                No links match your filters. Try adjusting your search.
              </p>
            </div>
          )}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border py-6">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between text-xs text-muted">
          <span>
            Built by{" "}
            <a
              href="https://github.com/MithunXcpu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground font-medium hover:text-accent transition-colors"
            >
              Mithun
            </a>
          </span>
          <span className="font-mono">link-vault v2.0</span>
        </div>
      </footer>

      {/* Quick Add Modal */}
      {showQuickAdd && (
        <QuickAddModal onClose={() => setShowQuickAdd(false)} onAdd={handleAddStaged} />
      )}
    </div>
  );
}
