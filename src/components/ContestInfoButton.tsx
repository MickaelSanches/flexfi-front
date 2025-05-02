import { useState } from "react";
import { FaInfoCircle } from "react-icons/fa";
import ParticipationInfo from "./ParticipationInfo";

const ContestInfoButton = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setShowModal(true)}
        className="cursor-pointer w-10 h-10 flex items-center justify-center bg-[#71FFFF] text-[#001A22] rounded-full shadow-md hover:bg-[#00FEFB] transition duration-300"
        aria-label="Contest Info"
      >
        <FaInfoCircle className="text-lg" />
      </button>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-[#0F1E29] rounded-2xl shadow-lg max-w-3xl w-full p-6 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <ParticipationInfo />
          </div>
        </div>
      )}
    </>
  );
};

export default ContestInfoButton;
