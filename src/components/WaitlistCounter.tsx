"use client";

import { useEffect, useState, useRef } from "react";
import { waitlistRepository } from "../repository/waitlistRepository";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles } from "lucide-react";

const REFRESH_INTERVAL = 30_000;

const WaitlistCounter = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [key, setKey] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);

  const fetchCount = async () => {
    try {
      const result = await waitlistRepository.getWaitlistCount();
      setTarget(result);
    } catch (err: any) {
      setError(err.message || "Failed to load");
    }
  };

  useEffect(() => {
    fetchCount();
    const interval = setInterval(fetchCount, REFRESH_INTERVAL);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (target === null) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        setKey((prev) => prev + 1);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  if (error) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-50 pointer-events-none font-days-one"
    >
      <motion.div
        drag
        dragMomentum={false}
        dragConstraints={containerRef}
        dragElastic={0.2}
        className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 cursor-grab active:cursor-grabbing pointer-events-auto"
        initial={{ opacity: 0, scale: 0.95, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="relative overflow-hidden rounded-xl sm:rounded-2xl px-4 py-3 sm:px-6 sm:py-5 bg-[#0f172a]/90 border border-cyan-500/30 shadow-[0_0_25px_#00fff7aa] backdrop-blur-md max-w-[180px] sm:max-w-none group transition-all duration-300 hover:shadow-[0_0_35px_#00fff7]">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/10 animate-spin-slow blur-sm opacity-20 pointer-events-none" />

          <div className="absolute inset-0 rounded-xl sm:rounded-2xl bg-cyan-400/10 blur-2xl opacity-20 animate-pulse pointer-events-none" />

          <div className="absolute -top-1 -left-1 sm:-top-2 sm:-left-2 z-10">
            <Sparkles className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-300 animate-pulse" />
          </div>

          <span className="block text-[10px] sm:text-[11px] uppercase text-cyan-300 tracking-widest mb-1 font-mono text-center z-10 relative font-days-one">
            waitlist users
          </span>

          <AnimatePresence mode="wait">
            <motion.div
              key={key}
              initial={{ scale: 0.7, opacity: 0, y: 4 }}
              animate={{ scale: 1.1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: -4 }}
              transition={{ duration: 0.4, ease: "anticipate" }}
              className="text-lg sm:text-2xl font-bold font-mono text-center text-cyan-400 tracking-widest relative z-10"
            >
              <span className="glitch-text font-days-one">{count}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default WaitlistCounter;
