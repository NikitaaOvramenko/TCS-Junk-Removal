import { Link } from "react-router-dom";
import Logo from "../assets/Modified_Logo.svg?react";

export default function NavBar() {
  return (
    <header className="fixed top-0 left-0 w-full h-[90px] bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <div className="flex items-center gap-3 sm:gap-4">
          <Logo className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]" />

          <p
            className="
              text-black 
              font-regular
              leading-none
              tracking-[9%]

              

            text-[clamp(0.85rem,2.2vw,1.2rem)]
              
            "
          >
            YourLocalJunkRemoval
          </p>
        </div>

        <Link
          to="/book"
          className="
            bg-green-500 
            hover:bg-green-600 
            transition 
            text-white
            font-semibold 
            rounded-lg 
            text-center 

            py-1 
            px-5 
            text-sm

            sm:py-[6px] 
            sm:px-8 
            sm:text-md
          "
        >
          Book Online
        </Link>
      </div>
    </header>
  );
}
