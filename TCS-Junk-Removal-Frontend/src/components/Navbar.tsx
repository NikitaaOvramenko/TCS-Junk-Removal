import { Link } from "react-router-dom";
import Logo from "../assets/Untitled.svg?react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full h-[90px] bg-black shadow-md z-50">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        {/* Left Section: Logo + Name */}
        <div className="flex items-center gap-4">
          <Logo className="w-[65px] h-[65px]" />
          <p className="text-white text-3xl font-semibold">
            TCS - Junk Removal
          </p>
        </div>

        {/* Right Section: CTA Button */}
        <Link
          to={"/book"}
          className="bg-green-500 hover:bg-green-600 transition text-black font-semibold py-2 px-5 rounded-lg text-lg"
        >
          Book Online
        </Link>
      </div>
    </header>
  );
}
