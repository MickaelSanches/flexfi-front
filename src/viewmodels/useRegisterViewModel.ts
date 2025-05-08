import { useState } from "react";
import { isPasswordStrong } from "../utils/validators";
import { authRepository } from "../repository/authRepository";

export const useRegisterViewModel = () => {
  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    password: "",
    confirmPassword: "",
    referralCodeUsed: "",
    consentMarketing: false,
    consent_data_sharing: false,
  });

  const [code, setCode] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [step, setStep] = useState<"form" | "verify" | "done">("form");
  const [isEmailVerified, setIsEmailVerified] = useState(false);

  // Handle form input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  // Validate form fields before sending email code
  const validateForm = (): boolean => {
    if (
      !form.email ||
      !form.firstName ||
      !form.lastName ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all required fields.");
      return false;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return false;
    }

    if (!isPasswordStrong(form.password)) {
      setError(
        "Password must be at least 12 characters long and include uppercase, lowercase, a number, and a special character."
      );
      return false;
    }

    if (!form.consentMarketing || !form.consent_data_sharing) {
      setError("Please accept all required consents.");
      return false;
    }

    setError(null);
    return true;
  };

  // Send verification code to the user's email
  const sendVerificationCode = async (): Promise<boolean> => {
    try {
      await authRepository.sendVerificationCode(form.email);
      setStep("verify");
      return true;
    } catch (err: any) {
      setError(err.message || "Failed to send verification code.");
      return false;
    }
  };

  // Verify the code entered by the user
  const verifyCode = async (): Promise<boolean> => {
    try {
      await authRepository.verifyEmailCode(form.email, code);
      setIsEmailVerified(true);
      return true;
    } catch (err: any) {
      const msg = err.message?.toLowerCase();

      if (msg.includes("expired")) {
        setError("Your code has expired. Please request a new one.");
      } else if (msg.includes("used")) {
        setError("This code has already been used.");
      } else {
        setError(err.message || "Invalid verification code.");
      }

      return false;
    }
  };

  // Register the user only if email has been verified
  const registerUser = async (): Promise<boolean> => {
    if (!isEmailVerified) {
      setError("Please verify your email before registering.");
      return false;
    }

    try {
      await authRepository.register({
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
        referralCodeUsed: form.referralCodeUsed,
      });

      setStep("done");
      return true;
    } catch (err: any) {
      setError(err.message || "Registration failed.");
      return false;
    }
  };

  return {
    form,
    code,
    step,
    error,
    isEmailVerified,
    setCode,
    handleChange,
    validateForm,
    sendVerificationCode,
    verifyCode,
    registerUser,
  };
};
