import { Link } from "react-router-dom";

const BecomePartner = () => {
  return (
    <Link to="/letter-of-intent">
      <button id="btn-become-partner" className="text-[#001A22] font-bold rounded-2xl border border-[#001A22] px-5 py-3 cursor-pointer hover:bg-[#001A22] hover:text-white transition duration-300 text-sm">
        Become a Partner
      </button>
    </Link>
  );
};

export default BecomePartner;