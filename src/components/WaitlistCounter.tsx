"use client";

import { useEffect, useState } from "react";
import { waitlistRepository } from "../repository/waitlistRepository";
import { motion } from "framer-motion";

const WaitlistCounter = () => {
  const [count, setCount] = useState(0);
  const [target, setTarget] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCount = async () => {
      try {
        const result = await waitlistRepository.getWaitlistCount();
        setTarget(result);
      } catch (err: any) {
        setError(err.message || "Failed to load");
      }
    };

    fetchCount();
  }, []);

  useEffect(() => {
    if (target === null) return;
    let current = 0;
    const step = Math.ceil(target / 40);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(current);
      }
    }, 30);
    return () => clearInterval(interval);
  }, [target]);

  if (error) {
    return null;
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative bg-[#0f172a]/80 backdrop-blur-md border border-cyan-500/30 rounded-lg px-4 py-3 text-sm text-cyan-200 shadow-[0_0_10px_#0ff2] font-mono"
      >
        <span className="block text-[11px] uppercase text-cyan-400/80 tracking-widest mb-1">
          waitlist users
        </span>
        <div className="text-xl text-center font-semibold tracking-wider">
          {count}
        </div>
      </motion.div>
    </div>
  );
};

export default WaitlistCounter;
