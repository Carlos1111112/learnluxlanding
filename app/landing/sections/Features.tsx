"use client";

import { motion } from "framer-motion";
import { Brain, BarChart3, Sparkles } from "lucide-react";

const items = [
  {
    title: "AI-Powered Understanding",
    desc: "Generate and explain content instantly.",
    Icon: Sparkles,
  },
  {
    title: "Adaptive Learning",
    desc: "Personalized progress tracking and question generation.",
    Icon: Brain,
  },
  {
    title: "Enterprise Insights",
    desc: "Analytics and AI tools for institutions.",
    Icon: BarChart3,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-14 sm:py-16 md:py-20">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {items.map(({ title, desc, Icon }) => (
            <motion.div
              key={title}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 16 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="chat-window rounded-2xl p-5 sm:p-6"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-sky-400/10 flex items-center justify-center ring-1 ring-sky-400/20">
                  <Icon className="h-5 w-5 text-cyan-300" />
                </div>
                <div>
                  <h3 className="text-lg font-medium">{title}</h3>
                  <p className="text-white/70 text-sm mt-1.5">{desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


