import { Bounded } from "@/components/Bounded";
import Link from "next/link";

export default function ContactPage() {
  return (
    <main className="pt-32 min-h-screen bg-black text-white">
      <Bounded>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl font-black uppercase tracking-tighter mb-8">Get In Touch</h1>
          <p className="text-2xl text-zinc-500 mb-16">
            We'd love to hear from you. Whether you have a question about our collections or just want to talk style.
          </p>

          <div className="grid gap-8 md:grid-cols-2">
            <Link 
              href="mailto:aroojrajpoot22999@gmail.com"
              className="group bg-zinc-900 p-12 rounded-3xl border border-zinc-800 transition-all hover:bg-zinc-800"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">Email Us</h3>
              <p className="text-2xl font-bold group-hover:text-blue-400">aroojrajpoot22999@gmail.com</p>
            </Link>

            <Link 
              href="https://www.linkedin.com/in/arooj-rajpoot-134229347"
              target="_blank"
              className="group bg-zinc-900 p-12 rounded-3xl border border-zinc-800 transition-all hover:bg-zinc-800"
            >
              <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-500 mb-4">LinkedIn</h3>
              <p className="text-2xl font-bold group-hover:text-blue-400">arooj-rajpoot</p>
            </Link>
          </div>
        </div>
      </Bounded>
    </main>
  );
}
