// src/data/locations.ts

const DEFAULT_PHONE = "(305) 555-0192";
const DEFAULT_EMAIL = "info@yourlocaljunkremoval.com";

export type CountryCode = "us" | "ca";

export type Location = {
  // URL-safe params (always lowercase)
  country: CountryCode; // "us" | "ca"
  region: string; // "fl", "on", etc (lowercase)
  city: string; // "hollywood", "fort-lauderdale" (lowercase)

  // UI-friendly display name
  name: string; // "Hollywood"

  phone: string;
  email: string;

  coordinates: {
    lat: number;
    lng: number;
  };

  meta: {
    title: string;
    description: string;
  };
};

export const usaLocations: Location[] = [
  {
    country: "us",
    region: "fl",
    city: "miami",
    name: "Miami",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.7617, lng: -80.1918 },
    meta: {
      title: "Junk Removal in Miami, FL | YourLocalJunkRemoval",
      description:
        "Fast, affordable junk removal services in Miami, FL. Same-day pickup available.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "fort-lauderdale",
    name: "Fort Lauderdale",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.1224, lng: -80.1373 },
    meta: {
      title: "Junk Removal in Fort Lauderdale, FL | YourLocalJunkRemoval",
      description:
        "Professional junk removal services in Fort Lauderdale, FL. Upfront pricing and fast service.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "hollywood",
    name: "Hollywood",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.0112, lng: -80.1495 },
    meta: {
      title: "Junk Removal in Hollywood, FL | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Hollywood, FL. Residential and commercial cleanouts.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "palm-beach",
    name: "Palm Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.7056, lng: -80.0364 },
    meta: {
      title: "Junk Removal in Palm Beach, FL | YourLocalJunkRemoval",
      description:
        "Reliable junk removal services in Palm Beach, FL. Same-day service available.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "boca-raton",
    name: "Boca Raton",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.3683, lng: -80.1289 },
    meta: {
      title: "Junk Removal in Boca Raton, FL | YourLocalJunkRemoval",
      description:
        "Full-service junk removal in Boca Raton, FL. Eco-friendly disposal.",
    },
  },
];

export const canadaLocations: Location[] = [
  {
    country: "ca",
    region: "on",
    city: "toronto",
    name: "Toronto",
    phone: "(647) 555-0123",
    email: "toronto@tcsjunkremoval.ca",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    meta: {
      title: "Junk Removal in Toronto, ON | TCS Junk Removal",
      description:
        "Reliable junk removal services in Toronto, ON. Residential, commercial, and construction cleanup.",
    },
  },
];

export const allLocations: Location[] = [...usaLocations, ...canadaLocations];

/**
 * Lookup by URL params (case-insensitive)
 * Example: getLocation("us", "fl", "hollywood")
 */
export function getLocation(
  country: string,
  region: string,
  city: string
): Location | undefined {
  const c = country.toLowerCase();
  const r = region.toLowerCase();
  const ci = city.toLowerCase();

  return allLocations.find(
    (l) => l.country === c && l.region === r && l.city === ci
  );
}

/** Build canonical path for a location */
export function toLocationPath(loc: Location) {
  return `/${loc.country}/${loc.region}/${loc.city}`;
}

/** Display helpers (UI only) */
export function formatRegion(region: string) {
  return region.toUpperCase(); // "fl" -> "FL"
}

export function formatCountry(country: CountryCode) {
  return country === "us" ? "USA" : "Canada";
}
