import { Bounded } from "@/components/Bounded";
import Link from "next/link";

export default function CartPage() {
  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <h1 className="text-4xl font-black uppercase tracking-widest mb-12">Your Cart</h1>
        <div className="flex flex-col items-center justify-center py-24 border-2 border-dashed border-zinc-800 rounded-3xl">
          <p className="text-2xl text-zinc-500">Your cart is currently empty.</p>
          <Link href="/collections" className="mt-8 rounded-full bg-white px-8 py-4 text-black font-bold uppercase transition-transform hover:scale-105">
            Continue Shopping
          </Link>
        </div>
      </Bounded>
    </main>
  );
}
