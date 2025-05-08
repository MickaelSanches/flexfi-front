// components/Footer.tsx
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#07171C] text-white pt-12 pb-6 px-6 md:px-20 text-sm font-light border-t border-[#00FEFB33]">
      <div className="flex flex-col md:flex-row md:justify-between gap-12">
        <div className="md:w-1/3">
          <img
            loading="lazy"
            className="h-10 lg:h-20"
            src="/logo/flexfi-logo.webp"
            alt="logo flexfi"
          />
          <p className="mb-6 text-[#E0E0E0]">
            The future of crypto payments. Buy now, pay later with your digital
            assets.
          </p>
          <div className="flex gap-4 text-[#00FEFBCC] text-xl items-center">
            <Link
              id="btn-linkedin"
              target="_blank"
              to="https://www.linkedin.com/company/flexfiofficial/posts/?feedView=all"
            >
              <FaLinkedinIn className="cursor-pointer hover:text-white" />
            </Link>
            <Link 
            id="btn-x"
            target="_blank" to="https://x.com/FlexFi_/">
              <FaXTwitter className="cursor-pointer hover:text-white" />
            </Link>
            <a
              id="btn-mail"
              href="mailto:contact@flex-fi.io"
              aria-label="Send an email"
              className="cursor-pointer hover:text-white"
            >
              <IoIosMail className="text-2xl cursor-pointer" />
            </a>

            {/* <BiMessageRounded className="cursor-pointer hover:text-white" /> */}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-12">
        <div>
            <h4 className="text-white font-semibold mb-4 font-days-one text-lg">
              Learn With FlexFi
            </h4>
            <ul className="text-[#E0E0E0] space-y-2 flex flex-col">
              <Link to="/education">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  Education
                </li>
              </Link>
              </ul>
              </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-days-one text-lg">
              Offer
            </h4>
            <ul className="text-[#E0E0E0] space-y-2 flex flex-col">
              <Link to="/why-flexfi">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  Why FlexFi ?
                </li>
              </Link>
              </ul>
              </div>

          <div>
            <h4 className="text-white font-semibold mb-4 font-days-one text-lg">
              Product
            </h4>
            <ul className="text-[#E0E0E0] space-y-2 flex flex-col">
              <Link to="/howitworks">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  How it Works
                </li>
              </Link>
              <Link to="merchants">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  Merchants
                </li>
              </Link>
              <Link to="customers">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  Customers
                </li>
              </Link>

              <Link to="/roadmap">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  Roadmap
                </li>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 font-days-one text-lg">
              Company
            </h4>
            <ul className="text-[#E0E0E0] space-y-2 flex flex-col">
              <Link to="/about">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">
                  About Us
                </li>
              </Link>

              <Link to="/team">
                <li className="cursor-pointer hover:text-[#00FEFBCC]">Team</li>
              </Link>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-semibold mb-4 font-days-one text-lg">
              Join the Waitlist
            </h4>
            <p className="text-[#E0E0E0] mb-4">
              Be the first to access FlexFi when we launch. Early adopters get
              premium benefits.
            </p>
            <Link to="/register">
              <button className="rounded-2xl border border-[#00FEFB] px-4 py-2 cursor-pointer hover:bg-[#00FEFB] hover:text-black transition duration-300 font-days-one">
                Join Waitlist
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-[#00FEFB33] mt-10 pt-4 flex flex-col md:flex-row justify-between items-center text-xs text-[#B0B0B0]">
        <p>© 2025 FlexFi. All rights reserved.</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <Link className="cursor-pointer" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="cursor-pointer" to="/terms-of-use">
            Terms of Use
          </Link>
          <Link className="cursor-pointer" to="/legal-notice">
            Legal
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
