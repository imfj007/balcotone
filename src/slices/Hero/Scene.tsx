"use client";

import { Environment } from "@react-three/drei";
import FloatingProduct from "@/components/FloatingProduct";
import { useRef } from "react";
import { Group } from "three";
import ScrollTrigger from "gsap/ScrollTrigger";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useStore } from "@/hooks/useStore";

gsap.registerPlugin(useGSAP, ScrollTrigger);

type Props = {};

export default function Scene({}: Props) {

  const isReady = useStore((state) => state.isReady);

  const product1ref = useRef<Group>(null);
  const product2ref = useRef<Group>(null);
  const product3ref = useRef<Group>(null);
  const product4ref = useRef<Group>(null);
  const product5ref = useRef<Group>(null);

  const product1GroupRef = useRef<Group>(null);
  const product2GroupRef = useRef<Group>(null);

  const groupRef = useRef<Group>(null);

  const FLOAT_SPEED = 1.5;

  useGSAP(() => {
    if (
      !product1ref.current ||
      !product2ref.current ||
      !product3ref.current ||
      !product4ref.current ||
      !product5ref.current ||
      !product1GroupRef.current ||
      !product2GroupRef.current ||
      !groupRef.current
    )
      return;

    isReady();

    // Animation

    gsap.set(product1ref.current.position, { x: -1.5 });
    gsap.set(product1ref.current.rotation, { z: -0.5 });

    gsap.set(product2ref.current.position, { x: 1.5 });
    gsap.set(product2ref.current.rotation, { z: 0.5 });

    gsap.set(product3ref.current.position, { y: 5, z: 2 });
    gsap.set(product4ref.current.position, { x: 2, y: 4, z: 2 });
    gsap.set(product5ref.current.position, { y: -5 });

    const introTl = gsap.timeline({
      defaults: {
        duration: 3,
        ease: "back.out(1.4)",
      },
    });


    if (window.scrollY < 20) {
      introTl
      .from(product1GroupRef.current.position, { y: -5, x: 1 }, 0)
      .from(product1GroupRef.current.rotation, { z: 3 }, 0)
      .from(product2GroupRef.current.position, { y: 5, x: 1 }, 0)
      .from(product2GroupRef.current.rotation, { z: 3 }, 0);
    }



    const scrollTl = gsap.timeline({
      defaults: {
        duration: 2,
      },
      scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
      },
    });

    scrollTl
      .to(groupRef.current.rotation, { y: Math.PI * 2 })

      // product1
      .to(product1ref.current.position, { x: -0.2, y: -0.7, z: -2 }, 0)
      .to(product1ref.current.rotation, { z: 0.3 }, 0)

      // product2
      .to(product2ref.current.position, { x: 1, y: -0.2, z: -1 }, 0)
      .to(product2ref.current.rotation, { z: 0 }, 0)

      // product3
      .to(product3ref.current.position, { x: -0.3, y: 0.5, z: -1 }, 0)
      .to(product3ref.current.rotation, { z: -0.1 }, 0)

      // product4
      .to(product4ref.current.position, { x: 0, y: -0.3, z: 0.5 }, 0)
      .to(product4ref.current.rotation, { z: 0.3 }, 0)

      // product5
      .to(product5ref.current.position, { x: 0.3, y: 0.5, z: -0.5 }, 0)
      .to(product5ref.current.rotation, { z: -0.25 }, 0)

      .to(
        groupRef.current.position,
        { x: 1, duration: 3, ease: "sign.inOut" },
        1.3,
      );
  });

  return (
    <group ref={groupRef}>
      <group ref={product1GroupRef}>
        <FloatingProduct
          ref={product1ref}
          productId="hoodie"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <group ref={product2GroupRef}>
        <FloatingProduct
          ref={product2ref}
          productId="hoodie"
          floatSpeed={FLOAT_SPEED}
        />
      </group>

      <FloatingProduct ref={product3ref} productId="jacket" floatSpeed={FLOAT_SPEED} />

      <FloatingProduct
        ref={product4ref}
        productId="sweatpants"
        floatSpeed={FLOAT_SPEED}
      />
      <FloatingProduct ref={product5ref} productId="cap" floatSpeed={FLOAT_SPEED} />

      <Environment files="/hdr/lobby.hdr" environmentIntensity={1.5} />
    </group>
  );
}
