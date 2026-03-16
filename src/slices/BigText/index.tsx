"use client";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const BigText = (): JSX.Element => {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".big-text-section",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.5,
      },
    });

    tl.fromTo(".big-text-left", { x: "-10vw" }, { x: "0vw" })
      .fromTo(".big-text-right", { x: "10vw" }, { x: "0vw" }, "<")
      .fromTo(".big-text-center span", { x: (i) => (i % 2 === 0 ? "-20vw" : "20vw") }, { x: "0vw", stagger: 0.1 }, "<");
  });

  return (
    <section className="big-text-section min-h-screen w-screen overflow-hidden bg-black text-white">
      <h2 className="grid w-full gap-[3vw] py-10 text-center font-black uppercase leading-[.7]">
        <div className="big-text-left text-[34vw]">Style</div>
        <div className="big-text-center grid gap-[3vw] text-[34vw] md:flex md:text-[11vw]">
          <span className="inline-block">that </span>
          <span className="inline-block max-md:text-[27vw]">makes </span>
          <span className="inline-block max-md:text-[40vw]">you </span>
        </div>
        <div className="big-text-right text-[32vw]">Bold</div>
      </h2>
    </section>
  );
};
export default BigText;
