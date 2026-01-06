import Hero from "../components/home-components/Hero";
import FAQ from "../components/home-components/FAQ";
import Services from "../components/home-components/Services";
import WhyUs from "../components/home-components/WhyUs";
import Gap from "../components/general/Gap";
import { notFound } from "next/navigation";
import { getLocationBySlug } from "../data/LocationData";

type Props = {
  params: { city: string };
};

export default async function Home({ params }: Props) {
  const { city } = await params;
  const location = getLocationBySlug(city);
  if (!location) notFound();

  return (
    <div className="bg-white">
      <Hero locationName={location.name}></Hero>
      <Gap height={70} color="white"></Gap>
      <Services></Services>
      <Gap height={70} color="white"></Gap>
      <WhyUs></WhyUs>
      <Gap height={70} color="white"></Gap>
      <FAQ locationName={location.name}></FAQ>
    </div>
  );
}
