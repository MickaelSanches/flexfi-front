export type WaitlistData = {
  email: string;
  name: string;
  country: string;
  state: string;
  language: string;
  mobile: string;
  social: string;
  ageGroup: string;
  employmentStatus: string;
  monthlyIncome: string;
  educationLevel: string;
  bnplServices: string[];
  creditCard: string;
  spendMonthly: string;
  reasonSignUp: string;
  firstPurchase: string;
  cryptoProficiency: string;
  walletType: string;
  favoriteChains: string[];
  walletAddress: string;
  referralCode: string;
  consentMarketing: boolean;
  consentAge: boolean;
  consentSharing: boolean;
};

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const waitlistRepository = {
  async submit(data: WaitlistData): Promise<void> {
    const res = await fetch(`${API_URL}/api/waitlist`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Submission failed");
    }
  },
};
