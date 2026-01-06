"use client";

import Link from "next/link";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useEffect, useMemo, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { allLocations } from "../../data/LocationData";

gsap.registerPlugin(ScrollTrigger);

export default function NavBar() {
  const navbarRef = useRef<HTMLHeadElement>(null);
  const pathname = usePathname();
  const [storedSlug, setStoredSlug] = useState<string | null>(null);

  const slugFromPath = useMemo(() => {
    const first = pathname?.split("/").filter(Boolean)[0];
    return first ?? null;
  }, [pathname]);

  const isValidLocationSlug = useMemo(() => {
    if (!slugFromPath) return false;
    return allLocations.some((l) => l.slug === slugFromPath);
  }, [slugFromPath]);

  const homeSlug = useMemo(() => {
    if (isValidLocationSlug && slugFromPath) return slugFromPath;
    if (storedSlug) return storedSlug;
    return allLocations[0]?.slug ?? "";
  }, [isValidLocationSlug, slugFromPath, storedSlug]);

  useEffect(() => {
    // sync sessionStorage slug for non-location routes (e.g. /request) to still link back
    try {
      const existing = window.sessionStorage.getItem("slug");
      if (existing && existing !== storedSlug) {
        queueMicrotask(() => setStoredSlug(existing));
      }

      if (isValidLocationSlug && slugFromPath) {
        window.sessionStorage.setItem("slug", slugFromPath);
        if (slugFromPath !== storedSlug) {
          queueMicrotask(() => setStoredSlug(slugFromPath));
        }
      }
    } catch {
      // ignore (storage not available)
    }
  }, [isValidLocationSlug, slugFromPath, storedSlug]);

  useGSAP(() => {
    gsap.set(navbarRef.current, {
      position: "fixed",
      y: "0",
    });

    ScrollTrigger.create({
      start: 0,
      end: "max",
      onUpdate: (self) => {
        if (self.direction === -1) {
          gsap.to(navbarRef.current, {
            y: 0,
            duration: 0.5,
          });
        } else {
          gsap.to(navbarRef.current, {
            y: -100,
            duration: 0.5,
          });
        }
      },
    });
  }, []);

  return (
    <header
      ref={navbarRef}
      className=" fixed top-0 left-0 w-full h-[70px] bg-white shadow-md z-50"
    >
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between">
        <Link
          href={`/${homeSlug}`}
          className="flex items-center gap-3 sm:gap-4"
        >
          <Image
            className="w-[45px] h-[45px] sm:w-[60px] sm:h-[60px]"
            src="/Modified_Logo.svg"
            alt="Logo"
            width={180}
            height={60}
          />

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
        </Link>

        <Link
          href="/book"
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
