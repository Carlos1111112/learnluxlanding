"use client";

import { motion } from "framer-motion";
import Hyperspeed from './Hyperspeed';

export default function Hero() {
  return (
    <section className="relative pt-28 md:pt-32">
      <div className="container-px mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left: copy */}
          <div className="md:col-span-6 lg:col-span-5 flex flex-col gap-5">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight"
            >
              Read Smarter.
              <br />
              Learn Faster.
              <Hyperspeed
                effectOptions={{
                  onSpeedUp: () => { },
                  onSlowDown: () => { },
                  distortion: 'turbulentDistortion',
                  length: 400,
                  roadWidth: 10,
                  islandWidth: 2,
                  lanesPerRoad: 4,
                  fov: 90,
                  fovSpeedUp: 150,
                  speedUp: 2,
                  carLightsFade: 0.4,
                  totalSideLightSticks: 20,
                  lightPairsPerRoadWay: 40,
                  shoulderLinesWidthPercentage: 0.05,
                  brokenLinesWidthPercentage: 0.1,
                  brokenLinesLengthPercentage: 0.5,
                  lightStickWidth: [0.12, 0.5],
                  lightStickHeight: [1.3, 1.7],
                  movingAwaySpeed: [60, 80],
                  movingCloserSpeed: [-120, -160],
                  carLightsLength: [400 * 0.03, 400 * 0.2],
                  carLightsRadius: [0.05, 0.14],
                  carWidthPercentage: [0.3, 0.5],
                  carShiftX: [-0.8, 0.8],
                  carFloorSeparation: [0, 5],
                  colors: {
                    roadColor: 0x080808,
                    islandColor: 0x0a0a0a,
                    background: 0x000000,
                    shoulderLines: 0xFFFFFF,
                    brokenLines: 0xFFFFFF,
                    leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
                    rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
                    sticks: 0x03B3C3,
                  }
                }}
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.06 }}
              className="text-white/75 text-base sm:text-lg leading-relaxed max-w-xl"
            >
              Your AI-powered reading companion that personalizes content, reduces distraction,
              and strengthens comprehension—so you focus on what matters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
              className="flex items-center gap-3"
            >
              <a href="#start" className="button-primary h-12 px-6 text-base">
                Try the AI Reader
              </a>
              <a href="#features" className="button-ghost h-12 px-5 text-base">
                Explore features
              </a>
            </motion.div>
          </div>

          {/* Right: chat-style mockup */}
          <div className="md:col-span-6 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
              className="chat-window p-4 sm:p-6"
            >
              <div className="space-y-3">
                <div className="flex gap-2">
                  <div className="bubble bubble-assistant">
                    Hi! I’m your reading companion. Drop an article and I’ll guide you.
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bubble bubble-user">Paste: Neuroplasticity and Deep Work</div>
                </div>
                <div className="flex gap-2">
                  <div className="bubble bubble-assistant">
                    Focus mode enabled. Would you like a quick summary or comprehension questions?
                  </div>
                </div>
                <div className="flex gap-2 justify-end">
                  <div className="bubble bubble-user">Start with a 3-bullet summary</div>
                </div>
                <div className="flex gap-2">
                  <div className="bubble bubble-assistant">
                    <div className="flex items-center gap-1.5">
                      <span className="chat-typing-dot" />
                      <span className="chat-typing-dot" />
                      <span className="chat-typing-dot" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}


