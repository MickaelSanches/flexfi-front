import { useRegisterViewModel } from "../viewmodels/useRegisterViewModel";

interface RegisterFormProps {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm = ({ setIsRegistered }: RegisterFormProps) => {
  const { form, error, handleChange, validateForm, registerUser } =
    useRegisterViewModel();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const result = await registerUser();
      if (result) {
        setIsRegistered(true);
      }
    }
  };

  return (
    <div className="flex items-center justify-center px-4 mb-20 mt-20">
      <form
        onSubmit={handleSubmit}
        className="bg-[#0C1D26] text-white p-8 rounded-2xl w-full max-w-md shadow-xl border border-cyan-500/20"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300 font-days-one">
          Create your account
        </h2>

        <div className="flex flex-col gap-4">
          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">Email *</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">First Name</span>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              placeholder="Your name or @handle"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">Last Name</span>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              placeholder="Your name or @handle"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">
              Referral Code (optional)
            </span>
            <input
              type="text"
              name="referralCodeUsed"
              value={form.referralCodeUsed}
              onChange={handleChange}
              placeholder="Referral code"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">Password *</span>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              placeholder="********"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex flex-col gap-1 text-sm">
            <span className="text-cyan-300 font-semibold">
              Confirm Password *
            </span>
            <input
              type="password"
              name="confirmPassword"
              value={form.confirmPassword}
              onChange={handleChange}
              placeholder="********"
              className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
              required
            />
          </label>

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="consentMarketing"
              checked={form.consentMarketing}
              onChange={handleChange}
              className="w-5 h-5 mt-1"
              required
            />
            I agree to receive marketing emails (GDPR)
          </label>

          <label className="flex items-start gap-2 text-sm">
            <input
              type="checkbox"
              name="consent_data_sharing"
              checked={form.consent_data_sharing}
              onChange={handleChange}
              className="w-5 h-5 mt-1"
              required
            />
            I accept the{" "}
            <a
              href="/privacy-policy"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-[#71FFFF]"
            >
              Privacy Policy
            </a>
          </label>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}

          <button
            type="submit"
            className="mt-4 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
