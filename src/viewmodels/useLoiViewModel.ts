import { useState } from "react";

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
    if (!validate()) return;

    const submissionData = {
      ...formData,
      signature: signatureBase64,
      submittedAt: new Date().toISOString(),
    };

    // TODO: Send to backend or email or generate PDF
  };

  return {
    formData,
    setFormData,
    handleChange,
    handleSubmit,
    invalidFields,
    error,
  };
};
