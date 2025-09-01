import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const nav = [
    { href: "#about", label: "ABOUT" },
    { href: "#experience", label: "EXPERIENCE" },
    { href: "#portfolio", label: "PORTFOLIO" },
  ];

  return (
    <header className="py-5 fixed w-full z-40 bg-white border-b border-[#2ea936]">
      <div className="flex items-center justify-between px-6 md:px-10">
        <a href="#home" className="font-black tracking-wide">● Yi-Lun.com</a>
        <button className="sm:hidden border px-3 py-2 rounded-xl" onClick={()=>setOpen(!open)} aria-label="menu">MENU ☰</button>
        <ul className="hidden sm:flex gap-6 text-sm">
          {nav.map(i => <li key={i.href}><a className="hover:opacity-80" href={i.href}>{i.label}</a></li>)}
        </ul>
      </div>
      {open && (
        <ul className="sm:hidden px-6 pb-4 text-sm">
          {nav.map(i => <li key={i.href} className="py-2 border-b"><a href={i.href}>{i.label}</a></li>)}
        </ul>
      )}
    </header>
  );
}
