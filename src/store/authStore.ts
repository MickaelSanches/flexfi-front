// src/stores/useAuthStore.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

export type UserType = {
  _id: string;
  email: string;
  firstName?: string;
  lastName?: string;
  formFullfilled?: boolean;
  isVerified?: boolean;
  userReferralCode?: string;
  points?: number;
  [key: string]: any;
};

interface AuthState {
  token: string | null;
  user: UserType | null;
  points: number;
  setToken: (token: string | null) => void;
  setUser: (user: UserType | null) => void;
  updateUser: (updates: Partial<UserType>) => void;
  setPoints: (points: number) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      token: null,
      user: null,
      points: 0,
      setToken: (token) => set({ token }),
      setUser: (user) => set({ user }),
      updateUser: (updates) =>
        set((state) => ({
          user: state.user ? { ...state.user, ...updates } : null,
        })),
      setPoints: (points) => set({ points }),
      logout: () => set({ token: null, user: null, points: 0 }),
    }),
    {
      name: "auth-storage",
    }
  )
);
