import { create } from "zustand";

interface PageState {
  isShopper: boolean;
  setIsShopper: (value: boolean) => void;
}

export const usePageStore = create<PageState>((set) => ({
  isShopper: false,
  setIsShopper: (value: boolean) => set({ isShopper: value }),
}));
