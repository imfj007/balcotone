"use client";

import FloatingProduct from "@/components/FloatingProduct";
import { ProductId, products } from "@/data/products";
import { Center, Environment, View } from "@react-three/drei";
import { useRef, useState } from "react";
import { ArrowIcon } from "./ArrowIcon";
import clsx from "clsx";
import { WavyCircles } from "./WavyCircles";
import { Group } from "three";

import gsap from "gsap";

const SPINS_ON_CHANGE = 4;

const CLOTHING_ITEMS: {
  productId: ProductId;
  color: string;
  name: string;
}[] = [
  { productId: "tshirt", color: "#111827", name: "Premium T-Shirt" },
  { productId: "hoodie", color: "#000000", name: "Essential Hoodie" },
  { productId: "jacket", color: "#1e3a8a", name: "Modern Jacket" },
  { productId: "sweatpants", color: "#374151", name: "Luxury Sweatpants" },
  { productId: "cap", color: "#000000", name: "Signature Cap" },
];

const Carousel = (): JSX.Element => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const productRef = useRef<Group>(null);

  function changeProduct(index: number) {
    if (!productRef.current) return;
    const nextIndex = (index + CLOTHING_ITEMS.length) % CLOTHING_ITEMS.length;

    const tl = gsap.timeline();

    tl.to(
      productRef.current.rotation,
      {
        y:
          index > currentIndex
            ? `-=${Math.PI * 2 * SPINS_ON_CHANGE}`
            : `+=${Math.PI * 2 * SPINS_ON_CHANGE}`,
        ease: "power2.inOut",
        duration: 1,
      },
      0,
    )
      .to(
        ".background, .wavy-circles-outer, .-wavy-circles-inner",
        {
          backgroundColor: CLOTHING_ITEMS[nextIndex].color,
          fill: CLOTHING_ITEMS[nextIndex].color,
          ease: "power2.inOut",
          duration: 1,
        },
        0,
      )
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: -10,
          opacity: 0,
        },
        0,
      )
      .to({}, { onStart: () => setCurrentIndex(nextIndex) }, 0.5)
      .to(
        ".text-wrapper",
        {
          duration: 0.2,
          y: 0,
          opacity: 1,
        },
        0.7,
      );
  }

  return (
    <section
      className="carousel grid-rows-[auto, 4fr, auto] relative grid h-screen justify-center overflow-hidden bg-black py-12 text-white"
    >
      <div className="background pointer-events-none absolute inset-0 bg-zinc-900 opacity-50" />

      <WavyCircles className="absolute left-1/2 top-1/2 h-[120vmin] -translate-x-1/2 -translate-y-1/2 text-zinc-800" />

      <h2 className="relative text-center text-5xl font-black uppercase tracking-widest">
        Our Collection
      </h2>

      <div className="grid grid-cols-[auto,auto,auto] items-center">
        <ArrowButton
          onClick={() => changeProduct(currentIndex - 1)}
          direction="left"
          label="Previous Item"
        ></ArrowButton>

        <View className="aspect-square h-[70vmin] min-h-40">
          <Center position={[0, 0, 1.5]}>
            <FloatingProduct
              floatIntensity={0.3}
              rotationIntensity={1}
              productId={CLOTHING_ITEMS[currentIndex].productId}
              ref={productRef}
            />
          </Center>
          <Environment
            files="/hdr/lobby.hdr"
            environmentIntensity={0.6}
            environmentRotation={[0, 3, 0]}
          />
          <directionalLight intensity={6} position={[0, 1, 1]} />
        </View>

        <ArrowButton
          onClick={() => changeProduct(currentIndex + 1)}
          direction="right"
          label="Next Item"
        ></ArrowButton>
      </div>

      <div className="text-area relative mx-auto text-center">
        <div className="text-wrapper text-4xl font-black uppercase">
          <p>{CLOTHING_ITEMS[currentIndex].name}</p>
        </div>

        <div className="mt-2 text-2xl font-normal opacity-90 text-zinc-400">
          Starting from $49.00
        </div>
      </div>
    </section>
  );
};

type ArrowButtonProps = {
  direction?: "right" | "left";
  label: string;
  onClick: () => void;
};

function ArrowButton({
  label,
  direction = "right",
  onClick,
}: ArrowButtonProps) {
  return (
    <button
      onClick={onClick}
      className="size-12 rounded-full border-2 border-white bg-white/10 p-3 opacity-85 ring-white focus:outline-none focus-visible:opacity-100 focus-visible:ring-4 md:size-16 lg:size-20"
    >
      <ArrowIcon className={clsx(direction === "right" && "-scale-x-100")} />
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default Carousel;
