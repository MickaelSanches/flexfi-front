const API_URL = import.meta.env.VITE_API_URL;

interface LOIPayload {
  fullName: string;
  company: string;
  email: string;
  country: string;
  sector: string;
  comments?: string;
  signature: string;
}

interface LOIResponse {
  id: string;
  pdfUrl: string;
}

export const LOIRepository = {
  async register(payload: LOIPayload): Promise<LOIResponse> {
    const res = await fetch(`${API_URL}/loi`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const { data, message } = await res.json();
    if (!res.ok) throw new Error(message || "failed");

    return data as LOIResponse;
  },
};
