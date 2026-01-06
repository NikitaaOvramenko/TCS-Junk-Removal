import { useContext, createContext } from "react";
import type { Location } from "../data/LocationData";

type LocationContextType = {
  location: Location | null;
  setLocationBySlug: (slug: string) => void;
};

export const LocationContext = createContext<LocationContextType | null>(null);

export function useLocation() {
  const context = useContext(LocationContext);

  if (!context) {
    throw new Error("useLocation must be used within LocationContextProvider");
  }

  return context;
}
