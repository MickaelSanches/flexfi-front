import BuiltForMerchants from "../components/BuiltForMerchants";
import FeaturesSection from "../components/FeaturesSection";
import HeroBanner from "../components/HeroBanner";
import HeroCTA from "../components/HeroCTA";
import OurVision from "../components/OurVision";
import ReadyToChange from "../components/ReadyToChange";
import Roadmap from "../components/Roadmap";
import SystemFixSection from "../components/SystemFixSection";

const Home = () => {
  return (
    <main>
      <HeroBanner />
      <div className="flex flex-col gap-10 lg:gap-20 relative">
        <OurVision />
        <FeaturesSection />
        <SystemFixSection />
        {/* <ProductSection /> */}
        <BuiltForMerchants />
        <div className="relative -mt-15  md:-mt-18 lg:-mt-25  flex justify-center">
          <button className="cursor-pointer rounded-2xl bg-[#71FFFF] text-black text-lg px-8 py-4  shadow-lg hover:scale-105 transition-all duration-300 font-bold">
            Start with FlexBoost
          </button>
        </div>
        <Roadmap />
        <ReadyToChange />
        <HeroCTA />
      </div>
    </main>
  );
};

export default Home;
