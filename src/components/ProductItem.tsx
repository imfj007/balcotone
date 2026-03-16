"use client";

import { useTexture } from "@react-three/drei";
import * as THREE from "three";
import { products, ProductId } from "@/data/products";

export type ProductItemProps = {
  productId?: ProductId;
  scale?: number;
};

export function ProductItem({
  productId = "tshirt",
  scale = 1.2,
  ...props
}: ProductItemProps) {
  const product = products[productId];
  const texture = useTexture(product.image);

  return (
    <group {...props} dispose={null} scale={scale}>
      {/* Front Face */}
      <mesh castShadow receiveShadow>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial 
          map={texture} 
          transparent 
          side={THREE.DoubleSide} 
          metalness={0.1}
          roughness={0.8}
        />
      </mesh>
      
      {/* Back Face (slightly offset to avoid z-fighting if needed, but DoubleSide is usually fine) */}
      {/* Adding a bit of "thickness" to make it feel more like a physical card/item if wanted */}
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial color={product.accentColor} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
