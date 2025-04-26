import { Check, X } from "lucide-react";

const SystemFixSection = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-10 p-6 md:p-12 text-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center">
        The System is Broken.
        <span className="text-[#00FEFB]"> We Fixed It.</span>
      </h2>

      <div className="flex flex-col-reverse md:flex-row items-center gap-12 w-full max-w-6xl">
        <div className="flex flex-col gap-6 w-full">
          <div className="flex flex-col md:flex-row items-center justify-  gap-8">
            <img
              className="h-72 md:h-96 object-contain"
              src="/images/iPhone.webp"
              alt="Iphone"
            />
            <ul className="text-lg font-bold">
              <li className="flex items-center gap-3">
                <X className="text-red-500 min-w-5" />
                <span>No more unsecured debt traps.</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="text-red-500 min-w-5" />
                <span>No more friction between crypto and real life.</span>
              </li>
              <li className="flex items-center gap-3">
                <X className="text-red-500 min-w-5" />
                <span>No more outdated banking rules.</span>
              </li>
            </ul>
          </div>

          {/* Bloc FlexFi */}
          <div className="rounded-2xl p-6 mx-auto">
            <p className="font-bold text-2xl text-[#00FEFB] text-start mb-4">
              FlexFi offers real financial sovereignty:
            </p>
            <ul className=" text-lg font-bold flex flex-col items-start">
              <li className="flex items-center gap-3">
                <Check className="text-green-400 min-w-5" />
                <span>Split payments with real collateral.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 min-w-5" />
                <span>Earn yield while you spend.</span>
              </li>
              <li className="flex items-center gap-3">
                <Check className="text-green-400 min-w-5" />
                <span>Build your reputation — not your debt.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemFixSection;
