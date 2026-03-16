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
  texture.wrapS = THREE.ClampToEdgeWrapping;
  texture.wrapT = THREE.ClampToEdgeWrapping;
  return (
    <group {...props} dispose={null} scale={scale}>
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
      <mesh position={[0, 0, -0.01]}>
        <planeGeometry args={[1, 1.5]} />
        <meshStandardMaterial color={product.accentColor} side={THREE.BackSide} />
      </mesh>
    </group>
  );
}
