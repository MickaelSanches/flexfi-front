import { motion } from "framer-motion";
import {
  FaWallet,
  FaLock,
  FaKey,
  FaUniversity,
  FaCheckCircle,
} from "react-icons/fa";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

const WalletEducation = () => {
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
        <h1 className="text-4xl md:text-6xl font-bold text-[#00FEFB] flex items-center justify-center gap-3">
          <FaWallet />
          What’s a Wallet, and Why It Matters
        </h1>
        <p className="text-lg text-gray-300">
          If you’re used to apps like Revolut, Lydia, or your regular bank, the word “wallet” might sound confusing.
        </p>
        <p className="text-gray-400">
          Let’s make it simple: A crypto wallet is just a digital safe you own yourself — no bank, no middleman.
        </p>
      </motion.div>

      <div className="bg-[#0C1D26] rounded-xl p-6 space-y-8 max-w-5xl mx-auto shadow-lg">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <FaUniversity className="text-[#00FEFB]" />
          Wallet vs. Bank Account — What’s the Difference?
        </h2>
        <div className="overflow-x-auto">
        <table className="min-w-full text-left border border-[#00FEFB]">
          <thead className="bg-[#00FEFB] text-black">
            <tr>
              <th className="p-3">Bank Account</th>
              <th className="p-3">Crypto Wallet (like FlexFi)</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-300">
            <tr className="border-t border-[#00FEFB]/20">
              <td className="p-3">Managed by a bank</td>
              <td className="p-3">Controlled only by you</td>
            </tr>
            <tr className="border-t border-[#00FEFB]/20">
              <td className="p-3">Can be frozen or blocked</td>
              <td className="p-3">Cannot be touched without your approval</td>
            </tr>
            <tr className="border-t border-[#00FEFB]/20">
              <td className="p-3">Accessible via login</td>
              <td className="p-3">Accessible via a secure key (or email + code via FlexFi)</td>
            </tr>
            <tr className="border-t border-[#00FEFB]/20">
              <td className="p-3">Linked to your identity</td>
              <td className="p-3">Linked to your wallet address</td>
            </tr>
            <tr className="border-t border-[#00FEFB]/20">
              <td className="p-3">Funds stored by the bank</td>
              <td className="p-3">Funds stored in your wallet, not ours</td>
            </tr>
          </tbody>
        </table>
      </div>

        <div className="space-y-4 mt-12">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaLock className="text-[#00FEFB]" />
            With FlexFi, the wallet is invisible — but powerful
          </h2>
          <p className="text-gray-300">
            You don’t need any technical setup. We generate your wallet automatically.
            You can send, receive, and manage funds just like any app.
            And only you can access it — FlexFi doesn’t hold your money.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold flex items-center gap-2">
            <FaKey className="text-[#00FEFB]" />
            Why does it matter?
          </h2>
          <p className="text-gray-300">
            Because your funds aren’t locked inside a company.
            They’re in your hands, protected by a wallet that works with the Solana blockchain — fast, cheap, and secure.
          </p>
          <ul className="list-disc list-inside text-sm text-gray-300">
            <li>Total ownership</li>
            <li>No hidden control</li>
            <li>A modern financial layer you control</li>
          </ul>
        </div>

        <div className="text-center space-y-3 mt-10">
          <h3 className="text-xl font-bold flex justify-center items-center gap-2 text-[#00FEFB]">
            <FaCheckCircle />
            Bottom line
          </h3>
          <p className="text-sm text-gray-400">
            A wallet is like your own bank account — but without the bank.
            FlexFi gives you the benefits, without the complexity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WalletEducation;
