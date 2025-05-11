import { clearStorage } from "./storage";
import { useAuthStore } from "../store/authStore"; // ou passe via paramètre

export const fetchWithAuth = async (
  input: RequestInfo,
  init: RequestInit = {}
): Promise<Response> => {
  const token = useAuthStore.getState().token;

  const res = await fetch(input, {
    ...init,
    headers: {
      ...(init.headers || {}),
      Authorization: token ? `Bearer ${token}` : "",
      "Content-Type": "application/json",
    },
  });

  if (res.status === 401 || res.status === 403) {
    clearStorage();
    window.location.href = "/login";
  }

  return res;
};
