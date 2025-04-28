import { Player } from "@lottiefiles/react-lottie-player";
import { useEffect, useState } from "react";

const Waitlist = () => {
  type Country = {
    name: string;
    states: { name: string }[];
  };

  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [states, setStates] = useState<{ name: string }[]>([]);

  const [step, setStep] = useState(1);

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data);
      });
  }, []);

  useEffect(() => {
    const country = countries.find((c) => c.name === selectedCountry);
    if (country) {
      setStates(country.states);
    } else {
      setStates([]);
    }
  }, [selectedCountry, countries]);

  function nextStep() {
    setStep((prevStep) => prevStep + 1);
  }

  return (
    <section className="min-h-screen text-white flex flex-col items-start px-6 py-6 md:px-16 lg:px-24 xl:px-50">
      <div className="text-start mt-20 mb-10">
        <h1 className="text-3xl md:text-5xl font-bold flex items-center justify-start gap-3">
          Join the <span className="text-white">FlexFi Founders</span>
          <span className="text-[#00FEFB] flex items-center">
            Tribe
            <Player
              autoplay
              loop
              src="/lotties/fusee.json"
              className="h-10 w-10 md:h-30 md:w-30"
            />
          </span>
        </h1>
        <p className="text-gray-300 max-w-xl text-sm md:text-base">
          Get <span className="text-[#00FEFB]">early access</span>, exclusive
          rewards, and your place in the Hall of Fame.
        </p>
      </div>

      <h2 className="mx-auto text-lg font-bold mb-6 flex gap-2">
        Identity <span className="text-[#00FEFB]">{step}</span>/3
      </h2>

      <div className="bg-[#0C1D26] p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6 mx-auto">
        <form className="flex flex-col gap-6">
          {step === 1 && (
            <>
              {/* Email */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="email"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Email *
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="name"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  First Name / Handle *
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Enter your name or handle"
                  required
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>

              {/* Country Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="country"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Country *
                </label>
                <select
                  id="country"
                  required
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                >
                  <option value="">Select your country</option>
                  {countries.map((country, idx) => (
                    <option key={idx} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* State Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="state"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  State / Province *
                </label>
                <select
                  id="state"
                  required
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                >
                  <option value="">Select your state/province</option>
                  {states.map((state, idx) => (
                    <option key={idx} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>

              {/* Preferred Language Dropdown */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="language"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Preferred Language *
                </label>
                <select
                  id="language"
                  required
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                >
                  <option value="">Select language</option>
                  <option value="English">English</option>
                  <option value="French">French</option>
                  <option value="Spanish">Spanish</option>
                  <option value="Portuguese">Portuguese</option>
                </select>
              </div>

              {/* Mobile Phone (optional) */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mobile"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Mobile Phone Number (Optional)
                </label>
                <input
                  id="mobile"
                  type="text"
                  placeholder="Enter your mobile number"
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>

              {/* Telegram / Discord ID (optional) */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="social"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Telegram or Discord ID (Optional)
                </label>
                <input
                  id="social"
                  type="text"
                  placeholder="Your Telegram or Discord ID"
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>
              <button
                className="mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                Next
              </button>
            </>
          )}

          {step === 2 && (
            <>
              {/* Step Title */}
              <h2 className="text-2xl font-bold text-center text-white mb-8">
                Your profile
              </h2>

              {/* Age Group */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="ageGroup"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Age Group *
                </label>
                <select
                  id="ageGroup"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your age group</option>
                  <option value="18-29">18-29</option>
                  <option value="30-44">30-44</option>
                  <option value="45-59">45-59</option>
                  <option value="60+">60+</option>
                </select>
              </div>

              {/* Employment Status */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="employmentStatus"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Employment Status *
                </label>
                <select
                  id="employmentStatus"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your employment status</option>
                  <option value="Employed – Full-time">
                    Employed – Full-time
                  </option>
                  <option value="Employed – Part-time">
                    Employed – Part-time
                  </option>
                  <option value="Self-employed / Freelancer">
                    Self-employed / Freelancer
                  </option>
                  <option value="Entrepreneur / Business Owner">
                    Entrepreneur / Business Owner
                  </option>
                  <option value="Student">Student</option>
                  <option value="Intern / Apprentice">
                    Intern / Apprentice
                  </option>
                  <option value="Unemployed – Seeking work">
                    Unemployed – Seeking work
                  </option>
                  <option value="Unemployed – Not seeking work">
                    Unemployed – Not seeking work
                  </option>
                  <option value="Retired">Retired</option>
                  <option value="Homemaker / Caregiver">
                    Homemaker / Caregiver
                  </option>
                  <option value="Gig Worker / Platform Worker">
                    Gig Worker / Platform Worker (e.g., Uber, Fiverr)
                  </option>
                  <option value="Informal Sector Worker">
                    Informal Sector Worker (LATAM)
                  </option>
                  <option value="Government / Public Sector Employee">
                    Government / Public Sector Employee
                  </option>
                  <option value="Other">Other (please specify)</option>
                </select>
              </div>

              {/* Monthly Income */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="monthlyIncome"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Monthly Income *
                </label>
                <select
                  id="monthlyIncome"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your income</option>
                  <option value="Less than $1,500">Less than $1,500</option>
                  <option value="$1,500 – $1,999">$1,500 – $1,999</option>
                  <option value="$2,000 – $2,999">$2,000 – $2,999</option>
                  <option value="$3,000 – $4,999">$3,000 – $4,999</option>
                  <option value="$5,000 – $9,999">$5,000 – $9,999</option>
                  <option value="$10,000 or more">$10,000 or more</option>
                </select>
              </div>

              {/* Education Level */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="educationLevel"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Education Level *
                </label>
                <select
                  id="educationLevel"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your education level</option>
                  <option>No formal education</option>
                  <option>Primary school / Elementary education</option>
                  <option>Secondary school / High school diploma</option>
                  <option>Vocational / Technical training</option>
                  <option>Some college / University (no degree yet)</option>
                  <option>Bachelor’s degree (BA, BS, etc.)</option>
                  <option>Master’s degree (MA, MSc, MBA, etc.)</option>
                  <option>Doctorate / PhD</option>
                  <option>Other (please specify)</option>
                </select>
              </div>

              {/* BNPL Services Used */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#00FEFB]">
                  BNPL Services Used (you can select multiple)
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Klarna",
                    "Afterpay",
                    "Affirm",
                    "Zip (Quadpay)",
                    "Sezzle",
                    "Alma",
                    "Oney",
                    "Nelo",
                    "Kueski Pay",
                    "Mercado Crédito",
                    "Aplazo",
                    "Other (please specify)",
                    "None",
                  ].map((service) => (
                    <label key={service} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={service}
                        className="w-5 h-5"
                      />{" "}
                      {service}
                    </label>
                  ))}
                </div>
              </div>

              {/* Credit Card Toggle */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#00FEFB]">
                  Do you have a Credit Card?
                </label>
                <div className="flex items-center gap-6">
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="creditCard"
                      value="Yes"
                      className="w-5 h-5"
                    />{" "}
                    Yes
                  </label>
                  <label className="flex items-center gap-2">
                    <input
                      type="radio"
                      name="creditCard"
                      value="No"
                      className="w-5 h-5"
                    />{" "}
                    No
                  </label>
                </div>
              </div>

              {/* Average Online Spend Monthly */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="spendMonthly"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Average Online Spend Monthly *
                </label>
                <select
                  id="spendMonthly"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select spending range</option>
                  <option>Less than $50</option>
                  <option>$50 – $99</option>
                  <option>$100 – $199</option>
                  <option>$200 – $399</option>
                  <option>$400 – $699</option>
                  <option>$700 – $999</option>
                  <option>$1,000 – $1,499</option>
                  <option>$1,500 – $1,999</option>
                  <option>$2,000 or more</option>
                </select>
              </div>

              {/* Reason for Signing Up */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="reasonSignUp"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Reason for Signing Up *
                </label>
                <select
                  id="reasonSignUp"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select a reason</option>
                  <option>Buy Now, Pay Later (BNPL) with crypto</option>
                  <option>Earn yield or rewards on purchases</option>
                  <option>Use a crypto-powered payment card</option>
                  <option>Get early access to FlexFi features</option>
                  <option>Access financial services without a bank</option>
                  <option>Join a crypto-native financial community</option>
                  <option>Receive cashback</option>
                  <option>Learn about FlexFi / stay informed</option>
                  <option>Other (please specify)</option>
                </select>
              </div>

              {/* First Purchase Wish */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstPurchase"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  First Purchase Wish (Optional)
                </label>
                <input
                  id="firstPurchase"
                  type="text"
                  placeholder="What would you like to buy first?"
                  className="p-3 rounded-lg bg-white text-black outline-none"
                />
              </div>

              <button
                className="mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
                onClick={(e) => {
                  e.preventDefault();
                  nextStep();
                }}
              >
                Next
              </button>
            </>
          )}

          {step === 3 && (
            <>
              {/* Step Title */}
              <h2 className="text-2xl font-bold text-center text-white mb-8">
                Your crypto profile
              </h2>

              {/* Crypto Proficiency */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cryptoProficiency"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Crypto Proficiency *
                </label>
                <select
                  id="cryptoProficiency"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your crypto proficiency</option>
                  <option value="Zero">Zero</option>
                  <option value="Beginner">Beginner</option>
                  <option value="Intermediate">Intermediate</option>
                  <option value="Active User">Active User</option>
                  <option value="Crypto Native">Crypto Native</option>
                </select>
              </div>

              {/* Primary Wallet Type */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="walletType"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Primary Wallet Type *
                </label>
                <select
                  id="walletType"
                  required
                  className="p-3 rounded-lg bg-white text-black outline-none"
                >
                  <option value="">Select your wallet</option>
                  <option>Phantom</option>
                  <option>Solflare</option>
                  <option>Jupiter</option>
                  <option>Backpack</option>
                  <option>Magic Eden</option>
                  <option>Trust Wallet</option>
                  <option>Metamask</option>
                  <option>Rabby Wallet</option>
                  <option>Uniswap</option>
                  <option>Other</option>
                </select>
              </div>

              {/* Favorite Chains */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#00FEFB]">
                  Favorite Chains (select multiple)
                </label>
                <div className="flex flex-wrap gap-4">
                  {[
                    "Solana",
                    "Ethereum",
                    "Binance Smart Chain (BSC)",
                    "Polygon",
                    "Avalanche",
                    "Arbitrum",
                    "Optimism",
                    "Base",
                    "Fantom",
                    "Near",
                    "Cosmos",
                    "Cardano",
                    "Bitcoin",
                    "Other",
                  ].map((chain) => (
                    <label key={chain} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value={chain}
                        className="w-5 h-5"
                      />{" "}
                      {chain}
                    </label>
                  ))}
                </div>
              </div>

              {/* Public Wallet Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="walletAddress"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Public Wallet Address (Optional)
                </label>
                <input
                  id="walletAddress"
                  type="text"
                  placeholder="Enter your public wallet address"
                  className="p-3 rounded-lg bg-white text-black outline-none"
                />
              </div>

              {/* Hidden Referral Code (captured from URL param) */}
              <input type="hidden" id="referralCode" value={""} />

              {/* Consent Checkboxes */}
              <div className="flex flex-col gap-4 mt-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" required className="w-5 h-5" />
                  <span className="text-sm">
                    Accept marketing emails (GDPR)
                  </span>
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" required className="w-5 h-5" />
                  <span className="text-sm">
                    Confirm you are over 18 years old (KYC compliance)
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
              >
                Submit
              </button>
            </>
          )}
        </form>
      </div>

      <h2 className="text-[#001A22] text-5xl font-bold mx-auto my-16 text-center">
        Join the crypto <br /> payment revolution.
      </h2>
    </section>
  );
};

export default Waitlist;
