import { useEffect, useRef, useState } from "react";
import { X } from "lucide-react";
import JoinWaitlistButton from "./JoinWaitlistButton1";

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(true);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleClose = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        handleClose();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div
        ref={modalRef}
        className="relative w-full max-w-5xl bg-gradient-to-br from-[#001A22] via-[#002F36] to-[#001A22] border border-cyan-500/20 rounded-3xl p-6 md:p-12 text-white grid md:grid-cols-2 gap-6 overflow-hidden"
      >
        {/* Visuel avec halo */}
        <div className="flex items-center justify-center relative">
          <div className="absolute -inset-4 blur-2xl bg-cyan-400/10 animate-pulse rounded-3xl z-0" />
          <img
            src="/images/seeker.webp"
            alt="Seeker reward"
            className="relative rounded-2xl z-10 max-w-xs md:max-w-md"
          />
        </div>

        {/* Contenu */}
        <div className="flex flex-col justify-center space-y-6 text-left z-10">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#00FEFB] leading-tight">
            The FlexFi Contest Has Begun.
          </h2>
          <p className="text-white text-base md:text-lg">
            Join the Tribe. Invite friends. Complete your profile. Earn FlexPoints. Rewards await the most engaged users.
          </p>

          <ul className="text-sm md:text-base text-white space-y-2 list-disc list-inside">
            <li>Invite your friends with your referral code</li>
            <li>Complete your profile</li>
            <li>Climb the leaderboard, win exclusive rewards</li>
          </ul>

          <JoinWaitlistButton onClick={handleClose} />
        </div>

        {/* Fermeture */}
        <button
          className="absolute top-4 right-4 text-white hover:text-[#00FEFB] transition"
          onClick={handleClose}
        >
          <X size={28} />
        </button>
      </div>
    </div>
  );
};

export default WelcomePopup;
