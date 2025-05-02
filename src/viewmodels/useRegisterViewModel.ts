// src/viewmodels/useRegisterViewModel.ts
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
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const validateForm = (): boolean => {
    if (
      !form.email ||
      !form.firstName ||
      !form.lastName ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Veuillez remplir tous les champs requis.");
      return false;
    }
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return false;
    }
    if (!isPasswordStrong(form.password)) {
      setError(
        "Le mot de passe doit faire au moins 12 caractères et inclure majuscule, minuscule, chiffre et caractère spécial."
      );
      return false;
    }
    if (!form.consentMarketing || !form.consent_data_sharing) {
      setError("Veuillez accepter les consentements requis.");
      return false;
    }
    setError(null);
    return true;
  };

  const registerUser = async (): Promise<boolean> => {
    try {
      await authRepository.register({
        email: form.email,
        password: form.password,
        firstName: form.firstName,
        lastName: form.lastName,
      });
      return true;
    } catch (err: any) {
      setError(err.message);
      return false;
    }
  };

  return {
    form,
    error,
    handleChange,
    validateForm,
    registerUser,
  };
};
