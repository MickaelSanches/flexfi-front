import { FaRocket, FaSeedling, FaLock } from "react-icons/fa";

const Customers = () => {
  return (
    <main className="w-full px-6 pt-16 md:px-16 lg:px-24 xl:px-50 bg-gradient-to-b text-white overflow-hidden">
      <h1 className="text-2xl md:text-4xl font-semibold leading-tight">
        Your <span className="text-[#71FFFF]">crypto</span>. <br /> Your{" "}
        <span className="text-[#71FFFF]">payments</span>. <br /> Your
        <span className="text-[#71FFFF]"> rules</span>.
      </h1>
      <p className="mt-2 text-sm opacity-70 mb-20">
        Split your purchases. Earn rewards. Build your future — without selling
        your <span className="text-[#71FFFF]">crypto</span>.
      </p>

      <img
        src="/images/iPhone16.webp"
        alt="iphone"
        className="w-full h-auto object-cover mb-30"
      />

      <section className="text-white flex flex-col  space-y-16 py-12 lg:px-40">
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

      <div></div>
    </main>
  );
};

export default Customers;
