// src/data/locations.ts

const DEFAULT_PHONE = "(305) 555-0192";
const DEFAULT_EMAIL = "info@yourlocaljunkremoval.com";

export type CountryCode = "us" | "ca";

export type Location = {
  // URL-safe params (always lowercase)
  country: CountryCode; // "us" | "ca"
  region: string; // "fl", "on", "ca" etc (lowercase)
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

// --------------------
// USA LOCATIONS
// --------------------
export const usaLocations: Location[] = [
  // ===== FLORIDA — MIAMI / SOUTH FL =====
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
    city: "miami-beach",
    name: "Miami Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.7907, lng: -80.13 },
    meta: {
      title: "Junk Removal in Miami Beach, FL | YourLocalJunkRemoval",
      description:
        "Professional junk removal in Miami Beach, FL. Residential and commercial cleanouts.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "hialeah",
    name: "Hialeah",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.8576, lng: -80.2781 },
    meta: {
      title: "Junk Removal in Hialeah, FL | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Hialeah, FL. Fast pickup and upfront pricing.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "coral-gables",
    name: "Coral Gables",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.7215, lng: -80.2684 },
    meta: {
      title: "Junk Removal in Coral Gables, FL | YourLocalJunkRemoval",
      description:
        "Full-service junk removal in Coral Gables, FL. Residential and commercial hauling.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "kendall",
    name: "Kendall",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.6793, lng: -80.3173 },
    meta: {
      title: "Junk Removal in Kendall, FL | YourLocalJunkRemoval",
      description:
        "Reliable junk hauling in Kendall, FL. Same-day and next-day service available.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "doral",
    name: "Doral",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.8195, lng: -80.3553 },
    meta: {
      title: "Junk Removal in Doral, FL | YourLocalJunkRemoval",
      description:
        "Professional junk removal in Doral, FL. Cleanouts, hauling, and eco-friendly disposal.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "north-miami",
    name: "North Miami",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.8901, lng: -80.1867 },
    meta: {
      title: "Junk Removal in North Miami, FL | YourLocalJunkRemoval",
      description:
        "Fast junk removal in North Miami, FL. Residential and commercial cleanouts.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "aventura",
    name: "Aventura",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.9565, lng: -80.1392 },
    meta: {
      title: "Junk Removal in Aventura, FL | YourLocalJunkRemoval",
      description:
        "Affordable junk hauling in Aventura, FL with upfront pricing and quick scheduling.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "sunny-isles-beach",
    name: "Sunny Isles Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 25.939, lng: -80.1217 },
    meta: {
      title: "Junk Removal in Sunny Isles Beach, FL | YourLocalJunkRemoval",
      description:
        "Junk removal in Sunny Isles Beach, FL. Condo cleanouts and bulk pickup available.",
    },
  },

  // ===== BROWARD / PALM BEACH =====
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
        "Reliable junk removal in Fort Lauderdale, FL with upfront pricing and fast service.",
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
    city: "pompano-beach",
    name: "Pompano Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.2379, lng: -80.1248 },
    meta: {
      title: "Junk Removal in Pompano Beach, FL | YourLocalJunkRemoval",
      description:
        "Fast junk hauling in Pompano Beach, FL. Same-day pickups available.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "deerfield-beach",
    name: "Deerfield Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.3184, lng: -80.0998 },
    meta: {
      title: "Junk Removal in Deerfield Beach, FL | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Deerfield Beach, FL with eco-friendly disposal.",
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
        "Full-service junk removal in Boca Raton, FL. Cleanouts, hauling, and disposal.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "delray-beach",
    name: "Delray Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.4615, lng: -80.0728 },
    meta: {
      title: "Junk Removal in Delray Beach, FL | YourLocalJunkRemoval",
      description:
        "Professional junk hauling in Delray Beach, FL. Same-day service available.",
    },
  },
  {
    country: "us",
    region: "fl",
    city: "west-palm-beach",
    name: "West Palm Beach",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: { lat: 26.7153, lng: -80.0534 },
    meta: {
      title: "Junk Removal in West Palm Beach, FL | YourLocalJunkRemoval",
      description:
        "Reliable junk removal in West Palm Beach, FL. Residential and commercial hauling.",
    },
  },

  // ===== CALIFORNIA — LOS ANGELES AREA =====
  {
    country: "us",
    region: "ca",
    city: "los-angeles",
    name: "Los Angeles",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.0522, lng: -118.2437 },
    meta: {
      title: "Junk Removal in Los Angeles, CA | YourLocalJunkRemoval",
      description:
        "Full-service junk removal in Los Angeles, CA. Residential and commercial hauling.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "hollywood-ca",
    name: "Hollywood",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.098, lng: -118.3295 },
    meta: {
      title: "Junk Removal in Hollywood, CA | YourLocalJunkRemoval",
      description:
        "Fast junk removal services in Hollywood, CA. Same-day pickup available.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "santa-monica",
    name: "Santa Monica",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.0195, lng: -118.4912 },
    meta: {
      title: "Junk Removal in Santa Monica, CA | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Santa Monica, CA with eco-friendly disposal.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "culver-city",
    name: "Culver City",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.0211, lng: -118.3965 },
    meta: {
      title: "Junk Removal in Culver City, CA | YourLocalJunkRemoval",
      description:
        "Professional junk hauling in Culver City, CA. Cleanouts and bulk pickup available.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "glendale",
    name: "Glendale",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.1425, lng: -118.2551 },
    meta: {
      title: "Junk Removal in Glendale, CA | YourLocalJunkRemoval",
      description:
        "Fast, affordable junk removal in Glendale, CA. Same-day scheduling available.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "pasadena",
    name: "Pasadena",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.1478, lng: -118.1445 },
    meta: {
      title: "Junk Removal in Pasadena, CA | YourLocalJunkRemoval",
      description:
        "Trusted junk hauling in Pasadena, CA for residential and commercial clients.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "burbank",
    name: "Burbank",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 34.1808, lng: -118.309 },
    meta: {
      title: "Junk Removal in Burbank, CA | YourLocalJunkRemoval",
      description:
        "Junk removal services in Burbank, CA. Cleanouts, hauling, and eco-friendly disposal.",
    },
  },
  {
    country: "us",
    region: "ca",
    city: "long-beach",
    name: "Long Beach",
    phone: "(213) 555-0192",
    email: "la@yourlocaljunkremoval.com",
    coordinates: { lat: 33.7701, lng: -118.1937 },
    meta: {
      title: "Junk Removal in Long Beach, CA | YourLocalJunkRemoval",
      description:
        "Affordable junk hauling in Long Beach, CA. Same-day pickup available.",
    },
  },
];

// --------------------
// CANADA LOCATIONS (GTA)
// --------------------
export const canadaLocations: Location[] = [
  {
    country: "ca",
    region: "on",
    city: "toronto",
    name: "Toronto",
    phone: "(647) 555-0123",
    email: "toronto@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.6532, lng: -79.3832 },
    meta: {
      title: "Junk Removal in Toronto, ON | YourLocalJunkRemoval",
      description:
        "Reliable junk removal services in Toronto, ON for homes and businesses.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "north-york",
    name: "North York",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.7615, lng: -79.4111 },
    meta: {
      title: "Junk Removal in North York, ON | YourLocalJunkRemoval",
      description:
        "Fast junk removal in North York, ON. Cleanouts, hauling, and disposal.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "scarborough",
    name: "Scarborough",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.7764, lng: -79.2318 },
    meta: {
      title: "Junk Removal in Scarborough, ON | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Scarborough, ON. Same-day pickup available.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "etobicoke",
    name: "Etobicoke",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.6205, lng: -79.5132 },
    meta: {
      title: "Junk Removal in Etobicoke, ON | YourLocalJunkRemoval",
      description:
        "Professional junk hauling in Etobicoke, ON with upfront pricing.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "mississauga",
    name: "Mississauga",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.589, lng: -79.6441 },
    meta: {
      title: "Junk Removal in Mississauga, ON | YourLocalJunkRemoval",
      description:
        "Affordable junk removal services in Mississauga, ON. Same-day pickup available.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "brampton",
    name: "Brampton",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.7315, lng: -79.7624 },
    meta: {
      title: "Junk Removal in Brampton, ON | YourLocalJunkRemoval",
      description: "Fast and professional junk removal in Brampton, ON.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "markham",
    name: "Markham",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.8561, lng: -79.337 },
    meta: {
      title: "Junk Removal in Markham, ON | YourLocalJunkRemoval",
      description:
        "Trusted junk removal services in Markham, ON for residential and commercial clients.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "vaughan",
    name: "Vaughan",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.8372, lng: -79.5083 },
    meta: {
      title: "Junk Removal in Vaughan, ON | YourLocalJunkRemoval",
      description: "Eco-friendly junk hauling services in Vaughan, ON.",
    },
  },
  {
    country: "ca",
    region: "on",
    city: "richmond-hill",
    name: "Richmond Hill",
    phone: "(647) 555-0123",
    email: "gta@yourlocaljunkremoval.ca",
    coordinates: { lat: 43.8828, lng: -79.4403 },
    meta: {
      title: "Junk Removal in Richmond Hill, ON | YourLocalJunkRemoval",
      description:
        "Junk removal in Richmond Hill, ON. Fast pickup and clean service.",
    },
  },
];

// --------------------
// MERGED
// --------------------
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

export function toLocationPath(loc: Location) {
  return `/${loc.country}/${loc.region}/${loc.city}`;
}

export function formatRegion(region: string) {
  return region.toUpperCase(); // "fl" -> "FL"
}

export function formatCountry(country: CountryCode) {
  return country === "us" ? "USA" : "Canada";
}
