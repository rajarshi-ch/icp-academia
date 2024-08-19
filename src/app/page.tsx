import BasicSection from "@/app/_components/home/basic-section";
import { getRandomGlossaryItem } from "@/lib/api";
import Hero from "./_components/home/hero";
import CoinPriceMarquee from "./_components/home/coin-price-marquee";
import LearnICPSection from "./_components/home/learn-icp-section";
import IcpCoinsSection from "./_components/home/icp-coins-section";
import FaqSection from "./_components/home/faq";
import OtherNeutriiteProjects from "./_components/home/neutrinite-projects";

export default function Index() {
  const glossaryTerm = getRandomGlossaryItem();

  return (
    <main>
      <Hero />
      {/* <CoinPriceMarquee /> */}
      <OtherNeutriiteProjects />
      <BasicSection glossaryTerm={glossaryTerm} />
      <LearnICPSection />
      <IcpCoinsSection />
      <FaqSection />
    </main>
  );
}
