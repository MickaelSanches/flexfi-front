import { Link } from "react-router-dom";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const AboutUs = () => {
  return (
    <main className="min-h-screen text-white flex flex-col">
      <div className="px-6 pt-20 md:px-16 lg:px-24 xl:px-40">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          About <span className="text-[#00FEFB]">Us</span>.
        </h1>
        <p className="text-base md:text-xl text-gray-300 mb-12">
          FlexFi is not just a product. <br /> It's a mission.
        </p>
      </div>

      <img
        src="/images/MacBook-flexfi.webp"
        alt="computer"
        className="w-full object-cover mb-20"
      />

      <div className="px-6 md:px-16 lg:px-24 xl:px-40">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight mb-12">
          <span className="text-[#00FEFB]">"</span>A new way to approach <br />
          payments, free from the <br /> traditional constraints of the <br />
          banking system.
          <span className="text-[#00FEFB]">"</span>
        </h2>

        <p className="text-base md:text-xl text-gray-300 mb-8 text-end leading-relaxed">
          We are driven by a simple vision: to make cryptocurrencies accessible
          to everyone. We believe that blockchain technology can improve
          everyday life by enabling more flexible, secure, and affordable
          transactions.
        </p>

        <p className="text-base md:text-xl text-gray-300 mb-8 text-end leading-relaxed">
          Our team is made up of technology and innovation enthusiasts, all
          united by the same mission: to offer consumers and merchants a new way
          to approach payments, free from the traditional constraints of the
          banking system.
        </p>

        <p className="text-base md:text-xl text-gray-300 mb-20 text-end leading-relaxed">
          Together, we push boundaries to provide you with an intuitive,
          transparent platform that meets the needs of today and tomorrow.
        </p>

        {/* Timeline section */}
        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
          From Colosseum's Radar
        </h3>
        <div className="flex flex-col items-end mb-20">
          <img
            className="rounded-3xl"
            src="/images/radar.webp"
            alt="Radar Colloseum"
          />
        </div>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10 text-end">
          To <span className="text-[#00FEFB]">Breakout</span>.
        </h3>
        <div className="flex flex-col items-start mb-20">
          <img
            className="rounded-3xl"
            src="/images/breakOut.webp"
            alt="Breakout"
          />
        </div>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10">
          From Superteam <span className="text-[#00FEFB]">France</span>.
        </h3>
        <div className="flex flex-col items-center mb-20">
          <img
            className="rounded-3xl"
            src="/logo/logo-STF-1.webp"
            alt="Superteam France"
          />
        </div>

        <h3 className="text-2xl md:text-4xl font-bold leading-tight mb-10 text-center">
          to pitching in front of global VCs
          <span className="text-[#00FEFB]">.</span>
        </h3>

        <div className="flex flex-col items-center mb-24">
          <img
            className="rounded-3xl"
            src="/images/demo-day.webp"
            alt="Demo Day"
          />
        </div>

        {/* Final statement */}
        <div className="flex flex-col items-center mb-20">
          <p className="text-base md:text-xl text-center text-[#001A22] font-bold leading-relaxed">
            FlexFi wasn't created in a meeting room — it was forged in
            competition. <br />
            <br />
            We faced liquidity challenges. We solved them. <br />
            We faced traction doubts. We conquered them. <br />
            <br />
            Now, we're ready to lead the next generation of payments.
          </p>
        </div>
      </div>

      {/* CTA */}
      <div className="flex flex-col items-center mx-auto gap-5 mt-10 mb-20">
        <h4 className="text-[#001A22] font-bold text-2xl md:text-4xl">
          With you.
        </h4>
        <JoinWaitlistButton />
      </div>
    </main>
  );
};

export default AboutUs;
