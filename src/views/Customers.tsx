import { FaRocket, FaSeedling, FaLock } from "react-icons/fa";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const Customers = () => {
  return (
    <main className="w-full  text-white">
      <div className="px-6 pt-16 md:px-16 lg:px-24 xl:px-50">
        <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
          Your <span className="text-[#71FFFF]">crypto</span>. <br /> Your{" "}
          <span className="text-[#71FFFF]">payments</span>. <br /> Your
          <span className="text-[#71FFFF]"> rules</span>.
        </h1>
        <p className="mt-2 text-sm opacity-70 mb-20">
          Split your purchases. Earn rewards. Build your future — without
          selling your <span className="text-[#71FFFF]">crypto</span>.
        </p>
      </div>

      <img
        src="/images/iPhone16.webp"
        alt="iphone"
        className="w-full h-auto object-cover mb-30"
      />

      <section className="text-white flex flex-col  space-y-16px-6 pt-16 md:px-16 lg:px-24 xl:px-50 mb-20 ">
        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center  gap-2">
            <FaRocket className="text-pink-500" />
            <span>Split payments instantly</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-xl">
            Pay in 3x, 4x, 6x or 12x with your stablecoins — without selling
            your crypto.
          </p>
        </div>

        <div className="flex flex-col items-end">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center  gap-2">
            <FaSeedling className="text-green-400" />
            <span className="">Earn while you spend</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-xl">
            Every payment grows your FlexYield — rewards that work for you.
          </p>
        </div>

        <div className="flex flex-col items-start">
          <h2 className="text-2xl md:text-4xl font-bold mb-4 flex items-center  gap-2">
            <FaLock className="text-yellow-400" />
            <span>No debt. No surprises.</span>
          </h2>
          <p className="text-2xl text-gray-300 max-w-xl">
            Your funds are staked securely. You're always in control.
          </p>
        </div>
      </section>

      <section className="px-6 pt-16 md:px-16 lg:px-24 xl:px-50">
        <h3 className="text-2xl md:text-4xl font-bold mb-4 flex items-center  justify-center gap-2 text-center">
          Choose your <span className="text-[#71FFFF]">FlexFi Card</span> and
          unlock a world of possibilities.
        </h3>
        <p className="text-[#71FFFF] text-center ">
          *Card benefits, rewards and conditions may evolve as FlexFi grows.*
        </p>

        <div className=" text-white py-16 px-6 md:px-20 flex flex-col w-full items-center justify-center gap-12">
          {/* Image des cartes */}
          <div className="w-full flex items-center justify-center">
            <img
              src="/images/CB.webp"
              alt="FlexFi Cards"
              className="w-auto h-96"
            />

            <ul className="space-y-4  text-gray-300 text-2xl">
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
          <p className="text-white font-semibold text-lg pt-4">
            ➝ Different cards offer different benefits in fees and rewards —
            choose the one that fits your ambitions.
          </p>
        </div>

        <h4 className="text-2xl md:text-4xl text-center mb-40">
          Enjoy exclusive 0% payment options from selected merchants. <br />{" "}
          <br /> With FlexBoost, you pay later <br /> — without any hidden cost.{" "}
          <br /> <br />
          Discover the FlexBoost Marketplace inside the app.
        </h4>
      </section>

      <img
        src="/images/iPhone16-2.png"
        alt="iphone"
        className="w-full h-auto object-cover mb-40"
      />

      <section className="text-center text-[#001A22] mb-40">
        <h5 className="text-2xl md:text-4xl font-bold">
          Ready to unlock your crypto freedom?
        </h5>
        <p className="text-2xl mb-10">
          No credit scores. No hidden fees. Just your assets working for you.
        </p>

        <JoinWaitlistButton />
      </section>
    </main>
  );
};

export default Customers;
