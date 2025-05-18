// src/pages/ZealyCallback.tsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

const ZealyCallback = () => {
  const [params] = useSearchParams();
  const navigate = useNavigate();
  const updateUser = useAuthStore((s) => s.updateUser);

  useEffect(() => {
    const status = params.get("status");
    const zealyPoints = params.get("zealy_points");
    const totalPoints = params.get("total_points");
    const message = params.get("message");

    if (status === "success") {
      updateUser({
        flexpoints_zealy: Number(zealyPoints),
        flexpoints_total: Number(totalPoints),
        zealyConnected: true,
      });

      // ✅ Optionnel : afficher un toast de succès
      console.log("✅ Zealy connected!");
      navigate("/dashboard?zealy=connected");
    } else {
      console.error("❌ Zealy connection failed:", message);
      navigate("/dashboard?zealy=error");
    }
  }, []);

  return (
    <div className="flex items-center justify-center h-screen text-white">
      <p>Connecting your Zealy account...</p>
    </div>
  );
};

export default ZealyCallback;
