export const products = {
  tshirt: { name: "Classic White T-Shirt", image: "/tshirt.jpg", color: "#ffffff", accentColor: "#f3f4f6" },
  hoodie: { name: "Premium Black Hoodie", image: "/hoodie.jpg", color: "#000000", accentColor: "#1f2937" },
  jacket: { name: "Navy Bomber Jacket", image: "/jacket.jpg", color: "#1e3a8a", accentColor: "#1e40af" },
  sweatpants: { name: "Grey Lounge Pants", image: "/pants.jpg", color: "#4b5563", accentColor: "#374151" },
  casual: { name: "Casual Overshirt", image: "/casual.jpg", color: "#27272a", accentColor: "#18181b" },
  cap: { name: "Signature Cap", image: "/coat.jpg", color: "#000000", accentColor: "#111827" },
};
export type ProductId = keyof typeof products;
