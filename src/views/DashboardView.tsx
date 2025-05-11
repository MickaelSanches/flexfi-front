import { motion } from "framer-motion";
import { MdMarkEmailRead } from "react-icons/md";
import {
  TrendingUp,
  Users,
  Link as LinkIcon,
  Copy as CopyIcon,
  Check as CheckIcon,
  Clock,
} from "lucide-react";
import { FaUserFriends, FaWpforms } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import { RiSwordLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { useDashboardViewModel } from "../viewmodels/useDashboardViewModel";
import { JSX } from "react";

const DashboardView = () => {
  const {
    userReferralCode,
    formFullfilled,
    isVerified,
    points,
    rank,
    referralsCount,
    isResending,
    resendSuccess,
    copied,
    handleCopy,
    handleResendVerification,
  } = useDashboardViewModel();

  type StatCard = {
    id: number;
    title: string;
    value: number | string;
    icon: JSX.Element;
    isReferral?: boolean;
  };

  const baseStats: StatCard[] = [
    {
      id: 1,
      title: "Total FlexPoints",
      value: points,
      icon: (
        <img
          src="/logo/flexpoint.webp"
          alt="FlexPoints"
          className="w-8 h-8 object-contain"
        />
      ),
    },
    {
      id: 2,
      title: "Your Rank",
      value: rank,
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      id: 3,
      title: "Referrals",
      value: referralsCount,
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
  ];

  if (userReferralCode) {
    baseStats.push({
      id: 4,
      title: "Referral Code",
      value: userReferralCode,
      icon: <LinkIcon className="w-8 h-8 text-cyan-400" />,
      isReferral: true,
    });
  }

  return (
    <main className="px-6 md:px-16 lg:px-24 xl:px-40 min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-10 font-days-one mt-20 text-center">
        Welcome to Your Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 px-2 sm:px-4">
        {!isVerified && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center w-full max-w-xs sm:max-w-md"
          >
            <div className="bg-red-900/10 border border-red-500/20 p-3 sm:p-5 rounded-lg">
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <MdMarkEmailRead className="text-red-300 w-5 h-5" />
                <p className="text-sm sm:text-base text-red-300 font-semibold">
                  Email not verified
                </p>
              </div>
              <p className="text-xs text-gray-400 mb-4 sm:mb-5">
                Verify now and earn bonus points.
              </p>
              {resendSuccess ? (
                <p className="text-xs text-green-400 font-medium">
                  Verification email sent!
                </p>
              ) : (
                <button
                  onClick={handleResendVerification}
                  disabled={isResending}
                  className="inline-flex items-center justify-center gap-1 bg-[#00FEFB] text-[#001A22] hover:bg-[#71FFFF] font-bold text-xs px-3 py-1.5 rounded-full shadow transition disabled:opacity-50"
                >
                  {isResending ? "Sending..." : "Resend Email"}
                  <span className="flex items-center gap-1 text-[10px] font-semibold text-teal-700">
                    +100
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoint"
                      className="w-3 h-3"
                    />
                  </span>
                </button>
              )}
            </div>
          </motion.div>
        )}

        {formFullfilled === false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8 text-center w-full max-w-xs sm:max-w-md"
          >
            <div className="bg-yellow-900/10 border border-yellow-400/20 p-3 sm:p-5 rounded-lg">
              <p className="text-sm text-yellow-300 font-semibold mb-2">
                Profile incomplete
              </p>
              <p className="text-xs text-gray-400 mb-4">
                Finish now to get your bonus points.
              </p>
              <Link
                to="/waitlist"
                className="inline-flex items-center justify-center gap-1 bg-[#00FEFB] text-[#001A22] hover:bg-[#71FFFF] font-bold text-xs px-3 py-1.5 rounded-full shadow transition"
              >
                Complete
                <span className="flex items-center gap-1 text-[10px] font-semibold text-teal-700">
                  +20
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoint"
                    className="w-3 h-3"
                  />
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {baseStats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            className="bg-[#0C1D26]/80 border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-4 shadow-lg"
          >
            <div className="p-3 bg-[#112B36] rounded-full">{stat.icon}</div>
            <div className="flex-1">
              <p className="text-sm text-gray-400">{stat.title}</p>
              <div className="flex items-center gap-2 mt-1">
                <p className="text-2xl font-bold text-teal-400 break-all">
                  {stat.value}
                </p>
                {stat.isReferral && (
                  <button
                    onClick={handleCopy}
                    className="p-1.5 bg-cyan-700 hover:bg-cyan-600 text-white rounded-full transition"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-300" />
                    ) : (
                      <CopyIcon className="w-4 h-4" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-3xl overflow-hidden scroll">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0C1D26]/60 to-[#071017]/60 backdrop-blur-md border border-cyan-500/20 rounded-2xl p-0 shadow-xl h-[440px] flex flex-col"
        >
          <div className="sticky top-0 px-6 pt-6 pb-3">
            <h2 className="text-xl font-bold text-cyan-300 tracking-wide">
              Activity Timeline
            </h2>
          </div>
          <ul className="space-y-3 text-sm text-gray-300 px-6 pb-6 overflow-y-auto flex-1">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-cyan-400" />
              <span>You joined the waitlist</span>
            </li>
            {formFullfilled && (
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="flex items-center">
                  You completed your profile{" "}
                  <strong className="ml-2">+20</strong>{" "}
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain ml-2"
                  />
                </span>
              </li>
            )}
            {isVerified && (
              <li className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="flex items-center">
                  You completed your profile{" "}
                  <strong className="ml-2">+100</strong>{" "}
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain ml-2"
                  />
                </span>
              </li>
            )}
            {Array.from({ length: referralsCount }).map((_, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="flex items-center">
                  You referred a friend <strong className="ml-2">+5</strong>
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain ml-2"
                  />
                </span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0C1D26]/80 border border-cyan-500/20 rounded-2xl p-6 shadow-lg h-[440px] flex flex-col"
        >
          <h2 className="text-xl font-semibold text-cyan-300 mb-4">
            Upcoming Missions
          </h2>
          <ul className="space-y-6 text-gray-300 text-sm sm:text-base overflow-y-auto pr-1 flex-1">
            {!isVerified && (
              <li className="flex items-start gap-4 bg-[#112B36] p-4 rounded-xl">
                <HiCheckBadge className="text-cyan-400 w-6 h-6 flex-shrink-0" />
                <span className="flex flex-wrap items-center">
                  Verify your email and earn&nbsp;<strong>+100</strong>
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain mx-1"
                  />
                </span>
              </li>
            )}
            {!formFullfilled && (
              <li className="flex items-start gap-4 bg-[#112B36] p-4 rounded-xl">
                <FaWpforms className="text-teal-400 w-6 h-6 flex-shrink-0" />
                <span className="flex flex-wrap items-center">
                  Complete your profile and earn&nbsp;<strong>+20</strong>
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain mx-1"
                  />
                </span>
              </li>
            )}
            <li className="flex items-start gap-4 bg-[#112B36] p-4 rounded-xl">
              <FaUserFriends className="text-cyan-400 w-6 h-6 flex-shrink-0" />
              <span className="flex flex-wrap items-center">
                Invite friends and earn&nbsp;<strong>+5</strong>
                <img
                  src="/logo/flexpoint.webp"
                  alt="FlexPoints"
                  className="w-4 h-4 object-contain mx-1"
                />
                each
              </span>
            </li>
            <li className="flex items-start gap-4 bg-[#112B36] p-4 rounded-xl">
              <RiSwordLine className="text-yellow-400 w-6 h-6 flex-shrink-0" />
              <span className="flex flex-wrap items-center">
                Complete Zealy missions (quiz, RT...) <strong>+2</strong>
                <img
                  src="/logo/flexpoint.webp"
                  alt="FlexPoints"
                  className="w-4 h-4 object-contain mx-1"
                />
                to <strong className="ml-1">+10</strong>
                <img
                  src="/logo/flexpoint.webp"
                  alt="FlexPoints"
                  className="w-4 h-4 object-contain mx-1"
                />
              </span>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default DashboardView;
