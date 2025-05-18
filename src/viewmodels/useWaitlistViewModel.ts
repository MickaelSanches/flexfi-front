import { useState, useEffect, useRef, useCallback } from "react";
import { WaitlistFormData } from "../@types/waitlist";
import { waitlistRepository } from "../repository/waitlistRepository";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";

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
  consent_data_sharing_date: new Date().toISOString(),
  consentMarketing: false,
  signupTimestamp: new Date().toISOString(),
};

export const useWaitlistViewModel = () => {
  const user = useAuthStore((state) => state.user);

  const [formData, setFormData] = useState<WaitlistFormData>({
    ...initialFormData,
    email: user?.email || "",
  });
  const [step, setStep] = useState<number>(1);
  const [error, setError] = useState<string>("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [countries, setCountries] = useState<
    { name: string; states: { name: string }[] }[]
  >([]);
  const [states, setStates] = useState<{ name: string }[]>([]);
  const [referralCode, setReferralCode] = useState<string | null>(null);
  const startTime = useRef<number>(Date.now());

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => setCountries(data.data))
      .catch(() => {});
  }, []);

  useEffect(() => {
    const countryObj = countries.find((c) => c.name === formData.country);
    setStates(countryObj ? countryObj.states : []);
    setFormData((prev) => ({ ...prev, stateProvince: "" }));
  }, [formData.country, countries]);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, type, value, checked } = e.target as HTMLInputElement;
      setFormData((prev) => {
        if (type === "checkbox") {
          if (name === "bnplServices") {
            const arr = prev.bnplServices;
            return {
              ...prev,
              bnplServices: checked
                ? [...arr, value]
                : arr.filter((v) => v !== value),
            };
          }
          if (name === "favoriteChains") {
            const arr = prev.favoriteChains;
            return {
              ...prev,
              favoriteChains: checked
                ? [...arr, value]
                : arr.filter((v) => v !== value),
            };
          }
          return { ...prev, [name]: checked };
        }
        if (type === "radio") {
          return { ...prev, [name]: value === "Yes" };
        }
        if (name === "experienceBnplRating") {
          return { ...prev, experienceBnplRating: Number(value) };
        }
        if (
          [
            "phoneNumber",
            "telegramOrDiscordId",
            "firstPurchase",
            "publicWallet",
          ].includes(name)
        ) {
          return { ...prev, [name]: value || undefined };
        }
        return { ...prev, [name]: value };
      });
    },
    []
  );

  const handleRadioChange = useCallback(
    (name: keyof WaitlistFormData, value: string) => {
      setFormData((prev) => ({ ...prev, [name]: value === "Yes" }));
    },
    []
  );

  const validateStep = useCallback(
    (currentStep: number): boolean => {
      let required: (keyof WaitlistFormData)[] = [];

      if (currentStep === 1) {
        required = ["preferredLanguage", "country", "stateProvince"];
        if (
          formData.phoneNumber &&
          !/^\+\d{6,15}$/.test(formData.phoneNumber)
        ) {
          setError(
            "Invalid phone number format. Use international format with country code."
          );
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
        if (formData.bnplServices.length === 0) {
          setError("Please select at least one BNPL service.");
          setInvalidFields(["bnplServices"]);
          return false;
        }
      } else if (currentStep === 3) {
        required = ["cryptoLevel", "walletType", "portfolioSize"];
        if (formData.favoriteChains.length === 0) {
          setError("Please select at least one favorite blockchain.");
          setInvalidFields(["favoriteChains"]);
          return false;
        }
        if (!formData.experienceBnplRating) {
          setError("Please rate your BNPL experience.");
          setInvalidFields(["experienceBnplRating"]);
          return false;
        }
      }

      const missing = required.filter((field) => !formData[field]);
      if (missing.length) {
        setInvalidFields(missing as string[]);
        setError("Please complete all required fields.");
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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!validateStep(step)) return;

      const { consentMarketing, consentAdult, consent_data_sharing } = formData;
      if (!consentMarketing || !consentAdult || !consent_data_sharing) {
        setError("Please accept all required consents");
        return;
      }


      if (!user?.email) {

        setError("Missing email. Please log in again.");
        return;
      }

      const submission: WaitlistFormData = Object.fromEntries(
        Object.entries({
          ...formData,

          email: user.email,

          timeToCompletionSeconds: Math.floor(
            (Date.now() - startTime.current) / 1000
          ),
          consent_data_sharing_date: new Date().toISOString(),
          signupTimestamp: new Date().toISOString(),
        }).filter(([, v]) => v !== undefined)

      ) as unknown as WaitlistFormData;


      try {
        const res = await waitlistRepository.submit(submission);
        if (res.data.userReferralCode)
          setReferralCode(res.data.userReferralCode);


        if (user) {
          useAuthStore.getState().updateUser({ formFullfilled: true });

        }
        navigate("/dashboard");
      } catch (err: any) {
        setError(err.message || "Submission failed");
      }
    },
    [formData, step, validateStep, user]
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
