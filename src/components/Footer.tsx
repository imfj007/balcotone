import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-white border-t border-zinc-800">
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-6 px-8 py-12 md:flex-row">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-black uppercase tracking-tighter">Balcotone</span>
        </Link>
        
        <p className="text-zinc-500 text-sm">
          © {new Date().getFullYear()} Balcotone. All rights reserved.
        </p>

        <div className="flex items-center gap-6">
          <Link 
            href="https://www.linkedin.com/in/arooj-rajpoot-134229347" 
            target="_blank"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96s38.5 17.3 38.5 38.5-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
            </svg>
          </Link>
          <Link 
            href="mailto:aroojrajpoot22999@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="24" width="24" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"></path>
            </svg>
          </Link>
        </div>
      </div>
    </footer>
  );
}