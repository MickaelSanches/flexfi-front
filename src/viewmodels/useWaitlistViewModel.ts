import { useEffect, useRef, useState } from "react";
import { waitlistRepository } from "../repository/waitlistRepository";

type Country = {
  name: string;
  states: { name: string }[];
};

const initialFormData = {
  email: "",
  firstName: "",
  phoneNumber: "",
  telegramOrDiscordId: "",
  preferredLanguage: "",
  country: "",
  stateProvince: "",
  ageGroup: "",
  employmentStatus: "",
  monthlyIncome: "",
  educationLevel: "",
  hasCreditCard: false,
  bnplServices: [] as string[],
  avgOnlineSpend: "",
  cryptoLevel: "",
  walletType: "",
  portfolioSize: "",
  favoriteChains: [] as string[],
  publicWallet: "",
  mainReason: "",
  firstPurchase: "",
  referralCodeUsed: "",
  userReferralCode: "",
  utmSource: "",
  utmMedium: "",
  utmCampaign: "",
  landingVariant: "",
  timeToCompletionSeconds: 0,
  consentMarketing: false,
  consentAdult: false,
  consent_data_sharing: false,
  consent_data_sharing_date: new Date().toISOString(),
  experienceBnplRating: 0,
};

export const useWaitlistViewModel = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<{ name: string }[]>([]);
  const [step, setStep] = useState(1);
  const [invalidFields, setInvalidFields] = useState<string[]>([]);

  const startTime = useRef(Date.now());

  useEffect(() => {
    fetch("https://countriesnow.space/api/v0.1/countries/states")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.data);
      });
  }, []);

  useEffect(() => {
    const country = countries.find((c) => c.name === formData.country);
    setStates(country ? country.states : []);
  }, [formData.country, countries]);

  useEffect(() => {
    setFormData((prev) => ({
      ...prev,
      utmSource: "waitlist",
      utmMedium: "form",
      utmCampaign: "launch",
      landingVariant: "v1",
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const target = e.target;
    const { name, value } = target;

    if (target instanceof HTMLInputElement && target.type === "checkbox") {
      if (name === "bnplServices") {
        setFormData((prev) => ({
          ...prev,
          bnplServices: target.checked
            ? [...prev.bnplServices, value]
            : prev.bnplServices.filter((s) => s !== value),
        }));
      } else if (name === "favoriteChains") {
        setFormData((prev) => ({
          ...prev,
          favoriteChains: target.checked
            ? [...prev.favoriteChains, value]
            : prev.favoriteChains.filter((c) => c !== value),
        }));
      } else {
        setFormData((prev) => ({ ...prev, [name]: target.checked }));
      }
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]:
          name === "experienceBnplRating"
            ? Number(value)
            : value === "Yes"
            ? true
            : value === "No"
            ? false
            : value,
      }));
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value === "Yes",
    }));
  };

  const validateStep = (step: number): boolean => {
    let requiredFields: string[] = [];

    if (step === 1) {
      requiredFields = [
        "email",
        "firstName",
        "country",
        "stateProvince",
        "preferredLanguage",
      ];

      if (formData.phoneNumber && !/^\+\d{6,15}$/.test(formData.phoneNumber)) {
        setError(
          "Please enter a valid phone number with international code (e.g. +33612345678)"
        );
        setInvalidFields(["phoneNumber"]);
        return false;
      }
    } else if (step === 2) {
      requiredFields = [
        "ageGroup",
        "employmentStatus",
        "monthlyIncome",
        "educationLevel",

        "avgOnlineSpend",
        "mainReason",
      ];
    } else if (step === 3) {
      requiredFields = [
        "cryptoLevel",
        "walletType",
        "portfolioSize",
        "experienceBnplRating",
      ];
    }

    const invalids = requiredFields.filter(
      (field) => !formData[field as keyof typeof formData]
    );

    setInvalidFields(invalids);

    if (invalids.length > 0) {
      setError("Please fill in all required fields.");
      return false;
    }

    setError("");
    return true;
  };

  const nextStep = () => {
    if (validateStep(step)) {
      setStep((prev) => prev + 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateStep(step)) {
      return;
    }

    const { consentMarketing, consentAdult, consent_data_sharing } = formData;
    if (!consentMarketing || !consentAdult || !consent_data_sharing) {
      setError("Please accept all required consents to proceed.");
      return;
    }

    const submissionData = {
      ...formData,

      timeToCompletionSeconds: Math.floor(
        (Date.now() - startTime.current) / 1000
      ),
      consent_data_sharing_date: new Date().toISOString(),
    };

    console.log("Submitting form data:", submissionData);

    try {
      await waitlistRepository.submit(submissionData);
      alert("Submission successful!");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "Something went wrong.");
      alert(err.message || "Something went wrong.");
    }
  };

  return {
    formData,
    setFormData,
    countries,
    states,
    step,
    setStep,
    handleChange,
    handleRadioChange,
    nextStep,
    handleSubmit,
    error,
    invalidFields,
  };
};
