import React from "react";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const Merchants = () => {
  return (
    <main className=" w-full px-6 pt-16 md:px-16 lg:px-24 xl:px-50 bg-gradient-to-b text-white overflow-hidden">
      <section className="py-10 px-6 text-start">
        <h1 className="text-2xl md:text-4xl font-bold leading-tight mb-20 mt-22">
          For merchants,
          <br />
          <span className="text-cyan-400">By Merchants.</span>
        </h1>
        <p className="mt-2 text-2xl opacity-70">We’ve walked in your shoes.</p>
      </section>

      <section className="px-4">
        <img
          src="/images/billboards.webp"
          alt="FlexFi Billboard"
          className="w-full h-auto object-cover"
        />
      </section>

      <section className=" py-16 px-4">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-20 mt-22">
          At FlexFi, we don’t just build for merchants –<br />
          <span className="text-white">We are merchants.</span>
        </h2>

        <p className="text-2xl mt-20 max-w-xl mx-auto leading-relaxed ">
          We know the pressure of closing sales.
          <br />
          We know the frustration of high transaction fees.
          <br />
          We know the risk you take with every customer.
        </p>

        <div className="mt-20 text-2xl max-w-md text-start space-y-3">
          <p>That’s why FlexBoost was designed for the real world:</p>
          <ul className="list-disc list-inside text-left ">
            <li>0% BNPL sponsored campaigns to boost conversion.</li>
            <li>Direct exposure to thousands of crypto-native buyers.</li>
            <li>No integrations. No technical headaches.</li>
            <li>Pay only when you win.</li>
          </ul>
        </div>

        <div className="mt-20 ">
          <p className=" font-bold text-2xl md:text-4xl text-end">
            Because FlexFi was built
            <br />
            with one simple belief:
            <br />
            <span className="text-cyan-300">
              The merchant deserves to win too.
            </span>
          </p>

          <p className="text-[#001A22] font-bold text-2xl md:text-4xl mt-20 text-center">
            Built by people
            <br />
            who’ve been there.
            <br />
            <JoinWaitlistButton />
          </p>
        </div>
      </section>
    </main>
  );
};

export default Merchants;
