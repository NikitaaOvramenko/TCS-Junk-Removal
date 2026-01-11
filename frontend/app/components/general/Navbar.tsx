"use client";

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { allLocations } from "../../data/LocationData";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navbarRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // This will be "us/fl/miami" (no leading slash)
  const [storedLoc, setStoredLoc] = useState<string>("");

  useEffect(() => {
    // Read storage once on mount
    try {
      const saved = sessionStorage.getItem("loc");
      // eslint-disable-next-line react-hooks/set-state-in-effect
      if (saved) setStoredLoc(saved);
    } catch {}
  }, []);

  useEffect(() => {
    // Parse pathname
    const parts = (pathname || "").split("/").filter(Boolean); // ["us","fl","miami", ...]
    const has3 = parts.length >= 3;

    if (!has3) return;

    const country = parts[0]?.toLowerCase();
    const region = parts[1]?.toLowerCase();
    const city = parts[2]?.toLowerCase();

    // Check if this is a real location
    const exists = allLocations.some(
      (l) => l.country === country && l.region === region && l.city === city
    );

    if (!exists) return;

    const loc = `${country}/${region}/${city}`;

    // Save to session storage + state
    try {
      sessionStorage.setItem("loc", loc);
    } catch {}

    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (loc !== storedLoc) setStoredLoc(loc);
  }, [pathname, storedLoc]);

  // Decide where the "home" logo should go
  let homeHref = "/";
  if (storedLoc) homeHref = `/${storedLoc}`;
  else if (allLocations.length > 0) {
    // fallback to first location if storage empty
    homeHref = `/${allLocations[0].country}/${allLocations[0].region}/${allLocations[0].city}`;
  }

  // If your /book is NOT nested under /country/region/city, keep "/book"
  // If you WANT book page to be location-specific, do: const bookHref = `${homeHref}/book`;
  const bookHref = "/book";

  useGSAP(() => {
    gsap.set(navbarRef.current, { position: "fixed", y: "0" });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        gsap.to(navbarRef.current, {
          y: self.direction === -1 ? 0 : -100,
          duration: 0.5,
        });
      },
    });
  }, []);

  return (
    <header
      ref={navbarRef}
      className="fixed top-0 left-0 w-full h-[70px] bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <Link href={homeHref} className="flex items-center gap-3 sm:gap-4">
          <Image
            className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
            src="/Modified_Logo.svg"
            alt="Logo"
            width={180}
            height={60}
            priority
          />
          <p className="text-black font-regular leading-none tracking-[9%] text-[clamp(0.85rem,2.2vw,1.2rem)]">
            YourLocalJunkRemoval
          </p>
        </Link>

        <Link
          href={bookHref}
          className="bg-green-500 hover:bg-green-600 transition text-white font-semibold rounded-lg text-center py-1 px-5 text-sm sm:py-[6px] sm:px-8 sm:text-md"
        >
          Book Online
        </Link>
      </div>
    </header>
  );
}
