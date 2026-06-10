"use client";

import "./globals.css";
import Sidebar from "@/components/Sidebar";
import AIChatPanel from "@/components/AIChatPanel";
import { useState } from "react";
import { Sparkles, Menu, X } from "lucide-react";
import Link from "next/link";
import clsx from "clsx";

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-1.5 rounded-lg text-sm text-gray-400 hover:text-white hover:bg-white/8 transition-all"
    >
      {children}
    </Link>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [chatOpen, setChatOpen] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <html lang="en">
      <head>
        <title>GTAS Academy — Learn Adaptive Systems</title>
        <meta
          name="description"
          content="Interactive learning platform for the General Theory of Adaptive Systems"
        />
      </head>
      <body className="bg-[#0a0a14] text-gray-100 antialiased">
        {/* Mobile sidebar overlay */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/60 z-30 lg:hidden"
            onClick={() => setSidebarOpen(false)}
          />
        )}

        {/* Sidebar — always visible on desktop, togglable on mobile */}
        <div
          className={clsx(
            "lg:block transition-transform duration-300",
            sidebarOpen ? "block" : "hidden lg:block"
          )}
        >
          <Sidebar />
        </div>

        {/* Main content area */}
        <div
          className={clsx(
            "min-h-screen transition-all duration-300",
            "lg:pl-64",
            chatOpen ? "lg:pr-96" : "lg:pr-0"
          )}
        >
          {/* Top bar */}
          <div className="sticky top-0 z-30 h-14 bg-[#0a0a14]/90 backdrop-blur-md border-b border-border flex items-center justify-between px-4 lg:px-6">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 text-gray-400 hover:text-gray-200 transition-colors"
            >
              {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            {/* Top nav links */}
            <div className="hidden sm:flex items-center gap-1 flex-1 justify-center">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/manifesto">Manifesto</NavLink>
              <NavLink href="/disciplines">Deep Dives</NavLink>
            </div>

            {/* AI Tutor toggle */}
            <button
              onClick={() => setChatOpen(!chatOpen)}
              className={clsx(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all",
                chatOpen
                  ? "bg-violet-600 text-white shadow-lg shadow-violet-900/30"
                  : "bg-white/8 text-gray-400 hover:text-gray-200 hover:bg-white/12 border border-border"
              )}
            >
              <Sparkles size={15} />
              <span>AI Tutor</span>
            </button>
          </div>

          {/* Page content */}
          <main className="relative z-10 px-4 lg:px-8 py-8">{children}</main>
        </div>

        {/* AI Chat Panel */}
        <AIChatPanel isOpen={chatOpen} onClose={() => setChatOpen(false)} />
      </body>
    </html>
  );
}
