import { useEffect, useState, JSX } from "react";
import { motion } from "framer-motion";
import { HiCheckBadge } from "react-icons/hi2";
import { MdMarkEmailRead } from "react-icons/md";
import {
  TrendingUp,
  Users,
  Clock,
  Link as LinkIcon,
  Copy as CopyIcon,
  Check as CheckIcon,
} from "lucide-react";
import { FaUserFriends, FaWpforms } from "react-icons/fa";
import { getUser } from "../utils/storage";
import { Link } from "react-router-dom";
import { waitlistRepository } from "../repository/waitlistRepository";
import { authRepository } from "../repository/authRepository";
import { RiSwordLine } from "react-icons/ri";

const DashboardView = () => {
  const [userReferralCode, setUserReferralCode] = useState<string>("");
  const [copied, setCopied] = useState(false);
  const [formFullfilled, setFormFullfilled] = useState<boolean | null>(null);
  const [isVerified, setIsVerified] = useState(false);
  const [points, setPoints] = useState<number>(0);
  const [rank, setRank] = useState<number>(0);
  const [referralsCount, setReferralsCount] = useState<number>(0);
  const [isResending, setIsResending] = useState(false);
  const [resendSuccess, setResendSuccess] = useState(false);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const user = getUser();
        if (user?.userReferralCode) setUserReferralCode(user.userReferralCode);

        if (typeof user?.formFullfilled === "boolean") {
          setFormFullfilled(user.formFullfilled);
        }

        if (typeof user?.isVerified === "boolean") {
          setIsVerified(user.isVerified);
        }

        const userPoints = await authRepository.getCurrentUserPoints();
        setPoints(userPoints.data.points);

        const userRank = await authRepository.getCurrentUserRank();
        setRank(userRank.data.rank);

        if (user?.userReferralCode) {
          const userReferralsCount = await waitlistRepository.getReferralCount(
            user.userReferralCode
          );
          setReferralsCount(userReferralsCount);
        }
      } catch (err) {
        console.error("Error fetching user dashboard data:", err);
      }
    };

    fetchUserInfo();
  }, []);

  const handleResendVerification = async () => {
    try {
      setIsResending(true);
      const user = getUser();
      if (!user?.email) throw new Error("Missing email");
      await authRepository.resendVerificationEmail(user.email);
      setResendSuccess(true);
    } catch (error) {
      console.error("Resend error:", error);
    } finally {
      setIsResending(false);
    }
  };

  const handleCopy = () => {
    if (userReferralCode) {
      navigator.clipboard.writeText(userReferralCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  type StatCard = {
    id: number;
    title: string;
    value: string | number;
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
          loading="lazy"
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
            <div className="bg-red-900/10 border border-red-500/20 p-3 sm:p-5 rounded-lg shadow-sm sm:shadow-md">
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
            <div className="bg-yellow-900/10 border border-yellow-400/20 p-3 sm:p-5 rounded-lg shadow-sm sm:shadow-md">
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
          <div className="sticky top-0 bg-[#0C1D26]/80 backdrop-blur-md px-6 pt-6 pb-3 rounded-t-2xl z-10 mb-5">
            <h2 className="text-xl font-bold text-cyan-300 tracking-wide">
              Activity Timeline
            </h2>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 px-6 pb-6 overflow-y-auto custom-scrollbar flex-1">
            <li className="flex items-center justify-between border-b border-white/5 pb-2">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>You joined the waitlist</span>
              </div>
            </li>

            {formFullfilled && (
              <li className="flex items-center justify-between border-b border-white/5 pb-2">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>You completed your profile</span>
                </div>
                <div className="flex items-center gap-1 bg-teal-800/30 text-teal-300 text-xs font-bold px-2 py-1 rounded-full shadow-inner">
                  +20
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoint"
                    className="w-4 h-4 ml-1"
                  />
                </div>
              </li>
            )}

            {Array.from({ length: referralsCount }).map((_, idx) => (
              <li
                key={idx}
                className="flex items-center justify-between border-b border-white/5 pb-2"
              >
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-cyan-400" />
                  <span>You referred a friend</span>
                </div>
                <div className="flex items-center gap-1 bg-cyan-800/30 text-cyan-300 text-xs font-bold px-2 py-1 rounded-full shadow-inner">
                  +5
                  <img
                    loading="lazy"
                    src="/logo/flexpoint.webp"
                    alt="FlexPoint"
                    className="w-4 h-4 ml-1"
                  />
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0C1D26]/80 mb-20 border border-cyan-500/20 rounded-2xl p-6 shadow-lg h-[440px] flex flex-col"
        >
          <h2 className="text-xl font-semibold text-cyan-300 mb-4">
            Upcoming Missions
          </h2>

          <ul className="space-y-6 text-gray-300 text-sm sm:text-base overflow-y-auto pr-1 custom-scrollbar flex-1">
            {!isVerified && (
              <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-[#112B36] rounded-xl p-4 hover:bg-[#173545] transition duration-300">
                <div className="flex-shrink-0">
                  <HiCheckBadge className="text-cyan-400 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-base sm:text-lg">
                    Email Verified
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span>Verify your email to earn</span>
                    <span className="flex items-center bg-cyan-800 text-cyan-300 text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      +100
                      <img
                        loading="lazy"
                        src="/logo/flexpoint.webp"
                        alt="FlexPoint"
                        className="w-4 h-4 ml-1"
                      />
                    </span>
                  </div>
                </div>
              </li>
            )}

            {!formFullfilled && (
              <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-[#112B36] rounded-xl p-4 hover:bg-[#173545] transition duration-300">
                <div className="flex-shrink-0">
                  <FaWpforms className="text-teal-400 w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-semibold text-base sm:text-lg">
                    Completed Profile
                  </span>
                  <div className="flex flex-wrap items-center gap-2 mt-1">
                    <span>Fill out your profile and earn</span>
                    <span className="flex items-center bg-teal-800 text-teal-300 text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                      +20
                      <img
                        loading="lazy"
                        src="/logo/flexpoint.webp"
                        alt="FlexPoint"
                        className="w-4 h-4 ml-1"
                      />
                    </span>
                  </div>
                </div>
              </li>
            )}

            <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-[#112B36] rounded-xl p-4 hover:bg-[#173545] transition duration-300">
              <div className="flex-shrink-0">
                <FaUserFriends className="text-cyan-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base sm:text-lg">
                  Referrals
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span>Invite friends and earn</span>
                  <span className="flex items-center bg-cyan-800 text-cyan-300 text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    +5
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoint"
                      className="w-4 h-4 ml-1"
                    />
                  </span>
                  <span className="text-gray-400">per friend</span>
                </div>
              </div>
            </li>

            <li className="flex flex-col sm:flex-row sm:items-start gap-4 bg-[#112B36] rounded-xl p-4 hover:bg-[#173545] transition duration-300">
              <div className="flex-shrink-0">
                <RiSwordLine className="text-yellow-400 w-6 h-6 sm:w-7 sm:h-7" />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-semibold text-base sm:text-lg">
                  Zealy Missions
                </span>
                <div className="flex flex-wrap items-center gap-2 mt-1">
                  <span>Complete tasks and earn</span>
                  <span className="flex items-center bg-yellow-700 text-yellow-200 text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
                    +2 to +10
                    <img
                      loading="lazy"
                      src="/logo/flexpoint.webp"
                      alt="FlexPoint"
                      className="w-4 h-4 ml-1"
                    />
                  </span>
                  <span className="text-gray-400">(quiz, post, retweet…)</span>
                </div>
              </div>
            </li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default DashboardView;
