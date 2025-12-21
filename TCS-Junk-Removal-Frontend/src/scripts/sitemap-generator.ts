import { generateSitemap } from "sitemap-ts";
import { usaLocations } from "../data/LocationsData";

const usaSlugs = usaLocations.map((slug) => Object.keys(slug)[0] )

const dynamicRoutes = usaSlugs.map((loc) => `/locations/${loc}`);

generateSitemap({
  hostname: "https://tcs-junk-removal.vercel.app",
  dynamicRoutes: dynamicRoutes,
  exclude: ["/admin"], 
  outDir: "public",     
  changefreq: "weekly",
  priority: 0.8,
  lastmod: new Date(),
});
