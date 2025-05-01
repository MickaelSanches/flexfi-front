import { WaitlistFormData } from "../@types/waitlist";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export const waitlistRepository = {
  async submit(data: WaitlistFormData): Promise<void> {
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
