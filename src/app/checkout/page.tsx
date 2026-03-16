import { Bounded } from "@/components/Bounded";

export default function CheckoutPage() {
  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <h1 className="text-4xl font-black uppercase tracking-widest mb-12 text-center">Checkout</h1>
        <div className="mx-auto max-w-2xl bg-zinc-900/50 p-12 rounded-3xl border border-zinc-800">
          <p className="text-center text-zinc-500 text-lg mb-8">This is a demo checkout page for Balcotone.</p>
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className="bg-zinc-800 border-none rounded-xl p-4 text-white" />
              <input type="text" placeholder="Last Name" className="bg-zinc-800 border-none rounded-xl p-4 text-white" />
            </div>
            <input type="email" placeholder="Email Address" className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white" />
            <input type="text" placeholder="Shipping Address" className="w-full bg-zinc-800 border-none rounded-xl p-4 text-white" />
            <div className="pt-8">
              <button disabled className="w-full rounded-2xl bg-zinc-700 py-6 text-xl font-black uppercase text-zinc-400 cursor-not-allowed">
                Complete Purchase
              </button>
            </div>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
