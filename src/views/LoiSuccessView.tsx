import { useParams } from "react-router-dom";

const LoiSuccessView = () => {
  const { id } = useParams();

  return (
    <div className="text-white text-center mt-32 px-4">
      <h1 className="text-4xl font-bold text-[#00FEFB]">Thank You!</h1>
      <p className="mt-4 text-lg">
        Your Letter of Intent has been submitted successfully.
      </p>

      {id && (
        <a
          href={`${import.meta.env.VITE_API_URL}/loi/${id}/download`}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-6 bg-[#71FFFF] text-[#001A22] font-bold py-3 px-6 rounded-xl hover:bg-[#00FEFB] transition"
        >
          Download your LOI PDF
        </a>
      )}
    </div>
  );
};

export default LoiSuccessView;
