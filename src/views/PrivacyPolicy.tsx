const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col w-full px-6 pt-16 py-10 md:px-16 lg:px-24 xl:px-50 text-white bg-gradient-to-b">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Privacy Policy</h1>
        <p className="text-gray-400">Last Update: 29 April 2025</p>

        <h2 className="text-2xl font-bold">1. Information Collection</h2>
        <p>We collect the following information when you use our platform:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Personal Data: Your name, email address, KYC documents.</li>
          <li>
            Transaction Data: Details of BNPL transactions, staking activities,
            FlexYield rewards.
          </li>
          <li>
            Technical Data: Device information, IP address, browser, location,
            and usage data.
          </li>
          <li>
            Financial Behavior: Credit card usage, BNPL service usage, monthly
            income bands.
          </li>
          <li>
            Crypto Profile: Wallet addresses, favorite chains, portfolio size,
            self-assessed proficiency.
          </li>
        </ul>

        <h2 className="text-2xl font-bold">2. Use of Information</h2>
        <p>We use your information to:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>Provide access to our services and manage your account.</li>
          <li>Process your transactions and ensure security.</li>
          <li>Send you operational updates.</li>
          <li>
            Analyze user behavior to improve services and personalization.
          </li>
          <li>Conduct marketing activities if you have consented.</li>
        </ul>

        <h2 className="text-2xl font-bold">3. Information Sharing</h2>
        <p>
          We only share your personal data with trusted service providers, for
          legal obligations, or with your explicit consent. We do not sell,
          rent, or trade your personal data unless authorized by you.
        </p>

        <h2 className="text-2xl font-bold">4. Data Security</h2>
        <p>
          FlexFi uses encryption, secure smart contracts, and regular security
          audits. However, no method is 100% secure.
        </p>

        <h2 className="text-2xl font-bold">5. Data Retention</h2>
        <p>
          We retain your data only as long as necessary for providing services,
          legal compliance, and audit purposes.
        </p>

        <h2 className="text-2xl font-bold">6. Your Rights</h2>
        <p>
          You have rights to access, correct, delete your data, object to
          processing, withdraw consent, and lodge complaints with authorities.
        </p>

        <h2 className="text-2xl font-bold">7. Cookies</h2>
        <p>
          We use cookies to manage sessions, analyze service usage, and enhance
          user experience. You can control cookies in your browser settings.
        </p>

        <h2 className="text-2xl font-bold">8. Data Sharing and Monetization</h2>
        <p>
          Aggregated, anonymized data may be shared for research or commercial
          purposes. User-specific data sharing requires your explicit consent.
        </p>

        <h2 className="text-2xl font-bold">9. Changes to Privacy Policy</h2>
        <p>
          We may update this policy at any time. Changes are effective
          immediately upon posting. Check this page regularly.
        </p>

        <h2 className="text-2xl font-bold">10. Contact</h2>
        <p>Email: contact@flex-fi.io</p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
