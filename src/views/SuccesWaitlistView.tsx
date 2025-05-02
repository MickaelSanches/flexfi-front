"use client";

import React, { useEffect, useState } from "react";
import { waitlistRepository } from "../repository/waitlistRepository";
import { getFirstName } from "../utils/storage";
import { Link } from "react-router-dom";

// type Props = {
//   referralCode: string;
// };

const SuccessView: React.FC = () => {
  const [position, setPosition] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [userFirstName, setUserFirstName] = useState<string | null>(null);

  useEffect(() => {
    const firstName = getFirstName();
    setUserFirstName(firstName);
  }, []);

  useEffect(() => {
    const fetchPosition = async () => {
      try {
        const result = await waitlistRepository.getWaitlistCount();
        setPosition(result);
      } catch (err: any) {
        setError("Unable to load position");
      }
    };

    fetchPosition();
  }, []);

  // const tweetMessage = encodeURIComponent(
  //   `I just joined the FlexFi Founders Tribe 🚀🎉\nMy referral code: ${referralCode}\nJoin now: https://www.flex-fi.io/`
  // );
  // const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMessage}`;

  return (
    <div className="text-center text-white mt-20 space-y-6 mb-40">
      <h1 className="text-3xl md:text-4xl font-bold">
        Congratulations <span className="text-[#00FEFB]">{userFirstName}</span>,
        you’re in!
      </h1>

      {/* <p className="text-lg">
        Your referral code:{" "}
        <strong className="text-[#00FEFB]">{referralCode}</strong>
      </p>

      {error && <p className="text-red-400 text-sm italic">{error}</p>}

      {position !== null && (
        <p className="text-sm text-cyan-300 font-mono">
          You are user{" "}
          <span className="text-[#00FEFB] font-bold">#{position}</span> on the
          waitlist
        </p>
      )}

      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#00FEFB] text-[#001A22] font-semibold px-6 py-3 rounded-xl hover:bg-[#71FFFF] transition duration-300"
      >
        Share FlexFi on Twitter
      </a> */}

      <Link
        to="/waitlist"
        className="block mx-auto mt-4 bg-transparent border border-[#00FEFB] text-[#00FEFB] hover:bg-[#00FEFB] hover:text-[#001A22] font-semibold px-6 py-3 rounded-xl transition duration-300"
      >
        Continue to earn FlexPoints
      </Link>
    </div>
  );
};

export default SuccessView;
