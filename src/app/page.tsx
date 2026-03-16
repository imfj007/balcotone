import Hero from "@/slices/Hero";
import Carousel from "@/slices/Carousel";
import SkyDive from "@/slices/SkyDive";
import AlternatingText from "@/slices/AlternatingText";
import BigText from "@/slices/BigText";
import CollectionsSection from "@/components/CollectionsSection";

export const metadata = {
  title: "Balcotone | Minimalist Masculinity",
  description: "Premium men's clothing brand redefining modern masculinity with timeless designs and superior comfort.",
};

export default function HomePage() {
  return (
    <main className="bg-black">
      <Hero />
      <SkyDive />
      <AlternatingText />
      <BigText />
      <Carousel />
      <CollectionsSection />
    </main>
  );
}
