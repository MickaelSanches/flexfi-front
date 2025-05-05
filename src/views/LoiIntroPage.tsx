import { FaRocket, FaBullseye, FaComments, FaFileAlt } from "react-icons/fa";
import JoinLOIButton from "../components/BecomePartner";

const LoiIntroPage = () => {
  return (
    <main className="w-full pt-20 bg-gradient-to-b text-white overflow-hidden">
      {/* Header */}
      <section className="mb-20 px-6 md:px-16 lg:px-24 xl:px-40">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          FlexFi Letter Of Intent: <br />
          <span className="text-[#71FFFF]">Become a Founding Merchant.</span>
        </h1>
        <p className="text-base md:text-xl opacity-70 max-w-xl">
          Be one of the first businesses to shape the next generation of
          payments. Sign the Letter of Intent (LOI) and unlock exclusive
          early-access benefits.
        </p>
      </section>

      {/* Billboard image */}
      <section className="mb-20 flex justify-end">
        <img
          loading="lazy"
          src="/images/folder.webp"
          alt="FlexFi Billboard"
          className="w-auto h-auto object-cover"
        />
      </section>

      {/* Pitch FlexBoost */}
      <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-40">
  <h2 className="text-2xl md:text-4xl font-bold leading-tight text-start mb-12 font-days-one">
    What is <span className="text-[#71FFFF]">FlexBoost</span>?
  </h2>

  <div className="text-base md:text-xl text-start max-w-3xl mx-auto space-y-6 leading-relaxed">
    <p>
      FlexBoost is more than a 0% BNPL campaign tool — it's a growth engine for crypto-ready merchants.
      With no technical integration, you can launch time-limited campaigns that reach thousands of
      active FlexFi users through our built-in marketplace.
    </p>

    <p>
      Your offers are promoted directly inside the FlexFi app, giving you **instant visibility** and 
      priority placement in a curated shopping experience powered by Web3.
    </p>

    <ul className="list-disc list-inside space-y-2">
      <li>Boost sales with targeted exposure to high-intent crypto users.</li>
      <li>Get featured in the FlexFi marketplace — our users see your offers first.</li>
      <li>Drive awareness and loyalty with zero development needed.</li>
      <li>Get paid upfront in fiat or stablecoins — FlexFi manages swap, installment collection and risk.</li>
      <li>Track campaign impact and engagement in real-time.</li>
    </ul>
  </div>
</section>


      {/* LOI Value Proposition */}
      <section className="py-20 px-6 md:px-16 lg:px-24 xl:px-40 rounded-3xl my-20">
        <h3 className="text-2xl md:text-4xl font-bold mb-6 text-white font-days-one text-center">
          Why sign the LOI?
        </h3>
        <div className="text-base md:text-xl max-w-2xl mx-auto text-gray-300 space-y-4 text-center">
          <p>
            <FaRocket className="text-[#71FFFF] text-2xl mt-1" /> Priority
            onboarding as a FlexFi merchant partner.
          </p>
          <p>
            <FaBullseye className="text-[#71FFFF] text-2xl mt-1" /> Access to
            our pilot campaigns and test userbase.
          </p>
          <p>
            <FaComments className="text-[#71FFFF] text-2xl mt-1" /> Visibility
            in all decks sent to VCs and accelerators.
          </p>
          <p>
            <FaFileAlt className="text-[#71FFFF] text-2xl mt-1" /> Your logo
            listed as early supporter on our website.
          </p>
        </div>

        <div className="mt-10 text-center">
          <JoinLOIButton />
        </div>
      </section>
    </main>
  );
};

export default LoiIntroPage;
