import { motion } from "framer-motion";

const OurVision = () => {
  return (
    <section className="px-6 py-16 md:px-16 lg:px-24 xl:px-50  text-white">
      <div className="max-w-5xl mx-auto text-center space-y-8 ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-5xl font-bold leading-tight font-days-one"
        >
          Not a bank. A better one.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-gray-400 text-lg md:text-xl leading-relaxed"
        >
          FlexFi is the first platform operating under the NeoFi Protocol, a
          universal, modular and decentralized financial infrastructure. Built
          for a world where everyone can pay, invest, and grow — without
          borders, without barriers, without banks.
        </motion.p>
      </div>
    </section>
  );
};

export default OurVision;
