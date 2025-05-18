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
import { Link, useSearchParams } from "react-router-dom";
import { useDashboardViewModel } from "../viewmodels/useDashboardViewModel";
import { JSX, useEffect } from "react";
import { useAuthStore } from "../store/authStore";
import { ConnectZealyButton } from "../components/ConnectZealyButton";
import { ZealySyncButton } from "../components/ZealySyncButton";

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

  const user = useAuthStore((state) => state.user);

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const status = searchParams.get("status");
    const zealyPoints = searchParams.get("zealy_points");
    const totalPoints = searchParams.get("total_points");
    const message = searchParams.get("message");

    if (status === "success") {
      console.log(`Zealy linked! 🎉 You earned ${zealyPoints} FlexPoints`);
      // Tu peux aussi mettre à jour ton store si tu veux
      setSearchParams({}, { replace: true }); // nettoie l’URL
    }

    if (status === "error") {
      console.log(`Zealy linking failed: ${message}`);
      setSearchParams({}, { replace: true }); // nettoie aussi
    }
  }, []);

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
    <main className="px-6 md:px-16 lg:px-24 xl:px-40 min-h-screen text-white mb-40">
      <h1 className="text-3xl font-bold mb-10 font-days-one mt-20 text-center">
        Hi{" "}
        <span className="text-[#00FEFB] font-days-one">
          {user?.firstName
            ? user.firstName.charAt(0).toUpperCase() + user.firstName.slice(1)
            : ""}
        </span>
        , Welcome to Your Dashboard
      </h1>

      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-10 px-2 sm:px-4">
        {!isVerified && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-gradient-to-br from-red-900/20 to-red-800/10 border border-red-500/30 backdrop-blur-lg rounded-3xl p-6 shadow-inner shadow-red-800/20 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <MdMarkEmailRead className="w-6 h-6 text-red-300 animate-pulse" />
              <p className="text-red-200 font-bold text-base tracking-wide uppercase">
                Email not verified
              </p>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Verify your email now and get exclusive bonus points.
            </p>
            {resendSuccess ? (
              <p className="text-sm text-green-400 font-semibold">
                ✅ Verification email sent!
              </p>
            ) : (
              <button
                onClick={handleResendVerification}
                disabled={isResending}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-teal-300 text-[#001A22] font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition disabled:opacity-50"
              >
                {isResending ? "Sending..." : "Resend Email"}
                <span className="flex items-center gap-1 text-[11px] font-semibold text-teal-900">
                  +100
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoint"
                    className="w-4 h-4 object-contain"
                  />
                </span>
              </button>
            )}
          </motion.div>
        )}

        {formFullfilled === false && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full max-w-md bg-gradient-to-br from-yellow-900/20 to-yellow-700/10 border border-yellow-400/30 backdrop-blur-lg rounded-3xl p-6 shadow-inner shadow-yellow-800/20 mb-6"
          >
            <div className="flex items-center gap-3 mb-3">
              <FaWpforms className="w-6 h-6 text-yellow-300 animate-pulse" />
              <p className="text-yellow-200 font-bold text-base tracking-wide uppercase">
                Profile Incomplete
              </p>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Complete your profile to unlock bonus rewards.
            </p>
            <Link
              to="/waitlist"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-400 to-yellow-300 text-[#001A22] font-bold text-sm px-4 py-2 rounded-full shadow-lg hover:opacity-90 transition"
            >
              Complete Now
              <span className="flex items-center gap-1 text-[11px] font-semibold text-yellow-900">
                +20
                <img
                  src="/logo/flexpoint.webp"
                  alt="FlexPoint"
                  className="w-4 h-4 object-contain"
                />
              </span>
            </Link>
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
            className="relative bg-gradient-to-br from-[#0D1B2A]/80 to-[#112B36]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-6 shadow-[0_10px_40px_rgba(0,255,255,0.1)] flex items-center gap-6 hover:shadow-cyan-500/30 transition-shadow duration-300"
          >
            <div className="p-4 bg-[#0F2B3A] rounded-xl border border-cyan-400/10 shadow-inner shadow-cyan-800/10">
              {stat.icon}
            </div>
            <div className="flex-1">
              <p className="text-xs uppercase tracking-wide text-cyan-200 mb-1 font-medium">
                {stat.title}
              </p>
              <div className="flex items-center gap-3">
                <p className="text-3xl font-extrabold text-cyan-300 tracking-tight drop-shadow-md">
                  {stat.value}
                </p>
                {stat.isReferral && (
                  <button
                    onClick={handleCopy}
                    className="p-2 bg-cyan-700 hover:bg-cyan-600 rounded-full text-white transition shadow shadow-cyan-500/30"
                  >
                    {copied ? (
                      <CheckIcon className="w-4 h-4 text-green-300" />
                    ) : (
                      <CopyIcon className="w-4 h-4 cursor-pointer" />
                    )}
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {!user?.zealy_id ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-br from-[#1b1035]/80 to-[#0d0c23]/80 border border-purple-600/30 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-[0_0_40px_rgba(128,90,213,0.15)] backdrop-blur-xl hover:shadow-purple-500/30 transition-shadow duration-300"
        >
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-14 h-14 rounded-full bg-white border border-purple-400/30 shadow-inner shadow-purple-500/10 backdrop-blur-md p-1">
              <img
                src="/logo/zealy.svg"
                alt="Zealy Logo"
                className="w-full h-full object-contain rounded-full"
              />
              <div className="absolute inset-0 rounded-full ring-1 ring-purple-500/40 animate-pulse"></div>
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-purple-300 mb-2 tracking-tight">
                Boost Your Points with Zealy
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
                Connect your{" "}
                <span className="text-white font-medium">FlexFi</span> account
                with <span className="text-white font-medium">Zealy</span> and
                unlock bonus{" "}
                <span className="text-teal-300 font-medium">FlexPoints</span> by
                completing missions like tweets, quizzes, retweets and more.
              </p>
              <p className="text-sm text-gray-300 leading-relaxed max-w-lg mt-3">
                ⚠️ Use the{" "}
                <span className="text-white font-medium">same email</span> as
                your <span className="text-white font-medium">FlexFi</span>{" "}
                account when logging into{" "}
                <span className="text-white font-medium">Zealy</span>.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <ConnectZealyButton />
          </div>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full bg-gradient-to-br from-[#1b1035]/80 to-[#0d0c23]/80 border border-purple-600/30 rounded-3xl px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-8 mb-16 shadow-[0_0_40px_rgba(128,90,213,0.15)] backdrop-blur-xl hover:shadow-purple-500/30 transition-shadow duration-300"
        >
          <div className="flex items-center gap-6 flex-1">
            <div className="relative w-14 h-14 rounded-full bg-white border border-purple-400/30 shadow-inner shadow-purple-500/10 backdrop-blur-md p-1">
              <img
                src="/logo/zealy.svg"
                alt="Zealy Logo"
                className="w-full h-full object-contain rounded-full"
              />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-purple-300 mb-2 tracking-tight">
                Zealy Connected
              </h3>
              <p className="text-sm text-gray-300 leading-relaxed max-w-lg">
                Your <span className="text-white font-medium">Zealy</span>{" "}
                account is connected. You can now sync your latest missions and
                get updated{" "}
                <span className="text-teal-300 font-medium">FlexPoints</span>.
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <ZealySyncButton />
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-h-3xl overflow-hidden scroll">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#0A1824]/70 to-[#07131f]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-0 shadow-[0_0_40px_rgba(0,255,255,0.05)] h-[440px] flex flex-col overflow-hidden"
        >
          <div className="sticky top-0 px-6 pt-6 pb-4 border-b border-cyan-500/10 bg-[#07131f]/60 backdrop-blur-md z-10">
            <h2 className="text-xl font-extrabold text-cyan-300 tracking-wide uppercase">
              Activity Timeline
            </h2>
          </div>

          <ul className="space-y-3 text-sm text-gray-300 px-6 py-4 overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-cyan-600/30 scrollbar-track-transparent">
            <li className="flex items-center gap-4">
              <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
              <span>You joined the waitlist</span>
            </li>

            {formFullfilled && (
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="flex items-center">
                  You completed your profile
                  <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-cyan-700/30 text-cyan-200 rounded-full shadow-inner shadow-cyan-900/20">
                    +20
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoints"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>
              </li>
            )}

            {isVerified && (
              <li className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="flex items-center">
                  You verified your email
                  <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-cyan-700/30 text-cyan-200 rounded-full shadow-inner shadow-cyan-900/20">
                    +100
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoints"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>
              </li>
            )}

            {Array.from({ length: referralsCount }).map((_, idx) => (

              <li key={idx} className="flex items-center gap-4">
                <Clock className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="flex items-center">
                  You referred a friend
                  <span className="ml-3 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-cyan-700/30 text-cyan-200 rounded-full shadow-inner shadow-cyan-900/20">
                    +5
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoints"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>

              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-gradient-to-br from-[#0A1824]/70 to-[#07131f]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl p-0 shadow-[0_0_40px_rgba(0,255,255,0.05)] h-[440px] flex flex-col overflow-hidden"
        >
          <div className="sticky top-0 px-6 pt-6 pb-4 border-b border-cyan-500/10 bg-[#07131f]/60 backdrop-blur-md z-10">
            <h2 className="text-xl font-extrabold text-cyan-300 tracking-wide uppercase">
              Upcoming Missions
            </h2>
          </div>

          <ul className="space-y-5 text-gray-300 text-sm sm:text-base overflow-y-auto px-6 py-4 flex-1 scrollbar-thin scrollbar-thumb-cyan-600/30 scrollbar-track-transparent">
            {!isVerified && (
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-red-900/10 border border-red-500/20 shadow-inner shadow-red-900/10 hover:bg-red-900/20 transition">
                <HiCheckBadge className="text-red-300 w-6 h-6 flex-shrink-0" />
                <span className="flex flex-wrap items-center">
                  Verify your email and earn
                  <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-red-700/30 text-red-100 rounded-full shadow">
                    +100
                    <img
                      src="/logo/flexpoint.webp"
                      alt="FlexPoints"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>
              </li>
            )}

            {!formFullfilled && (
              <li className="flex items-start gap-4 p-4 rounded-2xl bg-yellow-900/10 border border-yellow-500/20 shadow-inner shadow-yellow-900/10 hover:bg-yellow-900/20 transition">
                <FaWpforms className="text-yellow-200 w-6 h-6 yellow-shrink-0" />
                <span className="flex flex-wrap items-center">
                  Complete your profile and earn
                  <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-yellow-700/30 text-yellow-100 rounded-full shadow">
                    +20
                    <img
                      loading="lazy"
                      src="/logo/flexpoint.webp"
                      alt="FlexPoints"
                      className="w-4 h-4 object-contain"
                    />
                  </span>
                </span>
              </li>
            )}

            <li className="flex items-start gap-4 p-4 rounded-2xl bg-purple-900/10 border border-purple-500/20 shadow-inner shadow-purple-900/10 hover:bg-purple-900/20 transition">
              <RiSwordLine className="text-purple-300 w-6 h-6 flex-shrink-0" />
              <span className="flex flex-wrap items-center">
                Complete Zealy missions (quiz, RT...)
                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-purple-700/30 text-purple-100 rounded-full shadow">
                  +2
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain"
                  />
                </span>
                to
                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-purple-700/30 text-purple-100 rounded-full shadow">
                  +10
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain"
                  />
                </span>
              </span>
            </li>

            <li className="flex items-start gap-4 p-4 rounded-2xl bg-cyan-900/10 border border-cyan-500/20 shadow-inner shadow-cyan-900/10 hover:bg-cyan-900/20 transition">
              <FaUserFriends className="text-cyan-300 w-6 h-6 flex-shrink-0" />
              <span className="flex flex-wrap items-center">
                Invite friends and earn
                <span className="ml-2 inline-flex items-center gap-1 px-2 py-0.5 text-xs font-semibold bg-cyan-700/30 text-cyan-100 rounded-full shadow">
                  +5
                  <img
                    src="/logo/flexpoint.webp"
                    alt="FlexPoints"
                    className="w-4 h-4 object-contain"
                  />
                </span>

                each
              </span>
            </li>

          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default DashboardView;
