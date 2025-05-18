import { fetchWithAuth } from "../utils/useFetchWithAuth";
import { useAuthStore } from "../store/authStore";

const API_URL = import.meta.env.VITE_API_URL;

export const ZealyRepository = {
  async syncZealyPoints() {
    const token = useAuthStore.getState().token;

    if (!token) {
      throw new Error("User is not authenticated");
    }

    const res = await fetchWithAuth(`${API_URL}/zealy/sync-points`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!res.ok) {
      let errorMessage = "Zealy sync failed";
      try {
        const error = await res.json();
        errorMessage = error.message || errorMessage;
      } catch {
        // no json body
      }
      throw new Error(errorMessage);
    }

    return await res.json();
  },
};
