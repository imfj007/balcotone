import Hero from "@/slices/Hero";
import Carousel from "@/slices/Carousel";
import SkyDive from "@/slices/SkyDive";
import AlternatingText from "@/slices/AlternatingText";
import BigText from "@/slices/BigText";
import CollectionsSection from "@/components/CollectionsSection";

export default function Index() {
  return (
    <main>
      <Hero />
      <SkyDive />
      <AlternatingText />
      <BigText />
      <Carousel />
      <CollectionsSection />
    </main>
  );
}
