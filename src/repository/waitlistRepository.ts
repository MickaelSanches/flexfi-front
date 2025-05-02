import { WaitlistFormData } from "../@types/waitlist";

const API_URL =
  import.meta.env.VITE_API_URL || "http://localhost:3000/api/waitlist";

type WaitlistResponse = {
  status: string;
  data: {
    userReferralCode: string;
  };
};

export const waitlistRepository = {
  async submit(data: WaitlistFormData): Promise<WaitlistResponse> {
    const res = await fetch(`${API_URL}`, {
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

    const responseData: WaitlistResponse = await res.json();
    return responseData;
  },

  async getWaitlistCount(): Promise<number> {
    const res = await fetch(`${API_URL}/count`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to fetch waitlist count");
    }

    const json = await res.json();
    const count = json.data.count;
    return count;
  },
};
