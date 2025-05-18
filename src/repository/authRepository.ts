// src/repository/authRepository.ts
import { useAuthStore } from "../store/authStore";
import { fetchWithAuth } from "../utils/useFetchWithAuth";

const API_URL = import.meta.env.VITE_API_URL;

interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  referralCodeUsed?: string;
}

interface AuthResponse {
  token: string;
  user: any;
}

export const authRepository = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const { data, message } = await res.json();
    if (!res.ok) throw new Error(message || "Registration failed");

    useAuthStore.getState().setToken(data.token);
    useAuthStore.getState().setUser(data.user);

    return data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const json = await res.json();

    if (!res.ok) {
      throw new Error(json.message || json.error || "Login failed");
    }

    if (!json.data || !json.data.token || !json.data.user) {
      throw new Error("Invalid response structure from server.");
    }

    const { token, user } = json.data;


    useAuthStore.getState().setToken(token);
    useAuthStore.getState().setUser(user);


    return { token, user };
  },

  async sendVerificationCode(email: string) {
    const res = await fetch(`${API_URL}/auth/send-code`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();

    if (!res.ok) throw new Error(data.message || "Failed to send code");


    return data;
  },

  async verifyEmailCode(id: string, code: string) {
    const res = await fetch(`${API_URL}/auth/verify-code/${id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });

    const data = await res.json();
    if (!res.ok) throw new Error(data.message || "Invalid code");

    useAuthStore.getState().updateUser({ isVerified: true });
    return data;
  },

  async resendVerificationEmail(email: string) {
    if (!email) throw new Error("Email is required");

    const res = await fetch(`${API_URL}/auth/resend-verification`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });

    const data = await res.json();
    if (!res.ok)
      throw new Error(data.error || data.message || "Failed to resend");
    return data;
  },

  async getUser() {
    const res = await fetchWithAuth(`${API_URL}/auth/me`);
    if (!res.ok) throw new Error("Failed to fetch user");

    return await res.json();
  },

  async getCurrentUserPoints() {
    const res = await fetchWithAuth(`${API_URL}/auth/points`);
    if (!res.ok) throw new Error("Failed to fetch points");

    return await res.json();
  },

  async getCurrentUserRank() {
    const res = await fetchWithAuth(`${API_URL}/auth/rank`);
    if (!res.ok) throw new Error("Failed to fetch rank");

    return await res.json();
  },

  logout() {
    useAuthStore.getState().logout();
  },
};
