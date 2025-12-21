import { useState, type ReactNode } from "react";
import { LocationContext } from "./LocationContext";
import { allLocations } from "../data/LocationsData";
import type { Location } from "../data/LocationsData";

interface Props {
  children: ReactNode;
}

export default function LocationContextProvider({ children }: Props) {
  const [location, setLocation] = useState<Location | null>(null);

  const setLocationBySlug = (slug: string) => {
    const found = allLocations.find((value) => value.slug === slug) || null;

    setLocation(found);
  };

  return (
    <LocationContext.Provider value={{ location, setLocationBySlug }}>
      {children}
    </LocationContext.Provider>
  );
}
