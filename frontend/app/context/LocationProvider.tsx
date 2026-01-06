"use client";

import { useEffect, useState, type ReactNode } from "react";
import { usePathname } from "next/navigation";

import { LocationContext } from "./LocationContext";
import { allLocations, type Location } from "../data/LocationData";

interface Props {
  children: ReactNode;
}

export default function LocationContextProvider({ children }: Props) {
  const [location, setLocation] = useState<Location | null>(null);
  const pathname = usePathname();

  const setLocationBySlug = (slug: string) => {
    const found = allLocations.find((v) => v.slug === slug);
    if (!found) return;

    window.sessionStorage.setItem("slug", slug);
    setLocation(found);
  };

  useEffect(() => {
    if (!pathname) return;

    // example pathname: "/toronto" or "/toronto/services"
    const slugFromPath = pathname.split("/").filter(Boolean)[0]; // first segment

    const stored = window.sessionStorage.getItem("slug");

    // priority: URL slug > stored slug
    if (slugFromPath) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocationBySlug(slugFromPath);
      return;
    }

    if (stored) {
      setLocationBySlug(stored);
      return;
    }
  }, [pathname]);

  return (
    <LocationContext.Provider value={{ location, setLocationBySlug }}>
      {children}
    </LocationContext.Provider>
  );
}
