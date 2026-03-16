"use client";

import { Float } from "@react-three/drei";
import { ProductItem, ProductItemProps } from "./ProductItem";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingProductProps = {
  productId?: ProductItemProps["productId"];
  rotationIntensity?: number;
  floatSpeed?: number;
  floatingRange?: [number, number];
  floatIntensity?: number;
  children?: ReactNode;
};

const FloatingProduct = forwardRef<Group, FloatingProductProps>(
  (
    {
      productId = "tshirt",
      rotationIntensity = 1.5,
      floatSpeed = 7,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed}
          rotationIntensity={rotationIntensity}
          floatIntensity={floatIntensity}
          floatingRange={floatingRange}
        >
          {children}
          <ProductItem productId={productId} />
        </Float>
      </group>
    );
  },
);

FloatingProduct.displayName = "FloatingProduct";

export default FloatingProduct;
