"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [lang, setLang] = useState<"EN" | "ES">("EN");
  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="container-px mx-auto">
        <div className="mt-4 flex items-center justify-between rounded-2xl chat-window px-4 py-3">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-white/10 flex items-center justify-center">
              <span className="text-xs">NR</span>
            </div>
            <span className="text-sm tracking-tight text-white/80">NeonReader</span>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-white/60 text-sm">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#how" className="hover:text-white transition-colors">How</Link>
          </nav>

          <div className="flex items-center gap-2">
            <button
              aria-label="Toggle language"
              onClick={() => setLang((p) => (p === "EN" ? "ES" : "EN"))}
              className="button-ghost h-9 px-3 text-xs font-medium"
            >
              {lang}
            </button>
            <Link href="#start" className="button-primary h-9 px-4 text-sm">
              Try it
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}


