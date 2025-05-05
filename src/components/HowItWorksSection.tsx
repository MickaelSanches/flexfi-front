import { motion } from "framer-motion";
import { UserPlus, CreditCard, TrendingUp, Award } from "lucide-react";
import FlexFiCard3D from "./RotatingCard1";
import { JSX } from "react";
import { Player } from "@lottiefiles/react-lottie-player";

interface Step {
  icon: JSX.Element;
  title: string;
  description: string;
  image?: string;
  lottie?: string;
  component?: JSX.Element;
}

const steps: Step[] = [
  {
    icon: <UserPlus className="w-8 h-8 text-cyan-400" />,
    title: "Sign Up & Deposit",
    description:
      "Open your FlexFi account. Deposit your USDC or preferred crypto. Your crypto stays yours — safe, staked, working for you.",
    image: "/images/hand.webp",
  },
  {
    icon: <CreditCard className="w-8 h-8 text-blue-400" />,
    title: "Pay with FlexFi Card",
    description:
      "Use your FlexFi Card anywhere. Split payments into 3, 4, 6, or 12 months. 0% interest when FlexBoost is active. Always fair.",
    image: "/images/POS.webp",
  },
  {
    icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    title: "Grow with FlexYield",
    description:
      "Every payment unlocks smart rewards. Your money keeps working while you spend.",
    lottie: "/lotties/grow.json",
  },
  {
    icon: <Award className="w-8 h-8 text-yellow-400" />,
    title: "Level Up Your Life",
    description:
      "Boost your score. Unlock premium cards, perks, exclusive offers. Control your crypto-powered future.",
    component: <FlexFiCard3D />,
  },
];

const HowItWorks = () => {
  return (
    <section
      className="text-white px-6 py-10 md:px-16 lg:px-24 xl:px-50"
      id="how-it-works"
    >
      <div className="max-w-7xl mx-auto space-y-10">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold font-days-one"
        >
          How FlexFi Works
        </motion.h2>

        <div className="flex flex-col gap-40 mt-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className={`flex flex-col md:flex-row ${
                index % 2 !== 0 ? "md:flex-row-reverse" : ""
              } items-center justify-between gap-30`}
            >
              <div className="flex-1">
                <div className="bg-[#0C1D26] rounded-xl p-6 text-center border border-[#1E2E36] hover:border-[#00FEFB] transition duration-300 shadow-none hover:shadow-[0_0_15px_#00FEFB] hover:scale-105">
                  <div className="flex items-center gap-4 mb-6">
                    {step.icon}
                    <h3 className="text-2xl font-semibold font-days-one">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className="flex-1 hidden md:flex justify-center">
                {step.component ? (
                  <div className="w-full h-full">{step.component}</div>
                ) : step.lottie ? (
                  <Player
                    autoplay
                    loop
                    src="/lotties/grow.json"
                    className="h-10 w-10 md:h-70 md:w-70"
                  />
                ) : (
                  <img
                    loading="lazy"
                    src={step.image}
                    alt={step.title}
                    className="w-full h-full object-contain rounded-2xl"
                  />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
