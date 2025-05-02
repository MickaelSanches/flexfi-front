import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authRepository } from "../repository/authRepository";

interface LoginFormProps {
  setIsConnected: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginView = ({ setIsConnected }: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await authRepository.login(email, password);
      setIsConnected(true);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message || "Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center px-4 mb-20 mt-20">
      <form
        onSubmit={handleLogin}
        className="bg-[#0C1D26] text-white p-8 rounded-2xl w-full max-w-md shadow-xl border border-cyan-500/20"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300 font-days-one">
          Welcome Back
        </h2>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">Email</span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">Password</span>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="********"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginView;
