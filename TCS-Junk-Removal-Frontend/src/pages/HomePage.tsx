import Hero from "../home-page/Hero";
import Gap from "../components/Gap";
import Services from "../home-page/Services";
import WhyUs from "../home-page/WhyUs";
export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Gap height={90}></Gap>
      <Hero></Hero>
      <Services></Services>
      <WhyUs></WhyUs>
    </main>
  );
}
