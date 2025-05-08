import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { FaDollarSign, FaBolt, FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const WhatAreStablecoins = () => {
  const navigate = useNavigate();

  return (
    <section className="text-white px-6 md:px-16 lg:px-24 xl:px-40 py-20 space-y-20">
      <button
        onClick={() => navigate("/education")}
        className="flex items-center gap-2 text-[#00FEFB] mb-6 hover:underline"
      >
        <ArrowLeft size={18} />
        Back to Education
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#00FEFB]">
          Stablecoins: Digital money, Made Simple
        </h1>
        <p className="text-lg text-gray-300">
          Cryptos go up and down. That’s the part most people fear.
          But not all digital currencies are volatile — some are designed to stay stable.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaDollarSign className="text-[#00FEFB]" />
            What makes stablecoins “stable”?
          </h2>
          <p className="text-gray-400">
            Unlike Bitcoin or Ethereum, stablecoins are linked to a real-world currency, like the US dollar.
            <br />
            <strong>1 USDC = 1 dollar.</strong><br />
            They don’t go up. They don’t crash.
            They’re built for payment, not speculation.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaCheckCircle className="text-[#00FEFB]" />
            Why FlexFi uses stablecoins
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>To let you pay in crypto without risk</li>
            <li>To unlock split payments safely</li>
            <li>To earn rewards that stay predictable</li>
            <li>To let you save — without becoming a trader</li>
          </ul>
          <p className="text-sm text-gray-500 mt-2">
            We don’t use “funny coins”.<br />
            We use what works: transparent, regulated stablecoins like USDC on the Solana network.
          </p>
        </div>

        <div className="space-y-6 col-span-2">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaBolt className="text-[#00FEFB]" />
            Faster than your bank, safer than cash
          </h2>
          <p className="text-gray-400">
            No delays.<br />
            No conversion fees.<br />
            No bank to block your transfer.<br />
            And you still see the exact euro or dollar value at any time.
          </p>
        </div>

        <div className="space-y-6 col-span-2">
          <p className="text-gray-400 text-lg leading-relaxed">
            You don’t need to buy Bitcoin to use FlexFi.
            <br />
            You don’t need to invest.
            <br />
            You don’t need to understand charts.
            <br />
            You just use your FlexFi card — and we handle the rest with stablecoins in the background.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatAreStablecoins;
