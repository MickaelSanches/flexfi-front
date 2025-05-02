import React from "react";
import { motion } from "framer-motion";

const BuiltForMerchants: React.FC = () => {
  return (
    <section className="w-full px-6 pt-16 md:px-16 lg:px-24 xl:px-50 bg-gradient-to-b text-white overflow-hidden">
      <div className="max-w-7xl  flex flex-col ">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-end mb-12 font-days-one"
        >
          Built for merchants
        </motion.h2>
      </div>

      <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <img
          src="/images/billboards.webp"
          alt="FlexFi Billboard"
          className="w-full h-auto object-cover"
        />
      </div>
    </section>
  );
};

export default BuiltForMerchants;
