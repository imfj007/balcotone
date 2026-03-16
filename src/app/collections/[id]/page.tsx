"use client";

import { useParams } from "next/navigation";
import { Bounded } from "@/components/Bounded";
import Link from "next/link";
import Image from "next/image";

const PRODUCT_DATA = {
  essentials: [
    { id: "tshirt", name: "Classic T-Shirt", price: "$49", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800" },
    { id: "casual", name: "Casual Overshirt", price: "$59", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800" },
    { id: "v-neck", name: "V-Neck Tee", price: "$49", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800" },
  ],
  outerwear: [
    { id: "jacket", name: "Bomber Jacket", price: "$189", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" },
    { id: "hoodie", name: "Premium Hoodie", price: "$129", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800" },
    { id: "coat", name: "Winter Coat", price: "$249", image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800" },
  ],
  loungewear: [
    { id: "sweatpants", name: "Lounge Pants", price: "$89", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800" },
    { id: "sweatshirt", name: "Crew Sweatshirt", price: "$99", image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800" },
    { id: "shorts", name: "Cozy Shorts", price: "$49", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=800" },
  ],
};

export default function SingleCollectionPage() {
  const params = useParams();
  const id = params.id as keyof typeof PRODUCT_DATA;
  const products = PRODUCT_DATA[id] || [];

  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <h1 className="text-5xl font-black uppercase tracking-widest text-center mb-16">
          {id} Collection
        </h1>
        <div className="grid gap-12 md:grid-cols-3">
          {products.map((product) => (
            <div key={product.id} className="group">
              <Link href={`/product/${product.id}`}>
                <div className="aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={600}
                    height={800}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="mt-6 flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-zinc-400">{product.price}</p>
                </div>
                <button className="rounded-full bg-white px-4 py-2 text-sm font-bold text-black transition-colors hover:bg-zinc-200">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </Bounded>
    </main>
  );
}
