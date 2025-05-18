import { useState } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import RegisterForm from "../components/RegisterForm";
import SuccessView from "./SuccesWaitlistView";

const Register = () => {
  const [isRegistered, setIsRegistered] = useState(false);

  return (
    <main className="min-h-screen text-white flex flex-col items-start px-6 py-10 md:px-16 lg:px-24 xl:px-50">
      {isRegistered ? (
        <div className="w-full mx-auto">
          <SuccessView />
        </div>
      ) : (
        <>
          <section className="text-start flex items-center w-full max-w-2xl">
            <div>
              <h1 className="text-3xl md:text-5xl font-bold font-days-one mt-20">
                Join the <br /> FlexFi Founders{" "}
                <span className="text-[#00FEFB]">Tribe</span>
              </h1>
              <p className="text-gray-300 max-w-xl mt-4 text-sm md:text-base">
                Get <span className="text-[#00FEFB]">early access</span>,
                exclusive rewards, and your place in the Hall of Fame.
              </p>
            </div>

            <Player
              autoplay
              loop
              src="/lotties/fusee.json"
              className="h-10 w-10 md:h-30 md:w-30"
            />
          </section>

          <section className="w-full max-w-2xl mx-auto">
            <RegisterForm setIsRegistered={setIsRegistered} />
          </section>

          <section className="text-center mx-auto">
            <h2 className="text-[#71FFFF] text-3xl sm:text-4xl md:text-5xl font-bold font-days-one">
              Join the crypto <br className="hidden sm:block" /> payment
              revolution.
            </h2>
          </section>
        </>
      )}
    </main>
  );
};

export default Register;
