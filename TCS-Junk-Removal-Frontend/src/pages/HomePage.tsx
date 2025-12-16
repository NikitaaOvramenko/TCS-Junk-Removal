import Hero from "../home-page/Hero";
import Gap from "../components/Gap";
import Services from "../home-page/Services";
import WhyUs from "../home-page/WhyUs";
import Reviews from "../home-page/Reviews";
export default function HomePage() {
  return (
    <main className="flex flex-col ">
      <Gap height={90}></Gap>
      <div className="content flex flex-col gap-8">
        <Hero></Hero>
        <Services></Services>
        <WhyUs></WhyUs>
        <Reviews></Reviews>
      </div>
    </main>
  );
}
