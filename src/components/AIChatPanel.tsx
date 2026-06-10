"use client";

import { useState, useRef, useEffect } from "react";
import { X, Send, Bot, User, Sparkles, ChevronRight, RefreshCw } from "lucide-react";
import clsx from "clsx";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatPanelProps {
  isOpen: boolean;
  onClose: () => void;
  moduleContext?: string;
}

const STARTER_QUESTIONS = [
  "What is the Universal Adaptive Equation?",
  "Explain the difference between GTAS and AGI",
  "How does the UAC compare to OODA loop?",
  "What are the 8 Adaptive Failure Modes?",
  "How does GenAI fit into GTAS?",
];

export default function AIChatPanel({
  isOpen,
  onClose,
  moduleContext,
}: AIChatPanelProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [streamingText, setStreamingText] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 300);
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, streamingText]);

  const sendMessage = async (text?: string) => {
    const userText = text || input.trim();
    if (!userText || isLoading) return;

    const userMessage: Message = { role: "user", content: userText };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInput("");
    setIsLoading(true);
    setStreamingText("");

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.content,
          })),
          moduleContext,
        }),
      });

      if (!res.ok) throw new Error("API error");
      if (!res.body) throw new Error("No response body");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulatedText = "";

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split("\n");

        for (const line of lines) {
          if (line.startsWith("data: ")) {
            const data = line.slice(6);
            if (data === "[DONE]") break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.text) {
                accumulatedText += parsed.text;
                setStreamingText(accumulatedText);
              }
            } catch {
              // ignore parse errors
            }
          }
        }
      }

      if (accumulatedText) {
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: accumulatedText },
        ]);
      }
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, I encountered an error. Please check your ANTHROPIC_API_KEY and try again.",
        },
      ]);
    } finally {
      setIsLoading(false);
      setStreamingText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  const clearChat = () => {
    setMessages([]);
    setStreamingText("");
  };

  return (
    <div
      className={clsx(
        "fixed right-0 top-0 h-screen flex flex-col bg-card border-l border-border z-50 transition-all duration-300 shadow-2xl shadow-black/50",
        isOpen ? "w-96 translate-x-0" : "w-96 translate-x-full"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-border flex-shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center">
            <Sparkles size={14} className="text-white" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white">AI Tutor</div>
            <div className="text-xs text-gray-500">
              {moduleContext ? `Context: ${moduleContext}` : "GTAS Expert"}
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 0 && (
            <button
              onClick={clearChat}
              className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded transition-colors"
              title="Clear chat"
            >
              <RefreshCw size={14} />
            </button>
          )}
          <button
            onClick={onClose}
            className="p-1.5 text-gray-500 hover:text-gray-300 hover:bg-white/5 rounded transition-colors"
          >
            <X size={16} />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin">
        {messages.length === 0 && !isLoading && (
          <div className="space-y-4">
            <div className="text-center">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-600/30 to-purple-700/30 border border-violet-600/20 flex items-center justify-center mx-auto mb-3">
                <Bot size={24} className="text-violet-400" />
              </div>
              <p className="text-gray-400 text-sm font-medium">
                GTAS AI Tutor
              </p>
              <p className="text-gray-600 text-xs mt-1">
                Powered by Claude Opus
              </p>
            </div>
            <div className="space-y-2">
              <p className="text-xs text-gray-500 font-medium text-center">
                Try asking:
              </p>
              {STARTER_QUESTIONS.map((q) => (
                <button
                  key={q}
                  onClick={() => sendMessage(q)}
                  className="w-full text-left text-xs text-gray-400 hover:text-gray-200 bg-white/3 hover:bg-white/8 border border-border hover:border-violet-600/40 rounded-lg px-3 py-2.5 transition-all flex items-center gap-2"
                >
                  <ChevronRight size={12} className="text-violet-500 flex-shrink-0" />
                  <span>{q}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            className={clsx(
              "flex gap-2.5",
              msg.role === "user" ? "justify-end" : "justify-start"
            )}
          >
            {msg.role === "assistant" && (
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                <Bot size={12} className="text-white" />
              </div>
            )}
            <div
              className={clsx(
                "max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                msg.role === "user"
                  ? "bg-violet-600/25 text-violet-100 border border-violet-600/30 rounded-tr-sm"
                  : "bg-white/6 text-gray-200 border border-white/10 rounded-tl-sm"
              )}
            >
              <p className="whitespace-pre-wrap">{msg.content}</p>
            </div>
            {msg.role === "user" && (
              <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                <User size={12} className="text-gray-400" />
              </div>
            )}
          </div>
        ))}

        {isLoading && (
          <div className="flex gap-2.5 justify-start">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-purple-700 flex items-center justify-center flex-shrink-0 mt-0.5">
              <Bot size={12} className="text-white" />
            </div>
            <div className="max-w-[85%] rounded-2xl rounded-tl-sm px-3.5 py-2.5 text-sm leading-relaxed bg-white/6 text-gray-200 border border-white/10">
              {streamingText ? (
                <p className="whitespace-pre-wrap">
                  {streamingText}
                  <span className="inline-block w-1 h-4 bg-violet-400 ml-0.5 animate-pulse" />
                </p>
              ) : (
                <div className="flex gap-1.5 items-center py-0.5">
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                  <span className="w-1.5 h-1.5 bg-violet-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              )}
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Input */}
      <div className="p-4 border-t border-border flex-shrink-0">
        <div className="flex gap-2 items-end">
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about GTAS..."
            disabled={isLoading}
            rows={1}
            className="flex-1 bg-white/5 border border-border hover:border-violet-600/40 focus:border-violet-500 rounded-xl px-3.5 py-2.5 text-sm text-gray-200 placeholder-gray-600 outline-none resize-none transition-colors scrollbar-thin"
            style={{ minHeight: "42px", maxHeight: "120px" }}
            onInput={(e) => {
              const el = e.target as HTMLTextAreaElement;
              el.style.height = "auto";
              el.style.height = Math.min(el.scrollHeight, 120) + "px";
            }}
          />
          <button
            onClick={() => sendMessage()}
            disabled={!input.trim() || isLoading}
            className="w-10 h-10 rounded-xl bg-violet-600 hover:bg-violet-500 disabled:opacity-40 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
          >
            <Send size={15} className="text-white" />
          </button>
        </div>
        <p className="text-xs text-gray-700 mt-2 text-center">
          Shift+Enter for new line · Enter to send
        </p>
      </div>
    </div>
  );
}
