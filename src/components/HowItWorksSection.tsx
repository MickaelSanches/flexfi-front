import React from "react";
import { motion } from "framer-motion";
import { CreditCard, ShieldCheck, Coins, Wallet } from "lucide-react";

const steps = [
  {
    icon: <CreditCard className="w-6 h-6 text-blue-400" />,
    title: "Order your FlexFi Card",
    description:
      "Choose the plan that suits your lifestyle and start spending with crypto-native power.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
    title: "Use BNPL with Peace of Mind",
    description:
      "No late fees, thanks to collateral-backed Buy Now Pay Later across thousands of merchants.",
  },
  {
    icon: <Coins className="w-6 h-6 text-yellow-400" />,
    title: "Earn with FlexYield",
    description:
      "Each transaction invests a portion into yield strategies, passively growing your purchasing power.",
  },
  {
    icon: <Wallet className="w-6 h-6 text-purple-400" />,
    title: "Access Microcredit",
    description:
      "Get fast, score-based microloans up to $1,500, directly from your FlexFi experience.",
  },
];

const HowItWorksSection: React.FC = () => {
  return (
    <section
      className=" text-white  px-6 py-6 md:px-16 lg:px-24 xl:px-50"
      id="how-it-works"
    >
      <div className="max-w-4xl  text-start">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-start"
        >
          How FlexFi Works
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 mt-4 max-w-xl "
        >
          A seamless journey from payment to passive income.
        </motion.p>
      </div>

      {/* Elegant vertical timeline layout */}
      <div className="relative mt-20 max-w-3xl mx-auto">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-[2px] bg-gradient-to-b from-cyan-600/60 via-blue-500/30 to-transparent" />
        <div className="space-y-20 relative z-10">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? "md:items-start" : "md:items-end"
              } gap-4`}
            >
              <div
                className={`md:w-1/2 ${
                  index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                }`}
              >
                <div className="bg-white/5 backdrop-blur-lg border border-gray-800 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon}
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-[#0b0f16] z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
