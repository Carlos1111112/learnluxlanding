"use client";

import { motion } from "framer-motion";

export default function Trust() {
  return (
    <section className="py-12 sm:py-14 md:py-16">
      <div className="container-px mx-auto text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5 }}
          className="text-white/60"
        >
          Trusted by educators and learners around the world
        </motion.p>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-6 opacity-80">
          {Array.from({ length: 8 }).map((_, i) => (
            <div key={i} className="h-10 rounded-lg bg-white/5 border border-white/10" />
          ))}
        </div>
      </div>
    </section>
  );
}


