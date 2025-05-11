import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LOIRepository } from "../repository/LOIRepository";

const initialFormData = {
  fullName: "",
  company: "",
  email: "",
  country: "",
  sector: "",
  comments: "",
};

export const useLoiViewModel = () => {
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState("");
  const [invalidFields, setInvalidFields] = useState<string[]>([]);
  const [loader, setLoader] = useState(false);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validate = (): boolean => {
    const requiredFields = [
      "fullName",
      "company",
      "email",
      "country",
      "sector",
    ];
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

  const handleSubmit = async (signatureBase64: string) => {
    setLoader(true);
    if (!validate()) {
      setLoader(false);
      return;
    }

    const submissionData = {
      ...formData,
      signature: signatureBase64,
      submittedAt: new Date().toISOString(),
    };

    try {
      const res = await LOIRepository.register(submissionData);
      const loiId = res.id;

      if (loiId) {
        setLoader(false);
        navigate(`/loi-success/${loiId}`);
      }
    } catch (err: any) {
      setLoader(false);
      setError("Failed to submit LOI. Please try again.");
    }
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    invalidFields,
    error,
    loader,
  };
};
