export const products = {
  tshirt: {
    name: "Classic White T-Shirt",
    image: "https://picsum.photos/seed/tshirt/800/800",
    color: "#ffffff",
    accentColor: "#f3f4f6",
  },
  hoodie: {
    name: "Premium Black Hoodie",
    image: "https://picsum.photos/seed/hoodie/800/800",
    color: "#000000",
    accentColor: "#1f2937",
  },
  jacket: {
    name: "Navy Bomber Jacket",
    image: "https://picsum.photos/seed/jacket/800/800",
    color: "#1e3a8a",
    accentColor: "#1e40af",
  },
  sweatpants: {
    name: "Grey Lounge Pants",
    image: "https://picsum.photos/seed/pants/800/800",
    color: "#4b5563",
    accentColor: "#374151",
  },
  casual: {
    name: "Casual Overshirt",
    image: "https://picsum.photos/seed/casual/800/800",
    color: "#27272a",
    accentColor: "#18181b",
  },
  cap: {
    name: "Signature Cap",
    image: "https://picsum.photos/seed/coat/800/800",
    color: "#000000",
    accentColor: "#111827",
  },
};

export type ProductId = keyof typeof products;
