import { useState } from "react";
import { useRegisterViewModel } from "../viewmodels/useRegisterViewModel";
import {
  HiOutlineSparkles,
  HiOutlineUserAdd,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { TbTargetArrow } from "react-icons/tb";
import ParticipationInfo from "./ParticipationInfo";

interface RegisterFormProps {
  setIsRegistered: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterForm = ({ setIsRegistered }: RegisterFormProps) => {
  const { form, error, handleChange, validateForm, registerUser } =
    useRegisterViewModel();
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const registered = await registerUser();
      if (registered) setIsRegistered(true);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center px-4 mb-20 mt-20">
        <form
          onSubmit={handleSubmit}
          className="bg-[#0C1D26] text-white p-8 rounded-2xl w-full max-w-md shadow-xl border border-cyan-500/20"
        >
          <h2 className="text-2xl font-bold mb-6 text-center text-cyan-300 font-days-one">
            Create your account
          </h2>

          <div className="flex flex-col gap-4">
            {[
              {
                label: "Email *",
                name: "email",
                type: "email",
                placeholder: "you@example.com",
                required: true,
              },
              {
                label: "First Name *",
                name: "firstName",
                type: "text",
                placeholder: "Your name or @handle",
                required: true,
              },
              {
                label: "Last Name *",
                name: "lastName",
                type: "text",
                placeholder: "Your name or @handle",
                required: true,
              },
              {
                label: "Referral Code (optional)",
                name: "referralCodeUsed",
                type: "text",
                placeholder: "Referral code",
              },
              {
                label: "Password *",
                name: "password",
                type: "password",
                placeholder: "********",
                required: true,
              },
              {
                label: "Confirm Password *",
                name: "confirmPassword",
                type: "password",
                placeholder: "********",
                required: true,
              },
            ].map(({ label, name, ...rest }) => (
              <label key={name} className="flex flex-col gap-1 text-sm">
                <span className="text-cyan-300 font-semibold">{label}</span>
                <input
                  name={name}
                  value={(form as any)[name]}
                  onChange={handleChange}
                  className="p-3 rounded-lg bg-white text-black placeholder-gray-400"
                  {...rest}
                />
              </label>
            ))}

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
          </div>

          {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

          <div className="bg-[#112B36] border border-cyan-500/30 rounded-lg p-4 text-sm text-white/90 mt-4">
            <p className="mb-2 font-semibold text-cyan-400 flex items-center gap-2">
              <TbTargetArrow className="text-lg" /> Earn FlexPoints by:
            </p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li className="flex items-center gap-2">
                <HiOutlineUserAdd /> Inviting friends with your referral code
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineClipboardList /> Completing your founder profile
              </li>
              <li className="flex items-center gap-2">
                <HiOutlineSparkles /> Joining campaigns
              </li>
            </ul>
            <button
              onClick={() => setShowModal(true)}
              type="button"
              className="cursor-pointer mt-3 text-xs underline text-[#71FFFF] hover:text-white"
            >
              See more about the contest
            </button>
          </div>

          <button
            type="submit"
            className="cursor-pointer mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 px-2 rounded-xl hover:bg-[#00FEFB] transition duration-300"
          >
            Create My Account
          </button>
        </form>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#0F1E29] rounded-2xl shadow-lg w-full max-w-3xl p-6 relative h-full sm:h-auto overflow-y-auto">
            <button
              onClick={() => setShowModal(false)}
              className="cursor-pointer absolute top-3 right-4 text-gray-300 hover:text-white text-2xl"
            >
              &times;
            </button>
            <ParticipationInfo />
          </div>
        </div>
      )}
    </>
  );
};

export default RegisterForm;
