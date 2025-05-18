import MoreInfoLOI from "../components/MoreInfoLOI";

const Merchants = () => {
  return (
    <main className="w-full pt-20  bg-gradient-to-b text-white overflow-hidden">
      {/* Header */}
      <section className="mb-20 px-6  md:px-16 lg:px-24 xl:px-40">
        <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
          For merchants,
          <br />
          <span className="text-[#71FFFF]">By Merchants.</span>
        </h1>
        <p className="text-base md:text-xl opacity-70">
          We’ve walked in your shoes.
        </p>
      </section>

      {/* Billboard image */}
      <section className="mb-20 ">
        <img
          loading="lazy"
          src="/images/billboards.webp"
          alt="FlexFi Billboard"
          className="w-full h-auto object-cover"
        />
      </section>

      {/* Main Content */}
      <section className="py-20 px-6  md:px-16 lg:px-24 xl:px-40">
        <h2 className="text-2xl md:text-4xl font-bold leading-tight text-start mb-40 font-days-one">
          At FlexFi, we don’t just build for merchants –<br />
          <span className="text-white">We are merchants.</span>
        </h2>

        <p className="text-base md:text-xl text-start max-w-2xl mx-auto leading-relaxed ">
          We know the pressure of closing sales. <br />
          We know the frustration of high transaction fees. <br />
          We know the risk you take with every customer.
        </p>

        <div className="mt-40 text-base md:text-xl max-w-2xl  space-y-4 text-left">
          <p className="font-semibold">
            That’s why FlexBoost was designed for the real world:
          </p>
          <ul className="list-disc list-inside">
            <li>0% BNPL sponsored campaigns to boost conversion.</li>
            <li>Direct exposure to thousands of crypto-native buyers.</li>
            <li>No integrations. No technical headaches.</li>
            <li>Pay only when you win.</li>
          </ul>
        </div>

        <div className="mt-40 text-end">
          <p className="font-bold text-2xl md:text-4xl leading-snug font-days-one">
            Because FlexFi was built <br />
            with one simple belief: <br />
            <span className="text-cyan-300">
              The merchant deserves to win too.
            </span>
          </p>
        </div>

        <div className="mt-40 text-center">
          <p className="text-[#001A22] font-bold text-2xl md:text-4xl mb-6 font-days-one">
            Want to be among the first?
            <br />
            Sign the Letter of Intent (LOI)
          </p>
          <MoreInfoLOI />
        </div>
      </section>
    </main>
  );
};

export default Merchants;
