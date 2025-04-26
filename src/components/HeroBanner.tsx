import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-6 py-6 md:flex-row md:justify-between md:px-16 lg:px-24 xl:px-50 min-h-[80vh] overflow-hidden">
      <div className="text-center md:text-left space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight"
        >
          The freedom to <br /> pay with crypto,
          <br />
          <span className="text-[#00FEFBCC]">later</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
          className="text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0"
        >
          Split your payments. Earn rewards.
          <br />
          No debt.
        </motion.p>
      </div>

      <motion.img
        src="/images/CB.webp"
        alt="card flexfi"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.7 }}
        className="w-64 sm:w-80 md:w-2/4 object-contain"
      />
    </section>
  );
};

export default HeroBanner;
