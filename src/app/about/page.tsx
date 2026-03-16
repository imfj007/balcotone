import { Bounded } from "@/components/Bounded";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <div className="grid gap-16 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-6xl font-black uppercase tracking-tighter mb-8 italic">The Balcotone Story</h1>
            <p className="text-xl text-zinc-400 leading-relaxed space-y-6">
              Founded in 2024, Balcotone was born from a simple observation: the modern man deserves essentials that combine the ease of streetwear with the precision of luxury tailoring.
              <br /><br />
              Our philosophy is rooted in "Minimalist Masculinity." We believe that true style isn't loud—it's felt. It's in the texture of the fabric, the fall of the silhouette, and the confidence it gives the wearer.
              <br /><br />
              Every piece in our collection is meticulously crafted with high-performance materials and timeless aesthetic principles.
            </p>
          </div>
          <div className="aspect-square rounded-3xl overflow-hidden bg-zinc-900 border-8 border-zinc-800 rotate-3">
             <Image src="https://picsum.photos/seed/tshirt/800/800" alt="Balcotone Workshop" width={800} height={800} className="w-full h-full object-cover" />
          </div>
        </div>
      </Bounded>
    </main>
  );
}
