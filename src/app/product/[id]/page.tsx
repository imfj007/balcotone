"use client";

import { useParams } from "next/navigation";
import { Bounded } from "@/components/Bounded";
import { useState } from "react";
import Image from "next/image";

const PRODUCT_DETAILS = {
  tshirt: { name: "Classic White T-Shirt", price: "PKR 1,999", description: "The pillar of any modern wardrobe. Crafted from 100% premium long-staple cotton.", images: ["/tshirt.jpg", "/vneck.jpg", "/casual.jpg", "/sweatshirt.jpg"], sizes: ["S", "M", "L", "XL", "XXL"] },
  hoodie: { name: "Premium Black Hoodie", price: "PKR 5,499", description: "Ultimate comfort met with structured design. Heavyweight fleece.", images: ["/hoodie.jpg", "/sweatshirt.jpg", "/casual.jpg", "/tshirt.jpg"], sizes: ["S", "M", "L", "XL"] },
  jacket: { name: "Navy Bomber Jacket", price: "PKR 6,999", description: "A timeless silhouette refined for the modern man.", images: ["/jacket.jpg", "/coat.jpg", "/hoodie.jpg", "/casual.jpg"], sizes: ["M", "L", "XL"] },
  sweatpants: { name: "Grey Lounge Pants", price: "PKR 3,499", description: "The ultimate in relaxation. Tapered fit and breathable fabric.", images: ["/pants.jpg", "/shorts.jpg", "/casual.jpg", "/tshirt.jpg"], sizes: ["S", "M", "L", "XL"] },
  casual: { name: "Casual Overshirt", price: "PKR 2,999", description: "A versatile layer for any occasion.", images: ["/casual.jpg", "/tshirt.jpg", "/vneck.jpg", "/sweatshirt.jpg"], sizes: ["S", "M", "L", "XL"] },
  coat: { name: "Winter Coat", price: "PKR 6,999", description: "Premium winter coat for the coldest days.", images: ["/coat.jpg", "/jacket.jpg", "/hoodie.jpg", "/casual.jpg"], sizes: ["S", "M", "L", "XL"] },
  "v-neck": { name: "V-Neck Tee", price: "PKR 1,799", description: "Classic v-neck cut with premium cotton.", images: ["/vneck.jpg", "/tshirt.jpg", "/casual.jpg", "/sweatshirt.jpg"], sizes: ["S", "M", "L", "XL"] },
  sweatshirt: { name: "Crew Sweatshirt", price: "PKR 4,499", description: "Premium crew neck sweatshirt.", images: ["/sweatshirt.jpg", "/hoodie.jpg", "/tshirt.jpg", "/casual.jpg"], sizes: ["S", "M", "L", "XL"] },
  shorts: { name: "Cozy Shorts", price: "PKR 1,999", description: "Comfortable shorts for everyday wear.", images: ["/shorts.jpg", "/pants.jpg", "/casual.jpg", "/tshirt.jpg"], sizes: ["S", "M", "L", "XL"] },
};

export default function SingleProductPage() {
  const params = useParams();
  const id = params.id as keyof typeof PRODUCT_DETAILS;
  const product = PRODUCT_DETAILS[id] || PRODUCT_DETAILS.tshirt;
  const [selectedSize, setSelectedSize] = useState("");
  const [activeImage, setActiveImage] = useState(0);
  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <div className="grid gap-16 md:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="aspect-[3/4] overflow-hidden rounded-3xl bg-zinc-900 border border-zinc-800">
              <Image src={product.images[activeImage]} alt={product.name} width={800} height={1000} className="h-full w-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.images.map((img, idx) => (
                <button key={idx} onClick={() => setActiveImage(idx)} className={`aspect-square overflow-hidden rounded-xl bg-zinc-900 border-2 transition-all ${activeImage === idx ? "border-white" : "border-transparent"}`}>
                  <Image src={img} alt="" width={200} height={200} className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-col justify-center">
            <h1 className="text-5xl font-black uppercase tracking-tighter">{product.name}</h1>
            <p className="mt-4 text-3xl font-bold text-zinc-400">{product.price}</p>
            <p className="mt-8 text-xl leading-relaxed text-zinc-500">{product.description}</p>
            <div className="mt-12">
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-400">Select Size</h3>
              <div className="mt-4 flex flex-wrap gap-3">
                {product.sizes.map((size) => (
                  <button key={size} onClick={() => setSelectedSize(size)} className={`flex h-14 w-20 items-center justify-center rounded-xl border-2 font-bold transition-all ${selectedSize === size ? "border-white bg-white text-black" : "border-zinc-800 text-zinc-500 hover:border-zinc-500"}`}>
                    {size}
                  </button>
                ))}
              </div>
            </div>
            <button className="mt-12 w-full rounded-2xl bg-white py-6 text-xl font-black uppercase text-black transition-transform hover:scale-[1.02] active:scale-[0.98]">
              Add to Cart
            </button>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
