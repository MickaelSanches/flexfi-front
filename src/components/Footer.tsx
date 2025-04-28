// components/Footer.tsx
import { FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { BiMessageRounded } from "react-icons/bi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#07171C] text-white pt-12 pb-6 px-6 md:px-20 text-sm font-light border-t border-[#00FEFB33]">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div className="md:w-1/3">
          <img
            className="h-10 lg:h-20"
            src="/logo/flexfi-logo.webp"
            alt="logo flexfi"
          />
          <p className="mb-6 text-[#E0E0E0]">
            The future of crypto payments. Buy now, pay later with your digital
            assets.
          </p>
          <div className="flex gap-4 text-[#00FEFBCC] text-xl">
            <FaLinkedinIn className="cursor-pointer hover:text-white" />
            <FaTwitter className="cursor-pointer hover:text-white" />
            <BiMessageRounded className="cursor-pointer hover:text-white" />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="text-[#E0E0E0] space-y-2">
              <li className="cursor-pointer hover:text-[#00FEFBCC]">
                How it Works
              </li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">
                Features
              </li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">
                Merchant Solutions
              </li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">Roadmap</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="text-[#E0E0E0] space-y-2">
              <li className="cursor-pointer hover:text-[#00FEFBCC]">
                About Us
              </li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">Careers</li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">Press</li>
              <li className="cursor-pointer hover:text-[#00FEFBCC]">Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4">Join the Waitlist</h4>
            <p className="text-[#E0E0E0] mb-4">
              Be the first to access FlexFi when we launch. Early adopters get
              premium benefits.
            </p>
            <Link to="/waitlist">
              <button className="rounded-2xl border border-[#00FEFB] px-4 py-2 cursor-pointer hover:bg-[#00FEFB] hover:text-black transition duration-300">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00FEFB33] mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#B0B0B0]">
        <p>© 2025 FlexFi. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a className="cursor-pointer" href="#">
            Privacy Policy
          </a>
          <a className="cursor-pointer" href="#">
            Terms of Service
          </a>
          <a className="cursor-pointer" href="#">
            Legal
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
