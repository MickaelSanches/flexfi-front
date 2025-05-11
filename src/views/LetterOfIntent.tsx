import { Player } from "@lottiefiles/react-lottie-player";
import { useLoiViewModel } from "../viewmodels/useLoiViewModel";
import SignatureCanvas from "react-signature-canvas";
import { useRef } from "react";

const LOI = () => {
  const { formData, handleChange, handleSubmit, invalidFields, error, loader } =
    useLoiViewModel();

  const sigCanvas = useRef<SignatureCanvas>(null);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const signature =
      sigCanvas.current?.getCanvas().toDataURL("image/png") || "";
    handleSubmit(signature);
  };

  return (
    <main className="min-h-screen text-white flex flex-col items-start px-6 py-6 md:px-16 lg:px-24 xl:px-50">
      <div className="text-start mt-20 mb-20">
        <h1 className="text-3xl md:text-5xl font-bold flex items-center gap-3">
          Sign the <span className="text-[#00FEFB]">FlexFi LOI</span>
          <Player
            autoplay
            loop
            src="/lotties/sign.json"
            className="h-10 w-10 md:h-30 md:w-30"
          />
        </h1>
        <p className="text-gray-300 max-w-xl text-sm md:text-base">
          Become a pioneer partner and help shape the future of crypto-native
          payments.
        </p>
      </div>

      <div className="bg-[#0C1D26] p-8 rounded-2xl shadow-lg w-full max-w-2xl space-y-6 mx-auto">
        <form className="flex flex-col gap-6" onSubmit={onSubmit}>
          {[
            { name: "fullName", label: "Full Name *" },
            { name: "company", label: "Company Name *" },
            { name: "email", label: "Email *", type: "email" },
            { name: "country", label: "Country *" },
            { name: "sector", label: "Business Sector *" },
          ].map(({ name, label, type }) => (
            <div key={name} className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-[#00FEFB]">
                {label}
              </label>
              <input
                type={type || "text"}
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                required
                className={`p-3 rounded-lg text-black ${
                  invalidFields.includes(name) ? "bg-red-200" : "bg-white"
                }`}
              />
            </div>
          ))}

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#00FEFB]">
              Additional Notes (Optional)
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              className="p-3 rounded-lg text-black bg-white"
              rows={3}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-semibold text-[#00FEFB]">
              Signature *
            </label>
            <SignatureCanvas
              ref={sigCanvas}
              penColor="#00FEFB"
              canvasProps={{
                width: 500,
                height: 200,
                className: "bg-white rounded-lg",
              }}
            />
            <button
              type="button"
              onClick={() => sigCanvas.current?.clear()}
              className="text-xs underline text-[#00FEFB] mt-2"
            >
              Clear signature
            </button>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            id="btn-submit-loi"
            type="submit"
            className="mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 rounded-xl hover:bg-[#00FEFB] transition duration-300"
          >
            {loader ? "Submitting..." : "Submit LOI"}
          </button>
        </form>
      </div>
    </main>
  );
};

export default LOI;
