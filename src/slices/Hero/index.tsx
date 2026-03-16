"use client";

import { Bounded } from "@/components/Bounded";
import Button from "@/components/Button";
import { TextSplitter } from "@/components/TextSplitter";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
import { View } from "@react-three/drei";
import Scene from "./Scene";
// import { Bubbles } from "./Bubbles"; // Removed bubbles for a cleaner premium look

import { useStore } from "@/hooks/useStore";
import { useMediaQuery } from "@/hooks/useMediaQuery";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Hero = (): JSX.Element => {
  const ready = useStore((state) => state.ready);
  const isDesktop = useMediaQuery("(min-width: 768px)", true);

  useGSAP(
    () => {
      if (!ready && isDesktop) return;

      const introTL = gsap.timeline();

      introTL
        .set(".hero", { opacity: 1 })
        .from(".hero-header-word", {
          scale: 4,
          opacity: 0,
          ease: "power4.in",
          delay: 0.3,
          stagger: 0.8,
        })
        .from(
          ".hero-subheading",
          {
            opacity: 0,
            y: 30,
          },
          "+=.8",
        )
        .from(".hero-body", {
          opacity: 0,
          y: 10,
        })
        .from(".hero-button", {
          opacity: 0,
          y: 10,
          duration: 0.6,
        });

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.5,
        },
      });

      scrollTl
        .fromTo(
          "body",
          {
            backgroundColor: "#0a0a0a",
          },
          {
            backgroundColor: "#111827",
            overwrite: "auto",
          },
          1.5,
        )
        .from(".text-side-heading .split-char", {
          scale: 1.3,
          y: 40,
          rotate: -25,
          opacity: 0,
          stagger: 0.1,
          ease: "back.out(3)",
          duration: 0.5,
        })
        .from(".text-side-body", {
          y: 20,
          opacity: 0,
        });
    },
    { dependencies: [ready, isDesktop] },
  );

  return (
    <Bounded
      className="hero opacity-0"
    >
      {isDesktop && (
        <View className="hero-scene pointer-events-none sticky top-0 z-50 -mt-[100vh] hidden h-screen w-screen md:block">
          <Scene />
        </View>
      )}

      <div className="grid">
        <div className="grid h-screen place-content-center">
          <div className="grid auto-rows-min place-items-center text-center">
            <h1 className="hero-header text-7xl font-black uppercase leading-[.8] text-white md:text-[9rem] lg:text-[13rem]">
              <TextSplitter
                text="Balcotone"
                wordDisplayStyle="block"
                className="hero-header-word"
              />
            </h1>

            <div className="hero-subheading mt-12 text-5xl font-semibold text-zinc-400 lg:text-6xl">
              Premium Men's Essentials
            </div>

            <div className="hero-body text-2xl font-normal text-zinc-500 max-w-2xl mt-4">
              Redefining modern masculinity with timeless designs and superior comfort. Crafted for the ambitious man.
            </div>

            <Button
              buttonLink="#"
              buttonText="Shop Collection"
              className="hero-button mt-12"
            />
          </div>
        </div>
        <div className="text-side relative z-[80] grid h-screen items-center gap-4 md:grid-cols-2">
          <div>
            <h2 className="text-side-heading text-balance text-6xl font-black uppercase text-white lg:text-8xl">
              <TextSplitter text="Elevated Style" />
            </h2>
            <div className="text-side-body mt-4 max-w-xl text-balance text-xl font-normal text-zinc-400">
              Discover our latest collection of premium staple pieces designed to last a lifetime. From minimalist tees to structured outerwear.
            </div>
          </div>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
