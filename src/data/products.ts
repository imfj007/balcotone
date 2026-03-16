export const products = {
  tshirt: {
    name: "Classic White T-Shirt",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#ffffff",
    accentColor: "#f3f4f6",
  },
  hoodie: {
    name: "Premium Black Hoodie",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#000000",
    accentColor: "#1f2937",
  },
  jacket: {
    name: "Navy Bomber Jacket",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#1e3a8a",
    accentColor: "#1e40af",
  },
  sweatpants: {
    name: "Grey Lounge Pants",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#4b5563",
    accentColor: "#374151",
  },
  casual: {
    name: "Casual Overshirt",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#27272a",
    accentColor: "#18181b",
  },
  cap: {
    name: "Signature Cap",
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    color: "#000000",
    accentColor: "#111827",
  },
};

export type ProductId = keyof typeof products;
