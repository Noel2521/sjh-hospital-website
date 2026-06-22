"use client";

import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const WELCOME: Message = {
  role: "assistant",
  content:
    "Hello! I'm the SJH virtual assistant. I can help you find the right department, check visiting hours, or answer questions about the hospital. How can I help you today?",
};

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([WELCOME]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    try {
      // Connects to backend's /ai/chat endpoint (see backend/src/ai/ai.controller.ts)
      const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/ai/chat`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text }),
      });
      const data = await res.json();
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I'm having trouble connecting right now. For immediate help, please call us at 0821-254 1122, or visit our Departments page.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Toggle button */}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="Open chat assistant"
        className="fixed bottom-6 right-6 z-[300] w-[58px] h-[58px] rounded-full shadow-lg flex items-center justify-center text-[24px] text-white transition-transform hover:scale-105"
        style={{ background: "linear-gradient(135deg, var(--teal), var(--mint-dark))" }}
      >
        {open ? "✕" : "💬"}
      </button>

      {/* Chat window */}
      {open && (
        <div
          className="fixed bottom-[92px] right-6 z-[300] w-[340px] max-w-[90vw] h-[460px] max-h-[70vh] rounded-2xl shadow-2xl flex flex-col overflow-hidden bg-white border"
          style={{ borderColor: "var(--border)" }}
        >
          {/* Header */}
          <div className="px-4 py-3.5 text-white flex items-center gap-2.5" style={{ background: "var(--bg-dark)" }}>
            <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center text-[15px]">🏥</div>
            <div>
              <div className="text-[13.5px] font-semibold">SJH Virtual Assistant</div>
              <div className="text-[10.5px] text-white/55">Department guide &amp; FAQs</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-3.5 py-4 space-y-3" style={{ background: "var(--bg-light)" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-relaxed ${
                    m.role === "user" ? "text-white rounded-br-sm" : "bg-white text-tx-dark rounded-bl-sm border"
                  }`}
                  style={
                    m.role === "user"
                      ? { background: "var(--mint-dark)" }
                      : { borderColor: "var(--border)" }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border px-3.5 py-2.5 rounded-2xl rounded-bl-sm text-[12.5px] text-tx-light" style={{ borderColor: "var(--border)" }}>
                  Typing…
                </div>
              </div>
            )}
          </div>

          {/* Disclaimer */}
          <div className="px-3.5 py-1.5 text-[10px] text-tx-light text-center border-t" style={{ borderColor: "var(--border)" }}>
            For medical emergencies, call 108 immediately. This assistant doesn&apos;t provide diagnoses.
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex border-t p-2.5 gap-2" style={{ borderColor: "var(--border)" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about departments, timings…"
              className="flex-1 px-3 py-2 rounded-lg border text-[12.5px] outline-none"
              style={{ borderColor: "var(--border)" }}
            />
            <button
              type="submit"
              disabled={loading}
              className="px-4 rounded-lg text-white text-[12.5px] font-semibold disabled:opacity-50"
              style={{ background: "var(--mint-dark)" }}
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}
