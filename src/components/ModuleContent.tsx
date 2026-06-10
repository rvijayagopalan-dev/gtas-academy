"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Module } from "@/data/modules";
import { CheckCircle, XCircle, ChevronDown, ChevronUp, Award } from "lucide-react";
import clsx from "clsx";

interface ModuleContentProps {
  module: Module;
}

export default function ModuleContent({ module }: ModuleContentProps) {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<number, number | null>>({});
  const [quizSubmitted, setQuizSubmitted] = useState<Record<number, boolean>>({});
  const [showQuiz, setShowQuiz] = useState(false);

  const toggleSection = (i: number) => {
    setActiveSection(activeSection === i ? null : i);
  };

  const selectAnswer = (qi: number, ai: number) => {
    if (quizSubmitted[qi]) return;
    setQuizAnswers((prev) => ({ ...prev, [qi]: ai }));
  };

  const submitAnswer = (qi: number) => {
    if (quizAnswers[qi] == null) return;
    setQuizSubmitted((prev) => ({ ...prev, [qi]: true }));
  };

  const score = module.quiz.filter(
    (q, i) => quizSubmitted[i] && quizAnswers[i] === q.answer
  ).length;

  const allSubmitted = module.quiz.every((_, i) => quizSubmitted[i]);

  return (
    <div className="max-w-3xl mx-auto">
      {/* Header */}
      <div
        className={`rounded-2xl p-8 mb-8 bg-gradient-to-br ${module.color} relative overflow-hidden`}
      >
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative">
          <div className="text-5xl mb-4">{module.icon}</div>
          <h1 className="text-3xl font-bold text-white mb-1">{module.title}</h1>
          <p className="text-white/70 text-lg mb-4">{module.subtitle}</p>
          <p className="text-white/80 text-sm leading-relaxed max-w-2xl">
            {module.description}
          </p>
          <div className="mt-4 flex items-center gap-4 text-white/60 text-xs">
            <span>⏱ {module.estimatedTime}</span>
            <span>·</span>
            <span>📝 {module.sections.length} sections</span>
            <span>·</span>
            <span>❓ {module.quiz.length} quiz questions</span>
          </div>
        </div>
      </div>

      {/* Key Takeaways */}
      <div className="bg-card border border-border rounded-xl p-6 mb-8">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Key Takeaways
        </h2>
        <ul className="space-y-2.5">
          {module.keyTakeaways.map((t, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
              <div
                className={`w-5 h-5 rounded-full bg-gradient-to-br ${module.color} flex items-center justify-center flex-shrink-0 mt-0.5 text-white text-xs font-bold`}
              >
                {i + 1}
              </div>
              <span className="leading-relaxed">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Sections */}
      <div className="space-y-3 mb-10">
        <h2 className="text-sm font-semibold text-gray-400 uppercase tracking-widest mb-4">
          Content
        </h2>

        {module.sections.map((section, i) => (
          <div
            key={i}
            className={clsx(
              "border rounded-xl overflow-hidden transition-all",
              activeSection === i
                ? "border-violet-600/40 bg-card"
                : "border-border bg-card/60 hover:border-border/80"
            )}
          >
            <button
              onClick={() => toggleSection(i)}
              className="w-full flex items-center justify-between p-5 text-left"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-7 h-7 rounded-lg bg-gradient-to-br ${module.color} flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                >
                  {i + 1}
                </div>
                <span className="font-medium text-gray-200">{section.title}</span>
              </div>
              {activeSection === i ? (
                <ChevronUp size={16} className="text-gray-500 flex-shrink-0" />
              ) : (
                <ChevronDown size={16} className="text-gray-500 flex-shrink-0" />
              )}
            </button>

            {activeSection === i && (
              <div className="px-5 pb-5 border-t border-border/60">
                <div className="pt-5 prose prose-invert prose-sm max-w-none">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {section.content}
                  </ReactMarkdown>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Quiz */}
      <div className="bg-card border border-border rounded-xl overflow-hidden mb-8">
        <button
          onClick={() => setShowQuiz(!showQuiz)}
          className="w-full flex items-center justify-between p-6 text-left"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-500 to-orange-500 flex items-center justify-center">
              <Award size={16} className="text-white" />
            </div>
            <div>
              <div className="font-semibold text-white">Knowledge Check</div>
              <div className="text-sm text-gray-500">
                {module.quiz.length} questions to test your understanding
              </div>
            </div>
          </div>
          {allSubmitted ? (
            <div className="text-right">
              <div className="text-lg font-bold text-white">
                {score}/{module.quiz.length}
              </div>
              <div className="text-xs text-gray-500">
                {Math.round((score / module.quiz.length) * 100)}% correct
              </div>
            </div>
          ) : (
            showQuiz ? (
              <ChevronUp size={16} className="text-gray-500" />
            ) : (
              <ChevronDown size={16} className="text-gray-500" />
            )
          )}
        </button>

        {showQuiz && (
          <div className="border-t border-border p-6 space-y-8">
            {module.quiz.map((q, qi) => (
              <div key={qi} className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-400 text-xs font-bold flex items-center justify-center flex-shrink-0">
                    {qi + 1}
                  </div>
                  <p className="text-sm font-medium text-gray-200 leading-relaxed">
                    {q.question}
                  </p>
                </div>

                <div className="space-y-2 ml-9">
                  {q.options.map((opt, ai) => {
                    const isSelected = quizAnswers[qi] === ai;
                    const isSubmitted = quizSubmitted[qi];
                    const isCorrect = ai === q.answer;

                    return (
                      <button
                        key={ai}
                        onClick={() => selectAnswer(qi, ai)}
                        disabled={isSubmitted}
                        className={clsx(
                          "w-full text-left text-sm px-4 py-2.5 rounded-lg border transition-all flex items-center gap-2.5",
                          isSubmitted && isCorrect
                            ? "bg-green-500/10 border-green-500/40 text-green-300"
                            : isSubmitted && isSelected && !isCorrect
                            ? "bg-red-500/10 border-red-500/40 text-red-300"
                            : isSelected
                            ? "bg-violet-600/20 border-violet-500/40 text-violet-200"
                            : "bg-white/3 border-border text-gray-400 hover:border-gray-500 hover:text-gray-300"
                        )}
                      >
                        <span className="w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 text-xs font-bold"
                          style={{
                            borderColor: isSubmitted && isCorrect
                              ? "rgb(74 222 128 / 0.5)"
                              : isSubmitted && isSelected && !isCorrect
                              ? "rgb(248 113 113 / 0.5)"
                              : isSelected
                              ? "rgb(139 92 246 / 0.5)"
                              : "rgb(75 85 99)"
                          }}
                        >
                          {String.fromCharCode(65 + ai)}
                        </span>
                        <span className="flex-1">{opt}</span>
                        {isSubmitted && isCorrect && (
                          <CheckCircle size={14} className="text-green-400 flex-shrink-0" />
                        )}
                        {isSubmitted && isSelected && !isCorrect && (
                          <XCircle size={14} className="text-red-400 flex-shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {!quizSubmitted[qi] && (
                  <div className="ml-9">
                    <button
                      onClick={() => submitAnswer(qi)}
                      disabled={quizAnswers[qi] == null}
                      className="text-xs font-medium px-4 py-1.5 bg-amber-500/20 hover:bg-amber-500/30 text-amber-400 rounded-lg border border-amber-500/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
                    >
                      Check Answer
                    </button>
                  </div>
                )}

                {quizSubmitted[qi] && (
                  <div className={clsx(
                    "ml-9 p-3 rounded-lg text-xs leading-relaxed",
                    quizAnswers[qi] === q.answer
                      ? "bg-green-500/10 border border-green-500/20 text-green-300"
                      : "bg-blue-500/10 border border-blue-500/20 text-blue-300"
                  )}>
                    <span className="font-semibold">
                      {quizAnswers[qi] === q.answer ? "✓ Correct! " : "✗ Not quite. "}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            ))}

            {allSubmitted && (
              <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 rounded-xl p-5 text-center">
                <div className="text-3xl mb-2">
                  {score === module.quiz.length ? "🏆" : score >= module.quiz.length / 2 ? "🎯" : "📖"}
                </div>
                <div className="text-lg font-bold text-white mb-1">
                  {score}/{module.quiz.length} Correct
                </div>
                <div className="text-sm text-gray-400">
                  {score === module.quiz.length
                    ? "Perfect score! You've mastered this module."
                    : score >= module.quiz.length / 2
                    ? "Good work! Review the sections you missed."
                    : "Keep learning! Re-read the content and try again."}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
