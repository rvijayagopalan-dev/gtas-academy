"use client";

import { use } from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { disciplines } from "@/data/disciplines";
import DeepDiveContent from "@/components/DeepDiveContent";

export default function DisciplinePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const discipline = disciplines.find((d) => d.slug === slug);
  if (!discipline) notFound();

  const currentIndex = disciplines.findIndex((d) => d.slug === slug);
  const prev = currentIndex > 0 ? disciplines[currentIndex - 1] : null;
  const next = currentIndex < disciplines.length - 1 ? disciplines[currentIndex + 1] : null;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-white transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/disciplines" className="hover:text-white transition-colors">
          Deep Dives
        </Link>
        <span>/</span>
        <span className="text-gray-300">{discipline.name}</span>
      </nav>

      <DeepDiveContent discipline={discipline} />

      {/* Prev / Next navigation */}
      <div className="mt-10 grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            href={`/disciplines/${prev.slug}`}
            className="border border-border rounded-xl p-4 bg-card hover:border-violet-600/60 transition-colors group"
          >
            <p className="text-xs text-gray-500 mb-1">← Previous</p>
            <p className="font-medium text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
              <span>{prev.icon}</span>
              <span>{prev.name}</span>
            </p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/disciplines/${next.slug}`}
            className="border border-border rounded-xl p-4 bg-card hover:border-violet-600/60 transition-colors group text-right"
          >
            <p className="text-xs text-gray-500 mb-1">Next →</p>
            <p className="font-medium text-white group-hover:text-violet-300 transition-colors flex items-center justify-end gap-2">
              <span>{next.name}</span>
              <span>{next.icon}</span>
            </p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
