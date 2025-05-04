import { Link } from "react-router-dom";

const JoinWaitlistButton = () => {
  return (
    <Link to="/waitlist">
      <button id="btn-join-waitlist" className="text-[#001A22] font-bold rounded-2xl border border-[#001A22] px-5 py-3 cursor-pointer hover:bg-[#001A22] hover:text-white transition duration-300 text-sm">
        Join Waitlist
      </button>
    </Link>
  );
};

export default JoinWaitlistButton;
