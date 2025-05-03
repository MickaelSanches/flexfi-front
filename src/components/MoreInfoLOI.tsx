import { Link } from "react-router-dom";

const MoreInfoLOI = () => {
  return (
    <Link to="/loi-intro-page">
      <button className="text-[#001A22] font-bold rounded-2xl border border-[#001A22] px-5 py-3 cursor-pointer hover:bg-[#001A22] hover:text-white transition duration-300 text-sm">
        More Info LOI
      </button>
    </Link>
  );
};

export default MoreInfoLOI;