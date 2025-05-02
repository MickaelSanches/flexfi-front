import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="px-6 py-6 md:px-16 lg:px-24 xl:px-40 flex items-center justify-between relative font-days-one">
        <Link to="/" aria-label="Go to homepage">
          <img
            className="h-10 lg:h-16 cursor-pointer transition-transform duration-300 hover:scale-105"
            src="/logo/flexfi-logo.webp"
            alt="FlexFi logo"
          />
        </Link>

        <div className="md:hidden absolute left-1/2 transform -translate-x-1/2">
          <Link
            to="/waitlist"
            className="text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 text-white hover:bg-[#00FEFB] hover:text-black transition duration-300 ml-10"
          >
            Join Waitlist
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-4 text-white text-sm font-semibold">
          <Link
            to="/customers"
            className="hover:text-[#00FEFB] transition-colors duration-300"
          >
            Customers
          </Link>
          <span className="text-[#00FEFB]">|</span>
          <Link
            to="/merchants"
            className="hover:text-[#00FEFB] transition-colors duration-300"
          >
            Merchants
          </Link>
        </div>

        <div className="hidden md:flex items-center gap-6 text-white">
          <Link
            to="/about"
            className="text-sm hover:text-[#00FEFB] transition-colors duration-300"
          >
            About Us
          </Link>

          <Link
            to="/waitlist"
            className="text-sm rounded-2xl border border-[#00FEFB] px-4 py-2 hover:bg-[#00FEFB] hover:text-black transition duration-300"
          >
            Join Waitlist
          </Link>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden w-full bg-[#0C1D26] z-50 flex flex-col items-center gap-6 py-6 text-white text-sm font-semibold">
          <Link to="/customers" onClick={() => setIsOpen(false)}>
            Customers
          </Link>
          <Link to="/merchants" onClick={() => setIsOpen(false)}>
            Merchants
          </Link>
          <Link to="/about" onClick={() => setIsOpen(false)}>
            About Us
          </Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
