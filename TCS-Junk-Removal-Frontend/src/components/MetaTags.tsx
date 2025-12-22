import { useLocation } from "../context/LocationContext";
import { useLocation as useRouterLocation } from "react-router-dom";

export default function MetaTags() {
  const { location } = useLocation();
  const { pathname } = useRouterLocation();

  const domain = "https://tcs-junk-removal.vercel.app";

  const cleanPath = pathname === "/" ? "" : pathname.replace(/\/$/, "");
  const canonicalUrl = `${domain}${cleanPath}`;

  return (
    <>
      <title>{location?.meta.title ?? "Your Local Junk Removal"}</title>
      <meta
        name="description"
        content={location?.meta.description ?? "Fast junk removal services"}
      />
      <link rel="canonical" href={canonicalUrl} />
    </>
  );
}
