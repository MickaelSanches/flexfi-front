const Navbar = () => {
  return (
    <nav className="px-50 py-10 flex items-center justify-between">
      <img
        className="h-20 cursor-pointer transition-transform duration-300 hover:scale-105"
        src="/logo/flexfi-logo.webp"
        alt="logo flexfi"
      />
      <ul className="flex gap-10 text-white items-center">
        <li className="cursor-pointer relative group">
          <span className="transition-colors duration-300 group-hover:text-[#00FEFB]">
            Login
          </span>
          <div className="absolute left-0 -bottom-1 h-0.5 bg-accent w-0 group-hover:w-full transition-all duration-300"></div>
        </li>
        <li className="rounded-2xl border border-[#00FEFB] px-4 py-2 cursor-pointer hover:bg-[#00FEFB] hover:text-black transition duration-300">
          Join Waitlist
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
