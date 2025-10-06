"use client";

import { motion } from "framer-motion";
import { MessageSquare, BookOpenCheck, TrendingUp } from "lucide-react";

const steps = [
  {
    title: "Ask",
    desc: "Type a topic or question.",
    Icon: MessageSquare,
  },
  {
    title: "Learn",
    desc: "AI generates readings and quizzes.",
    Icon: BookOpenCheck,
  },
  {
    title: "Track",
    desc: "Measure your speed, comprehension, and growth.",
    Icon: TrendingUp,
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-14 sm:py-16 md:py-20">
      <div className="container-px mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <h2 className="text-2xl sm:text-3xl font-semibold">How it works</h2>
          <p className="text-white/70 mt-2">Generate → Read → Improve</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
          {steps.map(({ title, desc, Icon }, idx) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="chat-window rounded-2xl p-6 text-center"
            >
              <div className="mx-auto mb-3 h-10 w-10 rounded-lg bg-sky-400/10 flex items-center justify-center ring-1 ring-sky-400/20">
                <Icon className="h-5 w-5 text-cyan-300" />
              </div>
              <div className="text-lg font-medium">{title}</div>
              <p className="text-white/70 text-sm mt-1.5">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}


