import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="px-6 lg:px-50 py-6 flex items-center justify-between ">
      <Link to="/">
        <img
          className="h-10 lg:h-16 cursor-pointer transition-transform duration-300 hover:scale-105"
          src="/logo/flexfi-logo.webp"
          alt="FlexFi logo"
        />
      </Link>

      <div className="hidden md:flex items-center gap-3 text-white text-sm font-semibold">
        <a
          href="#customers"
          className="hover:text-[#00FEFB] transition-colors duration-300"
        >
          Customers
        </a>
        <span className="text-[#00FEFB]">|</span>
        <Link to="merchants">
          <a
            href="#merchants"
            className="hover:text-[#00FEFB] transition-colors duration-300"
          >
            Merchants
          </a>
        </Link>
      </div>

      <ul className="flex items-center gap-6 text-white">
        <Link to="/about">
          <li className="text-sm hover:text-[#00FEFB] transition-colors duration-300 cursor-pointer">
            About Us
          </li>
        </Link>
        <Link
          to="/waitlist"
          className="rounded-2xl border border-[#00FEFB] px-4 py-2 cursor-pointer hover:bg-[#00FEFB] hover:text-black transition duration-300 text-sm"
        >
          Join Waitlist
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
