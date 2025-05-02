import {
  Target,
  UserCheck,
  Rocket,
  Trophy,
  CalendarClock,
  ShieldAlert,
  CheckCircle,
} from "lucide-react";

const ParticipationInfo = () => {
  return (
    <div className="w-full max-w-3xl mx-auto px-4 sm:px-6 py-6 bg-[#0C1D26] border border-cyan-500/20 rounded-2xl text-white shadow-lg space-y-6">
      <h2 className="text-xl sm:text-2xl font-bold text-cyan-300 font-days-one text-center sm:text-left">
        How to participate?
      </h2>

      <ul className="space-y-3 text-white/90 text-sm sm:text-base">
        <li className="flex items-start sm:items-center gap-2">
          <Target size={18} className="mt-1 sm:mt-0 text-[#71FFFF]" />
          <span>Invite your friends with your referral code</span>
        </li>
        <li className="flex items-start sm:items-center gap-2">
          <UserCheck size={18} className="mt-1 sm:mt-0 text-[#71FFFF]" />
          <span>Complete your profile</span>
        </li>
        <li className="flex items-start sm:items-center gap-2">
          <Rocket size={18} className="mt-1 sm:mt-0 text-[#71FFFF]" />
          <span>Join X campaigns</span>
        </li>
      </ul>

      <div className="text-sm sm:text-base">
        <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-cyan-300 mb-1">
          <Trophy size={20} className="text-[#71FFFF]" />
          Ranking
        </h3>
        <p className="text-white/80 leading-relaxed">
          The leaderboard is based on the total number of{" "}
          <strong>FlexPoints</strong> earned until the end of the contest. Each
          action earns a specific number of points (see scoring on the{" "}
          <span className="text-[#71FFFF] underline">Missions</span> page).
        </p>
      </div>

      <div className="text-sm sm:text-base">
        <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-cyan-300 mb-1">
          <CalendarClock size={20} className="text-[#71FFFF]" />
          Duration
        </h3>
        <p className="text-white/80 leading-relaxed">
          The contest ends on the official beta launch date, or earlier if we
          raise funds.
        </p>
      </div>

      <div className="text-sm sm:text-base">
        <h3 className="flex items-center gap-2 text-lg sm:text-xl font-semibold text-cyan-300 mb-1">
          <ShieldAlert size={20} className="text-[#71FFFF]" />
          Rules
        </h3>
        <p className="text-white/80 leading-relaxed">
          Any cheating, fake referrals, or multiple accounts will result in{" "}
          <strong>immediate disqualification</strong>.<br />
          FlexFi reserves the right to update the rules at any time if needed.
        </p>
      </div>

      <div className="text-center">
        <p className="text-base sm:text-lg font-bold text-[#71FFFF] flex flex-col sm:flex-row justify-center items-center gap-4 text-start">
          <CheckCircle size={22} className="text-[#71FFFF]" />
          Join the Tribe, climb the leaderboard, and Flex your status
        </p>
      </div>
    </div>
  );
};

export default ParticipationInfo;
