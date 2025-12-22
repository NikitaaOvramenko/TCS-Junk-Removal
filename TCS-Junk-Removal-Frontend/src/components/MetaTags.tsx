import { useLocation } from "../context/LocationContext";

export default function MetaTags() {
  const { location } = useLocation();
  console.log(location?.meta.title);

  return (
    <>
      <title>{location?.meta.title ?? "Your Local Junk Removal"}</title>
      <meta
        name="description"
        content={location?.meta.description ?? "Fast junk removal services"}
      />
    </>
  );
}
