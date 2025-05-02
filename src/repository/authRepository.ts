// src/repository/authRepository.ts

interface RegisterPayload {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
}

interface AuthResponse {
  token: string;
  user: {
    _id: string;
    email: string;
    firstName?: string;
    lastName?: string;
  };
}

const API_URL = "http://localhost:3000";

export const authRepository = {
  async register(payload: RegisterPayload): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Échec de l’inscription");
    }
    localStorage.setItem("token", data.data.token);
    localStorage.setItem("firstName", data.data.user.firstName);
    return data;
  },

  async login(email: string, password: string): Promise<AuthResponse> {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.message || "Échec de la connexion");
    }

    localStorage.setItem("token", data.data.token);
    localStorage.setItem("firstName", data.data.user.firstName);

    return data;
  },

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("firstName");
  },
};
