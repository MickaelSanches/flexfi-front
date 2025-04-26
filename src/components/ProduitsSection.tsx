import React from "react";
import { motion } from "framer-motion";

const Card = ({
  title,
  price,
  apr,
  features,
  highlight,
  buttonColor,
  hoverColor,
}: {
  title: string;
  price: string;
  apr: string;
  features: string[];
  highlight?: boolean;
  buttonColor?: string;
  hoverColor?: string;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className={`relative flex flex-col justify-between p-8 rounded-2xl border backdrop-blur-sm bg-gradient-to-br from-[#0c0f1a] via-[#111827] to-[#0c0f1a] hover:scale-105 transition-all duration-500 shadow-inner`}
    style={{
      boxShadow: hoverColor ? `0 0 0px ${hoverColor}` : "none",
    }}
    whileHover={{
      boxShadow: hoverColor
        ? `0 0 10px ${hoverColor}, 0 0 20px ${hoverColor}, 0 0 30px ${hoverColor}`
        : `0 0 10px #00FEFB, 0 0 20px #00FEFB, 0 0 30px #00FEFB`,
    }}
  >
    <div className="mb-6">
      <h3
        className={`text-2xl font-extrabold tracking-tight uppercase ${
          highlight ? "text-yellow-400" : "text-white"
        }`}
      >
        {title}
      </h3>
      <p className="mt-2 text-gray-400 text-sm">
        {price} • APR {apr}
      </p>
    </div>
    <ul className="text-gray-300 space-y-2 flex-1 text-left">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start gap-2">
          <span className="text-[#00FEFB]">✸</span> {feature}
        </li>
      ))}
    </ul>
    <button
      className={`mt-8 ${
        buttonColor
          ? buttonColor
          : "bg-gradient-to-r from-[#00FEFB] to-[#0077FF]"
      } text-black font-bold py-3 rounded-xl w-full hover:opacity-90 transition-all duration-300`}
    >
      Select Card
    </button>
  </motion.div>
);

const ProductSection: React.FC = () => {
  return (
    <section
      className="px-8 py-12 md:px-16 lg:px-24 bg-gradient-to-b "
      id="products"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-start"
        >
          Discover Your FlexFi Card
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mt-4 text-lg md:text-xl text-gray-400 max-w-2xl text-start"
        >
          Choose the perfect card to unlock cashback, BNPL advantages, and
          exclusive NFT benefits.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 max-w-7xl mx-auto">
        <Card
          title="CB Standard"
          price="Free"
          apr="4%"
          features={[
            "BNPL: 3, 4, 6 months",
            "BNPL Fee: 7%",
            "No cashback",
            "No microcredit",
            "No NFT",
          ]}
          hoverColor="#00FEFB"
        />
        <Card
          title="CB Silver"
          price="$50/year"
          apr="5%"
          features={[
            "BNPL: up to 12 months",
            "BNPL Fee: 4% (7% for 12m)",
            "NFT option: +$20",
            "No cashback",
            "No microcredit",
          ]}
          hoverColor="#878787"
        />
        <Card
          title="CB Gold"
          price="$150/year"
          apr="6%"
          highlight
          buttonColor="bg-gradient-to-r from-yellow-400 to-yellow-600"
          features={[
            "BNPL: 3, 4, 6, 12 months",
            "BNPL Fee: 3.5% (5% for 12m)",
            "Cashback: 0.5% (limit $150)",
            "Microcredit: $800–1000 (8%)",
            "NFT option: +$15",
          ]}
          hoverColor="#FFD700"
        />
        <Card
          title="CB Platinum"
          price="$300/year"
          apr="7%"
          buttonColor="bg-gradient-to-r from-purple-500 to-indigo-700"
          features={[
            "BNPL: 3, 4, 6, 12 months",
            "Fixed BNPL Fee: 3%",
            "Cashback: 1.5% (limit $300)",
            "Microcredit: $1000–1500 (6%)",
            "NFT included",
          ]}
          hoverColor="#FFFF"
        />
      </div>
    </section>
  );
};

export default ProductSection;
