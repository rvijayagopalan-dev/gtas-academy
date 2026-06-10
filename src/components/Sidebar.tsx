"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { modules } from "@/data/modules";
import { disciplines } from "@/data/disciplines";
import clsx from "clsx";
import { BookOpen, Home, Zap, ChevronRight, Layers } from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-card border-r border-border flex flex-col z-40 overflow-hidden">
      {/* Brand */}
      <div className="p-5 border-b border-border flex-shrink-0">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-violet-600 to-indigo-700 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-900/30">
            G
          </div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">
              GTAS Academy
            </div>
            <div className="text-gray-500 text-xs">Adaptive Systems</div>
          </div>
        </Link>
      </div>

      {/* Home link */}
      <div className="px-3 pt-3 flex-shrink-0">
        <Link
          href="/"
          className={clsx(
            "flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium transition-all",
            pathname === "/"
              ? "bg-violet-600/20 text-violet-300 border border-violet-600/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
          )}
        >
          <Home size={16} />
          <span>Dashboard</span>
        </Link>
      </div>

      {/* Scrollable nav area */}
      <div className="flex-1 overflow-y-auto px-3 pt-2 pb-4 scrollbar-thin">
        {/* Modules */}
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 py-2 mt-1">
          Modules
        </div>
        <nav className="space-y-0.5">
          {modules.map((module) => {
            const isActive = pathname === `/modules/${module.slug}`;
            return (
              <Link
                key={module.slug}
                href={`/modules/${module.slug}`}
                className={clsx(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all group",
                  isActive
                    ? "bg-violet-600/20 text-violet-200 border border-violet-600/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                <span className="text-base w-5 flex-shrink-0 text-center">{module.icon}</span>
                <span className="truncate flex-1 font-medium">{module.title}</span>
                {isActive && <ChevronRight size={14} className="flex-shrink-0 text-violet-400" />}
              </Link>
            );
          })}
        </nav>

        {/* Deep Dives */}
        <div className="text-xs font-semibold text-gray-500 uppercase tracking-widest px-3 py-2 mt-4 flex items-center gap-1.5">
          <Layers size={11} />
          Deep Dives
        </div>
        <Link
          href="/disciplines"
          className={clsx(
            "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all mb-1",
            pathname === "/disciplines"
              ? "bg-violet-600/20 text-violet-300 border border-violet-600/30"
              : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
          )}
        >
          <span className="text-base w-5 flex-shrink-0 text-center">🗂️</span>
          <span className="font-medium">All Disciplines</span>
        </Link>
        <nav className="space-y-0.5">
          {disciplines.map((discipline) => {
            const isActive = pathname === `/disciplines/${discipline.slug}`;
            return (
              <Link
                key={discipline.slug}
                href={`/disciplines/${discipline.slug}`}
                className={clsx(
                  "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-all group",
                  isActive
                    ? "bg-violet-600/20 text-violet-200 border border-violet-600/30"
                    : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                )}
              >
                <span className="text-base w-5 flex-shrink-0 text-center">{discipline.icon}</span>
                <span className="truncate flex-1 font-medium">{discipline.shortName}</span>
                {isActive && <ChevronRight size={14} className="flex-shrink-0 text-violet-400" />}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border flex-shrink-0">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <BookOpen size={12} />
          <span>{modules.length} modules · {disciplines.length} deep dives</span>
          <span className="mx-1">·</span>
          <Zap size={12} />
          <span>AI Tutor enabled</span>
        </div>
      </div>
    </aside>
  );
}
