"use client";

import { useState } from "react";

export function BoboBot() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col items-end gap-2">
      {open && (
        <div className="rounded-xl border border-foreground/10 bg-background px-4 py-3 text-sm text-foreground/70 shadow-lg">
          Coming soon — my self-trained (dumb) AI bot.
        </div>
      )}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background shadow-lg transition-opacity hover:opacity-90"
      >
        BoboBot
      </button>
    </div>
  );
}
