"use client";

import React from "react";
import { motion } from "framer-motion";
import { TrendingUp, Users, Clock } from "lucide-react";

const stats = [
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

const DashboardView = () => {
  return (
    <main className="px-6  md:px-16 lg:px-24 xl:px-40  min-h-screen text-white">
      <h1 className="text-3xl font-bold mb-6 font-days-one mt-20">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {stats.map((stat) => (
          <motion.div
            key={stat.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: stat.id * 0.1 }}
            className="bg-[#0C1D26]/80 border border-cyan-500/20 rounded-2xl p-6 flex items-center gap-4 shadow-lg"
          >
            <div className="p-3 bg-[#112B36] rounded-full">{stat.icon}</div>
            <div>
              <p className="text-sm text-gray-400">{stat.title}</p>
              <p className="text-2xl font-bold text-teal-400">{stat.value}</p>
            </div>
          </motion.div>
        ))}
      </div>

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
              <Clock className="w-5 h-5 text-cyan-400" />
              You joined the waitlist
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              You referred a friend (@alice)
            </li>
            <li className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-cyan-400" />
              You completed your founder profile
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
            <li> Share your referral link on Twitter</li>
            <li> Complete your KYC to unlock bonus points</li>
            <li> Participate in the next NFT airdrop campaign</li>
          </ul>
        </motion.div>
      </div>
    </main>
  );
};

export default DashboardView;
