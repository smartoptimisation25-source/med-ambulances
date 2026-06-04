import { Header } from "@/components/sections/Header";
import { Hero } from "@/components/sections/Hero";
import { Promesses } from "@/components/sections/Promesses";
import { Services } from "@/components/sections/Services";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Destinations } from "@/components/sections/Destinations";
import { Zone } from "@/components/sections/Zone";
import { Reviews } from "@/components/sections/Reviews";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Footer } from "@/components/sections/Footer";
import { ScrollProgress } from "@/components/sections/ScrollProgress";
import { MobileCallBar } from "@/components/sections/MobileCallBar";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Header />
      <main>
        <Hero />
        <Promesses />
        <Services />
        <HowItWorks />
        <Destinations />
        <Zone />
        <Reviews />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCallBar />
    </>
  );
}
