"use client";

import { motion } from "framer-motion";
import { Building2, ShieldCheck } from "lucide-react";

export default function Enterprise() {
  return (
    <section id="enterprise" className="py-14 sm:py-16 md:py-20">
      <div className="container-px mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="chat-window rounded-3xl px-6 sm:px-10 py-10"
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div className="max-w-2xl">
              <h3 className="text-2xl font-semibold flex items-center gap-2">
                <Building2 className="h-6 w-6 text-white/80" />
                LearnLux for Teams & Institutions
              </h3>
              <p className="text-white/70 mt-2">
                Integrate AI-driven learning into your classroom or company. Centralized analytics,
                custom content, SSO, and admin controls.
              </p>
              <div className="mt-3 flex items-center gap-3 text-white/60 text-sm">
                <ShieldCheck className="h-4 w-4" /> Privacy-first, FERPA-ready
              </div>
            </div>
            <div className="shrink-0 flex gap-3">
              <a href="#api" className="button-ghost h-11 px-5 text-sm">View API</a>
              <button className="button-primary h-11 px-5 text-sm">Request Access</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}


