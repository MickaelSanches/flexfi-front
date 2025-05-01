import React from "react";

type Props = {
  referralCode: string;
};

const SuccessView: React.FC<Props> = ({ referralCode }) => {
  const tweetMessage = encodeURIComponent(
    `I just joined the FlexFi Founders Tribe 🚀🎉\nMy referral code: ${referralCode}\nJoin now: https://flexfi.xyz`
  );

  const tweetUrl = `https://twitter.com/intent/tweet?text=${tweetMessage}`;

  return (
    <div className="text-center text-white mt-20 space-y-6">
      <h1 className="text-3xl md:text-4xl font-bold">
        You’re in <span role="img" aria-label="party"></span>
      </h1>

      <p className="text-lg">
        Your referral code:{" "}
        <strong className="text-[#00FEFB]">{referralCode}</strong>
      </p>

      <a
        href={tweetUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-[#00FEFB] text-[#001A22] font-semibold px-6 py-3 rounded-xl hover:bg-[#71FFFF] transition duration-300"
      >
        Share FlexFi on Twitter
      </a>
    </div>
  );
};

export default SuccessView;
