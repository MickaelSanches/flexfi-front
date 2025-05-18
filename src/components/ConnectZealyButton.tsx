import { useAuthStore } from "../store/authStore";

export function ConnectZealyButton() {
  const token = useAuthStore((s) => s.token);
  const user = useAuthStore((s) => s.user);
  const setUser = useAuthStore((s) => s.setUser);

  const handleRedirect = async () => {
    const API_URL = import.meta.env.VITE_API_URL;

    try {
      const res = await fetch(`${API_URL}/zealy/connect`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        credentials: "include",
      });

      const data = await res.json();

      if (data.status === "success") {
        if (user && user._id) {
          setUser({
            ...user,
            zealy_id: data.zealy_id,
          });
        }

        const params = new URLSearchParams({
          status: "success",
          zealy_points: data.zealy_points.toString(),
          total_points: data.total_points.toString(),
        });
        window.location.href = `/dashboard?${params.toString()}`;
      } else {
        alert(data.message || "Une erreur est survenue");
      }
    } catch (err) {
      console.error("Zealy connection error:", err);
      alert("Erreur lors de la connexion à Zealy");
    }
  };

  return (
    <button
      onClick={handleRedirect}
      className="cursor-pointer flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white font-bold px-5 py-2.5 rounded-full transition-all shadow-lg hover:shadow-purple-700/40"
    >
      <img
        src="/logo/zealy.svg"
        alt="Zealy Logo"
        className="w-6 h-6 object-contain p-1 rounded-full bg-white"
      />
      Connect Zealy
    </button>
  );
}
