const HeroBanner = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 px-6 py-6 md:flex-row md:justify-between md:px-16 lg:px-24 xl:px-50 min-h-[80vh]">
      <div className="text-center md:text-left">
        <h1 className="text-white text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
          The freedom to <br /> pay with crypto,
          <br />
          <span className="text-[#00FEFBCC]">later</span>.
        </h1>
        <p className="mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
          Split your payments. Earn rewards.
          <br />
          No debt.
        </p>
      </div>
      <img
        src="/images/CB.webp"
        alt="card flexfi"
        className="w-64 sm:w-80 md:w-2/4 object-contain"
      />
      {/* <RotatingCard /> */}
    </section>
  );
};

export default HeroBanner;
