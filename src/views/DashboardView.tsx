"use client";

import React, { useEffect, useState, JSX } from "react";
import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  Clock,
  Link as LinkIcon,
  Copy as CopyIcon,
  Check as CheckIcon,
} from "lucide-react";
import { getUser } from "../utils/storage";
import { Link } from "react-router-dom";

const DashboardView = () => {
  const [userReferralCode, setUserReferralCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const [formFullfilled, setFormFullfilled] = useState<boolean | null>(null);

  useEffect(() => {
    try {
      const user = getUser();
      if (user && typeof user.userReferralCode === "string") {
        setUserReferralCode(user.userReferralCode);
      }
      if (typeof user.formFullfilled === "boolean") {
        setFormFullfilled(user.formFullfilled);
      }
    } catch (err) {
      console.error("Invalid user data in localStorage", err);
    }
  }, []);

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
    value: string;
    icon: JSX.Element;
    isReferral?: boolean;
  };

  const baseStats: StatCard[] = [
    {
      id: 1,
      title: "Total FlexPoints",
      value: "1,240",
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
      value: "32nd",
      icon: <TrendingUp className="w-8 h-8 text-green-400" />,
    },
    {
      id: 3,
      title: "Referrals",
      value: "18",
      icon: <Users className="w-8 h-8 text-blue-400" />,
    },
  ];

  const stats = [...baseStats];

  if (userReferralCode) {
    stats.push({
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

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
        {stats.map((stat) => (
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

      {formFullfilled === false && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <p className="text-lg text-yellow-400 font-semibold mb-4">
            Complete your founder profile to unlock more FlexPoints!
          </p>
          <Link
            to="/waitlist"
            className="inline-block bg-[#00FEFB] text-[#001A22] hover:bg-[#71FFFF] font-semibold px-8 py-4 rounded-xl shadow-lg transition duration-300"
          >
            Complete Your Profile
          </Link>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-[#0C1D26]/80 border border-cyan-500/20 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Activity Timeline</h2>
          <ul className="space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" /> You joined the
              waitlist
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" /> You referred a friend
              (@alice)
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" /> You completed your
              founder profile
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-[#0C1D26]/80 border border-cyan-500/20 rounded-2xl p-6 shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Upcoming Missions</h2>
          <ul className="space-y-3 text-gray-300">
            <li>Share your referral link on Twitter</li>
            <li>Complete your KYC to unlock bonus points</li>
            <li>Participate in the next NFT airdrop campaign</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default DashboardView;
