"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Speed",
    text: "Skim and highlight key ideas fast with AI summaries.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-indigo-300">
        <path d="M4 12h9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M13 12l-2-2m2 2l-2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M7 7h10M7 17h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".5" />
      </svg>
    ),
  },
  {
    title: "Comprehension",
    text: "Clarify complex passages with immediate explanations.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-fuchsia-300">
        <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Progress",
    text: "Track reading streaks and measurable improvement.",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-purple-300">
        <path d="M5 14l3-3 3 3 4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 18h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".6" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="relative py-12 sm:py-14 md:py-16">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {features.map((f) => (
            <motion.div
              key={f.title}
              whileHover={{ scale: 1.01 }}
              transition={{ type: "spring", stiffness: 240, damping: 18 }}
              className="group chat-window rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-white/5 flex items-center justify-center ring-1 ring-white/10 group-hover:ring-white/20 transition">
                  {f.icon}
                </div>
                <div>
                  <h3 className="text-lg font-medium">{f.title}</h3>
                  <p className="text-white/70 text-sm mt-1.5">{f.text}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


