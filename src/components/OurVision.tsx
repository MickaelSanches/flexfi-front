import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section className="px-6 py-6 md:px-16 lg:px-24 xl:px-50  text-white">
      <div className="max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold  mb-8"
        >
          Not a bank. A better one.
        </motion.h2>
        <p className="text-gray-400 text-lg ">
          FlexFi is the first platform operating under the NeoFi Protocol, a
          universal, modular and decentralized financial infrastructure. Built
          for a world where everyone can pay, invest, and grow — without
          borders, without barriers, without banks.
        </p>
      </div>
    </section>
  );
};

export default OurVision;
