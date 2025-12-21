import Hero from "../home-page/Hero";
import Services from "../home-page/Services";
import WhyUs from "../home-page/WhyUs";
import FAQ from "../home-page/FAQ";
import Gap from "../components/Gap";
import { ScrollUp } from "../hook/ScrollHook";
import { useEffect } from "react";
import { useLocation } from "../context/LocationContext";
import { useCurrentLocation } from "../hook/useCurrentLocation";

export default function HomePage() {
  ScrollUp();

  const location = useLocation();

  const currentLocation = useCurrentLocation();

  useEffect(() => {
    if (currentLocation?.slug) {
      location.setLocationBySlug(currentLocation.slug);
    }
  }, []);

  return (
    <main className="flex flex-col ">
      <Hero></Hero>
      <Gap height={70} color="white"></Gap>
      <Services></Services>
      <Gap height={70} color="white"></Gap>
      <WhyUs></WhyUs>
      <Gap height={70} color="white"></Gap>
      <FAQ></FAQ>

      {/* <Reviews></Reviews> */}
    </main>
  );
}
