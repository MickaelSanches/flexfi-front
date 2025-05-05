import { FaGift, FaUserCheck, FaUsers, FaListAlt, FaTrophy, FaBolt, FaScroll } from "react-icons/fa";

const MissionsPage = () => {
  return (
    <main className="w-full pt-20 px-6 md:px-16 lg:px-24 xl:px-40 text-white">
      {/* Title */}
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4 text-[#00FEFB] font-days-one">
          Your Missions
        </h1>
        <p className="text-lg text-gray-300">
          Complete actions, earn FlexPoints, climb the leaderboard.
        </p>
      </section>

      {/* Rewards */}
      <section className="bg-[#0C1D26] rounded-2xl p-8 shadow-xl max-w-2xl mx-auto mb-16">
        <h2 className="text-2xl font-bold text-white font-days-one mb-4 flex items-center gap-2">
          <FaGift className="text-[#00FEFB]" /> Rewards
        </h2>
        <ul className="text-base space-y-2 text-left">
  <li className="flex items-start gap-2">
    <FaTrophy className="text-yellow-400 mt-1" />
    Top 3 – Solana Mobile Seeker (value: $500)
  </li>
  <li className="flex items-start gap-2">
    <FaGift className="text-pink-400 mt-1" />
    Ranks 4–10 – JamboPhone (value: $99)
  </li>
  <li className="flex items-start gap-2">
    <FaBolt className="text-cyan-400 mt-1" />
    Others – Exclusive perks & early access
  </li>
</ul>
        <p className="text-sm text-gray-400 italic mt-2">
          *Details announced before
          beta launch.
        </p>
      </section>

      {/* Missions */}
      <section className="grid gap-6 max-w-3xl mx-auto mb-20">
        <div className="bg-[#0C1D26] p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaUserCheck className="text-[#71FFFF]" /> Complete your profile
            </h3>
            <p className="text-gray-300">
              Fill out your form (LOI or Waitlist)
            </p>
          </div>
          <span className="text-[#00FEFB] font-bold text-xl">+20</span>
        </div>

        <div className="bg-[#0C1D26] p-6 rounded-xl shadow flex justify-between items-center">
          <div>
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <FaUsers className="text-[#71FFFF]" /> Invite friends
            </h3>
            <p className="text-gray-300">
              Earn 5 points for each valid referral
            </p>
          </div>
          <span className="text-[#00FEFB] font-bold text-xl">+5 / user</span>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="text-center text-gray-400 text-sm italic mb-24">
        <FaListAlt className="mx-auto text-xl mb-2 text-[#71FFFF]" />
        More missions coming soon via Zealy.
      </section>

      {/* Rules */}
      <section className="max-w-2xl mx-auto text-left text-gray-300 mb-20">
      <h4 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
  <FaScroll className="text-[#71FFFF]" />
  Rules
</h4>
        <ul className="list-disc list-inside space-y-2">
          <li>Leaderboard is based on FlexPoints earned until beta launch.</li>
          <li>Fake referrals or multiple accounts = disqualification.</li>
          <li>FlexFi can update the rules at any time if needed.</li>
        </ul>
      </section>
    </main>
  );
};

export default MissionsPage;
