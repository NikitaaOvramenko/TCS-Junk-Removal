import Hero from "../home-page/Hero";
import Services from "../home-page/Services";
import WhyUs from "../home-page/WhyUs";
import FAQ from "../home-page/FAQ";
// import Reviews from "../home-page/Reviews";
import Gap from "../components/Gap";
import { ScrollUp } from "../hook/ScrollHook";
export default function HomePage() {
  ScrollUp();

  return (
    <main className="flex flex-col ">
      <div className="content flex flex-col ">
        <Hero></Hero>
        <Gap height={70} color="white"></Gap>
        <Services></Services>
        <Gap height={70} color="white"></Gap>
        <WhyUs></WhyUs>
        <Gap height={70} color="white"></Gap>
        <FAQ></FAQ>
        {/* <Reviews></Reviews> */}
      </div>
    </main>
  );
}
