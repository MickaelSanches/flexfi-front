// src/viewmodels/useWaitlistViewModel.ts
import { useState, useEffect, useRef, useCallback } from "react";
import { WaitlistFormData } from "../@types/waitlist";
import { waitlistRepository } from "../repository/waitlistRepository";

const initialFormData: WaitlistFormData = {
  email: "",
  phoneNumber: undefined,
  telegramOrDiscordId: undefined,
  preferredLanguage: "",
  country: "",
  stateProvince: "",
  ageGroup: "",
  employmentStatus: "",
  monthlyIncome: "",
  educationLevel: "",
  hasCreditCard: false,
  bnplServices: [],
  avgOnlineSpend: "",
  cryptoLevel: "",
  walletType: "",
  portfolioSize: "",
  favoriteChains: [],
  publicWallet: undefined,
  mainReason: "",
  firstPurchase: undefined,
  utmSource: "waitlist",
  utmMedium: "form",
  utmCampaign: "launch",
  timeToCompletionSeconds: 0,
  experienceBnplRating: 0,
  consentAdult: false,
  consent_data_sharing: false,
  consent_data_sharing_date: new Date(),
  consentMarketing: false,
  signupTimeStamp: new Date(),
};

export const useWaitlistViewModel = () => {
  const [formData, setFormData] = useState<WaitlistFormData>(initialFormData);
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [countries, setCountries] = useState<
    { name: string; states: { name: string }[] }[]
  >([]);
  const [states, setStates] = useState<{ name: string }[]>([]);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const startTime = useRef<number>(Date.now());

  // Charger la liste des pays et états
  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch(() => {});
  }, []);

  // Mettre à jour les états/provinces quand le pays change
  useEffect(() => {
    const countryObj = countries.find((c) => c.name === formData.country);
    setStates(countryObj ? countryObj.states : []);
    setFormData((prev) => ({ ...prev, stateProvince: "" }));
  }, [formData.country, countries]);

  // Gestion des changements de champ
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, type, value, checked } = e.target as HTMLInputElement;
      setFormData((prev) => {
        // Checkbox pour tableaux
        if (type === "checkbox") {
          if (name === "bnplServices") {
            const arr = prev.bnplServices;
            return {
              ...prev,
              bnplServices: checked
                ? [...arr, value]
                : arr.filter((v) => v !== value),
            } as WaitlistFormData;
          }
          if (name === "favoriteChains") {
            const arr = prev.favoriteChains;
            return {
              ...prev,
              favoriteChains: checked
                ? [...arr, value]
                : arr.filter((v) => v !== value),
            } as WaitlistFormData;
          }
          // Booleans
          return { ...prev, [name]: checked } as WaitlistFormData;
        }
        // Radio hasCreditCard
        if (type === "radio") {
          return { ...prev, [name]: value === "Yes" } as WaitlistFormData;
        }
        // Champ numérique
        if (name === "experienceBnplRating") {
          return {
            ...prev,
            experienceBnplRating: Number(value),
          } as WaitlistFormData;
        }
        // Champs optionnels
        if (
          [
            "phoneNumber",
            "telegramOrDiscordId",
            "firstPurchase",
            "publicWallet",
          ].includes(name)
        ) {
          return { ...prev, [name]: value || undefined } as WaitlistFormData;
        }
        // Valeur par défaut
        return { ...prev, [name]: value } as WaitlistFormData;
      });
    },
    []
  );

  const handleRadioChange = useCallback(
    (name: keyof WaitlistFormData, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [name]: value === "Yes",
      }));
    },
    []
  );

  // Validation par étape
  const validateStep = useCallback(
    (currentStep: number): boolean => {
      let required: (keyof WaitlistFormData)[] = [];
      if (currentStep === 1) {
        required = ["email", "preferredLanguage", "country", "stateProvince"];
        if (
          formData.phoneNumber &&
          !/^\+\d{6,15}$/.test(formData.phoneNumber)
        ) {
          setError("Numéro de téléphone invalide");
          setInvalidFields(["phoneNumber"]);
          return false;
        }
      } else if (currentStep === 2) {
        required = [
          "ageGroup",
          "employmentStatus",
          "monthlyIncome",
          "educationLevel",
          "avgOnlineSpend",
          "mainReason",
        ];
      } else if (currentStep === 3) {
        required = [
          "cryptoLevel",
          "walletType",
          "portfolioSize",
          "experienceBnplRating",
        ];
      }
      const missing = required.filter((field) => !formData[field]);
      if (missing.length) {
        setInvalidFields(missing as string[]);
        setError("Merci de compléter tous les champs requis");
        return false;
      }
      setError("");
      setInvalidFields([]);
      return true;
    },
    [formData]
  );

  const nextStep = useCallback(() => {
    if (validateStep(step)) setStep((s) => s + 1);
  }, [step, validateStep]);

  const prevStep = useCallback(() => {
    if (step > 1) setStep((s) => s - 1);
  }, [step]);

  // Soumission finale
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateStep(step)) return;
      const { consentMarketing, consentAdult, consent_data_sharing } = formData;
      if (!consentMarketing || !consentAdult || !consent_data_sharing) {
        setError("Merci d'accepter tous les consentements requis");
        return;
      }
      const submission: WaitlistFormData = {
        ...formData,
        timeToCompletionSeconds: Math.floor(
          (Date.now() - startTime.current) / 1000
        ),
        consent_data_sharing_date: new Date(),
        signupTimeStamp: new Date(),
      };
      try {
        const res = await waitlistRepository.submit(submission);
        if (res.data.userReferralCode)
          setReferralCode(res.data.userReferralCode);
      } catch (err: any) {
        setError(err.message || "Échec de l'envoi");
      }
    },
    [formData, step, validateStep]
  );

  return {
    formData,
    step,
    error,
    invalidFields,
    countries,
    states,
    referralCode,
    handleChange,
    nextStep,
    prevStep,
    handleSubmit,
    handleRadioChange,
  };
};
