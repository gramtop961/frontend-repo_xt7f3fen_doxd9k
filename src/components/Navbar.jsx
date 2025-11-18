import { Menu, Phone } from "lucide-react";
import { useState } from "react";

const NavLink = ({ href, children, onClick }) => (
  <a
    href={href}
    onClick={onClick}
    className="text-slate-200 hover:text-white transition-colors px-3 py-2"
  >
    {children}
  </a>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const handleClick = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/10 bg-slate-900/40 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-rose-300 via-pink-200 to-rose-400 shadow-inner" />
            <span className="font-semibold tracking-tight text-white">Prestige Beauty Salon</span>
          </a>

          <nav className="hidden md:flex items-center">
            <NavLink href="#about" onClick={(e)=>handleClick(e,'about')}>Rreth nesh</NavLink>
            <NavLink href="#services" onClick={(e)=>handleClick(e,'services')}>Shërbimet</NavLink>
            <NavLink href="#gallery" onClick={(e)=>handleClick(e,'gallery')}>Galeria</NavLink>
            <NavLink href="#booking" onClick={(e)=>handleClick(e,'booking')}>Rezervime</NavLink>
            <NavLink href="#contact" onClick={(e)=>handleClick(e,'contact')}>Kontakt</NavLink>
            <a href="tel:+35500000000" className="ml-4 inline-flex items-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-4 py-2 transition-colors">
              <Phone className="w-4 h-4" /> +355 xx xxx xxxx
            </a>
          </nav>

          <button className="md:hidden text-white" onClick={()=>setOpen(!open)} aria-label="Menu">
            <Menu />
          </button>
        </div>
      </div>
      {open && (
        <div className="md:hidden bg-slate-900/90 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-4 py-3 grid grid-cols-1">
            <NavLink href="#about" onClick={(e)=>handleClick(e,'about')}>Rreth nesh</NavLink>
            <NavLink href="#services" onClick={(e)=>handleClick(e,'services')}>Shërbimet</NavLink>
            <NavLink href="#gallery" onClick={(e)=>handleClick(e,'gallery')}>Galeria</NavLink>
            <NavLink href="#booking" onClick={(e)=>handleClick(e,'booking')}>Rezervime</NavLink>
            <NavLink href="#contact" onClick={(e)=>handleClick(e,'contact')}>Kontakt</NavLink>
          </div>
        </div>
      )}
    </header>
  );
}
