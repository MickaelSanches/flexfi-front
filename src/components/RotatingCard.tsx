import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import frontCard from "/images/CBNft.webp";

const RotatingCard = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Transformer le scroll en rotation Y (de -30° à 30°)
  const rotateY = useSpring(useTransform(scrollYProgress, [0, 1], [-30, 30]), {
    stiffness: 80,
    damping: 20,
  });

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-[600px] aspect-[600/410] mx-auto perspective-[2000px] flex items-center justify-center"
    >
      <motion.div
        className="relative w-full h-full scale-[0.9]"
        style={{
          transformStyle: "preserve-3d",
          rotateX: "30deg",
          rotateZ: "-10deg",
          rotateY,
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
      </motion.div>
    </div>
  );
};

export default RotatingCard;
