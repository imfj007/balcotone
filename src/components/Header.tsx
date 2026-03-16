import React from "react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[100] flex items-center justify-between px-8 py-6 mix-blend-difference text-white">
      <Link href="/" className="flex items-center gap-2">
        <span className="text-2xl font-black uppercase tracking-tighter">Balcotone</span>
      </Link>
      
      <nav className="hidden md:flex items-center gap-8">
        <Link href="/collections" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400">Collections</Link>
        <Link href="/about" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400">About</Link>
        <Link href="/contact" className="text-sm font-bold uppercase tracking-widest hover:text-zinc-400">Contact</Link>
      </nav>

      <div className="flex items-center gap-6">
        <Link 
          href="/cart"
          className="hover:text-zinc-400 transition-colors"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"></path>
          </svg>
        </Link>
        <Link 
          href="https://www.linkedin.com/in/arooj-rajpoot-134229347" 
          target="_blank"
          className="hover:text-zinc-400 transition-colors"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96s38.5 17.3 38.5 38.5-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
          </svg>
        </Link>
        <Link 
          href="mailto:aroojrajpoot22999@gmail.com"
          className="hover:text-zinc-400 transition-colors"
        >
          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
          </svg>
        </Link>
      </div>
    </header>
  );
}
