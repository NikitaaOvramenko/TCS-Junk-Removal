// src/data/locations.ts

const DEFAULT_PHONE = "(305) 555-0192";
const DEFAULT_EMAIL = "info@yourlocaljunkremoval.com";

export type Location = {
  slug: string;
  name: string;
  state?: string;
  province?: string;
  country: "USA" | "Canada";
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
    slug: "miami",
    name: "Miami",
    state: "FL",
    country: "USA",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: {
      lat: 25.7617,
      lng: -80.1918,
    },
    meta: {
      title: "Junk Removal in Miami, FL | YourLocalJunkRemoval",
      description:
        "Fast, affordable junk removal services in Miami, FL. Same-day pickup available.",
    },
  },
  {
    slug: "fort-lauderdale",
    name: "Fort Lauderdale",
    state: "FL",
    country: "USA",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: {
      lat: 26.1224,
      lng: -80.1373,
    },
    meta: {
      title: "Junk Removal in Fort Lauderdale, FL | YourLocalJunkRemoval",
      description:
        "Professional junk removal services in Fort Lauderdale, FL. Upfront pricing and fast service.",
    },
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    state: "FL",
    country: "USA",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: {
      lat: 26.0112,
      lng: -80.1495,
    },
    meta: {
      title: "Junk Removal in Hollywood, FL | YourLocalJunkRemoval",
      description:
        "Affordable junk removal in Hollywood, FL. Residential and commercial cleanouts.",
    },
  },
  {
    slug: "palm-beach",
    name: "Palm Beach",
    state: "FL",
    country: "USA",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: {
      lat: 26.7056,
      lng: -80.0364,
    },
    meta: {
      title: "Junk Removal in Palm Beach, FL | TCS Junk Removal",
      description:
        "Reliable junk removal services in Palm Beach, FL. Same-day service available.",
    },
  },
  {
    slug: "boca-raton",
    name: "Boca Raton",
    state: "FL",
    country: "USA",
    phone: DEFAULT_PHONE,
    email: DEFAULT_EMAIL,
    coordinates: {
      lat: 26.3683,
      lng: -80.1289,
    },
    meta: {
      title: "Junk Removal in Boca Raton, FL | TCS Junk Removal",
      description:
        "Full-service junk removal in Boca Raton, FL. Eco-friendly disposal.",
    },
  },
];

export const canadaLocations: Location[] = [
  {
    slug: "toronto",
    name: "Toronto",
    province: "ON",
    country: "Canada",
    phone: "(647) 555-0123",
    email: "toronto@tcsjunkremoval.ca",
    coordinates: {
      lat: 43.6532,
      lng: -79.3832,
    },
    meta: {
      title: "Junk Removal in Toronto, ON | TCS Junk Removal",
      description:
        "Reliable junk removal services in Toronto, ON. Residential, commercial, and construction cleanup.",
    },
  },
];

export const allLocations: Location[] = [...usaLocations, ...canadaLocations];

export function getLocationBySlug(slug: string): Location | undefined {
  return allLocations.find((l) => l.slug === slug);
}
