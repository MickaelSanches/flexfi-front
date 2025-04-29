const TermsOfUsePage = () => {
  return (
    <div className="flex flex-col w-full px-6 pt-16 py-10 md:px-16 lg:px-24 xl:px-50 text-white bg-gradient-to-b from-[#00161C] to-[#013847]">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Terms of Use</h1>
        <p className="text-gray-400">Last Update: 29 April 2025</p>

        <h2 className="text-2xl font-bold">1. Acceptance of Terms</h2>
        <p>
          By accessing or using FlexFi, you agree to be bound by these Terms and
          all applicable laws and regulations. If you do not agree, you must not
          use FlexFi.
        </p>

        <h2 className="text-2xl font-bold">2. Services Provided</h2>
        <p>
          FlexFi operates under the NeoFi Protocol, providing
          crypto-collateralized Buy Now, Pay Later (BNPL) services, staking
          solutions, yield rewards (FlexYield), and merchant-activated
          promotions (FlexBoost). FlexFi is not a bank or a traditional
          financial institution.
        </p>
        <p>
          FlexFi reserves the right to modify, suspend, or discontinue its
          services without prior notice.
        </p>

        <h2 className="text-2xl font-bold">3. Account Registration</h2>
        <p>To access FlexFi services, you must:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Create an account using email, Google, Apple, or X.</li>
          <li>Complete the KYC verification process.</li>
          <li>Securely manage your credentials.</li>
        </ul>
        <p>You are solely responsible for all activities under your account.</p>

        <h2 className="text-2xl font-bold">4. Payment and Collateral Terms</h2>
        <p>
          Users must stake compatible cryptocurrencies (e.g., USDC) to access
          BNPL services. Installments are subject to fees based on your selected
          FlexFi Card (Standard, Silver, Gold, Platinum). Smart contracts
          automate all payment schedules (3x, 4x, 6x, 12x). In case of default,
          your collateral will be automatically seized to cover outstanding
          debts.
        </p>

        <h2 className="text-2xl font-bold">5. Acceptable Use</h2>
        <p>
          You agree to use FlexFi legally, ethically, and without abusing the
          platform. Fraudulent, unlawful, or malicious activities are strictly
          prohibited.
        </p>

        <h2 className="text-2xl font-bold">6. Intellectual Property</h2>
        <p>
          All content on FlexFi (design, logos, platform code, etc.) is the
          property of FlexFi or its licensors and protected by applicable
          intellectual property laws.
        </p>

        <h2 className="text-2xl font-bold">7. Data Collection and Usage</h2>
        <p>
          By using FlexFi, you consent to the collection, processing, and
          analysis of your personal, financial, and crypto activity data, as
          described in our Privacy Policy. Data may be anonymized and used for
          commercial analytics purposes.
        </p>

        <h2 className="text-2xl font-bold">8. Limitation of Liability</h2>
        <p>
          FlexFi, its affiliates, and its partners are not liable for: losses
          from crypto volatility, unauthorized access to your wallets,
          interruptions or errors in the platform, or any indirect,
          consequential, or incidental damages. Users assume all risks
          associated with using blockchain-based services.
        </p>

        <h2 className="text-2xl font-bold">9. Termination</h2>
        <p>
          FlexFi may suspend or terminate your access to the platform at any
          time, without prior notice, for violations of these Terms or any
          misuse of the service.
        </p>

        <h2 className="text-2xl font-bold">10. Changes to Terms</h2>
        <p>
          FlexFi reserves the right to modify these Terms at any time. Updated
          Terms will be posted on this page and effective immediately.
        </p>

        <h2 className="text-2xl font-bold">11. Contact</h2>
        <p>Email: contact@flex-fi.io</p>
      </div>
    </div>
  );
};

export default TermsOfUsePage;
