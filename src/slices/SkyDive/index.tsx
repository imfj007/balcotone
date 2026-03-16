"use client"

import { Bounded } from "@/components/Bounded";
import Scene from "./Scene";
import { View } from "@react-three/drei";

const SkyDive = (): JSX.Element => {
  return (
    <Bounded
      className="skydive h-screen"
    >
      <View className="h-screen w-screen">
        <Scene sentence="Luxury Comfort" />
      </View>
      <h2 className="sr-only">Luxury Comfort</h2>
    </Bounded>
  );
};

export default SkyDive;
