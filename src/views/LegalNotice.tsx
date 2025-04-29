const LegalNoticePage = () => {
  return (
    <div className="flex flex-col w-full px-6 pt-16 py-10 md:px-16 lg:px-24 xl:px-50 text-white bg-gradient-to-b">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold">Legal Notice</h1>

        <h2 className="text-2xl font-bold">Entity Information</h2>
        <p>Entity: FlexFi</p>
        <p>Website: www.flex-fi.io</p>
        <p>Email: contact@flex-fi.io</p>

        <h2 className="text-2xl font-bold">Disclaimer</h2>
        <p>FlexFi is not a bank, nor a regulated financial institution.</p>
        <p>
          FlexFi does not offer fiat loans, fiat deposit accounts, or any
          regulated banking products.
        </p>
        <p>
          All operations are based on smart contracts on decentralized
          blockchains (primarily Solana).
        </p>
        <p>
          Users are fully responsible for the security of their wallets and
          private keys.
        </p>
        <p>
          Participation in staking, BNPL, and reward systems involves risks,
          including but not limited to asset volatility, smart contract
          vulnerabilities, and regulatory changes.
        </p>

        <h2 className="text-2xl font-bold">Jurisdiction and Governing Law</h2>
        <p>
          Any disputes arising from the use of FlexFi services shall be subject
          to international arbitration standards, unless otherwise specified by
          applicable mandatory laws.
        </p>
        <p>
          FlexFi operates globally under a decentralized infrastructure model
          and seeks progressive compliance in target jurisdictions.
        </p>

        <p className="text-center italic mt-10">
          FlexFi — The Freedom to Pay with Crypto, Later.
        </p>
      </div>
    </div>
  );
};

export default LegalNoticePage;
