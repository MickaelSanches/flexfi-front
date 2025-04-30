import { usePageStore } from "@/store/usePageStore";
import { useEffect, useRef, useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQFlexFi = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  usePageStore.getState().setIsShopper(true);


  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentSection = sectionRef.current;
    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  const faqs: FAQItem[] = [
    {
      question: "What is FlexFi?",
      answer:
        "FlexFi is a crypto-native Buy Now Pay Later (BNPL) solution built on the Solana blockchain. Through an innovative crypto card, you can buy now and pay later — with no debt, no bank, and using your crypto assets. FlexFi is the first real-world application of the NeoFi Protocol: programmable, sovereign, and universal.",
    },
    {
      question: "How does the installment payment system work with FlexFi?",
      answer:
        "Once your KYC is verified and your FlexFi wallet is activated, you deposit stablecoins (like USDC). These funds are used as collateral to unlock the Buy Now, Pay Later (BNPL) feature. You make your purchase immediately using your crypto-native card, and the installments are automatically deducted monthly.",
    },
    {
      question: "What cryptocurrencies can I use with FlexFi?",
      answer:
        "FlexFi supports secure and stable cryptocurrencies: USDC, USDT, PYUSD, SOL, and BTC. Only verified tokens are accepted, with a strong focus on stablecoins to ensure price stability and transaction reliability.",
    },
    {
      question: "Is FlexFi secure?",
      answer:
        "Yes. All operations are managed by smart contracts on Solana, with KYC/AML verification, isolated key storage, and tamper-proof logs. No intermediaries. No toxic debt. Just transparent, programmable rules that protect users.",
    },
    {
      question: "What happens if I miss a payment?",
      answer:
        "You’ll receive an instant alert. You have 10 days to resolve the issue. If not resolved, the owed amount is deducted from your collateral (no extra fees). Your FlexFi Score will decrease, and access to BNPL is suspended if you fall below 50/100.",
    },
    {
      question: "What is FlexYield?",
      answer:
        "FlexYield is our smart reward system. Each payment you make triggers a reward that is reinvested in yield-generating products (staking, real-world assets, DeFi). You earn passively just by using your card.",
    },
    {
      question: "What is FlexBoost?",
      answer:
        "FlexBoost is a merchant feature that lets businesses activate 0% BNPL campaigns, showcased inside the FlexFi app. This attracts crypto-ready users, boosts conversion rates, and improves cash flow. It requires no complex integration.",
    },
    {
      question: "Is FlexFi available in my country?",
      answer:
        "FlexFi is initially launching in Latin America (El Salvador, Brazil, Argentina, Colombia) with expansion planned across Asia, Africa, the Middle East, and North America. Sign up to be notified when FlexFi goes live in your region.",
    },
    {
      question: "How do I sign up?",
      answer:
        "Create your account via email or Google/Apple/X. Complete KYC verification. Generate your crypto-native wallet. Choose your card. Deposit collateral and start using FlexFi.",
    },
    {
      question: "Does FlexFi support NFTs?",
      answer:
        "Yes! NFT Utilities let you personalize your card, unlock exclusive perks, or temporarily enhance your payment conditions. It’s a unique Web3 feature, user-friendly and full of value-added benefits.",
    },
    {
      question: "Why choose FlexFi over traditional BNPL?",
      answer:
        "Because: There’s no debt: everything is collateralized. Fees are transparent and capped. You control your funds at all times. You’re rewarded with every payment. You’re building a real Web3 financial reputation.",
    },
  ];

  return (
    <section ref={sectionRef} id="faq-section" className="py-12">
      <div className="container mx-auto px-4 md:px-32">
        <h2
          className={`font-display text-4xl font-extrabold text-[#001A22] mb-4 ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[400ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          FAQ
        </h2>
        <div
          className={`space-y-4  ${
            isVisible
              ? "motion-preset-slide-right motion-delay-[500ms]"
              : "opacity-0 translate-y-10"
          }`}
        >
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border-b border-[#001A22] py-4 cursor-pointer"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-semibold text-[#001A22] font-display">
                  {faq.question}
                </h3>
                <span className="text-[#001A22]">
                  {open === index ? "-" : "+"}
                </span>
              </div>
              {open === index && (
                <p className="mt-4 text-[#001A22] text-base sm:text-xl whitespace-pre-line">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default FAQFlexFi;