import { useEffect, useRef, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CheckCircle, XCircle, Loader2 } from "lucide-react";
import { useAuthStore } from "../store/authStore";

const ActivateAccount = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [status, setStatus] = useState<"loading" | "success" | "error">(
    "loading"
  );

  const token = useAuthStore((state) => state.token);

  const hasFetched = useRef(false);

  useEffect(() => {
    if (hasFetched.current) return;
    hasFetched.current = true;

    const activationToken = searchParams.get("token");
    const id = searchParams.get("id");

    if (!activationToken || !id) {
      setStatus("error");
      return;
    }

    fetch(
      `${
        import.meta.env.VITE_API_URL
      }/auth/activate?token=${activationToken}&id=${id}`
    )
      .then(async (res) => {
        if (!res.ok) throw new Error("Activation failed");
        try {
          await res.json();
        } catch {}
        setStatus("success");
      })
      .catch((err) => {
        console.error("Activation error:", err);
        setStatus("error");
      });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#0C1D26] px-4 text-white">
      {status === "loading" && (
        <div className="flex flex-col items-center gap-4">
          <Loader2 className="animate-spin w-10 h-10 text-cyan-300" />
          <p className="text-lg">Activating your account...</p>
        </div>
      )}

      {status === "success" && (
        <div className="flex flex-col items-center gap-4 text-center">
          <CheckCircle className="w-10 h-10 text-green-400" />
          <p className="text-xl font-semibold">
            Your account has been activated!
          </p>
          <button
            onClick={() => navigate(token ? "/dashboard" : "/login")}
            className="cursor-pointer mt-4 bg-[#71FFFF] text-[#001A22] font-bold py-2 px-6 rounded-xl hover:bg-[#00FEFB] transition duration-300"
          >
            {token ? "Go to Dashboard" : "Go to Login"}
          </button>
        </div>
      )}

      {status === "error" && (
        <div className="flex flex-col items-center gap-4 text-center">
          <XCircle className="w-10 h-10 text-red-400" />
          <p className="text-xl font-semibold">
            Activation failed. The link may be invalid or expired.
          </p>
        </div>
      )}
    </div>
  );
};

export default ActivateAccount;
