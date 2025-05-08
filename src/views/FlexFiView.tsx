import { motion } from "framer-motion";
import JoinWaitlistButton from "../components/JoinWaitlistButton";
import { FaLock, FaWallet } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const WhatIsFlexFi = () => {
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
          What is FlexFi?
        </h1>
        <p className="text-lg text-gray-300">
          FlexFi is a new way to pay — without banks, without debt, and without friction.
        </p>
        <p className="text-base text-gray-400">
          Whether you're shopping online or in-store, FlexFi lets you split your payments in 3 to 12 installments,
          even if the store doesn’t offer it.
        </p>
        <p className="text-sm text-gray-500">
          All you need is your FlexFi card. No paperwork. No credit checks. Just smart freedom.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaWallet className="text-[#00FEFB]" />
            How it works, simply
          </h2>
          <p className="text-gray-400">
            You deposit money into your FlexFi account — think of it as smart savings.
            That amount unlocks your ability to pay in several installments.
            Your funds stay safe, and even grow automatically thanks to FlexYield.
          </p>
          <p className="text-gray-400">
            You pay with your card, split the bill, and get rewarded.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaLock className="text-[#00FEFB]" />
            What FlexFi gives you
          </h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>Split payments anywhere — from groceries to gadgets</li>
            <li>No debt, no hidden fees — your own money backs your purchases</li>
            <li>Smart saving through automated, secure staking</li>
            <li>A powerful card that adapts to your needs</li>
            <li>Rewards invested for you — not just spent and gone</li>
          </ul>
        </div>
      </div>

      <div className="mt-20 text-center">
        <p className="text-gray-400 mb-6">Deposit → Unlock BNPL → Pay Anywhere → Earn Rewards</p>
      </div>

      <div className="text-center space-y-4 mt-20">
        <h3 className="text-2xl text-white font-bold">Want to go further?</h3>
        <JoinWaitlistButton />
      </div>
    </section>
  );
};

export default WhatIsFlexFi;