import { motion } from "framer-motion";
import frontCard from "/images/Group.webp";
import backCard from "/images/Group1.webp";

const RotatingCard = () => {
  return (
    <div className="relative w-[600px] h-[410px] mx-auto flex items-center justify-center">
      {/* Halo lumineux derrière la carte */}
      <div className="absolute w-50 h-50  opacity-30 animate-pulse" />

      {/* Carte en rotation */}
      <motion.div
        className="relative w-full h-full"
        animate={{ rotateY: 360 }}
        transition={{
          repeat: Infinity,
          duration: 12,
          ease: "linear",
        }}
        style={{
          transformStyle: "preserve-3d",
        }}
      >
        {/* Recto */}
        <img
          src={frontCard}
          alt="Front FlexFi"
          className="absolute w-full h-full object-cover backface-hidden rounded-2xl"
        />

        {/* Verso */}
        <img
          src={backCard}
          alt="Back FlexFi"
          className="absolute w-full h-full object-cover backface-hidden rounded-2xl"
          style={{ transform: "rotateY(180deg)" }}
        />
      </motion.div>
    </div>
  );
};

export default RotatingCard;
