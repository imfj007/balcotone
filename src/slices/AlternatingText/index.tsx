"use client";

import { Bounded } from "@/components/Bounded";
import { View } from "@react-three/drei";
import Scene from "./Scene";
import clsx from "clsx";

const TEXT_ITEMS = [
  {
    heading: "Sourced with Care",
    body: "We only use the finest organic cotton and recycled materials. Quality you can feel, ethics you can trust.",
  },
  {
    heading: "Designed for Life",
    body: "Our garments are built to transcend trends. Timeless silhouettes that evolve with your personal style.",
  },
  {
    heading: "Crafted for You",
    body: "Every stitch is a testament to our commitment to excellence. Tailored fits for the discerning individual.",
  },
];

const AlternatingText = (): JSX.Element => {
  return (
    <Bounded
      className="alternating-text-container relative bg-black text-white"
    >
      <div>
        <div className="relative z-[100] grid">
          <View className="alternating-text-view absolute left-0 top-0 h-screen w-full">
            <Scene />
          </View>

          {TEXT_ITEMS.map((item, index) => (
            <div
              key={item.heading}
              className="alternating-section grid h-screen place-items-center gap-x-12 md:grid-cols-2"
            >
              <div
                className={clsx(
                  index % 2 === 0 ? "col-start-1" : "md:col-start-2",
                  "rounded-lg p-8 backdrop-blur-lg bg-white/5 border border-white/10",
                )}
              >
                <h3 className="text-balance text-6xl font-black uppercase tracking-tighter">
                  {item.heading}
                </h3>

                <p className="mt-4 text-xl text-zinc-400">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default AlternatingText;
