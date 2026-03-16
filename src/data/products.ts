export const products = {
  tshirt: {
    name: "Classic White T-Shirt",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    color: "#ffffff",
    accentColor: "#f3f4f6",
  },
  hoodie: {
    name: "Premium Black Hoodie",
    image: "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=800",
    color: "#000000",
    accentColor: "#1f2937",
  },
  jacket: {
    name: "Navy Bomber Jacket",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800",
    color: "#1e3a8a",
    accentColor: "#1e40af",
  },
  sweatpants: {
    name: "Grey Lounge Pants",
    image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800",
    color: "#4b5563",
    accentColor: "#374151",
  },
  cap: {
    name: "Signature Cap",
    image: "https://images.unsplash.com/photo-1509198581295-469bf4753f1d?w=800",
    color: "#111827",
    accentColor: "#000000",
  },
};

export type ProductId = keyof typeof products;
