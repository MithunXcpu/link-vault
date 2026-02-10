"use client";

import { useState, useMemo } from "react";
import { links, type LinkEntry, type LinkCategory } from "./data";

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

const typeFilters = ["all", "tweet", "github"] as const;
type TypeFilter = (typeof typeFilters)[number];

function TypeIcon({ type }: { type: "tweet" | "github" }) {
  if (type === "tweet") {
    return (
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
    </svg>
  );
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
          <span
            className={`shrink-0 p-1.5 rounded-lg ${
              entry.type === "tweet"
                ? "bg-tweet-light text-tweet"
                : entry.category === "My Projects"
                  ? "bg-myproject-light text-myproject"
                  : "bg-github-light text-github"
            }`}
          >
            <TypeIcon type={entry.type} />
          </span>
          <h3 className="font-semibold text-sm leading-tight truncate">
            {entry.title}
          </h3>
        </div>
        <span
          className={`shrink-0 text-[11px] font-medium px-2 py-0.5 rounded-full border ${categoryColors[entry.category]}`}
        >
          {entry.category}
        </span>
      </div>

      {/* Summary */}
      <p className="text-muted text-[13px] leading-relaxed mb-3">
        {entry.summary}
      </p>

      {/* Expanded content */}
      {expanded && (
        <div className="space-y-3 pt-3 border-t border-border animate-in fade-in duration-200">
          {/* Use Case */}
          <div>
            <div className="flex items-center gap-1.5 mb-1">
              <svg
                className="w-3.5 h-3.5 text-accent"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                />
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
              <svg
                className="w-3.5 h-3.5 text-myproject"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-xs font-semibold uppercase tracking-wider text-myproject">
                App Idea
              </span>
            </div>
            <p className="text-[13px] text-foreground/80 leading-relaxed">
              {entry.appIdea}
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-2 pt-1">
            <a
              href={entry.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-accent hover:text-accent/80 transition-colors"
            >
              <svg
                className="w-3 h-3"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
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
          <svg
            className="w-3 h-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
          Click for use case & app idea
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

export default function Home() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<LinkCategory | "all">(
    "all"
  );
  const [activeType, setActiveType] = useState<TypeFilter>("all");

  const filtered = useMemo(() => {
    return links.filter((link) => {
      const matchesSearch =
        search === "" ||
        link.title.toLowerCase().includes(search.toLowerCase()) ||
        link.summary.toLowerCase().includes(search.toLowerCase()) ||
        link.appIdea.toLowerCase().includes(search.toLowerCase()) ||
        link.useCase.toLowerCase().includes(search.toLowerCase());

      const matchesCategory =
        activeCategory === "all" || link.category === activeCategory;

      const matchesType = activeType === "all" || link.type === activeType;

      return matchesSearch && matchesCategory && matchesType;
    });
  }, [search, activeCategory, activeType]);

  const stats = useMemo(
    () => ({
      total: links.length,
      tweets: links.filter((l) => l.type === "tweet").length,
      repos: links.filter((l) => l.type === "github").length,
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
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
              </svg>
            </div>
            <h1 className="text-lg font-bold tracking-tight">Link Vault</h1>
          </div>
          <div className="text-xs text-muted font-mono">
            {stats.total} links cataloged
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
            Tweets and GitHub repos from my Claude conversations — categorized,
            summarized, with a unique app idea for each. No overlaps.
          </p>
        </section>

        {/* Stats */}
        <section className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
          <StatCard
            label="Total Links"
            value={stats.total}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                />
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
            label="Categories"
            value={stats.categories}
            icon={
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z"
                />
              </svg>
            }
          />
        </section>

        {/* Search + Filters */}
        <section className="mb-6 space-y-4">
          {/* Search */}
          <div className="relative">
            <svg
              className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <input
              type="text"
              placeholder="Search links, summaries, app ideas..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-border rounded-xl bg-surface text-sm placeholder:text-muted/50 focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all"
            />
          </div>

          {/* Type filter */}
          <div className="flex items-center gap-2">
            {typeFilters.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg border transition-all ${
                  activeType === type
                    ? "bg-foreground text-background border-foreground"
                    : "bg-white text-muted border-border hover:border-foreground/20"
                }`}
              >
                {type === "all"
                  ? "All"
                  : type === "tweet"
                    ? "Tweets"
                    : "GitHub"}
              </button>
            ))}
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
          <span className="font-mono">link-vault v1.0</span>
        </div>
      </footer>
    </div>
  );
}
