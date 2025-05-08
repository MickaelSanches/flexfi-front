import { motion } from "framer-motion";
import {
  FaRocket,
  FaCreditCard,
  FaPiggyBank,
  FaCoins,
  FaIdCard,
  FaImage,
  FaShoppingCart,
  FaSearch,
  FaExclamationTriangle,
} from "react-icons/fa";
import FlexFiCard3D from "../components/RotatingCard";
import JoinWaitlistButton from "../components/JoinWaitlistButton";
import { Player } from "@lottiefiles/react-lottie-player";

const ImmersiveStoryPage = () => {
  const reveal = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  const sections = [
    {
      icon: <FaCreditCard className="text-[#00FEFB] text-2xl" />,
      title: "Pay in installments, wherever you want.",
      text: (
        <>
          <p>
            FlexFi allows you to pay in 3x to 12x, in any store that accepts bank cards. No need for the merchant to offer installments themselves.
          </p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
            <li>Your FlexFi card unlocks this option everywhere.</li>
            <li>And without a loan to repay with high interest.</li>
          </ul>
        </>
      ),
      component: <FlexFiCard3D />,
    },
    {
      icon: <FaPiggyBank className="text-[#00FEFB] text-2xl" />,
      title: "You save before you buy.",
      text: (
        <p>
          With FlexFi, you deposit money (like a smart piggy bank).<br />
          → In return, you unlock the right to pay in installments up to that amount.<br /><br />
          → Meanwhile, your money works for you.
        </p>
      ),
      image: "/images/POS.webp",
      imageStyle: "max-w-[300px] md:max-w-[400px]",
    },
    {
      icon: <FaCoins className="text-[#00FEFB] text-2xl" />,
      title: "Your spending earns you rewards, FlexYield.",
      text: (
        <>
          <p>
            Each purchase with FlexFi generates cashback. This cashback is automatically placed into solid protocols on the Solana blockchain to generate returns, like a small smart savings account.
          </p>
          <p className="text-sm italic mt-2">You spend → You earn. And all this without doing anything more.</p>
        </>
      ),
      lottie: "/lotties/earn.json",
    },
    {
      icon: <FaIdCard className="text-[#00FEFB] text-2xl" />,
      title: "A FlexFi card for every use",
      text: (
        <>
          <p>We offer several types of cards (virtual and physical):</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
            <li>For small budgets or big purchases</li>
            <li>With or without FlexYield</li>
            <li>Access to more flexible payments</li>
          </ul>
          <p className="mt-2">You choose. And you can switch anytime.</p>
        </>
      ),
      image: "/images/CB1.webp",
    },
    {
      icon: <FaImage className="text-[#00FEFB] text-2xl" />,
      title: "Cards boosted with exclusive bonuses",
      text: (
        <p>
          At FlexFi, some bonuses take the form of NFTs (special collectible cards). They let you boost the benefits already on your card.
        </p>
      ),
      image: "/images/nft.webp",
    },
    {
      icon: <FaShoppingCart className="text-[#00FEFB] text-2xl" />,
      title: "Shop as simply as before",
      text: (
        <>
          <p>You can also use your FlexFi card to:</p>
          <ul className="list-disc list-inside mt-2 text-sm text-gray-300">
            <li>Pay in full, like a regular card</li>
            <li>Make purchases online or in-store</li>
            <li>Manage your budget freely in our app</li>
          </ul>
        </>
      ),
      image: "/images/flexfibag.webp",
    },
  ];

  return (
    <main className="text-white px-6 md:px-16 lg:px-24 xl:px-40 pt-24 space-y-40">
      <section className="text-center max-w-4xl mx-auto mb-20">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          variants={reveal}
          className="text-4xl md:text-6xl font-bold leading-tight"
        >
          <FaRocket className="inline-block text-[#00FEFB] mr-2" /> FlexFi, the freedom to pay differently.
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          variants={reveal}
          className="text-[#00FEFB] text-lg md:text-2xl font-semibold mt-6"
        >
          Not a bank. A better solution.
        </motion.p>
      </section>

      {sections.map((section, i) => (
        <section
          key={i}
          className={`grid md:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? "md:[&>*:first-child]:order-2" : ""}`}
        >
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            variants={reveal}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">{section.icon}<h2 className="text-2xl md:text-3xl font-bold">{section.title}</h2></div>
            <div className="text-base text-gray-300 leading-relaxed">{section.text}</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl overflow-hidden flex justify-center"
          >
            
            {section.component ? (
              <div className="w-full max-w-md">{section.component}</div>
            ) : section.lottie ? (
              <Player
                autoplay
                loop
                src={section.lottie}
                className="w-full max-w-xs md:max-w-md"
              />
            ) : (
              <img
                src={section.image}
                alt={section.title}
                className={`w-full h-auto object-cover rounded-2xl ${
                  section.imageStyle || "max-h-[600px]"
                }`}
              />
            )}
          </motion.div>
        </section>
      ))}

      {/* Summary */}
      <section className="text-center text-[#07171C] max-w-3xl mx-auto space-y-6">
        <h2 className="text-3xl font-bold flex justify-center items-center gap-2">
          <FaSearch /> In summary
        </h2>
        <p className="text-lg ">FlexFi is a new way to manage your money with new technology:</p>
        <p className="font-bold text-xl">You deposit. You unlock. You earn.</p>
        <p>All without a bank, without stress, and without jargon.</p>
        <JoinWaitlistButton />
      </section>

      {/* Disclaimer */}
      <section className="text-center max-w-3xl mx-auto text-sm text-[#07171C] p-5 bg-yellow-100 rounded-2xl mb-5">
        <FaExclamationTriangle className="mx-auto text-[#FFCC00] text-xl mb-2" />
        <p>Note: Some offers may evolve. We are constantly improving FlexFi, with you.</p>
      </section>
    </main>
  );
};

export default ImmersiveStoryPage;