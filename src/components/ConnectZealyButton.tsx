import { useAuthStore } from "../store/authStore";

export function ConnectZealyButton() {
  const token = useAuthStore((s) => s.token);

  const handleRedirect = () => {
    const baseUrl = import.meta.env.VITE_API_URL;
    const redirectUrl = `${baseUrl}/zealy/connect?token=${token}`;
    window.location.href = redirectUrl;
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
