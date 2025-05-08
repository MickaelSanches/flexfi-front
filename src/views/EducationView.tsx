import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Brain, Wallet, DollarSign, HelpCircle, Puzzle } from "lucide-react";

const modules = [
  {
    icon: <HelpCircle size={28} className="text-[#00FEFB]" />,
    title: "What is FlexFi?",
    to: "/education/flexfi",
  },
  {
    icon: <Brain size={28} className="text-[#00FEFB]" />,
    title: "Web3 for Beginners",
    to: "/education/web3-explained",
  },
  {
    icon: <DollarSign size={28} className="text-[#00FEFB]" />,
    title: "Stablecoins Explained",
    to: "/education/stablecoins",
  },
  {
    icon: <Puzzle size={28} className="text-[#00FEFB]" />,
    title: "FlexFi & BNPL",
    to: "/education/bnpl",
  },
  {
    icon: <Wallet size={28} className="text-[#00FEFB]" />,
    title: "What’s a Wallet?",
    to: "/education/wallets",
  },
];

const EducationPage = () => {
  return (
    <main className="px-6 md:px-16 lg:px-24 xl:px-40 py-20 text-white">
      <section className="text-center mb-20">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold"
        >
          Learn Web3 & FlexFi — Without the Headache.
        </motion.h1>
        <p className="mt-4 text-gray-300 max-w-xl mx-auto">
          A series of mini-guides, quizzes, and videos to help you understand Web3, crypto payments, and how FlexFi works — clearly and simply.
        </p>
      </section>

      {/* MODULES */}
      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {modules.map((mod, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className="bg-[#0C1D26] border border-cyan-500/10 rounded-xl p-6 hover:border-cyan-400 transition"
          >
            <Link to={mod.to} className="flex flex-col gap-4 h-full">
              <div>{mod.icon}</div>
              <h3 className="text-lg font-bold">{mod.title}</h3>
              <span className="text-sm text-gray-400 mt-auto">
                Read the module →
              </span>
            </Link>
          </motion.div>
        ))}
      </section>

      {/* <div className="text-sm text-gray-400 mt-8 space-x-6">
          <Link to="/education/glossary">📘 Glossary</Link>
          <Link to="/education/videos">🎥 Videos</Link>
        </div> */}
    </main>
  );
};

export default EducationPage;

