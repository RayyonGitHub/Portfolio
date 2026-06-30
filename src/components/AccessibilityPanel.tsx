"use client";

import { useEffect, useRef, useState } from "react";

const MIN_SIZE = 14;
const MAX_SIZE = 22;
const DEFAULT_SIZE = 16;
const STEP = 2;

function AccessibilityIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <circle cx="12" cy="3.5" r="1.75" />
      <path d="M17.5 8.25a.75.75 0 0 0-.72-.53l-4.78.18-1.35-1.85A.75.75 0 0 0 9 6.25L6.25 8a.75.75 0 0 0 .5 1.31l2.52-.1.62 4.55-2.6 5.2a.75.75 0 1 0 1.34.68l2.37-4.73 2.37 4.73a.75.75 0 1 0 1.34-.68l-2.6-5.2.44-3.19 1.07 1.46c.14.19.35.3.58.3l3.25-.12a.75.75 0 0 0 .71-.79Z" />
    </svg>
  );
}

export function AccessibilityPanel() {
  const [open, setOpen] = useState(false);
  const [fontSize, setFontSize] = useState(DEFAULT_SIZE);
  const [reduceMotion, setReduceMotion] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const storedSize = localStorage.getItem("a11y-font-size");
    const storedMotion = localStorage.getItem("a11y-reduce-motion");
    if (storedSize) {
      const size = parseInt(storedSize, 10);
      setFontSize(size);
      document.documentElement.style.fontSize = `${size}px`;
    }
    if (storedMotion === "true") {
      setReduceMotion(true);
      document.documentElement.classList.add("reduce-motion");
    }
  }, []);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape" && open) {
        setOpen(false);
        triggerRef.current?.focus();
      }
    }
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useEffect(() => {
    if (open) {
      panelRef.current?.focus();
    }
  }, [open]);

  function changeFontSize(delta: number) {
    const next = Math.min(MAX_SIZE, Math.max(MIN_SIZE, fontSize + delta));
    setFontSize(next);
    document.documentElement.style.fontSize = `${next}px`;
    localStorage.setItem("a11y-font-size", String(next));
  }

  function toggleReduceMotion() {
    const next = !reduceMotion;
    setReduceMotion(next);
    document.documentElement.classList.toggle("reduce-motion", next);
    localStorage.setItem("a11y-reduce-motion", String(next));
  }

  function reset() {
    setFontSize(DEFAULT_SIZE);
    setReduceMotion(false);
    document.documentElement.style.fontSize = "";
    document.documentElement.classList.remove("reduce-motion");
    localStorage.removeItem("a11y-font-size");
    localStorage.removeItem("a11y-reduce-motion");
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Réglages d'accessibilité"
          tabIndex={-1}
          className="w-64 rounded-2xl border border-border bg-bg-raised p-5 shadow-xl focus:outline-none"
        >
          <p className="mb-4 font-display text-sm font-semibold text-ink">Accessibilité</p>

          <div className="mb-4">
            <p className="mb-2 text-xs font-medium text-ink-muted" id="font-size-label">
              Taille du texte
            </p>
            <div className="flex items-center gap-3" role="group" aria-labelledby="font-size-label">
              <button
                onClick={() => changeFontSize(-STEP)}
                disabled={fontSize <= MIN_SIZE}
                aria-label="Diminuer la taille du texte"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40"
              >
                A–
              </button>
              <span className="flex-1 text-center text-sm text-ink-muted">{fontSize}px</span>
              <button
                onClick={() => changeFontSize(STEP)}
                disabled={fontSize >= MAX_SIZE}
                aria-label="Augmenter la taille du texte"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-sm font-bold text-ink transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-40"
              >
                A+
              </button>
            </div>
          </div>

          <div className="mb-4 flex items-center justify-between">
            <span className="text-xs font-medium text-ink-muted">Réduire les animations</span>
            <button
              role="switch"
              aria-checked={reduceMotion}
              onClick={toggleReduceMotion}
              aria-label={reduceMotion ? "Désactiver la réduction des animations" : "Activer la réduction des animations"}
              className={`relative h-6 w-11 rounded-full transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-raised ${
                reduceMotion ? "bg-accent" : "bg-border"
              }`}
            >
              <span
                className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
                  reduceMotion ? "left-5" : "left-0.5"
                }`}
              />
            </button>
          </div>

          <button
            onClick={reset}
            className="w-full rounded-lg border border-border py-1.5 text-xs font-medium text-ink-muted transition-colors hover:border-accent hover:text-accent focus-visible:ring-2 focus-visible:ring-accent"
          >
            Réinitialiser
          </button>
        </div>
      )}

      <button
        ref={triggerRef}
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="a11y-panel"
        aria-label="Ouvrir les réglages d'accessibilité"
        className="flex h-13 w-13 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-lg transition-colors hover:bg-accent-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg"
        style={{ height: "3.25rem", width: "3.25rem" }}
      >
        <AccessibilityIcon className="h-6 w-6" />
      </button>
    </div>
  );
}
