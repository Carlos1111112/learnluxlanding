"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function RSVP() {
  const text = "Learning is not about consuming information. It's about understanding connections. Building intuition. Seeing patterns. LearnLux accelerates this journey through intelligent conversation and adaptive guidance. Knowledge transforms into wisdom.";
  
  const words = text.split(" ");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [speed, setSpeed] = useState(250);
  
  // Chat animation states
  const [chatStep, setChatStep] = useState(0);
  const [showTyping, setShowTyping] = useState(false);

  // Chat messages that appear sequentially
  const chatMessages = [
    { type: "user", text: "Teach me about Neural Networks" },
    { type: "assistant", text: "Perfect! I'll generate a comprehensive reading and quiz for you." },
    { type: "assistant", text: "📖 Generating RSVP reading..." },
  ];

  // Sequential chat animation
  useEffect(() => {
    if (chatStep >= chatMessages.length) return;

    const timer = setTimeout(() => {
      setShowTyping(true);
      setTimeout(() => {
        setShowTyping(false);
        setChatStep(prev => prev + 1);
      }, 1000);
    }, chatStep === 0 ? 500 : 2000);

    return () => clearTimeout(timer);
  }, [chatStep, chatMessages.length]);

  // RSVP word cycling
  useEffect(() => {
    if (!isPlaying || chatStep < chatMessages.length) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev >= words.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, speed);

    return () => clearInterval(interval);
  }, [isPlaying, speed, words.length, chatStep, chatMessages.length]);

  const togglePlay = () => setIsPlaying(!isPlaying);

  const adjustSpeed = (newSpeed: number) => {
    setSpeed(newSpeed);
  };

  const resetAll = () => {
    setCurrentIndex(0);
    setChatStep(0);
    setShowTyping(false);
  };

  return (
    <section className="pt-0 pb-12 sm:pb-16 md:pb-20 relative">
      <div className="container-px mx-auto">
        <div className="max-w-7xl mx-auto">
          {/* Two column layout with improved grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            
            {/* Left: Chat Window */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 md:order-1"
            >
              <div className="glass-card p-6 sm:p-8 min-h-[450px] flex flex-col group hover:scale-[1.02] transition-all duration-300">
                {/* Card header */}
                <div className="mb-4">
                  <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
                    <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                    AI Prompt
                  </h3>
                </div>
                
                <div className="flex-1 space-y-3 overflow-hidden">
                  {chatMessages.slice(0, chatStep).map((msg, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className={`flex gap-2 ${msg.type === "user" ? "justify-end" : ""}`}
                    >
                      <div className={`bubble ${msg.type === "user" ? "bubble-user" : "bubble-assistant"}`}>
                        {msg.text}
                      </div>
                    </motion.div>
                  ))}
                  
                  {/* Typing indicator */}
                  {showTyping && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex gap-2"
                    >
                      <div className="bubble bubble-assistant">
                        <div className="flex gap-1">
                          <span className="chat-typing-dot"></span>
                          <span className="chat-typing-dot"></span>
                          <span className="chat-typing-dot"></span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Chat info */}
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-xs text-white/50">
                    💡 LearnLux generates personalized reading materials from any topic
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right: RSVP Display */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 md:order-2"
            >
              <div className="relative">
                {/* RSVP Window */}
                <div className="glass-card p-8 sm:p-10 min-h-[450px] flex flex-col group hover:scale-[1.02] transition-all duration-300">
                  {/* Gradient glow background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-transparent to-cyan-500/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  {/* Header */}
                  <div className="relative mb-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-sm font-semibold text-white/80 flex items-center gap-2">
                        <svg className="w-5 h-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                        </svg>
                        RSVP Reading
                      </h3>
                      {chatStep >= chatMessages.length && (
                        <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400">
                          <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                          </span>
                          Live
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Word Display */}
                  <div className="relative flex-1 flex items-center justify-center">
                    {chatStep < chatMessages.length ? (
                      <div className="text-center text-white/30">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                          className="mb-3"
                        >
                          <svg className="w-16 h-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                          </svg>
                        </motion.div>
                        <p className="text-sm">Preparing your reading...</p>
                      </div>
                    ) : (
                      <div className="text-center w-full">
                        <motion.p
                          key={currentIndex}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.9 }}
                          transition={{ duration: 0.15 }}
                          className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white"
                        >
                          {words[currentIndex]}
                        </motion.p>
                      </div>
                    )}
                  </div>

                  {/* Progress indicator */}
                  {chatStep >= chatMessages.length && (
                    <div className="relative mt-6 space-y-2">
                      <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-full"
                          style={{ width: `${((currentIndex + 1) / words.length) * 100}%` }}
                          transition={{ duration: 0.1 }}
                        />
                      </div>
                      <div className="flex justify-between text-xs text-white/50 font-medium">
                        <span>{currentIndex + 1} / {words.length} words</span>
                        <span>{Math.round(60000 / speed)} WPM</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Controls */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    onClick={togglePlay}
                    disabled={chatStep < chatMessages.length}
                    className={`button-primary h-11 px-6 text-sm font-semibold flex items-center gap-2 ${chatStep < chatMessages.length ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {isPlaying ? (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <rect x="6" y="4" width="4" height="16" rx="1" />
                          <rect x="14" y="4" width="4" height="16" rx="1" />
                        </svg>
                        Pause
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                        Play
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2 glass-card px-4 py-2.5">
                    <span className="text-xs text-white/60 font-semibold">Speed</span>
                    <div className="flex gap-1">
                      {[
                        { label: "0.5×", value: 500 },
                        { label: "1×", value: 250 },
                        { label: "1.5×", value: 166 },
                        { label: "2×", value: 125 },
                      ].map((option) => (
                        <button
                          key={option.value}
                          onClick={() => adjustSpeed(option.value)}
                          disabled={chatStep < chatMessages.length}
                          className={`px-2.5 py-1 text-xs font-medium rounded-lg transition-all ${
                            chatStep < chatMessages.length ? 'opacity-50 cursor-not-allowed' :
                            speed === option.value
                              ? "bg-blue-500/20 text-blue-300 ring-1 ring-blue-400/30"
                              : "text-white/60 hover:text-white hover:bg-white/10"
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={resetAll}
                    className="button-ghost h-11 px-5 text-sm font-medium"
                  >
                    Reset
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

