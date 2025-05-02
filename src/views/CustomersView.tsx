import { FaRocket, FaSeedling, FaLock } from "react-icons/fa";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const Customers = () => {
  return (
    <main className="w-full text-white">
      <div className="px-6 pt-20 md:px-16 lg:px-24 xl:px-40">
        <h1 className="text-3xl md:text-5xl font-semibold leading-tight mb-6">
          Your <span className="text-[#71FFFF]">crypto</span>. <br />
          Your <span className="text-[#71FFFF]">payments</span>. <br />
          Your <span className="text-[#71FFFF]">rules</span>.
        </h1>
        <p className="text-base md:text-lg opacity-70 mb-20 max-w-2xl">
          Split your purchases. Earn rewards. Build your future — without
          selling your <span className="text-[#71FFFF]">crypto</span>.
        </p>
      </div>

      <img
        src="/images/iPhone16.webp"
        alt="iphone"
        className="w-full h-auto object-cover mb-20"
      />

      <section className="text-white px-6 pt-20 md:px-16 lg:px-24 xl:px-40 mb-20 space-y-16">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-2 font-days-one">
            <FaRocket className="text-pink-500" />
            <span>Split payments instantly</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-xl">
            Pay in 3x, 4x, 6x or 12x with your stablecoins — without selling
            your crypto.
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-2 font-days-one">
            <FaSeedling className="text-green-400" />
            <span>Earn while you spend</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-xl text-right">
            Every payment grows your FlexYield — rewards that work for you.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center gap-2 font-days-one">
            <FaLock className="text-yellow-400" />
            <span>No debt. No surprises.</span>
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-xl">
            Your funds are staked securely. You're always in control.
          </p>
        </div>
      </section>

      <section className="px-6 pt-20 md:px-16 lg:px-24 xl:px-40 mb-20">
        <h3 className="text-3xl md:text-5xl font-bold mb-6 text-center">
          Choose your <span className="text-[#71FFFF]">FlexFi Card</span> and
          unlock a world of possibilities.
        </h3>
        <p className="text-[#71FFFF] text-center mb-12">
          *Card benefits, rewards and conditions may evolve as FlexFi grows.*
        </p>

        <div className="text-white py-12 flex flex-col items-center justify-start mb-20">
          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src="/images/CB.webp"
              alt="FlexFi Cards"
              className="h-96 w-auto"
            />

            <ul className="space-y-4 text-gray-300 text-base md:text-xl">
              <li>
                <span className="font-semibold text-white">- Standard:</span>{" "}
                Start your FlexFi journey.
              </li>
              <li>
                <span className="font-semibold text-white">- Silver:</span> Go
                further with smarter payments.
              </li>
              <li>
                <span className="font-semibold text-white">- Gold:</span> Earn
                rewards as you spend.
              </li>
              <li>
                <span className="font-semibold text-white">- Platinum:</span>{" "}
                Maximize your potential.
              </li>
            </ul>
          </div>

          <p className="text-white font-semibold text-lg ">
            ➝ Different cards offer different benefits in fees and rewards —
            choose the one that fits your ambitions.
          </p>
        </div>

        <h4 className="text-xl md:text-3xl text-center mb-20 leading-relaxed font-days-one">
          Enjoy exclusive 0% payment <br /> options from selected <br />{" "}
          merchants. <br />
          <br />
          With FlexBoost, you pay later <br /> — without any hidden cost. <br />
          <br />
          Discover the FlexBoost <br /> Marketplace inside the app.
        </h4>
      </section>

      <img
        src="/images/iPhone16-2.png"
        alt="iphone"
        className="w-full h-auto object-cover mb-20"
      />

      <section className="text-center text-[#001A22] mb-32 px-6">
        <h5 className="text-2xl md:text-4xl font-bold mb-4 font-days-one">
          Ready to unlock your crypto freedom?
        </h5>
        <p className="text-lg md:text-xl mb-10">
          No credit scores. No hidden fees. Just your assets working for you.
        </p>
        <JoinWaitlistButton />
      </section>
    </main>
  );
};

export default Customers;
