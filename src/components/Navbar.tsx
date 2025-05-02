import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, LogOut } from "lucide-react";
import { authRepository } from "../repository/authRepository";

interface NavbarProps {
  isConnected?: boolean;
  setIsConnected?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isConnected, setIsConnected }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    authRepository.logout();
    setIsConnected?.(false);
    navigate("/");
  };

  return (
    <>
      <nav className="px-6 py-6 md:px-16 lg:px-24 xl:px-40 flex items-center justify-between relative font-days-one">
        <Link to="/" aria-label="Go to homepage">
          <img
            src="/logo/flexfi-logo.webp"
            alt="FlexFi logo"
            className="h-10 lg:h-16 cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </Link>

        {/* CENTRE - CTA mobile */}
        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          {isConnected ? (
            <Link
              to="/dashboard"
              className="text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 text-white hover:bg-[#00FEFB] hover:text-black transition duration-300"
            >
              Dashboard
            </Link>
          ) : (
            <Link
              to="/waitlist"
              className=" ml-10 text-white text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 hover:bg-[#00FEFB] hover:text-black transition duration-300"
            >
              Join Waitlist
            </Link>
          )}
        </div>

        {/* LINKS - Left */}
        <div className="hidden md:flex items-center gap-4 text-white text-sm font-semibold">
          <Link
            to="/customers"
            className="hover:text-[#00FEFB] transition-colors"
          >
            Customers
          </Link>
          <span className="text-[#00FEFB]">|</span>
          <Link
            to="/merchants"
            className="hover:text-[#00FEFB] transition-colors"
          >
            Merchants
          </Link>
        </div>

        {/* CTA - Right */}
        <div className="hidden md:flex items-center gap-4 text-white">
          <Link
            to="/about"
            className="text-sm hover:text-[#00FEFB] transition-colors"
          >
            About Us
          </Link>

          {isConnected ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 hover:bg-[#00FEFB] hover:text-black transition duration-300"
              >
                Dashboard
              </Link>
              <button
                onClick={handleLogout}
                className="cursor-pointer flex items-center gap-2 text-sm rounded-2xl border border-red-500 px-4 py-2 text-red-400 hover:bg-red-500 hover:text-white transition duration-300"
              >
                <LogOut size={16} />
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="text-sm text-white hover:text-[#00FEFB] transition duration-300"
              >
                Login
              </Link>
              <Link
                to="/waitlist"
                className="text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 hover:bg-[#00FEFB] hover:text-black transition duration-300"
              >
                Join Waitlist
              </Link>
            </>
          )}
        </div>

        {/* Burger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden w-full bg-[#0C1D26] z-50 flex flex-col items-center gap-6 py-6 text-white text-sm font-semibold">
          {!isConnected && (
            <Link to="/login" onClick={() => setIsOpen(false)}>
              Login
            </Link>
          )}
          <Link to="/customers" onClick={() => setIsOpen(false)}>
            Customers
          </Link>
          <Link to="/merchants" onClick={() => setIsOpen(false)}>
            Merchants
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
          <Link to="/howitworks" onClick={() => setIsOpen(false)}>
            How it Works
          </Link>
          <Link to="/roadmap" onClick={() => setIsOpen(false)}>
            Roadmap
          </Link>
          <Link to="/team" onClick={() => setIsOpen(false)}>
            Team
          </Link>

          {isConnected ? (
            <>
              <Link to="/dashboard" onClick={() => setIsOpen(false)}>
                Dashboard
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="text-red-400 hover:text-white transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/waitlist" onClick={() => setIsOpen(false)}>
                Join Waitlist
              </Link>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
