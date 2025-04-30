import Roadmap from "../components/Roadmap";
import JoinWaitlistButton from "../components/JoinWaitlistButton";

const RoadmapPage = () => {
  return (
    <div className="flex flex-col text-white">
      <section className="w-full px-6 pt-20 pb-16 md:px-16 lg:px-24 xl:px-40 bg-gradient-to-b overflow-hidden">
        <div className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            Next stop:
            <br />
            <span className="text-cyan-400">Breakpoint Abu Dhabi</span> 2025.
          </h1>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed">
            FlexFi is not just a product.
            <br />
            It’s a mission.
          </p>
        </div>
      </section>

      <section className="w-full">
        <img
          src="/images/breakpoint.webp"
          alt="Breakpoint 2025"
          className="w-full object-cover"
        />
      </section>

      <section className="w-full bg-gradient-to-b from-[#00161C] to-[#013847] px-6 py-20">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight space-y-3">
              <p>We are building the MVP.</p>
              <p>
                <span className="text-[#00FEFB]">
                  We are launching the Beta.
                </span>
              </p>
              <p>We are raising to go global – and make history.</p>
            </h2>
          </div>

          <div className="max-w-xl self-end text-right">
            <p className="text-base md:text-lg text-gray-300 leading-relaxed">
              Meet us at Breakpoint 2025.
              <br />
              See what true financial freedom looks like.
            </p>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#013847]">
        <Roadmap />
      </section>

      <section className="flex flex-col items-center text-center bg-gradient-to-b from-[#013847] to-[#007E91] px-6 py-20">
        <h2 className="text-black text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
          Back FlexFi.
          <br />
          Join the movement.
        </h2>
        <JoinWaitlistButton />
      </section>
    </div>
  );
};

export default RoadmapPage;
