import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import {
  FaReceipt,
  FaBrain,
  FaCreditCard,
  FaStore,
  FaGem,
  FaSeedling,
} from "react-icons/fa";

const BNPLEducation = () => {
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
          BNPL, But Smarter
        </h1>
        <p className="text-lg text-gray-300">
          BNPL means “Buy Now, Pay Later” — and it's everywhere. <br /> But with
          FlexFi, it’s not the same. It’s not credit, not a loan, and not debt.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaReceipt className="text-[#00FEFB]" />
            So what’s the FlexFi way?
          </h2>
          <p className="text-gray-400">
            Most BNPL systems give you money you don’t have — and hope you’ll
            pay back on time.
            <br />
            FlexFi works differently.
            <br />
            We help you unlock the money you already saved. <br />
            You’re not borrowing — you’re unlocking.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaBrain className="text-[#00FEFB]" />
            What makes it smarter?
          </h2>
          <ul className="list-disc list-inside text-gray-400">
            <li>No bank-style credit</li>
            <li>No credit checks</li>
            <li>No surprises</li>
            <li>
              You always see the total cost upfront — one clear fee, based on
              your card.
            </li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaCreditCard className="text-[#00FEFB]" />
            You’re always in control
          </h2>
          <p className="text-gray-400">
            With FlexFi:
            <ul className="list-disc list-inside mt-2">
              <li>You choose your number of installments (3x to 12x)</li>
              <li>You know what you pay — from the start</li>
              <li>
                Your schedule is visible, and you can pay early anytime
              </li>
              <li>
                And if something changes, your funds are still yours — no banks
                involved
              </li>
            </ul>
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaStore className="text-[#00FEFB]" />
            Where can you use it?
          </h2>
          <p className="text-gray-400">
            Anywhere that accepts your FlexFi card. <br />
            No need for the store to offer BNPL.
            <br />
            You decide. You unlock. You pay.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaGem className="text-[#00FEFB]" />
            Bonus: You could even pay 0% fees
          </h2>
          <p className="text-gray-400">
            Some merchants will launch FlexBoost campaigns, which cover your
            BNPL fee for a limited time.
            <br />
            That means you can split your payments at 0% — just for choosing the
            right partner at the right time.
            <br />
            It’s like a flash sale, but for your cash flow.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-white flex items-center gap-2">
            <FaSeedling className="text-[#00FEFB]" />
            And remember: You earn as you spend
          </h2>
          <p className="text-gray-400">
            While you split a payment, your stacked funds stay locked — and
            working:
            <ul className="list-disc list-inside mt-2">
              <li>You earn passive rewards through FlexYield</li>
              <li>Your balance is safe and visible</li>
              <li>
                Depending on your card, those rewards may offset all or part of
                the BNPL fee
              </li>
            </ul>
            <br />
            In some cases, the net cost of using FlexFi becomes zero — or even
            positive.
            <br />
            It’s not debt. It’s financial control with benefits.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BNPLEducation;
