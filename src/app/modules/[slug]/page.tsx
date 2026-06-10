"use client";

import { notFound } from "next/navigation";
import { getModuleBySlug, modules } from "@/data/modules";
import ModuleContent from "@/components/ModuleContent";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { use } from "react";

interface Props {
  params: Promise<{ slug: string }>;
}

export default function ModulePage({ params }: Props) {
  const { slug } = use(params);
  const module = getModuleBySlug(slug);

  if (!module) {
    notFound();
  }

  const currentIdx = modules.findIndex((m) => m.slug === slug);
  const prevModule = currentIdx > 0 ? modules[currentIdx - 1] : null;
  const nextModule =
    currentIdx < modules.length - 1 ? modules[currentIdx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-gray-300 transition-colors">
          Academy
        </Link>
        <span>/</span>
        <span className="text-gray-300">{module.title}</span>
      </div>

      {/* Module content */}
      <ModuleContent module={module} />

      {/* Navigation */}
      <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
        {prevModule ? (
          <Link
            href={`/modules/${prevModule.slug}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group"
          >
            <ChevronLeft
              size={16}
              className="group-hover:-translate-x-0.5 transition-transform"
            />
            <div>
              <div className="text-xs text-gray-600">Previous</div>
              <div className="font-medium">{prevModule.title}</div>
            </div>
          </Link>
        ) : (
          <div />
        )}

        {nextModule ? (
          <Link
            href={`/modules/${nextModule.slug}`}
            className="flex items-center gap-2 text-sm text-gray-400 hover:text-gray-200 transition-colors group text-right"
          >
            <div>
              <div className="text-xs text-gray-600">Next</div>
              <div className="font-medium">{nextModule.title}</div>
            </div>
            <ChevronRight
              size={16}
              className="group-hover:translate-x-0.5 transition-transform"
            />
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
