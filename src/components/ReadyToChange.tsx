import React from "react";
import { motion } from "framer-motion";

const ReadyToChange: React.FC = () => {
  return (
    <section className="w-full px-6 py-20  text-white">
      <div className="max-w-3xl mx-auto text-center space-y-6">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-4xl font-bold"
        >
          Ready to change how the world pays?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-lg md:text-3xl text-white/70"
        >
          Join the first protocol that truly bridges crypto and real life.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-lg md:text-3xl text-white/70"
        >
          No debt. No friction. No bullshit.
        </motion.p>
      </div>
    </section>
  );
};

export default ReadyToChange;
