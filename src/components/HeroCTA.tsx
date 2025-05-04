import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroCTA = () => {
  return (
    <section className="text-[#001A22] text-center px-6 font-bold py-20 font-days-one">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-4xl font-bold leading-tight mb-8"
      >
        Join the crypto
        <br /> payment revolution.
      </motion.h1>

      <Link to="/waitlist">
        <motion.button
          id="btn-join-waitlist"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="px-6 py-3 border border-[#001A22] rounded-2xl hover:bg-[#001A22] hover:text-white transition duration-300 cursor-pointer"
        >
          Join Waitlist
        </motion.button>
      </Link>
    </section>
  );
};

export default HeroCTA;
