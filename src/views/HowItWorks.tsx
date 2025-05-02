import HowItWorks from "../components/HowItWorksSection";
import FAQFlexFi from "../components/FAQFlexFi";

const HowItWorksPage = () => {
  return (
    <div
      id="#"
      className="flex flex-col w-full px-6 pt-16 py-10 md:px-16 lg:px-24 xl:px-50 text-white bg-gradient-to-b mb-20"
    >
      <div className="max-w-7xl mx-auto space-y-20">
        {/* Intro Section */}
        <section className="space-y-6">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-6">
            FlexFi turns your crypto into a real financial superpower.
          </h1>
          <p className="text-base md:text-xl text-gray-300 mb-12">
            Split payments, earn rewards, unlock freedom — instantly.
          </p>
        </section>

        {/* How It Works Section */}
        <section>
          <HowItWorks />
          <FAQFlexFi />
        </section>
      </div>
    </div>
  );
};

export default HowItWorksPage;
