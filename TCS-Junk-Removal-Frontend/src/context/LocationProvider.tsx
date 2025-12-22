import { useState, useEffect, type ReactNode } from "react";
import { LocationContext } from "./LocationContext";
import { allLocations } from "../data/LocationsData";
import type { Location } from "../data/LocationsData";
import { useLocation, matchPath } from "react-router-dom";

interface Props {
  children: ReactNode;
}

export default function LocationContextProvider({ children }: Props) {
  const [location, setLocation] = useState<Location | null>(null);

  const { pathname } = useLocation();

  const setLocationBySlug = (slug: string) => {
    const found = allLocations.find((value) => value.slug === slug);

    if (!found) {
      return;
    }

    window.sessionStorage.setItem("slug", slug);

    setLocation(found);
  };

  useEffect(() => {
    const match = matchPath("/:slug", pathname);

    const stored = window.sessionStorage.getItem("slug");

    if (stored) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocationBySlug(stored);
    }

    if (match && match.params.slug) {
      const slug = match.params.slug;

      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLocationBySlug(slug);
    }
  }, [pathname]);

  return (
    <LocationContext.Provider value={{ location, setLocationBySlug }}>
      {children}
    </LocationContext.Provider>
  );
}
