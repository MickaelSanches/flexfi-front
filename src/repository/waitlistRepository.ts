// src/repository/waitlistRepository.ts

import { WaitlistFormData } from "../@types/waitlist";
import { fetchWithAuth } from "../utils/useFetchWithAuth";

const API_URL = import.meta.env.VITE_API_URL;

type WaitlistResponse = {
  status: string;
  data: {
    userReferralCode: string;
  };
};

export const waitlistRepository = {
  async submit(data: WaitlistFormData): Promise<WaitlistResponse> {
    const res = await fetchWithAuth(`${API_URL}/waitlist`, {
      method: "POST",
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Submission failed");
    }

    return await res.json();
  },

  async getWaitlistCount(): Promise<number> {
    const res = await fetch(`${API_URL}/waitlist/count`);

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message || "Failed to fetch waitlist count");
    }

    return json.data.count;
  },

  async getReferralCount(code: string): Promise<number> {
    const res = await fetchWithAuth(`${API_URL}/waitlist/referral/${code}`);

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to fetch referral count");
    }

    const data = await res.json();
    return data.data.referrals;
  },
};
