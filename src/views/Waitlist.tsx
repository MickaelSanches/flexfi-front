import { Player } from "@lottiefiles/react-lottie-player";
import { useWaitlistViewModel } from "../viewmodels/useWaitlistViewModel";

const Waitlist = () => {
  const {
    formData,
    handleChange,
    handleRadioChange,
    step,
    nextStep,
    countries,
    states,
    error,
    handleSubmit,
    invalidFields,
  } = useWaitlistViewModel();

  return (
    <main className="min-h-screen text-white flex flex-col items-start px-6 py-6 md:px-16 lg:px-24 xl:px-50">
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
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("email") ? "bg-red-200" : "bg-white"
                  }`}
                />
              </div>

              <input type="hidden" name="utmSource" value="waitlist" />
              <input type="hidden" name="utmMedium" value="form" />
              <input type="hidden" name="utmCampaign" value="launch" />
              <input type="hidden" name="landingVariant" value="v1" />

              {/* Name */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="firstName"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  First Name / Handle *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  placeholder="Enter your name or handle"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("firstName")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("country")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
                >
                  <option value="">Select your country</option>
                  {countries.map((country, idx) => (
                    <option key={idx} value={country.name}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="stateProvince"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  State / Province *
                </label>
                <select
                  id="stateProvince"
                  name="stateProvince"
                  required
                  value={formData.stateProvince}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("stateProvince")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  htmlFor="preferredLanguage"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Preferred Language *
                </label>
                <select
                  id="preferredLanguage"
                  name="preferredLanguage"
                  required
                  value={formData.preferredLanguage}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("preferredLanguage")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  htmlFor="phoneNumber"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Mobile Phone Number (Optional)
                </label>
                <input
                  id="phoneNumber"
                  name="phoneNumber"
                  type="text"
                  placeholder="with country code"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>

              {/* Telegram / Discord ID (optional) */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="telegramOrDiscordId"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Telegram or Discord ID (Optional)
                </label>
                <input
                  id="telegramOrDiscordId"
                  name="telegramOrDiscordId"
                  type="text"
                  placeholder="Your Telegram or Discord ID"
                  value={formData.telegramOrDiscordId}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400 outline-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

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
                  name="ageGroup"
                  required
                  value={formData.ageGroup}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("ageGroup")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  name="employmentStatus"
                  required
                  value={formData.employmentStatus}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("employmentStatus")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                    Gig Worker / Platform Worker
                  </option>
                  <option value="Informal Sector Worker">
                    Informal Sector Worker
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
                  name="monthlyIncome"
                  required
                  value={formData.monthlyIncome}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("monthlyIncome")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  name="educationLevel"
                  required
                  value={formData.educationLevel}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("educationLevel")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
                >
                  <option value="">Select your education level</option>
                  <option value="No formal education">
                    No formal education
                  </option>
                  <option value="Primary school / Elementary education">
                    Primary school / Elementary education
                  </option>
                  <option value="Secondary school / High school diploma">
                    Secondary school / High school diploma
                  </option>
                  <option value="Vocational / Technical training">
                    Vocational / Technical training
                  </option>
                  <option value="Some college / University (no degree yet)">
                    Some college / University (no degree yet)
                  </option>
                  <option value="Bachelor’s degree (BA, BS, etc.)">
                    Bachelor’s degree (BA, BS, etc.)
                  </option>
                  <option value="Master’s degree (MA, MSc, MBA, etc.)">
                    Master’s degree (MA, MSc, MBA, etc.)
                  </option>
                  <option value="Doctorate / PhD">Doctorate / PhD</option>
                  <option value="Other (please specify)">
                    Other (please specify)
                  </option>
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
                        name="bnplServices"
                        value={service}
                        checked={formData.bnplServices.includes(service)}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
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
                  {["Yes", "No"].map((option) => (
                    <label key={option} className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="hasCreditCard"
                        value={option}
                        checked={formData.hasCreditCard === (option === "Yes")}
                        onChange={() =>
                          handleRadioChange("hasCreditCard", option)
                        }
                        className="w-5 h-5"
                      />
                      {option}
                    </label>
                  ))}
                </div>
              </div>

              {/* Average Online Spend Monthly */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="avgOnlineSpend"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Average Online Spend Monthly *
                </label>
                <select
                  id="avgOnlineSpend"
                  name="avgOnlineSpend"
                  required
                  value={formData.avgOnlineSpend}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("avgOnlineSpend")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
                >
                  <option value="">Select spending range</option>
                  <option value="Less than $50">Less than $50</option>
                  <option value="$50 – $99">$50 – $99</option>
                  <option value="$100 – $199">$100 – $199</option>
                  <option value="$200 – $399">$200 – $399</option>
                  <option value="$400 – $699">$400 – $699</option>
                  <option value="$700 – $999">$700 – $999</option>
                  <option value="$1,000 – $1,499">$1,000 – $1,499</option>
                  <option value="$1,500 – $1,999">$1,500 – $1,999</option>
                  <option value="$2,000 or more">$2,000 or more</option>
                </select>
              </div>

              {/* Reason for Signing Up */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="mainReason"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Reason for Signing Up *
                </label>
                <select
                  id="mainReason"
                  name="mainReason"
                  required
                  value={formData.mainReason}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("mainReason")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
                >
                  <option value="">Select a reason</option>
                  <option value="Buy Now, Pay Later (BNPL) with crypto">
                    Buy Now, Pay Later (BNPL) with crypto
                  </option>
                  <option value="Earn yield or rewards on purchases">
                    Earn yield or rewards on purchases
                  </option>
                  <option value="Use a crypto-powered payment card">
                    Use a crypto-powered payment card
                  </option>
                  <option value="Get early access to FlexFi features">
                    Get early access to FlexFi features
                  </option>
                  <option value="Access financial services without a bank">
                    Access financial services without a bank
                  </option>
                  <option value="Join a crypto-native financial community">
                    Join a crypto-native financial community
                  </option>
                  <option value="Receive cashback">Receive cashback</option>
                  <option value="Learn about FlexFi / stay informed">
                    Learn about FlexFi / stay informed
                  </option>
                  <option value="Other (please specify)">
                    Other (please specify)
                  </option>
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
                  name="firstPurchase"
                  type="text"
                  placeholder="What would you like to buy first?"
                  value={formData.firstPurchase}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white text-black outline-none"
                />
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

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
              <h2 className="text-2xl font-bold text-center text-white mb-8">
                Your crypto profile
              </h2>

              {/* Crypto Proficiency */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="cryptoLevel"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Crypto Proficiency *
                </label>
                <select
                  id="cryptoLevel"
                  name="cryptoLevel"
                  required
                  value={formData.cryptoLevel}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("cryptoLevel")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
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
                  name="walletType"
                  required
                  value={formData.walletType}
                  onChange={handleChange}
                  className={`p-3 rounded-lg  text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("walletType")
                      ? "bg-red-200  "
                      : "bg-white"
                  }`}
                >
                  <option value="">Select your wallet</option>
                  <option value="Phantom">Phantom</option>
                  <option value="Solflare">Solflare</option>
                  <option value="Jupiter">Jupiter</option>
                  <option value="Backpack">Backpack</option>
                  <option value="Magic Eden">Magic Eden</option>
                  <option value="Trust Wallet">Trust Wallet</option>
                  <option value="Metamask">Metamask</option>
                  <option value="Rabby Wallet">Rabby Wallet</option>
                  <option value="Uniswap">Uniswap</option>
                  <option value="Other">Other</option>
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
                        name="favoriteChains"
                        value={chain}
                        checked={formData.favoriteChains.includes(chain)}
                        onChange={handleChange}
                        className="w-5 h-5"
                      />
                      {chain}
                    </label>
                  ))}
                </div>
              </div>

              {/* Public Wallet Address */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="publicWallet"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Public Wallet Address (Optional)
                </label>
                <input
                  id="publicWallet"
                  name="publicWallet"
                  type="text"
                  placeholder="Enter your public wallet address"
                  value={formData.publicWallet}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white text-black outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label
                  htmlFor="portfolioSize"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Crypto Portfolio Size *
                </label>
                <select
                  id="portfolioSize"
                  name="portfolioSize"
                  required
                  aria-placeholder="Select your portfolio size"
                  value={formData.portfolioSize}
                  onChange={handleChange}
                  className={`p-3 rounded-lg text-black placeholder-gray-400 outline-none ${
                    invalidFields.includes("portfolioSize")
                      ? "bg-red-200"
                      : "bg-white"
                  }`}
                >
                  <option value="">Select a size</option>
                  <option value="Less than $1,000">Less than $1,000</option>
                  <option value="$1,000 – $9,999">$1,000 – $9,999</option>
                  <option value="$10,000 – $49,999">$10,000 – $49,999</option>
                  <option value="$50,000 or more">$50,000 or more</option>
                </select>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-[#00FEFB]">
                  Your experience with BNPL (1–5) *
                </label>
                <select
                  name="experienceBnplRating"
                  value={formData.experienceBnplRating}
                  onChange={handleChange}
                  className={`p-3 rounded-lg text-black ${
                    invalidFields.includes("experienceBnplRating")
                      ? "bg-red-200"
                      : "bg-white"
                  }`}
                >
                  <option value="">Select a rating</option>
                  {[1, 2, 3, 4, 5].map((n) => (
                    <option key={n} value={n}>
                      {n}
                    </option>
                  ))}
                </select>
              </div>

              {/* Hidden Referral Code */}
              <div className="flex flex-col gap-2">
                <label
                  htmlFor="referralCodeUsed"
                  className="text-sm font-semibold text-[#00FEFB]"
                >
                  Referral Code (Optional)
                </label>
                <input
                  type="text"
                  name="referralCodeUsed"
                  placeholder="Enter your referral code"
                  id="referralCode"
                  value={formData.referralCodeUsed}
                  className="p-3 rounded-lg bg-white text-black outline-none"
                />
              </div>

              {/* Consent Checkboxes */}
              <div className="space-y-4 text-sm text-white">
                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consentMarketing"
                    checked={formData.consentMarketing}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1"
                    required
                  />
                  <span>Accept marketing emails (GDPR)</span>
                </label>

                <label className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    name="consentAdult"
                    checked={formData.consentAdult}
                    onChange={handleChange}
                    className="w-5 h-5 mt-1"
                    required
                  />
                  <span>
                    Confirm you are over 18 years old (KYC compliance)
                  </span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="consent_data_sharing"
                    checked={formData.consent_data_sharing}
                    onChange={handleChange}
                    className="w-5 h-5"
                    required
                  />
                  <span className="text-sm leading-relaxed">
                    I agree that FlexFi may share my data with trusted partners
                    for marketing purposes, under strict confidentiality. I can
                    withdraw my consent anytime. See our{" "}
                    <a
                      href="/privacy-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline text-[#71FFFF]"
                    >
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {error && (
                <p className="text-red-500 text-sm mt-2 text-center">{error}</p>
              )}

              <button
                type="submit"
                onClick={handleSubmit}
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
    </main>
  );
};

export default Waitlist;
