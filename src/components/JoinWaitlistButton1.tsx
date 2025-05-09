import { Link } from "react-router-dom";

const JoinWaitlistButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <Link to="/register">
      <button
      onClick={onClick}
      id="btn-join-waitlist"
      className="text-white font-bold rounded-2xl border border-[#00FEFB] px-5 py-3 cursor-pointer hover:bg-[#001A22] hover:text-[#00FEFB] transition duration-300 text-sm">
        Join Waitlist
      </button>
    </Link>
  );
};

export default JoinWaitlistButton;
