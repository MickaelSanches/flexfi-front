// src/repository/authRepository.ts

interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  referralCodeUsed?: string;
}

interface AuthResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
    userReferralCode: string;
    referralCodeUsed?: string;
    formFullfilled?: boolean;
    points?: number;
    kycStatus?: string;
    wallets?: any[];
    authMethod?: string;
  };
}
const API_URL = import.meta.env.VITE_API_URL;

export const authRepository = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const responseBody = await res.json();

    if (!res.ok) {
      throw new Error(responseBody.message || "Registration failed");
    }

    const { token, user } = responseBody.data;

    localStorage.setItem("token", token);
    localStorage.setItem("user", JSON.stringify(user));

    return { token, user };
  },

  async sendVerificationCode(email: string): Promise<{ success: boolean }> {
    const res = await fetch(`${API_URL}/auth/send-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Failed to send verification code");
    }

    return data;
  },

  async verifyEmailCode(
    id: string,
    code: string
  ): Promise<{ success: boolean }> {
    const res = await fetch(`${API_URL}/auth/verify-code/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Invalid verification code");
    }

    return data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Login failed");
    }

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("user", JSON.stringify(data.data.user));

    return data;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  },

  async getUser(): Promise<AuthResponse | null> {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await fetch(`${API_URL}/auth/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await res.json();
    return data;
  },

  async getCurrentUserPoints() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await fetch(`${API_URL}/auth/points`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await res.json();
    return data;
  },

  async getCurrentUserRank() {
    const token = localStorage.getItem("token");
    if (!token) return null;

    const res = await fetch(`${API_URL}/auth/rank`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      throw new Error("Failed to fetch user data");
    }

    const data = await res.json();
    return data;
  },
};
