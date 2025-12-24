import { useParams } from "react-router-dom";
import { allLocations } from "../data/LocationsData";

export function useCurrentLocation() {
  const { slug } = useParams();
  console.log(slug);
  if (!slug) {
    return null;
  }

  return allLocations.find((s) => s.slug === slug) || null;
}

