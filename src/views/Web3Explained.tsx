import { motion } from "framer-motion";
import { ArrowLeft, Server, Eye, ShieldCheck, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Web3Explained = () => {
  const navigate = useNavigate();
  return (
    <section className="text-white px-6 md:px-16 lg:px-24 xl:px-40 py-20 space-y-20">
      <button
        onClick={() => navigate("/education")}
        className="flex items-center gap-2 text-[#00FEFB] mb-6 hover:underline"
      >
        <ArrowLeft size={18} /> Back to Education
      </button>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center space-y-4"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-[#00FEFB]">
          Web3: What It Really Means
        </h1>
        <p className="text-lg text-gray-300">(Without the Hype)</p>
        <p className="text-gray-400">
          Forget the buzzwords. Let’s talk facts.
        </p>
      </motion.div>

      <div className="grid gap-16 max-w-5xl mx-auto">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Server className="text-[#00FEFB]" /> Web3 is not magic. It’s infrastructure.
          </h2>
          <p className="text-gray-400">
            The term “Web3” describes a new way the internet handles ownership,
            value, and identity — without depending on big companies, banks, or
            centralized systems.
          </p>
          <p className="text-gray-400">
            At its core, Web3 means you interact directly with a system, not through an intermediary.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Eye className="text-[#00FEFB]" /> So what changes with Web3?
          </h2>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>You don’t need a bank to store, send, or use your money.</li>
            <li>You don’t need to ask permission to access financial tools.</li>
            <li>You don’t rely on trust — everything is verifiable on public networks.</li>
            <li>You can do more with less (fees, paperwork, delays).</li>
          </ul>
          <p className="text-gray-400 italic">
            It doesn’t mean it’s perfect. But it’s transparent, programmable, and global — and that’s already huge.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <ShieldCheck className="text-[#00FEFB]" /> With FlexFi, you don’t need to “know Web3” to use it.
          </h2>
          <p className="text-gray-400">
            We don’t ask you to manage private keys, install Metamask, or read smart contracts.
          </p>
          <p className="text-gray-400">
            We build on Web3, but we offer you a Web2-level user experience:
          </p>
          <ul className="list-disc list-inside text-gray-400 space-y-2">
            <li>A card.</li>
            <li>An app.</li>
            <li>Clear rules.</li>
            <li>Your money, visible and usable, anytime.</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <Zap className="text-[#00FEFB]" /> In short
          </h2>
          <p className="text-gray-400">
            Web3 is not a product. It’s a new foundation.
          </p>
          <p className="text-gray-400">
            FlexFi uses it to remove middlemen, unlock payment freedom, and reward smart usage — without forcing you to understand how it works.
          </p>
          <p className="text-lg text-[#00FEFB] font-semibold">
            You keep the benefits, not the complexity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Web3Explained;