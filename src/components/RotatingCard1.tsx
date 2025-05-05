// RotatingCard.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import frontCard from "/images/Group.webp";
import backCard from "/images/Group1.webp";

const RotatingCard = () => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      rotateY: [0, 360, 0, -360],
      transition: {
        rotateY: { repeat: Infinity, duration: 24, ease: "linear" },
      },
    });
  }, [controls]);

  return (
    <div className="relative w-full max-w-[600px] aspect-[600/410] mx-auto perspective-[2000px] flex items-center justify-center">
      {/* Gradient lumineux dynamique au survol */}
      <div className="absolute w-full h-full rounded-2xl z-[-1]" />

      {/* Carte en rotation inclinée légèrement tombée */}
      <motion.div
        className="relative w-full h-full scale-[0.9]"
        animate={controls}
        style={{
          transformStyle: "preserve-3d",
          rotateX: "40deg",
          rotateZ: "-15deg",
        }}
      >
        {/* Recto */}
        <img
          loading="lazy"
          src={frontCard}
          alt="Front FlexFi"
          width={600}
          height={410}
          className="absolute w-full h-full object-cover rounded-2xl shadow-xl backface-hidden z-[1]"
        />

        {/* Verso */}
        <img
          loading="lazy"
          src={backCard}
          alt="Back FlexFi"
          width={600}
          height={410}
          className="absolute w-full h-full object-cover rounded-2xl backface-hidden z-[1]"
          style={{ transform: "rotateY(180deg)" }}
        />
      </motion.div>
    </div>
  );
};

export default RotatingCard;
