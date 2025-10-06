"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className="container-px mx-auto">
        <div className="mt-4 flex items-center justify-between rounded-2xl backdrop-blur-xl bg-white/[0.03] border border-white/10 px-5 py-3.5 shadow-xl">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30">
              <span className="text-sm font-bold">LL</span>
            </div>
            <span className="text-sm font-semibold text-white">LearnLux AI</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-white/70 text-sm font-medium">
            <Link href="#features" className="hover:text-white transition-colors">Features</Link>
            <Link href="#enterprise" className="hover:text-white transition-colors">Enterprise</Link>
            <Link href="#api" className="hover:text-white transition-colors">API</Link>
            <button
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="hover:text-white transition-colors cursor-pointer bg-transparent border-0 p-0"
            >
              Contact
            </button>
            <Link href="/" className="hover:text-white transition-colors">Sign In</Link>
            <button
              onClick={() => (window.location.href = "https://learnlux.org")}
              className="button-primary h-10 px-5 text-sm"
            >
              Try LearnLux
            </button>
          </nav>
          
          {/* Mobile menu button */}
          <button className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </motion.header>
  );
}


