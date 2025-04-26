import React, { useState } from "react";
import { motion } from "framer-motion";
import { SparklesIcon, ChevronDown } from "lucide-react";

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-700 py-4">
      <button
        className="flex items-center justify-between w-full text-left text-white font-medium text-lg"
        onClick={() => setOpen(!open)}
      >
        {question}
        <ChevronDown
          className={`w-5 h-5 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="text-gray-400 mt-2 text-sm leading-relaxed">{answer}</p>
      )}
    </div>
  );
};

const FlexYieldSection: React.FC = () => {
  return (
    <section
      className=" text-white px-6 py-6 md:px-16 lg:px-24 xl:px-50"
      id="flexyield"
    >
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-start mb-16">
            FlexYield
          </h2>
          <p className="text-gray-400 mt-4 max-w-xl mx-auto">
            Turn your everyday purchases into smart, automated investments.
          </p>
        </motion.div>

        {/* Illustration + Explanation */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-3xl p-6 border border-cyan-900 backdrop-blur-md shadow-2xl">
              <p className="text-lg">
                <span className="font-semibold text-cyan-400">
                  I buy a phone
                </span>{" "}
                → <br />
                <span className="text-gray-300">
                  €10 automatically invested in secured staking
                </span>
                <br />
                <span className="font-semibold text-green-400">
                  Estimated return: 5% / year
                </span>
              </p>
              <SparklesIcon className="absolute top-[-1.5rem] right-[-1.5rem] text-cyan-500 w-10 h-10 animate-pulse" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-lg text-gray-300 space-y-4"
          >
            <p>
              Every FlexFi purchase triggers an automatic investment into
              yield-bearing assets like staking or tokenized real-world assets
              (RWA).
            </p>
            <p>
              You passively grow your capital while spending as usual. Smart
              finance made effortless.
            </p>
          </motion.div>
        </div>

        {/* FAQ */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-2xl font-semibold text-white mb-6">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            <FAQItem
              question="Where is the invested money going?"
              answer="It’s placed into secured, yield-bearing assets: blockchain staking, vetted DeFi protocols, and tokenized real-world assets (RWA)."
            />
            <FAQItem
              question="What types of yield products are used?"
              answer="FlexYield uses a mix of crypto staking (Ethereum, Solana), secure DeFi pools (Aave, Compound), and RWA products like tokenized bonds."
            />
            <FAQItem
              question="Is the return guaranteed?"
              answer="Returns are not guaranteed. However, FlexFi uses proven and diversified strategies to reduce risk and maximize performance."
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FlexYieldSection;
