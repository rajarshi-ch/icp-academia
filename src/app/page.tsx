import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import BasicSection from "@/app/_components/basic-section";
import { getAllPosts, getRandomGlossaryItem } from "@/lib/api";
import Hero from "./_components/hero";
import { Providers } from "./providers";
import CoinPriceMarquee from "./_components/coin-price-marquee";
import LearnICPSection from "./_components/learn-icp-section";
import IcpCoinsSection from "./_components/icp-coins-section";

export default function Index() {

  const glossaryTerm = getRandomGlossaryItem();
  
  return (
    <Providers>
      <main>
        <Container>
          <Hero />
          <CoinPriceMarquee />
          <BasicSection glossaryTerm={glossaryTerm}/>
          <LearnICPSection />
          <IcpCoinsSection />
        </Container>
      </main>
    </Providers>
  );
}
