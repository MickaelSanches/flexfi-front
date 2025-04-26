import { motion } from "framer-motion";

const FlexBoost = () => {
  return (
    <section className="px-6 py-24 md:px-20 text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
        >
          FlexBoost for Merchants
        </motion.h2>
        <p className="text-gray-200 text-lg leading-relaxed">
          Offer Buy Now, Pay Later with 0% fees to your customers.
          <br />
          Gain visibility inside FlexFi, boost your sales, and only pay based on
          performance.
          <br />
          <br />
          No subscription. No commitment. Pure growth.
        </p>
      </div>
    </section>
  );
};

export default FlexBoost;
