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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F1E29] rounded-2xl shadow-lg p-6">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-gray-300 hover:text-white text-2xl z-10"
            >
              &times;
            </button>
            <ParticipationInfo setShowModal={setShowModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default ContestInfoButton;
