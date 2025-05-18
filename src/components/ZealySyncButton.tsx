import { useState } from "react";
import { ZealyRepository } from "../repository/zealyRepository";
import { authRepository } from "../repository/authRepository";
import { useDashboardViewModel } from "../viewmodels/useDashboardViewModel";
import { useAuthStore } from "../store/authStore";

export function ZealySyncButton() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const setPoints = useAuthStore((s) => s.setPoints);

  const handleSync = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await ZealyRepository.syncZealyPoints();
      console.log("Sync successful:", res);
      const userPoints = await authRepository.getCurrentUserPoints();
      setPoints(userPoints.data.points);
      setSuccess(true);
      // Optionally trigger a UI update / refetch user data
    } catch (err: any) {
      console.error("Sync error:", err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      onClick={handleSync}
      disabled={loading}
      className="cursor-pointer flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-purple-700/40"
    >
      <img
        src="/logo/zealy.svg"
        alt="Zealy Logo"
        className="w-6 h-6 object-contain p-1 rounded-full bg-white"
      />
      {loading ? "Syncing..." : success ? "Synced" : "Sync Zealy Points"}
    </button>
  );
}
