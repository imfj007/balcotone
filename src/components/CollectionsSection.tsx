"use client";

import { Bounded } from "./Bounded";
import Link from "next/link";
import Image from "next/image";

const COLLECTIONS = [
  {
    id: "essentials",
    name: "Summer Essentials",
    image: "https://picsum.photos/seed/tshirt/800/800",
    description: "Daily staples for the modern man.",
  },
  {
    id: "outerwear",
    name: "Premium Outerwear",
    image: "https://picsum.photos/seed/jacket/800/800",
    description: "Structured layers for any weather.",
  },
  {
    id: "loungewear",
    name: "Cozy Loungewear",
    image: "https://picsum.photos/seed/hoodie/800/800",
    description: "Luxury comfort for refined relaxing.",
  },
];

export default function CollectionsSection() {
  return (
    <Bounded className="bg-zinc-950 py-24">
      <div className="flex flex-col items-center">
        <h2 className="text-4xl font-black uppercase tracking-widest text-white md:text-6xl">
          Collections
        </h2>
        <div className="mt-16 grid w-full gap-8 md:grid-cols-3">
          {COLLECTIONS.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.id}`}
              className="group relative overflow-hidden rounded-2xl bg-zinc-900 transition-all hover:scale-[1.02]"
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={collection.image}
                  alt={collection.name}
                  width={600}
                  height={800}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-8">
                <h3 className="text-2xl font-bold text-white">{collection.name}</h3>
                <p className="mt-2 text-zinc-400 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  {collection.description}
                </p>
                <span className="mt-4 inline-block font-bold text-white uppercase tracking-tighter">
                  View Collection →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </Bounded>
  );
}
