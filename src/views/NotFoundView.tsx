import { Player } from "@lottiefiles/react-lottie-player";
import { Link } from "react-router-dom";

const NotFoundView = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#0C1D26] to-[#001A22] px-6 py-12 text-center">
      <Player
        autoplay
        loop
        src="/lotties/404.json"
        className="w-64 h-64 md:w-80 md:h-80"
      />
      <h1 className="text-4xl md:text-5xl font-bold text-[#71FFFF] font-days-one mt-6">
        Page Not Found
      </h1>
      <p className="text-white/80 mt-4 max-w-md text-sm md:text-base">
        You seem to be lost in the Web3 universe. This page doesn't exist.
      </p>
      <Link
        to="/"
        className="mt-6 inline-block px-6 py-3 bg-[#71FFFF] text-[#001A22] font-bold rounded-xl hover:bg-[#00FEFB] transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default NotFoundView;
