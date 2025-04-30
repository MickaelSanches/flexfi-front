import { useEffect, useState } from "react";
import { waitlistRepository } from "../repository/waitlistRepository";

export const useWaitlistViewModel = () => {
  type Country = {
    name: string;
    states: { name: string }[];
  };

  const [formData, setFormData] = useState({
    email: "",
    name: "",
    country: "",
    state: "",
    language: "",
    mobile: "",
    social: "",
    ageGroup: "",
    employmentStatus: "",
    monthlyIncome: "",
    educationLevel: "",
    bnplServices: [] as string[],
    creditCard: "",
    spendMonthly: "",
    reasonSignUp: "",
    firstPurchase: "",
    cryptoProficiency: "",
    walletType: "",
    favoriteChains: [] as string[],
    walletAddress: "",
    referralCode: "",
    consentMarketing: false,
    consentAge: false,
    consentSharing: false,
  });

  const [error, setError] = useState("");

  const [countries, setCountries] = useState<Country[]>([]);
  const [states, setStates] = useState<{ name: string }[]>([]);
  const [step, setStep] = useState(1);

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
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const nextStep = () => setStep((prev) => prev + 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { consentMarketing, consentAge, consentSharing } = formData;
    if (!consentMarketing || !consentAge || !consentSharing) {
      setError("Please accept all required consents to proceed.");
      return;
    }

    console.log(formData);

    try {
      await waitlistRepository.submit(formData);
      alert("Submission successful!");
    } catch (err: any) {
      console.error(err);
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
  };
};
